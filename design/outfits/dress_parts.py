# Assemble a dressed parts sheet from separate Gemini images:
#   --body  edit of template_body (chest + hips)     --arms  edit of template_arms (or template_upper)
#   --legs  edit of template_legs                    --skirt standalone skirt that replaces the hip piece
import sys, argparse, numpy as np
from PIL import Image
from scipy import ndimage
sys.path.insert(0,'/home/claude/rig'); from keylib2 import keyimg
ap=argparse.ArgumentParser(); ap.add_argument('out'); ap.add_argument('--body'); ap.add_argument('--arms'); ap.add_argument('--legs'); ap.add_argument('--skirt'); ap.add_argument('--upper'); ap.add_argument('--skirtw',type=float,default=1.15); ap.add_argument('--anklet'); ap.add_argument('--forearmsfit'); ap.add_argument('--shinsfit'); ap.add_argument('--sandal'); ap.add_argument('--skirtdy',type=float,default=-0.04)
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
        if i in (10,11):   # Gemini often draws footwear larger than the foot: shrink to the template piece, anchored at the top centre
            tm=tl==i; tys,txs=np.where(tm); ratio=np.sqrt(tm.sum()/pm.sum())
            if ratio<0.9:
                y0p,x0p=Y.min(),X.min(); crop=np.dstack([col,pm*255]).astype(np.uint8)[Y.min():Y.max()+1,X.min():X.max()+1]
                im=Image.fromarray(crop); im=im.resize((max(1,int(im.width*ratio)),max(1,int(im.height*ratio))),Image.LANCZOS); arr=np.array(im)
                # match the template top edge and its centre at the top rows
                cx=txs[tys<tys.min()+15].mean(); ok_=arr[...,3]>128; yy,xx=np.where(ok_)
                top=xx[yy<yy.min()+15].mean(); X0=int(round(cx-top)); Y0=tys.min()
                flip=False
                def tdir(mask):
                    a_,b_=np.where(mask); r=a_>=a_.max()-(a_.max()-a_.min())*0.18; mid=a_<a_.min()+(a_.max()-a_.min())*0.6
                    return b_[r].mean()-b_[mid].mean()
                if np.sign(tdir(ok_))!=np.sign(tdir(tm)): arr=arr[:,::-1]; ok_=ok_[:,::-1]; yy,xx=np.where(ok_); X0=int(round(cx-xx[yy<yy.min()+15].mean())); print('flipped',i)
                yy,xx=np.where(ok_); out[yy+Y0+y0,xx+X0+x0]=arr[yy,xx,:3]; print('shrunk shin',i,round(ratio,2)); continue
        if toe and i in (10,11):
            def tdir(mask):
                yy,xx=np.where(mask); r=yy>=yy.max()-(yy.max()-yy.min())*0.18; mid=yy<yy.min()+(yy.max()-yy.min())*0.6
                return xx[r].mean()-xx[mid].mean()
            if np.sign(tdir(pm))!=np.sign(tdir(tl==i)): X2=X.min()+X.max()-X; out[Y+y0,X2+x0]=col[Y,X]; print('flipped',i); continue
        out[Y+y0,X+x0]=col[Y,X]

def fit_side_pieces(F, want):   # any layout: per side, top piece = upper limb, bottom = lower; rotate + scale onto the base piece
    global out
    ki,_=keyimg(F); a=np.clip(ki,0,255).astype(np.uint8); raw=np.array(Image.open(F).convert('RGB'))
    gm=ndimage.binary_fill_holes(ndimage.binary_opening(fg(raw),iterations=2)); edge=gm&~ndimage.binary_erosion(gm,iterations=4); a=np.where(edge[...,None],a,raw)
    l,n=ndimage.label(gm); ps=[l==i for i in range(1,n+1) if (l==i).sum()>3000]
    cx=[np.where(p)[1].mean() for p in ps]; mid=(min(cx)+max(cx))/2
    def info(m):
        ys,xs=np.where(m); c=np.array([xs.mean(),ys.mean()]); P=np.stack([xs-c[0],ys-c[1]]); ev,evec=np.linalg.eigh(np.cov(P)); v=evec[:,1]
        if v[1]<0: v=-v
        return c,np.degrees(np.arctan2(v[1],v[0]))
    def midw(al):
        m=al>128; ys=np.where(m.any(1))[0]; r0,r1=ys.min(),ys.max(); rows=m[r0+int((r1-r0)*.25):r0+int((r1-r0)*.75)]; return np.median(rows.sum(1)), r1-r0
    for side,(topid,botid) in want.items():
        lst=sorted([p for p,x in zip(ps,cx) if (x<mid)==(side=='L')],key=lambda p:np.where(p)[0].mean())
        for p,bid in ((lst[0],topid),(lst[-1],botid)):
            if bid is None: continue
            c,ang=info(p); bc,bang=info(bl==bid)
            ys,xs=np.where(p); crop=np.dstack([a,(p*255).astype(np.uint8)])[ys.min():ys.max()+1,xs.min():xs.max()+1]
            im=Image.fromarray(crop).rotate(ang-90,resample=Image.BICUBIC,expand=True)
            bm=Image.fromarray(((bl==bid)*255).astype(np.uint8)).rotate(bang-90,resample=Image.BICUBIC,expand=True)
            pw,ph=midw(np.array(im)[...,3]); bw,bh=midw(np.array(bm))
            im=im.resize((max(1,int(im.width*bw/pw)),max(1,int(im.height*bh/ph))),Image.LANCZOS).rotate(90-bang,resample=Image.BICUBIC,expand=True)
            arr=np.array(im); mm=arr[...,3]>128
            if bid in (10,11):
                def tdir(mask):
                    a_,b_=np.where(mask); r=a_>=a_.max()-(a_.max()-a_.min())*0.18; md=a_<a_.min()+(a_.max()-a_.min())*0.6
                    return b_[r].mean()-b_[md].mean()
                if np.sign(tdir(mm))!=np.sign(tdir(bl==bid)): arr=arr[:,::-1]; mm=mm[:,::-1]; print('flipped',bid)
            yy,xx=np.where(mm); X0=int(round(bc[0]-xx.mean())); Y0=int(round(bc[1]-yy.mean()))
            out[bl==bid]=[255,0,255]; out[yy+Y0,xx+X0]=arr[yy,xx,:3]; print('fit',bid)

