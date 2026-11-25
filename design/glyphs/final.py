exec(open('make3.py').read().split("MK={'n':('M22")[0])
exec(open('nums5.py').read().split("def path")[0])
def npath(k): return ' '.join('M'+' L'.join(f'{x} {y}' for x,y in pl) for pl in N[k])
for i in range(10): G['#'+str(i)]=npath(str(i))
G['ผสม']=G['รวม']
SECS=[('ตัวเลข',[('#'+str(i),str(i)) for i in range(10)]),
('วัตถุดิบ',[(k,k) for k in ['หิน','ไม้','ไผ่','ดินเหนียว','เส้นใย','น้ำ','ไฟ','แร่','ใบไม้','หนังสัตว์']]),
('วิธีทำ',[(k,k) for k in ['กะเทาะ','มัด','ปั้น','เผา','เสียดสี','หลอม','ตัด','ผสม']]),
('ผลลัพธ์และสถานี',[(k,k) for k in ['กลายเป็น','กองไฟ','เตาเผา','โต๊ะช่าง','เครื่องมือ','ภาชนะ','อาหาร','ผิด/ไม่ได้']]),
('ร่างกายและสิ่งมีชีวิต',[(k,k) for k in ['มนุษย์','ลำตัว','แขน','ขา','มือ','ตา','หู','จมูก','ปาก','สัตว์']]),
('คำเชื่อม ขนาด และเวลา',[(k,k) for k in ['และ','หรือ','แล้ว','ถ้า','ใหญ่','เล็ก','วัน','คืน']])]
import json; json.dump({'glyphs':{k:G[k] for s,its in SECS for k,_ in its},'markers':{'noun':'—','verb':'•','adj':'´','adv':'`','conj':'none'}},open('/home/claude/glyph/glyphs.json','w'),ensure_ascii=False,indent=0)
def render(labels, cols, bg, tilefill, fname, W=380):
  out=[]; y=20 if labels else 12; n=0
  for title,its in SECS:
    if labels: out.append(f'<text x="24" y="{y+18}" font-size="17" fill="#3d3a35" font-weight="600">{title}</text>'); y+=28
    for i,(k,lab) in enumerate(its):
      x=(24 if labels else 12)+(i%cols)*(68 if labels else 64); yy=y+(i//cols)*(84 if labels else 64)
      lw='square' if k.startswith('#') else 'round'
      t=f'<text x="30" y="76" font-size="12" text-anchor="middle" fill="#3d3a35">{lab}</text>' if labels else ''
      rect=f'<rect width="60" height="60" rx="8" fill="{tilefill}" stroke="#8a8275"/>' if labels else ''
      out.append(f'<g transform="translate({x},{yy})">{rect}<path d="{G[k]}" fill="none" stroke="#4a4239" stroke-width="3.2" stroke-linecap="{lw}" stroke-linejoin="{"miter" if k.startswith("#") else "round"}"/>{t}</g>')
    rows=(len(its)+cols-1)//cols; y+=rows*(84 if labels else 64)+(10 if labels else 0)
  H=y+10
  svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="{W*2}" height="{H*2}" viewBox="0 0 {W} {H}" font-family="Kanit, Noto Sans Thai, sans-serif"><rect width="{W}" height="{H}" fill="{bg}"/>'+''.join(out)+'</svg>'
  open(fname,'w').write('<html><body style="margin:0">'+svg+'</body></html>')
render(True,5,'#f4f1ea','#c9c2b4','final_labeled.html')
render(False,10,'#ff00ff',None,'final_gemini.html',W=664)
