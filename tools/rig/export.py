import os, sys, json
import poses as P
from PIL import Image
import numpy as np
name=sys.argv[1]; SC=0.125
out=f'/home/claude/rig/export/{name}'; os.makedirs(out,exist_ok=True)
pieces={}
def add(key,arr):
  a=arr[...,3]>8
  if not a.any(): return
  ys,xs=np.where(a); x0,y0,x1,y1=xs.min()-2,ys.min()-2,xs.max()+3,ys.max()+3
  im=Image.fromarray(arr[y0:y1,x0:x1]); w,h=im.size
  im=im.resize((max(1,round(w*SC)),max(1,round(h*SC))),Image.LANCZOS)
  pieces[key]=dict(img=im,x=x0*SC,y=y0*SC)
H_,W_=P.H,P.W
def blank(): return np.zeros((H_,W_,4),np.uint8)
for k in ('head','chest','pelvis'):
  b=blank(); m=P.A[k][...,3]>0; b[m]=P.A[k][m]; add(k,b)
for s in P.segs: add(s,P.cln[s])
if P.CST is not None:
  for k,v in P.CSTFULL.items():
    if k in ('swirlF',): continue
    add('cape_'+str(k),v)
# atlas
keys=list(pieces); x=0; hmax=0; pad=2
for k in keys: hmax=max(hmax,pieces[k]['img'].size[1])
tw=sum(pieces[k]['img'].size[0]+pad for k in keys)
atlas=Image.new('RGBA',(tw,hmax))
meta={}
for k in keys:
  im=pieces[k]['img']; atlas.paste(im,(x,0))
  meta[k]=dict(sx=x,sy=0,w=im.size[0],h=im.size[1],x=round(pieces[k]['x'],2),y=round(pieces[k]['y'],2)); x+=im.size[0]+pad
atlas.save(out+'/atlas.png',optimize=True)
J={k:[round(v[0]*SC,2),round(v[1]*SC,2)] for k,v in P.J.items()}
info=dict(pieces=meta,joints=J,skirt=bool(P.SKIRT),cape=P.CST is not None)
if P.CST is not None: info['capeAnchor']=[round(P.ANCFULL[0]*SC,2),round(P.ANCFULL[1]*SC,2)]
json.dump(info,open(out+'/rig.json','w'))
print(name,atlas.size,len(keys))
