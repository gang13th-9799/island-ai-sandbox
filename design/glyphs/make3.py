exec(open('make2.py').read().split("out=[]; y=20")[0])
G.update({'และ':'M14 30 L46 30 M30 14 L30 46','หรือ':'M30 48 L30 30 L15 13 M30 30 L45 13','แล้ว':'M12 46 L24 46 L24 31 L36 31 L36 16 L48 16','ถ้า':'M16 48 L16 14 L44 14 L44 48'})
MK={'n':('M22 5 L38 5','none'),'v':('M30 5 A3 3 0 1 0 30.1 5','#9a3412'),'a':('M26 9 L34 2','none'),'d':('M26 2 L34 9','none')}
def tile(x,y,k,mk=None,label=None):
  if mk:
    d,f=MK[mk]
    inner=f'<g transform="translate(6,10) scale(0.8)"><path d="{G[k]}" {st} stroke-width="3.6"/></g><path d="{d}" fill="{f}" stroke="#9a3412" stroke-width="3" stroke-linecap="round"/>'
  else: inner=f'<path d="{G[k]}" {st}/>'
  lab=f'<text x="30" y="76" font-size="12" text-anchor="middle" fill="#3d3a35">{label if label is not None else k}</text>'
  return f'<g transform="translate({x},{y})"><rect width="60" height="60" rx="8" fill="#c9c2b4" stroke="#8a8275"/>{inner}{lab}</g>'
out=[]; y=20
def head(t,sub=None):
  global y
  out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">{t}</text>'); y+=26
  if sub: out.append(f'<text x="24" y="{y+10}" font-size="12" fill="#6b655c">{sub}</text>'); y+=20
def grid(items):
  global y
  for i,it in enumerate(items): out.append(tile(24+(i%5)*68, y+(i//5)*84, *it))
  y+=((len(items)+4)//5)*84+12
head('เครื่องหมายบนตัวอักษร','— นาม · • กริยา · ´ คุณศัพท์ · ` วิเศษณ์ · ไม่มี = คำเชื่อม')
grid([('ขา','n','ขา'),('ขา','v','เดิน'),('ขา','a','เร็ว'),('ขา','d','อย่างเร็ว')])
grid([('ไฟ','n','ไฟ'),('ไฟ','v','เผา'),('ไฟ','a','ร้อน'),('ไฟ','d','อย่างร้อน'),('ผิด/ไม่ได้','d','ไม่')])
grid([('ใหญ่','n','ความใหญ่'),('ใหญ่','a','ใหญ่'),('ใหญ่','d','มาก'),('เล็ก','a','เล็ก'),('เล็ก','d','นิดหน่อย')])
head('คำเชื่อม (ไม่มีเครื่องหมาย)')
grid([('และ',),('หรือ',),('แล้ว',None,'แล้ว/จากนั้น'),('ถ้า',)])
head('ตัวอย่างประโยค','ถ้า ไฟ• หิน— แล้ว หิน— ร้อน´  = ถ้าเผาหิน หินจะร้อน')
seq=[('ถ้า',None),('ไฟ','v'),('หิน','n'),('แล้ว',None),('หิน','n'),('ไฟ','a')]
out.append(f'<rect x="24" y="{y}" width="332" height="60" rx="8" fill="#b8b0a1" stroke="#8a8275"/>')
for i,(k,mk) in enumerate(seq):
  x=34+i*54
  g=f'<g transform="translate({x},{y+6}) scale(0.72)"><g transform="translate(6,10) scale(0.8)"><path d="{G[k]}" {st} stroke-width="4"/></g>'
  if mk: d,f=MK[mk]; g+=f'<path d="{d}" fill="{f}" stroke="#9a3412" stroke-width="3.5" stroke-linecap="round"/>'
  out.append(g+'</g>')
y+=76
svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="760" height="{y*2}" viewBox="0 0 380 {y}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="380" height="{y}" fill="#f4f1ea"/>'+''.join(out)+'</svg>'
open('sheet3.html','w').write('<html><body style="margin:0">'+svg+'</body></html>')
