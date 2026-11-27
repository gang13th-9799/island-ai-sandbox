# Match the flower-festival sheet to the reference: pale peach-pink cloth, small straw sandals with pink straps, clear flower anklets
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage
B='/mnt/user-data/uploads/14ab5c70-image.jpg'
ba=np.array(Image.open(B).convert('RGB'))
def fg(a): a=a.astype(int); return ((np.minimum(a[...,0],a[...,2])-a[...,1])<55)&(a.sum(-1)>40)
bl,_=ndimage.label(fg(ba))
S=np.array(Image.open('flower.png').convert('RGB')).astype(float)
mag=(S[...,0]>200)&(S[...,1]<60)&(S[...,2]>200)
lab,_=ndimage.label(~mag)
r,g,b=S[...,0],S[...,1],S[...,2]
rose=(b>g+8)&(r-g>45)&(r>120)          # the rose cloth Gemini painted (skin has b<g)
REF=np.array([247,198,186.])
for pid in (6,2,3):
    # piece area in the dressed sheet = components overlapping the base piece
    ids=np.unique(lab[(bl==pid)&~mag]); ids=ids[ids>0]; area=np.isin(lab,ids)
    sel=area&rose
    L=(0.3*r+0.59*g+0.11*b); L=L/np.median(L[sel])
    S[sel]=np.clip(REF[None,:]*(0.55+0.45*L[sel][:,None]),0,255)
    print(pid,'recoloured',int(sel.sum()))
# feet: sandal + anklet on the base shin pieces
img=Image.fromarray(S.astype(np.uint8)); d=ImageDraw.Draw(img)
for pid in (10,11):
    m=bl==pid; ys,xs=np.where(m); H=ys.max()-ys.min()
    foot=m&(np.arange(m.shape[0])[:,None]>ys.max()-H*0.30)
    # sole: the lowest 7 px of every foot column
    for x in np.unique(np.where(foot)[1]):
        col=np.where(foot[:,x])[0]; yb=col.max()
        for y in range(yb-7,yb+1): S[y,x]=[226,190,128] if y<yb-1 else [150,110,70]
    img=Image.fromarray(S.astype(np.uint8)); d=ImageDraw.Draw(img)
    fy=np.where(foot)[0]; fx=np.where(foot)[1]; x0,x1=fx.min(),fx.max(); y0,y1=fy.min(),fy.max()
    pink=(232,150,160); dark=(150,80,90)
    for (ax,ay,bx,by) in [(x0+0.25*(x1-x0),y0+0.15*(y1-y0),x0+0.65*(x1-x0),y1-6),(x0+0.65*(x1-x0),y0+0.25*(y1-y0),x0+0.35*(x1-x0),y1-6)]:
        d.line([(ax,ay),(bx,by)],fill=dark,width=9); d.line([(ax,ay),(bx,by)],fill=pink,width=5)
    # anklet: a row of small daisies just above the foot
    ay=int(y0-6); row=m[ay]; axs=np.where(row)[0]
    for x in np.linspace(axs.min()+5,axs.max()-5,5):
        d.ellipse([x-6,ay-6,x+6,ay+6],fill=(255,255,250),outline=(120,90,80)); d.ellipse([x-2.5,ay-2.5,x+2.5,ay+2.5],fill=(245,200,70))
    S=np.array(img).astype(float)
    # keep everything inside the base piece (straps may not leave the foot)
img=Image.fromarray(S.astype(np.uint8))
out=np.array(img); keep=~mag | np.isin(bl,[10,11]); out[~keep]=[255,0,255]
Image.fromarray(out).save('flower_ref.png'); print('ok')
