import numpy as np, random
from PIL import Image, ImageDraw
from scipy import ndimage
exec(open('trees_cut.py').read().split("out={}")[0].replace("'trees_fruit.jpg'","'trees_wood.jpg'").replace("CW,CH=W//4,H//2","CW,CH=W//3,H//2"))
def trunk_y(im):
  arr=np.array(im); al=arr[...,3]>0; rgb=arr[...,:3].astype(int)
  brown=al&(rgb[...,0]>rgb[...,1]+25)&(rgb[...,0]>90)
  ys=np.where(brown.sum(1)>4)[0]
  # notch at ~40% up from bottom of the brown trunk
  return int(ys.max()-(ys.max()-ys.min())*0.45)
out={}
names=[['oak_full','oak_damaged','oak_stump'],['pine_full','pine_damaged','pine_stump']]
for r in range(2):
  full=cell(r,0); out[(r,0)]=full; out[(r,2)]=cell(r,2)
  out[(r,1)]=damaged(cell(r,0),trunk_y(full),r)
sheet=Image.new('RGBA',(W,H),(120,180,70,255))
for (r,c),im in out.items():
  im.save(f'tree_{names[r][c]}.png'); sheet.alpha_composite(im,(c*CW,r*CH))
sheet.convert('RGB').save('/mnt/user-data/outputs/trees_wood_cut.png')
