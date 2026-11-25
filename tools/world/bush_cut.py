import numpy as np
from PIL import Image
from scipy import ndimage
def cells(F,R,C,names,inset=8):
  a=np.array(Image.open(F).convert('RGB')).astype(int); H,W=a.shape[:2]; CW,CH=W//C,H//R
  out={}
  for r in range(R):
    for c in range(C):
      sub=a[r*CH+inset:(r+1)*CH-inset,c*CW+inset:(c+1)*CW-inset].copy()
      d=np.sqrt(((sub-[240,20,240])**2).sum(-1))
      bl,_=ndimage.label(d<150); edge_ids=set(np.unique(np.concatenate([bl[0],bl[-1],bl[:,0],bl[:,-1]])))-{0}
      bg=np.isin(bl,list(edge_ids)); m=~bg
      # big enclosed pockets that are pure magenta = background too
      pl,pn=ndimage.label((d<125)&m)
      for i in range(1,pn+1):
        if (pl==i).sum()>30 and d[pl==i].mean()<75: m[pl==i]=False
      lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=8)); sz=ndimage.sum(m,lab,range(1,n+1))
      keep=np.isin(lab,[i+1 for i,s in enumerate(sz) if s>25])&m
      edge=keep&~ndimage.binary_erosion(keep,iterations=3)
      sp=np.clip(np.minimum(sub[...,0],sub[...,2])-sub[...,1]+15,0,None)*edge; sub[...,0]-=sp; sub[...,2]-=sp
      al=ndimage.binary_erosion(keep,iterations=1)
      im=Image.fromarray(np.dstack([np.clip(sub,0,255),al*255]).astype(np.uint8))
      im.save(f'bush_{names[r][c]}.png'); out[(r,c)]=im
  sheet=Image.new('RGBA',(W,H),(120,180,70,255))
  for (r,c),im in out.items(): sheet.alpha_composite(im,(c*CW+inset,r*CH+inset))
  return sheet
s1=cells('bush_plain.jpg',3,3,[['green_full','green_damaged','green_stub'],['pink_full','pink_damaged','pink_stub'],['purple_full','purple_damaged','purple_stub']])
s2=cells('bush_berry.jpg',2,4,[['blue_full','blue_picked','blue_damaged','blue_stub'],['red_full','red_picked','red_damaged','red_stub']])
s1.convert('RGB').save('/mnt/user-data/outputs/bushes_plain_cut.png'); s2.convert('RGB').save('/mnt/user-data/outputs/bushes_berry_cut.png')
