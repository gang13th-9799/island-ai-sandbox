exec(open('make.py').read().split("sec=[")[0])
G.update({
'มนุษย์':'M30 10 A6 6 0 1 0 30.1 10 M30 22 L30 38 M18 28 L42 28 M30 38 L21 50 M30 38 L39 50',
'ลำตัว':'M19 14 L41 14 L43 38 Q30 48 17 38 Z M24 22 L36 22',
'แขน':'M12 16 L28 34 L44 26 M44 26 A4 4 0 1 0 44.1 26',
'ขา':'M26 10 L29 32 L24 48 L40 48',
'ตา':'M10 30 Q30 14 50 30 Q30 46 10 30 Z M30 25 A5 5 0 1 0 30.1 25',
'หู':'M24 12 Q46 10 42 30 Q40 42 28 46 M30 22 Q37 26 32 33',
'จมูก':'M30 12 L22 38 Q30 45 38 38',
'ปาก':'M14 26 Q30 44 46 26 Q30 32 14 26 Z',
'มือ':'M18 48 L18 30 M24 48 L24 16 M30 48 L30 14 M36 48 L36 16 M42 48 L42 22 M18 30 L10 22 M18 48 L42 48',
'รวม':'M24 18 A12 12 0 1 0 24.1 18 M36 18 A12 12 0 1 0 36.1 18',
'สัตว์':'M14 24 L40 24 Q46 29 40 34 L14 34 Q9 29 14 24 M40 24 L46 15 L50 19 M16 34 L16 46 M23 34 L23 46 M31 34 L31 46 M38 34 L38 46 M12 26 L6 20',
'ใหญ่':'M22 22 L38 22 L38 38 L22 38 Z M10 10 L18 18 M50 10 L42 18 M10 50 L18 42 M50 50 L42 42',
'เล็ก':'M26 26 L34 26 L34 34 L26 34 Z M10 10 L21 21 M50 10 L39 21 M10 50 L21 39 M50 50 L39 39',
'วัน':'M30 21 A9 9 0 1 0 30.1 21 M30 8 L30 14 M30 46 L30 52 M8 30 L14 30 M46 30 L52 30 M14 14 L18 18 M46 14 L42 18 M14 46 L18 42 M46 46 L42 42',
'คืน':'M38 12 A18 18 0 1 0 38 48 A13 13 0 1 1 38 12 Z',
'ปั้น':'M30 24 A9 9 0 1 0 30.1 24 M14 18 Q6 34 20 44 M46 18 Q54 34 40 44'})
def num(n):
  if n==0: return 'M30 18 A12 12 0 1 0 30.1 18'
  k=n%5; p=''
  if n>=5: p+='M14 44 L46 44 '
  y0,y1=(16,36) if n>=5 else (16,44)
  xs=[30] if k==1 else [24,36] if k==2 else [20,30,40] if k==3 else [16,25,35,44] if k==4 else []
  return p+''.join(f'M{x} {y0} L{x} {y1} ' for x in xs)
for i in range(10): G[str(i)]=num(i)
st='fill="none" stroke="#4a4239" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"'
MK={'n':'M22 6 L38 6','v':'M30 6.5 A3 3 0 1 0 30.1 6.5','x':'M26 3 L34 10 M34 3 L26 10'}
def tile(x,y,k,mk=None,label=None,w=60):
  inner=f'<path d="{G[k]}" {st}/>' if not mk else f'<g transform="translate(6,9) scale(0.8)"><path d="{G[k]}" {st} stroke-width="3.6"/></g><path d="{MK[mk]}" fill="none" stroke="#9a3412" stroke-width="3" stroke-linecap="round"/>'
  lab=f'<text x="30" y="76" font-size="12" text-anchor="middle" fill="#3d3a35">{label if label is not None else k}</text>' if label!='' else ''
  return f'<g transform="translate({x},{y})"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/>{inner}{lab}</g>'
out=[]; y=20
def head(t,sub=None):
  global y
  out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">{t}</text>'); y+=26
  if sub: out.append(f'<text x="24" y="{y+10}" font-size="12" fill="#6b655c">{sub}</text>'); y+=20
def grid(items):
  global y
  for i,it in enumerate(items):
    out.append(tile(24+(i%5)*68, y+(i//5)*84, *it))
  y+=((len(items)+4)//5)*84+12
head('เครื่องหมายบนตัวอักษร','ขีด = คำนาม · วงกลม = คำกริยา · กากบาท = ปฏิเสธ (ไม่)')
grid([('ไฟ','n','ไฟ'),('ไฟ','v','เผา'),('ไฟ','x','ไม่มีไฟ')])
head('ตัวเลข 0–9','ขีดตั้ง = 1 · ขีดนอน = 5 · วงกลม = 0 · เขียนเรียงหลักได้')
grid([(str(i),None,str(i)) for i in range(10)])
head('ร่างกายและสิ่งมีชีวิต')
grid([(k,) for k in ['มนุษย์','ลำตัว','แขน','ขา','มือ','ตา','หู','จมูก','ปาก','สัตว์','รวม']])
head('คำนาม → คำกริยา','ตัวอักษรเดียวกัน เปลี่ยนแค่เครื่องหมายด้านบน')
pairs=[('ตา','ตา','มอง'),('หู','หู','ฟัง'),('จมูก','จมูก','ดม'),('ปาก','ปาก','กิน/พูด'),('แขน','แขน','ถือ'),('ขา','ขา','เดิน'),('มือ','มือ','ทำ'),('รวม','ส่วนผสม','ผสม'),('สัตว์','สัตว์','ล่า'),('มนุษย์','มนุษย์','สอน')]
for i,(k,nn,vv) in enumerate(pairs):
  x=24+(i%2)*176; yy=y+(i//2)*84
  out.append(tile(x,yy,k,'n','')); out.append(tile(x+68,yy,k,'v',''))
  out.append(f'<text x="{x+64}" y="{yy+76}" font-size="12" text-anchor="middle" fill="#3d3a35">{nn} → {vv}</text>')
y+=5*84+12
head('ข้อเสนอเพิ่ม','ขนาด เวลา และวิธีทำแบบใหม่')
grid([('ใหญ่',),('เล็ก',),('วัน',None,'วัน/กลางวัน'),('คืน',None,'คืน'),('ปั้น',None,'ปั้น (ใหม่)')])
head('ตัวอย่างประโยค','2 หิน · 1 ไม้ · เส้นใย · ทำ → เครื่องมือ')
seq=[('2',None),('หิน','n'),('1',None),('ไม้','n'),('เส้นใย','n'),('มือ','v'),('กลายเป็น',None),('เครื่องมือ','n')]
out.append(f'<rect x="24" y="{y}" width="332" height="58" rx="8" fill="#b8b0a1" stroke="#8a8275"/>')
for i,(k,mk) in enumerate(seq):
  x=30+i*40.5
  out.append(f'<g transform="translate({x},{y+6}) scale(0.68)"><g transform="translate(6,9) scale(0.8)"><path d="{G[k]}" {st} stroke-width="4"/></g>'+(f'<path d="{MK[mk]}" fill="none" stroke="#9a3412" stroke-width="3.5" stroke-linecap="round"/>' if mk else '')+'</g>')
y+=72
svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="{760}" height="{y*2}" viewBox="0 0 380 {y}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="380" height="{y}" fill="#f4f1ea"/>'+''.join(out)+'</svg>'
open('sheet2.html','w').write('<html><body style="margin:0">'+svg+'</body></html>')
