import json, math, cv2, os
from asm import *
from PIL import ImageDraw, ImageFont
off={k:tuple(v) if isinstance(v,list) else v for k,v in json.load(open('off.json')).items()}
P=build(off)
A={k:np.array(im) for k,im in P.items()}
M={k:a[...,3]>128 for k,a in A.items()}
S=np.array(Image.open('smooth_rgba.png'))
Y,X=np.mgrid[0:H,0:W]
J_old={'shN':(1170,770),'shF':(1420,770),'elN':(1100,890),'elF':(1495,895),'wrN':(1045,1018),'wrF':(1545,1015),
   'hipN':(1222,1085),'hipF':(1370,1085),'knN':(1215,1215),'knF':(1367,1215),'anN':(1212,1320),'anF':(1385,1318),
   'neck':(1300,692),'nb':(1298,750),'waist':(1296,968),'pel':(1296,1050),'top':(1290,170),'hc':(1290,430)}
J={k:tuple(int(round(x)) for x in v) for k,v in json.load(open('joints2.json')).items()}
J['top']=(J['hc'][0],J['hc'][1]-260)
def _axis(m):
  ys,xs=np.where(m); Pt=np.stack([xs,ys],1).astype(float); c=Pt.mean(0)
  u=np.linalg.svd(Pt-c,full_matrices=False)[2][0]
  if u[1]<0: u=-u
  t=(Pt-c)@u; return c,u,t.min(),t.max()
c_,u_,t0_,t1_=_axis(M['foL']); J['fist']=tuple(c_+u_*(t1_-48))
c_,u_,t0_,t1_=_axis(M['foR']); J['fistF']=tuple(c_+u_*(t1_-48))
# ---- body layer (raw pieces, seams smoothed where not covered by limbs)
body=np.zeros_like(S)
for k in ['pelvis','chest','head']:
  m=A[k][...,3]>0; body[m]=A[k][m]
limbs=M['upL']|M['foL']|M['upR']|M['foR']|M['thL']|M['thR']|M['shinL']|M['shinR']
bm=(M['pelvis']|M['chest']|M['head'])&~ndimage.binary_dilation(limbs,iterations=6)&(S[...,3]>128)
if not os.environ.get('SHEET'): body[bm]=S[bm]
def clean(a,ext):
  rgb=a[...,:3].copy(); vis=a[...,3]>128
  if (ext&vis).sum()==0: return a
  med=np.median(rgb[ext&vis],0).astype(np.uint8); rgb2=rgb.copy(); rgb2[~vis]=med
  dark=(rgb2.astype(int).sum(-1)<330)&ext; dark=ndimage.binary_dilation(dark,iterations=3)&ext
  fx=cv2.inpaint(cv2.cvtColor(rgb2,cv2.COLOR_RGB2BGR),(dark*255).astype(np.uint8),7,cv2.INPAINT_TELEA)
  rgb[dark]=cv2.cvtColor(fx,cv2.COLOR_BGR2RGB)[dark]; a=a.copy(); a[...,:3]=rgb; return a
Sal=S[...,3]>128; dS=ndimage.distance_transform_edt(Sal)
def capfill(a,add):
  if not os.environ.get('SHEET'): return S[add]
  vis=a[...,3]>200
  inner=vis&(a[...,:3].astype(int).sum(-1)>220)
  inner=ndimage.binary_erosion(inner,iterations=6)
  if inner.sum()==0: return S[add]
  _,(iy,ix)=ndimage.distance_transform_edt(~inner,return_indices=True)
  out=a[iy,ix].copy(); out[...,3]=255
  return out[add]
segs={'upN':('upL','shN','body'),'foN':('foL','elN','upN'),'upF':('upR','shF','body'),'foF':('foR','elF','upF'),
      'thN':('thL','hipN','body'),'shN':('shinL','knN','thN'),'thF':('thR','hipF','body'),'shF':('shinR','knF','thF')}
raw={};cln={}
for s,(pk,j,par) in segs.items():
  r=max(dS[J[j][1],J[j][0]]+4,40); disc=(X-J[j][0])**2+(Y-J[j][1])**2<=r*r
  cap=disc&Sal; a=A[pk].copy(); add=cap&~M[pk]
  a[add]=capfill(a,add); raw[s]=a; cln[s]=clean(a,add)
for s,(pk,j,par) in segs.items():
  if par in raw:
    r=max(dS[J[j][1],J[j][0]]+4,40); disc=(X-J[j][0])**2+(Y-J[j][1])**2<=r*r
    add=disc&Sal&~(raw[par][...,3]>128)
    for dct in (raw,cln): dct[par][add]=capfill(dct[par],add)
# ---- to working canvas
OX,OY,SC=600,600,0.4
WW,WH=int(1400*SC),int((H+700)*SC)
def tow(a):
  c=Image.new('RGBA',(1400,H+700)); c.alpha_composite(Image.fromarray(a),(-OX,OY)) if False else c.paste(Image.fromarray(a).crop((OX,0,OX+1400,H)),(0,OY))
  return np.array(c.resize((WW,WH),Image.LANCZOS))
def tp(p): return ((p[0]-OX)*SC,(p[1]+OY)*SC)
SKIRT=os.environ.get('SHEET') is not None and os.environ.get('PANTS') is None
SPLITPEL=os.environ.get('SHEET') is not None
if SPLITPEL:
  pm=A['pelvis'][...,3]>0
  pel=np.zeros_like(body); pel[pm]=A['pelvis'][pm]; top_=body.copy(); top_[pm&~(A['chest'][...,3]>0)&~(A['head'][...,3]>0)]=0
  PEL=tow(pel); body=top_
