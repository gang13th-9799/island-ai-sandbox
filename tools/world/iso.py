import numpy as np, math
from PIL import Image, ImageDraw, ImageFilter
rng=np.random.default_rng(7)
TW,TH=96,48; HW,HH=TW//2,TH//2; EHS=27
FLAT=0.55
def tex(name,size=216,bright=1.0,flat=None):
  im=Image.open(name).convert('RGB').resize((size,size),Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.2))
  a=np.array(im).astype(float); m=a.reshape(-1,3).mean(0)
  f=FLAT if flat is None else flat; a=a*(1-f)+m*f          # Night Camp look: calm, low-detail ground
  return np.clip(a*bright,0,255)
T={'grass':tex('grass.jpg',bright=1.04),'dirt':tex('dirt.jpg'),'sand':tex('sand.jpg'),'path':tex('path.jpg',flat=0.35),'cobble':tex('cobble.jpg',size=288,flat=0.15)}
TS=216/4  # texture px per world tile
# synthetic water until Gemini water arrives
def water_tex(size=216):
  y,x=np.mgrid[0:size,0:size]/size*2*np.pi
  r=0.5+0.25*np.sin(x*3+np.sin(y*2)*1.5)+0.25*np.sin(y*4+np.cos(x*3))
  base=np.array([64,196,214]); hi=np.array([150,232,236])
  return base+(hi-base)*r[...,None]**2
T['rock']=tex('rock.jpg',flat=0.3); T['snow']=tex('snow.jpg',flat=0.2); _f=Image.open('bin_forest.jpg').convert('RGB').resize((144,144),Image.LANCZOS)
_f=np.array(Image.fromarray(np.tile(np.array(_f),(2,2,1))[:216,:216]).filter(ImageFilter.GaussianBlur(1.0))).astype(float)
_f=_f*0.4+_f.reshape(-1,3).mean(0)*0.6
T['forest']=np.clip(T['grass']*np.array([0.9,0.94,0.9]),0,255)  # forest = shaded grass; trees/bushes make the forest
T['water']=tex('shallow.jpg',size=288,flat=0.2); T['deep']=tex('deep.jpg',size=288,flat=0.25)
# value noise in world coords
G=rng.random((64,64))
def vnoise(u,v,scale):
  x=u*scale; y=v*scale; x0=np.floor(x).astype(int); y0=np.floor(y).astype(int); fx=x-x0; fy=y-y0
  fx=fx*fx*(3-2*fx); fy=fy*fy*(3-2*fy)
  g=lambda a,b: G[a%64,b%64]
  return (g(x0,y0)*(1-fx)+g(x0+1,y0)*fx)*(1-fy)+(g(x0,y0+1)*(1-fx)+g(x0+1,y0+1)*fx)*fy
def noise(u,v): return 0.6*vnoise(u,v,2.3)+0.4*vnoise(u+9.1,v+3.7,5.1)-0.5
def sample(name,u,v):
  t=T[name]; s=t.shape[0]
  x=((u-v)*TS*0.5)%s; y=((u+v)*TS*0.5)%s   # screen-aligned texture so it is not skewed
  return t[y.astype(int)%s,x.astype(int)%s]
PRI=['deep','water','sand','dirt','forest','grass','rock','snow']
def render_tile(tx,ty,C,P,pathdirs,ptex='path'):
  # C: 2x2 corner terrain names [[nw? ]] indexed C[du][dv]
  Y,X=np.mgrid[0:TH,-HW:HW]+0.5
  fu=(X/HW+Y/HH)/2; fv=(Y/HH-X/HW)/2
  inside=(fu>=-0.01)&(fu<=1.01)&(fv>=-0.01)&(fv<=1.01)
  u=tx+fu; v=ty+fv
  n=noise(u,v)
  out=sample(PRI[0],u,v).copy(); edge=np.zeros(fu.shape)
  for t in PRI[1:]:
    ind=lambda a,b: 1.0 if PRI.index(C[a][b])>=PRI.index(t) else 0.0
    w=ind(0,0)*(1-fu)*(1-fv)+ind(1,0)*fu*(1-fv)+ind(0,1)*(1-fu)*fv+ind(1,1)*fu*fv
    w=w+n*0.55
    if t=='grass' and (np.array([C[0][0],C[0][1],C[1][0],C[1][1]])=='forest').any():
      wf=sum((1.0 if C[a][b]=='forest' else 0.0)*wa for (a,b),wa in [((0,0),(1-fu)*(1-fv)),((1,0),fu*(1-fv)),((0,1),(1-fu)*fv),((1,1),fu*fv)])+n*0.55
      soft=(wf>0.3)
      a_=np.clip((w-0.3)/0.4,0,1)
      hard=(w>0.5)&~soft
      a_=np.where(soft,a_,hard.astype(float))[...,None]
      out=out*(1-a_)+sample(t,u,v)*a_
      continue
    m=w>0.5
    out[m]=sample(t,u,v)[m]
    edge=np.maximum(edge,np.clip(1-np.abs(w-0.5)/0.035,0,1)*(w>0.42))
    if t=='water':
      pass
    if t=='sand':  # shore foam on the water side
      foam=(w>0.38)&(w<=0.5)
      out[foam]=out[foam]*0.35+np.array([245,252,250])*0.65
  # outlines between terrains (soft dark line)
  out=out*(1-0.18*edge[...,None])+np.array([92,70,40])*0.18*edge[...,None]
  if P:  # path: segments from centre to connected edge midpoints
    d=np.full(fu.shape,9.0)
    mids={'u-':(0,.5),'u+':(1,.5),'v-':(.5,0),'v+':(.5,1)}
    segs=[mids[k] for k in pathdirs] or [(.5,.5)]
    for (a,b) in segs:
      px,py=fu-.5,fv-.5; qx,qy=a-.5,b-.5; L=qx*qx+qy*qy
      t_=np.clip((px*qx+py*qy)/L,0,1) if L>0 else 0
      d=np.minimum(d,np.hypot(px-t_*qx,py-t_*qy))
    r=0.24+n*0.10
    a_=np.clip((r-d)/0.06,0,1)[...,None]          # soft feathered edge, no outline
    out=out*(1-a_)+sample(ptex,u,v)*a_
    rim=np.clip(1-np.abs(d-r+0.02)/0.03,0,1)[...,None]*0.25
    out=out*(1-rim)+np.array([236,214,170])*rim
  rgba=np.dstack([np.clip(out,0,255),inside*255]).astype(np.uint8)
  return Image.fromarray(rgba)
