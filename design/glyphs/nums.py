N={'0':('M30 13 A17 17 0 1 0 30.1 13','วงกลม = ว่าง'),
'1':('M23 18 L31 12 L31 48','ไม้ 1 ท่อน'),
'2':('M16 14 L30 46 L44 14','มุม 2 ด้าน'),
'3':('M30 12 L47 44 L13 44 Z','สามเหลี่ยม 3 ด้าน'),
'4':('M30 10 L48 30 L30 50 L12 30 Z','สี่เหลี่ยม 4 ด้าน'),
'5':('M30 10 L41 46 L12 23 L48 23 L19 46 Z','ดาว 5 แฉก'),
'6':('M15 13 L45 13 L15 47 L45 47 Z','2 สามเหลี่ยม (3+3)'),
'7':('M15 47 L15 27 L30 12 L45 27 L45 47 Z','บ้าน (3+4)'),
'8':('M30 8 L41 18 L19 40 L30 50 L41 40 L19 18 Z','2 สี่เหลี่ยม (4+4)'),
'9':('M12 47 L48 47 L30 12 L18 38 L40 38 L30 22 L25 33 L34 33','3 ชั้น (3×3)')}
st='fill="none" stroke="#4a4239" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"'
out=[]; y=20
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">ตัวเลข 0–9 (เส้นเดียว ไม่ยกมือ)</text>'); y+=26
out.append(f'<text x="24" y="{y+10}" font-size="12" fill="#6b655c">จำง่าย: นับด้านหรือนับรูปที่ซ้อนกัน</text>'); y+=24
for i,k in enumerate(N):
  x=24+(i%2)*176; yy=y+(i//2)*76
  d,lab=N[k]
  out.append(f'<g transform="translate({x},{yy})"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/><path d="{d}" {st}/></g>')
  out.append(f'<text x="{x+70}" y="{yy+26}" font-size="18" fill="#3d3a35" font-weight="600">{k}</text><text x="{x+70}" y="{yy+46}" font-size="11.5" fill="#6b655c">{lab}</text>')
y+=5*76+10
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">เขียนเรียงหลัก</text>'); y+=30
for j,num in enumerate(['12','205']):
  x=24+j*176
  for i,c in enumerate(num):
    out.append(f'<g transform="translate({x+i*44},{y}) scale(0.68)"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/><path d="{N[c][0]}" {st} stroke-width="4"/></g>')
  out.append(f'<text x="{x}" y="{y+60}" font-size="12" fill="#3d3a35">= {num}</text>')
y+=76
svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="760" height="{y*2}" viewBox="0 0 380 {y}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="380" height="{y}" fill="#f4f1ea"/>'+''.join(out)+'</svg>'
open('nums.html','w').write('<html><body style="margin:0">'+svg+'</body></html>')
