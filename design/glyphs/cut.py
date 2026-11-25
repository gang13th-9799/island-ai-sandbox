import numpy as np, json
from PIL import Image
from scipy import ndimage
U='/mnt/user-data/uploads/'
srcs={'h1':'7163a119','h2':'c69a3f22','h3':'ab67e100'}
rng=np.random.default_rng(7)
info={}
for k,f in srcs.items():
  a=np.array(Image.open(U+f+'-image.jpg').convert('RGB')).astype(float); H,W=a.shape[:2]
  d=np.sqrt(((a-[250,0,250])**2).sum(-1)); al=np.clip((d-90)/80,0,1)
  m=al>0.4; lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=3))
  sizes=ndimage.sum(m,lab,range(1,n+1)); cents=ndimage.center_of_mass(m,lab,range(1,n+1))
  top=min([i for i in range(n) if sizes[i]>3000], key=lambda i:cents[i][0])+1
  A=al*(lab==top)
  r,g,b=a[...,0],a[...,1],a[...,2]; rgb=a.copy(); sp=np.minimum(r,b)-g; mk=(sp>0)&(A<1)
  rgb[...,0]-=np.where(mk,sp*0.6*(1-A),0); rgb[...,2]-=np.where(mk,sp*0.6*(1-A),0)
  dk=(rgb.mean(-1)<110)&(rgb[...,2]>=rgb[...,1])&(A>0); rgb[dk]=rgb[dk]*0.35+np.array([70,62,58])*0.65
  im=Image.fromarray(np.dstack([np.clip(rgb,0,255),A*255]).astype(np.uint8)); bb=im.getbbox(); im=im.crop(bb); im.save(f'{k}_whole.png')
  arr=np.array(im); h,w=arr.shape[:2]
  # flat face: bright, low-variance interior
  br=arr[...,:3].mean(-1); face=(arr[...,3]>250)&(np.abs(br-np.median(br[arr[...,3]>250]))<18)
  face=ndimage.binary_opening(face,iterations=4); l2,n2=ndimage.label(face); big=np.argmax(ndimage.sum(face,l2,range(1,n2+1)))+1; ys,xs=np.where(l2==big)
  fx0,fx1=np.percentile(xs,4),np.percentile(xs,96); fy0,fy1=np.percentile(ys,4),np.percentile(ys,96)
  # jagged vertical cracks
  def crack(xf):
    pts=[]; y=0; x=xf*w
    while y<h: pts.append((x,y)); y+=rng.uniform(8,16); x=xf*w+rng.uniform(-9,9)
    pts.append((x,h)); return pts
  def xat(pts,yy):
    ys_=[p[1] for p in pts]; xs_=[p[0] for p in pts]; return np.interp(yy,ys_,xs_)
  info[k]={'w':w,'h':h,'face':[round(fx0,1),round(fy0,1),round(fx1,1),round(fy1,1)]}
  for npc,fr in [(2,[0.5]),(3,[0.34,0.66])]:
    cr=[crack(x) for x in fr]; X=np.arange(w)[None,:]; Y=np.arange(h)[:,None]
    bounds=[np.zeros((h,1))]+[xat(c,np.arange(h))[:,None] for c in cr]+[np.full((h,1),w)]
    pieces=[]
    for p in range(npc):
      msk=(X>=bounds[p])&(X<bounds[p+1]); pa=arr.copy(); pa[...,3]=np.where(msk,pa[...,3],0)
      # broken edge: dark rim + rough lighter band just inside
      edge=msk&~ndimage.binary_erosion(msk,iterations=2)
      cut=np.zeros_like(msk)
      if p>0: cut|=np.abs(X-bounds[p])<3
      if p<npc-1: cut|=np.abs(X-bounds[p+1])<3
      rim=edge&cut&(pa[...,3]>0)
      pa[rim,:3]=[70,62,58]
      band=msk&cut&~rim&(np.abs(X-(bounds[p] if p>0 else -99))<7)|msk&(p<npc-1)&(np.abs(X-bounds[p+1])<7)&~rim
      pa[band&(pa[...,3]>0),:3]=(pa[band&(pa[...,3]>0),:3]*0.78).astype(np.uint8)
      pim=Image.fromarray(pa); pb=pim.getbbox(); pim.crop(pb).save(f'{k}_p{npc}_{p}.png')
      pieces.append({'x':pb[0],'y':pb[1]})
    info[k]['p%d'%npc]=pieces
    json.dump(cr,open(f'{k}_cr{npc}.json','w'))
json.dump(info,open('info.json','w'),indent=1); print(info)
