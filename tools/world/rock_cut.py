import numpy as np, random, math
from PIL import Image, ImageDraw
from scipy import ndimage
def cut(sub):
  sub=sub.copy(); d=np.sqrt(((sub-[240,20,240])**2).sum(-1))
  bl,_=ndimage.label(d<150); ids=set(np.unique(np.concatenate([bl[0],bl[-1],bl[:,0],bl[:,-1]])))-{0}
  m=~np.isin(bl,list(ids))
  pl,pn=ndimage.label((d<125)&m)
  for i in range(1,pn+1):
    if (pl==i).sum()>30 and d[pl==i].mean()<75: m[pl==i]=False
  lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=8)); sz=ndimage.sum(m,lab,range(1,n+1))
  keep=np.isin(lab,[i+1 for i,s in enumerate(sz) if s>25])&m
  # drop pale grid lines (thin long components)
  edge=keep&~ndimage.binary_erosion(keep,iterations=3)
  sp=np.clip(np.minimum(sub[...,0],sub[...,2])-sub[...,1]+15,0,None)*(edge|(np.minimum(sub[...,0],sub[...,2])-sub[...,1]>60)); sub[...,0]-=sp; sub[...,2]-=sp
  al=ndimage.binary_erosion(keep,iterations=1)
  return Image.fromarray(np.dstack([np.clip(sub,0,255),al*255]).astype(np.uint8))
def crack(im,seed):
  random.seed(seed); im=im.copy(); arr=np.array(im); al=arr[...,3]>0
  ys,xs=np.where(al); x0,x1,y0,y1=xs.min(),xs.max(),ys.min(),ys.max(); w,h=x1-x0,y1-y0
  lay=Image.new('RGBA',im.size,(0,0,0,0)); d=ImageDraw.Draw(lay)
  def branch(x,y,ang,L,wd,dep):
    pts=[(x,y)]
    for k in range(5):
      ang+=random.uniform(-0.5,0.5); x+=math.cos(ang)*L/5; y+=math.sin(ang)*L/5; pts.append((x,y))
    d.line(pts,fill=(52,36,32,255),width=wd)
    if dep<1:
      for _ in range(2):
        i=random.randint(1,4); branch(pts[i][0],pts[i][1],ang+random.choice([-1,1])*random.uniform(0.6,1.2),L*0.55,max(3,wd-2),dep+1)
  cx,cy=x0+w*0.5,y0+h*0.35
  for a0 in (1.4,0.3,2.7):
    branch(cx+random.uniform(-w*.1,w*.1),cy,a0+random.uniform(-.3,.3),min(w,h)*0.5,6,0)
  rgb=arr[...,:3].astype(int); stone=al&((rgb.max(-1)-rgb.min(-1))<45)&(rgb.mean(-1)<190); stone=ndimage.binary_erosion(stone,iterations=2)
  la=np.array(lay); la[...,3]=la[...,3]*stone; im.alpha_composite(Image.fromarray(la))
  # chips at base
  im2=Image.new('RGBA',(im.width,im.height),(0,0,0,0)); im2.alpha_composite(im)
  dd=ImageDraw.Draw(im2)
  base=arr[al][:,:3].mean(0).astype(int)
  for k in range(9):
    px=x0+random.uniform(-0.05,1.05)*w; py=y1-random.uniform(-4,14); r=random.uniform(4,8)
    if px<4 or px>im.width-6 or py>im.height-6: continue
    pts=[(px+r*math.cos(t),py+r*0.7*math.sin(t)) for t in [0,1.9,3.4,4.9]]
    dd.polygon(pts,fill=tuple(base)+(255,),outline=(52,36,32,255))
  return im2
def sheet(F,names,make_crack):
  a=np.array(Image.open(F).convert('RGB')).astype(int); H,W=a.shape[:2]; CW,CH=W//3,H//3; ins=10
  out=Image.new('RGBA',(W,H),(120,180,70,255))
  for r in range(3):
    ims=[cut(a[r*CH+ins:(r+1)*CH-ins,c*CW+ins:(c+1)*CW-ins]) for c in range(3)]
    if r in make_crack: ims[1]=crack(ims[0],r)
    for c,im in enumerate(ims):
      im.save(f'rock_{names[r]}_{["full","cracked","rubble"][c]}.png'); out.alpha_composite(im,(c*CW+ins,r*CH+ins))
  return out
sheet('rocks.jpg',['gray','moss','tall'],[2]).convert('RGB').save('/mnt/user-data/outputs/rocks_cut.png')
sheet('ores1.jpg',['copper','coal','tin'],[0,1,2]).convert('RGB').save('/mnt/user-data/outputs/ores1_cut.png')
sheet('ores2.jpg',['iron','gold','crystal'],[0,1,2]).convert('RGB').save('/mnt/user-data/outputs/ores2_cut.png')
