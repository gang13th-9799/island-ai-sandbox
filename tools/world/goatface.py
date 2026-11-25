from PIL import Image, ImageDraw, ImageFilter
import numpy as np, sys
idle=Image.open('goat_0.png'); eat=Image.open('bin_old/goat_1_gemini.png')
ang,cx,cy,r=[float(x) for x in sys.argv[1:5]] if len(sys.argv)>4 else (-12,160,104,31)
sx,sy=112,79
patch=idle.crop((int(sx-r-6),int(sy-r-6),int(sx+r+6),int(sy+r+6)))
m=Image.new('L',patch.size,0); ImageDraw.Draw(m).ellipse([6,6,6+2*r,6+2*r*1.05],fill=255); m=m.filter(ImageFilter.GaussianBlur(3))
pa=np.array(patch); pa[...,3]=(pa[...,3]/255*np.array(m)).astype(np.uint8); patch=Image.fromarray(pa).rotate(ang,resample=Image.BICUBIC,expand=True)
out=eat.copy(); out.alpha_composite(patch,(int(cx-patch.width/2),int(cy-patch.height/2)))
out.save('goat_1.png'); out.resize((out.width*3,out.height*3)).save('/tmp/gfix.png')