CAPE=None
if os.environ.get('SHEET') and os.environ.get('CAPEX') and (lab==12).any():
  cm_=ndimage.binary_dilation(lab==12,iterations=4); ca=rgba.copy(); ca[...,3]=(ca[...,3]*cm_).astype(np.uint8)
  ys_,xs_=np.where(lab==12); cimg=Image.fromarray(ca).crop((xs_.min(),ys_.min(),xs_.max(),ys_.max()))
  sc_=350/cimg.size[0]; cimg=cimg.resize((int(cimg.size[0]*sc_),int(cimg.size[1]*sc_)),Image.LANCZOS)
  full=Image.new('RGBA',(W,H)); full.alpha_composite(cimg,(int(J['nb'][0]-cimg.size[0]*0.55),int(J['nb'][1]-cimg.size[1]*0.13)))
  CAPE=tow(np.array(full))
  cys=np.where(CAPE[...,3].max(1)>20)[0]; CTOP,CBOT=cys.min(),cys.max()
  NSEG=5; CSTR=[]
  for k in range(NSEG):
    y0=int(CTOP+(CBOT-CTOP)*k/NSEG)-(10 if k else 0); y1=int(CTOP+(CBOT-CTOP)*(k+1)/NSEG)+2
    st_=np.zeros_like(CAPE); st_[y0:y1]=CAPE[y0:y1]; CSTR.append((st_,int(CTOP+(CBOT-CTOP)*k/NSEG)))
CST=None
if os.environ.get('CAPESHEET'):
  CAPE=None
  cs=np.array(Image.open(os.environ['CAPESHEET']).convert('RGB')).astype(float)
  cd=np.sqrt(((cs-[255,0,255])**2).sum(-1)); cal=np.clip((cd-90)/80,0,1)
  lim=np.minimum(cs[...,0],cs[...,2]); spl=np.clip(lim-cs[...,1]-60,0,None)*(1-cal); cs[...,0]-=spl; cs[...,2]-=spl
  crgba=np.dstack([np.clip(cs,0,255),cal*255]).astype(np.uint8); clab,_=ndimage.label(cd>120)
  spec={1:((341,158),False),2:((1001,157),True),3:((1608,175),True),4:((148,914),True),5:((1075,875),False),6:((1901,874),False),'front':((2346,661),False),'swirlF':((1356,870),False)}
  SCC=0.85; anchor=(J['nb'][0]+18,J['nb'][1]-30)
  CST={}; CSTFULL={}
  for k,(cl,flip) in spec.items():
    j=clab[int(cl[1]),int(cl[0])]
    if j==0:
      sub=clab[int(cl[1])-40:int(cl[1])+40,int(cl[0])-40:int(cl[0])+40]; j=np.bincount(sub[sub>0]).argmax()
    m=ndimage.binary_dilation(clab==j,iterations=3); a=crgba.copy(); a[...,3]=(a[...,3]*m).astype(np.uint8)
    ys_,xs_=np.where(clab==j); x0,y0=xs_.min(),ys_.min(); im=Image.fromarray(a).crop((x0,y0,xs_.max()+1,ys_.max()+1))
    cx,cy=cl[0]-x0,cl[1]-y0
    if flip: im=im.transpose(Image.FLIP_LEFT_RIGHT); cx=im.size[0]-1-cx
    im=im.resize((int(im.size[0]*SCC),int(im.size[1]*SCC)),Image.LANCZOS); cx*=SCC; cy*=SCC
    an_=(J['nb'][0]+8,J['nb'][1]+58) if k=='front' else anchor
    if k=='front': im=im.resize((int(im.size[0]*1.12),int(im.size[1]*1.12)),Image.LANCZOS); cx*=1.12; cy*=1.12
    full=Image.new('RGBA',(W,H)); full.alpha_composite(im,(int(an_[0]-cx),int(an_[1]-cy)))
    CST[k]=tow(np.array(full)); CSTFULL[k]=np.array(full)
  hl_=np.zeros_like(body); hm_=A['head'][...,3]>0; hl_[hm_]=A['head'][hm_]; HEADW=tow(hl_)
  ANCW=tp(anchor); ANCFULL=anchor
BODY=tow(body); RAW={k:tow(v) for k,v in raw.items()}; CLN={k:tow(v) for k,v in cln.items()}
JW={k:tp(v) for k,v in J.items()}
# sword on near forearm
SW=Image.new('RGBA',(WW,WH)); d=ImageDraw.Draw(SW)
f=np.array(JW['wrN']); e=np.array(JW['elN']); u=(f-e)/np.linalg.norm(f-e); n=np.array([-u[1],u[0]])
P_=lambda a,b:tuple(f+u*a+n*b)
d.polygon([P_(-22,-6),P_(-22,6),P_(22,6),P_(22,-6)],fill=(110,70,40,255),outline=(60,35,20,255))
d.ellipse([*(f-u*26-5),*(f-u*26+5)],fill=(200,170,60,255))
d.polygon([P_(20,-22),P_(20,22),P_(28,22),P_(28,-22)],fill=(190,160,70,255),outline=(90,60,20,255))
d.polygon([P_(28,-8),P_(28,8),P_(205,6),P_(225,0),P_(205,-6)],fill=(215,225,235,255),outline=(70,80,95,255))
d.line([P_(30,0),P_(205,0)],fill=(160,175,190,255),width=2)
SWORD=np.array(SW)
def Mrot(p,deg):
  t=math.radians(deg); c,s=math.cos(t),math.sin(t)
  return np.array([[c,s,p[0]-c*p[0]-s*p[1]],[-s,c,p[1]+s*p[0]-c*p[1]],[0,0,1]])
def Mtr(dx,dy): return np.array([[1,0,dx],[0,1,dy],[0,0,1]],float)
def app(Mx,p): v=Mx@np.array([p[0],p[1],1.0]); return (v[0],v[1])
def draw(c,img,Mx):
  inv=np.linalg.inv(Mx); c.alpha_composite(Image.fromarray(img).transform((WW,WH),Image.AFFINE,tuple(inv[:2].ravel()),resample=Image.BICUBIC))
