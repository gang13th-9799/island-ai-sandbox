from PIL import Image
import numpy as np, math, os
from scipy import ndimage
F='/mnt/user-data/uploads/14ab5c70-image.jpg'
lab0,_=ndimage.label(np.sqrt(((np.array(Image.open(F).convert('RGB')).astype(float)-[255,0,255])**2).sum(-1))>120)
SHEET=os.environ.get('SHEET')
if SHEET: F=SHEET
src=np.array(Image.open(F).convert('RGB')).astype(float)
d=np.sqrt(((src-[255,0,255])**2).sum(-1))
al=np.clip((d-90)/80,0,1)
lim=np.minimum(src[...,0],src[...,2]); sp=np.clip(lim-src[...,1]-60,0,None)*(1-al)
s=src.copy(); s[...,0]-=sp; s[...,2]-=sp
rgba=np.dstack([np.clip(s,0,255),al*255]).astype(np.uint8)
lab,_=ndimage.label(d>120); H,W=d.shape
if SHEET:
  Yg=np.mgrid[0:H,0:W][0]
  cent0={i:np.array(ndimage.center_of_mass(lab0==i)) for i in range(1,12)}
  new=np.zeros_like(lab); n=lab.max()
  for j in range(1,n+1):
    m=lab==j
    if m.sum()<2000: continue
    ys_=np.where(m.any(1))[0]
    if ys_.min()<300 and ys_.max()>700 and m.sum()>250000 and 1100<ndimage.center_of_mass(m)[1]<1500:
      new[m&(Yg<598)]=1; new[m&(Yg>=598)]=6; continue
    if m[:985].any() and m[985:].any() and m.sum()>120000 and ndimage.center_of_mass(m)[0]>500 and 1100<ndimage.center_of_mass(m)[1]<1500:
      new[m&(Yg<985)]=6; new[m&(Yg>=985)]=9; continue
    c=np.array(ndimage.center_of_mass(m)); i=min(cent0,key=lambda k:np.linalg.norm(cent0[k]-c))
    if np.linalg.norm(cent0[i]-c)>250:
      if m.sum()>150000: new[m]=12
      continue
    new[m]=i
  lab=new
def piece(i):
  m=ndimage.binary_dilation(lab==i,iterations=4)
  a=rgba.copy(); a[...,3]=(a[...,3]*m).astype(np.uint8)
  ys,xs=np.where(lab==i); P=np.stack([xs,ys],1).astype(float); c=P.mean(0)
  u,sv,vt=np.linalg.svd(P-c,full_matrices=False); ax=vt[0]
  if ax[1]<0: ax=-ax
  return Image.fromarray(a),c,ax
def place(i,center,bone=None,dx=0,dy=0,extra=0):
  im,c,ax=piece(i)
  ang=0
  if bone is not None:
    b=np.array(bone[1],float)-np.array(bone[0],float); b/=np.linalg.norm(b)
    ang=math.degrees(math.atan2(ax[1],ax[0])-math.atan2(b[1],b[0]))
    center=((bone[0][0]+bone[1][0])/2,(bone[0][1]+bone[1][1])/2)
  ang+=extra
  # rotate around piece centroid then move centroid to center
  out=im.rotate(ang,resample=Image.BICUBIC,center=tuple(c),translate=(center[0]+dx-c[0],center[1]+dy-c[1]))
  return out
J={'shL':(1170,770),'shR':(1420,770),'elL':(1100,890),'elR':(1495,895),'fiL':(1045,1018),'fiR':(1545,1015),
   'hipL':(1222,1085),'hipR':(1370,1085),'knL':(1215,1215),'knR':(1367,1215),'ftL':(1212,1325),'ftR':(1385,1320)}
def build(off={}):
  g=lambda k:off.get(k,(0,0,0))
  P={}
  P={}
  im,c,_=piece(1); hs=off.get('hs',1.02)
  cx,cy=1290,330
  P['head']=im.transform(im.size,Image.AFFINE,(1/hs,0,cx-(cx+g('head')[0])/hs,0,1/hs,cy-(cy+90+g('head')[1])/hs))
  im,c,_=piece(6); P['chest']=im.transform(im.size,Image.AFFINE,(1,0,-g('chest')[0],0,1,-18-g('chest')[1]))
  im,c,_=piece(9); P['pelvis']=im.transform(im.size,Image.AFFINE,(1,0,-g('pelvis')[0],0,1,15-g('pelvis')[1]))
  for k,i,a,b in [('upL',2,'shL','elL'),('foL',4,'elL','fiL'),('upR',3,'shR','elR'),('foR',5,'elR','fiR'),
                  ('thL',7,'hipL','knL'),('shinL',10,'knL','ftL'),('thR',8,'hipR','knR'),('shinR',11,'knR','ftR')]:
    o=g(k); P[k]=place(i,None,bone=(J[a],J[b]),dx=o[0],dy=o[1],extra=o[2])
  return P
order=['upR','foR','thR','shinR','pelvis','thL','shinL','chest','head','upL','foL']
def compose(P):
  c=Image.new('RGBA',(W,H),(0,0,0,0))
  for k in order: c.alpha_composite(P[k])
  return c
if __name__=='__main__':
  c=compose(build())
  base=Image.open('/mnt/user-data/uploads/e9628829-image.jpg').convert('RGB')
  bg=Image.new('RGBA',(W,H),(150,205,120,255)); bg.alpha_composite(c)
  A=bg.convert('RGB').crop((850,80,1750,1420)); Bc=base.crop((850,80,1750,1420))
  # overlay outline of base
  diff=Image.blend(A,Bc,0.5)
  st=Image.new('RGB',(2700,1340)); st.paste(A,(0,0)); st.paste(Bc,(900,0)); st.paste(diff,(1800,0))
  st.resize((1350,670)).save('cmp.png')
