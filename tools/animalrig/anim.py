import numpy as np, math, pickle
from PIL import Image, ImageDraw
from scipy import ndimage
J=pickle.load(open('joints.pkl','rb'))
IM={k:Image.open(f'p_{k}.png') for k in J}
def piv(k,f=0.3):
  al=np.array(IM[k])[...,3]>0; h=al.shape[0]; sub=al[:int(h*f)]; yy,xx=np.where(sub); return np.array([xx.mean(),yy.mean()])
def knee(k):
  al=np.array(IM[k])[...,3]>0; h=al.shape[0]; sub=al[int(h*0.7):int(h*0.84)]; yy,xx=np.where(sub); return np.array([xx.mean(),yy.mean()+int(h*0.7)])
# rest layout (body-local coords)
BODY_SH=np.array([146,100.]); BODY_HIP=np.array([58,92.]); NECK=np.array([140,26.]); HEADP=np.array([88,138.])
FAR_OFF=np.array([14,-6.])
def M_rot(c,deg):
  t=math.radians(deg); C,S=math.cos(t),math.sin(t)
  return np.array([[C,-S,c[0]-C*c[0]+S*c[1]],[S,C,c[1]-S*c[0]-C*c[1]],[0,0,1]])
def M_tr(x,y): return np.array([[1,0,x],[0,1,y],[0,0,1.]])
def ap(M,p): v=M@np.array([p[0],p[1],1.]); return v[:2]
W,H=420,400; ORG=np.array([110,95.])
def place(canvas,k,M):
  inv=np.linalg.inv(M); canvas.alpha_composite(IM[k].transform((W,H),Image.AFFINE,tuple(inv[:2].ravel()),resample=Image.BICUBIC))
def leg(canvas,u,l,root,a1,a2,Mb):
  pu=piv(u); Mu=Mb@M_tr(*(root-pu))@M_rot(pu,a1)
  kn=ap(Mu,knee(u)); pl=piv(l,0.18)
  Ml=M_tr(*(kn-pl))@M_rot(pl,a1+a2)
  place(canvas,l,Ml); place(canvas,u,Mu)
def render(p):
  c=Image.new('RGBA',(W,H),(143,200,96,255))
  Mb=M_tr(*ORG)@M_tr(0,p.get('dy',0))@M_rot((100,100),p.get('lean',0))
  sl=Image.new('RGBA',(W,H)); ImageDraw.Draw(sl).ellipse([ORG[0]+5,ORG[1]+250,ORG[0]+190,ORG[1]+268],fill=(40,70,30,70)); c.alpha_composite(sl)
  leg(c,'uFF','lFF',BODY_SH+FAR_OFF,p['ff'],p['ffk'],Mb); leg(c,'uFB','lFB',BODY_HIP+FAR_OFF,p['fb'],p['fbk'],Mb)
  place(c,'body',Mb)
  leg(c,'uNB','lNB',BODY_HIP,p['nb'],p['nbk'],Mb)
  hd=Mb@M_tr(*(NECK-HEADP))@M_rot(HEADP,p.get('head',0)); place(c,'head',hd)
  leg(c,'uNF','lNF',BODY_SH,p['nf'],p['nfk'],Mb)
  return c
def walk(t):
  s=math.sin(t); c_=math.cos(t); A=15; K=28
  return dict(nf=A*s, nfk=max(0,-c_)*K, fb=A*s, fbk=max(0,-c_)*K,
              ff=-A*s, ffk=max(0,c_)*K, nb=-A*s, nbk=max(0,c_)*K,
              dy=-abs(s)*3, head=1.5*math.sin(2*t))
rest=dict(nf=0,nfk=0,ff=0,ffk=0,nb=0,nbk=0,fb=0,fbk=0)
render(rest).save('rest.png')
fr=[render(walk(i/12*2*math.pi)).convert('RGB') for i in range(12)]
fr[0].save('/mnt/user-data/outputs/deer_walk.gif',save_all=True,append_images=fr[1:],duration=90,loop=0)
sheet=Image.new('RGB',(W*4,H)); [sheet.paste(fr[i*3],(i*W,0)) for i in range(4)]; sheet.save('walk_sheet.png')
