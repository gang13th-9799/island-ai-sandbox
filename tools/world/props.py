import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
from scipy import ndimage
def extract(F,minpx=1500,dil=14):
  a=np.array(Image.open(F).convert('RGB')).astype(int)
  mg=np.minimum(a[...,0],a[...,2])-a[...,1]; fg=mg<15
  fg=ndimage.binary_opening(fg,iterations=1)
  lab,n=ndimage.label(ndimage.binary_dilation(fg,iterations=dil))
  out=[]
  for i in range(1,n+1):
    m=(lab==i)&fg
    if m.sum()<minpx: continue
    ys,xs=np.where(m); x0,x1,y0,y1=xs.min(),xs.max()+1,ys.min(),ys.max()+1
    rgb=a[y0:y1,x0:x1].copy()
    # despill magenta
    sp=np.clip(np.minimum(rgb[...,0],rgb[...,2])-rgb[...,1]+10,0,None); rgb[...,0]-=sp; rgb[...,2]-=sp
    al=ndimage.binary_erosion(m[y0:y1,x0:x1],iterations=1)
    im=Image.fromarray(np.dstack([np.clip(rgb,0,255),al*255]).astype(np.uint8))
    out.append((x0,im))
  return [im for _,im in sorted(out,key=lambda t:t[0])]
def regreen(im,target=92,amt=0.75,sboost=1.35,vboost=1.12):
  a=np.array(im).astype(float); hsv=np.array(im.convert('RGB').convert('HSV')).astype(float)
  h=hsv[...,0]*360/255
  g=(h>32)&(h<140)&(hsv[...,1]>40)&~((h<56)&(hsv[...,2]>165))
  h2=np.where(g,h+(target-h)*amt,h)
  hsv[...,0]=h2*255/360; hsv[...,1]=np.where(g,np.clip(hsv[...,1]*sboost,0,255),hsv[...,1]); hsv[...,2]=np.clip(hsv[...,2]*vboost,0,255)
  rgb=Image.fromarray(hsv.astype(np.uint8),'HSV').convert('RGB').convert('RGBA'); rgb.putalpha(im.split()[3]); return rgb
def pop(im,sat=1.35,bri=1.12):
  rgb=im.convert('RGB'); a=im.split()[3]
  rgb=ImageEnhance.Color(rgb).enhance(sat); rgb=ImageEnhance.Brightness(rgb).enhance(bri)
  o=rgb.convert('RGBA'); o.putalpha(a); return o