GROUND=JW['anN'][1]+6
FONT=ImageFont.truetype('/usr/share/fonts/opentype/tlwg/Loma-Bold.otf',26)
def render(p,bones=True,sword=False,label=''):
  ang={'upN':p['upN'],'foN':p['foN'],'upF':p['upF'],'foF':p['foF'],'thN':p['thN'],'shN':p['knN'],'thF':p['thF'],'shF':p['knF']}
  Mb=Mtr(p['dx'],p['dy'])@Mrot(JW['hipN'][0]/2+JW['hipF'][0]/2 and ((JW['hipN'][0]+JW['hipF'][0])/2,JW['hipN'][1]),p['lean'])
  Mm={'body':Mb}
  for s,(pk,j,par) in segs.items(): Mm[s]=Mm[par]@Mrot(JW[j],ang[s])
  TWO=p.get('two',0)!=0 and sword and sword!='bow'
  if TWO:
    fc0=np.array(app(Mm['foN'],JW['fist'])); th0=math.radians(p['sabs']); dv0=np.array([math.cos(th0),math.sin(th0)])
    S=np.array(app(Mb,JW['shF'])); E0=np.array(app(Mb,JW['elF'])); F0=np.array(app(Mb,JW['fistF']))
    L1=np.linalg.norm(E0-S); L2=np.linalg.norm(F0-E0)
    def ik(T,flip):
      dvec=T-S; dn=np.linalg.norm(dvec)
      if dn>L1+L2-1 or dn<abs(L1-L2)+1: return None
      dvec=dvec/dn; a_=(L1*L1-L2*L2+dn*dn)/(2*dn); hh=math.sqrt(max(0,L1*L1-a_*a_)); Pp=S+dvec*a_
      perp=np.array([-dvec[1],dvec[0]]); E1=Pp+perp*hh; E2=Pp-perp*hh; E=E1 if E1[1]>E2[1] else E2
      if flip: E=E2 if E is E1 else E1
      return E
    def score(T,E):
      down=np.array(app(Mb,(0,1)))-np.array(app(Mb,(0,0))); down/=np.linalg.norm(down)
      fwd=np.array([down[1]*-1*-1,0])  # placeholder
      ua=(E-S)/L1; tgt_t=math.radians(p.get('uarm',25)); tgt=np.array([down[0]*math.cos(tgt_t)-down[1]*math.sin(tgt_t)*-1, down[1]*math.cos(tgt_t)+down[0]*math.sin(tgt_t)])
      tgt=np.array([math.sin(tgt_t)*1+down[0]*0, math.cos(tgt_t)])  # screen: forward = +x, down = +y
      c1=1-ua@tgt
      fa=(T-E)/L2; bend=1-ua@fa
      return c1*3+max(0,bend-0.9)*2
    if p.get('slide',0):
      best=None
      lo,hi=(20,280) if p['two']>0 else (-280,-20)
      for off_ in range(lo,hi+1,5):
        T_=fc0+dv0*off_
        for fl in (0,1):
          E_=ik(T_,fl)
          if E_ is None: continue
          sc_=score(T_,E_)+abs(off_-p['two'])*0.0015
          if best is None or sc_<best[0]: best=(sc_,T_,E_)
      if best: T,E=best[1],best[2]
      else: T=fc0+dv0*p['two']; E=ik(T,p.get('flip',0)>0.5)
    else:
      T=fc0+dv0*p['two']; E=ik(T,p.get('flip',0)>0.5)
    if E is None:
      dvec=T-S; dvec=dvec/np.linalg.norm(dvec); T=S+dvec*(L1+L2-2); E=S+dvec*L1
    A=lambda v:math.degrees(math.atan2(v[1],v[0]))
    ang['upF']=A(E0-S)-A(E-S); Mm['upF']=Mb@Mrot(JW['shF'],ang['upF'])
    F1=np.array(app(Mm['upF'],JW['fistF'])); ang['foF']=A(F1-E)-A(T-E); Mm['foF']=Mm['upF']@Mrot(JW['elF'],ang['foF'])
  BOWL=None; STRL=None; BOWB=None
  if sword=='bow':
    A_=lambda v:math.degrees(math.atan2(v[1],v[0]))
    def arm_ik(up,fo,sh,el,fi,T,flip=False,back=None):
      S=np.array(app(Mb,JW[sh])); E0=np.array(app(Mb,JW[el])); F0=np.array(app(Mb,JW[fi]))
      L1=np.linalg.norm(E0-S); L2=np.linalg.norm(F0-E0); dvec=T-S; dn=np.linalg.norm(dvec)
      dn=min(max(dn,abs(L1-L2)+2),L1+L2-1.5); dvec=dvec/np.linalg.norm(dvec); T=S+dvec*dn
      a_=(L1*L1-L2*L2+dn*dn)/(2*dn); hh=math.sqrt(max(0,L1*L1-a_*a_)); Pp=S+dvec*a_
      pr=np.array([-dvec[1],dvec[0]]); E1=Pp+pr*hh; E2=Pp-pr*hh; E=E1 if E1[1]>E2[1] else E2
      if flip: E=E2 if E is E1 else E1
      if back is not None: E=E1 if (E1@back)<(E2@back) else E2
      ang[up]=A_(E0-S)-A_(E-S); Mm[up]=Mb@Mrot(JW[sh],ang[up])
      F1=np.array(app(Mm[up],JW[fi])); ang[fo]=A_(F1-E)-A_(T-E); Mm[fo]=Mm[up]@Mrot(JW[el],ang[fo])
      return S,L1+L2,T
    aim=math.radians(p['aim']); ad=np.array([math.cos(aim),math.sin(aim)]); an=np.array([-ad[1],ad[0]])
    SF=np.array(app(Mb,JW['shF'])); SN=np.array(app(Mb,JW['shN']))
    _,reach,_=arm_ik('upF','foF','shF','elF','fistF',SF+ad*1000)
    grip=SF+ad*(reach-2); arm_ik('upF','foF','shF','elF','fistF',grip)
    grip=np.array(app(Mm['foF'],JW['fistF']))
    dl=p['draw']; DL=np.linalg.norm(grip-SN)*0.78
    nock=grip-ad*(18+dl*DL); hd=max(dl,p.get('hold',0)); htgt=grip-ad*(18+hd*DL)
    _,reachN,_=arm_ik('upN','foN','shN','elN','fist',SN+np.array([0.0,1000.0]))
    if hd<0.04:
      rd=np.array([math.sin(math.radians(38)),math.cos(math.radians(38))]); arm_ik('upN','foN','shN','elN','fist',SN+rd*(reachN-3))
    else: arm_ik('upN','foN','shN','elN','fist',htgt+an*4,back=ad)
    hand=np.array(app(Mm['foN'],JW['fist']))
    if dl>0.05 and p.get('hold',0)<0.05: pass
    hand_s=hand if p.get('hold',0)<0.05 else nock
    bend=dl*22
    top=grip-an*118-ad*(10+bend*0.4); bot=grip+an*118-ad*(10+bend*0.4)
    ctl1=grip-an*70+ad*(18+bend*0.3); ctl2=grip+an*70+ad*(18+bend*0.3)
    def bez(p0,p1,p2,n=14): return [tuple((1-t)**2*p0+2*(1-t)*t*p1+t*t*p2) for t in np.linspace(0,1,n)]
    BOWL=Image.new('RGBA',(WW,WH)); bd=ImageDraw.Draw(BOWL)
    limb=bez(top,ctl1,grip)+bez(grip,ctl2,bot)[1:]
    bd.line(limb,fill=(60,35,20,255),width=12,joint='curve'); bd.line(limb,fill=(150,100,55,255),width=7,joint='curve')
    bd.line([tuple(grip-an*14),tuple(grip+an*14)],fill=(200,170,90,255),width=11)
    STRL=Image.new('RGBA',(WW,WH)); sdd=ImageDraw.Draw(STRL)
    sp=hand_s if dl>0.05 else grip-ad*14
    sdd.line([tuple(top),tuple(sp),tuple(bot)],fill=(235,230,210,255),width=3)
    if p.get('arrow',1)>0.5 and dl>0.03:
      tail=hand_s if dl>0.05 else grip-ad*40; tip=tail+ad*230
      sdd.line([tuple(tail),tuple(tip)],fill=(90,60,30,255),width=6); sdd.line([tuple(tail),tuple(tip)],fill=(185,140,80,255),width=3)
      sdd.polygon([tuple(tip+ad*22),tuple(tip+an*9),tuple(tip-an*9)],fill=(150,150,145,255),outline=(60,60,60,255))
      for k in (0,14): sdd.polygon([tuple(tail+ad*k),tuple(tail+ad*(k+22)-an*12),tuple(tail+ad*(k+22))],fill=(220,60,50,255))
    fly=p.get('fly',0)
    if fly>5:
      fx_=grip+ad*(60+fly); sdd.line([tuple(fx_-ad*230),tuple(fx_)],fill=(185,140,80,255),width=4)
      sdd.polygon([tuple(fx_+ad*22),tuple(fx_+an*9),tuple(fx_-an*9)],fill=(150,150,145,255))
      sdd.line([tuple(fx_-ad*300),tuple(fx_-ad*240)],fill=(255,255,255,160),width=3)
    BOWB=(tuple(top),tuple(grip),tuple(bot),tuple(hand))
  c=Image.new('RGBA',(WW,WH),(238,245,232,255)); dd=ImageDraw.Draw(c)
  cx=WW/2+p['dx']; h=max(0,-p['dy']); sw=70-h*0.12
  so=Image.new('RGBA',(WW,WH)); sd=ImageDraw.Draw(so)
  sd.ellipse([cx-sw,GROUND-9,cx+sw,GROUND+9],fill=(0,0,0,int(45-h*0.08)))
  for dust in p.get('dust',[]): sd.ellipse([dust[0]-dust[2],GROUND-dust[2]*0.6,dust[0]+dust[2],GROUND+4],fill=(200,180,140,150))
  c.alpha_composite(so)
  so=None; behind=False; SWB=None
  if sword and sword!='bow':
    fc=np.array(app(Mm['foN'],JW['fist'])); el=np.array(app(Mm['foN'],JW['elN']))
    th=math.radians(p['sabs']); dv=np.array([math.cos(th),math.sin(th)])
    SWB=(tuple(fc-dv*34),tuple(fc),tuple(fc+dv*232)); nv=np.array([-dv[1],dv[0]])
    so=Image.new('RGBA',(WW,WH)); sd=ImageDraw.Draw(so); Q=lambda a,b:tuple(fc+dv*a+nv*b)
    if sword=='great':
      SWB=(tuple(fc-dv*70),tuple(fc),tuple(fc+dv*330))
      sd.polygon([Q(-66,-7),Q(-66,7),Q(30,7),Q(30,-7)],fill=(90,55,35,255),outline=(50,30,15,255))
      sd.ellipse([*(fc-dv*72-9),*(fc-dv*72+9)],fill=(200,170,60,255),outline=(90,60,20,255))
      sd.polygon([Q(30,-34),Q(30,34),Q(40,34),Q(40,-34)],fill=(190,160,70,255),outline=(90,60,20,255))
      sd.polygon([Q(40,-14),Q(40,14),Q(300,11),Q(332,0),Q(300,-11)],fill=(210,220,232,255),outline=(70,80,95,255))
      sd.line([Q(44,0),Q(300,0)],fill=(150,165,182,255),width=3)
    elif sword=='spear':
      SWB=(tuple(fc-dv*130),tuple(fc),tuple(fc+dv*300))
      sd.line([Q(-130,0),Q(262,0)],fill=(60,35,20,255),width=11); sd.line([Q(-128,0),Q(260,0)],fill=(150,105,60,255),width=6)
      sd.polygon([Q(250,-12),Q(300,0),Q(250,12),Q(240,0)],fill=(160,160,155,255),outline=(60,60,60,255))
      sd.line([Q(236,-8),Q(250,8)],fill=(190,160,90,255),width=4); sd.line([Q(250,-8),Q(236,8)],fill=(190,160,90,255),width=4)
    elif sword=='axe':
      SWB=(tuple(fc-dv*30),tuple(fc),tuple(fc+dv*150))
      sd.line([Q(-30,0),Q(150,0)],fill=(60,35,20,255),width=13); sd.line([Q(-28,0),Q(148,0)],fill=(130,85,45,255),width=8)
      sd.polygon([Q(112,-4),Q(112,52),Q(150,66),Q(160,40),Q(150,-4)],fill=(150,150,145,255),outline=(60,60,60,255))
      sd.line([Q(118,-10),Q(140,10)],fill=(190,160,90,255),width=5); sd.line([Q(140,-10),Q(118,10)],fill=(190,160,90,255),width=5)
    else:
      sd.polygon([Q(-30,-6),Q(-30,6),Q(22,6),Q(22,-6)],fill=(110,70,40,255),outline=(60,35,20,255))
      sd.ellipse([*(fc-dv*34-7),*(fc-dv*34+7)],fill=(200,170,60,255),outline=(90,60,20,255))
      sd.polygon([Q(22,-22),Q(22,22),Q(30,22),Q(30,-22)],fill=(190,160,70,255),outline=(90,60,20,255))
      sd.polygon([Q(30,-8),Q(30,8),Q(210,6),Q(232,0),Q(210,-6)],fill=(215,225,235,255),outline=(70,80,95,255))
      sd.line([Q(34,0),Q(210,0)],fill=(160,175,190,255),width=2)
    behind=False
  def put(s):
    w=max(0.0,1-abs(ang[s])/12); img=(CLN[s].astype(float)*(1-w)+RAW[s].astype(float)*w).astype(np.uint8); draw(c,img,Mm[s])
  PROP=globals().get('CUR','')
  pd=ImageDraw.Draw(c); gx=WW/2+p['dx']
  if PROP=='ตัดไม้':
    pd.rectangle([gx+105,GROUND-46,gx+175,GROUND],fill=(140,95,55),outline=(70,45,25),width=3); pd.ellipse([gx+100,GROUND-56,gx+180,GROUND-36],fill=(205,165,110),outline=(70,45,25),width=3)
  if PROP=='เก็บของ':
    for k,(ox,oy,r) in enumerate([(130,-30,30),(160,-22,26),(108,-18,24),(145,-48,24)]): pd.ellipse([gx+ox-r,GROUND+oy-r,gx+ox+r,GROUND+oy+r],fill=(70,140,60),outline=(40,90,35),width=2)
    for ox,oy in [(122,-38),(150,-30),(138,-52),(112,-24)]: pd.ellipse([gx+ox-6,GROUND+oy-6,gx+ox+6,GROUND+oy+6],fill=(200,40,70))
  if PROP=='นั่งข้างกองไฟ':
    fx=gx+150; fi=p.get('fire',0)
    pd.line([fx-36,GROUND-4,fx+36,GROUND-14],fill=(110,70,40),width=12); pd.line([fx-36,GROUND-14,fx+36,GROUND-4],fill=(130,85,45),width=12)
    fl=Image.new('RGBA',(WW,WH)); fd=ImageDraw.Draw(fl); h1=56+8*math.sin(fi*1.7); h2=38+6*math.sin(fi*2.3+1)
    fd.ellipse([fx-90,GROUND-120,fx+90,GROUND+30],fill=(255,170,60,40)); c.alpha_composite(fl)
    fl=Image.new('RGBA',(WW,WH)); fd=ImageDraw.Draw(fl)
    fd.polygon([(fx-26,GROUND-12),(fx+26,GROUND-12),(fx+4,GROUND-12-h1)],fill=(255,140,30,235)); fd.polygon([(fx-14,GROUND-12),(fx+14,GROUND-12),(fx-2,GROUND-12-h2)],fill=(255,225,90,245))
    c.alpha_composite(fl)
  if CST is not None:
    st_=p.get('cst',1); wob=-0.5*p['lean']+(p.get('capeseg') or [0])[0]*0.15
    if isinstance(st_,tuple): st_,rot_=st_
    else: rot_=0
    draw(c,CST[st_],Mb@Mrot(ANCW,wob+rot_))
  if CAPE is not None:
    seg=p.get('capeseg') or [p.get('cape',0)-0.6*p['lean']]+[0]*(NSEG-1)
    ax_=JW['nb'][0]; Mc=Mb@Mrot(JW['nb'],seg[0]); mats=[Mc]
    for k in range(1,NSEG):
      Mc=Mc@Mrot((ax_,CSTR[k][1]),seg[k]); mats.append(Mc)
    for k in reversed(range(NSEG)): draw(c,CSTR[k][0],mats[k])
  if SPLITPEL and not SKIRT: draw(c,PEL,Mb)
  for s in (['upF','thF','shF'] if TWO else ['upF','foF','thF','shF']): put(s)
  if sword and behind: c.alpha_composite(so)
  if BOWL: c.alpha_composite(BOWL)
  if SKIRT:
    for s in ['thN','shN']: put(s)
    draw(c,PEL,Mb); draw(c,BODY,Mb)
    if CST is not None: draw(c,HEADW,Mb); draw(c,CST['front'],Mb)
  elif SPLITPEL:
    for s in ['thN','shN']: put(s)
    draw(c,BODY,Mb)
    if CST is not None: draw(c,HEADW,Mb); draw(c,CST['front'],Mb)
  else:
    draw(c,BODY,Mb)
    for s in ['thN','shN']: put(s)
  if CST is not None and p.get('cst')==5 and False: draw(c,CST['swirlF'],Mb@Mrot(ANCW,-0.5*p['lean']))
  put('upN')
  if TWO: put('foF')
  if sword and not behind and so is not None and sword!='bow': c.alpha_composite(so)
  if STRL: c.alpha_composite(STRL)
  put('foN')
  if p.get('arc'):
    a0,a1=p['arc']; sh=app(Mm['body'],JW['shN']); R=300*1.0
    pts=[(sh[0]+R*math.sin(math.radians(t)),sh[1]+R*math.cos(math.radians(t))) for t in np.linspace(a0,a1,24)]
    ov=Image.new('RGBA',(WW,WH)); ImageDraw.Draw(ov).line(pts,fill=(255,255,255,170),width=10); c.alpha_composite(ov)
  if bones:
    ov=Image.new('RGBA',(WW,WH)); od=ImageDraw.Draw(ov)
    def jp(k,m): return app(Mm[m],JW[k])
    pts={'top':jp('top','body'),'hc':jp('hc','body'),'neck':jp('neck','body'),'nb':jp('nb','body'),'waist':jp('waist','body'),'pel':jp('pel','body'),
         'shN':jp('shN','body'),'shF':jp('shF','body'),'elN':jp('elN','upN'),'elF':jp('elF','upF'),'wrN':jp('wrN','foN'),'wrF':jp('wrF','foF'),
         'hipN':jp('hipN','body'),'hipF':jp('hipF','body'),'knN':jp('knN','thN'),'knF':jp('knF','thF'),'anN':jp('anN','shN'),'anF':jp('anF','shF')}
    col={'spine':(40,110,200,230),'N':(230,60,60,235),'F':(140,60,180,200),'Nl':(240,140,30,235),'Fl':(40,150,90,200)}
    B=[('top','neck','spine'),('neck','nb','spine'),('nb','waist','spine'),('waist','pel','spine'),
       ('nb','shF','F'),('shF','elF','F'),('elF','wrF','F'),('pel','hipF','Fl'),('hipF','knF','Fl'),('knF','anF','Fl'),
       ('nb','shN','N'),('shN','elN','N'),('elN','wrN','N'),('pel','hipN','Nl'),('hipN','knN','Nl'),('knN','anN','Nl')]
    for a,b,k in B: od.line([pts[a],pts[b]],fill=col[k],width=5)
    if BOWB:
      od.line([BOWB[0],BOWB[1],BOWB[2]],fill=(235,190,20,240),width=5); od.line([BOWB[1],BOWB[3]],fill=(235,190,20,200),width=3)
      for q in BOWB: od.ellipse([q[0]-6,q[1]-6,q[0]+6,q[1]+6],fill=(255,240,150,255),outline=(0,0,0,255),width=2)
    if sword and SWB:
      od.line([SWB[0],SWB[2]],fill=(235,190,20,240),width=5)
      for q in SWB: od.ellipse([q[0]-6,q[1]-6,q[0]+6,q[1]+6],fill=(255,240,150,255),outline=(0,0,0,255),width=2)
    for k,q in pts.items():
      if k=='hc': continue
      od.ellipse([q[0]-6,q[1]-6,q[0]+6,q[1]+6],fill=(255,255,255,240),outline=(0,0,0,255),width=2)
    c.alpha_composite(ov)
  if label: ImageDraw.Draw(c).text((12,10),label,font=FONT,fill=(40,40,40))
  return c.convert('RGB')
