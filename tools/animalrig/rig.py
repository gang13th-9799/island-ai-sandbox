import numpy as np, math
from PIL import Image, ImageDraw
from scipy import ndimage
a=np.array(Image.open('sheet.jpg').convert('RGB'))[:, ::-1].astype(int)
d=np.sqrt(((a-[240,20,240])**2).sum(-1)); m=d>150
lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=2))
P={}
names={1:'head',15:'body',22:'uNF',23:'uFF',24:'uNB',25:'uFB',33:'lNF',30:'lFF',32:'lNB',31:'lFB'}
for i,k in names.items():
  mm=(lab==i)&m; ys,xs=np.where(mm); x0,x1,y0,y1=xs.min(),xs.max()+1,ys.min(),ys.max()+1
  rgb=a[y0:y1,x0:x1].copy(); al=mm[y0:y1,x0:x1]
  edge=al&~ndimage.binary_erosion(al,iterations=2); sp=np.clip(np.minimum(rgb[...,0],rgb[...,2])-rgb[...,1]+10,0,None)*edge; rgb[...,0]-=sp; rgb[...,2]-=sp
  im=Image.fromarray(np.dstack([np.clip(rgb,0,255),al*255]).astype(np.uint8))
  h=al.shape[0]
  def cen(r0,r1):
    sub=al[int(h*r0):int(h*r1)]; yy,xx=np.where(sub); return (xx.mean(), yy.mean()+int(h*r0))
  P[k]=dict(im=im,top=cen(0,0.18),bot=cen(0.85,1.0),size=im.size)
import json; print({k:(v['size'],[round(c) for c in v['top']],[round(c) for c in v['bot']]) for k,v in P.items()})
import pickle; pickle.dump({k:dict(top=v['top'],bot=v['bot']) for k,v in P.items()},open('joints.pkl','wb'))
for k,v in P.items(): v['im'].save(f'p_{k}.png')