def wtex(name,crop):
  im=Image.open(name).convert('RGB'); w,h=im.size; im=im.crop((0,int(h*crop),w,h)).resize((256,256),Image.LANCZOS)
  return np.array(im).astype(float)
WT={'ice':wtex('wall_ice.jpg',0.075),'sand':wtex('wall_sand.jpg',0.11),'dirt':wtex('wall_dirt.jpg',0.06),'rock':wtex('wall_rock.jpg',0.14)}
def wall_face2(w,h,side,u0,kind):
  t=WT[kind]; s=t.shape[0]
  Y,X=np.mgrid[0:h,0:w].astype(float)
  ytop=(HH+X*HH/HW) if side=='L' else (TH-X*HH/HW)
  vy=np.clip(Y-ytop,0,None)
  col=t[(vy*2.2).astype(int)%s,((X+u0*HW)*1.4).astype(int)%s]*(0.82 if side=='L' else 1.0)
  # grass lip on dirt walls
  if kind in ('dirt','sand','ice'):
    lip=(6+4*np.sin((X+u0*HW)*0.45)+3*np.sin((X+u0*HW)*1.3))*(0.6 if kind=='sand' else 1.1 if kind=='ice' else 1)
    g=vy<lip
    gc=T[{'dirt':'grass','sand':'sand','ice':'snow'}[kind]][(vy.astype(int))%216,((X+u0*HW)).astype(int)%216]*0.92
    col[g]=gc[g]
    edge=(vy>=lip)&(vy<lip+2); col[edge]=col[edge]*(0.6 if kind=='dirt' else 0.85 if kind=='ice' else 0.9)
  return col
def wall_face(w,h,side,u0):
  t=T['dirt']; s=t.shape[0]
  Y,X=np.mgrid[0:h,0:w]
  col=t[(Y*1.5).astype(int)%s,((X+u0*HW)*1.0).astype(int)%s]*(0.62 if side=='L' else 0.78)
  col=col*(1-0.25*Y/h)[...,None]
  return col
WK={}
def render_map(N,Cg,E,Pset,wk=None,top=None):
  global WK; WK=wk or {}; top=top or {}
  W=(N+2)*TW; H=(N+3)*TH+EHS*3
  img=Image.new('RGBA',(W,H),(120,200,215,255))
  ox=W//2; oy=TH+EHS*2
  for s in range(2*N):
    for tx in range(N):
      ty=s-tx
      if ty<0 or ty>=N: continue
      C=[[Cg[tx][ty],Cg[tx][ty+1]],[Cg[tx+1][ty],Cg[tx+1][ty+1]]]
      if (tx,ty) in top: C=[[top[(tx,ty)]]*2]*2
      dirs=[]
      if (tx,ty) in Pset:
        for k,(a,b) in {'u-':(-1,0),'u+':(1,0),'v-':(0,-1),'v+':(0,1)}.items():
          if (tx+a,ty+b) in Pset: dirs.append(k)
      tile=render_tile(tx,ty,C,(tx,ty) in Pset,dirs,Pset.get((tx,ty),'path') if isinstance(Pset,dict) else 'path')
      e=E[tx][ty]; sx=ox+(tx-ty)*HW; sy=oy+(tx+ty)*HH-e*EHS
      # side walls toward the viewer (+u -> right-down face, +v -> left-down face)
      for nb,side in [((tx,ty+1),'L'),((tx+1,ty),'R')]:
        en=E[nb[0]][nb[1]] if nb[0]<N and nb[1]<N else 0
        if e>en:
          hgt=(e-en)*EHS
          face=wall_face2(HW,hgt+TH,side,tx+ty if side=='L' else tx-ty,WK.get((tx,ty),'dirt'))
          poly=Image.new('L',(HW,hgt+TH),0); d=ImageDraw.Draw(poly)
          if side=='L': d.polygon([(0,HH),(HW,TH),(HW,TH+hgt),(0,HH+hgt)],fill=255); X0=sx-HW
          else: d.polygon([(0,TH),(HW,HH),(HW,HH+hgt),(0,TH+hgt)],fill=255); X0=sx
          fimg=Image.fromarray(np.dstack([face,np.array(poly)]).astype(np.uint8))
          img.alpha_composite(fimg,(X0,sy))
          d2=ImageDraw.Draw(img)
          if side=='L': d2.line([(sx-HW,sy+HH+hgt),(sx,sy+TH+hgt)],fill=(70,45,30,255),width=2)
          else: d2.line([(sx,sy+TH+hgt),(sx+HW,sy+HH+hgt)],fill=(70,45,30,255),width=2)
      img.alpha_composite(tile,(sx-HW,sy))
  return img