REST=dict(cape=0,hold=0,aim=0,draw=0,arrow=1,fly=0,slide=0,uarm=25,flip=0,two=0,fire=0,sabs=-30,grip=-90,dx=0,dy=0,lean=0,upN=0,foN=0,upF=0,foF=0,thN=0,knN=0,thF=0,knF=0)
def kf(keys,u):
  for i in range(len(keys)-1):
    t0,p0=keys[i]; t1,p1=keys[i+1]
    if t0<=u<=t1:
      w=(u-t0)/(t1-t0); w=w*w*(3-2*w)
      out={k:p0.get(k,REST.get(k,0))*(1-w)+p1.get(k,REST.get(k,0))*w for k in REST}
      for extra in ('arc','dust'):
        if extra in p1 and w>0.3: out[extra]=p1[extra]
      return out
  return dict(keys[-1][1])
def R(**k): d=dict(REST); d.update(k); return d
def walk(i,n):
  t=i/n*2*math.pi; s=math.sin(t)
  return R(cape=-5+2*math.sin(2*t),dy=-abs(math.cos(t))*6+3,thN=22*s,thF=-22*s,knN=-(4+40*max(0,math.sin(t+1.3))),knF=-(4+40*max(0,math.sin(t+1.3+math.pi))),
           upN=-22*s,upF=22*s,foN=15,foF=15)
