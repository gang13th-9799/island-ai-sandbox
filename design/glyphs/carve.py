import json, asyncio
from playwright.async_api import async_playwright
G=json.load(open('/home/claude/glyph/glyphs.json'))['glyphs']; info=json.load(open('info.json'))
seq=[('มัด','v'),('หิน','n'),('#2',None),('ไม้','n'),('#1',None),('เส้นใย','n'),('กลายเป็น',None),('เครื่องมือ','n')]
def carve(d,sq=False):
  cap='square' if sq else 'round'
  return (f'<path d="{d}" fill="none" stroke="#f2efe8" stroke-width="4.6" stroke-linecap="{cap}" stroke-linejoin="round" transform="translate(1,1.2)" opacity=".7"/>'
          f'<path d="{d}" fill="none" stroke="#4d4843" stroke-width="4.6" stroke-linecap="{cap}" stroke-linejoin="round"/>')
async def m():
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path='/usr/bin/google-chrome'); pg=await b.new_page()
    for k,i in info.items():
      x0,y0,x1,y1=i['face']; fw,fh=x1-x0,y1-y0
      per=4; cw=fw/per; sc=min(cw/60*0.92,(fh/2)/66); g=''
      for n,(kk,mk) in enumerate(seq):
        r,c=divmod(n,per); x=x0+c*cw+(cw-60*sc)/2; y=y0+(fh/2-60*sc)/2+r*fh/2+2
        s=f'<g transform="translate({x:.1f},{y:.1f}) scale({sc:.3f})">'+carve(G[kk],kk.startswith('#'))
        if mk=='v': s+='<circle cx="30" cy="5" r="3.6" fill="#4d4843"/>'
        elif mk: s+=carve('M22 5 L38 5')
        g+=s+'</g>'
      html=f'<html><body style="margin:0;background:transparent"><div style="position:relative;width:{i["w"]}px;height:{i["h"]}px"><img src="{k}_whole.png" style="position:absolute"><svg width="{i["w"]}" height="{i["h"]}" style="position:absolute">{g}</svg></div></body></html>'
      open(f'{k}_c.html','w').write(html); await pg.set_viewport_size({'width':i['w'],'height':i['h']})
      await pg.goto(f'file:///home/claude/stele/h/{k}_c.html'); await pg.wait_for_timeout(300)
      await pg.screenshot(path=f'{k}_carved.png',omit_background=True)
    await b.close()
asyncio.run(m())
