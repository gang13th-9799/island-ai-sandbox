// ==========================================
// 9b. PUPPET CHARACTERS (Gemini part sheets -> bone rig, see assets/chars.js)
// ==========================================
const PUP = { rigs: {}, ready: false };
(function loadRigs() {
  const src = window.CHAR_RIGS || {};
  let left = Object.keys(src).length;
  for (const name in src) {
    const r = src[name]; const img = new Image();
    img.onload = () => { if (--left === 0) PUP.ready = true; };
    img.src = r.src;
    let feet = 0; ['shN', 'shF'].forEach(k => { const p = r.pieces[k]; if (p) feet = Math.max(feet, p.y + p.h); });
    const hd = r.pieces.head;
    PUP.rigs[name] = { ...r, img, feet: feet - 2, top: hd.y, height: feet - 2 - hd.y, hip: [(r.joints.hipN[0] + r.joints.hipF[0]) / 2, r.joints.hipN[1]] };
  }
})();

// Segment chain: [piece, joint it hangs from, parent]
const PUP_SEGS = [['upN', 'shN', 'body'], ['foN', 'elN', 'upN'], ['upF', 'shF', 'body'], ['foF', 'elF', 'upF'],
  ['thN', 'hipN', 'body'], ['shN', 'knN', 'thN'], ['thF', 'hipF', 'body'], ['shF', 'knF', 'thF']];
