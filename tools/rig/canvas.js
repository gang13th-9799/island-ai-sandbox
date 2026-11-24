// ==========================================
// 10. CANVAS (camera view, cached terrain, animated puppets)
// ==========================================
const WT = 16;                                   // world pixels per tile
const VIEW = { zoom: 2.4, cx: 40 * WT, cy: 40 * WT, follow: null, w: 0, h: 0, dpr: 1, last: 0 };
const NATURE = { ocean: '#4a9fd1', river: '#6cc0e8', swamp_water: '#5aa596', sand_bank: '#efdca6', mud_flat: '#b08a5e', grass: '#9bd472',
  tall_grass: '#84c75f', forest: '#6aad55', hill_slope: '#b9b097', mountain_cliff: '#9aa0a8', mountain_peak: '#eef2f4' };
const RES_ICON = [[/ไผ่/, '🎋'], [/มะพร้าว|ต้นจาก/, '🌴'], [/กล้วย/, '🍌'], [/ไม้เนื้อแข็ง/, '🌳'], [/ขอนไม้|กิ่ง/, '🪵'], [/ปลา/, '🐟'], [/กุ้ง/, '🦐'],
  [/ปู/, '🦀'], [/ปะการัง/, '🪸'], [/หอย/, '🐚'], [/น้ำจืด/, '💧'], [/กก/, '🌾'], [/มะละกอ/, '🥭'], [/เบอร์รี่/, '🫐'], [/เห็ด/, '🍄'], [/สมุนไพร/, '🌿'],
  [/สาหร่าย/, '🌱'], [/เถาวัลย์/, '🍃'], [/ผึ้ง/, '🐝'], [/รังนก/, '🪺'], [/มด/, '🐜'], [/เกลือ/, '🧂'], [/ทราย/, '⏳'], [/แร่|เหล็ก/, '⛏️'],
  [/กำมะถัน/, '🟡'], [/ประสิว/, '⚪'], [/ดิน/, '🟤'], [/ยาง/, '🟠'], [/หิน/, '🪨']];
const resIcon = name => (RES_ICON.find(([re]) => re.test(name)) || [0, '📦'])[1];
const terrainCache = {};
function jitterColor(hex, j) {
  const n = parseInt(hex.slice(1), 16); const f = v => Math.max(0, Math.min(255, Math.round(v * (1 + j))));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}