def run(i,n):
  t=i/n*2*math.pi; s=math.sin(t)
  return R(cape=-18+5*math.sin(2*t),dy=-abs(math.sin(t))*18+6,lean=-8,thN=38*s,thF=-38*s,knN=-(10+75*max(0,math.sin(t+1.2))),knF=-(10+75*max(0,math.sin(t+1.2+math.pi))),
           upN=-42*s+8,upF=42*s+8,foN=55+15*s,foF=55-15*s)
JUMP=[(0,R()),(0.18,R(dy=28,lean=-12,thN=45,thF=40,knN=-90,knF=-85,upN=-45,upF=-35,foN=20,foF=20)),
      (0.32,R(dy=-40,lean=-4,thN=5,thF=-5,knN=-5,knF=-8,upN=135,upF=150,foN=10,foF=10)),
      (0.5,R(dy=-110,thN=45,thF=30,knN=-75,knF=-80,upN=105,upF=110,foN=30,foF=30)),
      (0.68,R(dy=-60,thN=20,thF=10,knN=-20,knF=-25,upN=70,upF=60,foN=20,foF=20)),
      (0.82,R(dy=24,lean=-10,thN=40,thF=35,knN=-80,knF=-75,upN=25,upF=20,foN=30,foF=30)),(1,R())]
