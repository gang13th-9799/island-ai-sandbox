import numpy as np, io, base64, json
from PIL import Image
from scipy import ndimage
a=np.array(Image.open('/mnt/user-data/uploads/34ae6b57-image.jpg').convert('RGB')).astype(float); H,W=a.shape[:2]
d=np.sqrt(((a-[250,0,250])**2).sum(-1)); al=np.clip((d-90)/80,0,1)
m=al>0.4; lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=4))
comps=[]
for i in range(1,n+1):
  cc=lab==i
  if cc.sum()<3000: continue
  yy,xx=np.where(cc); comps.append((yy.mean(),xx.mean(),cc))
comps.sort(key=lambda t:(0 if t[0]<350 else 1 if t[0]<650 else 2, t[1]))
names=['leaf_hut','bamboo_hut','wood_house','bin_brick_open','stone_house','brick_house','tile_house']
r,g,b=a[...,0],a[...,1],a[...,2]; out={}
for (y,x,cc),k in zip(comps,names):
  A=al*cc; rgb=a.copy(); sp=np.minimum(r,b)-g; mk=(sp>0)&(A<1)
  rgb[...,0]-=np.where(mk,sp*0.6*(1-A),0); rgb[...,2]-=np.where(mk,sp*0.6*(1-A),0)
  pinkish=(a[...,0]>150)&(a[...,2]>120)&(a[...,1]<100)
  A=np.where(pinkish,0,A)
  dk=(rgb.mean(-1)<110)&(rgb[...,2]>=rgb[...,1])&(A>0); rgb[dk]=rgb[dk]*0.35+np.array([70,50,35])*0.65
  im=Image.fromarray(np.dstack([np.clip(rgb,0,255),A*255]).astype(np.uint8)); im=im.crop(im.getbbox()); im.save(f'{k}.png')
  if k.startswith('bin_'): continue
  bio=io.BytesIO(); im.save(bio,'WEBP',quality=88)
  out[k]={'src':'data:image/webp;base64,'+base64.b64encode(bio.getvalue()).decode(),'w':im.width,'h':im.height}
open('/home/claude/repo-island/assets/homes.js','w').write('window.HOME_ART='+json.dumps(out,separators=(',',':'))+';\n')
sh=Image.new('RGBA',(sum(Image.open(f'{k}.png').width for k in names)+70,260),(143,200,96,255)); x=0
for k in names: im=Image.open(f'{k}.png'); sh.alpha_composite(im,(x,260-im.height)); x+=im.width+10
sh.save('sheet.png')
