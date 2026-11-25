import numpy as np, sys
from PIL import Image
from scipy import ndimage
def cut(name):
  a=np.array(Image.open(name+'.jpg').convert('RGB')).astype(int)
  d=np.sqrt(((a-[240,20,240])**2).sum(-1)); mag=np.minimum(a[...,0],a[...,2])-a[...,1]
  m=(d>150)&~(mag>45)
  m=ndimage.binary_opening(m,iterations=1)
  lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=3))
  comps=[]
  for i in range(1,n+1):
    mm=(lab==i)&m; s=mm.sum()
    if s<40: continue
    ys,xs=np.where(mm); comps.append(dict(m=mm,s=s,x0=xs.min(),x1=xs.max(),y0=ys.min(),y1=ys.max(),cx=xs.mean()))
  big=sorted(comps,key=lambda c:-c['s'])[:5]; big=sorted(big,key=lambda c:c['cx'])
  assert len(big)==5,(name,len(comps))
  groups=[c['m'].copy() for c in big]
  for c in comps:
    if any(c is b for b in big): continue
    k=min(range(5),key=lambda i:abs(big[i]['cx']-c['cx']))
    b=big[k]
    if c['y0']>b['y1']+6: continue          # text label under the animal
    if c['s']<0.4*b['s'] and c['x1']>=b['x0']-40 and c['x0']<=b['x1']+40: groups[k]|=c['m']
  out=[]
  for g in groups:
    ys,xs=np.where(g); x0,x1,y0,y1=xs.min(),xs.max()+1,ys.min(),ys.max()+1
    rgb=a[y0:y1,x0:x1].copy(); al=g[y0:y1,x0:x1]
    edge=al&~ndimage.binary_erosion(al,iterations=2)
    sp=np.clip(np.minimum(rgb[...,0],rgb[...,2])-rgb[...,1]+10,0,None)*edge; rgb[...,0]-=sp; rgb[...,2]-=sp
    out.append(Image.fromarray(np.dstack([np.clip(rgb,0,255),al*255]).astype(np.uint8)))
  for i,im in enumerate(out): im.save(f'{name}_{i}.png')
  return out
rows=[]
for n in ['deer','boar','rabbit','goat','wolf','leopard','fish']:
  ims=cut(n); H=150; row=Image.new('RGBA',(5*170,H+10),(120,180,70,255))
  s=H/max(i.height for i in ims)
  for i,im in enumerate(ims): q=im.resize((int(im.width*s),int(im.height*s))); row.alpha_composite(q,(i*170+(170-q.width)//2,H+5-q.height))
  rows.append(row)
sh=Image.new('RGB',(850,len(rows)*160)); [sh.paste(r,(0,i*160)) for i,r in enumerate(rows)]; sh.save('/mnt/user-data/outputs/fauna_cut.png')