SLIDE=[(0,R(dx=-90)),(0.2,R(dx=-60,dy=10,lean=-15,thN=30,thF=-30,knN=-40,knF=-30,upN=-30,upF=30,foN=40,foF=40)),
       (0.38,R(dx=-10,dy=48,lean=14,thN=78,knN=-4,thF=15,knF=-115,upN=-35,upF=75,foN=20,foF=40,dust=[(0,0,0)])),
       (0.7,R(dx=80,dy=48,lean=14,thN=78,knN=-4,thF=15,knF=-115,upN=-35,upF=75,foN=20,foF=40)),
       (0.88,R(dx=100,dy=15,lean=-5,thN=30,thF=-10,knN=-40,knF=-60,upN=-10,upF=20,foN=30,foF=30)),(1,R(dx=100))]
SLASH=[(0,R(upN=40,foN=40,upF=20,foF=40,sabs=-55)),
       (0.2,R(sabs=-156,lean=6,upN=150,foN=30,upF=-30,foF=30,thN=-8,thF=8,knN=-5)),
       (0.4,R(sabs=-180,lean=5,upN=160,foN=40,upF=-30,foF=30,thN=-8,thF=8)),
       (0.6,R(sabs=-60,dy=12,lean=-8,upN=100,foN=10,upF=10,foF=30,thN=22,knN=-22,thF=-15,arc=(175,90))),
       (0.75,R(sabs=0,dy=22,lean=-14,upN=55,foN=-5,upF=25,foF=40,thN=35,knN=-40,thF=-25,knF=-10,arc=(175,50))),
       (0.9,R(sabs=0,dy=22,lean=-14,upN=55,foN=-5,upF=25,foF=40,thN=35,knN=-40,thF=-25,knF=-10)),
       (1,R(upN=40,foN=40,upF=20,foF=40,sabs=-55))]
