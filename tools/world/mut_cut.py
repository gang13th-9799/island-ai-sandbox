import numpy as np, sys
sys.path.insert(0,'/home/claude/terrain')
from PIL import Image
from rock_cut import cut
def L(f): return np.array(Image.open(f).convert('RGB')).astype(int)
def cell(a,x0,y0,x1,y1,ins):
  im=cut(a[y0+ins:y1-ins,x0+ins:x1-ins]); b=im.getbbox(); return im.crop(b)
out={}
a=L('hornstail.jpg'); H,W=a.shape[:2]; cw=W//4
for i in range(4): out[f'horn{i}']=cell(a,i*cw,0,(i+1)*cw,int(H*0.38),16)
for i in range(4): out[f'tail{i}']=cell(a,i*cw,int(H*0.38),(i+1)*cw,H-80,16)
a=L('wings.jpg'); H,W=a.shape[:2]
for r in range(3):
  for c in range(3):
    im=cell(a,c*W//3,r*H//3,(c+1)*W//3,(r+1)*H//3,6)
    if r==2 and c==2: im=im.transpose(Image.FLIP_LEFT_RIGHT)
    out[f'wing{r}_{c}']=im
a=L('armor.jpg'); H,W=a.shape[:2]
for i in range(3):
  sub=a[22:325, i*W//3+22:(i+1)*W//3-22]; s=min(sub.shape[:2]); sub=sub[:s,:s]
  out[f'skin{i}']=Image.fromarray(sub.astype(np.uint8)).convert('RGBA').resize((128,128),Image.LANCZOS)
  out[f'armor{i}']=cell(a,i*W//3,340,(i+1)*W//3,H,8)
for k,im in out.items(): im.save(k+'.png')
sheet=Image.new('RGBA',(1400,560),(120,180,70,255)); x=y=0; rowh=0
for k,im in out.items():
  q=im.copy(); q.thumbnail((130,130))
  if x+140>1400: x=0; y+=rowh+10; rowh=0
  sheet.alpha_composite(q,(x,y)); x+=140; rowh=max(rowh,q.height)
sheet.convert('RGB').save('/mnt/user-data/outputs/mutation_parts_cut.png')
print({k:v.size for k,v in out.items()})
