import numpy as np, random
from PIL import Image, ImageDraw
from scipy import ndimage
from rock_cut import cut
def halfcut(im,seed,keep=0.55):
  random.seed(seed); a=np.array(im).copy(); al=a[...,3]>0
  ys,xs=np.where(al); y0,y1=ys.min(),ys.max(); cy=y1-(y1-y0)*keep
  H,W=al.shape
  for x in range(W):
    j=cy+np.sin(x*0.35)*4+random.uniform(-3,3)
    a[:int(j),x,3]=0
  out=Image.fromarray(a); d=ImageDraw.Draw(out)
  # darken freshly cut tips
  al2=a[...,3]>0
  for x in range(W):
    col=np.where(al2[:,x])[0]
    if len(col): t=col.min(); d.line([(x,t),(x,t+2)],fill=(120,150,60,255))
  for k in range(4):
    px=random.uniform(xs.min(),xs.max()); py=y1-random.uniform(0,10)
    d.line([(px,py),(px+random.uniform(8,14),py-random.uniform(-3,3))],fill=(110,170,50,255),width=3)
  return out
def sheet(F,names,make,out):
  a=np.array(Image.open(F).convert('RGB')).astype(int); H,W=a.shape[:2]; CW,CH=W//3,H//3; ins=0
  full=np.array(cut(a)); al=full[...,3]>0
  lab,n=ndimage.label(ndimage.binary_dilation(al,iterations=6))
  cellmask=np.zeros((3,3,H,W),bool)
  for i in range(1,n+1):
    m=(lab==i)&al
    if m.sum()<15: continue
    ys,xs=np.where(m); r=min(2,int(np.percentile(ys,85)//CH)); c=min(2,int(xs.mean()//CW))
    cellmask[r,c]|=m
  sh=Image.new('RGBA',(W,H),(120,180,70,255))
  for r in range(3):
    ims=[]
    for c in range(3):
      f=full.copy(); f[~cellmask[r,c],3]=0
      ims.append(Image.fromarray(f).crop((c*CW,max(0,r*CH-120),(c+1)*CW,(r+1)*CH)))
    if r in make: ims[1]=halfcut(ims[0],r)
    for c,im in enumerate(ims):
      im.save(f'{names[r]}_{c}.png'); sh.alpha_composite(im,(c*CW,max(0,r*CH-120)))
  sh.convert('RGB').save(out)
sheet('grass3a.jpg',['g_round','g_tall','g_wheat'],[0,1],'/tmp/ga.png')
sheet('grass3b.jpg',['g_clover','g_fern','g_reed'],[],'/tmp/gb.png')
sheet('camp3x3b.jpg',['c_fire','c_fence','c_bench'],[],'/tmp/cb.png')
ims=[Image.open(f).resize((512,512)) for f in ['/tmp/ga.png','/tmp/gb.png','/tmp/cb.png']]
o=Image.new('RGB',(1536,512));[o.paste(im,(i*512,0)) for i,im in enumerate(ims)];o.save('/mnt/user-data/outputs/grass_camp_cut.png')
