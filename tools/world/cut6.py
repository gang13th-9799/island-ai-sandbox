import numpy as np, sys
from PIL import Image
from scipy import ndimage
def comps(f):
  a=np.array(Image.open(f).convert('RGB')).astype(int)
  d=np.sqrt(((a-[240,20,240])**2).sum(-1)); m=d>150
  lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=5))
  cs=[]
  for i in range(1,n+1):
    mm=(lab==i)&m
    if mm.sum()<4000: continue
    ys,xs=np.where(mm); cs.append((ys.mean(),xs.mean(),mm))
  rows=sorted(cs,key=lambda c:c[0]); out=[]
  # group by row
  rs=[]; 
  for c in rows:
    if rs and abs(rs[-1][-1][0]-c[0])<80: rs[-1].append(c)
    else: rs.append([c])
  for r in rs: out+=sorted(r,key=lambda c:c[1])
  return a,[c[2] for c in out]
def save(a,mm,name):
  ys,xs=np.where(mm); x0,x1,y0,y1=xs.min(),xs.max()+1,ys.min(),ys.max()+1
  rgb=a[y0:y1,x0:x1].copy(); al=mm[y0:y1,x0:x1]
  edge=al&~ndimage.binary_erosion(al,iterations=2); sp=np.clip(np.minimum(rgb[...,0],rgb[...,2])-rgb[...,1]+10,0,None)*edge; rgb[...,0]-=sp; rgb[...,2]-=sp
  Image.fromarray(np.dstack([np.clip(rgb,0,255),al*255]).astype(np.uint8)).save(name)
for n,pick in [('boar',[0,1,2,4,6,7]),('rabbit',[0,1,2,4,3,5])]:
  a,cs=comps(n+'_chibi.jpg'); print(n,len(cs))
  for j,k in enumerate(pick): save(a,cs[k],f'{n}_{j}.png')