const PUP_REST = { dx: 0, dy: 0, lean: 0, upN: 0, foN: 0, upF: 0, foF: 0, thN: 0, knN: 0, thF: 0, knF: 0, item: -55, cape: 3, capeRot: 40, aim: 0, draw: 0, hold: 0 };
const pr = o => Object.assign({}, PUP_REST, o);
const smooth = w => w * w * (3 - 2 * w);
function pupKeys(keys, u) {
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, p0] = keys[i], [t1, p1] = keys[i + 1];
    if (u >= t0 && u <= t1) {
      const w = smooth((u - t0) / (t1 - t0)); const o = {};
      for (const k in PUP_REST) o[k] = (p0[k] ?? PUP_REST[k]) * (1 - w) + (p1[k] ?? PUP_REST[k]) * w;
      o.cape = w < 0.5 ? (p0.cape ?? 3) : (p1.cape ?? 3);
      return o;
    }
  }
  return pr(keys[keys.length - 1][1]);
}
// Poses (angles in degrees, + swings a limb forward; ported from the rig tool)
const PUP_ANIM = {
  idle: { dur: 3.2, f: u => { const b = Math.sin(u * 2 * Math.PI); return pr({ dy: b * 0.4, upN: 4 + b * 3, upF: -4 - b * 3, foN: 8, foF: 8, lean: b * 0.8, capeRot: 40 + b * 2 }); } },
  walk: { dur: 0.9, f: u => { const t = u * 2 * Math.PI, s = Math.sin(t); return pr({ dy: -Math.abs(Math.cos(t)) * 1 + 0.5, thN: 22 * s, thF: -22 * s, knN: -(4 + 40 * Math.max(0, Math.sin(t + 1.3))), knF: -(4 + 40 * Math.max(0, Math.sin(t + 1.3 + Math.PI))), upN: -22 * s, upF: 22 * s, foN: 15, foF: 15, capeRot: 34 + 4 * Math.sin(2 * t) }); } },
  run: { dur: 0.55, f: u => { const t = u * 2 * Math.PI, s = Math.sin(t); return pr({ dy: -Math.abs(s) * 3 + 1, lean: -8, thN: 38 * s, thF: -38 * s, knN: -(10 + 75 * Math.max(0, Math.sin(t + 1.2))), knF: -(10 + 75 * Math.max(0, Math.sin(t + 1.2 + Math.PI))), upN: -42 * s + 8, upF: 42 * s + 8, foN: 55 + 15 * s, foF: 55 - 15 * s, cape: 3, capeRot: 0 }); } },
  gather: { dur: 1.8, f: u => pupKeys([[0, pr({})], [0.3, pr({ dy: 6, lean: -32, thN: 55, knN: -85, thF: 45, knF: -80, upN: 55, foN: 5, upF: 20, foF: 20 })],
    [0.5, pr({ dy: 6.4, lean: -34, thN: 55, knN: -85, thF: 45, knF: -80, upN: 48, foN: 0, upF: 20, foF: 20 })],
    [0.7, pr({ dy: 1.6, lean: -10, thN: 15, knN: -25, thF: 10, knF: -20, upN: 60, foN: 70, upF: 10, foF: 20 })], [1, pr({ upN: 50, foN: 80 })]], u) },
  craft: { dur: 0.9, f: u => { const s = Math.sin(u * 2 * Math.PI); return pr({ dy: 2, lean: -10, thN: 18, knN: -20, thF: -8, upN: 70 + 25 * s, foN: 40 - 25 * s, upF: 35, foF: 60 }); } },
  chop: { dur: 1.6, item: 'axe', f: u => pupKeys([[0, pr({ upN: 40, foN: 50, item: -60 })], [0.3, pr({ lean: 8, upN: 165, foN: 30, upF: 150, foF: 30, item: -170, thN: -5, thF: 5 })],
    [0.42, pr({ lean: 8, upN: 168, foN: 30, upF: 152, foF: 30, item: -175, thN: -5, thF: 5 })], [0.55, pr({ dy: 3, lean: -18, upN: 75, foN: 0, upF: 60, foF: 10, item: -15, thN: 25, knN: -30, thF: -15, cape: 3, capeRot: 25 })],
    [0.62, pr({ dy: 4, lean: -20, upN: 60, foN: 0, upF: 50, foF: 10, item: 20, thN: 28, knN: -35, thF: -15, capeRot: 25 })], [0.8, pr({ dy: 4, lean: -20, upN: 60, foN: 0, upF: 50, foF: 10, item: 20, thN: 28, knN: -35, thF: -15 })], [1, pr({ upN: 40, foN: 50, item: -60 })]], u) },
  slash: { dur: 1.3, item: 'sword', f: u => pupKeys([[0, pr({ upN: 40, foN: 40, upF: 20, foF: 40, item: -55 })], [0.22, pr({ item: -156, lean: 6, upN: 150, foN: 30, upF: -30, foF: 30, thN: -8, thF: 8, knN: -5 })],
    [0.4, pr({ item: -180, lean: 5, upN: 160, foN: 40, upF: -30, foF: 30, thN: -8, thF: 8 })], [0.6, pr({ item: -60, dy: 2, lean: -8, upN: 100, foN: 10, upF: 10, foF: 30, thN: 22, knN: -22, thF: -15, cape: 4, capeRot: 0 })],
    [0.75, pr({ item: 0, dy: 3.6, lean: -14, upN: 55, foN: -5, upF: 25, foF: 40, thN: 35, knN: -40, thF: -25, knF: -10, cape: 4, capeRot: 0 })], [0.9, pr({ item: 0, dy: 3.6, lean: -14, upN: 55, foN: -5, upF: 25, foF: 40, thN: 35, knN: -40, thF: -25, knF: -10, cape: 3, capeRot: 30 })], [1, pr({ upN: 40, foN: 40, upF: 20, foF: 40, item: -55 })]], u) },
  bow: { dur: 2.2, item: 'bow', f: u => pupKeys([[0, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: 65 })], [0.22, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: -2, draw: 0.06, lean: 2 })],
    [0.48, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: -4, draw: 1, lean: 4 })], [0.6, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: -4, draw: 1, lean: 4 })],
    [0.63, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: -5, draw: 0, hold: 1, lean: 5 })], [0.86, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: -6, hold: 0.95, lean: 4 })], [1, pr({ thN: -16, thF: 18, knN: -6, knF: -8, dy: 0.6, aim: 65 })]], u) },
  sit: { dur: 4, f: u => { const b = Math.sin(u * 2 * Math.PI); return pr({ dy: 14 + b * 0.2, lean: 6 + b * 0.8, thN: 125, knN: -115, thF: 118, knF: -110, upN: 62 + b * 2, foN: 55, upF: 55, foF: 50, capeRot: 60 }); } }
};

function pupOutfit(a) {
  const female = a.gender === 'หญิง';
  if (a.age < 4) return 'under';
  const v = villages.find(v => v.chiefId === a.id);
  if (v && a.age >= 18) return 'cape';
  const hide = discoveredProducts.hide_bag || Object.keys(a.bag || {}).some(n => /หนัง/.test(n));
  if (currentSeasonIdx === 3 && hide) return 'winter';
  if (discoveredProducts.kiln || discoveredProducts.clay_pot) return female ? 'village' : 'cloth';
  if (hide) return female ? 'deer' : 'hide';
  return female ? 'flower' : 'leaf';
}
function pupActivity(a, moving, fast) {
  const b = a.bubble || '';
  if (moving) return fast || b.startsWith('💨') || b.startsWith('⚠️') || b.includes('โจมตี') ? 'run' : 'walk';
  if (b.startsWith('🏹')) return 'bow';
  if (b.startsWith('🩸') || b.includes('โจมตี') || b.startsWith('💢')) return 'slash';
  if (b.startsWith('🛠️') || b.startsWith('🔬') || b.startsWith('🔁') || b.startsWith('😓') || b.startsWith('😅')) return 'craft';
  if (b.startsWith('เก็บ') || b.startsWith('🍃') || b.startsWith('🌿') || b.startsWith('🧺') || a.gatherT) {
    if (/ไม้|ไผ่/.test(b) && getEquip(a).hand === 'axe') return 'chop';
    return 'gather';
  }
  if (isNightTime() && !a.goal) return 'sit';
  return 'idle';
}
function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
const HAIR_COLORS = ['#2b1d16', '#3b2417', '#4a2c1a', '#1f1a17', '#6b3e22', '#8a5a2b', '#22303f'];

