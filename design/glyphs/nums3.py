B='M12 46 L48 46 '
N={'0':B+'M24 46 L30 36 M36 46 L30 36','1':B+'M16 46 L16 12','2':B+'M44 46 L44 12','3':B+'M30 46 L30 12','4':B+'M16 46 L16 12 M30 46 L30 12',
'5':B+'M16 46 L44 12','6':B+'M44 46 L16 12','7':B+'M16 46 L16 12 M16 46 L44 12','8':B+'M30 46 L30 12 M18 12 L42 12','9':B+'M44 46 L44 12 M44 46 L16 12'}
st='fill="none" stroke="#4a4239" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"'
out=[]; y=20
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">ตัวเลข 0–9 (เส้นตรง ไม่เกิน 3 ขีด)</text>'); y+=26
out.append(f'<text x="24" y="{y+10}" font-size="12" fill="#6b655c">ทุกตัวยืนบนเส้นฐานด้านล่าง = เครื่องหมายตัวเลข</text>'); y+=24
for i in range(10):
  k=str(i); x=24+(i%5)*68; yy=y+(i//5)*84
  out.append(f'<g transform="translate({x},{yy})"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/><path d="{N[k]}" {st}/><text x="30" y="78" font-size="14" text-anchor="middle" fill="#3d3a35" font-weight="600">{k}</text></g>')
y+=2*84+14
out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">เขียนเรียงหลัก</text>'); y+=30
for j,num in enumerate(['12','205']):
  x=24+j*176
  for i,c in enumerate(num):
    out.append(f'<g transform="translate({x+i*44},{y}) scale(0.68)"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/><path d="{N[c]}" {st} stroke-width="4"/></g>')
  out.append(f'<text x="{x}" y="{y+60}" font-size="12" fill="#3d3a35">= {num}</text>')
y+=76
svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="760" height="{y*2}" viewBox="0 0 380 {y}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="380" height="{y}" fill="#f4f1ea"/>'+''.join(out)+'</svg>'
open('nums3.html','w').write('<html><body style="margin:0">'+svg+'</body></html>')
