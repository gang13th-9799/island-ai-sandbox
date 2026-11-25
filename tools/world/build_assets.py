import numpy as np, io, base64, json, glob
from PIL import Image, ImageFilter
from props import extract
RES=2.0     # sprite pixels per world px
HUMAN=46
def b64(im,q=82):
  bio=io.BytesIO(); im.save(bio,'WEBP',quality=q,method=6); return 'data:image/webp;base64,'+base64.b64encode(bio.getvalue()).decode()
SP={}
def kind(name,files,rel):
  ims=[Image.open(f).convert('RGBA') for f in files]
  W=max(i.width for i in ims); H=max(i.height for i in ims)
  ims=[i if i.size==(W,H) else i.crop((0,0,W,H)) for i in ims]
  bb=ims[0].getbbox(); ax=(bb[0]+bb[2])/2; ay=bb[3]-3
  u=[i.getbbox() for i in ims if i.getbbox()]; ub=(min(b[0] for b in u),min(b[1] for b in u),max(b[2] for b in u),max(b[3] for b in u))
  s=rel*HUMAN*RES/(bb[3]-bb[1])
  out=[]
  for i in ims:
    c=i.crop(ub); c=c.resize((max(1,round(c.width*s)),max(1,round(c.height*s))),Image.LANCZOS); out.append(b64(c))
  SP[name]={'img':out,'ax':round((ax-ub[0])*s/RES,2),'ay':round((ay-ub[1])*s/RES,2),'w':round((ub[2]-ub[0])*s/RES,1),'h':round((ub[3]-ub[1])*s/RES,1)}
T=lambda k,sts: [f'tree_{k}_{s}.png' for s in sts]
kind('oak',T('oak',['full','damaged','stump']),2.3)
kind('pine',T('pine',['full','damaged','stump']),2.4)
kind('fruit',T('fruit',['full','picked','damaged','stump']),1.9)
kind('palm',T('palm',['full','picked','damaged','stump']),2.4)
for b in ['green','pink','purple']: kind('bush_'+b,[f'bush_{b}_{s}.png' for s in ['full','damaged','stub']],0.6)
for b in ['blue','red']: kind('bush_'+b,[f'bush_{b}_{s}.png' for s in ['full','picked','damaged','stub']],0.62)
for g,r in [('round',0.3),('tall',0.5),('wheat',0.58),('clover',0.2),('fern',0.42),('reed',0.45)]: kind('grass_'+g,[f'g_{g}_{i}.png' for i in range(3)],r)
for k,r in [('gray',0.42),('moss',0.62),('tall',0.95),('copper',0.5),('coal',0.5),('tin',0.5),('iron',0.55),('gold',0.55),('crystal',0.65)]:
  kind('rock_'+k,[f'rock_{k}_{s}.png' for s in ['full','cracked','rubble']],r)
for k,r in [('gray2',0.5),('moss2',0.72),('tall2',0.95),('iron2',0.58),('gold2',0.6),('crystal2',0.68)]:
  kind('rock_'+k,[f'rock_{k}_{s}.png' for s in ['full','cracked','rubble']],r)
for c,r in [('fire',0.38),('bench',0.6),('fence',0.62),('barrel',0.55),('crate',0.48),('hay',0.62)]: kind('camp_'+c,[f'c_{c}_{i}.png' for i in range(3)],r)
AN={}
LEGS={k:[] for k in ['deer','boar','rabbit','goat','wolf','leopard','fish','butterfly','bee','firefly','scorpion','monitor','cobra','turtle','frog','croc']}
# per-animal back line, measured by eye on each sheet: armor from rump to shoulder, wings over the front legs
SPAN={'deer':(0.12,0.58,0.48,0.58),'boar':(0.12,0.66,0.52,0.64),'rabbit':(0.08,0.5,0.3,0.45),'goat':(0.1,0.56,0.45,0.56),
      'wolf':(0.14,0.6,0.48,0.6),'leopard':(0.12,0.62,0.5,0.62),'fish':(0.2,0.7,0.45,0.6)}