// 2-bone IK for an arm in rig rest space; returns [upper, fore] angles
function pupArmIK(rig, sh, el, fi, T, backDir) {
  const J = rig.joints, S = { x: J[sh][0], y: J[sh][1] }, E0 = { x: J[el][0], y: J[el][1] }, F0 = { x: J[fi][0], y: J[fi][1] };
  const L1 = Math.hypot(E0.x - S.x, E0.y - S.y), L2 = Math.hypot(F0.x - E0.x, F0.y - E0.y);
  const raw = Math.hypot(T.x - S.x, T.y - S.y) || 1; const dx = (T.x - S.x) / raw, dy = (T.y - S.y) / raw;
  const d = Math.min(Math.max(raw, Math.abs(L1 - L2) + 0.5), L1 + L2 - 0.3);
  const Tc = { x: S.x + dx * d, y: S.y + dy * d };
  const aa = (L1 * L1 - L2 * L2 + d * d) / (2 * d), hh = Math.sqrt(Math.max(0, L1 * L1 - aa * aa));
  const P = { x: S.x + dx * aa, y: S.y + dy * aa };
  const E1 = { x: P.x - dy * hh, y: P.y + dx * hh }, E2 = { x: P.x + dy * hh, y: P.y - dx * hh };
  let E = E1.y > E2.y ? E1 : E2;
  if (backDir) E = (E1.x * backDir.x + E1.y * backDir.y) < (E2.x * backDir.x + E2.y * backDir.y) ? E1 : E2;
  const A = (x, y) => Math.atan2(y, x) * 180 / Math.PI;
  const up = A(E0.x - S.x, E0.y - S.y) - A(E.x - S.x, E.y - S.y);
  const r = -up * Math.PI / 180, c = Math.cos(r), sn = Math.sin(r), rx = F0.x - E0.x, ry = F0.y - E0.y;
  const fo = A(c * rx - sn * ry, sn * rx + c * ry) - A(Tc.x - E.x, Tc.y - E.y);
  return [up, fo];
}
const armLen = (rig, sh, el, fi) => { const J = rig.joints; return Math.hypot(J[el][0] - J[sh][0], J[el][1] - J[sh][1]) + Math.hypot(J[fi][0] - J[el][0], J[fi][1] - J[el][1]); };

