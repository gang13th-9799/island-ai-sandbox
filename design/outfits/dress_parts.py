# Assemble a dressed parts sheet from separate Gemini images:
#   --body  edit of template_body (chest + hips)     --arms  edit of template_arms (or template_upper)
#   --legs  edit of template_legs                    --skirt standalone skirt that replaces the hip piece
import sys, argparse, numpy as np
from PIL import Image
from scipy import ndimage
sys.path.insert(0,'/home/claude/rig'); from keylib2 import keyimg
ap=argparse.ArgumentParser(); ap.add_argument('out'); ap.add_argument('--body'); ap.add_argument('--arms'); ap.add_argument('--legs'); ap.add_argument('--skirt'); ap.add_argument('--upper'); ap.add_argument('--skirtw',type=float,default=1.15)
A=ap.parse_args()
B='/mnt/user-data/uploads/14ab5c70-image.jpg'
ba=np.array(Image.open(B).convert('RGB')); H,W=ba.shape[:2]
def fg(a): a=a.astype(int); return ((np.minimum(a[...,0],a[...,2])-a[...,1])<55)&(a.sum(-1)>40)
bl,_=ndimage.label(fg(ba))
out=ba.copy(); out[~np.isin(bl,[1,2,3,4,5,6,7,8,9,10,11])]=[255,0,255]   # start from the bare pieces
def place(F,ids,toe=True,crop=None):
    m=ndimage.binary_dilation(np.isin(bl,crop or ids),iterations=3); ys,xs=np.where(m); pad=60
    y0,x0=max(0,ys.min()-pad),max(0,xs.min()-pad); y1,x1=ys.max()+pad,xs.max()+pad; th,tw=y1-y0,x1-x0
    ki,_=keyimg(F); col=np.array(Image.fromarray(np.clip(ki,0,255).astype(np.uint8)).resize((tw,th),Image.LANCZOS))
    raw=np.array(Image.open(F).convert('RGB').resize((tw,th),Image.LANCZOS))
    gm=ndimage.binary_fill_holes(ndimage.binary_opening(fg(raw),iterations=2))
    edge=gm&~ndimage.binary_erosion(gm,iterations=4); col=np.where(edge[...,None],col,raw)   # keep true colours inside (pink cloth is not magenta spill)
    tl=bl[y0:y1,x0:x1]*np.isin(bl[y0:y1,x0:x1],crop or ids)
    _,(iy,ix)=ndimage.distance_transform_edt(tl==0,return_indices=True); near=tl[iy,ix]
    for i in ids:
        pm=gm&(near==i); l,n=ndimage.label(pm)
        if n>1:
            keep=np.zeros_like(pm)
            for k in range(1,n+1):
                c=l==k
                if (c&(tl==i)).any() and c.sum()>200: keep|=c
            pm=keep
        Y,X=np.where(pm)
        if not len(Y): print('missing piece',i); continue
        out[np.isin(bl,[i])]=[255,0,255]
        if toe and i in (10,11):
            def tdir(mask):
                yy,xx=np.where(mask); r=yy>=yy.max()-(yy.max()-yy.min())*0.18; mid=yy<yy.min()+(yy.max()-yy.min())*0.6
                return xx[r].mean()-xx[mid].mean()
            if np.sign(tdir(pm))!=np.sign(tdir(tl==i)): X2=X.min()+X.max()-X; out[Y+y0,X2+x0]=col[Y,X]; print('flipped',i); continue
        out[Y+y0,X+x0]=col[Y,X]
if A.body: place(A.body,[6,9])
if A.arms: place(A.arms,[2,3,4,5])
if A.upper: place(A.upper,[2,3,4,5],crop=[2,3,4,5,6,9])
if A.legs: place(A.legs,[7,8,10,11])
if A.skirt:
    ki,a=keyimg(A.skirt); m=ndimage.binary_opening(a>0.5,iterations=2); l,n=ndimage.label(m); big=max(range(1,n+1),key=lambda k:(l==k).sum()); m=l==big
    ys,xs=np.where(m); im=np.dstack([np.clip(ki,0,255),(m*255)]).astype(np.uint8)[ys.min():ys.max()+1,xs.min():xs.max()+1]
    top=m[ys.min():ys.min()+int((ys.max()-ys.min())*0.12)]; waist=np.max(top.sum(1))
    pm=bl==9; pys,pxs=np.where(pm); prow=pm[pys.min()+4]; pw=prow.sum(); pcx=pxs[prow[pxs]].mean() if False else np.where(prow)[0].mean()
    k=pw*A.skirtw/waist; sk=Image.fromarray(im).resize((int(im.shape[1]*k),int(im.shape[0]*k)),Image.LANCZOS)
    out[pm]=[255,0,255]
    o=Image.fromarray(out); X=int(pcx-sk.width/2); Y=int(pys.min()-0.04*sk.height)
    o.paste(sk.convert('RGB'),(X,Y),sk.split()[3].point(lambda v:255 if v>140 else 0)); out=np.array(o); print('skirt scale',round(k,3))
Image.fromarray(out).save(A.out)
ov=out.copy(); f=fg(ba); e=f^ndimage.binary_erosion(f,iterations=3); ov[e]=[0,255,0]
Image.fromarray(ov).resize((W//2,H//2)).save('/tmp/dress_parts_ov.png'); print('ok')
