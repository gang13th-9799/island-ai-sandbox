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
js='window.WORLD_ART='+json.dumps({'res':RES,'sprites':SP,'icons':ic,'tex':TX,'walls':W},separators=(',',':'))+';\n'
open('/home/claude/repo-island/assets/world.js','w').write(js); print(len(js)//1024,'KB')