// Draw a puppet. (fx, feetY) = ground point on the canvas, H = target height in px.
function drawPuppet(ctx, a, fx, feetY, H, anim, tSec) {
  const rig = PUP.rigs[pupOutfit(a)] || PUP.rigs.bare; if (!rig) return false;
  const def = PUP_ANIM[anim] || PUP_ANIM.idle;
  const u = ((tSec + (a.id % 7) * 0.37) / def.dur) % 1;
  const p = def.f(u);
  const hold = p.hold || 0;
  const s = H / rig.height * (a.age < 12 ? 0.72 : 1);
  const face = a._face || 1;
  const base = new DOMMatrix().translate(fx, feetY).scale(face * s, s).translate(-rig.hip[0], -rig.feet);
  const rotAt = (m, j, deg) => m.translate(j[0], j[1]).rotate(-deg).translate(-j[0], -j[1]);
  const Mb = rotAt(base.translate(p.dx, p.dy), rig.hip, p.lean);
  const M = { body: Mb }; const ang = { upN: p.upN, foN: p.foN, upF: p.upF, foF: p.foF, thN: p.thN, shN: p.knN, thF: p.thF, shF: p.knF };
  const build = () => { for (const [seg, j, par] of PUP_SEGS) M[seg] = rotAt(M[par], rig.joints[j], ang[seg]); };
  build();
  const item = def.item;
  // bow: far arm holds the bow toward the aim, near arm draws the string
  let bowInfo = null;
  if (item === 'bow') {
    const J = rig.joints, aim = p.aim * Math.PI / 180, ad = { x: Math.cos(aim), y: Math.sin(aim) };
    const sf = { x: J.shF[0], y: J.shF[1] }, sn = { x: J.shN[0], y: J.shN[1] };
    const reach = armLen(rig, 'shF', 'elF', 'fistF') - 0.6;
    const grip = { x: sf.x + ad.x * reach, y: sf.y + ad.y * reach };
    [ang.upF, ang.foF] = pupArmIK(rig, 'shF', 'elF', 'fistF', grip);
    const DL = Math.hypot(grip.x - sn.x, grip.y - sn.y) * 0.78, hd = Math.max(p.draw, hold);
    const hand = { x: grip.x - ad.x * (5.6 + hd * DL), y: grip.y - ad.y * (5.6 + hd * DL) };
    const rN = armLen(rig, 'shN', 'elN', 'fist') - 1;
    [ang.upN, ang.foN] = hd < 0.04 ? pupArmIK(rig, 'shN', 'elN', 'fist', { x: sn.x + Math.sin(0.66) * rN, y: sn.y + Math.cos(0.66) * rN })
                                   : pupArmIK(rig, 'shN', 'elN', 'fist', hand, ad);
    build();
    bowInfo = { gripL: grip, adL: ad, handL: hand, dl: p.draw, hold };
  }
  const img = rig.img;
  const piece = (k, m) => { const pc = rig.pieces[k]; if (!pc) return; ctx.setTransform(m); ctx.drawImage(img, pc.sx, pc.sy, pc.w, pc.h, pc.x, pc.y, pc.w, pc.h); };
  const DPR = ctx.getTransform();
  const withBase = m => DPR.multiply(m);
  const drawP = (k, m) => piece(k, withBase(m));
  // hair colour
  const hc = a.age >= 55 ? '#d6d3d1' : HAIR_COLORS[hashStr(a.name || '') % HAIR_COLORS.length];
  // cape (back layer)
  if (rig.cape) {
    const capeKey = 'cape_' + (p.cape || 1);
    const cm = rotAt(Mb, rig.capeAnchor, -0.5 * p.lean + (p.cape === 3 ? (p.capeRot || 0) : 0));
    drawP(rig.pieces[capeKey] ? capeKey : 'cape_3', cm);
  }
  // long hair behind the head (girls)
  const hd = rig.pieces.head; const hcx = hd.x + hd.w * 0.5, hcy = hd.y + hd.h * 0.5, hr = hd.w * 0.5;
  const hairBack = () => {
    if (a.gender !== 'หญิง' || a.age < 4) return;
    ctx.setTransform(withBase(Mb)); ctx.fillStyle = hc; ctx.beginPath();
    ctx.ellipse(hcx - hr * 0.35, hcy + hr * 0.45, hr * 0.62, hr * 0.95, 0.25, 0, Math.PI * 2); ctx.fill();
  };
  hairBack();
  if (!rig.skirt) drawP('pelvis', Mb);
  ['upF', 'foF', 'thF', 'shF'].forEach(k => drawP(k, M[k]));
  if (bowInfo) drawBow(ctx, withBase(Mb), bowInfo, s, 'limb');
  ['thN', 'shN'].forEach(k => drawP(k, M[k]));
  if (rig.skirt) drawP('pelvis', Mb);
  drawP('chest', Mb); drawP('head', Mb);
  if (rig.cape) drawP('cape_front', Mb);
  // hair cap + face
  ctx.setTransform(withBase(Mb));
  if (a.age >= 2) {
    ctx.fillStyle = hc; ctx.beginPath();
    ctx.ellipse(hcx + hr * 0.05, hcy - hr * 0.32, hr * 1.0, hr * 0.72, -0.08, Math.PI * 0.98, Math.PI * 2.02); ctx.fill();
    ctx.beginPath(); ctx.ellipse(hcx + hr * 0.35, hcy - hr * 0.45, hr * 0.55, hr * 0.32, 0.4, 0, Math.PI * 2); ctx.fill();
    if (a.gender === 'หญิง') { ctx.fillStyle = '#f472b6'; ctx.beginPath(); ctx.arc(hcx - hr * 0.55, hcy - hr * 0.55, hr * 0.16, 0, Math.PI * 2); ctx.fill(); }
  }
  const mood = getMood(a);
  ctx.lineWidth = Math.max(0.6, hr * 0.09); ctx.lineCap = 'round';
  const fxh = hcx + hr * 0.28, fyh = hcy + hr * 0.12, fr = hr * 0.62;
  FACE.eyes(ctx, fxh, fyh, fr, mood); FACE.mouth(ctx, fxh, fyh, fr, mood);
  if (item === 'bow') drawBow(ctx, withBase(Mb), bowInfo, s, 'string');
  if (item && item !== 'bow') drawItem(ctx, withBase(base), base.inverse().multiply(M.foN), rig, item, p);
  drawP('upN', M.upN);
  drawP('foN', M.foN);
  ctx.setTransform(DPR);
  // hit-box for tapping
  a._hit = { x: fx - H * 0.35, y: feetY - H * 1.05, w: H * 0.7, h: H * 1.05 };
  return true;
}
function drawItem(ctx, mBase, foInBase, rig, kind, p) {
  // drawn in un-leaned base space: absolute angle p.item, anchored at the fist (sizes = rig units)
  ctx.setTransform(mBase);
  const f = foInBase.transformPoint({ x: rig.joints.fist[0], y: rig.joints.fist[1] });
  const th = p.item * Math.PI / 180, dx = Math.cos(th), dy = Math.sin(th), nx = -dy, ny = dx, k = 0.3125;
  const Q = (a, b) => [f.x + (dx * a + nx * b) * k, f.y + (dy * a + ny * b) * k];
  const poly = (pts, fill, stroke) => { ctx.beginPath(); pts.forEach((q, i) => i ? ctx.lineTo(...q) : ctx.moveTo(...q)); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 0.8; ctx.stroke(); } };
  if (kind === 'sword') {
    poly([Q(-30, -6), Q(-30, 6), Q(22, 6), Q(22, -6)], '#6e4628', '#3c2314');
    poly([Q(22, -22), Q(22, 22), Q(30, 22), Q(30, -22)], '#be9f46', '#5a3c14');
    poly([Q(30, -8), Q(30, 8), Q(210, 6), Q(232, 0), Q(210, -6)], '#d7e1eb', '#46505f');
  } else if (kind === 'axe') {
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#3c2314'; ctx.lineWidth = 13 * k; ctx.beginPath(); ctx.moveTo(...Q(-30, 0)); ctx.lineTo(...Q(150, 0)); ctx.stroke();
    ctx.strokeStyle = '#82552d'; ctx.lineWidth = 8 * k; ctx.beginPath(); ctx.moveTo(...Q(-28, 0)); ctx.lineTo(...Q(148, 0)); ctx.stroke();
    poly([Q(112, -4), Q(112, 52), Q(150, 66), Q(160, 40), Q(150, -4)], '#969691', '#3c3c3c');
  }
}
function drawBow(ctx, m, b, s, part) {
  ctx.setTransform(m);
  const { gripL: g, adL: ad, handL: h } = b; const an = { x: -ad.y, y: ad.x };
  const K = 0.3125, bend = b.dl * 22;
  const P = (a, n) => [g.x + (ad.x * a + an.x * n) * K, g.y + (ad.y * a + an.y * n) * K];
  const top = P(-(10 + bend * 0.4), -118), bot = P(-(10 + bend * 0.4), 118);
  if (part === 'limb') {
    const c1 = P(18 + bend * 0.3, -70), c2 = P(18 + bend * 0.3, 70);
    ctx.lineCap = 'round';
    for (const [w, col] of [[12 * K, '#3c2314'], [7 * K, '#966437']]) {
      ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(...top); ctx.quadraticCurveTo(...c1, g.x, g.y); ctx.quadraticCurveTo(...c2, ...bot); ctx.stroke();
    }
  } else {
    const sp = b.dl > 0.05 ? [h.x, h.y] : P(-14, 0);
    ctx.strokeStyle = 'rgba(235,230,210,.95)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(...top); ctx.lineTo(...sp); ctx.lineTo(...bot); ctx.stroke();
    if (b.dl > 0.03 && !b.hold) {
      const tail = sp, tip = [tail[0] + ad.x * 72, tail[1] + ad.y * 72];
      ctx.strokeStyle = '#5a3c1e'; ctx.lineWidth = 1.8; ctx.beginPath(); ctx.moveTo(...tail); ctx.lineTo(...tip); ctx.stroke();
      ctx.fillStyle = '#969691'; ctx.beginPath(); ctx.moveTo(tip[0] + ad.x * 7, tip[1] + ad.y * 7); ctx.lineTo(tip[0] + an.x * 2.8, tip[1] + an.y * 2.8); ctx.lineTo(tip[0] - an.x * 2.8, tip[1] - an.y * 2.8); ctx.fill();
    }
  }
}