GSLASH=[(0,R(upN=40,foN=40,sabs=-70,two=-55)),
        (0.2,R(sabs=-156,lean=6,upN=150,foN=30,thN=-8,thF=8,knN=-5,two=-55)),
        (0.4,R(sabs=-180,lean=5,upN=160,foN=40,thN=-8,thF=8,two=-55)),
        (0.6,R(sabs=-60,dy=14,lean=-10,upN=100,foN=10,thN=25,knN=-25,thF=-18,two=-55,arc=(175,90))),
        (0.75,R(sabs=5,dy=26,lean=-16,upN=55,foN=-5,thN=38,knN=-42,thF=-25,knF=-10,two=-55,arc=(175,50))),
        (0.9,R(sabs=5,dy=26,lean=-16,upN=55,foN=-5,thN=38,knN=-42,thF=-25,knF=-10,two=-55)),(1,R(upN=40,foN=40,sabs=-70,two=-55))]
THRUST=[(0,R(upN=15,foN=60,sabs=-8,two=150,slide=1)),
        (0.3,R(dx=-10,lean=8,upN=-25,foN=75,sabs=-5,two=150,slide=1,thN=-10,thF=10,knF=-10)),
        (0.45,R(dx=-12,lean=8,upN=-28,foN=78,sabs=-5,two=150,slide=1,thN=-10,thF=10,knF=-10)),
        (0.58,R(dx=40,dy=14,lean=-16,upN=60,foN=20,sabs=0,two=150,slide=1,thN=40,knN=-35,thF=-25,knF=-5)),
        (0.8,R(dx=40,dy=14,lean=-16,upN=60,foN=20,sabs=0,two=150,slide=1,thN=40,knN=-35,thF=-25,knF=-5)),(1,R(upN=15,foN=60,sabs=-8,two=150,slide=1))]
BOWK=[(0,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=65,draw=0,lean=0)),
      (0.22,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=-2,draw=0.06,lean=2)),
      (0.48,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=-4,draw=1,lean=4)),
      (0.6,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=-4,draw=1,lean=4)),
      (0.63,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=-5,draw=0,hold=1.0,arrow=0,fly=60,lean=5)),
      (0.8,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=-6,draw=0,hold=1.0,arrow=0,fly=420,lean=5)),
      (0.86,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=-6,draw=0,hold=0.95,arrow=0,fly=0,lean=4)),(1,R(thN=-16,thF=18,knN=-6,knF=-8,dy=4,aim=65,draw=0,arrow=0))]
def cape_state(name,i,n):
  u=i/n; HANG=(3,40); HANG2=(3,32)
  if name=='เดิน': return (3,36+4*math.sin(i/n*4*math.pi))
  if name=='วิ่ง': return 3
  if name=='กระโดด': return HANG if u<0.15 else 3 if u<0.38 else 4 if u<0.62 else 3 if u<0.85 else HANG2
  if name=='สไลด์': return 3 if 0.2<=u<=0.8 else HANG2
  if name in ('ฟันดาบบนลงล่าง','ฟันดาบใหญ่สองมือ'):
    if u<0.5: return HANG
    if u<0.8: return 4
    w=(u-0.8)/0.2; return (3,40*w+8*(1-w))
  if name=='แทงหอกสองมือ': return 4 if 0.5<=u<=0.85 else HANG
  if name=='ยิงธนู': return (3,26) if 0.62<=u<=0.85 else HANG
  if name=='ตัดไม้': return (3,25) if 0.5<=u<=0.8 else HANG
  if name=='ยืนนิ่ง': return (3,40+2*math.sin(u*2*math.pi))
  return HANG