ANRES=4   # animals are stored sharper: the map zooms in a lot
for n,rel in [('deer',1.1),('boar',0.74),('rabbit',0.84),('goat',0.93),('wolf',0.8),('leopard',0.75),('fish',0.54),('butterfly',0.52),('bee',0.5),('firefly',0.5),('scorpion',0.5),('monitor',0.55),('cobra',0.62),('turtle',0.5),('frog',0.5),('croc',0.48)]:
  import os
  ims=[Image.open(f'/home/claude/fauna/{n}_{i}.png').convert('RGBA') for i in range(6) if os.path.exists(f'/home/claude/fauna/{n}_{i}.png')]
  if n=='boar': ims=[im.transpose(Image.FLIP_LEFT_RIGHT) for im in ims]      # Gemini drew the boar facing left
  sc=rel*HUMAN*ANRES/ims[0].height
  AN[n]=[]
  for pi,im in enumerate(ims):
    q=im.resize((max(1,round(im.width*sc)),max(1,round(im.height*sc))),Image.LANCZOS)
    al=np.array(q)[...,3]>100; H_,W_=al.shape
    cols=np.where(al.any(0))[0]; x0,x1=cols.min(),cols.max(); bw=x1-x0
    tops={x:np.where(al[:,x])[0].min() for x in cols}
    def band(f0,f1):
      xs=[x for x in cols if x0+bw*f0<=x<=x0+bw*f1]; return xs
    # body thickness from the middle columns (top of back to bottom of belly, ignoring legs)
    def topat(f0,f1):
      xs=band(f0,f1); return float(np.mean(xs)), float(np.mean([tops[x] for x in xs]))
    # body rows = upper part of the animal without legs: rows where the body is wide
    rows=np.where(al.sum(1)>bw*0.35)[0]; by0,by1=(rows.min(),rows.max()) if len(rows) else (0,H_)
    # head: front 25%; ear = highest point there; horns go just behind/beside the ear, a little below its tip
    hx_=band(0.75,1.0); ex=min(hx_,key=lambda x:tops[x]); ey=tops[ex]
    hb=[x for x in hx_ if tops[x]<=ey+(by1-by0)*0.6]
    hx,hy=ex-bw*0.03, ey+(np.median([tops[x] for x in hb])-ey)*0.6+ (by1-by0)*0.12
    # wings: on the back above the front legs; armor: middle of the back
    wx=None; ax_,ay_=topat(0.4,0.55)
    # tail: the butt = back-most body point in the upper half of the body
    up=[y for y in range(int(by0),int(by0+(by1-by0)*0.6)+1) if al[y].any()]
    bx_l=[(np.where(al[y])[0].min(),y) for y in up]; tx,ty=min(bx_l) if bx_l else (x0,by0)
    hx,hy,bx,by,rx,ry=hx,hy,0,0,tx+bw*0.04,ty
    # armor: measured on each animal's own back line (rump -> shoulders), with its slope
    # measure THIS animal: leg columns below the belly -> front legs / hind legs
    belly=int(by0+(by1-by0)*0.85)
    legc=[x for x in cols if al[belly:,x].any()] if belly<H_ else []
    midx=x0+bw*0.5
    fl=[x for x in legc if x>midx]; hl=[x for x in legc if x<=midx]
    fx=float(np.mean(fl)) if fl else x0+bw*0.65; hxl=float(np.mean(hl)) if hl else x0+bw*0.25
    def topx(x): xs=[c for c in cols if abs(c-x)<=bw*0.04]; return float(np.mean([tops[c] for c in xs]))
    p1=(hxl,topx(hxl)); p2=(fx,topx(fx))
    LEGS[n].append((round((fx-W_/2)/ANRES,1),round((hxl-W_/2)/ANRES,1)))
    arm=[(p1[0]+p2[0])/2,(p1[1]+p2[1])/2, (p2[0]-p1[0])*1.25/ANRES, float(np.arctan2(p2[1]-p1[1],p2[0]-p1[0]))]
    bx,by=p2[0]-bw*0.03, p2[1]
    extra={'armor':None}
    f=lambda x,y:[round((x-W_/2)/ANRES,2),round((y-H_)/ANRES,2)]
    AN[n].append({'img':b64(q),'w':round(q.width/ANRES,2),'h':round(q.height/ANRES,2),'head':f(hx,hy),'back':f(bx,by),'rear':f(rx,ry),'mid':f(ax_,ay_),'arm':f(arm[0],arm[1])+[round(arm[2],2),round(arm[3],3)]})
MU={}
for f in sorted(glob.glob('/home/claude/mut/*.png')):
  k=f.split('/')[-1][:-4]; im=Image.open(f).convert('RGBA')
  if not k.startswith('skin'): im.thumbnail((140,140),Image.LANCZOS)
  al=np.array(im)[...,3]>100; H_,W_=al.shape; ys,xs=np.where(al)
  if k.startswith('tail'): t=ys.min(); rx=xs[ys<=t+4].mean()/W_; ry=t/H_
  elif k.startswith('wing'): i=np.argmax(xs+0.5*ys); rx=xs[i]/W_; ry=ys[i]/H_
  else: rx,ry=0.5,1.0
  MU[k]={'img':b64(im,82),'w':W_,'h':H_,'rx':round(float(rx),3),'ry':round(float(ry),3)}
# tool icons
ic={}
for n,im in zip(['axe','pick','sickle','knife','hammer','shears'],extract('tools_stone.jpg',dil=4)):
  im=im.crop(im.getbbox()); s=64/max(im.size); ic['stone_'+n]=b64(im.resize((round(im.width*s),round(im.height*s)),Image.LANCZOS),85)
# terrain textures: 128 px per 4 tiles at 1x  -> store 192 (1.5x canvas)
TX={}
def tex(name,f,flat,bright=1.0,tile=1):
  im=Image.open(f).convert('RGB').resize((192*tile,192*tile),Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.8))
  a=np.array(im).astype(float); m=a.reshape(-1,3).mean(0); a=np.clip((a*(1-flat)+m*flat)*bright,0,255)
  TX[name]=b64(Image.fromarray(a.astype(np.uint8)),80)
tex('grass','grass.jpg',0.55,1.04); tex('dirt','dirt.jpg',0.55); tex('sand','sand.jpg',0.55); tex('path','path.jpg',0.35)
tex('cobble','cobble.jpg',0.15); tex('shallow','shallow.jpg',0.2,tile=1); tex('deep','deep.jpg',0.25); tex('rock','rock.jpg',0.3); tex('snow','snow.jpg',0.2)
W={}
for n,f,crop in [('dirt','wall_dirt.jpg',0.06),('rock','wall_rock.jpg',0.14),('sand','wall_sand.jpg',0.11),('ice','wall_ice.jpg',0.075)]:
  im=Image.open(f).convert('RGB'); w,h=im.size; im=im.crop((0,int(h*crop),w,h)).resize((128,128),Image.LANCZOS); W[n]=b64(im,80)
print(LEGS)
js='window.WORLD_ART='+json.dumps({'res':RES,'sprites':SP,'icons':ic,'tex':TX,'walls':W,'animals':AN,'mut':MU},separators=(',',':'))+';\n'
open('/home/claude/repo-island/assets/world.js','w').write(js); print(len(js)//1024,'KB')
