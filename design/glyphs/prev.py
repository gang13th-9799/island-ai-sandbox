import json, numpy as np
from PIL import Image
info=json.load(open('info.json'))
rows=[]
for k,i in info.items():
  full=np.array(Image.open(f'{k}_carved.png').convert('RGBA')); h,w=full.shape[:2]
  for npc in (2,3):
    cr=json.load(open(f'{k}_cr{npc}.json'))
    def xat(pts): return np.interp(np.arange(h),[p[1] for p in pts],[p[0] for p in pts])[:,None]
    bounds=[np.zeros((h,1))]+[xat(c) for c in cr]+[np.full((h,1),w)]
    X=np.arange(w)[None,:]
    for p in range(npc):
      base=np.array(Image.open(f'{k}_p{npc}_{p}.png')); px,py=i['p%d'%npc][p]['x'],i['p%d'%npc][p]['y']
      sub=full[py:py+base.shape[0],px:px+base.shape[1]].copy(); msk=(X>=bounds[p])&(X<bounds[p+1]); msk=msk[py:py+base.shape[0],px:px+base.shape[1]]
      # carved pixels over piece art (keep piece rim)
      carve=(np.abs(sub[...,:3].astype(int)-np.array(Image.open(f'{k}_whole.png'))[py:py+base.shape[0],px:px+base.shape[1],:3].astype(int)).sum(-1)>30)&msk&(base[...,3]>0)
      rim=(base[...,:3]==[70,62,58]).all(-1)
      base[carve&~rim,:3]=sub[carve&~rim,:3]
      Image.fromarray(base).save(f'{k}_p{npc}_{p}_c.png')
  # preview row: whole | 2 pieces apart | 3 pieces apart
  W=int(w*3.6); H=h+20; cv=Image.new('RGBA',(W,H),(143,200,96,255))
  cv.alpha_composite(Image.open(f'{k}_carved.png'),(10,10))
  ox=w+40
  for p in range(2): q=Image.open(f'{k}_p2_{p}_c.png'); cv.alpha_composite(q,(ox+i['p2'][p]['x']+p*14,10+i['p2'][p]['y']))
  ox+=w+50
  for p in range(3): q=Image.open(f'{k}_p3_{p}_c.png'); cv.alpha_composite(q,(ox+i['p3'][p]['x']+p*14,10+i['p3'][p]['y']))
  rows.append(cv)
WW=max(r.width for r in rows); out=Image.new('RGBA',(WW,sum(r.height for r in rows)),(143,200,96,255)); y=0
for r in rows: out.alpha_composite(r,(0,y)); y+=r.height
out.save('/mnt/user-data/outputs/stele_horizontal.png'); print(out.size)
