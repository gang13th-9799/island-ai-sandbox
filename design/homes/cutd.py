import numpy as np, io, base64, json
from PIL import Image
from scipy import ndimage
a=np.array(Image.open('/mnt/user-data/uploads/b7a38cd8-image.jpg').convert('RGB')).astype(float)
d=np.sqrt(((a-[250,0,250])**2).sum(-1)); al=np.clip((d-90)/80,0,1)
m=al>0.4; lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=2))
big=[];small=[]
for i in range(1,n+1):
  cc=lab==i; sz=cc.sum()
  if sz<40: continue
  yy,xx=np.where(cc); (big if sz>3000 else small).append([yy.mean(),xx.mean(),cc])
for y,x,cc in small:
  j=min(range(len(big)),key=lambda k:(big[k][0]-y)**2+(big[k][1]-x)**2); big[j][2]=big[j][2]|cc
big.sort(key=lambda t:(0 if t[0]<350 else 1 if t[0]<650 else 2, t[1]))
names=['leaf_hut','bamboo_hut','wood_house','brick_house','stone_house','bin_brick_holes','tile_house']
r,g,b=a[...,0],a[...,1],a[...,2]
H=json.loads(open('/home/claude/repo-island/assets/homes.js').read().split('=',1)[1].rstrip(';\n'))
prev=[]
for (y,x,cc),k in zip(big,names):
  A=al*cc; rgb=a.copy(); sp=np.minimum(r,b)-g; mk=(sp>0)&(A<1)
  rgb[...,0]-=np.where(mk,sp*0.6*(1-A),0); rgb[...,2]-=np.where(mk,sp*0.6*(1-A),0)
  pinkish=(a[...,0]>150)&(a[...,2]>120)&(a[...,1]<100); A=np.where(pinkish,0,A)
  dk=(rgb.mean(-1)<110)&(rgb[...,2]>=rgb[...,1])&(A>0); rgb[dk]=rgb[dk]*0.35+np.array([70,50,35])*0.65
  im=Image.fromarray(np.dstack([np.clip(rgb,0,255),A*255]).astype(np.uint8)); im=im.crop(im.getbbox()); im.save(f'dmg_{k}.png'); prev.append(im)
  if k.startswith('bin_'): continue
  bio=io.BytesIO(); im.save(bio,'WEBP',quality=88)
  H[k]['dmg']={'src':'data:image/webp;base64,'+base64.b64encode(bio.getvalue()).decode(),'w':im.width,'h':im.height}
open('/home/claude/repo-island/assets/homes.js','w').write('window.HOME_ART='+json.dumps(H,separators=(',',':'))+';\n')
sh=Image.new('RGBA',(sum(p.width for p in prev)+70,max(p.height for p in prev)),(143,200,96,255)); x=0
for p in prev: sh.alpha_composite(p,(x,sh.height-p.height)); x+=p.width+10
sh.save('sheet_dmg.png')
