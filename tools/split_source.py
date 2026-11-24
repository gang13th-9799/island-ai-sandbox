#!/usr/bin/env python3
"""Split the single-file game (index.html) into graph-src/ so graphify can parse it.

graph-src/game.js     the game logic (<script> block)
graph-src/style.css   the styles (<style> block)
graph-src/layout.html the page markup without script/style
"""
import os, re

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
page = open(os.path.join(root, 'index.html'), encoding='utf-8').read()
out = os.path.join(root, 'graph-src')
os.makedirs(out, exist_ok=True)

script = page.split('<script>')[1].split('</script>')[0]
style = page.split('<style>')[1].split('</style>')[0]
layout = re.sub(r'<script>.*?</script>', '<script src="game.js"></script>', page, flags=re.S)
layout = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="style.css">', layout, flags=re.S)

open(os.path.join(out, 'game.js'), 'w', encoding='utf-8').write(script.strip() + '\n')
open(os.path.join(out, 'style.css'), 'w', encoding='utf-8').write(style.strip() + '\n')
open(os.path.join(out, 'layout.html'), 'w', encoding='utf-8').write(layout)
print('game.js lines:', script.count('\n'))