function getTerrainCanvas(zId) {
  const key = zId + '|' + currentSeasonIdx;
  if (terrainCache[key]) return terrainCache[key];
  buildZoneTerrain(zId);
  const grid = zoneTerrainGrid[zId];
  const cv = document.createElement('canvas'); cv.width = cv.height = 80 * WT;
  const c = cv.getContext('2d');
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let y = 0; y < 80; y++) for (let x = 0; x < 80; x++) {
    const t = grid[y][x];
    c.fillStyle = jitterColor(NATURE[t] || TERRAIN_STYLES[t].color, (rnd() - 0.5) * 0.06);
    c.fillRect(x * WT, y * WT, WT, WT);
  }
  // soft decorations
  for (let y = 0; y < 80; y++) for (let x = 0; x < 80; x++) {
    const t = grid[y][x], px = x * WT, py = y * WT, r = rnd();
    if (t === 'grass' && r < 0.12) { c.strokeStyle = 'rgba(60,120,40,.45)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(px + 6, py + 12); c.lineTo(px + 5, py + 7); c.moveTo(px + 8, py + 12); c.lineTo(px + 9, py + 6); c.stroke(); }
    else if (t === 'grass' && r < 0.15) { c.fillStyle = ['#fff7ae', '#ffd1e1', '#ffffff'][Math.floor(r * 100) % 3]; c.beginPath(); c.arc(px + 8, py + 8, 1.6, 0, 7); c.fill(); }
    else if (t === 'tall_grass' && r < 0.5) { c.strokeStyle = 'rgba(50,110,35,.55)'; c.lineWidth = 1.3; c.beginPath(); for (let i = 0; i < 3; i++) { c.moveTo(px + 4 + i * 4, py + 14); c.lineTo(px + 3 + i * 4, py + 4); } c.stroke(); }
    else if (t === 'forest' && r < 0.35) { c.fillStyle = 'rgba(40,90,40,.35)'; c.beginPath(); c.ellipse(px + 8, py + 13, 9, 3.5, 0, 0, 7); c.fill(); c.fillStyle = ['#4d9443', '#5aa24c', '#3f8738'][Math.floor(r * 30) % 3]; c.beginPath(); c.arc(px + 8, py + 6, 8, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,255,.15)'; c.beginPath(); c.arc(px + 6, py + 3, 3.5, 0, 7); c.fill(); }
    else if ((t === 'river' || t === 'ocean') && r < 0.1) { c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 1.2; c.beginPath(); c.arc(px + 8, py + 10, 5, 1.15 * Math.PI, 1.85 * Math.PI); c.stroke(); }
    else if ((t === 'mountain_cliff' || t === 'hill_slope') && r < 0.12) { c.fillStyle = 'rgba(90,90,100,.5)'; c.beginPath(); c.ellipse(px + 8, py + 10, 5, 3.5, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,255,.35)'; c.beginPath(); c.ellipse(px + 7, py + 9, 2.5, 1.5, 0, 0, 7); c.fill(); }
    else if (t === 'sand_bank' && r < 0.05) { c.fillStyle = 'rgba(180,150,90,.5)'; c.beginPath(); c.arc(px + 8, py + 8, 1.2, 0, 7); c.fill(); }
    else if (t === 'mud_flat' && r < 0.08) { c.fillStyle = 'rgba(90,60,30,.35)'; c.beginPath(); c.ellipse(px + 8, py + 8, 4, 2, 0, 0, 7); c.fill(); }
  }
  // shoreline: darken water next to land
  c.fillStyle = 'rgba(255,255,255,.35)';
  for (let y = 0; y < 80; y++) for (let x = 0; x < 80; x++) {
    if (!WATER.includes(grid[y][x])) continue;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => { const g = grid[y + dy] && grid[y + dy][x + dx]; if (g && !WATER.includes(g)) c.fillRect(x * WT + (dx > 0 ? WT - 2 : 0), y * WT + (dy > 0 ? WT - 2 : 0), dx ? 2 : WT, dy ? 2 : WT); });
  }
  const season = SEASONS[currentSeasonIdx];
  c.fillStyle = season.tint; c.globalAlpha = 0.5; c.fillRect(0, 0, cv.width, cv.height); c.globalAlpha = 1;
  return (terrainCache[key] = cv);
}

function resizeView() {
  const cv = document.getElementById('mapCanvas'); const host = cv.parentElement;
  VIEW.dpr = Math.min(2, window.devicePixelRatio || 1);
  VIEW.w = host.clientWidth; VIEW.h = host.clientHeight;
  cv.width = Math.round(VIEW.w * VIEW.dpr); cv.height = Math.round(VIEW.h * VIEW.dpr);
  cv.style.width = VIEW.w + 'px'; cv.style.height = VIEW.h + 'px';
  if (!VIEW.zoomSet) { VIEW.zoom = Math.max(1.4, Math.min(3.2, Math.min(VIEW.w, VIEW.h) / (17 * WT))); }
}
function clampView() {
  const hw = VIEW.w / 2 / VIEW.zoom, hh = VIEW.h / 2 / VIEW.zoom, W = 80 * WT;
  VIEW.cx = hw * 2 >= W ? W / 2 : Math.max(hw, Math.min(W - hw, VIEW.cx));
  VIEW.cy = hh * 2 >= W ? W / 2 : Math.max(hh, Math.min(W - hh, VIEW.cy));
}
function centerOnZone() {
  const here = aiAgents.filter(a => a.zone === currentZoneId);
  if (here.length) { VIEW.cx = (here.reduce((s, a) => s + a.x, 0) / here.length + 0.5) * WT; VIEW.cy = (here.reduce((s, a) => s + a.y, 0) / here.length + 0.5) * WT; }
  else { VIEW.cx = VIEW.cy = 40 * WT; }
  clampView();
}
const screenOf = (wx, wy) => [(wx - VIEW.cx) * VIEW.zoom + VIEW.w / 2, (wy - VIEW.cy) * VIEW.zoom + VIEW.h / 2];
const worldOf = (sx, sy) => [(sx - VIEW.w / 2) / VIEW.zoom + VIEW.cx, (sy - VIEW.h / 2) / VIEW.zoom + VIEW.cy];

function drawCanvas() {
  if (bgTick) return;
  const canvas = document.getElementById('mapCanvas'); if (!VIEW.w) resizeView();
  const ctx = canvas.getContext('2d');
  const now = performance.now() / 1000, dt = Math.min(0.1, now - (VIEW.last || now)); VIEW.last = now;
  // follow selected agent
  if (VIEW.follow) { const f = aiAgents.find(a => a.id === VIEW.follow); if (f && f.zone === currentZoneId) { VIEW.cx += ((f._rx ?? f.x) * WT + 8 - VIEW.cx) * Math.min(1, dt * 4); VIEW.cy += ((f._ry ?? f.y) * WT - 12 - VIEW.cy) * Math.min(1, dt * 4); clampView(); } }
  const z = VIEW.zoom, d = VIEW.dpr;
  ctx.setTransform(d, 0, 0, d, 0, 0);
  ctx.fillStyle = '#8cc8e8'; ctx.fillRect(0, 0, VIEW.w, VIEW.h);
  ctx.setTransform(d * z, 0, 0, d * z, d * (VIEW.w / 2 - VIEW.cx * z), d * (VIEW.h / 2 - VIEW.cy * z));
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(getTerrainCanvas(currentZoneId), 0, 0);
  if (showGrid && z > 2.2) {
    ctx.strokeStyle = 'rgba(0,0,0,0.05)'; ctx.lineWidth = 1 / z; ctx.beginPath();
    for (let i = 0; i <= 80; i++) { ctx.moveTo(i * WT, 0); ctx.lineTo(i * WT, 80 * WT); ctx.moveTo(0, i * WT); ctx.lineTo(80 * WT, i * WT); }
    ctx.stroke();
  }
  // collect drawables, depth-sorted by feet y
  const items = [];
  const labels = [];
  shelters.filter(s => s.zone === currentZoneId).forEach(s => items.push({ y: (s.y + 3) * WT, draw: () => {
    const sx = s.x * WT, sy = s.y * WT;
    ctx.fillStyle = 'rgba(40,30,20,0.22)'; ctx.beginPath(); ctx.ellipse(sx + WT * 1.6, sy + WT * 2.75, WT * 1.9, WT * 0.45, 0, 0, 7); ctx.fill();
    drawPixelSprite(ctx, s.sprite || 'shelter_hut', sx, sy, WT * 1.4);
    if (showLabels) labels.push({ x: sx + WT * 1.5, y: sy - 2, text: s.name.split(' (')[0] + (s.station && s.station !== 'storehouse' && s.station !== 'gate' ? (s.owner ? ` ${s.public ? '🔓' : '🔒'}${s.ownerName}` : '') : ''), color: '#7c4a03', bg: 'rgba(255,248,230,.92)' });
  } }));
  (zoneNodes[currentZoneId] || []).forEach(n => items.push({ y: (n.y + 1) * WT, draw: () => {
    const px = n.x * WT, py = n.y * WT, ic = resIcon(n.name);
    if (n.sprite === 'res_tree' || n.sprite === 'res_bamboo') drawPixelSprite(ctx, n.sprite, px - WT * 0.2, py - WT * 1.2, WT * 1.2);
    else { ctx.fillStyle = 'rgba(40,30,20,.2)'; ctx.beginPath(); ctx.ellipse(px + WT * 0.5, py + WT * 0.95, WT * 0.7, WT * 0.25, 0, 0, 7); ctx.fill(); }
    ctx.font = `${WT * 1.05}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(ic, px + WT * 0.5, py + WT * (n.sprite === 'res_tree' || n.sprite === 'res_bamboo' ? 1.2 : 0.95)); ctx.textAlign = 'left';
    if (showLabels && z >= 2.6) labels.push({ x: px + WT * 0.5, y: py + WT * 1.35, text: n.name, color: '#3f3f1f', bg: 'rgba(255,255,240,.8)', small: true, center: true, below: true });
  } }));
  faunaSpecies.filter(f => (f.zp[currentZoneId] || 0) > 0).forEach(f => {
    if (!f.zoneCoords) f.zoneCoords = {};
    if (!f.zoneCoords[currentZoneId]) f.zoneCoords[currentZoneId] = findValidTile(currentZoneId, f.sprite === 'fish');
    const pos = f.zoneCoords[currentZoneId];
    items.push({ y: (pos.y + 1.5) * WT, draw: () => {
      const tt = trOf(f, currentZoneId);
      const rc = tt.color ? { [MAIN_COLOR_CH[f.sprite] || 'O']: tt.color } : null;
      const ax = pos.x * WT, ay = pos.y * WT, ps = Math.max(2, Math.floor(WT * 1.3 * 2.2 / 14));
      ctx.fillStyle = 'rgba(40,30,20,.22)'; ctx.beginPath(); ctx.ellipse(ax + ps * 7, ay + ps * 8, ps * 6, ps * 1.4, 0, 0, 7); ctx.fill();
      if (tt.parts.includes('ปีก')) { ctx.fillStyle = 'rgba(226,232,240,.9)'; ctx.beginPath(); ctx.moveTo(ax + ps * 5, ay + ps * 3); ctx.lineTo(ax + ps * 2, ay - ps * 3); ctx.lineTo(ax + ps * 9, ay + ps * 2); ctx.closePath(); ctx.fill(); }
      drawPixelSprite(ctx, f.sprite || 'deer', ax, ay, WT * 1.3, rc);
      if (tt.parts.includes('เขา')) { ctx.strokeStyle = '#f5f5f4'; ctx.lineWidth = Math.max(1, ps * 0.6); ctx.beginPath(); ctx.moveTo(ax + ps * 3, ay + ps); ctx.lineTo(ax + ps * 1, ay - ps * 2); ctx.moveTo(ax + ps * 5, ay + ps); ctx.lineTo(ax + ps * 6, ay - ps * 2); ctx.stroke(); }
      if (tt.parts.includes('หาง')) { ctx.strokeStyle = tt.color || '#78350f'; ctx.lineWidth = Math.max(1, ps * 0.6); ctx.beginPath(); ctx.moveTo(ax + ps * 13, ay + ps * 4); ctx.quadraticCurveTo(ax + ps * 17, ay + ps * 2, ax + ps * 18, ay + ps * 6); ctx.stroke(); }
      if (tt.parts.includes('เกล็ด')) { ctx.fillStyle = 'rgba(147,197,253,.9)'; for (let i = 0; i < 4; i++) ctx.fillRect(ax + ps * (3 + i * 2), ay + ps * 4, ps * 0.8, ps * 0.8); }
      if (showLabels) labels.push({ x: ax + ps * 7, y: ay - 3, text: `${f.predator ? '⚠️ ' : ''}${variantLabel(f, currentZoneId)} ×${f.zp[currentZoneId]}`, color: f.predator ? '#b91c1c' : '#334155', bg: f.predator ? 'rgba(254,226,226,.95)' : 'rgba(255,255,255,.85)', small: true, center: true });
    } });
  });
  const tickDur = 10 / simSpeed;
  aiAgents.filter(a => a.zone === currentZoneId).forEach(a => {
    // smooth movement between sim ticks
    if (a._rx === undefined || a._zone !== a.zone || Math.hypot(a.x - a._rx, a.y - a._ry) > 12) { a._rx = a.x; a._ry = a.y; a._zone = a.zone; }
    const dx = a.x - a._rx, dy = a.y - a._ry, dist = Math.hypot(dx, dy);
    const speed = Math.max(2.2, dist / Math.max(0.4, tickDur * 0.6));
    const step = Math.min(dist, speed * dt);
    if (dist > 0.001) { a._rx += dx / dist * step; a._ry += dy / dist * step; }
    if (Math.abs(dx) > 0.05) a._face = dx > 0 ? 1 : -1;
    a._moving = dist > 0.06; a._fast = speed > 5;
    items.push({ y: (a._ry + 1) * WT + 0.1, draw: () => drawAgent(ctx, a, now, labels) });
  });
  items.sort((p, q) => p.y - q.y).forEach(it => it.draw());

  if (isNightTime()) {
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.fillStyle = 'rgba(30, 26, 80, 0.42)'; ctx.fillRect(0, 0, VIEW.w, VIEW.h);
    ctx.globalCompositeOperation = 'lighter';
    shelters.filter(s => s.zone === currentZoneId && s.station === 'campfire').forEach(s => {
      const [fx, fy] = screenOf(s.x * WT + WT, s.y * WT + WT); const R = WT * 9 * z;
      const g = ctx.createRadialGradient(fx, fy, 4, fx, fy, R);
      g.addColorStop(0, 'rgba(255,170,80,0.45)'); g.addColorStop(1, 'rgba(255,170,80,0)');
      ctx.fillStyle = g; ctx.fillRect(fx - R, fy - R, R * 2, R * 2);
    });
    ctx.globalCompositeOperation = 'source-over';
  }
  // screen-space labels (constant size)
  ctx.setTransform(d, 0, 0, d, 0, 0);
  labels.forEach(l => drawLabel(ctx, l));
}

function drawLabel(ctx, l) {
  const [sx, sy] = screenOf(l.x, l.y);
  if (sx < -80 || sx > VIEW.w + 80 || sy < -40 || sy > VIEW.h + 40) return;
  if (l.agent) return drawAgentTag(ctx, l, sx, sy);
  ctx.font = `600 ${l.small ? 10 : 11}px Kanit, sans-serif`;
  const w = ctx.measureText(l.text).width + 10, h = l.small ? 15 : 17;
  const x = l.center ? sx - w / 2 : sx - w / 2, y = l.below ? sy : sy - h;
  ctx.fillStyle = l.bg; ctx.beginPath(); ctx.roundRect(x, y, w, h, 8); ctx.fill();
  ctx.fillStyle = l.color; ctx.textBaseline = 'middle'; ctx.fillText(l.text, x + 5, y + h / 2 + 0.5); ctx.textBaseline = 'alphabetic';
}
function statusIcon(a) {
  const b = a.bubble || ''; const m = b.match(/^\p{Extended_Pictographic}️?/u);
  if (a.hunger >= 70) return '🍖';
  if (isNightTime() && !a.goal) return '💤';
  return m ? m[0] : (b.startsWith('เก็บ') ? '🧺' : '');
}
function drawAgentTag(ctx, l, sx, sy) {
  const a = l.agent; const stage = getAgeStage(a.age);
  ctx.font = '600 11px Kanit, sans-serif';
  const name = a.name, ic = statusIcon(a);
  const nw = ctx.measureText(name).width, w = Math.max(40, nw + 12 + (ic ? 16 : 0));
  const x = sx - w / 2, y = sy + 3;
  ctx.fillStyle = 'rgba(30,24,60,.72)'; ctx.beginPath(); ctx.roundRect(x, y, w, 16, 8); ctx.fill();
  ctx.fillStyle = stage.color === '#38bdf8' ? '#ffffff' : stage.color; ctx.textBaseline = 'middle'; ctx.fillText(name, x + 6, y + 8.5);
  if (ic) { ctx.font = '11px "Noto Color Emoji",sans-serif'; ctx.fillText(ic, x + w - 17, y + 8.5); }
  ctx.textBaseline = 'alphabetic';
  // hp bar
  const hp = Math.max(0, Math.min(1, a.hp / maxHp(a)));
  ctx.fillStyle = 'rgba(30,24,60,.6)'; ctx.fillRect(sx - 15, y + 18, 30, 4);
  ctx.fillStyle = hp > 0.5 ? '#4ade80' : hp > 0.25 ? '#facc15' : '#f87171'; ctx.fillRect(sx - 15, y + 18, 30 * hp, 4);
  // quest marker / selection ring
  const myQ = quests.find(q => q.giverId === a.id && (q.status === 'open' || q.status === 'accepted'));
  if (myQ) {
    const [hx, hy] = screenOf(a._rx * WT + 8, (a._ry + 1) * WT - WT * 3.3);
    ctx.fillStyle = myQ.status === 'open' ? '#f5a524' : '#a78bfa'; ctx.beginPath(); ctx.arc(hx, hy, 9, 0, 7); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(myQ.status === 'open' ? '!' : '?', hx, hy + 4); ctx.textAlign = 'left';
  }
}
function drawAgent(ctx, a, now, labels) {
  const H = WT * 2.9;
  const fx = a._rx * WT + WT * 0.5, feetY = (a._ry + 1) * WT;
  ctx.fillStyle = 'rgba(40,30,20,0.25)'; ctx.beginPath(); ctx.ellipse(fx, feetY, H * 0.2, H * 0.06, 0, 0, 7); ctx.fill();
  if (VIEW.follow === a.id) { ctx.strokeStyle = '#facc15'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(fx, feetY, H * 0.28, H * 0.09, 0, 0, 7); ctx.stroke(); }
  const anim = pupActivity(a, a._moving, a._fast);
  const ok = PUP.ready && drawPuppet(ctx, a, fx, feetY, H, anim, now);
  if (!ok) drawStickFigure(ctx, a, fx, feetY, H);
  if (showLabels) labels.push({ x: fx, y: feetY, agent: a });
}

// ---------- input: drag to pan, pinch/wheel to zoom, tap to inspect ----------
(function setupMapInput() {
  const cv = document.getElementById('mapCanvas');
  const pts = new Map(); let moved = 0, pinch0 = 0, zoom0 = 1;
  cv.addEventListener('pointerdown', e => { cv.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); moved = 0;
    if (pts.size === 2) { const [p, q] = [...pts.values()]; pinch0 = Math.hypot(p.x - q.x, p.y - q.y); zoom0 = VIEW.zoom; } });
  cv.addEventListener('pointermove', e => {
    if (!pts.has(e.pointerId)) return; const p0 = pts.get(e.pointerId); const dx = e.clientX - p0.x, dy = e.clientY - p0.y;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) { const [p, q] = [...pts.values()]; const dd = Math.hypot(p.x - q.x, p.y - q.y); setZoom(zoom0 * dd / (pinch0 || dd)); moved += 10; return; }
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 6) { VIEW.follow = null; VIEW.cx -= dx / VIEW.zoom; VIEW.cy -= dy / VIEW.zoom; clampView(); }
  });
  const end = e => { if (!pts.has(e.pointerId)) return; pts.delete(e.pointerId); if (moved <= 6 && pts.size === 0) mapTap(e); };
  cv.addEventListener('pointerup', end); cv.addEventListener('pointercancel', e => pts.delete(e.pointerId));
  cv.addEventListener('wheel', e => { e.preventDefault(); setZoom(VIEW.zoom * (e.deltaY < 0 ? 1.12 : 1 / 1.12)); }, { passive: false });
  window.addEventListener('resize', () => { resizeView(); clampView(); });
})();
function setZoom(zm) { VIEW.zoom = Math.max(0.8, Math.min(5, zm)); VIEW.zoomSet = true; clampView(); }
function changeZoom(delta) { setZoom(VIEW.zoom * (delta > 0 ? 1.25 : 0.8)); }
function mapTap(e) {
  const rect = e.target.getBoundingClientRect(); const [wx, wy] = worldOf(e.clientX - rect.left, e.clientY - rect.top);
  const hit = aiAgents.filter(a => a.zone === currentZoneId && a._hit && wx >= a._hit.x && wx <= a._hit.x + a._hit.w && wy >= a._hit.y && wy <= a._hit.y + a._hit.h)
    .sort((p, q) => q._ry - p._ry)[0];
  if (hit) { openAgentCard(hit.id); return; }
  closeAgentCard();
  const lx = Math.max(0, Math.min(79, Math.floor(wx / WT))), ly = Math.max(0, Math.min(79, Math.floor(wy / WT)));
  const node = (zoneNodes[currentZoneId] || []).find(n => Math.abs(n.x - lx) <= 1 && Math.abs(n.y - ly) <= 1);
  document.getElementById('hover-terrain').innerText = node ? `${resIcon(node.name)} ${node.name}` : `${TERRAIN_STYLES[zoneTerrainGrid[currentZoneId][ly][lx]].label} (${lx},${ly})`;
  document.getElementById('hover-terrain').classList.add('show'); clearTimeout(mapTap.t); mapTap.t = setTimeout(() => document.getElementById('hover-terrain').classList.remove('show'), 2500);
}
function inspectCanvasPointer() {}

// ---------- agent card (tap a character) ----------
let cardAgentId = null;
function openAgentCard(id) { cardAgentId = id; VIEW.follow = id; renderAgentCard(); document.getElementById('agent-card').classList.add('open'); }
function closeAgentCard() { cardAgentId = null; VIEW.follow = null; document.getElementById('agent-card').classList.remove('open'); }
function renderAgentCard() {
  const el = document.getElementById('agent-card'); if (!cardAgentId) return;
  const a = aiAgents.find(x => x.id === cardAgentId); if (!a) { closeAgentCard(); return; }
  const stage = getAgeStage(a.age), v = villages.find(v => v.members && v.members.includes(a.id));
  const hp = Math.round(a.hp / maxHp(a) * 100), hg = Math.round(a.hunger || 0);
  const stats = ['str', 'agi', 'vit', 'int', 'dex', 'cha'].map(k => `<span class="st"><b>${k.toUpperCase()}</b> ${st(a, k)}</span>`).join('');
  const kn = Object.keys(a.know || {}).length;
  el.innerHTML = `<div class="ac-head"><canvas id="ac-avatar" width="84" height="96"></canvas><div class="ac-info">
      <div class="ac-name">${a.gender === 'หญิง' ? '👩' : '👨'} ${a.name}${v && v.chiefId === a.id ? ' 👑' : ''}</div>
      <div class="ac-sub">${stage.label} ${Math.floor(a.age)} ปี · ${a.role || 'ยังไม่มีอาชีพ'}${v ? ' · ' + v.name : ''}</div>
      <div class="ac-bubble">${a.bubble || '...'}</div></div>
      <button class="gbtn ghost round close" onclick="closeAgentCard()">✕</button></div>
    <div class="ac-bars"><span>❤️</span><div class="bar-wrap"><div class="bar-hp" style="width:${hp}%;background:${hp > 50 ? '#4ade80' : hp > 25 ? '#facc15' : '#f87171'}"></div></div><span>${hp}%</span>
      <span>🍖</span><div class="bar-wrap"><div class="bar-hg" style="width:${hg}%;background:#f5a524"></div></div><span>${hg}%</span></div>
    <div class="ac-stats">${stats}</div>
    <div class="ac-sub">🧠 รู้ ${kn} สูตร · 🎒 ${Object.entries(a.bag || {}).filter(([, n]) => n > 0).slice(0, 5).map(([k, n]) => `${k}×${n}`).join(', ') || 'กระเป๋าว่าง'}</div>`;
  const av = document.getElementById('ac-avatar'); const c = av.getContext('2d'); c.clearRect(0, 0, 84, 96);
  if (PUP.ready) { const save = a._face; a._face = 1; drawPuppet(c, a, 42, 90, 80, 'idle', performance.now() / 1000); a._face = save; c.setTransform(1, 0, 0, 1, 0, 0); }
}

// ---------- render loop (~30 fps) ----------
function renderLoop(ts) {
  if (!renderLoop.last || ts - renderLoop.last > 32) { renderLoop.last = ts; try { drawCanvas(); } catch (err) { console.error(err); } }
  if (cardAgentId && (!renderLoop.cardT || ts - renderLoop.cardT > 500)) { renderLoop.cardT = ts; renderAgentCard(); }
  requestAnimationFrame(renderLoop);
}
