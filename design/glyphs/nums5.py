N={'0':[[(22,22),(38,22),(38,38),(22,38),(22,22)]],
'1':[[(16,18),(44,18)],[(30,18),(30,44),(22,44)]],
'2':[[(18,16),(38,16),(38,28),(18,28)],[(28,28),(28,44),(44,44)]],
'3':[[(44,16),(20,16),(20,44)],[(20,30),(36,30),(36,42)]],
'4':[[(16,22),(44,22)],[(24,14),(24,44)],[(36,22),(36,34),(44,34)]],
'5':[[(16,18),(30,18),(30,42),(44,42)],[(30,30),(44,30)]],
'6':[[(16,16),(44,16)],[(16,28),(44,28),(44,44),(22,44),(22,36)]],
'7':[[(16,16),(44,16),(44,26)],[(30,16),(30,44)],[(16,44),(44,44)]],
'8':[[(16,16),(16,30),(44,30),(44,44)],[(30,16),(30,24)],[(30,36),(30,44)]],
'9':[[(16,40),(28,40),(28,16),(44,16)],[(38,24),(38,44)]]}
def path(k): return ' '.join('M'+' L'.join(f'{x} {y}' for x,y in pl) for pl in N[k])
st='fill="none" stroke="#e8b07a" stroke-width="3.4" stroke-linecap="square" stroke-linejoin="miter"'
out=[]; y=20
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#f1e4d0" font-weight="600">ตัวเลข 0–9 แบบอักษรบล็อก</text>'); y+=26
out.append(f'<text x="24" y="{y+10}" font-size="12" fill="#bfae98">เส้นตรงหักมุม · ไม่เกิน 3 ขีด · ไม่มีเส้นเฉียง</text>'); y+=24
for i in range(10):
  k=str(i); x=24+(i%5)*68; yy=y+(i//5)*84
  out.append(f'<g transform="translate({x},{yy})"><rect width="60" height="60" rx="8" fill="#211a1e" stroke="#e8b07a" stroke-width="1"/><path d="{path(k)}" {st}/><text x="30" y="78" font-size="14" text-anchor="middle" fill="#f1e4d0" font-weight="600">{k}</text></g>')
y+=2*84+14
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#f1e4d0" font-weight="600">เขียนเรียงหลัก</text>'); y+=30
for j,num in enumerate(['12','205','1937']):
  x=24+[0,96,206][j]
  for i,c in enumerate(num):
    out.append(f'<g transform="translate({x+i*30},{y}) scale(0.5)"><path d="{path(c)}" {st} stroke-width="5"/></g>')
  out.append(f'<text x="{x}" y="{y+48}" font-size="12" fill="#f1e4d0">= {num}</text>')
y+=64
svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="760" height="{y*2}" viewBox="0 0 380 {y}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="380" height="{y}" fill="#151013"/>'+''.join(out)+'</svg>'
open('nums5.html','w').write('<html><body style="margin:0">'+svg+'</body></html>')
