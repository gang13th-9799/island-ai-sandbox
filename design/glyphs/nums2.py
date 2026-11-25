P={'TL':(16,16),'TM':(30,16),'TR':(44,16),'ML':(16,31),'MM':(30,31),'MR':(44,31),'BL':(16,46),'BM':(30,46),'BR':(44,46)}
SEQ={'0':['TL','MM'],'1':['TL','BL'],'2':['TL','BL','BR'],'3':['TL','TR','MM','BR'],'4':['TL','ML','MR','BR'],'5':['TL','MR','BM','ML'],'6':['TL','BR','BL','TR'],'7':['TL','BL','TR','BR'],'8':['TL','MM','TR','BR','BL'],'9':['TL','TR','BR','BL','MM']}
def path(k):
  d='M25 8 L16 16 '   # number mark: a small hook that starts every digit
  for p in SEQ[k][1:]: d+=f'L{P[p][0]} {P[p][1]} '
  return d
st='fill="none" stroke="#4a4239" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"'
out=[]; y=20
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">ตัวเลข 0–9 แบบใหม่</text>'); y+=26
out.append(f'<text x="24" y="{y+10}" font-size="12" fill="#6b655c">เส้นตรงล้วน · ทุกตัวเริ่มด้วยขีดเฉียงสั้นมุมซ้ายบน</text>'); y+=24
for i in range(10):
  k=str(i); x=24+(i%5)*68; yy=y+(i//5)*84
  out.append(f'<g transform="translate({x},{yy})"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/><path d="{path(k)}" {st}/><text x="30" y="78" font-size="14" text-anchor="middle" fill="#3d3a35" font-weight="600">{k}</text></g>')
y+=2*84+14
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">เขียนเรียงหลัก</text>'); y+=30
for j,num in enumerate(['12','205']):
  x=24+j*176
  for i,c in enumerate(num):
    out.append(f'<g transform="translate({x+i*44},{y}) scale(0.68)"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/><path d="{path(c)}" {st} stroke-width="4"/></g>')
  out.append(f'<text x="{x}" y="{y+60}" font-size="12" fill="#3d3a35">= {num}</text>')
y+=76
svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="760" height="{y*2}" viewBox="0 0 380 {y}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="380" height="{y}" fill="#f4f1ea"/>'+''.join(out)+'</svg>'
open('nums2.html','w').write('<html><body style="margin:0">'+svg+'</body></html>')