def cape_sim(ps):
  n=len(ps); hc=((JW['hipN'][0]+JW['hipF'][0])/2,JW['hipN'][1])
  anc=[]
  for p in ps:
    Mb=Mtr(p['dx'],p['dy'])@Mrot(hc,p['lean']); anc.append(np.array(app(Mb,JW['nb'])))
  a=[0.0]*5; v=[0.0]*5; out=None
  for loop in range(3):
    res=[]
    for i,p in enumerate(ps):
      q=ps[i-1]; vel=anc[i]-anc[i-1]
      if abs(vel[0])>60: vel=vel*0  # wrap jump
      arm=abs(p['upN']-q['upN'])+0.5*abs(p['upF']-q['upF'])+abs(p['lean']-q['lean'])
      wind=max(0,vel[0])*1.6+arm*0.55+abs(vel[1])*0.8
      tgt=-min(55,wind*2.2)
      fl=min(1,wind/10)
      for k in range(5):
        goal=(tgt*(0.35 if k==0 else 0.16))+(-0.6*p['lean'] if k==0 else 0)+fl*6*math.sin(i*1.3+k*1.1)*(k/4)
        prev=a[k-1] if k else goal
        acc=(goal-a[k])*0.45-v[k]*0.35+(0.12*(prev-a[k]) if k else 0)
        v[k]+=acc; a[k]+=v[k]
      res.append([max(-60,min(25,x)) for x in a])
    out=res
  for p,r in zip(ps,out): p['capeseg']=r
  return ps
def idle(i,n):
  t=i/n*2*math.pi; b=math.sin(t)
  return R(dy=b*2.5,upN=4+b*3,upF=-4-b*3,foN=8,foF=8,lean=b*0.8)
GATHER=[(0,R()),(0.3,R(dy=38,lean=-32,thN=55,knN=-85,thF=45,knF=-80,upN=55,foN=5,upF=20,foF=20)),
        (0.5,R(dy=40,lean=-34,thN=55,knN=-85,thF=45,knF=-80,upN=48,foN=0,upF=20,foF=20)),
        (0.7,R(dy=10,lean=-10,thN=15,knN=-25,thF=10,knF=-20,upN=60,foN=70,upF=10,foF=20)),(1,R(upN=50,foN=80))]
CHOP=[(0,R(upN=40,foN=50,sabs=-60)),(0.3,R(lean=8,upN=165,foN=30,upF=150,foF=30,sabs=-170,thN=-5,thF=5)),
      (0.42,R(lean=8,upN=168,foN=30,upF=152,foF=30,sabs=-175,thN=-5,thF=5)),
      (0.55,R(dy=20,lean=-18,upN=75,foN=0,upF=60,foF=10,sabs=-15,thN=25,knN=-30,thF=-15)),
      (0.62,R(dy=24,lean=-20,upN=60,foN=0,upF=50,foF=10,sabs=20,thN=28,knN=-35,thF=-15)),
      (0.8,R(dy=24,lean=-20,upN=60,foN=0,upF=50,foF=10,sabs=20,thN=28,knN=-35,thF=-15)),(1,R(upN=40,foN=50,sabs=-60))]
def sit(i,n):
  t=i/n*2*math.pi; b=math.sin(t)
  return R(dy=88+b*1.2,lean=6+b*0.8,thN=125,knN=-115,thF=118,knF=-110,upN=62+b*2,foN=55,upF=55,foF=50,fire=i)
def slide_p(i,n):
  p=kf(SLIDE,i/n)
  if 0.36<i/n<0.75: p['dust']=[(WW/2+p['dx']-60-k*28,0,10+k*5) for k in range(3)]
  return p
POSES=[('ยืนนิ่ง',16,idle,False),('เดิน',16,walk,False),('วิ่ง',14,run,False),('กระโดด',20,lambda i,n:kf(JUMP,i/n),False),
       ('สไลด์',20,slide_p,False),('ฟันดาบบนลงล่าง',20,lambda i,n:kf(SLASH,i/n),'sword'),
       ('เก็บของ',18,lambda i,n:kf(GATHER,i/n),False),('ตัดไม้',20,lambda i,n:kf(CHOP,i/n),'axe'),('ฟันดาบใหญ่สองมือ',20,lambda i,n:kf(GSLASH,i/n),'great'),('แทงหอกสองมือ',18,lambda i,n:kf(THRUST,i/n),'spear'),('ยิงธนู',22,lambda i,n:kf(BOWK,i/n),'bow'),('นั่งข้างกองไฟ',16,sit,False)]
if __name__=='__main__':
  frames=[];sheet_rows=[]
  for name,n,fn,sw in POSES:
    globals()['CUR']=name
    PS=cape_sim([fn(i,n) for i in range(n)]) if (CAPE is not None or CST is not None) else [fn(i,n) for i in range(n)]
    for i_,pp in enumerate(PS): pp['cst']=cape_state(name,i_,n)
    fr=[render(PS[i],os.environ.get('BONES','1')=='1',sw,name) for i in range(n)]
    frames+=fr
    pick=[fr[int(k*n/5)] for k in range(5)]
    row=Image.new('RGB',(WW*5,WH),'white')
    for j,im in enumerate(pick): row.paste(im,(j*WW,0))
    sheet_rows.append(row.crop((0,120,WW*5,WH)))
  frames[0].save(os.environ.get('OUT','poses')+'.gif',save_all=True,append_images=frames[1:],duration=70,loop=0)
  hh=sum(r.size[1] for r in sheet_rows); sheet=Image.new('RGB',(WW*5,hh),'white'); y=0
  for r in sheet_rows: sheet.paste(r,(0,y)); y+=r.size[1]
  sheet.resize((sheet.size[0]//2,sheet.size[1]//2),Image.LANCZOS).save(os.environ.get('OUT','poses')+'_sheet.png')
