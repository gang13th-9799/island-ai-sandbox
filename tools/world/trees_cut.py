import numpy as np, random
from PIL import Image, ImageDraw
from scipy import ndimage
a=np.array(Image.open('trees_fruit.jpg').convert('RGB')).astype(int)
H,W=a.shape[:2]; CW,CH=W//4,H//2
def cell(r,c):
  sub=a[r*CH:(r+1)*CH,c*CW:(c+1)*CW].copy()
  d=np.sqrt(((sub-[240,20,240])**2).sum(-1)); m=d>150
  lab,n=ndimage.label(ndimage.binary_dilation(m,iterations=8)); sz=ndimage.sum(m,lab,range(1,n+1))
  keep=np.isin(lab,[i+1 for i,s in enumerate(sz) if s>25])&m
  edge=keep&~ndimage.binary_erosion(keep,iterations=3)
  sp=np.clip(np.minimum(sub[...,0],sub[...,2])-sub[...,1]+15,0,None)*edge; sub[...,0]-=sp; sub[...,2]-=sp
  al=ndimage.binary_erosion(keep,iterations=1)
  return Image.fromarray(np.dstack([np.clip(sub,0,255),al*255]).astype(np.uint8))
def damaged(im,ty,seed):
  random.seed(seed)
  arr=np.array(im); al=arr[...,3]>0
  row=np.where(al[ty])[0]; x0,x1=row.min(),row.max(); w=x1-x0
  d=ImageDraw.Draw(im)
  depth=w*0.6; hh=w*0.5
  # V notch from right side
  tri=[(x1+2,ty-hh),(x1-depth,ty),(x1+2,ty+hh*0.55)]
  d.polygon(tri,fill=(0,0,0,0))
  inner=[(x1-1,ty-hh*0.8),(x1-depth+3,ty),(x1-1,ty+hh*0.35)]
  d.polygon(inner,fill=(236,196,140,255)); d.line([tri[0],tri[1],tri[2]],fill=(70,35,22,255),width=3)
  d.line([(x1-depth+3,ty),(x1-depth*0.4,ty-hh*0.3)],fill=(190,140,90,255),width=2)
  for k in range(6):
    cx=x1+random.uniform(4,34); cy=ty+random.uniform(-5,30)
    d.polygon([(cx,cy),(cx+10,cy+3),(cx+4,cy+8)],fill=(226,186,130,255),outline=(90,50,30,255))
  return im
out={}
for r,ty in [(0,212),(1,470-CH)]:
  for c in (0,1,3): out[(r,c)]=cell(r,c)
  out[(r,2)]=damaged(cell(r,1),ty,r)
names=[['fruit_full','fruit_picked','fruit_damaged','fruit_stump'],['palm_full','palm_picked','palm_damaged','palm_stump']]
sheet=Image.new('RGBA',(W,H),(120,180,70,255))
for (r,c),im in out.items():
  im.save(f'tree_{names[r][c]}.png'); sheet.alpha_composite(im,(c*CW,r*CH))
sheet.convert('RGB').save('/mnt/user-data/outputs/trees_fruit_cut.png')