if A.body: place(A.body,[6,9])
if A.arms: place(A.arms,[2,3,4,5])
if A.upper: place(A.upper,[2,3,4,5],crop=[2,3,4,5,6,9])
if A.shinsfit: fit_side_pieces(A.shinsfit,{'L':(None,10),'R':(None,11)})
if A.forearmsfit: fit_side_pieces(A.forearmsfit,{'L':(None,4),'R':(None,5)})
if A.legs: place(A.legs,[7,8,10,11])
if A.anklet:   # keep the base chibi feet; copy only the anklet decoration (white / yellow / green bits) from an aligned legs image
    ids=[7,8,10,11]; m=ndimage.binary_dilation(np.isin(bl,ids),iterations=3); ys,xs=np.where(m); pad=60
    y0,x0=max(0,ys.min()-pad),max(0,xs.min()-pad); y1,x1=ys.max()+pad,xs.max()+pad
    raw=np.array(Image.open(A.anklet).convert('RGB').resize((x1-x0,y1-y0),Image.LANCZOS)).astype(int)
    r,g,b=raw[...,0],raw[...,1],raw[...,2]
    white=(r>215)&(g>215)&(b>200); yellow=(r>200)&(g>170)&(b<120); green=(g>r+10)&(g>b+10)
    deco=white|yellow|green; deco=ndimage.binary_dilation(deco,iterations=2)&(white|yellow|green|((r+g+b)<360))   # include their dark outlines
    for i in (10,11):
        tm=(bl[y0:y1,x0:x1]==i); tys,_=np.where(tm); band=np.zeros_like(tm); band[tys.min()+int((tys.max()-tys.min())*0.35):tys.min()+int((tys.max()-tys.min())*0.78)]=True
        d=deco&ndimage.binary_dilation(tm,iterations=4)&band
        Y,X=np.where(d); out[Y+y0,X+x0]=raw[Y,X]
    print('anklet pixels',int(deco.sum()))
if A.skirt:
    ki,a=keyimg(A.skirt); m=ndimage.binary_opening(a>0.5,iterations=2); l,n=ndimage.label(m); big=max(range(1,n+1),key=lambda k:(l==k).sum()); m=l==big
    ys,xs=np.where(m); im=np.dstack([np.clip(ki,0,255),(m*255)]).astype(np.uint8)[ys.min():ys.max()+1,xs.min():xs.max()+1]
    top=m[ys.min():ys.min()+int((ys.max()-ys.min())*0.12)]; waist=np.max(top.sum(1))
    pm=bl==9; pys,pxs=np.where(pm); prow=pm[pys.min()+4]; pw=prow.sum(); pcx=pxs[prow[pxs]].mean() if False else np.where(prow)[0].mean()
    k=pw*A.skirtw/waist; sk=Image.fromarray(im).resize((int(im.shape[1]*k),int(im.shape[0]*k)),Image.LANCZOS)
    out[pm]=[255,0,255]
    o=Image.fromarray(out); X=int(pcx-sk.width/2); Y=int(pys.min()+A.skirtdy*sk.height)
    o.paste(sk.convert('RGB'),(X,Y),sk.split()[3].point(lambda v:255 if v>140 else 0)); out=np.array(o); print('skirt scale',round(k,3))
if A.sandal:   # small chibi sandal drawn on the foot: sole on the lowest pixels + two straps (colours: sole,strap)
    from PIL import ImageDraw
    sole,strap=[tuple(int(v) for v in c.split(',')) for c in A.sandal.split(';')]
    for pid in (10,11):
        cur=(np.abs(out.astype(int)-[255,0,255]).sum(-1)>60); m=ndimage.binary_dilation(bl==pid,iterations=6)&cur
        ys,xs=np.where(m); H=ys.max()-ys.min(); foot=m&(np.arange(m.shape[0])[:,None]>ys.max()-H*0.28)
        for x in np.unique(np.where(foot)[1]):
            col=np.where(foot[:,x])[0]; yb=col.max()
            for y in range(yb-7,yb+1): out[y,x]=sole if y<yb-1 else (120,110,100)
        im=Image.fromarray(out); d=ImageDraw.Draw(im); fy,fx=np.where(foot); x0,x1,y0,y1=fx.min(),fx.max(),fy.min(),fy.max()
        for (ax,ay,bx,by) in [(x0+0.3*(x1-x0),y0+0.1*(y1-y0),x0+0.62*(x1-x0),y1-6),(x0+0.68*(x1-x0),y0+0.3*(y1-y0),x0+0.38*(x1-x0),y1-6)]:
            d.line([(ax,ay),(bx,by)],fill=(110,100,95),width=9); d.line([(ax,ay),(bx,by)],fill=strap,width=5)
        out=np.array(im)
Image.fromarray(out).save(A.out)
ov=out.copy(); f=fg(ba); e=f^ndimage.binary_erosion(f,iterations=3); ov[e]=[0,255,0]
Image.fromarray(ov).resize((W//2,H//2)).save('/tmp/dress_parts_ov.png'); print('ok')
