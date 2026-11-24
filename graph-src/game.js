// ==========================================
// 1. PIXEL SPRITES
// ==========================================
const PALETTE = {
  '.': null, 'K': '#000000', 'S': '#fbcfe8', 'H': '#1e293b', 'B': '#38bdf8', 'P': '#ec4899',
  'G': '#22c55e', 'Y': '#eab308', 'W': '#78350f', 'L': '#b45309', 'R': '#64748b', 'D': '#334155',
  'F': '#ef4444', 'O': '#f97316', 'C': '#ffffff', 'E': '#06b6d4'
};

const SPRITES = {
  ai_male: ['....KHHHHK....','...KHHHHHHK...','..KHSSSSSSHK..','..KHSKSSKSHK..','...KSSSSSSK...','..KBBBBBBBBK..','.KSBBBBBBBBSK.','.KSKBBBBBBKSK.','..KBBBBBBBBK..','...KWWWWWWK...','...KWW..WWK...','...KSS..SSK...','..KKK....KKK..'],
  ai_female: ['...KHHHHHHK...','..KHHHHHHHHK..','..KHSSSSSSHK..','..KHSKSSKSHK..','...KHSSSSHK...','..KPPPPPPPPK..','.KSPPPPPPPPSK.','.KSKPPPPPPKSK.','..KPPPPPPPPK..','...KSS..SSK...','...KSS..SSK...','..KKK....KKK..'],
  ai_child: ['.....KKKK.....','....KHHHHK....','...KHSSSSHK...','...KHSKKSKH...','....KGGGGK....','..KSGGGGGGSK..','...KGGGGGGK...','....KSSKSSK...','....KK..KK....'],
  ai_elder: ['....KCCCCK....','...KCCCCCCK...','..KCSSSSSSCK..','..KCSKSSKSCK..','...KSSSSSSK...','..KYYYYYYYYK..','.KSYYYYYYYYSK.','.KSKYYYYYYKSK.','..KYYYYYYYYK..','...KWWWWWWK...','...KWW..WWK...','..KKK....KKK..'],
  leopard: ['......KKKK....','.....KOOOKK...','....KOOOOOOK..','..KKOOOOOOOOK.','.KKOOKKOKOOKK.','.KOOOOOOOOOOK.','.KOOOKOOOKOOK.','..KK..KK..KK..'],
  wolf: ['.K.....K......','.KRK..KRK.....','..KRRRRRK.....','.KRCRRCRRK....','..KRRDRRRRKKK.','...KRRRRRRRRK.','...KRRRRRRRK..','...KK.KK.KK...'],
  boar: ['......KKKKK...','....KKWWWWKK..','...KKWWWWWWKK.','..KCCWWWWWWKK.','.KCCWWWWWWWWK.','..KWWWWWWWWK.','..KKW....WKK.'],
  deer: ['..KC..CK......','...KCCK.......','...KOOK.......','..KOOOOOK.....','.KOOOOOOOK....','.KOOOOOOOK....','..KKO..OKK....'],
  fish: ['......KK......','....KKEEKK....','..KKEEEEEEKK.K','.KCEEEEEEEEEEK','..KKEEEEEEKK.K','....KKEEKK....'],
  shelter_hut: ['......LL......','.....LLLL.....','....LLLLLL....','...LLLLLLLL...','..LLLLLLLLLL..','.LLLLLLLLLLLL.','..KWWWWWWWWK..','..KW.K.K..WK..','..KW.KKK..WK..','.KWWWWWWWWWWK.'],
  shelter_kiln: ['.....KDDDK....','....KDDDDDK...','...KDDDDDDDK..','..KDDKFFKDDK..','.KDDDKFFKDDDK.','.KDDDKFFKDDDK.','KKKKKKKKKKKKKK'],
  shelter_farm: ['..KWWWWWWWWK..','.KWGGGGGGGGWK.','.KWGLLGGLLGWK.','.KWGGGGGGGGWK.','.KWGLLGGLLGWK.','..KWWWWWWWWK..'],
  shelter_reactor: ['....KEEEEKK...','...KEKKKKKKE..','..KEKYYYYKKE..','..KEKYEEKYKE..','.KEEKKKKKKEKK.','.KDDDDDDDDDDK.','KKKKKKKKKKKKKK'],
  st_fire: ['......F.......','.....FOF......','....FOYOF.....','....FOYOF.....','...WFOOOFW....','..WWLWWLWWW...','..RR.RR.RR....'],
  st_bench: ['..............','.LLLLLLLLLLLL.','.WWWWWWWWWWWW.','..W........W..','..W..RR....W..','..W........W..','.KK........KK.'],
  st_smelter: ['....KRRRK.....','...KRDDDRK....','..KRDFFFDRK...','..KRDFOFDRK...','.KRRDFFFDRRK..','.KRRRRRRRRRK..','KKKKKKKKKKKKK.'],
  st_wall: ['K.K.K.K.K.K.K.','LLLLLLLLLLLLLL','LKLLLKLLLKLLLK','LLLLLLLLLLLLLL','LLKLLLKLLLKLLL','LLLLLLLLLLLLLL'],
  st_gate: ['....EEEEEE....','..EEPPPPPPEE..','.EPP......PPE.','EPP...CC...PPE','EP...CEEC...PE','EP...CEEC...PE','EPP...CC...PPE','.EPP......PPE.','..EEPPPPPPEE..','....EEEEEE....'],
  st_store: ['....KLLLLK....','..KLLLLLLLLK..','.KLLLLLLLLLLK.','KWWWWWWWWWWWWK','KWKWWKWWKWWKWK','KWWWWWWWWWWWWK','KWWWKKKKWWWWWK','KWWWKYYKWWWWWK','KKKKKKKKKKKKKK'],
  st_lab: ['.....KCK......','.....KEK......','....KEEEK.....','...KEEPEEK....','..KEEEEEEEK...','.KDDDDDDDDDK..','.KDRRDDRRDDK..','KKKKKKKKKKKKK.'],
  res_rock: ['......KK......','....KRRRRK....','..KRRRRRRRRK..','.KRRDDRRRDRRK.','KRRRRRRRRRRRRK','KKKKKKKKKKKKKK'],
  res_tree: ['...KGGGGGGK...','..KGGGGGGGGEK.','.KGGGGGGGGGGK.','..KGGGGGGGGK..','....KWWWWK....','....KWWWWK....','...KWWWWWWK...'],
  res_bamboo: ['..K..K..K.....','.KG.KG.KGK....','..K..K..K.....','.KG.KG.KGK....','..K..K..K.....','.KG.KG.KGK....']
};

function drawPixelSprite(ctx, spriteKey, px, py, scale, recolor) {
  const mat = SPRITES[spriteKey];
  if (!mat) return;
  const pSize = Math.max(2, Math.floor(scale * 2.2 / 14));
  for (let r = 0; r < mat.length; r++) {
    const row = mat[r];
    for (let c = 0; c < row.length; c++) {
      const col = recolor && recolor[row[c]] ? recolor[row[c]] : PALETTE[row[c]];
      if (col) { ctx.fillStyle = col; ctx.fillRect(px + c * pSize, py + r * pSize, pSize, pSize); }
    }
  }
}

// ==========================================
// 2. GAME STATE
// ==========================================
const SAVE_KEY = 'island_ai_sandbox_v20_realms';
const MAX_POPULATION = 50;
const CROWD_LIMIT = 20;   // more residents than this in one zone feels crowded

let isRunning = true, simSpeed = 1, simTimer = null;
let simMinutes = 480, simDay = 1;
let currentZoneId = 'C1';
let tileSize = 7, showLabels = true, showGrid = true;
let ticksSinceLastSave = 0;
let worldSeed = Math.floor(Math.random() * 1e9);

const SEASONS = [
  { id: 'spring', name: '🌸 ฤดูใบไม้ผลิ', temp: '27°C', tint: 'rgba(34, 197, 94, 0.06)', foodMult: 1.0, fishBonus: 1, gatherBonus: 2 },
  { id: 'summer', name: '☀️ ฤดูร้อน', temp: '36°C', tint: 'rgba(245, 158, 11, 0.14)', foodMult: 1.2, fishBonus: 0, gatherBonus: 1 },
  { id: 'rainy',  name: '🌧️ ฤดูฝน', temp: '24°C', tint: 'rgba(14, 165, 233, 0.22)', foodMult: 1.1, fishBonus: 2, gatherBonus: 1 },
  { id: 'winter', name: '❄️ ฤดูหนาว', temp: '11°C', tint: 'rgba(186, 230, 253, 0.26)', foodMult: 1.5, fishBonus: 0, gatherBonus: 1 }
];
let currentSeasonIdx = 0;
let weather = { kind: 'clear', hours: 6 };

// Tech tree = milestones of what the island has DISCOVERED (not a recipe list)
const TECH_TREE_ERAS = [
  { era: 1, title: 'ยุคที่ 1: ยุคหินและเชือก', nodes: [
    { id: 't_flint', name: 'ใบมีดหิน', desc: 'เครื่องมือตัดชิ้นแรก ใช้ตัดและแกะวัสดุ', keys: ['stone_blade'] },
    { id: 't_rope',  name: 'เชือกเกลียว', desc: 'ใช้มัดโครงสร้างและเครื่องมือ', keys: ['rope'] } ] },
  { era: 2, title: 'ยุคที่ 2: ยุคไฟและเครื่องปั้นดินเผา', nodes: [
    { id: 't_fire', name: 'กองไฟ', desc: 'ทำอาหารสุก และเป็นที่ชุมนุมเล่าความรู้ตอนกลางคืน', keys: ['campfire'] },
    { id: 't_clay', name: 'เครื่องปั้นดินเผา', desc: 'ภาชนะและเตาเผาอุณหภูมิสูง', keys: ['clay_pot', 'kiln'] } ] },
  { era: 3, title: 'ยุคที่ 3: ยุคล่าสัตว์และปศุสัตว์', nodes: [
    { id: 't_bow',  name: 'ธนูไม้ไผ่', desc: 'ล่าสัตว์แม่นขึ้น และไล่เสือดาวได้', keys: ['bow'] },
    { id: 't_farm', name: 'คอกสัตว์และแปลงเกษตร', desc: 'สัตว์ขยายพันธุ์เร็วขึ้น 2 เท่า', keys: ['ranch_pen'] } ] },
  { era: 4, title: 'ยุคที่ 4: ยุคโลหะ', nodes: [
    { id: 't_iron', name: 'การถลุงเหล็ก', desc: 'ได้โลหะสำหรับเครื่องมือที่ทนทาน', keys: ['iron_ingot', 'steel_ingot'] },
    { id: 't_wall', name: 'กำแพงอิฐกันภัย', desc: 'ลดความเสียหายจากภัยพิบัติ 70%', keys: ['brick_wall'] } ] },
  { era: 5, title: 'ยุคที่ 5: ยุคแปรธาตุ', nodes: [
    { id: 't_elem', name: 'ห้องแล็บแปรธาตุ', desc: 'สังเคราะห์ธาตุใหม่', keys: ['lab'] },
    { id: 't_reac', name: 'หอปฏิกรณ์พลังงาน', desc: 'ประชากรหิวช้าลง พึ่งพาตนเองได้', keys: ['reactor_core'] } ] }
];
let techDiscovered = {};      // nodeId -> {by, day}
let discoveredProducts = {};  // productKey -> {by, day}

let ZONES = {
  W1: { name: 'W1: ที่ราบลุ่มบ่อดินเหนียว (เหนือ-ตก)', geo: 'wetland', r: 0, c: 0, res: ['ดินร่วน', 'ต้นกก'] },
  N1: { name: 'N1: ภูเขาหินและหน้าผาตะวันตก', geo: 'mountain_cliff', r: 0, c: 1, res: ['หินกรวด', 'กำมะถันดิบ'] },
  N2: { name: 'N2: หน้าผาสูงตะวันออก', geo: 'mountain_cliff', r: 0, c: 2, res: ['รังนกทะเล', 'หินเหล็กไฟ'] },
  N3: { name: 'N3: หาดหินน้ำเค็ม', geo: 'rocky_beach', r: 0, c: 3, res: ['เกลือทะเล', 'หอยนางรม'] },
  N4: { name: 'N4: หาดกรวดและขอนไม้ (เหนือ-ออก)', geo: 'rocky_beach', r: 0, c: 4, res: ['ขอนไม้ลอยน้ำ', 'สาหร่ายทะเล'] },
  W2: { name: 'W2: พื้นที่ลุ่มน้ำขัง', geo: 'wetland', r: 1, c: 0, res: ['แร่เหล็กบึง', 'ดินร่วน'] },
  C1: { name: 'C1: โถงหน้าถ้ำและเชิงเขา (ฐานหลัก)', geo: 'mountain_cave', r: 1, c: 1, res: ['หินเหล็กไฟ', 'ดินประสิว', 'กิ่งไม้แห้ง'] },
  C2: { name: 'C2: ภูเขาน้ำตกและต้นน้ำ', geo: 'waterfall_river', r: 1, c: 2, res: ['น้ำจืด', 'ปลาซิว', 'ดินร่วน'] },
  E1: { name: 'E1: ที่ราบผืนหญ้าและแม่น้ำสายหลัก', geo: 'river_grassland', r: 1, c: 3, res: ['น้ำจืด', 'ทรายละเอียด', 'กุ้งฝอย'] },
  E2: { name: 'E2: ที่ราบผืนหญ้าริมคุ้งแม่น้ำ', geo: 'river_grassland', r: 1, c: 4, res: ['ต้นกล้วยป่า', 'ปลาช่อน'] },
  W3: { name: 'W3: ป่าชายเลนปากน้ำ', geo: 'wetland', r: 2, c: 0, res: ['ต้นจาก', 'ปูทะเล'] },
  C3: { name: 'C3: เนินลาดดงไผ่และทุ่งหญ้า', geo: 'hill_grassland', r: 2, c: 1, res: ['กอไผ่สด', 'เห็ดป่า', 'กิ่งไม้แห้ง', 'เถาวัลย์เล็ก'] },
  C4: { name: 'C4: ยอดภูเขาและสันเขาสูง', geo: 'mountain_peak', r: 2, c: 2, res: ['ต้นไม้เนื้อแข็ง', 'กิ่งง่ามไม้แข็ง'] },
  E3: { name: 'E3: ปากแม่น้ำบรรจบทะเล', geo: 'river_beach', r: 2, c: 3, res: ['ปลากระบอก', 'หอยกาบ'] },
  E4: { name: 'E4: หาดทรายขาวและดงมะพร้าว', geo: 'beach_ocean', r: 2, c: 4, res: ['ต้นมะพร้าว', 'กาบมะพร้าว'] },
  W4: { name: 'W4: ทะเลน้ำตื้นและแนวปะการัง (ใต้-ตก)', geo: 'beach_ocean', r: 3, c: 0, res: ['หอยมือเสือ', 'ปะการัง'] },
  S1: { name: 'S1: เนินลาดดงไม้ผลป่า', geo: 'hill_forest', r: 3, c: 1, res: ['รังผึ้งป่า', 'มะละกอป่า', 'กิ่งไม้แห้ง'] },
  S2: { name: 'S2: ที่ราบผืนหญ้ากว้างและพุ่มไม้', geo: 'open_grassland', r: 3, c: 2, res: ['เบอร์รี่ป่า', 'สมุนไพร', 'มดแดง', 'กิ่งไม้แห้ง'] },
  S3: { name: 'S3: ป่าดิบชื้นไม้ใหญ่ทึบ', geo: 'deep_forest', r: 3, c: 3, res: ['ต้นไม้เนื้อแข็ง', 'ยางไม้เหนียว', 'เถาวัลย์เล็ก'] },
  S4: { name: 'S4: ชายหาดทรายทิศใต้ (ใต้-ออก)', geo: 'beach_ocean', r: 3, c: 4, res: ['เปลือกหอยคม', 'ทรายละเอียด'] }
};

function getZoneAt(r, c) { return Object.keys(ZONES).find(id => ZONES[id].r === r && ZONES[id].c === c) || null; }
function getAdjacentZones(zId) {
  const z = ZONES[zId];
  return [[-1,0],[1,0],[0,-1],[0,1]].map(([dr,dc]) => getZoneAt(z.r + dr, z.c + dc)).filter(Boolean);
}

const TERRAIN_STYLES = {
  ocean: { color: '#0369a1', label: '🌊 ทะเลลึก' }, river: { color: '#0ea5e9', label: '💧 แม่น้ำสายหลัก (น้ำจืด)' },
  swamp_water: { color: '#0f766e', label: '🐊 หนองน้ำขัง' }, sand_bank: { color: '#eab308', label: '🏖️ หาดทราย / ตลิ่งทราย' },
  mud_flat: { color: '#78350f', label: '🟫 ที่ราบดินโคลน' }, grass: { color: '#4ade80', label: '🌿 ที่ราบผืนหญ้า' },
  tall_grass: { color: '#22c55e', label: '🌾 ทุ่งหญ้าสูง' }, forest: { color: '#15803d', label: '🌳 ป่าทึบ' },
  hill_slope: { color: '#78716c', label: '⛰️ เนินลาดเชิงเขา' }, mountain_cliff: { color: '#475569', label: '🪨 หน้าผาภูเขาหิน' },
  mountain_peak: { color: '#cbd5e1', label: '🏔️ ยอดภูเขาสูง' }
};
const WATER = ['river', 'swamp_water', 'ocean'];

let zoneTerrainGrid = {};
let zoneNodes = {};
let logBuffer = [];     // per-realm chronicle
let bgTick = false;     // true while a background realm is ticking (no UI work)

let faunaSpecies = [
  { id: 'f_deer', sprite: 'deer', name: 'กวางป่า', zones: ['S2', 'C3', 'E1'], pop: 8, maxPop: 14, reproDays: 3, reproProgress: 0, lootFood: 8, lootMat: { 'หนังกวางนิ่ม': 2, 'เขากวางแข็ง': 1 } },
  { id: 'f_boar', sprite: 'boar', name: 'หมูป่าเขี้ยวตัน', zones: ['S1', 'S3', 'C3'], pop: 6, maxPop: 12, reproDays: 3, reproProgress: 0, lootFood: 10, lootMat: { 'ไขมันหมู': 2, 'หนังหมูหนา': 1 } },
  { id: 'f_fish', sprite: 'fish', name: 'ฝูงปลาแม่น้ำ', zones: ['E1', 'E2', 'C2', 'E3'], pop: 24, maxPop: 45, reproDays: 1, reproProgress: 0, lootFood: 5, lootMat: { 'เกล็ดปลา': 1 } },
  { id: 'f_leopard', sprite: 'leopard', name: 'เสือดาวเกาะ', zones: ['N1', 'S3'], pop: 3, maxPop: 6, reproDays: 6, reproProgress: 0, lootFood: 0,
    lootMat: { 'เนื้อเสือดาว': 2, 'หนังเสือดาวหนา': 1, 'เขี้ยวเสือดาว': 1, 'กรงเล็บเสือดาว': 2 }, predator: true, power: 3, solitary: true },
  { id: 'f_wolf', sprite: 'wolf', name: 'หมาป่าเกาะ', zones: ['N4', 'W3'], pop: 5, maxPop: 10, reproDays: 5, reproProgress: 0, lootFood: 0,
    lootMat: { 'เนื้อหมาป่า': 1, 'หนังหมาป่า': 1, 'เขี้ยวหมาป่า': 1 }, predator: true, power: 1 }
];
let animalLogs = [];
// ---- Per-zone animal populations ----
function initFauna(f) {
  if (!f.zp) { f.zp = {}; for (let i = 0; i < f.pop; i++) { const z = f.zones[i % f.zones.length]; f.zp[z] = (f.zp[z] || 0) + 1; } }
  if (f.id === 'f_leopard') { f.predator = true; f.power = 3; f.solitary = true; }
  syncFauna(f);
}
function syncFauna(f) {
  Object.keys(f.zp).forEach(z => { if (f.zp[z] <= 0) { delete f.zp[z]; if (f.tr) delete f.tr[z]; } });
  f.zones = Object.keys(f.zp);
  f.pop = Object.values(f.zp).reduce((t, n) => t + n, 0);
}
const START_ZONE = 'C1';   // predators never enter the starting zone
function moveAnimals(f, from, to, n) {
  if (f.predator && to === START_ZONE) return 0;
  n = Math.min(n, f.zp[from] || 0);
  if (n <= 0) return 0;
  carryTraits(f, from, to, n, f.zp[to] || 0);
  f.zp[from] -= n; f.zp[to] = (f.zp[to] || 0) + n;
  if (f.zoneCoords) delete f.zoneCoords[to];
  syncFauna(f); return n;
}
function addAnimals(f, n) {
  const zs = f.zones.length ? f.zones : [pick(Object.keys(ZONES))];
  for (let i = 0; i < n; i++) { const z = zs.filter(x => !(f.predator && x === START_ZONE)).slice().sort((p, q) => (f.zp[q] || 0) - (f.zp[p] || 0))[i % zs.length]; f.zp[z] = (f.zp[z] || 0) + 1; }
  syncFauna(f);
}
function animalLog(text, color = '#fdba74') {
  animalLogs.unshift(`วันที่ ${simDay}: ${text}`); if (animalLogs.length > 25) animalLogs.length = 25;
  addLog(`🐾 ${text}`, color);
}
const isPrey = f => !f.predator && f.sprite !== 'fish';
faunaSpecies.forEach(initFauna);

let foodStock = 0;   // legacy; food now lives in a.food (personal) and village.food
let activeDisaster = null;
let aiCrisisProposals = [];
let rndTrials = [];
let huntLogs = [];
let teachLogs = [];
let alchemyLogs = [];
let toolWear = {};
let dynamicProducts = {};
let novelCount = 0;
let usedNames = [];
let sharedInventory = {};   // tool counts only (see syncToolStock)
const START_ITEMS = { 'หินเหล็กไฟ': 6, 'กิ่งไม้แห้ง': 6, 'เถาวัลย์เล็ก': 6, 'ดินร่วน': 6, 'น้ำจืด': 8, 'กาบมะพร้าว': 5, 'กอไผ่สด': 5, 'ใบตองสด': 4 };
let discoveredElements = [
  { sym: 'C', name: 'คาร์บอน', source: 'ถ่านไม้', isSynthetic: false },
  { sym: 'Si', name: 'ซิลิกา', source: 'ทรายละเอียด', isSynthetic: false },
  { sym: 'Ca', name: 'แคลเซียม', source: 'เปลือกหอย / ปะการัง', isSynthetic: false },
  { sym: 'Fe', name: 'เหล็ก', source: 'แร่เหล็กบึง (W2)', isSynthetic: false },
  { sym: 'S', name: 'กำมะถัน', source: 'กำมะถันดิบ (N1)', isSynthetic: false },
  { sym: 'N', name: 'ไนเตรต', source: 'ดินประสิว (C1)', isSynthetic: false },
  { sym: 'Na', name: 'โซเดียม', source: 'เกลือทะเล (N3)', isSynthetic: false }
];

let shelters = [
  { name: 'กระท่อมฐานบัญชาการ (C1)', sprite: 'shelter_hut', zone: 'C1', x: 22, y: 22, station: null }
];

let families = [];
let government = null;
let currentGeneration = 1;

const MALE_NAMES = ['ธาม', 'คีรี', 'นที', 'ปฐพี', 'วายุ', 'ศิลา', 'เมฆา', 'อัคคี', 'ภูผา', 'ธันวา'];
const FEMALE_NAMES = ['ธารา', 'ไพลิน', 'ใบเฟิร์น', 'มินตรา', 'ตะวัน', 'ดารา', 'กานดา', 'วารี', 'พิมพ์ชนก', 'รินรดา'];
const ROLES = ['นักล่าสัตว์และสำรวจ', 'นักเก็บทรัพยากร', 'นักวิจัยและทดลอง', 'ช่างฝีมือ', 'ผู้สอนและผู้นำ'];

// ===== MMORPG-style stats: everyone starts at 1, grows only by doing =====
const STATS = {
  str: { name: 'พลัง', short: 'STR', icon: '💪', role: 'นักล่าสัตว์และสำรวจ' },
  agi: { name: 'ว่องไว', short: 'AGI', icon: '🏃', role: 'นักล่าสัตว์และสำรวจ' },
  vit: { name: 'อึด', short: 'VIT', icon: '❤️', role: 'นักเก็บทรัพยากร' },
  int: { name: 'ปัญญา', short: 'INT', icon: '🧠', role: 'นักวิจัยและทดลอง' },
  dex: { name: 'ฝีมือ', short: 'DEX', icon: '✋', role: 'ช่างฝีมือ' },
  cha: { name: 'สื่อสาร', short: 'CHA', icon: '🗣️', role: 'ผู้สอนและผู้นำ' }
};
const STAT_KEYS = Object.keys(STATS);
const STAT_MAX = 99;
function expNeed(lv) { return Math.round(8 * Math.pow(lv, 1.35)); }
function talentGrade(t) { return t >= 1.6 ? 'S' : t >= 1.25 ? 'A' : t >= 0.9 ? 'B' : t >= 0.6 ? 'C' : 'D'; }
const GRADE_COLOR = { S: '#f472b6', A: '#facc15', B: '#4ade80', C: '#94a3b8', D: '#64748b' };

function randomTalent() {
  const t = {};
  STAT_KEYS.forEach(k => { t[k] = +(0.4 + Math.random() * 1.1).toFixed(2); });
  const gift = pick(STAT_KEYS);
  t[gift] = +Math.min(2.2, t[gift] + 0.6 + Math.random() * 0.5).toFixed(2);
  return t;
}
function inheritTalent(dad, mom) {
  const t = {};
  STAT_KEYS.forEach(k => {
    const base = ((dad.talent?.[k] || 1) + (mom.talent?.[k] || 1)) / 2;
    t[k] = +Math.max(0.3, Math.min(2.4, base * (0.75 + Math.random() * 0.55))).toFixed(2);
  });
  if (Math.random() < 0.15) { const g = pick(STAT_KEYS); t[g] = +Math.min(2.4, t[g] + 0.7).toFixed(2); }
  return t;
}
function bestStat(t) { return STAT_KEYS.slice().sort((a, b) => t[b] - t[a])[0]; }
function freshStats() { const s = {}, e = {}; STAT_KEYS.forEach(k => { s[k] = 1; e[k] = 0; }); return { stats: s, sexp: e }; }
function ensureAgent(a) {
  if (!a.stats) Object.assign(a, freshStats());
  if (!a.talent) a.talent = randomTalent();
  if (!a.know) a.know = {};
  if (!a.rel) a.rel = {};
  if (a.kind === undefined) a.kind = +(0.2 + Math.random() * 0.8).toFixed(2);
  if (a.generous === undefined) a.generous = +(0.4 + Math.random() * 1.1).toFixed(2);
  if (!a.rep) a.rep = 0;
  if (!a.keepsakes) a.keepsakes = [];
  if (!a.bag) a.bag = {};
  if (a.food === undefined) a.food = 6;
  if (a.villageId === undefined) a.villageId = null;
  if (!a.home) a.home = a.zone || 'C1';
  if (a.crowd === undefined) a.crowd = 0;
  return a;
}
function st(a, k) { return a.stats ? a.stats[k] : 1; }
function maxHp(a) { return 80 + st(a, 'vit') * 4; }
function agentLevel(a) { return STAT_KEYS.reduce((s, k) => s + st(a, k), 0) - STAT_KEYS.length + 1; }
function recipeCap(a) { return 4 + st(a, 'int') * 2; }
function failCap(a) { return 30 + st(a, 'int') * 15; }
function gainExp(a, k, amt) {
  if (!a.stats) ensureAgent(a);
  a.sexp[k] += amt * a.talent[k];
  while (a.stats[k] < STAT_MAX && a.sexp[k] >= expNeed(a.stats[k])) {
    a.sexp[k] -= expNeed(a.stats[k]);
    a.stats[k]++;
    if (k === 'vit') a.hp = Math.min(maxHp(a), a.hp + 4);
    if (a.stats[k] % 5 === 0) addLog(`⬆️ [เลเวลอัป] ${a.name} ${STATS[k].icon} ${STATS[k].name} ถึงระดับ ${a.stats[k]} (พรสวรรค์ ${talentGrade(a.talent[k])})`, '#a5b4fc');
  }
}

function newAgent(o) {
  const a = Object.assign({
    id: 'ai_' + Date.now() + '_' + Math.floor(Math.random() * 1e6),
    gen: 1, age: 20, hp: 84, hunger: 15, zone: 'C1', x: 40, y: 40,
    bubble: '', know: {}, guardian: null, goal: null
  }, freshStats(), o);
  if (!a.talent) a.talent = randomTalent();
  if (!a.role) a.role = 'หาเลี้ยงชีพเอง';
  ensureAgent(a);
  a.hp = Math.min(a.hp, maxHp(a));
  return a;
}

// Founders also start with ZERO knowledge
let aiAgents = [
  newAgent({ id: 'ai_1', name: 'อคิน', gender: 'ชาย', age: 24, zone: 'C1', x: 34, y: 26, bubble: 'ไม่รู้อะไรเลย ต้องลองเอง' }),
  newAgent({ id: 'ai_2', name: 'ลินดา', gender: 'หญิง', age: 23, zone: 'C1', x: 44, y: 32, bubble: 'ลองผสมดูดีกว่า' })
];
usedNames = ['อคิน', 'ลินดา'];
// Each founder carries half of what washed ashore, plus some food of their own
Object.entries(START_ITEMS).forEach(([n, q]) => { aiAgents[0].bag[n] = Math.ceil(q / 2); aiAgents[1].bag[n] = Math.floor(q / 2); });
aiAgents.forEach(a => { a.food = 14; });
aiAgents[0].rel[aiAgents[1].id] = 50; aiAgents[1].rel[aiAgents[0].id] = 50;

// ==========================================
// 3. HIDDEN LAWS OF NATURE (per-world, deterministic, never shown as recipes)
// ==========================================
function hashStr(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return h >>> 0;
}
function hrand(s) { return hashStr(s + '#' + worldSeed) / 4294967296; }
function world() {
  return {
    clayMethod: hrand('clay-law') < 0.5 ? 'knead11' : 'mix12',
    needTinder: hrand('tinder-law') < 0.5
  };
}

// Physical properties of raw materials (what things ARE, not what to do with them)
const MAT = {
  'หินเหล็กไฟ': { hard: 1, mineral: 1, sharpable: 1 }, 'หินกรวด': { hard: 1, mineral: 1 },
  'กิ่งไม้แห้ง': { wood: 1, dry: 1, fuel: 1 }, 'กิ่งง่ามไม้แข็ง': { wood: 1, dry: 1, fuel: 1 },
  'ขอนไม้ลอยน้ำ': { wood: 1, fuel: 1, wet: 1 }, 'ต้นไม้เนื้อแข็ง': { wood: 1, fuel: 1 }, 'ต้นมะพร้าว': { wood: 1, fuel: 1 },
  'เถาวัลย์เล็ก': { fiber: 1 }, 'ต้นกก': { fiber: 1 }, 'ต้นจาก': { fiber: 1 }, 'กาบมะพร้าว': { fiber: 1, dry: 1, fuel: 1 },
  'ต้นกล้วยป่า': { fiber: 1, wet: 1 }, 'กอไผ่สด': { wood: 1, bamboo: 1, fiber: 0.5 }, 'ใบตองสด': { leaf: 1, wet: 1 },
  'ดินร่วน': { clay: 1 }, 'น้ำจืด': { water: 1, wet: 1 },
  'ทรายละเอียด': { sand: 1, mineral: 1, elem: 'Si' }, 'เปลือกหอยคม': { hard: 1, sharpable: 1, mineral: 1, elem: 'Ca' },
  'ปะการัง': { hard: 1, mineral: 1, elem: 'Ca' }, 'เกลือทะเล': { salt: 1, mineral: 1, elem: 'Na' },
  'แร่เหล็กบึง': { ore: 1, mineral: 1, elem: 'Fe' }, 'กำมะถันดิบ': { mineral: 1, fuel: 0.5, elem: 'S' }, 'ดินประสิว': { mineral: 1, elem: 'N' },
  'ยางไม้เหนียว': { sticky: 1, fuel: 0.5 }, 'รังผึ้งป่า': { food: 1, sticky: 1 }, 'ไขมันหมู': { fuel: 1, food: 0.5, sticky: 0.5 },
  'สมุนไพร': { herb: 1 }, 'หนังกวางนิ่ม': { hide: 1 }, 'หนังหมูหนา': { hide: 1 }, 'หนังเสือดาวหนา': { hide: 1 },
  'เขากวางแข็ง': { hard: 1, sharpable: 1 },
  'หินออบซิเดียน': { hard: 1, mineral: 1, sharpable: 1 }, 'ดินเถ้าภูเขาไฟ': { clay: 1 }, 'ใยปาล์มไหม้': { fiber: 1, dry: 1, fuel: 1 },
  'กิ่งไม้เกรียม': { wood: 1, dry: 1, fuel: 1 }, 'น้ำพุร้อน': { water: 1, wet: 1 }, 'ทรายดำ': { sand: 1, mineral: 1, elem: 'Si' }, 'หินกำมะถันร้อน': { mineral: 1, fuel: 0.5, elem: 'S' },
  'หินเกล็ดน้ำแข็ง': { hard: 1, mineral: 1, sharpable: 1 }, 'ตะไคร่แห้ง': { fiber: 1, dry: 1, fuel: 1 }, 'ต้นสน': { wood: 1, fuel: 1 }, 'กิ่งสนแห้ง': { wood: 1, dry: 1, fuel: 1 },
  'ดินเหนียวเยือกแข็ง': { clay: 1 }, 'กิ่งหลิวแช่แข็ง': { wood: 1, bamboo: 1, fiber: 0.5 }, 'น้ำแข็งละลาย': { water: 1, wet: 1 }, 'ใบสนสด': { leaf: 1, wet: 1 },
  'เถาวัลย์ผี': { fiber: 1 }, 'หินมืด': { hard: 1, mineral: 1 }, 'ดินโคลนดำ': { clay: 1 },
  'เนื้อเสือดาว': { food: 1, bad: 1 }, 'เนื้อหมาป่า': { food: 1, bad: 1 }, 'หนังหมาป่า': { hide: 1 },
  'เขี้ยวเสือดาว': { hard: 1, sharpable: 1 }, 'กรงเล็บเสือดาว': { hard: 1, sharpable: 1, sharp: 1 }, 'เขี้ยวหมาป่า': { hard: 1, sharpable: 1 }, 'เกล็ดปลา': { scale: 1 }, 'สาหร่ายทะเล': { food: 0.5, wet: 1 }
};

// Possible results of the world. AI never sees this list; they only learn what they actually make.
const PRODUCTS = {
  stone_blade:  { name: 'ใบมีดหินคม', kind: 'tool', tool: 'blade', dur: 10, props: { hard: 1, sharp: 1, mineral: 1 } },
  rope:         { name: 'เชือกเกลียว', kind: 'item', props: { fiber: 2, rope: 1 } },
  stone_axe:    { name: 'ขวานหิน', kind: 'tool', tool: 'axe', dur: 15, props: { hard: 1 } },
  workbench:    { name: 'โต๊ะช่างไม้', kind: 'station', station: 'workbench' },
  bow:          { name: 'ธนูไม้ไผ่', kind: 'tool', tool: 'bow', dur: 20, props: { wood: 1 } },
  campfire:     { name: 'กองไฟ', kind: 'station', station: 'campfire' },
  clay_paste:   { name: 'ดินปั้นเนื้อเนียน', kind: 'item', props: { paste: 1 } },
  raw_pot:      { name: 'หม้อดินดิบ', kind: 'item', props: { raw: 1 } },
  raw_brick:    { name: 'อิฐดิบ', kind: 'item', props: { raw: 1 } },
  clay_pot:     { name: 'หม้อดินเผา', kind: 'tool', tool: 'vessel', dur: 25, props: { hard: 1 } },
  fired_brick:  { name: 'อิฐเผา', kind: 'item', props: { hard: 1, brick: 1 } },
  kiln:         { name: 'เตาเผาอิฐ', kind: 'station', station: 'kiln' },
  brick_wall:   { name: 'กำแพงอิฐกันภัย', kind: 'station', station: 'wall' },
  bamboo_tube:  { name: 'กระบอกไม้ไผ่', kind: 'tool', tool: 'vessel', dur: 10, props: { wood: 1 } },
  fence_posts:  { name: 'เสาไม้รั้ว', kind: 'item', props: { wood: 1, fuel: 1, fence: 1 } },
  ranch_pen:    { name: 'คอกสัตว์และแปลงเกษตร', kind: 'station', station: 'farm' },
  hide_bag:     { name: 'ย่ามหนังสัตว์', kind: 'item', props: { hide: 1 } },
  cooked_food:  { name: 'อาหารปรุงสุก', kind: 'food', food: 7 },
  herbal_medicine: { name: 'ยาต้มสมุนไพร', kind: 'item', props: { herb: 1, medicine: 1 } },
  charcoal:     { name: 'ถ่านไม้', kind: 'item', props: { fuel: 2, elem: 'C' } },
  bloom_iron:   { name: 'ก้อนเหล็กฟองน้ำ', kind: 'item', props: { metal: 0.5 } },
  crucible:     { name: 'เบ้าหลอมดินทนไฟ', kind: 'tool', tool: 'crucible', dur: 15, props: { hard: 1 } },
  smelter:      { name: 'เตาถลุงแร่', kind: 'station', station: 'smelter' },
  glass:        { name: 'แก้วใส', kind: 'item', props: { glass: 1 } },
  iron_ingot:   { name: 'แท่งเหล็ก', kind: 'item', props: { metal: 1 } },
  steel_ingot:  { name: 'แท่งเหล็กกล้า', kind: 'item', props: { metal: 1, steel: 1 } },
  iron_tools:   { name: 'มีดเหล็ก', kind: 'tool', tool: 'blade', dur: 40, props: { hard: 1, sharp: 1, metal: 1 } },
  lab:          { name: 'ห้องแล็บแปรธาตุ', kind: 'station', station: 'lab' },
  reactor_core: { name: 'หอปฏิกรณ์พลังงาน', kind: 'station', station: 'reactor' }
};

const STATION_SPRITE = { campfire: 'st_fire', workbench: 'st_bench', kiln: 'shelter_kiln', smelter: 'st_smelter', wall: 'st_wall', farm: 'shelter_farm', lab: 'st_lab', reactor: 'shelter_reactor' };
const STATION_LABEL = { campfire: 'กองไฟ', workbench: 'โต๊ะช่าง', kiln: 'เตาเผา', smelter: 'เตาถลุง', wall: 'กำแพงอิฐ', farm: 'คอกสัตว์', lab: 'ห้องแล็บ', reactor: 'หอปฏิกรณ์' };
const TOOL_LABEL = { blade: 'ของมีคม', vessel: 'ภาชนะใส่น้ำ', crucible: 'เบ้าหลอม', axe: 'ขวาน', bow: 'ธนู' };

// Ways of working. These are actions any human could try; what they DO is hidden.
const METHODS = {
  knap:     { name: 'กะเทาะกระแทก', station: null, tool: null },
  bind:     { name: 'มัดไขว้ผูกแน่น', station: null, tool: null },
  friction: { name: 'ปั่นเสียดสีให้ร้อน', station: null, tool: null },
  cut:      { name: 'ตัดและแกะขึ้นรูป', station: null, tool: 'blade' },
  mix12:    { name: 'อัตราส่วน 1:2 คนผสมเหลว', station: null, tool: 'vessel' },
  knead11:  { name: 'อัตราส่วน 1:1 นวดอัดขึ้นรูป', station: 'workbench', tool: null },
  roast:    { name: 'ย่าง/เผาบนกองไฟ', station: 'campfire', tool: null },
  kiln:     { name: 'เผาไฟแรงในเตาปิด', station: 'kiln', tool: null },
  smelt:    { name: 'หลอมในเบ้าที่เตาถลุง', station: 'smelter', tool: 'crucible' },
  synth:    { name: 'สังเคราะห์ธาตุ', station: 'lab', tool: null }
};
const STATION_METHODS = { workbench: ['knead11'], campfire: ['roast'], kiln: ['kiln'], smelter: ['smelt'], lab: ['synth'] };

function productDef(key) { return PRODUCTS[key] || dynamicProducts[key] || null; }
function keyByName(name) {
  for (const k in PRODUCTS) if (PRODUCTS[k].name === name) return k;
  for (const k in dynamicProducts) if (dynamicProducts[k].name === name) return k;
  return null;
}
function propsOf(name) {
  const k = keyByName(name);
  if (k) return productDef(k).props || {};
  if (MAT[name]) return MAT[name];
  // Parts from evolved / mutated animals
  if (name.startsWith('ผลึกธาตุ ')) return { mineral: 1, hard: 1, elem: name.split(' ')[1] };
  if (name.startsWith('เขา')) return { hard: 1, sharpable: 1 };
  if (name.startsWith('เกล็ด')) return { hard: 1, mineral: 1 };
  if (name.startsWith('ขนปีก')) return { fiber: 1, dry: 1 };
  if (/ปลา|กุ้ง|ปู|หอย|เห็ด|เบอร์รี่|มะละกอ|กล้วย|มด|รังนก/.test(name)) return { food: 1 };
  if (/หิน/.test(name)) return { hard: 1, mineral: 1 };
  if (/ไม้/.test(name)) return { wood: 1, fuel: 1 };
  if (/หนัง/.test(name)) return { hide: 1 };
  return {};
}
function depthOf(name) { const k = keyByName(name); return k ? (productDef(k).depth || 1) : 0; }

// Pure law: (a, b, method) -> outcome. Same inputs always give the same result in the same world.
function natureLaw(a, b, m) {
  const A = propsOf(a), B = propsOf(b), W = world();
  const N = key => (P, n) => n === PRODUCTS[key].name;
  const is = k => P => !!P[k];
  const either = (fa, fb) => (fa(A, a) && fb(B, b)) || (fa(B, b) && fb(A, a));
  const ok = key => ({ ok: true, key });
  const fail = reason => ({ ok: false, reason });
  const near = reason => ({ ok: false, reason, near: true });

  switch (m) {
    case 'knap':
      if (A.hard && B.hard && (A.mineral || A.sharpable || B.mineral || B.sharpable)) return ok('stone_blade');
      if (A.hard || B.hard) return near('ทุบแล้วแค่แตกละเอียด ไม่ได้อะไร');
      return fail('นิ่มเกินไป กะเทาะไม่ได้');
    case 'bind':
      if (A.fiber && B.fiber && !A.rope && !B.rope) return ok('rope');
      if (either(N('fence_posts'), is('rope'))) return ok('ranch_pen');
      if (either(is('rope'), is('bamboo'))) return ok('bow');
      if (either(N('stone_blade'), is('wood'))) return ok('stone_axe');
      if (either(is('rope'), is('wood'))) return ok('workbench');
      if (either(is('hard'), is('wood'))) return near('หลุดออกจากกัน ไม่มีอะไรยึดให้แน่น');
      if (A.fiber || B.fiber) return fail('มัดได้ แต่ไม่ได้ของที่มีประโยชน์');
      return fail('มัดไม่ติด');
    case 'friction': {
      const dryWood = P => P.wood && P.dry;
      const tinder = P => P.fiber && P.dry;
      if (A.wet || B.wet) return fail('ชื้นเกินไป ไม่ติดไฟ');
      if (W.needTinder ? either(dryWood, tinder) : (dryWood(A) && dryWood(B))) return ok('campfire');
      if (dryWood(A) || dryWood(B)) return near(W.needTinder ? 'ร้อนขึ้นแต่ไม่มีอะไรรับไฟ' : 'มีควันนิดหน่อยแต่ไม่ติด');
      return fail('ถูกันแล้วไม่ร้อนพอ');
    }
    case 'cut':
      if (A.bamboo && B.bamboo) return ok('bamboo_tube');
      if (A.wood && B.wood && !A.bamboo && !B.bamboo && !A.fence && !B.fence) return ok('fence_posts');
      if (A.hide && B.hide) return ok('hide_bag');
      return fail('ตัดแล้วได้แค่เศษชิ้นเล็กๆ');
    case 'knead11':
    case 'mix12':
      if (either(is('clay'), is('water'))) {
        if (m === W.clayMethod) return ok('clay_paste');
        return near(m === 'mix12' ? 'ได้โคลนเหลว ปั้นขึ้นรูปไม่ได้' : 'แห้งร่วน แตกเป็นก้อน ไม่เกาะกัน');
      }
      if (m === 'knead11') {
        if (either(N('fired_brick'), N('clay_paste'))) return ok('kiln');
        if (A.brick && B.brick) return ok('brick_wall');
        if (A.paste && B.paste) return ok('raw_pot');
        if (either(is('paste'), P => P.sand || P.fiber)) return ok('raw_brick');
        return fail('นวดแล้วไม่เข้ากัน');
      }
      if (either(is('herb'), is('water'))) return ok('herbal_medicine');
      return fail('คนแล้วแยกชั้น ไม่เข้ากัน');
    case 'roast':
      if (A.leaf || B.leaf) return fail('ใบตองไหม้ไฟทะลุ!');
      if ((A.food && B.food) || either(is('food'), is('fuel'))) return ok('cooked_food');
      if (either(N('raw_pot'), is('fuel'))) return ok('clay_pot');
      if (either(N('raw_brick'), is('fuel'))) return ok('fired_brick');
      if (A.wood && B.wood) return ok('charcoal');
      if (A.paste || B.paste || A.raw || B.raw) return near('แตกร้าวเพราะไฟไม่ทั่ว');
      return fail('ไหม้เป็นเถ้า');
    case 'kiln':
      if (either(is('ore'), N('charcoal'))) return ok('bloom_iron');
      if (either(N('clay_paste'), is('sand'))) return ok('crucible');
      if (either(N('fired_brick'), N('charcoal'))) return ok('smelter');
      if (either(is('sand'), P => P.salt || P.elem === 'Ca')) return ok('glass');
      if (either(N('raw_pot'), () => true)) return ok('clay_pot');
      if (either(N('raw_brick'), () => true)) return ok('fired_brick');
      return fail('ร้อนจัดแต่ไม่เปลี่ยนแปลงอะไร');
    case 'smelt':
      if (either(N('bloom_iron'), N('charcoal'))) return ok('steel_ingot');
      if (either(is('ore'), N('charcoal'))) return ok('iron_ingot');
      if (either(is('metal'), N('glass'))) return ok('lab');
      if (either(is('metal'), is('wood'))) return ok('iron_tools');
      return fail('หลอมละลายแล้วเสียของ');
    case 'synth': {
      if (either(is('steel'), is('synthetic'))) return ok('reactor_core');
      const ea = A.elem, eb = B.elem;
      if (!ea || !eb) return fail('ไม่ใช่สารที่มีธาตุบริสุทธิ์ ไม่เกิดปฏิกิริยา');
      if (ea === eb) return fail('ธาตุเดียวกัน ไม่เกิดปฏิกิริยา');
      const pair = [ea, eb].sort().join('+');
      if (hrand('syn:' + pair) < 0.25) return fail('ปฏิกิริยารุนแรง สลายตัวหมด');
      return { ok: true, key: 'dyn:el:' + pair, synthPair: [ea, eb].sort() };
    }
  }
  return fail('ไม่มีอะไรเกิดขึ้น');
}

// Wraps the law: creates synthetic elements and rare unexpected compounds (also deterministic per world)
function react(a, b, m) {
  const res = natureLaw(a, b, m);
  if (res.ok && res.synthPair) {
    if (!dynamicProducts[res.key]) {
      const [x, y] = res.synthPair;
      const num = 100 + (hashStr(res.key + worldSeed) % 900);
      const sym = `${x[0]}${y[0].toLowerCase()}${num}`;
      dynamicProducts[res.key] = { name: `ธาตุสังเคราะห์ ${sym}`, kind: 'item', depth: 3, props: { elem: sym, synthetic: 1, mineral: 1 }, origin: `${x}+${y}` };
    }
    return res;
  }
  if (!res.ok && !res.near && depthOf(a) === 0 && depthOf(b) === 0) {
    const s = sigOf(a, b, m);
    if (hrand('novel:' + s) < 0.02) {
      const key = 'dyn:novel:' + s;
      if (!dynamicProducts[key]) {
        novelCount++;
        const BASIC = ['hard', 'wood', 'fuel', 'dry', 'fiber', 'mineral', 'sand', 'salt', 'food', 'sticky', 'hide', 'herb'];
        const props = {};
        [propsOf(a), propsOf(b)].forEach(P => BASIC.forEach(k => { if (P[k]) props[k] = 1; }));
        props[BASIC[hashStr(key + worldSeed) % BASIC.length]] = 1;
        dynamicProducts[key] = { name: `วัสดุแปลกใหม่ #${novelCount}`, kind: 'item', depth: 2, props, origin: `${a} + ${b} (${METHODS[m].name})` };
      }
      return { ok: true, key, novel: true };
    }
  }
  return res;
}

// ==========================================
// 4. STATIONS, TOOLS, KNOWLEDGE HELPERS
// ==========================================
function sigOf(a, b, m) { const [x, y] = [a, b].sort(); return `${x}+${y}|${m}`; }
function stationsOf(type) { return shelters.filter(s => s.station === type); }
function stationInZone(zone, type) { return shelters.find(s => s.station === type && s.zone === zone); }
// ===== OWNERSHIP: stations and tools belong to someone =====
let toolItems = [];   // [{uid, name, type, owner, ownerName, wear, lentTo, lendUntil}]
let toolSeq = 0;
function ownerOf(thing) { return thing && thing.owner ? byId(thing.owner) : null; }
// Can this agent use this station/tool without asking?
function canUse(agent, thing) {
  if (!thing || !agent) return false;
  if (thing.public || !thing.owner) return true;
  if (thing.owner === agent.id) return true;
  const o = ownerOf(thing);
  if (!o) return true;                                   // owner gone → effectively communal
  if (thing.lentTo === agent.id && (thing.lendUntil || 0) >= nowH()) return true;
  if ((thing.permits || []).includes(agent.id)) return true;
  return rel(o, agent) >= 30;                            // close friends may use freely
}
function addOwnLog(text, color = '#fde68a') { addLog(text, color); addTeachLog(text); }
// Ask the owner. Returns true if allowed (or used anyway by sneaking).
function askToUse(agent, thing, label) {
  const o = ownerOf(thing);
  if (!o) return true;
  thing.denied = thing.denied || {};
  if (thing.denied[agent.id] && nowH() - thing.denied[agent.id] < 24) return trySneak(agent, thing, label, o);
  const score = rel(o, agent) + o.kind * 40 + (o.generous - 1) * 15;
  if (score >= 14) {
    if (thing.uid) { thing.lentTo = agent.id; thing.lendUntil = nowH() + 8; }
    else { thing.permits = thing.permits || []; thing.permits.push(agent.id); }
    addRel(agent, o, 3); addRel(o, agent, 1);
    addOwnLog(`🤲 ${agent.name} ขอใช้ "${label}" ของ ${o.name} → อนุญาต`);
    return true;
  }
  thing.denied[agent.id] = nowH();
  addRel(agent, o, -3);
  addOwnLog(`🙅 ${agent.name} ขอใช้ "${label}" ของ ${o.name} → ถูกปฏิเสธ`, '#fca5a5');
  agent.bubble = `🙅 ${o.name} ไม่ให้ใช้`;
  return trySneak(agent, thing, label, o);
}
function trySneak(agent, thing, label, o) {
  if (agent.kind > 0.35 || Math.random() > 0.15) return false;
  const seen = o.zone === agent.zone && Math.random() < 0.6;
  if (seen) {
    addRel(o, agent, -18); addRel(agent, o, -6);
    agent.bubble = '😳 ถูกจับได้!'; o.bubble = `😡 ${agent.name} แอบใช้ของฉัน!`;
    addOwnLog(`🚨 [แอบใช้ของ] ${o.name} จับได้ว่า ${agent.name} แอบใช้ "${label}" ความสัมพันธ์ดิ่งลง`, '#fb7185');
    return false;
  }
  agent.bubble = `🤫 แอบใช้${label}`;
  return true;
}
function stationNear(agent, type, ask = true) {
  const near = shelters.filter(s => s.station === type && s.zone === agent.zone && Math.hypot(s.x - agent.x, s.y - agent.y) <= 8);
  const ok = near.find(s => canUse(agent, s));
  if (ok) return ok;
  if (ask && near.length) { const s = near[0]; if (askToUse(agent, s, s.name.split(' (')[0])) return s; }
  return null;
}
function accessibleStations(agent, type) { return stationsOf(type).filter(s => canUse(agent, s)); }
function zoneDist(z1, z2) { const a = ZONES[z1], b = ZONES[z2]; return Math.abs(a.r - b.r) + Math.abs(a.c - b.c); }
function nearestStation(agent, type) {
  const mine = accessibleStations(agent, type);
  const list = mine.length ? mine : stationsOf(type).filter(s => !(s.denied && s.denied[agent.id] && nowH() - s.denied[agent.id] < 24));
  if (!list.length) return null;
  return list.slice().sort((p, q) => zoneDist(agent.zone, p.zone) - zoneDist(agent.zone, q.zone))[0];
}
function syncToolStock() {
  // sharedInventory keeps the count of each tool so the rest of the game still sees totals
  const cnt = {};
  toolItems.forEach(t => { cnt[t.name] = (cnt[t.name] || 0) + 1; });
  Object.keys(sharedInventory).forEach(n => { if (productDef(keyByName(n))?.kind === 'tool') sharedInventory[n] = cnt[n] || 0; });
  Object.entries(cnt).forEach(([n, c]) => { sharedInventory[n] = c; });
}
function newTool(name, owner) {
  const def = productDef(keyByName(name));
  const t = { uid: ++toolSeq, name, type: def.tool, owner: owner ? owner.id : null, ownerName: owner ? owner.name : 'ส่วนรวม', wear: 0, public: owner ? owner.kind >= 0.8 : true };
  toolItems.push(t); syncToolStock();
  return t;
}
function toolsOfType(type) { return toolItems.filter(t => t.type === type); }
function toolNames(type) { return [...new Set(toolsOfType(type).map(t => t.name))]; }
// With a user: only tools they may use (own > public/friend > borrowed). Without: any on the island.
function hasTool(type, user) { return user ? toolsOfType(type).some(t => canUse(user, t)) : toolsOfType(type).length > 0; }
function getTool(type, user, ask = true) {
  const list = toolsOfType(type).sort((p, q) => (productDef(keyByName(q.name)).dur - q.wear) - (productDef(keyByName(p.name)).dur - p.wear));
  if (!user) return list[0] || null;
  const own = list.find(t => t.owner === user.id) || list.find(t => canUse(user, t));
  if (own) return own;
  if (!ask) return null;
  const other = list.find(t => !(t.denied && t.denied[user.id] && nowH() - t.denied[user.id] < 24)) || list[0];
  return other && askToUse(user, other, other.name) ? other : null;
}
function useTool(type, user, tool) {
  const t = tool || getTool(type, user, false) || getTool(type, null);
  if (!t) return;
  if (user && Math.random() < Math.min(0.5, st(user, 'dex') * 0.012)) return;
  t.wear++;
  const def = productDef(keyByName(t.name));
  if (t.wear >= (def.dur || 10)) {
    toolItems = toolItems.filter(x => x !== t); syncToolStock();
    addLog(`🔨 [เครื่องมือพัง] "${t.name}" ของ ${t.ownerName} สึกจนใช้ต่อไม่ได้`, '#fb923c');
  }
}
function removeToolForMaterial(name, user) {
  const t = toolItems.find(x => x.name === name && user && x.owner === user.id) || toolItems.find(x => x.name === name && canUse(user, x)) || toolItems.find(x => x.name === name);
  if (t) { toolItems = toolItems.filter(x => x !== t); syncToolStock(); }
}
function methodUsable(agent, m) {
  const M = METHODS[m];
  if (M.station && !stationNear(agent, M.station)) return false;
  if (M.tool && !getTool(M.tool, agent)) return false;
  return true;
}
// ===== Storage: personal bag (a.bag) + village storehouse (members only). No island-wide storage. =====
// sharedInventory now only mirrors tool counts for display; materials live in bags and village stores.
const BAG_NAME = 'ย่ามหนังสัตว์';
let villages = [];   // [{id, name, chiefId, chiefName, tax, members:[ids], zone, store:{}, food, founded, minutes:[], lastMeeting, jobs:{}}]
let villageSeq = 0;
function villageOf(a) { return a && a.villageId ? villages.find(v => v.id === a.villageId) || null : null; }
function isMember(a) { return !!villageOf(a); }
function bagCount(a) { return Object.values(a.bag || {}).reduce((x, y) => x + Math.max(0, y), 0); }
function bagCap(a) { return 8 + st(a, 'str') * 2 + ((a.bag || {})[BAG_NAME] > 0 ? 10 : 0); }
function isToolName(n) { return productDef(keyByName(n))?.kind === 'tool'; }
// Village storehouse is NOT free: members must be at the storehouse and trade items of equal value
function itemValue(n, v) {
  const k = keyByName(n);
  let val = k ? 2 + (productDef(k).depth || 1) * 1.5 : 1;
  if (v && (v.store[n] || 0) <= 1) val *= 1.5;
  return Math.round(val * 10) / 10;
}
function atStore(agent) { const v = villageOf(agent); return !!(v && agent.zone === v.zone); }
function bagValue(agent, except) {
  return Object.entries(agent.bag || {}).filter(([n]) => n !== except && n !== BAG_NAME).reduce((t, [n, q]) => t + itemValue(n) * q, 0);
}
function canTradeFor(agent, n) { const v = villageOf(agent); return atStore(agent) && (v.store[n] || 0) > 0 && bagValue(agent, n) >= itemValue(n, v); }
// Pay `cost` with bag items (most plentiful first) into the storehouse
function payFor(agent, v, cost, except, what) {
  if (bagValue(agent, except) < cost) return false;
  let paid = 0; const gave = [];
  const goods = Object.entries(agent.bag).filter(([n]) => n !== except && n !== BAG_NAME).sort((x, y) => y[1] - x[1]);
  for (const [n] of goods) {
    while (paid < cost && agent.bag[n] > 0) {
      agent.bag[n]--; v.store[n] = (v.store[n] || 0) + 1; paid += itemValue(n); gave.push(n);
    }
    if (!agent.bag[n]) delete agent.bag[n];
    if (paid >= cost) break;
  }
  const summary = Object.entries(gave.reduce((m, n) => { m[n] = (m[n] || 0) + 1; return m; }, {})).map(([n, q]) => `${n}×${q}`).join(', ');
  v.ledger = v.ledger || [];
  v.ledger.unshift(`วันที่ ${simDay}: ${agent.name} แลก ${summary} → ${what}`);
  if (v.ledger.length > 20) v.ledger.length = 20;
  return true;
}
function avail(agent, n) {
  if (isToolName(n)) return agent ? toolItems.filter(t => t.name === n && t.owner === agent.id).length : 0;
  const v = villageOf(agent);
  return ((agent && agent.bag && agent.bag[n]) || 0) + (v && canTradeFor(agent, n) ? 1 : 0);
}
function storeKeys(agent) { const v = villageOf(agent); return v && atStore(agent) ? Object.keys(v.store).filter(k => v.store[k] > 0 && canTradeFor(agent, k)) : []; }
// Take one unit: own bag first, otherwise trade for it at the storehouse
function take(agent, n) {
  if (agent && agent.bag && agent.bag[n] > 0) { agent.bag[n]--; if (!agent.bag[n]) delete agent.bag[n]; return 'bag'; }
  const v = villageOf(agent);
  if (v && canTradeFor(agent, n) && payFor(agent, v, itemValue(n, v), n, n)) { v.store[n]--; return 'trade'; }
  return null;
}
function toStore(v, n, q) { if (v && q > 0) v.store[n] = (v.store[n] || 0) + q; }
// Put items in an agent's bag; overflow goes to their village storehouse (or is left behind)
function put(agent, n, q) {
  if (!agent) return;
  agent.bag = agent.bag || {};
  const room = Math.max(0, bagCap(agent) - bagCount(agent));
  const k = Math.min(room, q);
  if (k > 0) agent.bag[n] = (agent.bag[n] || 0) + k;
  if (q - k > 0) toStore(villageOf(agent), n, q - k);
}
// Members pay the share their village agreed on; independents keep everything
function shareRatio(a) { const v = villageOf(a); return v ? v.tax : 0; }
function gainItems(a, n, q) {
  const v = villageOf(a);
  const tax = v ? Math.round(q * v.tax) : 0;
  toStore(v, n, tax);
  if (q - tax > 0) put(a, n, q - tax);
}
function addFood(a, amt) {
  const v = villageOf(a);
  const tax = v ? Math.round(amt * v.tax) : 0;
  if (v) v.food += tax;
  a.food = (a.food || 0) + (amt - tax);
}
// Kind members donate extra from a crowded bag; selfish ones hoard
function depositTick(a) {
  const v = villageOf(a);
  if (!v || !a.bag || a.age < 12) return;
  if (bagCount(a) < bagCap(a) * 0.7 || Math.random() > a.kind) return;
  const [n, q] = Object.entries(a.bag).filter(([k]) => k !== BAG_NAME).sort((x, y) => y[1] - x[1])[0] || [];
  if (!n) return;
  const give = Math.ceil(q / 2);
  a.bag[n] -= give; if (!a.bag[n]) delete a.bag[n];
  toStore(v, n, give);
  if (Math.random() < 0.3) addLog(`📦 ${a.name} บริจาค ${n} ${give} ชิ้นเข้าโกดัง${v.name}`, '#93c5fd');
}
function hasMaterials(a, b, agent) {
  if (a === b) return avail(agent, a) >= 2;
  return avail(agent, a) >= 1 && avail(agent, b) >= 1;
}
function consume(a, b, user) {
  [a, b].forEach(n => {
    if (n === '__none__') return;
    if (productDef(keyByName(n))?.kind === 'tool') removeToolForMaterial(n, user);
    else take(user, n);
  });
}
function outName(key) { const d = productDef(key); return d ? d.name : key; }
function knowersOf(key) { return aiAgents.filter(a => Object.values(a.know).some(e => e.out === key)); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function clampC(v) { return Math.max(6, Math.min(72, v)); }

function buildStation(type, agent, ownerOverride) {
  const owner = ownerOverride || agent;
  const cap = { campfire: 5, wall: 1, reactor: 1, lab: 2 }[type] || 3;
  const exists = stationsOf(type).length >= cap || stationsOf(type).some(s => s.owner === owner.id) || (type === 'campfire' && stationInZone(agent.zone, 'campfire'));
  if (exists) return false;
  buildZoneTerrain(agent.zone);
  let x = clampC(agent.x + 3), y = clampC(agent.y - 3);
  if (WATER.includes(zoneTerrainGrid[agent.zone][y][x])) { x = agent.x; y = agent.y; }
  const key = Object.keys(PRODUCTS).find(k => PRODUCTS[k].station === type);
  const isPublic = type === 'wall' || type === 'reactor' || owner.kind >= 0.75;
  shelters.push({ name: `${PRODUCTS[key].name} (${agent.zone})`, sprite: STATION_SPRITE[type], zone: agent.zone, x, y, station: type, builder: agent.name,
    owner: owner.id, ownerName: owner.name, public: isPublic, permits: [] });
  addOwnLog(`🏠 [เป็นเจ้าของ] "${PRODUCTS[key].name}" ที่ ${agent.zone} เป็นของ ${owner.name}${isPublic ? ' (เปิดให้ทุกคนใช้)' : ' (ใช้ต้องขออนุญาต)'}`);
  return true;
}

function produce(key, agent) {
  const def = productDef(key);
  if (def.kind === 'station') {
    return buildStation(def.station, agent, agent.buildFor ? byId(agent.buildFor) : null) ? `🏗️ สร้าง "${def.name}" ที่โซน ${agent.zone}` : `มี "${def.name}" ของตัวเองอยู่แล้ว/เกาะเต็มแล้ว (วัสดุถูกใช้ไปเปล่าๆ)`;
  }
  if (def.kind === 'food') { addFood(agent, def.food); return `🍲 ได้ "${def.name}" อาหาร +${def.food}`; }
  if (def.kind === 'tool') { newTool(def.name, agent); return `🔧 ได้ "${def.name}" เป็นของตัวเอง`; }
  put(agent, def.name, 1);
  if (def.props && def.props.synthetic && !discoveredElements.some(e => e.sym === def.props.elem)) {
    discoveredElements.push({ sym: def.props.elem, name: def.name, source: def.origin, isSynthetic: true });
    alchemyLogs.unshift({ formula: def.origin, newElem: def.name, actor: agent.name, day: simDay });
    addLog(`⚛️ [ธาตุใหม่!] ${agent.name} สังเคราะห์ "${def.name}" จาก ${def.origin}`, '#22d3ee');
  }
  return `ได้ "${def.name}" เข้าคลัง`;
}

function markDiscovery(key, agent) {
  if (discoveredProducts[key]) return;
  discoveredProducts[key] = { by: agent.name, day: simDay };
  if (key.startsWith('dyn:novel')) { addLog(`✨ ${agent.name} ได้ "${outName(key)}" โดยบังเอิญ (${productDef(key).origin})`, '#e9d5ff'); return; }
  addLog(`🌟 [ค้นพบครั้งแรกของเกาะ] ${agent.name} ทำ "${outName(key)}" ได้สำเร็จ!`, '#facc15');
  TECH_TREE_ERAS.forEach(era => era.nodes.forEach(n => {
    if (n.keys.includes(key) && !techDiscovered[n.id]) {
      techDiscovered[n.id] = { by: agent.name, day: simDay };
      addLog(`🌳 [ก้าวหน้าทางอารยธรรม] "${n.name}" (${era.title})`, '#facc15');
    }
  }));
}

function pushTrial(t) { rndTrials.unshift(Object.assign({ day: simDay }, t)); if (rndTrials.length > 50) rndTrials.length = 50; }

// ==========================================
// 5. EXPERIMENT, CRAFT, TEACH
// ==========================================
function experiment(agent, forcedMethod) {
  let methods = (forcedMethod ? [forcedMethod] : Object.keys(METHODS)).filter(m => methodUsable(agent, m));
  if (!methods.length) methods = Object.keys(METHODS).filter(m => methodUsable(agent, m));
  let items = [...new Set(storeKeys(agent).concat(Object.keys(agent.bag || {}), toolItems.filter(t => t.owner === agent.id).map(t => t.name)))].filter(n => avail(agent, n) > 0);
  if (methods.length === 1 && methods[0] === 'synth') {
    const el = items.filter(n => propsOf(n).elem || propsOf(n).steel);
    if (el.length >= 2) items = el;
  }
  if (!methods.length || !items.length) { agent.bubble = '🤔 ไม่มีอะไรให้ลอง'; return; }
  // Curiosity: AI prefers trying new, man-made things over raw stuff
  const weighted = [];
  items.forEach(n => { const k = keyByName(n); const w = k ? (k.startsWith('dyn:novel') ? 2 : 4) : 1; for (let i = 0; i < w; i++) weighted.push(n); });
  const hunch = agent.hunch && agent.hunch.ttl > 0 ? agent.hunch : null;
  // Systematic thinking (INT): favour kinds of material not yet tested with this method
  const smart = Math.random() < Math.min(0.7, 0.1 + st(agent, 'int') * 0.03);
  const testedProps = {};
  if (smart) Object.values(agent.know).forEach(e => {
    const set = testedProps[e.m] = testedProps[e.m] || new Set();
    [e.a, e.b].forEach(n => Object.keys(propsOf(n)).forEach(k => set.add(k)));
  });
  const smartPick = m => {
    const set = testedProps[m] || new Set();
    const pool = [];
    items.forEach(n => { const fresh = Object.keys(propsOf(n)).filter(k => !set.has(k)).length; const w = 1 + fresh * 4; for (let i = 0; i < w; i++) pool.push(n); });
    return pick(pool);
  };
  if (hunch) hunch.ttl--;

  // Faint memories of a past life point toward combinations that worked before
  // Recipes remembered from another realm, rewritten with local look-alike materials
  const equivList = (agent.equivTry || []).filter(e => !agent.know[sigOf(e.a, e.b, e.m)] && methods.includes(e.m) && hasMaterials(e.a, e.b, agent));
  const dejaList = agent.pastKnow ? Object.values(agent.pastKnow).filter(e => !agent.know[sigOf(e.a, e.b, e.m)] && methods.includes(e.m) && hasMaterials(e.a, e.b, agent)) : [];
  for (let tries = 0; tries < 60; tries++) {
    let m = pick(methods);
    let a = smart ? smartPick(m) : pick(weighted), b = smart ? smartPick(m) : pick(weighted);
    let triedEquiv = null;
    if (dejaList.length && tries === 0 && Math.random() < 0.5) { const e = pick(dejaList); a = e.a; b = e.b; m = e.m; agent.bubble = '🌀 รู้สึกคุ้นๆ เหมือนเคยทำ'; }
    else if (equivList.length && tries === 0 && Math.random() < 0.7) {
      triedEquiv = pick(equivList); a = triedEquiv.a; b = triedEquiv.b; m = triedEquiv.m;
      agent.equivTry = agent.equivTry.filter(x => x !== triedEquiv);
      agent.bubble = `🔁 ลองสูตรเทียบเคียง "${triedEquiv.orig}"`;
    }
    // Hunch from a near-miss: keep the same idea but change one thing
    if (hunch && tries < 30 && Math.random() < 0.3 + st(agent, 'int') * 0.03) {
      if (Math.random() < 0.5 && methods.includes(hunch.m)) { m = hunch.m; a = pick(hunch.items); }
      else { a = hunch.items[0]; b = hunch.items[1]; }
    }
    if (!hasMaterials(a, b, agent)) continue;
    const sig = sigOf(a, b, m);
    if (agent.know[sig]) continue;

    const M = METHODS[m];
    if (M.tool) useTool(M.tool, agent);
    const where = [M.station ? STATION_LABEL[M.station] : null, M.tool ? TOOL_LABEL[M.tool] : null].filter(Boolean).join(' + ') || 'มือเปล่า';

    gainExp(agent, 'int', 1); gainExp(agent, 'dex', 0.3);
    const clumsy = Math.max(0.03, 0.3 - st(agent, 'dex') * 0.02) + (agent.age < 15 ? 0.15 : 0);
    if (Math.random() < clumsy) {
      consume(a, b, agent);
      agent.bubble = '😅 มือยังไม่นิ่ง ทำพลาด';
      pushTrial({ title: `${a} + ${b}`, detail: `${M.name} · ${where}`, success: false, note: `😅 ทำพลาดเอง (✋ DEX ${st(agent, 'dex')}) ยังสรุปไม่ได้ว่าวิธีนี้ใช้ได้ไหม`, actor: agent.name });
      return;
    }

    const res = react(a, b, m);
    if (triedEquiv) addLog(res.ok ? `🔁✅ ${agent.name} ลองสูตรเทียบเคียงของ "${triedEquiv.orig}" (${a} + ${b}) ใช้ได้ผล!` : `🔁❌ ${agent.name} ลองสูตรเทียบเคียงของ "${triedEquiv.orig}" แต่ดินแดนนี้ใช้ไม่ได้ (${res.reason})`, res.ok ? '#86efac' : '#fca5a5');
    if (res.ok) {
      consume(a, b, agent);
      const note = produce(res.key, agent);
      agent.know[sig] = { a, b, m, out: res.key, from: 'self', day: simDay, practice: 1 };
      gainExp(agent, 'int', 3);
      markDiscovery(res.key, agent);
      trimMemory(agent);
      observe(agent, sig);
      agent.bubble = `💡 ค้นพบ ${outName(res.key)}!`;
      agent.hunch = null;
      pushTrial({ title: `${a} + ${b}`, detail: `${M.name} · ${where}`, success: true, note: `✅ ${res.novel ? 'ผลที่ไม่คาดคิด! ' : ''}${note}`, actor: agent.name });
    } else {
      // A failed test only wastes a small sample, not always the whole unit
      if (Math.random() < 0.4) consume(a, a === b ? '__none__' : '__none__', agent);
      if (Math.random() < 0.4) consume(b, '__none__', agent);
      agent.know[sig] = { a, b, m, out: null, reason: res.reason, near: !!res.near, from: 'self', day: simDay, practice: 0 };
      if (res.near) agent.hunch = { items: [a, b], m, ttl: 12 };
      trimFails(agent);
      observe(agent, sig);
      agent.bubble = `❌ ${res.reason}`;
      pushTrial({ title: `${a} + ${b}`, detail: `${M.name} · ${where}`, success: false, note: `❌ ${res.reason} (จำไว้แล้ว)${res.near ? ' · 🤔 รู้สึกว่าใกล้แล้ว จะลองปรับอีกนิด' : ''}`, actor: agent.name });
    }
    return;
  }
  agent.bubble = '🤔 คิดไม่ออกว่าจะลองอะไรต่อ';
}

// Memory is limited by INT: low-INT agents forget old failures and their least-practiced recipes
function trimFails(agent) { trimMemory(agent); }
// Others nearby watch the experiment and may remember the result too
function observe(agent, sig) {
  const e = agent.know[sig];
  if (!e) return;
  aiAgents.forEach(o => {
    if (o === agent || o.age < 8 || o.zone !== agent.zone || o.know[sig]) return;
    if (Math.hypot(o.x - agent.x, o.y - agent.y) > 12) return;
    if (Math.random() < 0.15 + st(o, 'int') * 0.025 + (o.pastKnow && o.pastKnow[sig] ? 0.4 : 0)) {
      o.know[sig] = Object.assign({}, e, { from: agent.name + ' (เห็นเอง)', day: simDay, practice: 0 });
      gainExp(o, 'int', 0.3);
      if (e.out) addTeachLog(`👀 ${o.name} เห็น ${agent.name} ทำ "${outName(e.out)}" แล้วจำวิธีได้`);
      trimMemory(o);
    }
  });
}
function trimMemory(agent) {
  const fails = Object.entries(agent.know).filter(([, e]) => !e.out);
  const fc = failCap(agent);
  if (fails.length > fc) fails.sort((p, q) => p[1].day - q[1].day).slice(0, fails.length - fc).forEach(([s]) => delete agent.know[s]);
  const oks = Object.entries(agent.know).filter(([, e]) => e.out);
  const rc = recipeCap(agent);
  if (oks.length > rc) {
    oks.sort((p, q) => ((q[1].out.startsWith('dyn:novel') ? 1 : 0) - (p[1].out.startsWith('dyn:novel') ? 1 : 0)) || (p[1].practice - q[1].practice) || (p[1].day - q[1].day)).slice(0, oks.length - rc).forEach(([s, e]) => {
      delete agent.know[s];
      addTeachLog(`🫥 ${agent.name} ลืมวิธีทำ "${outName(e.out)}" (ความจำเต็ม 🧠 INT ${st(agent, 'int')} จำได้ ${rc} สูตร)`);
    });
  }
}

function craftKnown(agent, entry) {
  if (!methodUsable(agent, entry.m) || !hasMaterials(entry.a, entry.b, agent)) return false;
  const M = METHODS[entry.m];
  consume(entry.a, entry.b, agent);
  if (M.tool) useTool(M.tool, agent);
  const skill = 0.45 + 0.08 * entry.practice + st(agent, 'dex') * 0.015 + (agent.age >= 55 ? 0.05 : 0) - (agent.age < 15 ? 0.15 : 0);
  entry.practice++;
  gainExp(agent, 'dex', 1.2);
  if (Math.random() < Math.min(0.95, skill)) {
    const note = produce(entry.out, agent);
    agent.bubble = `🛠️ ทำ ${outName(entry.out)}`;
    pushTrial({ title: `ผลิต: ${outName(entry.out)}`, detail: `${entry.a} + ${entry.b} · ${M.name}`, success: true, note: `🛠️ ${note} (ฝึกแล้ว ${entry.practice} ครั้ง)`, actor: agent.name, craft: true });
  } else {
    agent.bubble = '😓 ทำพลาด เสียวัตถุดิบ';
    pushTrial({ title: `ผลิต: ${outName(entry.out)}`, detail: `${entry.a} + ${entry.b} · ${M.name}`, success: false, note: `😓 ฝีมือยังไม่ถึง ทำพลาด (✋ DEX ${st(agent, 'dex')} · รู้วิธีแต่ยังไม่ชำนาญ)`, actor: agent.name, craft: true });
  }
  return true;
}

function computeNeeds(forAgent) {
  const needs = [];
  if (!forAgent || (forAgent.food || 0) < 10) needs.push('cooked_food');
  if (aiAgents.some(a => a.hp < maxHp(a) * 0.5) && avail(forAgent, 'ยาต้มสมุนไพร') < 2) needs.push('herbal_medicine');
  Object.entries(PRODUCTS).forEach(([k, d]) => { if (d.kind === 'station' && (stationsOf(d.station).length === 0 || (forAgent && !accessibleStations(forAgent, d.station).length))) needs.push(k); });
  ['blade', 'vessel', 'axe', 'bow', 'crucible'].forEach(t => {
    if (!hasTool(t, forAgent)) Object.entries(PRODUCTS).forEach(([k, d]) => { if (d.tool === t) needs.push(k); });
  });
  if (stationsOf('smelter').length && avail(forAgent, 'ถ่านไม้') < 2) needs.push('charcoal');
  // Keep a small stock of every useful thing the island already knows how to make
  Object.keys(discoveredProducts).forEach(k => {
    const d = productDef(k);
    if (d && d.kind === 'item' && !k.startsWith('dyn:novel') && avail(forAgent, d.name) < 2 && !needs.includes(k)) needs.push(k);
  });
  return needs;
}

// Plan from the agent's OWN knowledge only (recursive for missing inputs / stations / tools)
function planFor(agent, key, depth = 0, seen = new Set()) {
  if (depth > 4 || seen.has(key)) return null;
  seen.add(key);
  const entries = Object.values(agent.know).filter(e => e.out === key);
  for (const e of entries) {
    const M = METHODS[e.m];
    if (M.station && !stationsOf(M.station).length) {
      const sk = Object.keys(PRODUCTS).find(k => PRODUCTS[k].station === M.station);
      const p = planFor(agent, sk, depth + 1, seen); if (p) return p; continue;
    }
    if (M.tool && !hasTool(M.tool, agent)) {
      let found = null;
      for (const tk of Object.keys(PRODUCTS).filter(k => PRODUCTS[k].tool === M.tool)) { found = planFor(agent, tk, depth + 1, seen); if (found) break; }
      if (found) return found; continue;
    }
    if (hasMaterials(e.a, e.b, agent)) return e;
    const need = e.a === e.b ? [[e.a, 2]] : [[e.a, 1], [e.b, 1]];
    const missing = need.find(([n, q]) => avail(agent, n) < q);
    const mk = missing && keyByName(missing[0]);
    if (mk) { const p = planFor(agent, mk, depth + 1, seen); if (p) return p; }
    else if (missing) agent.wantItem = missing[0];
  }
  return null;
}

function addTeachLog(text) {
  const h = String(Math.floor(simMinutes / 60) % 24).padStart(2, '0');
  teachLogs.unshift({ t: `วันที่ ${simDay} ${h}:00`, text });
  if (teachLogs.length > 25) teachLogs.length = 25;
}

function transferKnowledge(from, to, mode) {
  const cands = Object.entries(from.know).filter(([s]) => !to.know[s]);
  if (!cands.length) return false;
  const succ = cands.filter(([, e]) => e.out);
  const pool = (succ.length && Math.random() < 0.8) ? succ : cands;
  const [sig, e] = pick(pool);
  if (rel(from, to) < -30) {
    if (Math.random() < 0.3) addTeachLog(`💢 ${from.name} ไม่ยอมสอน ${to.name} เพราะไม่ถูกกัน (${rel(from, to)})`);
    return false;
  }
  gainExp(from, 'cha', 1);
  // Did the learner understand? Depends on learner INT and teacher CHA
  const deja = to.pastKnow && to.pastKnow[sig] ? 0.45 : 0;   // déjà vu: knew this in a past life
  const understand = Math.min(0.97, 0.25 + st(to, 'int') * 0.04 + st(from, 'cha') * 0.03 + deja);
  if (Math.random() > understand) {
    gainExp(to, 'int', 0.3);
    if (mode === 'teach') { addTeachLog(`😵‍💫 ${from.name} พยายามสอน ${to.name} เรื่อง "${e.out ? outName(e.out) : 'ข้อห้าม'}" แต่ยังไม่เข้าใจ (🧠 ${st(to, 'int')} / 🗣️ ${st(from, 'cha')})`); to.bubble = '😵‍💫 ยังงงอยู่'; }
    return false;
  }
  gainExp(to, 'int', 0.8);
  addRel(to, from, mode === 'teach' ? 3 : 2); addRel(from, to, 1);
  to.know[sig] = Object.assign({}, e, { from: from.name, day: simDay, practice: 0 });
  trimMemory(to);
  if (!e.out && e.near && !to.hunch) to.hunch = { items: [e.a, e.b], m: e.m, ttl: 8 };
  const what = e.out ? `วิธีทำ "${outName(e.out)}"` : `ข้อห้าม "${e.a}+${e.b} ด้วย${METHODS[e.m].name} ใช้ไม่ได้"`;
  if (mode === 'teach') { addTeachLog(`👨‍🏫 ${from.name} สอน ${to.name}: ${what}`); to.bubble = `📖 เรียนจาก${from.name}`; }
  else addTeachLog(`🤝 ${from.name} เล่าให้ ${to.name} ฟัง: ${what}`);
  return true;
}

function knowledgeExchange() {
  const night = isNightTime();
  const byZone = {};
  aiAgents.forEach(a => { (byZone[a.zone] = byZone[a.zone] || []).push(a); });
  Object.entries(byZone).forEach(([zone, list]) => {
    const fire = !!stationInZone(zone, 'campfire');
    const adults = list.filter(a => a.age >= 15);
    const kids = list.filter(a => a.age >= 4 && a.age < 15);
    if (adults.length) {
      kids.forEach(k => {
        const pool = [];
        adults.forEach(t => { const w = 1 + Math.floor(st(t, 'cha') / 4) + (t.age >= 55 ? 1 : 0); for (let i = 0; i < w; i++) pool.push(t); });
        const teacher = pick(pool);
        if (Math.random() > 0.2 + st(teacher, 'cha') * 0.03 + (fire && night ? 0.3 : 0)) return;
        const times = 1 + Math.floor(st(teacher, 'cha') / 8) + (teacher.age >= 55 ? 1 : 0);
        for (let i = 0; i < times; i++) transferKnowledge(teacher, k, 'teach');
      });
    }
    const avgCha = adults.reduce((s, a) => s + st(a, 'cha'), 0) / Math.max(1, adults.length);
    if (adults.length >= 2 && Math.random() < 0.08 + avgCha * 0.012 + (fire && night ? 0.35 : 0)) {
      const p = pick(adults);
      const q = pick(adults.filter(o => o !== p));
      transferKnowledge(p, q, 'share');
      transferKnowledge(q, p, 'share');
    }
  });
}

// ==========================================
// QUESTS, NEGOTIATION & RELATIONSHIPS
// ==========================================
let quests = [];
let questSeq = 0;
const QUEST_TYPES = {
  gather: { icon: '🧺', name: 'หาของ', stat: 'str' },
  teach:  { icon: '📖', name: 'ขอให้สอน', stat: 'cha' },
  build:  { icon: '🏗️', name: 'ช่วยสร้าง', stat: 'dex' },
  food:   { icon: '🍖', name: 'ขออาหาร', stat: 'vit' },
  care:   { icon: '🩹', name: 'ขอการดูแล', stat: 'cha' }
};
// Reward "currency" an AI can promise. Value = how much it is worth to the helper.
const REWARDS = {
  thanks: { name: 'คำขอบคุณ', icon: '🙏', value: 1 },
  meal:   { name: 'แบ่งอาหารให้', icon: '🍲', value: 2 },
  teach:  { name: 'สอนความรู้ให้ 1 อย่าง', icon: '📖', value: 3 },
  gift:   { name: 'ของขวัญส่วนตัว', icon: '🎁', value: 4 }
};
const KEEPSAKES = ['สร้อยเปลือกหอย', 'ขลุ่ยไม้ไผ่', 'หินสีสวย', 'ขนนกหายาก', 'ตุ๊กตาฟาง', 'กำไลเถาวัลย์', 'หวีกระดูก', 'เครื่องรางไม้แกะ'];

function rel(a, b) { return (a && b && a.rel && a.rel[b.id]) || 0; }
function addRel(a, b, d) { if (!a || !b || a === b) return; a.rel = a.rel || {}; a.rel[b.id] = Math.max(-100, Math.min(100, Math.round((a.rel[b.id] || 0) + d))); }
function relLabel(v) { return v >= 60 ? 'เพื่อนรัก' : v >= 30 ? 'เพื่อนสนิท' : v >= 10 ? 'ถูกคอ' : v > -10 ? 'เฉยๆ' : v > -30 ? 'ไม่ค่อยชอบ' : v > -60 ? 'ไม่ถูกกัน' : 'ศัตรู'; }
function byId(id) { return aiAgents.find(a => a.id === id); }
function nowH() { return (simDay - 1) * 24 + Math.floor(simMinutes / 60); }
function rewardValue(list) { return list.reduce((s, k) => s + REWARDS[k].value, 0); }
function rewardText(list) { return list.map(k => `${REWARDS[k].icon} ${REWARDS[k].name}`).join(' + '); }
// Build the best reward package worth about `v`
function rewardPackage(v) {
  const out = ['thanks'];
  let left = v - 1;
  ['gift', 'teach', 'meal'].forEach(k => { if (left >= REWARDS[k].value - 0.3) { out.push(k); left -= REWARDS[k].value; } });
  return out;
}

function createQuest(giver, type, data) {
  if (quests.some(q => q.giverId === giver.id && (q.status === 'open' || q.status === 'accepted'))) return;
  if (quests.filter(q => q.status === 'open' || q.status === 'accepted').length >= 8) return;
  const T = QUEST_TYPES[type];
  const difficulty = +(data.difficulty).toFixed(1);
  const urgency = (type === 'food' || type === 'care') ? 1.6 : 1;
  const offer = rewardPackage(Math.max(1, Math.round(difficulty * giver.generous * 0.8)));
  const q = Object.assign({
    id: ++questSeq, type, giverId: giver.id, giverName: giver.name, status: 'open',
    difficulty, urgency, offer, agreed: null, helperId: null, helperName: null, progress: 0,
    createdH: nowH(), deadlineH: nowH() + (type === 'build' ? 72 : type === 'gather' ? 48 : 24), talk: [], refused: []
  }, data, { difficulty });
  quests.unshift(q);
  if (quests.length > 40) quests = quests.filter(x => x.status === 'open' || x.status === 'accepted').concat(quests.filter(x => x.status !== 'open' && x.status !== 'accepted').slice(0, 25));
  giver.bubble = `🙏 ${q.title}`;
  addLog(`📜 [เควสใหม่] ${giver.name}: "${q.title}" · เสนอให้ ${rewardText(offer)}`, '#fcd34d');
}

function generateQuests() {
  const rawAll = [...new Set(Object.values(ZONES).flatMap(z => z.res))];
  aiAgents.forEach(a => {
    if (a.age < 4) return;
    const vv = villageOf(a);
    if (a.hunger >= 75 && (a.food || 0) <= 1 && (!vv || vv.food <= 2 || bagValue(a) < 2)) return createQuest(a, 'food', { title: 'หิวมาก ขออาหารหน่อย', difficulty: 2 });
    if (a.hp < maxHp(a) * 0.4) return createQuest(a, 'care', { title: 'บาดเจ็บ ช่วยดูแลที', difficulty: 3 });
    if (a.age >= 6 && Math.random() < 0.015) {
      const wants = Object.keys(discoveredProducts).filter(k => !k.startsWith('dyn:novel') && productDef(k)
        && !Object.values(a.know).some(e => e.out === k) && aiAgents.some(o => o !== a && Object.values(o.know).some(e => e.out === k)));
      if (wants.length) { const k = pick(wants); return createQuest(a, 'teach', { title: `อยากรู้วิธีทำ "${outName(k)}"`, productKey: k, difficulty: 3 }); }
    }
    if (false) {
      const item = '';
      const z = Object.keys(ZONES).filter(id => ZONES[id].res.includes(item)).sort((p, q) => zoneDist(a.zone, p) - zoneDist(a.zone, q))[0];
      const qty = 3 + Math.floor(Math.random() * 4);
      return createQuest(a, 'gather', { title: `ช่วยหา ${item} ${qty} ชิ้น (แถว ${z})`, item, qty, zone: z, difficulty: 1 + qty * 0.4 + zoneDist(a.zone, z) * 0.6 });
    }
    if (a.age >= 15 && Math.random() < 0.008) {
      const miss = Object.keys(PRODUCTS).filter(k => PRODUCTS[k].kind === 'station' && !stationsOf(PRODUCTS[k].station).length
        && !Object.values(a.know).some(e => e.out === k) && aiAgents.some(o => o !== a && Object.values(o.know).some(e => e.out === k)));
      if (miss.length) { const k = pick(miss); return createQuest(a, 'build', { title: `ช่วยสร้าง "${PRODUCTS[k].name}"`, productKey: k, difficulty: 6 }); }
    }
  });
}

function canHelp(h, q) {
  if (h.id === q.giverId || h.age < 12 || h.questId || q.refused.includes(h.id)) return false;
  if (q.type === 'teach' || q.type === 'build') return Object.values(h.know).some(e => e.out === q.productKey);
  return true;
}

// Negotiation before accepting. Returns true if a deal was made.
function negotiate(h, giver, q) {
  const r = rel(h, giver);
  const say = (who, text) => q.talk.push(`${who.name}: ${text}`);
  // What the helper hopes to get: greedy & distant AIs ask more, kind friends ask less
  let expect = q.difficulty * (1.35 - h.kind * 0.7) - r / 25;
  if (r >= 50 && h.kind > 0.5) expect = 0;
  const offerV = rewardValue(q.offer);
  if (expect <= 0.5) {
    q.agreed = ['thanks']; say(h, r >= 30 ? 'เพื่อนกันไม่ต้องตอบแทนหรอก เดี๋ยวช่วยเอง' : 'ไม่ต้องให้อะไรหรอก ช่วยได้');
    addRel(giver, h, 4); return true;
  }
  if (offerV >= expect) { q.agreed = q.offer.slice(); say(h, `ตกลง รับ ${rewardText(q.offer)}`); return true; }
  // Round 1: helper counters
  const ask1 = rewardPackage(Math.ceil(expect));
  say(h, `งานนี้หนักนะ ขอเป็น ${rewardText(ask1)} ได้ไหม`);
  // Giver's limit: generosity, urgency, and how much they like the helper
  const limit = q.difficulty * giver.generous * q.urgency + r / 30;
  const askV = rewardValue(ask1);
  if (askV <= limit) {
    q.agreed = ask1; say(giver, 'ได้ ตกลงตามนั้น');
    addRel(giver, h, askV > offerV + 2 ? -2 : 0); return true;
  }
  // Round 2: giver meets halfway
  const mid = rewardPackage(Math.round((offerV + Math.min(limit, askV)) / 2));
  say(giver, `ให้ได้มากสุด ${rewardText(mid)}`);
  if (rewardValue(mid) >= expect * 0.8) { q.agreed = mid; say(h, 'ก็ได้ ตกลง'); return true; }
  say(h, 'ไม่คุ้มแรง ขอผ่านดีกว่า');
  q.refused.push(h.id);
  addRel(giver, h, -3); addRel(h, giver, -1);
  addLog(`🤝 [ต่อรองไม่ลงตัว] ${h.name} ไม่รับเควส "${q.title}" ของ ${giver.name}`, '#fca5a5');
  return false;
}

function assignQuests() {
  quests.filter(q => q.status === 'open').forEach(q => {
    const giver = byId(q.giverId);
    if (!giver) { q.status = 'cancelled'; return; }
    const cands = aiAgents.filter(h => canHelp(h, q) && rel(h, giver) > -30 && !h.session);
    for (const h of cands) {
      const chance = 0.05 + h.kind * 0.08 + rel(h, giver) / 400 + (h.zone === giver.zone ? 0.08 : 0) + rewardValue(q.offer) * 0.01;
      if (Math.random() > chance) continue;
      if (negotiate(h, giver, q)) {
        q.status = 'accepted'; q.helperId = h.id; q.helperName = h.name; h.questId = q.id;
        h.bubble = `📜 รับเควสช่วย ${giver.name}`;
        addLog(`🤝 [รับเควส] ${h.name} ตกลงช่วย ${giver.name} "${q.title}" แลกกับ ${rewardText(q.agreed)}`, '#86efac');
      }
      break;
    }
  });
}

function questGoalTo(h, target) { h.goal = { zone: target.zone, x: target.x, y: target.y, ttl: 6, quest: true }; }
function nearTo(a, b) { return a.zone === b.zone && Math.hypot(a.x - b.x, a.y - b.y) <= 8; }
function questNode(a) {
  const q = a.questId && quests.find(x => x.id === a.questId);
  if (!q || q.type !== 'gather') return null;
  return (zoneNodes[a.zone] || []).find(n => n.name === q.item) || null;
}
function creditGather(a, name, gain) {
  const q = a.questId && quests.find(x => x.id === a.questId);
  if (q && q.type === 'gather' && q.item === name) { q.progress = Math.min(q.qty, q.progress + gain); a.bubble = `🧺 เควส ${q.progress}/${q.qty}`; return q; }
  return null;
}

function runQuests() {
  quests.filter(q => q.status === 'accepted').forEach(q => {
    const giver = byId(q.giverId), h = byId(q.helperId);
    if (!giver) { q.status = 'cancelled'; if (h) h.questId = null; return; }
    if (!h) { q.status = 'open'; q.helperId = null; q.helperName = null; return; }
    if (q.type === 'gather') {
      const have = (h.bag || {})[q.item] || 0;
      if (have > 0 && q.progress < q.qty) {
        const give = Math.min(have, q.qty - q.progress);
        h.bag[q.item] -= give; if (!h.bag[q.item]) delete h.bag[q.item];
        put(giver, q.item, give); q.progress += give;
        q.talk.push(`${h.name}: มีอยู่ในกระเป๋า ${give} ชิ้น เอาไปเลย`);
      }
      if (q.progress >= q.qty) return completeQuest(q, giver, h);
      if (h.zone !== q.zone) { buildZoneTerrain(q.zone); const n = zoneNodes[q.zone].find(x => x.name === q.item) || { x: 40, y: 40 }; questGoalTo(h, { zone: q.zone, x: n.x, y: n.y }); }
      else if (h.goal && h.goal.quest) h.goal = null;
    } else if (q.type === 'teach') {
      if (!nearTo(h, giver)) { questGoalTo(h, giver); return; }
      h.goal = null;
      const entry = Object.entries(h.know).find(([, e]) => e.out === q.productKey);
      if (!entry) return failQuest(q, giver, h, 'ลืมวิธีไปแล้ว');
      const understand = Math.min(0.95, 0.25 + st(giver, 'int') * 0.04 + st(h, 'cha') * 0.03);
      gainExp(h, 'cha', 1);
      if (Math.random() < understand) {
        giver.know[entry[0]] = Object.assign({}, entry[1], { from: h.name + ' (เควส)', day: simDay, practice: 0 });
        trimMemory(giver);
        addTeachLog(`📜 ${h.name} สอน ${giver.name} วิธีทำ "${outName(q.productKey)}" ตามเควส`);
        completeQuest(q, giver, h);
      } else h.bubble = '📖 สอนอยู่ ยังไม่เข้าใจ';
    } else if (q.type === 'build') {
      const type = PRODUCTS[q.productKey].station;
      if (stationsOf(type).some(x => x.owner === giver.id) || accessibleStations(giver, type).length) return completeQuest(q, giver, h);
      if (h.goal) return;
      const e = planFor(h, q.productKey);
      if (!e) { h.bubble = '🏗️ ขาดวัตถุดิบ รอเก็บของ'; return; }
      if (methodUsable(h, e.m)) { h.buildFor = giver.id; craftKnown(h, e); h.buildFor = null; }
      else { const stt = METHODS[e.m].station; const sx = stt && nearestStation(h, stt); if (sx) h.goal = { zone: sx.zone, x: sx.x, y: sx.y, sig: sigOf(e.a, e.b, e.m), ttl: 30 }; }
    } else if (q.type === 'food' || q.type === 'care') {
      if (!nearTo(h, giver)) { questGoalTo(h, giver); return; }
      h.goal = null;
      if (q.type === 'food') { const g2 = Math.min(4, h.food || 0); h.food -= g2; giver.food = (giver.food || 0) + g2; giver.hunger = Math.max(0, giver.hunger - 20); h.hunger = Math.min(100, h.hunger + 10); }
      else {
        if (avail(h, 'ยาต้มสมุนไพร') > 0) { take(h, 'ยาต้มสมุนไพร'); giver.hp = Math.min(maxHp(giver), giver.hp + 30); }
        else giver.hp = Math.min(maxHp(giver), giver.hp + 12 + st(h, 'cha'));
      }
      completeQuest(q, giver, h);
    }
  });
  quests.filter(q => (q.status === 'open' || q.status === 'accepted') && nowH() > q.deadlineH).forEach(q => {
    const giver = byId(q.giverId), h = byId(q.helperId);
    if (q.status === 'accepted' && h) failQuest(q, giver, h, 'ทำไม่ทันกำหนด');
    else {
      q.status = 'expired';
      if (giver) { aiAgents.filter(o => o !== giver && o.zone === giver.zone && o.age >= 15).forEach(o => addRel(giver, o, -2)); giver.bubble = '😞 ไม่มีใครช่วยเลย'; }
      addLog(`⌛ [เควสหมดเวลา] ไม่มีใครช่วย ${q.giverName} "${q.title}"`, '#94a3b8');
    }
  });
}

function completeQuest(q, giver, h) {
  q.status = 'done'; q.doneH = nowH(); h.questId = null; h.goal = null;
  const got = [];
  (q.agreed || ['thanks']).forEach(k => {
    if (k === 'thanks') got.push('🙏 ขอบคุณ');
    if (k === 'meal') { const g3 = Math.min(4, giver.food || 0); giver.food -= g3; h.food = (h.food || 0) + g3; if (!g3) h.hunger = Math.max(0, h.hunger - 15); got.push(`🍲 อาหาร ${g3 || 'ปลอบใจ'}`); }
    if (k === 'teach') {
      const t = Object.entries(giver.know).filter(([s, e]) => e.out && !h.know[s]);
      if (t.length) { const [sg, e] = pick(t); h.know[sg] = Object.assign({}, e, { from: giver.name + ' (ค่าตอบแทน)', day: simDay, practice: 0 }); trimMemory(h); got.push(`📖 วิธีทำ "${outName(e.out)}"`); }
      else { gainExp(h, 'int', 6); got.push('📖 ประสบการณ์ (ผู้ให้ไม่มีความรู้ใหม่จะสอน)'); }
    }
    if (k === 'gift') {
      const spare = toolItems.find(t => t.owner === giver.id && !toolItems.some(x => x.owner === h.id && x.type === t.type));
      if (spare) { spare.owner = h.id; spare.ownerName = h.name; spare.lentTo = null; got.push(`🎁 ยก "${spare.name}" ให้เป็นของตัวเอง`); return; }
      const g = pick(KEEPSAKES); h.keepsakes.push(g); if (h.keepsakes.length > 8) h.keepsakes.shift(); got.push(`🎁 ${g}`); }
  });
  gainExp(h, QUEST_TYPES[q.type].stat, 2 + q.difficulty);
  h.rep += 1 + (q.difficulty >= 5 ? 1 : 0);
  // Relationship: gratitude, and whether the helper felt the deal was fair
  const fair = rewardValue(q.agreed || ['thanks']) / q.difficulty;
  addRel(giver, h, 10 + q.difficulty * 2);
  let hd = 6;
  if (q.agreed && q.agreed.length === 1 && q.talk.some(t => t.includes('ไม่ต้อง'))) hd = 8;
  else if (fair < 0.6) hd = -6; else if (fair > 1.2) hd = 10;
  addRel(h, giver, hd);
  h.bubble = hd < 0 ? '😒 เหนื่อยแทบตาย ได้แค่นี้' : '😊 ช่วยสำเร็จ!';
  giver.bubble = `🥰 ขอบคุณ ${h.name}`;
  addLog(`✅ [เควสสำเร็จ] ${h.name} ช่วย ${giver.name} "${q.title}" ได้รับ ${got.join(', ')}${hd < 0 ? ` · ${h.name} รู้สึกไม่คุ้ม` : ''}`, '#4ade80');
}

function failQuest(q, giver, h, why) {
  q.status = 'failed'; q.failWhy = why;
  h.questId = null; if (h.goal && h.goal.quest) h.goal = null;
  addRel(giver, h, -12); addRel(h, giver, -3);
  giver.bubble = `😠 ${h.name} ผิดคำพูด`;
  addLog(`❌ [เควสล้มเหลว] ${h.name} ช่วย ${giver.name} ไม่สำเร็จ (${why}) ${giver.name} ไม่พอใจ`, '#f87171');
}

// ==========================================
// CROWDING & MIGRATION: more than CROWD_LIMIT residents in a zone feels crowded
// ==========================================
function homeCounts() { const c = {}; aiAgents.forEach(a => { c[a.home] = (c[a.home] || 0) + 1; }); return c; }
function zoneAppeal(z, counts) {
  const foodRes = ZONES[z].res.filter(r => /ปลา|กุ้ง|กล้วย|มะละกอ|เบอร์รี่|เห็ด|หอย|ปู|รังนก|รังผึ้ง/.test(r)).length;
  const preyN = faunaSpecies.filter(isPrey).reduce((t, f) => t + (f.zp[z] || 0), 0);
  const predN = faunaSpecies.filter(f => f.predator).reduce((t, f) => t + (f.zp[z] || 0), 0);
  return foodRes * 6 + Math.min(10, preyN) - predN * 4 - (counts[z] || 0) * 1.5 + (stationInZone(z, 'campfire') ? 3 : 0);
}
function crowdTick() {
  const counts = homeCounts();
  aiAgents.forEach(a => {
    if ((counts[a.home] || 0) > CROWD_LIMIT) {
      a.crowd = (a.crowd || 0) + 1;
      if (a.age >= 6 && Math.random() < 0.5) a.bubble = `😣 ${a.home} คนแน่นเกินไป อึดอัด`;
    } else a.crowd = Math.max(0, (a.crowd || 0) - 1);
  });
  const crowdedZones = Object.keys(counts).filter(z => counts[z] > CROWD_LIMIT);
  crowdedZones.forEach(z => addLog(`😣 [แออัด] ${z} มีคนอาศัยอยู่ ${counts[z]} คน (เกิน ${CROWD_LIMIT}) ทุกคนเริ่มอึดอัด`, '#fda4af'));
  // Decide to migrate: crowded long enough, adults only; families move together
  const movers = aiAgents.filter(a => a.age >= 18 && a.crowd >= 2 && !a.questId);
  movers.forEach(a => {
    if ((homeCounts()[a.home] || 0) <= CROWD_LIMIT) return;
    const v = villageOf(a);
    const isChief = v && v.chiefId === a.id;
    const p = 0.08 * a.crowd * (isChief ? 0.3 : 1) * (v && rel(a, byId(v.chiefId)) >= 40 ? 0.6 : 1);
    if (Math.random() > p) return;
    const c = homeCounts();
    const options = Object.keys(ZONES).filter(z => z !== a.home && (c[z] || 0) < CROWD_LIMIT * 0.6);
    if (!options.length) return;
    const dest = options.sort((x, y) => (zoneAppeal(y, c) - zoneDist(a.home, y) * 2) - (zoneAppeal(x, c) - zoneDist(a.home, x) * 2))[0];
    const partner = aiAgents.find(o => o !== a && o.age >= 18 && o.home === a.home && o.gender !== a.gender && rel(a, o) >= 50 && rel(o, a) >= 40);
    const family = [a].concat(partner ? [partner] : []);
    aiAgents.filter(k => k.age < 15 && family.some(f => k.guardian === f.id)).forEach(k => family.push(k));
    const from = a.home;
    family.forEach(m => {
      m.home = dest; m.crowd = 0;
      const mv = villageOf(m);
      if (mv && zoneDist(dest, mv.zone) > 1 && mv.chiefId !== m.id) {
        mv.members = mv.members.filter(id => id !== m.id); m.villageId = null;
        if (m.age >= 15) m.role = 'หาเลี้ยงชีพเอง';
      }
      if (m.age >= 12) { buildZoneTerrain(dest); const t = findValidTile(dest, false); m.goal = { zone: dest, x: t.x, y: t.y, ttl: 40, quest: true }; }
      m.bubble = `🧳 ย้ายไปอยู่ ${dest}`;
    });
    addLog(`🧳 [ย้ายถิ่น] ${family.map(m => m.name).join(', ')} ทนความแออัดที่ ${from} ไม่ไหว ย้ายไปตั้งรกรากที่ ${dest}${v && !villageOf(a) ? ` (ออกจาก${v.name})` : ''}`, '#93c5fd');
  });
}

// Everyday social life: chatting builds friendship, bad blood leads to quarrels
function socialTick() {
  const byZone = {};
  aiAgents.forEach(a => { if (a.age >= 6) (byZone[a.zone] = byZone[a.zone] || []).push(a); });
  Object.values(byZone).forEach(list => {
    if (list.length < 2) return;
    const a = pick(list), b = pick(list.filter(x => x !== a));
    const mutual = rel(a, b) + rel(b, a);
    const crowded = (a.crowd || 0) > 0 && (b.crowd || 0) > 0;
    if (crowded && Math.random() < 0.3) { addRel(a, b, -1); addRel(b, a, -1); }
    if (mutual < (crowded ? -40 : -70) && Math.random() < (crowded ? 0.2 : 0.1)) {
      a.hp = Math.max(1, a.hp - 5); b.hp = Math.max(1, b.hp - 5);
      addRel(a, b, -3); addRel(b, a, -3);
      a.bubble = `💢 ทะเลาะกับ${b.name}`; b.bubble = `💢 ทะเลาะกับ${a.name}`;
      addLog(`💢 [ทะเลาะ] ${a.name} กับ ${b.name} มีปากเสียงกันรุนแรง`, '#fb7185');
    } else if (Math.random() < (isNightTime() && stationInZone(a.zone, 'campfire') ? 0.25 : 0.08)) {
      const d = st(a, 'cha') >= 5 || st(b, 'cha') >= 5 ? 2 : 1;
      addRel(a, b, d); addRel(b, a, d);
    }
  });
}

// ==========================================
// VILLAGES: founding meeting, chief election, tax negotiation, jobs, splits
// ==========================================
const VILLAGE_NAMES = ['บ้านกองไฟ', 'บ้านผาหิน', 'บ้านริมธาร', 'บ้านดงไผ่', 'บ้านหาดขาว', 'บ้านเนินไม้', 'บ้านปากน้ำ', 'บ้านลมหนาว'];
const JOBS = [
  { role: 'นักล่าสัตว์และสำรวจ', stats: ['str', 'agi'], icon: '🏹' },
  { role: 'นักเก็บทรัพยากร', stats: ['vit', 'str'], icon: '🧺' },
  { role: 'นักวิจัยและทดลอง', stats: ['int'], icon: '🧪' },
  { role: 'ช่างฝีมือ', stats: ['dex'], icon: '🔨' },
  { role: 'ผู้สอนและผู้นำ', stats: ['cha'], icon: '📖' }
];
// AI name their own village: each attendee proposes a name from what matters to them, then they vote
const GEO_WORDS = {
  mountain_cave: ['ผาถ้ำ', 'เชิงเขา', 'ถ้ำหิน'], mountain_cliff: ['ผาสูง', 'หน้าผา'], mountain_peak: ['ยอดดอย', 'สันเขา'],
  waterfall_river: ['น้ำตก', 'ต้นธาร'], river_grassland: ['ริมธาร', 'ทุ่งหญ้า', 'คุ้งน้ำ'], river_beach: ['ปากน้ำ', 'สองน้ำ'],
  beach_ocean: ['หาดขาว', 'ทะเลคราม', 'ดงมะพร้าว'], rocky_beach: ['หาดหิน', 'น้ำเค็ม'], hill_grassland: ['ดงไผ่', 'เนินลม'],
  hill_forest: ['ดงผลไม้', 'เนินป่า'], open_grassland: ['ทุ่งกว้าง', 'พุ่มเบอร์รี่'], deep_forest: ['ไพรลึก', 'ไม้ใหญ่'], wetland: ['หนองน้ำ', 'ดินเหนียว']
};
const SEASON_WORDS = { spring: 'ใบไม้ผลิ', summer: 'แดดร้อน', rainy: 'สายฝน', winter: 'หิมะแรก' };
const KIND_WORDS = ['น้ำใจ', 'สามัคคี', 'ร่มเย็น', 'พึ่งพา'];
const GREED_WORDS = ['มั่งมี', 'อุดม', 'รุ่งเรือง', 'ทองคำ'];
const SUFFIX = ['', '', 'ใหม่', 'งาม', 'สุข', 'ทอง'];
function proposeVillageName(a, zone, chief) {
  const ideas = [];
  ideas.push(...(GEO_WORDS[ZONES[zone].geo] || ['ใหม่']).map(w => ['ที่นี่คือ' + w, w]));
  ideas.push(['เกิดรอบกองไฟ', 'กองไฟ']);
  ideas.push([`ตั้งใน${SEASONS[currentSeasonIdx].name.slice(2)}`, SEASON_WORDS[SEASONS[currentSeasonIdx].id]]);
  const beast = faunaSpecies.find(f => f.zones.includes(zone) && f.pop > 0);
  if (beast) ideas.push([`มี${beast.name.split(' ')[0]}อยู่แถวนี้`, beast.name.split(' ')[0].replace('ฝูง', '').replace('แม่น้ำ', '')]);
  if (a !== chief && rel(a, chief) >= 20) ideas.push([`ให้เกียรติ ${chief.name}`, chief.name]);
  ideas.push(a.kind >= 0.6 ? ['อยากให้ทุกคนช่วยกัน', pick(KIND_WORDS)] : a.generous <= 0.7 ? ['อยากให้ร่ำรวย', pick(GREED_WORDS)] : ['อยากให้อยู่ดีมีสุข', 'สุขใจ']);
  const disc = Object.entries(discoveredProducts).filter(([k, d]) => d.by === a.name && !k.startsWith('dyn'));
  if (disc.length) ideas.push([`ฉันค้นพบ${outName(disc[0][0])}`, outName(disc[0][0]).replace('เนื้อเนียน', '').slice(0, 8)]);
  const [why, word] = pick(ideas);
  return { by: a, name: `บ้าน${word}${pick(SUFFIX)}`, why };
}
function nameVillage(attendees, zone, chief, minutes) {
  const used = villages.map(v => v.name);
  const props = attendees.map(a => proposeVillageName(a, zone, chief)).filter(p => !used.includes(p.name));
  if (!props.length) return `บ้านใหม่${villages.length + 1}`;
  props.forEach(p => minutes.push(`💡 ${p.by.name} เสนอชื่อ "${p.name}" (${p.why})`));
  const tally = new Map();
  attendees.forEach(vt => {
    const choice = props.slice().sort((p, q) => (rel(vt, q.by) + (q.by === vt ? 15 : 0) + (q.by === chief ? 5 : 0)) - (rel(vt, p.by) + (p.by === vt ? 15 : 0) + (p.by === chief ? 5 : 0)))[0];
    tally.set(choice, (tally.get(choice) || 0) + 1);
  });
  const win = [...tally.entries()].sort((p, q) => q[1] - p[1])[0][0];
  minutes.push(`🏷️ โหวตตั้งชื่อ: "${win.name}" ชนะ (${tally.get(win)} เสียง) ตามที่ ${win.by.name} เสนอ`);
  addRel(win.by, chief, 2);
  return win.name;
}
function jobFit(a, job) { return job.stats.reduce((t, k) => t + a.talent[k] * 3 + st(a, k) * 0.4, 0) / job.stats.length; }
function villageMembers(v) { return v.members.map(byId).filter(Boolean); }

function electChief(voters, candidates) {
  const tally = new Map();
  voters.forEach(vt => {
    const best = candidates.slice().sort((p, q) => score(q) - score(p))[0];
    function score(c) { return rel(vt, c) + c.rep * 3 + st(c, 'cha') * 2 + (c.age >= 35 ? 5 : 0) + (vt === c ? 6 : 0); }
    tally.set(best, (tally.get(best) || 0) + 1);
  });
  const ranked = [...tally.entries()].sort((p, q) => (q[1] - p[1]) || (st(q[0], 'cha') - st(p[0], 'cha')));
  return { chief: ranked[0][0], votes: ranked.map(([c, n]) => `${c.name} ${n} เสียง`).join(', ') };
}
function proposeTax(a, chief, others) {
  const trust = others.length ? others.reduce((t, o) => t + rel(a, o), 0) / others.length : 0;
  let p = 0.05 + a.kind * 0.3 + trust / 300 + (a === chief ? 0.08 : 0);
  return Math.max(0.05, Math.min(0.6, p));
}
function negotiateTax(attendees, chief, minutes) {
  const props = attendees.map(a => [a, proposeTax(a, chief, attendees.filter(o => o !== a))]);
  props.forEach(([a, p]) => minutes.push(`${a.name}: เสนอส่งเข้าคลัง ${Math.round(p * 100)}%`));
  const pool = props.flatMap(([a, p]) => a === chief ? [p, p] : [p]).sort((x, y) => x - y);
  const agreed = Math.round(pool[Math.floor(pool.length / 2)] * 20) / 20;
  minutes.push(`👑 ${chief.name}: สรุปตกลงที่ ${Math.round(agreed * 100)}%`);
  return { agreed, props };
}
function assignJobs(v) {
  const adults = villageMembers(v).filter(a => a.age >= 15);
  const kids = villageMembers(v).filter(a => a.age < 15).length;
  const chief = byId(v.chiefId);
  const n = adults.length;
  const quota = [
    [JOBS[0], Math.max(1, Math.round(n * 0.3))],
    [JOBS[1], Math.max(1, Math.round(n * 0.25))],
    [JOBS[2], n >= 7 ? 2 : 1],
    [JOBS[3], n >= 4 ? 1 : 0],
    [JOBS[4], kids ? 1 : 0]
  ];
  const free = adults.filter(a => a !== chief);
  const done = [];
  quota.forEach(([job, q]) => {
    for (let i = 0; i < q && free.length; i++) {
      free.sort((p, r) => jobFit(r, job) - jobFit(p, job));
      const a = free.shift(); a.role = job.role; done.push(`${job.icon} ${a.name}`);
    }
  });
  free.forEach(a => { a.role = JOBS[1].role; done.push(`${JOBS[1].icon} ${a.name}`); });
  if (chief) { chief.role = 'หัวหน้าหมู่บ้าน'; }
  v.jobsText = done.join(' · ');
  addLog(`📋 [แบ่งงาน] ${chief ? chief.name : 'หมู่บ้าน'} มอบหมายงานใน${v.name}: ${v.jobsText}`, '#c4b5fd');
}
function placeStorehouse(v, zone) {
  buildZoneTerrain(zone);
  const fire = stationInZone(zone, 'campfire');
  let x = clampC((fire ? fire.x : 40) + 6), y = clampC((fire ? fire.y : 40) + 2);
  if (WATER.includes(zoneTerrainGrid[zone][y][x])) { const p = findValidTile(zone, false); x = p.x; y = p.y; }
  shelters.push({ name: `โกดัง${v.name} (${zone})`, sprite: 'st_store', zone, x, y, station: 'storehouse', villageId: v.id, owner: null, ownerName: v.name, public: false, permits: [] });
}

function holdFoundingMeeting() {
  const indep = aiAgents.filter(a => a.age >= 15 && !isMember(a));
  if (indep.length < 3 || villages.length >= 4) return;
  const fires = shelters.filter(s => s.station === 'campfire' && !villages.some(v => v.zone === s.zone));
  if (!fires.length) return;
  let best = null;
  fires.forEach(f => {
    const near = indep.filter(a => zoneDist(a.zone, f.zone) <= 1);
    if (!best || near.length > best.near.length) best = { fire: f, near };
  });
  if (!best || best.near.length < 3 || Math.random() > 0.5) return;
  const attendees = best.near;
  const minutes = [`🔥 ประชุมรอบกองไฟที่ ${best.fire.zone}: ${attendees.map(a => a.name).join(', ')}`];
  const { chief, votes } = electChief(attendees, attendees);
  minutes.push(`🗳️ ผลโหวตหัวหน้า: ${votes}`);
  const { agreed, props } = negotiateTax(attendees, chief, minutes);
  const joiners = [], leavers = [];
  props.forEach(([a, p]) => {
    if (a === chief || agreed - p <= 0.2 || rel(a, chief) >= 20) joiners.push(a);
    else { leavers.push(a); minutes.push(`🚶 ${a.name}: ส่งมากขนาดนั้นไม่ไหว ขออยู่แบบอิสระ`); }
  });
  if (joiners.length < 3) {
    minutes.push('❌ ตกลงกันไม่ได้ ยังไม่ตั้งหมู่บ้าน');
    addLog(`🔥 [ประชุมล้ม] ${attendees.length} คนประชุมตั้งหมู่บ้านแต่ตกลงกันไม่ได้`, '#fca5a5');
    joiners.concat(leavers).forEach(a => addRel(a, chief, -2));
    return;
  }
  const name = nameVillage(joiners, best.fire.zone, chief, minutes);
  const v = { id: ++villageSeq, name, chiefId: chief.id, chiefName: chief.name, tax: agreed, members: [], zone: best.fire.zone, store: {}, food: 0,
    founded: simDay, lastMeeting: simDay, minutes, ledger: [], jobsText: '' };
  villages.push(v);
  joiners.forEach(a => {
    a.villageId = v.id; v.members.push(a.id);
    addRel(a, chief, 4);
    aiAgents.filter(k => k.age < 15 && k.guardian === a.id && !isMember(k)).forEach(k => { k.villageId = v.id; v.members.push(k.id); });
  });
  placeStorehouse(v, v.zone);
  if (!government) government = { name: 'สภาหมู่บ้าน', era: '', laws: [] };
  addLog(`🏛️ [ก่อตั้งหมู่บ้าน] "${name}" ที่ ${v.zone} · หัวหน้า ${chief.name} · ส่งเข้าคลัง ${Math.round(agreed * 100)}% · สมาชิก ${joiners.length} คน${leavers.length ? ` · ไม่เข้าร่วม: ${leavers.map(a => a.name).join(', ')}` : ''}`, '#e9d5ff');
  assignJobs(v);
}

function holdVillageMeeting(v) {
  const members = villageMembers(v);
  const adults = members.filter(a => a.age >= 15);
  if (!adults.length) { villages = villages.filter(x => x !== v); shelters.forEach(s => { if (s.villageId === v.id) { s.villageId = null; s.public = true; s.ownerName = 'ซากโกดังร้าง'; } }); addLog(`🏚️ [หมู่บ้านล่มสลาย] "${v.name}" ไม่เหลือผู้ใหญ่`, '#94a3b8'); return; }
  const minutes = [`📅 ประชุมประจำ${v.name} วันที่ ${simDay}`];
  let chief = byId(v.chiefId);
  if (!chief || !v.members.includes(chief.id)) {
    const r = electChief(adults, adults); chief = r.chief;
    minutes.push(`🗳️ เลือกหัวหน้าใหม่: ${r.votes}`);
    addLog(`👑 [หัวหน้าคนใหม่] ${v.name} เลือก ${chief.name} เป็นหัวหน้า`, '#e9d5ff');
  }
  v.chiefId = chief.id; v.chiefName = chief.name;
  // Dissidents leave
  adults.filter(a => a !== chief && rel(a, chief) < -40).forEach(a => {
    v.members = v.members.filter(id => id !== a.id); a.villageId = null; a.role = 'หาเลี้ยงชีพเอง';
    minutes.push(`🚪 ${a.name} ขอแยกตัวออกจากหมู่บ้าน (ไม่ถูกกับ ${chief.name})`);
    addLog(`🚪 [แยกตัว] ${a.name} ออกจาก${v.name} เพราะไม่ถูกกับหัวหน้า`, '#fca5a5');
  });
  // Independents nearby may ask to join
  aiAgents.filter(a => a.age >= 15 && !isMember(a) && zoneDist(a.zone, v.zone) <= 1).forEach(a => {
    const want = a.kind * 30 + rel(a, chief) + ((a.food || 0) < 4 ? 15 : 0) - v.tax * 40;
    const accept = rel(chief, a) >= -10;
    if (want > 5 && accept) {
      a.villageId = v.id; v.members.push(a.id);
      minutes.push(`🤝 ${a.name} ขอเข้าร่วมหมู่บ้าน → ${chief.name} รับเข้า`);
      addLog(`🤝 [เข้าร่วม] ${a.name} เข้าร่วม${v.name}`, '#86efac');
    }
  });
  const stay = villageMembers(v).filter(a => a.age >= 15);
  if (stay.length >= 2) {
    const old = v.tax;
    const { agreed } = negotiateTax(stay, chief, minutes);
    v.tax = agreed;
    if (Math.abs(agreed - old) >= 0.05) addLog(`⚖️ [ปรับอัตรา] ${v.name} เปลี่ยนการส่งเข้าคลังจาก ${Math.round(old * 100)}% เป็น ${Math.round(agreed * 100)}%`, '#c4b5fd');
  }
  v.minutes = minutes;
  v.lastMeeting = simDay;
  assignJobs(v);
}

function villageTick() {
  if (simMinutes !== 20 * 60) return;                       // meetings happen at 20:00 around the fire
  holdFoundingMeeting();
  villages.slice().forEach(v => {
    const chiefAlive = v.members.includes(v.chiefId) && byId(v.chiefId);
    if (!chiefAlive || simDay - v.lastMeeting >= 10) holdVillageMeeting(v);
  });
}

// ==========================================
// EVOLUTION: each zone population adapts; migrants adapt faster; eating elements causes mutations
// ==========================================
const MAIN_COLOR_CH = { deer: 'O', boar: 'W', leopard: 'O', wolf: 'R', fish: 'E' };
const GEO_COLOR = {
  mountain_cave: ['#9ca3af', 'สีเทาหิน'], mountain_cliff: ['#9ca3af', 'สีเทาหิน'], mountain_peak: ['#e5e7eb', 'สีขาวหิมะ'],
  waterfall_river: ['#38bdf8', 'สีฟ้าน้ำตก'], river_grassland: ['#a3a14b', 'สีเขียวมะกอก'], river_beach: ['#5eead4', 'สีเขียวน้ำทะเล'],
  beach_ocean: ['#e5c07b', 'สีทราย'], rocky_beach: ['#78716c', 'สีหินชายฝั่ง'], hill_grassland: ['#84cc16', 'สีเขียวหญ้า'],
  hill_forest: ['#166534', 'สีเขียวป่า'], open_grassland: ['#d6a756', 'สีฟางข้าว'], deep_forest: ['#14532d', 'สีเขียวเข้มป่าดิบ'], wetland: ['#6b5b3a', 'สีโคลน']
};
const ELEM_MUT = {
  Fe: { trait: 'ผิวเหล็ก', color: '#6b7280', str: 2 }, S: { trait: 'เลือดกำมะถัน', color: '#facc15', fer: 2 },
  Ca: { trait: 'เขากระดูก', color: '#f5f5f4', part: 'เขา' }, Si: { trait: 'เกล็ดแก้ว', color: '#93c5fd', part: 'เกล็ด' },
  Na: { trait: 'เลือดเค็ม', color: '#f9a8d4', rep: 1 }, N: { trait: 'ขาดินประสิว', color: '#a3e635', spd: 2 }, C: { trait: 'ขนถ่าน', color: '#1f2937', fer: 1 }
};
const PART_ICON = { 'เขา': '🦌', 'ปีก': '🪽', 'หาง': '〰️', 'หนังหนา': '🛡️', 'เกล็ด': '🐉' };
function trOf(f, z) {
  f.tr = f.tr || {};
  if (!f.tr[z]) f.tr[z] = { str: 0, spd: 0, fer: 0, rep: 0, parts: [], color: null, colorName: null, elems: [], stress: 0, name: null, gens: 0 };
  return f.tr[z];
}
function traitScore(t) { return t.str + t.spd + t.fer + t.rep + t.parts.length + t.elems.length; }
function variantLabel(f, z) {
  const t = f.tr && f.tr[z];
  if (!t || !traitScore(t)) return f.name;
  return t.name || f.name;
}
function traitText(t) {
  const bits = [];
  if (t.str) bits.push(`💪+${t.str}`); if (t.spd) bits.push(`💨+${t.spd}`); if (t.fer) bits.push(`😠+${t.fer}`); if (t.rep) bits.push(`🐣+${t.rep}`);
  t.parts.forEach(p => bits.push(`${PART_ICON[p] || ''}${p}`)); t.elems.forEach(e => bits.push(`☢️${ELEM_MUT[e] ? ELEM_MUT[e].trait : e}`));
  if (t.colorName) bits.push(`🎨${t.colorName}`);
  return bits.join(' ');
}
// Migrants carry their traits; mixing with residents blends them
function carryTraits(f, from, to, n, residents) {
  const a = trOf(f, from), b = trOf(f, to);
  if (!residents) {
    Object.assign(b, JSON.parse(JSON.stringify(a)));
    b.stress = a.stress + 3;
  } else {
    const w = n / (n + residents);
    ['str', 'spd', 'fer', 'rep'].forEach(k => { b[k] = Math.round(b[k] * (1 - w) + a[k] * w); });
    if (w >= 0.5) { a.parts.forEach(p => { if (!b.parts.includes(p)) b.parts.push(p); }); a.elems.forEach(e => { if (!b.elems.includes(e)) b.elems.push(e); }); }
    b.stress += 1;
  }
}
function evolveOne(f, z, t, kind) {
  const base = f.name.replace('เกาะ', '').replace('ฝูง', '').replace('แม่น้ำ', '').replace('เขี้ยวตัน', '');
  let msg = '';
  if (['str', 'spd', 'fer', 'rep'].includes(kind) && t[kind] >= 5) return false;
  if (kind === 'str') { t.str++; msg = 'แข็งแกร่งขึ้น'; }
  else if (kind === 'spd') { t.spd++; msg = 'ว่องไวขึ้น'; }
  else if (kind === 'fer') { t.fer++; msg = 'ดุร้ายขึ้น'; }
  else if (kind === 'rep') { t.rep++; msg = 'ขยายพันธุ์เร็วขึ้น'; }
  else if (kind === 'color') {
    const [c, cn] = GEO_COLOR[ZONES[z].geo] || ['#a3a3a3', 'สีหม่น'];
    if (t.color === c) return false;
    t.color = c; t.colorName = cn; msg = `เปลี่ยนเป็น${cn}กลมกลืนกับพื้นที่`;
  } else {
    if (t.parts.includes(kind)) return false;
    t.parts.push(kind);
    msg = { 'เขา': 'งอกเขา', 'ปีก': 'งอกปีก!', 'หาง': 'มีหางยาวขึ้น', 'หนังหนา': 'หนังหนาขึ้น', 'เกล็ด': 'มีเกล็ดขึ้นตามตัว' }[kind];
  }
  t.gens++;
  animalLog(`🧬 [วิวัฒนาการ] ${variantLabel(f, z)} ที่ ${z} ${msg}`, '#c4b5fd');
  // Speciation: enough changes → a new named subspecies
  if (!t.name && traitScore(t) >= 4) {
    const suffix = t.elems.length ? (ELEM_MUT[t.elems[0]]?.trait || 'กลายพันธุ์').replace('ขน', '').replace('เลือด', '').replace('ผิว', '')
      : t.parts.includes('ปีก') ? 'ปีกฟ้า' : t.parts.includes('เกล็ด') ? 'เกล็ดหิน' : t.parts.includes('เขา') ? 'เขางาม'
      : t.parts.includes('หนังหนา') ? 'หนังหิน' : t.spd >= t.str && t.spd >= t.fer ? 'ลมกรด' : t.fer > t.str ? 'คลั่ง' : 'ทรหด';
    t.name = `${base}${suffix} (${z})`;
    animalLog(`🌟 [สายพันธุ์ใหม่!] ${f.name} ที่ ${z} วิวัฒน์จนกลายเป็น "${t.name}" — ${traitText(t)}`, '#f0abfc');
  }
  return true;
}
function evolveTick() {
  const season = SEASONS[currentSeasonIdx].id;
  faunaSpecies.forEach(f => f.zones.forEach(z => {
    const t = trOf(f, z);
    const geo = ZONES[z].geo;
    const predHere = faunaSpecies.some(o => o.predator && o !== f && (o.zp[z] || 0) > 0);
    let pressure = t.stress + (predHere ? 1 : 0) + (season === 'winter' ? 1 : 0);
    // Hungry animals may eat elemental minerals lying around → mutation
    const preyHere = faunaSpecies.some(o => isPrey(o) && (o.zp[z] || 0) > 0);
    const hungry = f.predator ? !preyHere : Math.random() < 0.15;
    const elemRes = ZONES[z].res.map(r => propsOf(r).elem).filter(Boolean);
    if (hungry && elemRes.length && Math.random() < 0.12) {
      const e = pick(elemRes), m = ELEM_MUT[e];
      if (m && !t.elems.includes(e)) {
        t.elems.push(e); t.color = m.color; t.colorName = `สี${m.trait}`;
        if (m.str) t.str += m.str; if (m.fer) t.fer += m.fer; if (m.spd) t.spd += m.spd; if (m.rep) t.rep += m.rep;
        if (m.part && !t.parts.includes(m.part)) t.parts.push(m.part);
        animalLog(`☢️ [กลายพันธุ์] ${variantLabel(f, z)} ที่ ${z} หิวจนกินธาตุ ${e} เข้าไป → เกิด "${m.trait}"`, '#a3e635');
        if (!t.name && traitScore(t) >= 4) evolveOne(f, z, t, 'str');
      }
    }
    if (Math.random() > Math.min(0.5, 0.06 * pressure + 0.01)) return;
    // What the environment rewards
    const opts = [];
    if (/mountain/.test(geo)) opts.push('หนังหนา', 'str', 'เขา', 'color');
    if (/forest/.test(geo)) opts.push('spd', 'หาง', 'color');
    if (geo === 'wetland') opts.push('เกล็ด', 'rep', 'color');
    if (/beach|ocean/.test(geo)) opts.push('เกล็ด', 'หาง', 'color');
    if (/grassland/.test(geo)) opts.push('spd', 'rep', 'color');
    if (geo === 'waterfall_river') opts.push('หาง', 'เกล็ด', 'color');
    if (predHere && !f.predator) opts.push('spd', 'spd', 'เขา');
    if (f.predator && faunaSpecies.some(o => o.predator && o !== f && (o.zp[z] || 0) > 0)) opts.push('fer', 'str');
    if (f.predator) opts.push('fer');
    if (season === 'winter') opts.push('หนังหนา');
    if (f.pop <= 4) opts.push('rep', 'rep');
    if (t.stress >= 4 && /mountain_cliff|mountain_peak/.test(geo) && f.sprite !== 'fish') opts.push('ปีก');
    if (!opts.length) opts.push('color');
    for (let i = 0; i < 4; i++) { if (evolveOne(f, z, t, pick(opts))) break; }
    t.stress = Math.max(0, t.stress - 1);
  }));
}
// Combined combat modifiers for a zone population
function animalPower(f, z) { const t = trOf(f, z); return (1 + t.str * 0.2 + t.fer * 0.1 + (t.parts.includes('เขา') ? 0.3 : 0) + (t.parts.includes('หนังหนา') ? 0.2 : 0) + (t.parts.includes('เกล็ด') ? 0.2 : 0)); }
function huntPenalty(f, z) { const t = trOf(f, z); return t.spd * 0.04 + t.str * 0.02 + (t.parts.includes('หนังหนา') ? 0.05 : 0) + (t.parts.includes('เกล็ด') ? 0.05 : 0) + (t.parts.includes('ปีก') ? 0.08 : 0); }
function extraLoot(f, z) {
  const t = trOf(f, z), base = f.name.split(' ')[0].replace('เกาะ', '').replace('ฝูง', '');
  const out = {};
  if (t.parts.includes('เขา')) out[`เขา${base}`] = 1;
  if (t.parts.includes('เกล็ด')) out[`เกล็ด${base}`] = 2;
  if (t.parts.includes('ปีก')) out[`ขนปีก${base}`] = 2;
  t.elems.forEach(e => { out[`ผลึกธาตุ ${e}`] = 1; });
  return out;
}

// ==========================================
// ECOLOGY: fire scares predators, predators hunt prey, fight over territory
// ==========================================
function ecologyTick() {
  const preds = faunaSpecies.filter(f => f.predator);
  preds.forEach(f => { if (f.zp[START_ZONE]) { const to = pick(getAdjacentZones(START_ZONE)); f.zp[to] = (f.zp[to] || 0) + f.zp[START_ZONE]; delete f.zp[START_ZONE]; syncFauna(f); } });
  const prey = faunaSpecies.filter(isPrey);
  // 1) Predators flee from zones with a campfire
  preds.forEach(f => f.zones.slice().forEach(z => {
    if (!stationInZone(z, 'campfire')) return;
    const opts = getAdjacentZones(z).filter(n => n !== START_ZONE && !stationInZone(n, 'campfire'));
    if (!opts.length) return;
    const to = opts.sort((p, q) => prey.reduce((t, g) => t + (g.zp[q] || 0), 0) - prey.reduce((t, g) => t + (g.zp[p] || 0), 0))[0];
    const n = moveAnimals(f, z, to, f.zp[z]);
    if (n) animalLog(`🔥 ${f.name} ${n} ตัว หนีแสงกองไฟจาก ${z} ไป ${to}`);
  }));
  // 2) Hungry predators move toward prey
  preds.forEach(f => f.zones.slice().forEach(z => {
    const food = prey.reduce((t, g) => t + (g.zp[z] || 0), 0);
    if (food > 0 || Math.random() > 0.4) return;
    let near = getAdjacentZones(z);
    if (trOf(f, z).parts.includes('ปีก')) near = [...new Set(near.concat(near.flatMap(getAdjacentZones)))].filter(n => n !== z);
    const opts = near.filter(n => n !== START_ZONE && !stationInZone(n, 'campfire') && prey.some(g => (g.zp[n] || 0) > 0));
    if (!opts.length) return;
    const to = pick(opts);
    const n = moveAnimals(f, z, to, f.zp[z]);
    if (n) animalLog(`👣 ${f.name} ${n} ตัว ตามกลิ่นเหยื่อจาก ${z} ไป ${to}`, '#fcd34d');
  }));
  // 3) Fighting to eat: predators hunt prey in the same zone
  preds.forEach(f => f.zones.slice().forEach(z => {
    if (Math.random() > 0.3) return;
    const here = prey.filter(g => (g.zp[z] || 0) >= 2 && g.pop > 4);
    if (!here.length || !(f.zp[z] > 0)) return;
    const g = pick(here);
    if (g.id === 'f_deer' && Math.random() < 0.35 + trOf(g, z).spd * 0.08 + (trOf(g, z).parts.includes('ปีก') ? 0.2 : 0)) {
      const to = pick(getAdjacentZones(z));
      const n = moveAnimals(g, z, to, Math.ceil(g.zp[z] / 2));
      if (n) animalLog(`🦌 ${g.name} ${n} ตัว วิ่งหนี ${f.name} จาก ${z} ไป ${to}`, '#86efac');
      return;
    }
    if (g.id === 'f_boar' && Math.random() < 0.3 * animalPower(g, z) / animalPower(f, z)) {
      if (Math.random() < 0.35) { f.zp[z]--; syncFauna(f); animalLog(`🐗 ${g.name} สู้กลับจนขวิด ${f.name} ตาย 1 ตัวที่ ${z}!`, '#fca5a5'); }
      else animalLog(`🐗 ${g.name} สู้กลับ ไล่ ${f.name} ถอยไปที่ ${z}`, '#fca5a5');
      return;
    }
    if (g.pop <= 1) return;
    g.zp[z]--; syncFauna(g);
    animalLog(`🍖 ${f.name} ล่า ${g.name} ได้ 1 ตัวที่ ${z} (เหลือทั้งเกาะ ${g.pop})`);
  }));
  // 4) Territory: rival predator species, or a crowded solitary predator, fight over a zone
  Object.keys(ZONES).forEach(z => {
    const here = preds.filter(f => (f.zp[z] || 0) > 0);
    if (here.length >= 2) {
      const [a, b] = here;
      const pa = a.zp[z] * a.power * animalPower(a, z) * (0.7 + Math.random() * 0.6), pb = b.zp[z] * b.power * animalPower(b, z) * (0.7 + Math.random() * 0.6);
      const [win, lose] = pa >= pb ? [a, b] : [b, a];
      const out = getAdjacentZones(z).filter(n => n !== START_ZONE && !preds.some(o => o !== lose && (o.zp[n] || 0) > 0));
      let died = 0;
      if (Math.random() < 0.4 && lose.zp[z] > 0) { lose.zp[z]--; died = 1; syncFauna(lose); }
      const moved = out.length && lose.zp[z] > 0 ? moveAnimals(lose, z, pick(out), lose.zp[z]) : 0;
      if (Math.random() < 0.25 && win.zp[z] > 1) { win.zp[z]--; syncFauna(win); }
      animalLog(`⚔️ ศึกแย่งอาณาเขตที่ ${z}: ${win.name} ชนะ ${lose.name}${died ? ' (ตาย 1 ตัว)' : ''}${moved ? ` ที่เหลือถูกไล่ออกไป` : ''}`, '#fb7185');
    }
    preds.filter(f => f.solitary && (f.zp[z] || 0) > 2).forEach(f => {
      const out = getAdjacentZones(z).filter(n => n !== START_ZONE && !(f.zp[n] > 1));
      if (Math.random() < 0.2) { f.zp[z]--; syncFauna(f); animalLog(`⚔️ ${f.name} 2 ตัวสู้กันแย่งถิ่นที่ ${z} ตัวแพ้ตาย`, '#fb7185'); }
      else if (out.length) { moveAnimals(f, z, pick(out), 1); animalLog(`⚔️ ${f.name} สู้แย่งถิ่นที่ ${z} ตัวแพ้ถูกไล่ไปอยู่ที่อื่น`, '#fb7185'); }
    });
  });
}

// ==========================================
// REALMS: several islands tick together; gates connect them; God asks for saviors when one collapses
// ==========================================
const REALM_VARS = ['simMinutes', 'simDay', 'currentZoneId', 'worldSeed', 'currentSeasonIdx', 'techDiscovered', 'discoveredProducts', 'ZONES',
  'zoneTerrainGrid', 'zoneNodes', 'faunaSpecies', 'animalLogs', 'foodStock', 'activeDisaster', 'aiCrisisProposals', 'rndTrials', 'huntLogs',
  'teachLogs', 'alchemyLogs', 'toolWear', 'dynamicProducts', 'novelCount', 'usedNames', 'sharedInventory', 'discoveredElements', 'shelters',
  'families', 'government', 'currentGeneration', 'aiAgents', 'toolItems', 'toolSeq', 'villages', 'villageSeq', 'quests', 'questSeq', 'souls', 'logBuffer', 'weather'];
function captureRealm() {
  return { simMinutes, simDay, currentZoneId, worldSeed, currentSeasonIdx, techDiscovered, discoveredProducts, ZONES, zoneTerrainGrid, zoneNodes,
    faunaSpecies, animalLogs, foodStock, activeDisaster, aiCrisisProposals, rndTrials, huntLogs, teachLogs, alchemyLogs, toolWear, dynamicProducts,
    novelCount, usedNames, sharedInventory, discoveredElements, shelters, families, government, currentGeneration, aiAgents, toolItems, toolSeq,
    villages, villageSeq, quests, questSeq, souls, logBuffer };
}
function restoreRealm(st) {
  ({ simMinutes, simDay, currentZoneId, worldSeed, currentSeasonIdx, techDiscovered, discoveredProducts, ZONES, zoneTerrainGrid, zoneNodes,
    faunaSpecies, animalLogs, foodStock, activeDisaster, aiCrisisProposals, rndTrials, huntLogs, teachLogs, alchemyLogs, toolWear, dynamicProducts,
    novelCount, usedNames, sharedInventory, discoveredElements, shelters, families, government, currentGeneration, aiAgents, toolItems, toolSeq,
    villages, villageSeq, quests, questSeq, souls, logBuffer } = st);
  zoneTerrainGrid = zoneTerrainGrid || {}; zoneNodes = zoneNodes || {}; logBuffer = logBuffer || [];
}

const REALM_DEFS = [
  { name: 'เกาะต้นกำเนิด', icon: '🏝️', diff: 1, gate: 'E4', sub: {}, founders: [['อคิน', 'ชาย'], ['ลินดา', 'หญิง']] },
  { name: 'หมู่เกาะเถ้าถ่าน', icon: '🌋', diff: 2, gate: 'W2',
    sub: { 'หินเหล็กไฟ': 'หินออบซิเดียน', 'ดินร่วน': 'ดินเถ้าภูเขาไฟ', 'กาบมะพร้าว': 'ใยปาล์มไหม้', 'กิ่งไม้แห้ง': 'กิ่งไม้เกรียม', 'น้ำจืด': 'น้ำพุร้อน', 'ทรายละเอียด': 'ทรายดำ', 'กำมะถันดิบ': 'หินกำมะถันร้อน' },
    founders: [['ภูไฟ', 'ชาย'], ['ลาวา', 'หญิง']] },
  { name: 'ดินแดนธารน้ำแข็ง', icon: '❄️', diff: 3, gate: 'N4', winter: true,
    sub: { 'หินเหล็กไฟ': 'หินเกล็ดน้ำแข็ง', 'กาบมะพร้าว': 'ตะไคร่แห้ง', 'ต้นมะพร้าว': 'ต้นสน', 'กิ่งไม้แห้ง': 'กิ่งสนแห้ง', 'ดินร่วน': 'ดินเหนียวเยือกแข็ง', 'กอไผ่สด': 'กิ่งหลิวแช่แข็ง', 'น้ำจืด': 'น้ำแข็งละลาย', 'ใบตองสด': 'ใบสนสด' },
    founders: [['ยะเยือก', 'ชาย'], ['น้ำค้าง', 'หญิง']] },
  { name: 'ดินแดนที่ถูกลืม', icon: '🌫️', diff: 2, gate: 'S2', empty: true,
    sub: { 'เถาวัลย์เล็ก': 'เถาวัลย์ผี', 'หินกรวด': 'หินมืด', 'ดินร่วน': 'ดินโคลนดำ' }, founders: [] }
];
let realms = [];          // [{def, state}]
let activeRealm = 0;
let tickingRealm = 0;
let godRequests = [];     // [{id, realm, status:'open'|'saving'|'done', openedDay, saviors:[{id,name,from}], streak, lastDay}]
let realmLogs = [];       // cross-realm chronicle for the lobby
const GOD_REWARDS = [
  { id: 'wisdom', name: 'พรแห่งปัญญา', desc: 'พรสวรรค์ INT เพิ่ม', apply: (a, d) => { a.talent.int = +(a.talent.int + 0.3 * d).toFixed(2); } },
  { id: 'might', name: 'พรแห่งพละกำลัง', desc: 'พรสวรรค์ STR/VIT เพิ่ม', apply: (a, d) => { a.talent.str = +(a.talent.str + 0.2 * d).toFixed(2); a.talent.vit = +(a.talent.vit + 0.2 * d).toFixed(2); } },
  { id: 'longevity', name: 'อายุยืน', desc: 'อายุขัยเพิ่ม', apply: (a, d) => { a.lifeBonus = (a.lifeBonus || 0) + 10 * d; } },
  { id: 'memory', name: 'ความทรงจำนิรันดร์', desc: 'พกความรู้ไปชาติหน้าได้เพิ่ม', apply: (a, d) => { a.keepBonus = (a.keepBonus || 0) + d; } },
  { id: 'crystal', name: 'ผลึกศักดิ์สิทธิ์', desc: 'ผลึกธาตุหายาก', apply: (a, d) => { const e = pick(['Fe', 'S', 'Ca', 'Si', 'Na', 'N', 'C']); a.bag[`ผลึกธาตุ ${e}`] = (a.bag[`ผลึกธาตุ ${e}`] || 0) + 2 * d; } },
  { id: 'fame', name: 'เกียรติยศผู้กอบกู้', desc: 'ชื่อเสียงพุ่ง', apply: (a, d) => { a.rep += 10 * d; } }
];
function realmLog(text, color = '#e9d5ff') {
  realmLogs.unshift(`วันที่ ${simDay}: ${text}`); if (realmLogs.length > 30) realmLogs.length = 30;
}
// Write a log line into another (not loaded) realm's chronicle
function logToRealm(idx, msg, color) {
  if (idx === tickingRealm) { addLog(msg, color); return; }
  const st = realms[idx].state;
  st.logBuffer = st.logBuffer || [];
  st.logBuffer.unshift({ t: `[วันที่ ${st.simDay}]`, msg, color: color || '#e2e8f0' });
  if (st.logBuffer.length > 45) st.logBuffer.length = 45;
}
function realmRawSet(st) {
  const set = new Set(Object.values(st.ZONES).flatMap(z => z.res));
  st.faunaSpecies.forEach(f => Object.keys(f.lootMat).forEach(m => set.add(m)));
  return set;
}
function propSimilarity(x, y) {
  const A = propsOf(x), B = propsOf(y);
  const keys = new Set(Object.keys(A).concat(Object.keys(B)));
  let sc = 0; keys.forEach(k => { if (k === 'elem') return; if (A[k] && B[k]) sc += 2; else sc -= 1; });
  if (A.elem && A.elem === B.elem) sc += 2;
  return sc;
}
// Rewrite known recipes with the closest local materials of the target realm
function buildEquivalents(agent, targetState) {
  const local = [...realmRawSet(targetState)];
  const isProduct = n => !!keyByName(n);
  const pickLocal = n => (local.includes(n) || isProduct(n)) ? n : local.slice().sort((p, q) => propSimilarity(n, q) - propSimilarity(n, p))[0];
  const out = [];
  Object.values(agent.know).forEach(e => {
    if (!e.out || String(e.out).startsWith('dyn:')) return;
    const a2 = pickLocal(e.a), b2 = pickLocal(e.b);
    if (a2 === e.a && b2 === e.b) return;
    if (!out.some(x => x.a === a2 && x.b === b2 && x.m === e.m)) out.push({ a: a2, b: b2, m: e.m, orig: outName(e.out) });
  });
  return out;
}
function gateOf(st) { return st.shelters.find(x => x.station === 'gate'); }

function makeRealmState(def, idx) {
  restoreRealm(JSON.parse(JSON.stringify(INITIAL_REALM)));
  worldSeed = Math.floor(Math.random() * 1e9);
  ZONES = JSON.parse(JSON.stringify(BASE_ZONES));
  Object.values(ZONES).forEach(z => { z.res = z.res.map(r => def.sub[r] || r); });
  zoneTerrainGrid = {}; zoneNodes = {}; logBuffer = [];
  if (def.winter) currentSeasonIdx = 3;
  // founders
  if (def.empty) { aiAgents = []; usedNames = []; }
  else {
    aiAgents = def.founders.map(([name, gender], i) => {
      const a = newAgent({ name, gender, age: 23 + i, zone: 'C1', home: 'C1', x: 36 + i * 6, y: 30 });
      a.food = 14; return a;
    });
    aiAgents[0].rel[aiAgents[1].id] = 50; aiAgents[1].rel[aiAgents[0].id] = 50;
    Object.entries(START_ITEMS).forEach(([n, q]) => { const nn = def.sub[n] || n; aiAgents[0].bag[nn] = Math.ceil(q / 2); aiAgents[1].bag[nn] = Math.floor(q / 2); });
    usedNames = def.founders.map(f => f[0]);
  }
  // the gate God placed in this realm
  buildZoneTerrain(def.gate);
  const gp = findValidTile(def.gate, false);
  shelters.push({ name: `เกจแห่งพระเจ้า (${def.gate})`, sprite: 'st_gate', zone: def.gate, x: gp.x, y: gp.y, station: 'gate', owner: null, ownerName: 'พระเจ้า', public: true, permits: [] });
  if (def.empty) {
    // ruins of the people who once lived here
    shelters.push({ name: 'กองไฟเก่าที่มอดดับ (C3)', sprite: 'st_fire', zone: 'C3', x: 40, y: 34, station: 'campfire', owner: null, ownerName: 'ส่วนรวม', public: true, permits: [] });
    faunaSpecies.forEach(f => { if (f.predator) { f.zp = {}; f.zones.forEach(() => {}); } });
    faunaSpecies.find(f => f.id === 'f_wolf').zp = { W3: 4, S3: 3 }; faunaSpecies.forEach(syncFauna);
    addLog(`🌫️ ดินแดนนี้เคยมีผู้คนอาศัย แต่บัดนี้ไม่เหลือใครแล้ว...`, '#94a3b8');
  } else addLog(`${def.icon} ดินแดน "${def.name}" ถือกำเนิด กฎธรรมชาติถูกสุ่มขึ้นใหม่ ผู้คนยังไม่รู้อะไรเลย`, '#38bdf8');
  return captureRealm();
}

// Runs while realm `i` is loaded: volunteers walk to the gate, travellers cross, beasts slip through
function realmTravelTick(i) {
  const def = realms[i].def;
  const gate = gateOf(captureRealm());
  if (!gate) return;
  // 1) Saviors answer God's call (only from realms that can spare people)
  const meBeingSaved = godRequests.some(q => q.realm === i && q.status !== 'done');
  godRequests.filter(q => q.status !== 'done' && q.realm !== i && !meBeingSaved).forEach(q => {
    const target = realms[q.realm].state;
    const heading = aiAgents.filter(a => a.journey && a.journey.to === q.realm).length;
    // A realm only sends people it can spare
    if (target.aiAgents.length + heading >= 8 || aiAgents.length - heading < 10) return;
    const want = { 'ชาย': 0, 'หญิง': 0 };
    target.aiAgents.concat(aiAgents.filter(a => a.journey && a.journey.to === q.realm)).forEach(a => { if (a.age >= 15) want[a.gender]++; });
    const lacking = want['ชาย'] <= want['หญิง'] ? 'ชาย' : 'หญิง';
    aiAgents.filter(a => a.age >= 18 && a.age <= 55 && !a.journey && !a.questId && a.saviorOf === undefined && !(villageOf(a) && villageOf(a).chiefId === a.id)).forEach(a => {
      const called = a.homeRealm === q.realm;
      const willing = called || a.kind >= 0.45 || a.rep >= 3;
      if (!willing) return;
      const p = (called ? 0.06 : 0.008) * (a.gender === lacking ? 2 : 1);
      if (Math.random() > p) return;
      a.journey = { to: q.realm, savior: q.id };
      a.bubble = called ? `🌫️ เสียงในฝันเรียกให้กลับไปบ้านเกิด ${realms[q.realm].def.name}` : `🙏 ได้ยินคำขอพระเจ้า จะไปกอบกู้ ${realms[q.realm].def.name}`;
      addLog(`🙏 [ผู้กอบกู้] ${a.name} ตอบรับคำขอของพระเจ้า ออกเดินทางไปเกจเพื่อกอบกู้ "${realms[q.realm].def.name}"${called ? ' (วิญญาณเคยอยู่ที่นั่นในชาติก่อน)' : ''}`, '#e9d5ff');
    });
  });
  // 2) Crowded people may emigrate through the gate when the whole realm is packed
  if (aiAgents.length >= 40) aiAgents.filter(a => a.age >= 18 && (a.crowd || 0) >= 3 && !a.journey && a.saviorOf === undefined && Math.random() < 0.05).forEach(a => {
    const to = realms.map((r, j) => [j, r.state.aiAgents.length]).filter(([j]) => j !== i).sort((x, y) => x[1] - y[1])[0];
    if (to) { a.journey = { to: to[0] }; a.bubble = `🧳 จะย้ายไปดินแดน ${realms[to[0]].def.name}`; }
  });
  // 3) Travellers walk to the gate and cross
  aiAgents.filter(a => a.journey).slice().forEach(a => {
    if (a.zone === gate.zone && Math.hypot(a.x - gate.x, a.y - gate.y) <= 10) crossRealm(a, a.journey.to, i);
    else if (!a.goal || !a.goal.gate) a.goal = { zone: gate.zone, x: gate.x, y: gate.y, ttl: 80, quest: true, gate: true };
  });
  // 4) Beasts wander through the gate (once a day)
  if (simMinutes === 0) faunaSpecies.filter(f => f.predator && (f.zp[gate.zone] || 0) > 0).forEach(f => {
    if (Math.random() > 0.08) return;
    const j = pick(realms.map((r, k) => k).filter(k => k !== i));
    const tst = realms[j].state, tg = gateOf(tst);
    if (!tg || tg.zone === START_ZONE) return;
    f.zp[gate.zone]--; syncFauna(f);
    const tf = tst.faunaSpecies.find(x => x.id === f.id);
    tf.zp[tg.zone] = (tf.zp[tg.zone] || 0) + 1;
    const myTr = f.tr && f.tr[gate.zone];
    if (myTr && !(tf.tr && tf.tr[tg.zone])) { tf.tr = tf.tr || {}; tf.tr[tg.zone] = Object.assign(JSON.parse(JSON.stringify(myTr)), { stress: (myTr.stress || 0) + 4 }); }
    syncFauna(tf);
    animalLog(`🌀 ${f.name} 1 ตัว หลงเข้าเกจหายไปยังดินแดน "${realms[j].def.name}"`, '#f0abfc');
    logToRealm(j, `🐾 🌀⚠️ [สัตว์ต่างถิ่น!] ${f.name}จากดินแดน "${def.name}" โผล่ออกมาจากเกจที่ ${tg.zone}!`, '#fb7185');
    realmLog(`⚠️ ${f.name}จาก ${def.name} ข้ามเกจไปยัง ${realms[j].def.name}`);
  });
}

function crossRealm(a, j, i) {
  const target = realms[j].state;
  const tg = gateOf(target);
  // family follows: devoted partner + small children
  const partner = aiAgents.find(o => o !== a && o.age >= 18 && o.gender !== a.gender && rel(a, o) >= 50 && rel(o, a) >= 40 && !o.journey);
  const group = [a].concat(partner ? [partner] : []);
  aiAgents.filter(k => k.age < 15 && group.some(g => k.guardian === g.id)).forEach(k => group.push(k));
  const req = a.journey && a.journey.savior ? godRequests.find(q => q.id === a.journey.savior) : null;
  group.forEach(m => {
    // leave this realm cleanly
    villages.forEach(v => { v.members = v.members.filter(id => id !== m.id); });
    quests.forEach(q => { if (q.helperId === m.id && q.status === 'accepted') { q.status = 'open'; q.helperId = null; q.helperName = null; } if (q.giverId === m.id && (q.status === 'open' || q.status === 'accepted')) q.status = 'cancelled'; });
    toolItems.forEach(t => { if (t.owner === m.id) { t.owner = null; t.ownerName = 'ส่วนรวม'; t.public = true; } });
    syncToolStock();
    // arrive in the new realm
    Object.assign(m, { zone: tg.zone, home: tg.zone, x: clampC(tg.x + 3), y: clampC(tg.y + 3), villageId: null, goal: null, questId: null, session: null,
      gatherT: null, journey: null, wantItem: null, guardian: m.guardian, crowd: 0, buildFor: null });
    if (m.age >= 15) m.role = 'หาเลี้ยงชีพเอง';
    m.realmTrail = (m.realmTrail || [realms[i].def.name]).concat([realms[j].def.name]);
    m.equivTry = buildEquivalents(m, target);
    if (req) { m.saviorOf = j; if (!req.saviors.some(x => x.id === m.id)) req.saviors.push({ id: m.id, name: m.name, from: realms[i].def.name }); }
    m.bubble = `🌀 มาถึงดินแดนใหม่`;
    target.aiAgents.push(m);
    if (!target.usedNames.includes(m.name)) target.usedNames.push(m.name);
  });
  aiAgents = aiAgents.filter(x => !group.includes(x));
  const names = group.map(m => m.name).join(', ');
  addLog(`🌀 [ข้ามดินแดน] ${names} ก้าวเข้าเกจ มุ่งหน้าสู่ "${realms[j].def.name}"`, '#f0abfc');
  logToRealm(j, `🌀 [ผู้มาเยือน] ${names} ก้าวออกมาจากเกจ จากดินแดน "${realms[i].def.name}"${req ? ' ในฐานะผู้กอบกู้ที่พระเจ้าส่งมา' : ''}`, '#f0abfc');
  const eq = group.reduce((t, m) => t + m.equivTry.length, 0);
  if (eq) logToRealm(j, `🔁 วัตถุดิบที่นี่ไม่เหมือนบ้านเก่า ${names} ต้องลองสูตรเทียบเคียง ${eq} สูตรจากความรู้เดิม`, '#c4b5fd');
  realmLog(`🌀 ${names} ข้ามจาก ${realms[i].def.name} ไป ${realms[j].def.name}${req ? ' (ผู้กอบกู้)' : ''}`);
}

// God watches all realms (runs after every realm ticked)
function godTick() {
  realms.forEach((r, i) => {
    const st = r.state, pop = st.aiAgents.length;
    let req = godRequests.find(q => q.realm === i && q.status !== 'done');
    if (pop === 0 && !req) {
      req = { id: 'g' + Date.now() + i, realm: i, status: 'open', openedDay: st.simDay, saviors: [], streak: 0, lastDay: st.simDay };
      godRequests.push(req);
      realmLog(`📜 [คำขอจากพระเจ้า] ดินแดน "${r.def.name}" ล่มสลาย ไม่เหลือผู้ใดเลย พระเจ้าตามหา "ผู้กอบกู้"!`);
      realms.forEach((x, k) => logToRealm(k, `📜✨ [คำขอจากพระเจ้า] ดินแดน "${r.def.name}" ล่มสลายแล้ว ผู้ใดยอมไปกอบกู้ จะได้รับรางวัล (ความยาก ${'★'.repeat(r.def.diff)})`, '#fde68a'));
      // souls that were waiting there drift to living realms, still remembering home
      const living = realms.map((x, k) => k).filter(k => realms[k].state.aiAgents.length > 0);
      if (living.length && st.souls.length) {
        st.souls.forEach(sl => { sl.homeRealm = i; realms[pick(living)].state.souls.push(sl); });
        realmLog(`🕊️ วิญญาณ ${st.souls.length} ดวงจาก ${r.def.name} ลอยไปรอเกิดในดินแดนอื่น พร้อมความผูกพันกับบ้านเกิด`);
        st.souls = [];
      }
    }
    if (!req) return;
    if (pop > 0 && req.status === 'open') { req.status = 'saving'; realmLog(`🌱 ผู้กอบกู้มาถึง "${r.def.name}" แล้ว เริ่มฟื้นฟูดินแดน`); }
    if (pop === 0 && req.status === 'saving') { req.status = 'open'; req.streak = 0; realmLog(`💀 ผู้กอบกู้ที่ "${r.def.name}" ล้มเหลว ดินแดนร้างอีกครั้ง พระเจ้ายังรอผู้กอบกู้`); }
    if (st.simDay !== req.lastDay) {
      req.lastDay = st.simDay;
      req.streak = pop > CROWD_LIMIT ? req.streak + 1 : 0;
      if (req.streak >= 30) {
        req.status = 'done'; req.doneDay = st.simDay;
        const alive = req.saviors.map(sv => st.aiAgents.find(a => a.id === sv.id)).filter(Boolean);
        const lines = alive.map(a => {
          // chosen reward: what this AI values most; random reward from the pool
          const choose = a.age >= 45 ? 'longevity' : (a.pastLives || []).length ? 'memory' : a.talent.int < a.talent.str ? 'wisdom' : 'might';
          const c = GOD_REWARDS.find(g => g.id === choose);
          const rnd = pick(GOD_REWARDS.filter(g => g.id !== choose));
          c.apply(a, r.def.diff); rnd.apply(a, r.def.diff);
          a.rep += 5;
          return `${a.name}: เลือก "${c.name}" + สุ่มได้ "${rnd.name}"`;
        });
        realmLog(`🏆 [กอบกู้สำเร็จ] "${r.def.name}" มีประชากรเกิน ${CROWD_LIMIT} คนครบ 30 วัน! ${lines.join(' · ') || 'ผู้กอบกู้ล่วงลับไปหมดแล้ว'}`);
        realms.forEach((x, k) => logToRealm(k, `🏆✨ [พระเจ้าพอพระทัย] ดินแดน "${r.def.name}" ได้รับการกอบกู้! ${lines.join(' · ')}`, '#fde68a'));
      }
    }
  });
}

function tickAllRealms() {
  realms[activeRealm].state = captureRealm();
  for (let i = 0; i < realms.length; i++) {
    tickingRealm = i;
    bgTick = i !== activeRealm;
    restoreRealm(realms[i].state);
    runAutonomousStep();
    realmTravelTick(i);
    realms[i].state = captureRealm();
  }
  tickingRealm = activeRealm; bgTick = false;
  godTick();
  restoreRealm(realms[activeRealm].state);
  updateHudChips(); renderAllUI(); drawCanvas();
  if (document.getElementById('lobby').classList.contains('open')) renderLobby();
}

function switchRealm(i) {
  realms[activeRealm].state = captureRealm();
  activeRealm = i; tickingRealm = i;
  restoreRealm(realms[i].state);
  const bar = document.getElementById('log-bar');
  bar.innerHTML = logBuffer.map(l => `<div class="log-entry" style="color:${l.color}">${l.t} ${l.msg}</div>`).join('');
  const banner = document.getElementById('disaster-banner');
  banner.style.display = activeDisaster ? 'block' : 'none';
  if (activeDisaster) banner.innerText = `🚨 ${activeDisaster.name}`;
  closeLobby();
  switchZone(currentZoneId);
  updateHudChips();
  renderAllUI();
}

function realmStatus(i) {
  const st = realms[i].state, pop = st.aiAgents.length;
  const req = godRequests.find(q => q.realm === i && q.status !== 'done');
  if (pop === 0) return ['💀 ล่มสลาย', '#ff5a6e'];
  if (req) return [`🌱 กำลังกอบกู้ ${req.streak}/30 วัน`, '#a78bfa'];
  if (pop < 6) return ['⚠️ ลำบาก', '#f5a524'];
  return ['🌟 รุ่งเรือง', '#6ee7a8'];
}
function renderLobby() {
  realms[activeRealm].state = captureRealm();
  const reqs = godRequests.filter(q => q.status !== 'done');
  document.getElementById('lobby-requests').innerHTML = reqs.length ? reqs.map(q => {
    const r = realms[q.realm];
    return `<div class="card" style="border-color:#fde68a; background:linear-gradient(180deg, rgba(253,230,138,.18), rgba(28,23,64,.8)) !important;">
      <div class="card-title"><span style="color:#fde68a;">📜✨ คำขอจากพระเจ้า: ตามหา "ผู้กอบกู้"</span><span class="tag tag-warn">${'★'.repeat(r.def.diff)}</span></div>
      <div>ดินแดน <b>${r.def.icon} ${r.def.name}</b> ${q.status === 'open' ? 'ล่มสลาย ไม่เหลือผู้ใด' : `กำลังถูกกอบกู้ · ประชากรเกิน ${CROWD_LIMIT} ต่อเนื่อง <b>${q.streak}/30</b> วัน`}</div>
      <div style="font-size:11px; color:var(--muted); margin-top:3px;">รางวัล: เลือกได้ 1 + สุ่ม 1 (ระดับตามความยาก) · ผู้กอบกู้ต้องเกิดในดินแดนอื่นก่อน แล้วเดินผ่านเกจมา</div>
      ${q.saviors.length ? `<div style="font-size:11px; margin-top:3px;">🙏 ผู้กอบกู้: ${q.saviors.map(s => `${s.name} (จาก${s.from})`).join(', ')}</div>` : ''}
    </div>`;
  }).join('') : '';
  document.getElementById('lobby-realms').innerHTML = realms.map((r, i) => {
    const st = r.state, [label, color] = realmStatus(i);
    const travellers = st.aiAgents.filter(a => a.journey).length;
    return `<div class="card realm-card ${i === activeRealm ? 'here' : ''}">
      <div class="card-title"><span style="font-size:16px;">${r.def.icon} ${r.def.name}</span><span class="tag" style="background:rgba(0,0,0,.3); color:${color}; border:1px solid ${color};">${label}</span></div>
      <div style="font-size:12px;">ความยาก ${'★'.repeat(r.def.diff)}${'☆'.repeat(3 - r.def.diff)} · วันที่ ${st.simDay} · ${SEASONS[st.currentSeasonIdx].name}</div>
      <div style="font-size:12px; margin-top:3px;">👥 ${st.aiAgents.length} คน · 🏛️ ${st.villages.length} หมู่บ้าน · 🌳 เทค ${Object.keys(st.techDiscovered).length}/10 · 🕊️ วิญญาณรอเกิด ${st.souls.length}${travellers ? ` · 🧳 กำลังเดินไปเกจ ${travellers}` : ''}</div>
      <div style="font-size:11px; color:var(--muted); margin-top:3px;">🌀 เกจอยู่ที่ ${r.def.gate} · วัตถุดิบเฉพาะถิ่น: ${Object.values(r.def.sub).slice(0, 4).join(', ') || 'ดั้งเดิม'}</div>
      <div style="display:flex; gap:8px; margin-top:8px;">
        <button class="gbtn ${i === activeRealm ? 'ghost' : 'amber'}" style="flex:1;" onclick="switchRealm(${i})">${i === activeRealm ? '📍 อยู่ที่นี่' : '🌀 เข้าดินแดนนี้'}</button>
        ${st.aiAgents.length ? `<button class="gbtn ember" onclick="testCollapse(${i})" title="ทดสอบ">☠️ ทดสอบล่มสลาย</button>` : ''}
      </div></div>`;
  }).join('');
  document.getElementById('lobby-log').innerHTML = realmLogs.slice(0, 15).map(t => `<div class="card" style="padding:5px 9px; font-size:11px;">${t}</div>`).join('') || '<div class="sec-note">ยังไม่มีเหตุการณ์ข้ามดินแดน</div>';
}
function openLobby() { renderLobby(); document.getElementById('lobby').classList.add('open'); }
function closeLobby() { document.getElementById('lobby').classList.remove('open'); }
function testCollapse(i) {
  if (!confirm(`ทดสอบ: ทำให้ "${realms[i].def.name}" ล่มสลาย (ทุกคนในดินแดนนี้ตาย)?`)) return;
  realms[activeRealm].state = captureRealm();
  realms[i].state.aiAgents = [];
  realms[i].state.villages = [];
  realmLog(`☠️ (ทดสอบ) โรคระบาดกวาดล้าง "${realms[i].def.name}" จนไม่เหลือผู้ใด`);
  restoreRealm(realms[activeRealm].state);
  godTick();
  restoreRealm(realms[activeRealm].state);
  renderLobby(); renderAllUI(); drawCanvas();
}

// ==========================================
// REINCARNATION: the dead may choose rebirth, carrying a little knowledge.
// Past-life memories are a secret only the soul knows; telling anyone means permanent death by the gods.
// ==========================================
let souls = [];   // waiting to be reborn: [{pastLives:[...], pastKnow:{sig:entry}, kept:[entries], talentEcho}]
function keepCount(level) { return Math.max(1, Math.ceil(level / 10)); }   // Lv1-10 → 1, Lv11-20 → 2, ...
function chooseKept(a, n) {
  const oks = Object.values(a.know).filter(e => e.out && !String(e.out).startsWith('dyn:novel'));
  const score = e => (PRODUCTS[e.out]?.kind === 'station' ? 30 : PRODUCTS[e.out]?.kind === 'tool' ? 20 : 0) + (e.practice || 0) * 2;
  const seen = new Set();
  return oks.sort((x, y) => score(y) - score(x)).filter(e => !seen.has(e.out) && seen.add(e.out)).slice(0, n);
}
function soulDecides(dead) {
  if (dead.noRebirth) return false;
  const lovedOnes = aiAgents.filter(o => o !== dead && rel(dead, o) >= 40).length;
  const p = 0.35 + Math.min(0.4, lovedOnes * 0.1) + (dead.age < 40 ? 0.2 : 0) - (dead.age >= 70 ? 0.15 : 0);
  return Math.random() < p;
}
function makeSoul(dead) {
  const level = agentLevel(dead);
  const kept = chooseKept(dead, keepCount(level) + (dead.keepBonus || 0));
  const pastKnow = Object.assign({}, dead.pastKnow || {});
  Object.entries(dead.know).forEach(([sg, e]) => { if (e.out) pastKnow[sg] = e; });
  const life = { name: dead.name, gen: dead.gen, age: dead.age, level, diedDay: simDay, role: dead.role, village: villageOf(dead)?.name || null, kept: kept.map(e => outName(e.out)) };
  return { pastLives: (dead.pastLives || []).concat([life]), pastKnow, kept, homeRealm: dead.homeRealm ?? null };
}
function giveSoul(baby, soul) {
  baby.pastLives = soul.pastLives;
  baby.pastKnow = soul.pastKnow;
  if (soul.homeRealm !== null && soul.homeRealm !== undefined) baby.homeRealm = soul.homeRealm;
  soul.kept.forEach(e => { baby.know[sigOf(e.a, e.b, e.m)] = Object.assign({}, e, { from: 'ชาติก่อน', day: simDay, practice: 0 }); });
  const last = soul.pastLives[soul.pastLives.length - 1];
  addLog(`🔮 [กลับชาติมาเกิด] วิญญาณของ "${last.name}" (Lv.${last.level}) กลับมาเกิดเป็น "${baby.name}" พกความรู้ติดตัวมา ${soul.kept.length} อย่าง: ${last.kept.join(', ') || '-'} (เจ้าตัวรู้คนเดียว)`, '#d8b4fe');
}
// Each day a reborn soul may slip and tell someone about the past life → the gods end it forever
function secretTick() {
  aiAgents.filter(a => (a.pastLives || []).length && a.age >= 6).forEach(a => {
    const talk = 0.002 + st(a, 'cha') * 0.0004 + (a.age < 12 ? 0.003 : 0);
    const restraint = Math.min(0.85, st(a, 'int') * 0.03);
    if (Math.random() > talk * (1 - restraint)) return;
    const listener = aiAgents.filter(o => o !== a && o.zone === a.zone).sort((p, q) => rel(a, q) - rel(a, p))[0];
    if (!listener) return;
    const past = a.pastLives[a.pastLives.length - 1];
    addLog(`🗣️ ${a.name} เผลอเล่าให้ ${listener.name} ฟังว่าชาติก่อนตัวเองคือ "${past.name}"...`, '#fde68a');
    addLog(`⚡ [พระเจ้าลงทัณฑ์] ฟ้าผ่าลงกลางวัน ${a.name} สิ้นใจทันที วิญญาณดวงนี้จะไม่ได้เกิดใหม่อีกตลอดกาล`, '#fef08a');
    listener.bubble = '😨 เห็นฟ้าผ่าต่อหน้า!';
    a.noRebirth = true; a.hp = 0; a.smitten = true;
  });
}

function removeDead(deadList, causeText) {
  deadList.forEach(dead => {
    if (!dead.noRebirth && soulDecides(dead)) {
      souls.push(makeSoul(dead));
      addLog(`🕊️ วิญญาณของ ${dead.name} เลือกที่จะกลับมาเกิดใหม่บนเกาะ`, '#c4b5fd');
    } else if (!dead.smitten) addLog(`🌌 วิญญาณของ ${dead.name} เลือกพักผ่อนตลอดไป`, '#94a3b8');
    addLog(causeText(dead), dead.hp <= 0 ? '#ef4444' : '#94a3b8');
    villages.forEach(v => { v.members = v.members.filter(id => id !== dead.id); });
    aiAgents.forEach(o => { if (rel(o, dead) >= 30) { o.bubble = `😢 คิดถึง${dead.name}`; o.hunger = Math.min(100, o.hunger + 10); } if (o.rel) delete o.rel[dead.id]; });
    quests.filter(q => q.helperId === dead.id && q.status === 'accepted').forEach(q => { q.status = 'open'; q.helperId = null; q.helperName = null; });
    // Inheritance: children/closest friend get the belongings, else they become communal
    const living = aiAgents.filter(o => o !== dead && !deadList.includes(o));
    const heir = living.filter(o => rel(dead, o) >= 30).sort((p, q) => rel(dead, q) - rel(dead, p))[0];
    const owned = shelters.filter(x => x.owner === dead.id).concat(toolItems.filter(x => x.owner === dead.id));
    owned.forEach(x => { if (heir) { x.owner = heir.id; x.ownerName = heir.name; } else { x.owner = null; x.ownerName = 'ส่วนรวม'; x.public = true; } });
    if (bagCount(dead)) { const dv = villageOf(dead); Object.entries(dead.bag).forEach(([n, q]) => heir ? put(heir, n, q) : toStore(dv, n, q)); if (heir) heir.food = (heir.food || 0) + (dead.food || 0); else if (dv) dv.food += dead.food || 0; addOwnLog(heir ? `🎒 [มรดก] ของในกระเป๋า ${dead.name} ตกเป็นของ ${heir.name}` : dv ? `🎒 ของในกระเป๋า ${dead.name} เข้าโกดัง${dv.name}` : `🎒 ของของ ${dead.name} ถูกทิ้งไว้ไม่มีใครรับ`, '#c4b5fd'); dead.bag = {}; }
    if (owned.length) addOwnLog(heir ? `📜 [มรดก] ของ ${dead.name} ${owned.length} ชิ้น ตกเป็นของ ${heir.name}` : `📜 [มรดก] ของ ${dead.name} ${owned.length} ชิ้น กลายเป็นของส่วนรวม`, '#c4b5fd');
    const others = aiAgents.filter(a => a !== dead && !deadList.includes(a));
    const lostKeys = new Set();
    Object.values(dead.know).forEach(e => {
      if (e.out && !others.some(o => Object.values(o.know).some(x => x.out === e.out))) lostKeys.add(e.out);
    });
    if (lostKeys.size) {
      addLog(`📉 [ความรู้สูญหาย] ไม่มีใครบนเกาะรู้วิธีทำ ${[...lostKeys].map(outName).join(', ')} อีกแล้ว เพราะ ${dead.name} ยังไม่ได้สอนใคร`, '#f87171');
    }
  });
  aiAgents = aiAgents.filter(a => !deadList.includes(a));
}

// ==========================================
// 6. SAVE / LOAD
// ==========================================
function saveGameState() {
  try {
    if (alchemyLogs.length > 40) alchemyLogs.length = 40;
    if (huntLogs.length > 30) huntLogs.length = 30;
    if (aiCrisisProposals.length > 15) aiCrisisProposals.length = 15;
    realms[activeRealm].state = captureRealm();
    const data = { v: 20, activeRealm, godRequests, realmLogs, realms: realms.map(r => ({ def: r.def, state: Object.assign({}, r.state, { zoneTerrainGrid: {}, zoneNodes: {} }) })) };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    document.getElementById('save-status').innerText = `💾 เซฟแล้ว · ${realms.length} ดินแดน`;
  } catch (e) {
    console.warn('Storage full, trimming logs:', e);
    rndTrials.length = Math.min(rndTrials.length, 15);
    teachLogs.length = Math.min(teachLogs.length, 10);
  }
}

function loadGameState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const d = JSON.parse(raw);
    if (d.v !== 20) return false;
    realms = d.realms; godRequests = d.godRequests || []; realmLogs = d.realmLogs || [];
    activeRealm = d.activeRealm || 0;
    realms.forEach(r => {
      r.state.aiAgents = (r.state.aiAgents || []).map(ensureAgent);
      r.state.faunaSpecies.forEach(initFauna);
    });
    restoreRealm(realms[activeRealm].state);
    return true;
  } catch (e) { console.warn(e); return false; }
}

function resetSaveData() {
  if (confirm('ต้องการล้างเซฟและเริ่มโลกใหม่หรือไม่? (กฎธรรมชาติของโลกใหม่จะถูกสุ่มใหม่)')) {
    localStorage.removeItem(SAVE_KEY);
    location.reload();
  }
}

function isTechUnlocked(nodeId) { return !!techDiscovered[nodeId]; }

// ==========================================
// 7. TERRAIN
// ==========================================
function findValidTile(zId, isAquatic) {
  buildZoneTerrain(zId);
  const grid = zoneTerrainGrid[zId];
  const candidates = [];
  for (let y = 6; y < 74; y++) for (let x = 6; x < 74; x++) {
    const inWater = WATER.includes(grid[y][x]);
    if (isAquatic ? inWater : !inWater) candidates.push({ x, y });
  }
  if (!candidates.length) return { x: 40, y: 40 };
  return pick(candidates);
}

function buildZoneTerrain(zId) {
  if (zoneTerrainGrid[zId]) return;
  const z = ZONES[zId];
  const grid = Array.from({ length: 80 }, () => Array(80).fill('grass'));
  for (let y = 0; y < 80; y++) for (let x = 0; x < 80; x++) {
    const d = Math.hypot(x - 40, y - 40);
    if (z.geo === 'mountain_cave' || z.geo === 'mountain_cliff' || z.geo === 'mountain_peak') {
      grid[y][x] = d < 18 ? 'mountain_peak' : d < 28 ? 'mountain_cliff' : d < 42 ? 'hill_slope' : 'grass';
    } else if (z.geo === 'waterfall_river') {
      if (y < 22 && x > 25 && x < 55) grid[y][x] = 'mountain_cliff';
      else if (Math.abs(x - (40 + Math.sin(y / 8) * 6)) < 6) grid[y][x] = 'river';
      else grid[y][x] = y < 38 ? 'hill_slope' : 'grass';
    } else if (z.geo === 'river_grassland') {
      const ry = 38 + Math.sin(x / 10) * 8;
      if (Math.abs(y - ry) < 6) grid[y][x] = 'river';
      else if (Math.abs(y - ry) < 9) grid[y][x] = 'sand_bank';
      else grid[y][x] = (x + y) % 7 === 0 ? 'tall_grass' : 'grass';
    } else if (z.geo === 'river_beach' || z.geo === 'beach_ocean') {
      if (x > 55) grid[y][x] = 'ocean';
      else if (x > 40) grid[y][x] = 'sand_bank';
      else if (z.geo === 'river_beach' && Math.abs(y - 40) < 6) grid[y][x] = 'river';
      else grid[y][x] = 'grass';
    } else if (z.geo === 'hill_grassland' || z.geo === 'hill_forest') {
      grid[y][x] = d < 25 ? 'hill_slope' : (z.geo === 'hill_forest' ? 'forest' : 'grass');
    } else if (z.geo === 'deep_forest') {
      grid[y][x] = (x * y) % 5 === 0 ? 'grass' : 'forest';
    } else if (z.geo === 'wetland') {
      grid[y][x] = Math.hypot(x - 35, y - 45) < 16 ? 'swamp_water' : 'mud_flat';
    } else {
      grid[y][x] = (x * 3 + y) % 9 === 0 ? 'tall_grass' : 'grass';
    }
  }
  zoneTerrainGrid[zId] = grid;
  const nodes = [];
  z.res.forEach(rName => {
    const isWaterRes = /ปลา|กุ้ง|ปะการัง|หอยมือเสือ/.test(rName);
    const sp = isWaterRes ? 'fish' : (rName.includes('ไผ่') ? 'res_bamboo' : (/ไม้|กล้วย|มะพร้าว/.test(rName) ? 'res_tree' : 'res_rock'));
    for (let i = 0; i < 3; i++) { const pos = findValidTile(zId, isWaterRes); nodes.push({ name: rName, sprite: sp, x: pos.x, y: pos.y }); }
  });
  zoneNodes[zId] = nodes;
}

// ==========================================
// 8. CORE SIMULATION
// ==========================================
function isNightTime() { const h = Math.floor(simMinutes / 60) % 24; return h >= 18 || h < 6; }

function addLog(msg, color = '#e2e8f0') {
  const h = String(Math.floor(simMinutes / 60) % 24).padStart(2, '0');
  logBuffer.unshift({ t: `[วันที่ ${simDay} ${h}:00]`, msg, color });
  if (logBuffer.length > 45) logBuffer.length = 45;
  if (bgTick) return;
  const logBar = document.getElementById('log-bar');
  const div = document.createElement('div');
  div.className = 'log-entry';
  div.style.color = color;
  div.innerHTML = `[วันที่ ${simDay} ${h}:00] ${msg}`;
  logBar.prepend(div);
  if (logBar.children.length > 45) logBar.lastChild.remove();
}

function getAgeStage(age) {
  if (age < 15) return { label: 'เด็ก', sprite: 'ai_child', color: '#4ade80' };
  if (age >= 55) return { label: 'ผู้สูงอายุ', sprite: 'ai_elder', color: '#facc15' };
  return { label: 'ผู้ใหญ่', sprite: null, color: '#38bdf8' };
}

function triggerSeasonalDisaster() {
  const season = SEASONS[currentSeasonIdx];
  let d = { name: '⛈️ พายุฝนฟ้าคะนอง', desc: 'พายุพัดกระหน่ำ เสบียง -8', foodLoss: 8, hpLoss: 10 };
  if (season.id === 'summer') d = { name: '🔥 คลื่นความร้อนและภัยแล้ง', desc: 'พืชผลเหี่ยวเฉา เสบียง -10', foodLoss: 10, hpLoss: 12 };
  else if (season.id === 'winter') d = { name: '❄️ พายุหิมะและลมหนาวจัด', desc: 'AI เสียพลังชีวิตจากความหนาว', foodLoss: 8, hpLoss: 15 };
  else if (season.id === 'spring') d = { name: '🌋 แผ่นดินไหวเขย่าเกาะ', desc: 'หินผาร่วงหล่น เปิดเผยชั้นแร่ใหม่', foodLoss: 5, hpLoss: 10 };

  activeDisaster = Object.assign({}, d, { remaining: 3 });
  aiAgents.forEach(a => { a.food = Math.max(0, (a.food || 0) - Math.ceil(d.foodLoss / 3)); });
  villages.forEach(v => { v.food = Math.max(0, v.food - d.foodLoss); });
  const wall = stationsOf('wall').length ? 0.3 : 1.0;
  aiAgents.forEach(a => { a.hp = Math.max(10, Math.round(a.hp - d.hpLoss * wall)); a.bubble = '⚠️ หลบภัยพิบัติ!'; gainExp(a, 'vit', 3); });
  if (season.id === 'spring') { const lucky = pick(aiAgents.filter(a => a.age >= 12)); if (lucky) { put(lucky, 'แร่เหล็กบึง', 2); put(lucky, 'กำมะถันดิบ', 2); } }

  const banner = bgTick ? { style: {} } : document.getElementById('disaster-banner');
  banner.style.display = 'block';
  banner.innerText = `🚨 ${d.name} — ${d.desc}${wall < 1 ? ' (กำแพงอิฐช่วยกันได้ 70%)' : ''}`;
  addLog(`🚨 [ภัยพิบัติตามฤดูกาล!] เกิด "${d.name}" (${d.desc})`, '#ef4444');
  generateCrisisProposal(d.name);
  renderAllUI();
}

function generateCrisisProposal(causeText) {
  if (aiCrisisProposals.filter(p => !p.applied).length >= 3) return;
  const templates = [
    { title: 'ระดมทีมล่าสัตว์และเก็บผลไม้ป่า', reason: `รับมือ "${causeText}" ด้วยการออกหาอาหารทั้งเกาะ`, effect: 'เสบียง +22 และสัตว์ฟื้นตัว +3', type: 'RANCH_FOOD' },
    { title: 'วางลอบดักปลาในแม่น้ำ E1/E2', reason: 'ปลาแพร่พันธุ์ทุกวัน ทดแทนเนื้อสัตว์ใหญ่ได้ทันที', effect: 'เสบียง +18 และเลือด AI +20', type: 'FISH_GATHER' },
    { title: 'พักฟื้นและซ่อมที่พักกันภัย', reason: 'ฟื้นฟูอาการบาดเจ็บและความหนาวของประชากร', effect: 'HP ทุกคน +35 และเสบียง +10', type: 'HEAL_REPAIR' }
  ];
  aiCrisisProposals.unshift(Object.assign({ id: 'sol_' + Date.now() + '_' + Math.floor(Math.random() * 1e6), applied: false }, pick(templates)));
}

function applyAISolution(id) {
  const sol = aiCrisisProposals.find(s => s.id === id);
  if (!sol || sol.applied) return;
  sol.applied = true;
  if (sol.type === 'RANCH_FOOD') { aiAgents.forEach(a => { a.food += 6; }); faunaSpecies.filter(isPrey).forEach(f => addAnimals(f, Math.min(3, f.maxPop - f.pop))); }
  else if (sol.type === 'FISH_GATHER') { aiAgents.forEach(a => { a.food += 5; }); aiAgents.forEach(a => { a.hp = Math.min(maxHp(a), a.hp + 20); }); }
  else { aiAgents.forEach(a => { a.food += 3; }); aiAgents.forEach(a => { a.hp = Math.min(maxHp(a), a.hp + 35); }); }
  addLog(`✅ [อนุมัติแผน] "${sol.title}" สำเร็จ! (${sol.effect})`, '#4ade80');
  renderAllUI();
}

function requestSynthesis() {
  const lab = stationsOf('lab')[0];
  if (!lab) { addLog('🔒 [ยังแปรธาตุไม่ได้] บนเกาะยังไม่มีห้องแล็บแปรธาตุ AI ต้องค้นพบวิธีสร้างเองก่อน', '#fbbf24'); return; }
  const adults = aiAgents.filter(a => a.age >= 15);
  if (!adults.length) { addLog('⚠️ ไม่มีผู้ใหญ่ที่จะไปทดลองได้', '#fbbf24'); return; }
  const r = adults.find(a => a.role.includes('วิจัย')) || adults[0];
  r.goal = { zone: lab.zone, x: lab.x, y: lab.y, method: 'synth', ttl: 40 };
  r.bubble = '🚶 ไปห้องแล็บ';
  addLog(`⚛️ สั่งให้ ${r.name} ไปทดลองแปรธาตุที่ ${lab.name}`, '#22d3ee');
}

function pickChildName(gender, gen) {
  const pool = gender === 'ชาย' ? MALE_NAMES : FEMALE_NAMES;
  const free = pool.filter(n => !usedNames.includes(n));
  let name = free.length ? pick(free) : `${pick(pool)} ${usedNames.length + 1}`;
  while (usedNames.includes(name)) name = `${pick(pool)} ${Math.floor(Math.random() * 900 + 100)}`;
  usedNames.push(name);
  return name;
}

function moveToward(a, gx, gy) {
  const step = Math.min(6, 2 + Math.floor(st(a, 'agi') / 8));
  const dx = Math.sign(gx - a.x) * step, dy = Math.sign(gy - a.y) * step;
  if (a.age >= 12 && Math.random() < 0.3) gainExp(a, 'agi', 0.15);
  const grid = zoneTerrainGrid[a.zone];
  const tries = [[dx, dy], [dx, 0], [0, dy], [Math.floor(Math.random() * 7) - 3, Math.floor(Math.random() * 7) - 3]];
  for (const [ox, oy] of tries) {
    const nx = clampC(a.x + ox), ny = clampC(a.y + oy);
    if (!WATER.includes(grid[ny][nx])) { a.x = nx; a.y = ny; return; }
  }
}

function travelToGoal(a) {
  const g = a.goal;
  if (a.zone !== g.zone) {
    if (Math.random() < 0.6) {
      const cur = ZONES[a.zone], tgt = ZONES[g.zone];
      const dr = Math.sign(tgt.r - cur.r), dc = Math.sign(tgt.c - cur.c);
      const next = dr !== 0 ? getZoneAt(cur.r + dr, cur.c) : getZoneAt(cur.r, cur.c + dc);
      if (next) { a.zone = next; buildZoneTerrain(next); const p = findValidTile(next, false); a.x = p.x; a.y = p.y; }
    }
  } else moveToward(a, g.x, g.y);
}
function atGoal(a) { return a.goal && a.zone === a.goal.zone && Math.hypot(a.x - a.goal.x, a.y - a.goal.y) <= 6; }

function stepFauna() {
  faunaSpecies.filter(f => (f.zp[currentZoneId] || 0) > 0).forEach(f => {
    const aquatic = f.sprite === 'fish';
    if (!f.zoneCoords) f.zoneCoords = {};
    if (!f.zoneCoords[currentZoneId]) f.zoneCoords[currentZoneId] = findValidTile(currentZoneId, aquatic);
    if (Math.random() < 0.6) {
      const cur = f.zoneCoords[currentZoneId];
      const nx = clampC(cur.x + Math.floor(Math.random() * 5) - 2);
      const ny = clampC(cur.y + Math.floor(Math.random() * 5) - 2);
      const inWater = WATER.includes(zoneTerrainGrid[currentZoneId][ny][nx]);
      if (aquatic ? inWater : !inWater) f.zoneCoords[currentZoneId] = { x: nx, y: ny };
    }
  });
}

// ==========================================
// STAMINA & SLEEP: everyone tires out and must rest at a shelter (or by a fire, or on the ground)
// ==========================================
const HUT_CAP = 4;
function isRestShelter(s) { return s.rest || (!s.station && (s.sprite || 'shelter_hut') === 'shelter_hut'); }
function restSpotIn(zone, a) {
  const huts = shelters.filter(s => s.zone === zone && isRestShelter(s) && (!s.owner || s.public || s.owner === a.id || (villageOf(a) && s.villageId === villageOf(a).id) || rel(a, byId(s.owner) || a) >= 40));
  const free = huts.filter(s => aiAgents.filter(o => o.sleepAt === s.name).length < HUT_CAP)
    .sort((p, q) => Math.hypot(a.x - p.x, a.y - p.y) - Math.hypot(a.x - q.x, a.y - q.y))[0];
  if (free) return { kind: 'bed', s: free, x: free.x + 1, y: free.y + 2 };
  const fire = stationInZone(zone, 'campfire');
  if (fire) return { kind: 'fire', s: fire, x: fire.x + 2, y: fire.y + 2 };
  return null;
}
function staminaDrain(a) {
  let d = a.age < 12 ? 2 : 3;
  if (a.session) d += 1.5;
  if (a.questId || (a.goal && a.goal.quest)) d += 1;
  if (a.hunger >= 70) d += 1.5;
  if (a.age >= 55) d += 1;
  return d * (1 - Math.min(0.4, st(a, 'vit') * 0.012));
}
function staminaTick() {
  const hr = Math.floor(simMinutes / 60) % 24;
  const lateNight = hr >= 21 || hr < 5, morning = hr >= 6 && hr < 18;
  aiAgents.forEach(a => {
    if (a.stamina === undefined) a.stamina = 100;
    if (a.age < 12) {                                   // small kids sleep with their guardian
      const g = byId(a.guardian);
      a.sleeping = !!(g && g.sleeping); a.sleepKind = g && g.sleepKind;
      if (a.sleeping) { a.zone = g.zone; a.x = Math.min(79, g.x + 1); a.y = Math.min(79, g.y + 1); }
      a.stamina = a.sleeping ? Math.min(100, a.stamina + 12) : Math.max(0, a.stamina - 2);
      if (a.sleeping) a.bubble = '😴 หลับอยู่ข้างผู้ปกครอง';
      return;
    }
    if (a.sleeping) {
      const rate = a.sleepKind === 'bed' ? 15 : a.sleepKind === 'fire' ? 10 : 6;
      a.stamina = Math.min(100, a.stamina + rate);
      a.hp = Math.min(maxHp(a), a.hp + (a.sleepKind === 'bed' ? 3 : 1));
      a.hunger = Math.max(0, a.hunger - 2);              // metabolism slows (hunger tick adds it back)
      const wake = (a.stamina >= 100 && !lateNight) || (a.stamina >= 70 && morning) || a.hunger >= 85;
      if (wake) {
        a.sleeping = false; a.sleepAt = null;
        a.bubble = a.sleepKind === 'bed' ? '🌅 ตื่นนอน สดชื่น!' : a.sleepKind === 'fire' ? '🌅 ตื่นข้างกองไฟ' : '🥱 ตื่นมาปวดหลัง นอนกับพื้น';
        if (a.sleepKind === 'ground') gainExp(a, 'vit', 0.5);
      } else a.bubble = a.sleepKind === 'bed' ? '😴 นอนหลับในที่พัก' : a.sleepKind === 'fire' ? '😴 นอนข้างกองไฟ' : '😪 นอนกับพื้น';
      return;
    }
    a.stamina = Math.max(0, a.stamina - staminaDrain(a));
    if (a.stamina <= 0) {                               // collapse where you stand
      a.sleeping = true; a.sleepKind = 'ground'; a.goal = null; a.session = null; a.gatherT = null;
      a.hp = Math.max(1, a.hp - 4);
      a.bubble = '😵 หมดแรงล้มหลับ!';
      addLog(`😵 [หมดแรง] "${a.name}" ทำงานหนักจนล้มหลับกลางทาง HP -4`, '#fb923c');
      return;
    }
    const tired = a.stamina < 25 || (lateNight && a.stamina < 85) || ((a.warmth ?? 100) < 40 && !morning);
    if (!tired) { a.wantRest = false; a.restWait = 0; return; }
    a.wantRest = true; a.restWait = (a.restWait || 0) + 1;
    if (a.goal && a.goal.gate) return;                  // finish a realm crossing first
    const spot = restSpotIn(a.zone, a);
    if (spot && Math.hypot(a.x - spot.x, a.y - spot.y) > 3 && a.restWait <= 4) { a.goal = null; a.session = null; a.gatherT = null; for (let k = 0; k < 4; k++) moveToward(a, spot.x, spot.y); a.bubble = spot.kind === 'bed' ? `🥱 เหนื่อยแล้ว กลับไปพักที่${spot.s.name.split(' (')[0]}` : '🥱 เหนื่อยแล้ว ไปนอนข้างกองไฟ'; return; }
    // arrived (or nowhere to go): sleep
    a.sleeping = true; a.goal = null; a.session = null; a.gatherT = null;
    const near = spot && Math.hypot(a.x - spot.x, a.y - spot.y) <= 3;
    a.sleepKind = near ? spot.kind : 'ground'; a.sleepAt = near && spot.kind === 'bed' ? spot.s.name : null; a.restWait = 0;
    if (near) { a.x = spot.x + Math.floor(Math.random() * 3) - 1; a.y = spot.y + Math.floor(Math.random() * 2); }
    // nowhere to sleep? build a simple lean-to if you carry enough sticks
    if (!near && (a.bag || {})['กิ่งไม้แห้ง'] >= 3 && !shelters.some(s => s.zone === a.zone && isRestShelter(s))) {
      a.bag['กิ่งไม้แห้ง'] -= 3;
      const hut = { id: 'hut_' + Date.now().toString(36) + Math.floor(Math.random() * 1e4), name: `เพิงพักของ${a.name}`, sprite: 'shelter_hut', zone: a.zone, x: Math.max(1, a.x - 1), y: Math.max(1, a.y - 2), station: null, rest: true, owner: a.id, ownerName: a.name, public: true, villageId: villageOf(a) ? villageOf(a).id : null };
      shelters.push(hut);
      a.sleepKind = 'bed'; a.sleepAt = hut.name;
      gainExp(a, 'dex', 1);
      addLog(`🛖 [สร้างที่พัก] "${a.name}" เอากิ่งไม้มาทำเพิงพักที่ ${ZONES[a.zone].name} ใครเหนื่อยก็มานอนได้`, '#a3e635');
    }
  });
}

// ==========================================
// TEMPERATURE & WEATHER: cold nights, rain and winter can kill people sleeping outside
// ==========================================
const WEATHER = {
  clear:  { icon: '☀️', name: 'ฟ้าใส', dt: 0, wet: 0 },
  cloudy: { icon: '⛅', name: 'เมฆครึ้ม', dt: -2, wet: 0 },
  rain:   { icon: '🌧️', name: 'ฝนตก', dt: -5, wet: 1 },
  storm:  { icon: '⛈️', name: 'พายุฝน', dt: -8, wet: 2 },
  snow:   { icon: '🌨️', name: 'หิมะตก', dt: -9, wet: 1 }
};
const SEASON_BASE_T = { spring: 27, summer: 34, rainy: 23, winter: 15 };
const WEATHER_ODDS = { spring: { clear: 5, cloudy: 3, rain: 2 }, summer: { clear: 7, cloudy: 2, rain: 1, storm: 0.5 }, rainy: { cloudy: 3, rain: 5, storm: 2, clear: 1 }, winter: { clear: 4, cloudy: 4, rain: 2 } };
const WEATHER_ODDS_FROZEN = { clear: 2, cloudy: 3, snow: 4, storm: 1 };
const GEO_DT = { mountain_cave: -3, mountain_cliff: -4, mountain_peak: -7, waterfall_river: -2, hill_forest: -1, hill_grassland: -1, deep_forest: -1, beach_ocean: 1, rocky_beach: 0, wetland: 0 };
const OUTFIT_WARMTH = { bare: 0, under: 1, leaf: 0, flower: 0, hide: 6, deer: 5, cloth: 4, village: 5, winter: 13, cape: 7 };
function fixWeather() { if (!weather || !WEATHER[weather.kind]) weather = { kind: 'clear', hours: 2 }; }
function weatherTick() {
  fixWeather();
  if (--weather.hours > 0) return;
  const frozen = realms[tickingRealm] && realms[tickingRealm].def && realms[tickingRealm].def.winter && SEASONS[currentSeasonIdx].id === 'winter';
  const odds = frozen ? WEATHER_ODDS_FROZEN : WEATHER_ODDS[SEASONS[currentSeasonIdx].id]; const tot = Object.values(odds).reduce((x, y) => x + y, 0);
  let r = Math.random() * tot, k = 'clear'; for (const [w, p] of Object.entries(odds)) { if ((r -= p) <= 0) { k = w; break; } }
  if (k !== weather.kind && (k === 'storm' || k === 'snow' || k === 'rain')) addLog(`${WEATHER[k].icon} [อากาศเปลี่ยน] ${WEATHER[k].name}${k === 'snow' || k === 'storm' ? ' ใครอยู่ข้างนอกระวังหนาวตาย!' : ''}`, '#7dd3fc');
  weather = { kind: k, hours: 3 + Math.floor(Math.random() * 7) };
}
function airTemp(zone) {
  fixWeather();
  const h = Math.floor(simMinutes / 60) % 24;
  const daily = h >= 12 && h < 16 ? 3 : h >= 21 || h < 5 ? -6 : h >= 5 && h < 8 ? -3 : 0;
  const realmCold = realms[tickingRealm] && realms[tickingRealm].def && realms[tickingRealm].def.winter ? -6 : 0;
  return SEASON_BASE_T[SEASONS[currentSeasonIdx].id] + daily + WEATHER[weather.kind].dt + (GEO_DT[ZONES[zone].geo] || 0) + realmCold;
}
function feltTemp(a) {
  let t = airTemp(a.zone);
  const indoors = a.sleeping && a.sleepKind === 'bed';
  const fire = stationInZone(a.zone, 'campfire');
  const nearFire = fire && Math.hypot(a.x - fire.x, a.y - fire.y) <= 8;
  t += OUTFIT_WARMTH[pupOutfit(a)] || 0;
  if (indoors) t += 12 + WEATHER[weather.kind].wet * 3;         // walls keep the rain and wind off
  else t -= WEATHER[weather.kind].wet * 3;                      // soaked
  if (nearFire) t += 12;
  if (a.sleeping && aiAgents.filter(o => o !== a && o.sleeping && o.zone === a.zone && Math.hypot(o.x - a.x, o.y - a.y) <= 3).length >= 2) t += 3;   // huddling
  if (a.sleeping && a.sleepKind === 'ground') t -= 2;
  if (a.age < 12) t -= 2; if (a.age >= 55) t -= 2;
  return Math.round(t);
}
function temperatureTick() {
  weatherTick();
  aiAgents.forEach(a => {
    if (a.warmth === undefined) a.warmth = 100;
    const t = feltTemp(a); a.felt = t;
    const vit = Math.min(0.4, st(a, 'vit') * 0.015);
    if (t < 12) {
      a.warmth = Math.max(0, a.warmth - (12 - t) * 0.45 * (1 - vit));
      if (Math.random() < 0.3) gainExp(a, 'vit', 0.3);
    } else if (t > 38) {
      a.stamina = Math.max(0, (a.stamina ?? 100) - (t - 38) * 0.8);
      a.warmth = Math.min(100, a.warmth + 10);
      if (t > 42) { a.hp = Math.max(0, a.hp - 2); if (!a.sleeping) a.bubble = '🥵 ร้อนจนหน้ามืด'; }
    } else a.warmth = Math.min(100, a.warmth + (t >= 18 ? 12 : 7));
    if (a.warmth < 50 && !a.sleeping && Math.random() < 0.5) a.bubble = a.warmth < 25 ? '🥶 หนาวสั่นจนแทบขยับไม่ไหว' : '🥶 หนาวจัง ต้องหาที่อุ่นๆ';
    if (a.warmth < 25) { a.hp = Math.max(0, a.hp - (a.warmth <= 0 ? 5 : 2)); a.coldHurt = true; }
    else a.coldHurt = false;
    if (a.warmth <= 0 && a.sleeping) { a.sleeping = false; a.bubble = '🥶 หนาวจนต้องตื่นมา!'; }
    // seek warmth: go to a fire or a shelter in this zone
    if (a.warmth < 55 && a.age >= 12 && !a.sleeping) {
      const spot = restSpotIn(a.zone, a);
      if (spot && Math.hypot(a.x - spot.x, a.y - spot.y) > 3) { a.goal = null; a.session = null; a.gatherT = null; for (let k = 0; k < 4; k++) moveToward(a, spot.x, spot.y); a.coldSeek = true; }
      else if (!spot && a.warmth < 45 && !(a.goal && a.goal.gate)) {
        // nowhere warm here: head for a neighbouring zone that has a fire/shelter, or lower & warmer ground
        const nb = getAdjacentZones(a.zone).map(z => [z, (shelters.some(s => s.zone === z && (isRestShelter(s) || s.station === 'campfire')) ? 20 : 0) + (GEO_DT[ZONES[z].geo] || 0)])
          .sort((p, q) => q[1] - p[1])[0];
        if (nb && nb[1] > (GEO_DT[ZONES[a.zone].geo] || 0)) {
          a.zone = nb[0]; buildZoneTerrain(a.zone); const p = findValidTile(a.zone, false); a.x = p.x; a.y = p.y; a.goal = null; a.gatherT = null;
          a.bubble = `🥶 หนาวเกินไป ย้ายไปหาที่อุ่นที่ ${nb[0]}`; a.coldSeek = true;
        } else a.coldSeek = false;
      } else a.coldSeek = false;
    } else a.coldSeek = false;
  });
}
function weatherLabel() { return `${WEATHER[weather.kind].icon} ${WEATHER[weather.kind].name} ${airTemp(currentZoneId)}°C`; }

function runAutonomousStep() {
  if (!isRunning) return;
  simMinutes += 60;
  const season = SEASONS[currentSeasonIdx];

  if (simMinutes >= 1440) {
    simMinutes = 0;
    simDay++;
    if ((simDay - 1) % 3 === 0) {
      currentSeasonIdx = (currentSeasonIdx + 1) % SEASONS.length;
      addLog(`🌍 [เปลี่ยนฤดูกาล] เข้าสู่ "${SEASONS[currentSeasonIdx].name}" (${SEASONS[currentSeasonIdx].temp})`, '#fde047');
    }
    // 1 game year = 2 game days
    if (simDay % 2 === 0) aiAgents.forEach(a => {
      a.age += 1;
      if (a.age === 12) addLog(`🧒 "${a.name}" อายุ 12 ปี เริ่มทดลองเองได้เมื่อมีผู้ใหญ่อยู่ใกล้`, '#38bdf8');
      if (a.age === 15) {
        const n = Object.values(a.know).filter(e => e.out).length;
        addLog(`🎓 [เป็นผู้ใหญ่] "${a.name}" อายุ 15 ปี ออกไปทำงานเองได้ (มีความรู้ติดตัว ${n} สูตร ที่ได้เรียนมา)`, '#38bdf8');
      }
    });
    const dying = aiAgents.filter(a => a.age >= 70 + (a.lifeBonus || 0) && Math.random() < 0.2);
    removeDead(dying, d => `🕯️ [สิ้นอายุขัย] "${d.name}" (รุ่น ${d.gen}) จากไปอย่างสงบในวัย ${d.age} ปี`);

    const males = aiAgents.filter(a => a.gender === 'ชาย' && a.age >= 18 && a.age <= 50);
    const females = aiAgents.filter(a => a.gender === 'หญิง' && a.age >= 18 && a.age <= 50);
    if (simDay % 3 === 0 && males.length && females.length && aiAgents.length < MAX_POPULATION) {
      const pairs = [];
      males.forEach(m => females.forEach(f => {
        const sc = rel(m, f) + rel(f, m);
        const v = villageOf(f);
        const food = (m.food || 0) + (f.food || 0) + (v ? v.food / 4 : 0);
        const kidsOf = aiAgents.filter(k => k.age < 12 && (k.guardian === f.id || k.guardian === m.id)).length;
        // A child only when the household can feed one more mouth
        if (sc >= 30 && food >= 30 && food / (2 + kidsOf + 1) >= 7 && kidsOf < 3) pairs.push([m, f, sc]);
      }));
      if (!pairs.length) { addLog('💔 ยังไม่มีคู่ไหนพร้อมสร้างครอบครัว (ต้องสนิทกันและมีอาหารพอ)', '#f9a8d4'); }
      else {
      pairs.sort((p, q) => q[2] - p[2]);
      const [dad, mom] = pairs[Math.floor(Math.random() * Math.min(2, pairs.length))];
      const nextGen = Math.max(dad.gen, mom.gen) + 1;
      currentGeneration = Math.max(currentGeneration, nextGen);
      const g = Math.random() < 0.5 ? 'ชาย' : 'หญิง';
      const childName = pickChildName(g, nextGen);
      aiAgents.push(newAgent({
        name: childName, gender: g, gen: nextGen, age: 0, hunger: 10,
        talent: inheritTalent(dad, mom), zone: mom.zone, home: mom.home, x: mom.x, y: mom.y,
        bubble: '👶 เกิดมายังไม่รู้อะไรเลย', guardian: mom.id, know: {}
      }));
      { const bb = aiAgents[aiAgents.length - 1];
        if (souls.length && Math.random() < 0.8) giveSoul(bb, souls.shift());
        [dad, mom].forEach(par => { addRel(bb, par, 60); addRel(par, bb, 70); });
        const mv = villageOf(mom); if (mv) { bb.villageId = mv.id; mv.members.push(bb.id); }
        bb.role = 'เด็ก'; }
      families.unshift({ parents: `${dad.name} ❤️ ${mom.name}`, child: childName, gen: nextGen });
      if (families.length > 15) families.pop();
      const baby = aiAgents[aiAgents.length - 1];
      const bs = bestStat(baby.talent);
      addLog(`👶 [ทายาทรุ่นที่ ${nextGen}] ${dad.name} และ ${mom.name} ให้กำเนิด "${childName}" ค่าสถานะทุกค่า = 1 ไม่มีความรู้ติดตัว แต่มีแววถนัด ${STATS[bs].icon} ${STATS[bs].name} (${talentGrade(baby.talent[bs])})`, '#f472b6');

      }
    }

    const farmMult = stationsOf('farm').length ? 2 : 1;
    faunaSpecies.forEach(f => {
      if (f.pop >= 2 && f.pop < f.maxPop) {
        f.reproProgress += f.predator ? 1 : farmMult;
        if (f.reproProgress >= f.reproDays) {
          f.reproProgress = 0;
          const extra = (f.id === 'f_fish' && season.fishBonus > 0) ? season.fishBonus : 0;
          const repBoost = f.zones.reduce((t, z) => t + trOf(f, z).rep * (f.zp[z] || 0), 0) / Math.max(1, f.pop);
          const born = Math.min(f.maxPop - f.pop, Math.max(1, Math.floor(f.pop * (f.predator ? 0.2 : 0.35) * (1 + repBoost * 0.3))) + extra);
          addAnimals(f, born);
          addLog(`🐣 [สัตว์แพร่พันธุ์] "${f.name}" +${born} ตัว (รวม ${f.pop}/${f.maxPop})`, '#38bdf8');
        }
      }
    });
    ecologyTick();
    evolveTick();
    crowdTick();
    secretTick();
    removeDead(aiAgents.filter(a => a.smitten), d => `⚡ "${d.name}" ถูกพระเจ้าลงทัณฑ์เพราะเปิดเผยความลับชาติก่อน`);
    if (!activeDisaster && Math.random() < 0.15) triggerSeasonalDisaster();
  }

  if (activeDisaster) {
    activeDisaster.remaining--;
    if (activeDisaster.remaining <= 0) {
      activeDisaster = null;
      if (!bgTick) document.getElementById('disaster-banner').style.display = 'none';
      addLog('🌤️ [ภัยพิบัติสงบลง] สภาพอากาศกลับสู่ปกติ', '#4ade80');
    }
  }

  // Hunger, eating, medicine
  const reactorMult = stationsOf('reactor').length ? 0.75 : 1;
  aiAgents.forEach(a => {
    const vitMult = 1 - Math.min(0.35, st(a, 'vit') * 0.01);
    a.hunger = Math.min(100, a.hunger + Math.round(4 * season.foodMult * reactorMult * vitMult * (a.age < 12 ? 0.5 : 1)));
    if (a.hunger >= 60) gainExp(a, 'vit', 0.4);
    const foods = a.bag ? Object.keys(a.bag).filter(n => a.bag[n] > 0 && propsOf(n).food && !propsOf(n).fuel) : [];
    const snack = foods.find(n => !propsOf(n).bad) || ((a.food || 0) <= 0 ? foods[0] : null);
    if (a.hunger >= 45 && snack) {
      take(a, snack);
      const bad = propsOf(snack).bad;
      a.hunger = Math.max(0, a.hunger - (bad ? 15 : 30));
      a.hp = Math.min(maxHp(a), a.hp + (bad ? 1 : 3));
      if (bad) a.bubble = `😖 ${snack}เหนียว ไม่อร่อย`;
      else if (Math.random() < 0.2) a.bubble = `😋 กิน${snack}ของตัวเอง`;
    } else if (a.hunger >= 45 && (a.food || 0) > 0) {
      const eat = Math.min(a.food, 2);
      a.food -= eat;
      a.hunger = Math.max(0, a.hunger - eat * 22);
      a.hp = Math.min(maxHp(a), a.hp + 4);
    } else if (a.hunger >= 45 && villageOf(a) && villageOf(a).food > 0 && atStore(a) && payFor(a, villageOf(a), 2, null, 'อาหาร 2 หน่วย')) {
      const v = villageOf(a);
      const eat = Math.min(v.food, 2);
      v.food -= eat;
      a.hunger = Math.max(0, a.hunger - eat * 22);
      a.hp = Math.min(maxHp(a), a.hp + 4);
      a.bubble = `🔄 เอาของแลกอาหารที่โกดัง${v.name}`;
    } else if (a.hunger >= 85) {
      a.hp = Math.max(0, a.hp - Math.max(3, 7 - Math.floor(st(a, 'vit') / 5)));
      gainExp(a, 'vit', 1);
      a.bubble = '😵 หิวจัด! เลือดลด!';
    }
    if (a.hp < maxHp(a) * 0.45 && avail(a, 'ยาต้มสมุนไพร') > 0) {
      take(a, 'ยาต้มสมุนไพร');
      a.hp = Math.min(maxHp(a), a.hp + 30);
      a.bubble = '🍵 ดื่มยาสมุนไพร';
    }
  });
  // Parents/guardians feed small children from their own food
  aiAgents.filter(k => k.age < 15 && (k.food || 0) < 2 && k.hunger >= 40).forEach(k => {
    const kv = villageOf(k);
    const cands = aiAgents.filter(o => o.age >= 15 && (o.food || 0) >= 3 && (o.id === k.guardian || rel(o, k) >= 30 || (kv && villageOf(o) === kv)));
    const g = cands.sort((p, q) => ((q.id === k.guardian ? 50 : 0) + (q.food || 0)) - ((p.id === k.guardian ? 50 : 0) + (p.food || 0)))[0];
    if (g) { g.food -= 2; k.food = (k.food || 0) + 2; if (g.id !== k.guardian) addRel(k, g, 1); }
  });
  // Charity: well-fed kind people share with starving people nearby (stingy ones don't)
  aiAgents.filter(h => h.hunger >= 70 && (h.food || 0) <= 0).forEach(h => {
    const giver = aiAgents.filter(o => o !== h && o.zone === h.zone && (o.food || 0) >= 20 && Math.random() < o.kind * 0.6 + rel(o, h) / 200)
      .sort((p, q) => (q.food || 0) - (p.food || 0))[0];
    if (!giver) return;
    const amt = Math.min(6, Math.floor(giver.food / 5));
    giver.food -= amt; h.food = (h.food || 0) + amt;
    addRel(h, giver, 6); addRel(giver, h, 1); giver.rep += 1;
    if (Math.random() < 0.4) addLog(`🤲 ${giver.name} แบ่งอาหาร ${amt} ให้ ${h.name} ที่กำลังหิวโซ`, '#86efac');
  });
  temperatureTick();
  removeDead(aiAgents.filter(a => a.hp <= 0 && a.coldHurt), d => `🥶 [หนาวตาย] "${d.name}" ทนความหนาวไม่ไหว เสียชีวิตขณะ${d.sleeping || d.sleepKind === 'ground' ? 'นอนกลางแจ้ง' : 'อยู่ข้างนอก'} (${WEATHER[weather.kind].name} ${airTemp(d.zone)}°C)`);
  removeDead(aiAgents.filter(a => a.hp <= 0), d => `💀 [เสียชีวิต] "${d.name}" เสียชีวิตจากความหิวหรือบาดเจ็บหนัก!`);
  if (aiAgents.length && aiAgents.reduce((t, a) => t + (a.food || 0), 0) / aiAgents.length < 2) generateCrisisProposal('อาหารของทุกคนใกล้หมด');

  // Villages, quests & social life
  villageTick();
  generateQuests();
  assignQuests();
  runQuests();
  socialTick();
  staminaTick();

  // Movement
  const night = isNightTime();
  aiAgents.forEach(a => {
    buildZoneTerrain(a.zone);
    if (a.sleeping || a.wantRest || a.coldSeek) return;
    if (a.age < 12) {
      // Small children stay with their guardian (that's where they learn)
      let g = aiAgents.find(o => o.id === a.guardian && o.age >= 15);
      if (!g) { g = aiAgents.filter(o => o.age >= 15).sort((p, q) => zoneDist(a.zone, p.zone) - zoneDist(a.zone, q.zone))[0]; if (g) a.guardian = g.id; }
      if (g) {
        if (a.zone !== g.zone) { a.zone = g.zone; buildZoneTerrain(a.zone); }
        a.x = g.x; a.y = g.y; moveToward(a, g.x + 2, g.y + 2);
        if (!a.bubble || Math.random() < 0.1) a.bubble = `ตามติด ${g.name}`;
      }
      return;
    }
    if (a.session) return;
    if (a.goal) {
      a.goal.ttl = (a.goal.ttl || 30) - 1;
      if (a.goal.ttl <= 0) { a.goal = null; a.bubble = 'เลิกเดินทาง'; }
      else { travelToGoal(a); return; }
    }
    const myV = villageOf(a);
    if (myV && a.hunger >= 55 && !(a.food > 0) && myV.food > 0 && a.zone !== myV.zone && bagValue(a) >= 2) {
      const store = shelters.find(s => s.villageId === myV.id) || { x: 40, y: 40 };
      a.goal = { zone: myV.zone, x: store.x, y: store.y, ttl: 12, quest: true };
      a.bubble = `🚶 ไปแลกอาหารที่โกดัง${myV.name}`;
      travelToGoal(a); return;
    }
    const fire = stationInZone(a.zone, 'campfire');
    if (night && fire && a.hunger < 60) { moveToward(a, fire.x + 1, fire.y + 1); return; }

    const nodes = zoneNodes[a.zone] || [];
    // Feeding yourself comes first: hungry AI look for food spots, or move to a zone that has some
    const FOODRX = /ปลา|กุ้ง|กล้วย|มะละกอ|เบอร์รี่|เห็ด|หอย|ปู|รังนก|รังผึ้ง/;
    if ((a.food || 0) < 6 && a.age >= 12) {
      const fnode = nodes.find(n => FOODRX.test(n.name));
      if (fnode && (!a.gatherT || !FOODRX.test(a.gatherT.name))) a.gatherT = Object.assign({ zone: a.zone }, fnode);
      if (!fnode && !night && Math.random() < 0.35) {
        const nb = getAdjacentZones(a.zone).filter(z => ZONES[z].res.some(r => FOODRX.test(r)) || faunaSpecies.some(f => isPrey(f) && (f.zp[z] || 0) > 0));
        if (nb.length) { a.zone = pick(nb); buildZoneTerrain(a.zone); const p = findValidTile(a.zone, false); a.x = p.x; a.y = p.y; a.gatherT = null; a.bubble = '🍃 ออกหาของกิน'; return; }
      }
    }
    if (nodes.length && Math.random() < 0.85) {
      if (!a.gatherT || a.gatherT.zone !== a.zone) a.gatherT = Object.assign({ zone: a.zone }, questNode(a) || pick(nodes));
      moveToward(a, a.gatherT.x, a.gatherT.y);
      if (Math.hypot(a.x - a.gatherT.x, a.y - a.gatherT.y) <= 6) a.gatherT = null;
    } else moveToward(a, a.x + Math.floor(Math.random() * 9) - 4, a.y + Math.floor(Math.random() * 9) - 4);

    if (Math.random() < 0.14 && !night) {
      // Wander, but stay around home (and drift back if far away)
      let nb = getAdjacentZones(a.zone);
      const d = zoneDist(a.zone, a.home || a.zone);
      if (d >= 1 && Math.random() < 0.5 + d * 0.15) nb = nb.filter(z => zoneDist(z, a.home) < d);
      else nb = nb.filter(z => zoneDist(z, a.home || z) <= 1);
      if (nb.length) { a.zone = pick(nb); buildZoneTerrain(a.zone); const p = findValidTile(a.zone, false); a.x = p.x; a.y = p.y; }
    }
  });

  // Gathering: anyone (12+) standing near a resource picks some up
  aiAgents.forEach(a => {
    if (a.age < 12 || a.sleeping) return;
    a.gatherCd = (a.gatherCd || 0) - 1;
    if (a.gatherCd > 0) return;
    const t = (zoneNodes[a.zone] || []).find(n => Math.hypot(a.x - n.x, a.y - n.y) <= 7);
    if (!t) return;
    a.gatherCd = 2;
    let gain = season.gatherBonus + Math.floor(st(a, 'str') / 6) + (a.role.includes('เก็บ') ? 1 : 0);
    gainExp(a, 'str', 0.6); gainExp(a, 'vit', 0.2);
    if (hasTool('axe', a) && propsOf(t.name).wood) { gain += 1; useTool('axe', a); }
    if ((a.bag || {})[BAG_NAME] > 0) gain += 1;
    const qDeliver = creditGather(a, t.name, gain);
    if (qDeliver) put(byId(qDeliver.giverId), t.name, gain);
    else if (/ปลา|กุ้ง|กล้วย|มะละกอ|เบอร์รี่|เห็ด|หอย|ปู|รังนก|รังผึ้ง/.test(t.name)) { const keep = Math.round(gain * (1 - shareRatio(a))); if (keep) put(a, t.name, keep); }
    else gainItems(a, t.name, gain);
    depositTick(a);
    if (/ปลา|กุ้ง|กล้วย|มะละกอ|เบอร์รี่|เห็ด|หอย|ปู|รังนก|รังผึ้ง/.test(t.name)) addFood(a, gain * 3);
    else if (Math.random() < 0.5) { addFood(a, 2); if (!a.goal) a.bubble = '🌿 เจอผักผลไม้ป่าระหว่างทาง'; }
    if (!a.goal) a.bubble = `เก็บ ${t.name} +${gain}`;
  });

  // Leopards
  aiAgents.forEach(a => {
    const beast = faunaSpecies.find(f => f.predator && (f.zp[a.zone] || 0) > 0);
    const crowd = aiAgents.filter(o => o.zone === a.zone && o.age >= 15).length;
    if (a.sleeping && a.sleepKind === 'bed') return;      // safe inside a shelter
    if (beast && night && Math.random() < (beast.id === 'f_wolf' ? 0.025 : 0.04) * (1 + trOf(beast, a.zone).fer * 0.3) * Math.min(2, beast.zp[a.zone]) / Math.max(1, crowd) && !stationInZone(a.zone, 'campfire')) {
      const icon = beast.id === 'f_wolf' ? '🐺' : '🐆';
      if (hasTool('bow', a) && a.age >= 15) { a.bubble = `🏹 ยิงธนูไล่${beast.name}!`; gainExp(a, 'agi', 1); gainExp(a, 'str', 0.5); }
      else if (Math.random() < Math.min(0.6, st(a, 'agi') * 0.025)) { a.bubble = `💨 หลบ${beast.name}ทัน!`; gainExp(a, 'agi', 2); }
      else {
        const dmg = (beast.id === 'f_wolf' ? 8 * Math.min(3, beast.zp[a.zone]) : 18) + trOf(beast, a.zone).str * 3;
        a.hp = Math.max(0, a.hp - dmg);
        gainExp(a, 'vit', 2); gainExp(a, 'agi', 0.5);
        a.bubble = `${icon} ถูก${beast.name}โจมตี!`; a.sleeping = false; a.wantRest = false;
        addLog(`${icon} [สัตว์ร้ายโจมตี!] "${a.name}" ถูก${beast.name}ขย้ำในโซน ${a.zone} (HP ${a.hp})`, '#ef4444');
        // Fighting back with a blade can kill it
        if (a.hp > 0 && a.age >= 15 && hasTool('blade', a) && Math.random() < 0.12 + st(a, 'str') * 0.01 && beast.pop > 2) {
          beast.zp[a.zone]--; syncFauna(beast);
          for (const [m, q] of Object.entries(beast.lootMat)) put(a, m, q);
          a.rep += 2;
          addLog(`⚔️ [สู้กลับ!] ${a.name} ฆ่า${beast.name}ได้ในการต่อสู้ ได้ชิ้นส่วนมา`, '#fbbf24');
        }
      }
    }
  });

  // Hunting (needs weapons to be reliable)
  const hunters = aiAgents.filter(a => {
    if (a.age < 12 || a.questId || a.session || a.sleeping || a.wantRest) return false;
    const v = villageOf(a);
    const isHunter = a.role.includes('ล่าสัตว์');
    const needFood = (a.food || 0) < 10 || (isHunter && v && v.food < v.members.length * 4);
    return needFood && Math.random() < (isHunter ? 0.6 : 0.3);
  }).slice(0, 4);
  hunters.forEach(hunter => {
    // Only animals in the hunter's zone or next door; never below 2 on the island (law 1)
    const nearZones = [hunter.zone].concat(getAdjacentZones(hunter.zone));
    const options = [];
    faunaSpecies.forEach(f => {
      if (f.pop <= 2) return;
      const z = nearZones.find(zz => (f.zp[zz] || 0) > 0);
      if (!z) return;
      // Predators are only hunted by bold/strong hunters
      const w = f.predator ? ((hunter.role.includes('ล่า') || st(hunter, 'str') + st(hunter, 'agi') >= 12) ? 1 : 0) : 4;
      for (let i = 0; i < w; i++) options.push([f, z]);
    });
    if (options.length) {
      const [target, tz] = pick(options);
      const weapon = hasTool('bow', hunter) ? 'bow' : (hasTool('blade', hunter) ? 'blade' : null);
      const base = target.predator ? (weapon === 'bow' ? 0.45 : weapon === 'blade' ? 0.25 : 0.08) : (weapon === 'bow' ? 0.7 : weapon === 'blade' ? 0.45 : 0.25);
      const chance = Math.max(0.03, Math.min(0.95, base + st(hunter, 'str') * 0.01 + st(hunter, 'agi') * 0.015 - huntPenalty(target, tz)));
      if (weapon) useTool(weapon, hunter);
      gainExp(hunter, 'str', target.predator ? 2 : 1); gainExp(hunter, 'agi', target.predator ? 2 : 1);
      if (Math.random() < chance) {
        const bonus = extraLoot(target, tz);
        const vname = variantLabel(target, tz);
        target.zp[tz]--; syncFauna(target);
        if (target.lootFood) addFood(hunter, Math.round(target.lootFood * 1.5));
        for (const [m, q] of Object.entries(target.lootMat)) gainItems(hunter, m, q);
        for (const [m, q] of Object.entries(bonus)) gainItems(hunter, m, q);
        if (Object.keys(bonus).length) addLog(`🧬 ${hunter.name} ได้ชิ้นส่วนพิเศษจาก ${vname}: ${Object.keys(bonus).join(', ')}`, '#f0abfc');
        if (target.predator) hunter.rep += 3;
        hunter.bubble = target.predator ? `🏆 ล่า${target.name}สำเร็จ!` : `🏹 ล่า${target.name} (+${target.lootFood})`;
        huntLogs.unshift({ animal: target.name, remPop: target.pop, food: target.lootFood, hunter: hunter.name });
        addLog(target.predator
          ? `🏆 [ล่านักล่า] ${hunter.name} ล่า "${target.name}" ที่ ${tz} สำเร็จ! ได้หนัง เขี้ยว และเนื้อที่ไม่ค่อยอร่อย (เหลือ ${target.pop} ตัว)`
          : `🏹 [ล่าสัตว์] ${hunter.name} ล่า "${target.name}" ${weapon ? `ด้วย${TOOL_LABEL[weapon]}` : 'ด้วยมือเปล่า'} ได้อาหาร +${target.lootFood} (เหลือ ${target.pop} ตัว)`, target.predator ? '#fbbf24' : '#4ade80');
      } else if (target.predator) {
        // The predator hunts back
        const tt = trOf(target, tz);
        const dmg = (target.id === 'f_wolf' ? 10 + Math.floor(Math.random() * 15) : 18 + Math.floor(Math.random() * 18)) + tt.str * 3 + tt.fer * 2;
        hunter.hp = Math.max(0, hunter.hp - dmg);
        gainExp(hunter, 'vit', 3);
        hunter.bubble = `🩸 ถูก${target.name}สวนกลับ!`;
        addLog(`🩸 [ล่าพลาด] ${hunter.name} พยายามล่า "${target.name}" แต่ถูกมันสวนกลับ HP -${dmg} (เหลือ ${hunter.hp})`, '#ef4444');
      } else hunter.bubble = weapon ? '🏹 ล่าพลาด' : '✋ ไล่จับด้วยมือเปล่าไม่ทัน';
    }
  });

  // Work: craft from own knowledge, or experiment
  const needs = computeNeeds();
  aiAgents.forEach(a => {
    if (a.age < 12 || a.sleeping || a.wantRest) return;
    if (a.age < 15 && !aiAgents.some(o => o.age >= 15 && o.zone === a.zone)) return;
    if (a.goal && a.goal.quest) return;
    if (a.questId && (!a.goal || !a.goal.sig)) return;
    if (a.session) {
      if (--a.session.hours <= 0 || !stationNear(a, a.session.station)) a.session = null;
      else { experiment(a, a.session.method); return; }
    }
    if (a.goal && atGoal(a)) {
      const g = a.goal; a.goal = null;
      if (g.sig && a.know[g.sig]) {
        const bq = a.questId && quests.find(q => q.id === a.questId && q.type === 'build');
        if (bq) a.buildFor = bq.giverId;
        const done = craftKnown(a, a.know[g.sig]);
        a.buildFor = null;
        if (done) return;
      }
      if (g.method) {
        const stType = METHODS[g.method].station;
        a.session = { station: stType, method: g.method, hours: 3 + Math.floor(st(a, 'int') / 4) };
        a.bubble = `🔬 ทดลองที่${STATION_LABEL[stType]} ${a.session.hours} ชม.`;
      }
      experiment(a, g.method || null);
      return;
    }
    if (a.goal) return;
    const stockTotal = bagCount(a) + (villageOf(a) ? Object.values(villageOf(a).store).reduce((x, y) => x + y, 0) : 0);
    const p = Math.min(0.95, (a.role.includes('วิจัย') ? 0.8 : (stockTotal < 25 ? 0.3 : 0.5)) + st(a, 'int') * 0.01) * (night ? 0.6 : 1);
    if (Math.random() > p) return;

    if (Math.random() < (a.role.includes('ช่าง') ? 0.8 : 0.55)) {
      const myNeeds = computeNeeds(a);
      for (const key of myNeeds.slice().sort(() => Math.random() - 0.5)) {
        const e = planFor(a, key);
        if (!e) continue;
        if (methodUsable(a, e.m)) { if (craftKnown(a, e)) return; }
        const st = METHODS[e.m].station;
        const s = st && nearestStation(a, st);
        if (s) { a.goal = { zone: s.zone, x: s.x, y: s.y, sig: sigOf(e.a, e.b, e.m), ttl: 30 }; a.bubble = `🚶 ไป${STATION_LABEL[st]}เพื่อทำ ${outName(e.out)}`; return; }
      }
    }
    // Missing a material? 1) own bag (planFor already checked)  2) trade at own village storehouse  3) post a quest
    if (a.wantItem && avail(a, a.wantItem) < 1) {
      const item = a.wantItem, v = villageOf(a);
      a.wantItem = null;
      if (v && (v.store[item] || 0) > 0 && bagValue(a, item) >= itemValue(item, v)) {
        if (!atStore(a)) {
          const store = shelters.find(x => x.villageId === v.id) || { x: 40, y: 40 };
          a.goal = { zone: v.zone, x: store.x, y: store.y, ttl: 14, quest: true };
          a.bubble = `🚶 ไปแลก${item}ที่โกดัง${v.name}`;
        } else if (take(a, item)) { put(a, item, 1); a.bubble = `🔄 แลก${item}จากโกดัง`; }
        return;
      }
      const z = Object.keys(ZONES).filter(id => ZONES[id].res.includes(item)).sort((p, q) => zoneDist(a.zone, p) - zoneDist(a.zone, q))[0];
      if (z) {
        const qty = 2 + Math.floor(Math.random() * 3);
        createQuest(a, 'gather', { title: `ช่วยหา ${item} ${qty} ชิ้น (แถว ${z})`, item, qty, zone: z, difficulty: 1 + qty * 0.4 + zoneDist(a.zone, z) * 0.6 });
        return;
      }
    }
    const workStations = shelters.filter(s => s.station && STATION_METHODS[s.station]);
    if (workStations.length && Math.random() < 0.2) {
      const s = pick(workStations);
      const m = pick(STATION_METHODS[s.station]);
      if (stationNear(a, s.station)) { a.session = { station: s.station, method: m, hours: 3 + Math.floor(st(a, 'int') / 4) }; experiment(a, m); return; }
      a.goal = { zone: s.zone, x: s.x, y: s.y, method: m, ttl: 16 };
      a.bubble = `🚶 ไปลองของที่${STATION_LABEL[s.station]}`;
      return;
    }
    experiment(a, null);
  });

  knowledgeExchange();
  stepFauna();

  updateHudChips();
  renderAllUI();
  drawCanvas();
}
function updateHudChips() {
  if (bgTick) return;
  const h = String(Math.floor(simMinutes / 60) % 24).padStart(2, '0');
  document.getElementById('clock-display').innerText = `วันที่ ${simDay} · ${h}:00 ${isNightTime() ? 'กลางคืน' : 'กลางวัน'}`;
  document.getElementById('season-display').innerText = `${SEASONS[currentSeasonIdx].name} · ${weatherLabel()}`;
  const foodAll = aiAgents.reduce((t, a) => t + (a.food || 0), 0);
  document.getElementById('food-display').innerText = `🍖 อาหารติดตัวรวม ${foodAll}`;
  document.getElementById('food-display').style.color = foodAll <= aiAgents.length * 2 ? '#ff5a6e' : '#ffcf6b';
  document.getElementById('village-chip').innerText = villages.length ? `🏛️ ${villages.length} หมู่บ้าน · อิสระ ${aiAgents.filter(a => !isMember(a)).length} คน` : '🏕️ ยังไม่มีหมู่บ้าน';
}

function addAIAgent(gender) {
  if (aiAgents.length >= MAX_POPULATION) { addLog(`⚠️ ประชากรเต็มความจุ (${MAX_POPULATION} คน) แล้ว`, '#fbbf24'); return; }
  const name = pickChildName(gender, 1);
  const p = findValidTile(currentZoneId, false);
  aiAgents.push(newAgent({ name, gender, age: 20, zone: currentZoneId, home: currentZoneId, x: p.x, y: p.y, bubble: 'ผู้มาใหม่ ยังไม่รู้อะไรเลย' }));
  const role = aiAgents[aiAgents.length - 1].role;
  addLog(`👋 "${name}" (${gender} | ${role}) ลอยมาติดเกาะ ไม่มีความรู้ติดตัว ต้องให้คนบนเกาะสอน`, '#38bdf8');
  renderAllUI();
  drawCanvas();
}

// ==========================================
// 9. MINIMAP & UI
// ==========================================
function renderMiniMap() {
  const grid = document.getElementById('minimap-grid');
  grid.innerHTML = '';
  const geoColors = {
    mountain_cave: '#475569', mountain_cliff: '#64748b', mountain_peak: '#94a3b8', waterfall_river: '#0284c7',
    river_grassland: '#16a34a', river_beach: '#0d9488', hill_grassland: '#65a30d', hill_forest: '#15803d',
    open_grassland: '#4ade80', deep_forest: '#14532d', wetland: '#78350f', rocky_beach: '#334155', beach_ocean: '#eab308'
  };
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) {
    const id = getZoneAt(r, c), z = ZONES[id];
    const cell = document.createElement('div');
    cell.className = 'mm-cell' + (id === currentZoneId ? ' active' : '') + (aiAgents.some(a => a.zone === id) ? ' has-ai' : '');
    cell.style.background = geoColors[z.geo] || '#1e293b';
    const residents = aiAgents.filter(a => a.home === id).length;
    cell.innerText = residents ? `${id}·${residents}` : id;
    if (residents > CROWD_LIMIT) { cell.style.outline = '2px solid #ff5a6e'; cell.style.boxShadow = '0 0 10px rgba(255,90,110,.8)'; }
    cell.title = `${z.name} · ผู้อาศัย ${residents} คน`;
    cell.onclick = () => switchZone(id);
    grid.appendChild(cell);
  }
  const cur = ZONES[currentZoneId];
  const nb = { n: getZoneAt(cur.r - 1, cur.c), s: getZoneAt(cur.r + 1, cur.c), w: getZoneAt(cur.r, cur.c - 1), e: getZoneAt(cur.r, cur.c + 1) };
  const lbl = { n: ['⬆️ เหนือ', '⬆️ สุดขอบเหนือ'], s: ['⬇️ ใต้', '⬇️ สุดขอบใต้'], w: ['⬅️ ตก', '⬅️ สุดขอบตก'], e: ['➡️ ออก', '➡️ สุดขอบออก'] };
  Object.keys(nb).forEach(k => {
    const b = document.getElementById('btn-portal-' + k);
    b.disabled = !nb[k];
    b.innerText = nb[k] ? `${lbl[k][0].split(' ')[0]} ${nb[k]}` : '';
  });
}

function switchZone(zId) {
  if (!ZONES[zId]) return;
  currentZoneId = zId;
  buildZoneTerrain(zId);
  document.getElementById('zone-title').innerText = `โซน ${ZONES[zId].name}`;
  renderMiniMap();
  closeAgentCard();
  centerOnZone();
}
function travelDir(dir) {
  const cur = ZONES[currentZoneId];
  const t = { N: getZoneAt(cur.r - 1, cur.c), S: getZoneAt(cur.r + 1, cur.c), W: getZoneAt(cur.r, cur.c - 1), E: getZoneAt(cur.r, cur.c + 1) }[dir];
  if (t) switchZone(t);
}
function toggleLabels() { showLabels = !showLabels; document.getElementById('btn-labels').style.opacity = showLabels ? 1 : 0.45; drawCanvas(); }
function toggleGrid() { showGrid = !showGrid; document.getElementById('btn-grid').style.opacity = showGrid ? 1 : 0.45; drawCanvas(); }
function toggleSim() { isRunning = !isRunning; const b = document.getElementById('btn-toggle-sim'); b.innerText = isRunning ? '⏸️ หยุด' : '▶️ เล่นต่อ'; b.className = 'gbtn ' + (isRunning ? 'moss' : 'ember'); }
function cycleSpeed() { simSpeed = { 1: 2, 2: 4, 4: 10, 10: 1 }[simSpeed] || 1; document.getElementById('btn-speed').innerText = `⏩ ${simSpeed}x`; startSimLoop(); }
let openTab = null;
function switchTab(tabId, btnEl) {
  if (openTab === tabId && document.getElementById('sheet').classList.contains('open')) { closeSheet(); return; }
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btnEl.classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
  document.getElementById('sheet-title').innerText = btnEl.dataset.title || '';
  document.getElementById('sheet').classList.add('open');
  document.getElementById('backdrop').classList.add('show');
  openTab = tabId;
}
function closeSheet() {
  document.getElementById('sheet').classList.remove('open');
  document.getElementById('backdrop').classList.remove('show');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  openTab = null;
}

// Ambient embers & fireflies (stronger at night)
function initAmbient() {
  const box = document.getElementById('ambient');
  if (!box) return;
  for (let i = 0; i < 18; i++) {
    const e = document.createElement('div');
    e.className = 'ember';
    e.style.left = (30 + Math.random() * 40) + '%';
    e.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
    e.style.animationDuration = (6 + Math.random() * 7) + 's';
    e.style.animationDelay = (Math.random() * 8) + 's';
    box.appendChild(e);
  }
  for (let i = 0; i < 14; i++) {
    const f = document.createElement('div');
    f.className = 'firefly';
    f.style.left = Math.random() * 100 + '%';
    f.style.top = (20 + Math.random() * 60) + '%';
    f.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
    f.style.setProperty('--dy', (Math.random() * 120 - 60) + 'px');
    f.style.animationDuration = (5 + Math.random() * 6) + 's, ' + (1.8 + Math.random() * 2) + 's';
    box.appendChild(f);
  }
}
function updateSkyHud() {
  const orb = document.getElementById('sky-orb');
  if (!orb) return;
  const night = isNightTime();
  orb.classList.toggle('night', night);
  orb.innerText = night ? '🌙' : '☀️';
  const amb = document.getElementById('ambient');
  if (amb) amb.style.opacity = night ? 1 : 0.45;
  const pc = document.getElementById('pop-chip');
  if (pc) pc.innerText = `👥 ${aiAgents.length}`;
}

function renderAllUI() {
  if (bgTick) return;
  const unlockedCount = Object.keys(techDiscovered).length;
  document.getElementById('cnt-tech').innerText = unlockedCount;
  document.getElementById('cnt-pop').innerText = aiAgents.length;
  document.getElementById('cnt-rnd').innerText = rndTrials.length;
  const allFails = new Set();
  aiAgents.forEach(a => Object.entries(a.know).forEach(([s, e]) => { if (!e.out) allFails.add(s); }));
  document.getElementById('cnt-mem').innerText = allFails.size;
  document.getElementById('cnt-elem').innerText = discoveredElements.length;
  document.getElementById('cnt-sol').innerText = aiCrisisProposals.filter(s => !s.applied).length;
  document.getElementById('world-display').innerText = `🌀 ล็อบบี้${godRequests.some(q => q.status !== 'done') ? ' 📜' : ''}`;
  const br = document.querySelector('.brand'); if (br && realms[activeRealm]) br.innerText = `${realms[activeRealm].def.icon} ${realms[activeRealm].def.name}`;

  // Tech tree
  document.getElementById('tech-tree-container').innerHTML = TECH_TREE_ERAS.map(era => {
    const done = era.nodes.filter(n => techDiscovered[n.id]).length;
    const all = done === era.nodes.length;
    return `
      <div class="tech-era ${all ? 'completed' : (done ? '' : 'locked')}">
        <div class="era-header">
          <span style="color:${all ? '#4ade80' : (done ? '#38bdf8' : '#94a3b8')}; font-size:12px;">${era.title}</span>
          <span class="tag ${all ? 'tag-ok' : 'tag-tier'}">${all ? 'สำเร็จยุค' : (done ? 'ค้นพบบางส่วน' : 'ยังไม่มีใครค้นพบ')}</span>
        </div>
        <div class="tech-nodes">
          ${era.nodes.map(n => {
            const d = techDiscovered[n.id];
            const k = d ? new Set(n.keys.flatMap(key => knowersOf(key).map(a => a.name))).size : 0;
            const status = !d ? '' : (k ? `<div style="font-size:10px; color:#86efac; margin-top:3px;">🧠 คนที่ยังทำเป็น: ${k} คน</div>` : `<div style="font-size:10px; color:#fca5a5; margin-top:3px;">⚠️ ไม่มีใครจำวิธีได้แล้ว</div>`);
            return `
            <div class="tech-node ${d ? 'unlocked' : ''}">
              <div style="font-weight:bold;">${d ? '✅' : '🔒'} ${n.name}</div>
              <div style="font-size:10px; color:#94a3b8; margin-top:2px;">${n.desc}</div>
              ${d ? `<div style="font-size:10px; color:#fde047; margin-top:3px;">ค้นพบโดย ${d.by} (วันที่ ${d.day})</div>` : ''}
              ${status}
            </div>`;
          }).join('')}
        </div>
      </div>`;
  }).join('');

  // Population & knowledge
  document.getElementById('gov-box').innerHTML = villages.length ? villages.map(v => {
    const mem = villageMembers(v);
    return `<div class="card" style="border-color:#a855f7; padding:10px; font-size:12px;">
      <div class="card-title"><span style="color:#e9d5ff; font-size:15px;">🏛️ ${v.name}</span><span class="tag tag-gov">ตั้งวันที่ ${v.founded} · ${v.zone}</span></div>
      <div>👑 หัวหน้า: <b style="color:var(--amber-2);">${v.chiefName}</b> · ส่งเข้าคลัง <b>${Math.round(v.tax * 100)}%</b> · สมาชิก ${mem.length} คน · 🍚 คลังอาหาร ${v.food}</div>
      <div style="margin-top:4px; color:var(--muted); font-size:11px;">👥 ${mem.map(a => a.name).join(', ')}</div>
      ${v.jobsText ? `<div style="margin-top:4px; font-size:11px;">📋 ${v.jobsText}</div>` : ''}
      <details style="margin-top:6px;"><summary style="cursor:pointer; color:var(--violet); font-family:var(--head);">📜 บันทึกการประชุมล่าสุด</summary>
        <div style="font-size:11px; color:#d8ccff; margin-top:4px; line-height:1.6;">${(v.minutes || []).join('<br>')}</div></details>
    </div>`;
  }).join('') : `<div class="card" style="padding:10px; font-size:12px; border-style:dashed;">🏕️ <b>ยุคต่างคนต่างอยู่</b> ยังไม่มีหมู่บ้าน ทุกคนหาเลี้ยงตัวเองและใช้ของในกระเป๋าตัวเอง เมื่อมีผู้ใหญ่ที่ยังไม่มีหมู่บ้าน 3 คนขึ้นไปอยู่ใกล้กองไฟเดียวกัน จะประชุมตั้งหมู่บ้าน เลือกหัวหน้า และตกลงว่าจะส่งของเข้าคลังกี่ %</div>`;

  document.getElementById('agent-list').innerHTML = aiAgents.map(a => {
    const stage = getAgeStage(a.age);
    const entries = Object.values(a.know);
    const okE = entries.filter(e => e.out);
    const bad = entries.length - okE.length;
    const byOut = new Map();
    okE.forEach(e => { if (!byOut.has(e.out) || e.from === 'self') byOut.set(e.out, e); });
    const chips = [...byOut.values()].slice(0, 10).map(e =>
      `<span class="kchip ${e.from === 'self' ? 'self' : ''}">${e.from === 'self' ? '🧪' : e.from === 'ชาติก่อน' ? '🔮' : '📖'} ${outName(e.out)}${e.from !== 'self' ? ` <span style="opacity:.7">(${e.from})</span>` : ''}</span>`).join('');
    const guardian = a.age < 12 ? aiAgents.find(o => o.id === a.guardian) : null;
    return `
      <div class="card" style="padding:8px; font-size:11px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <canvas class="avatar" data-id="${a.id}" width="44" height="60" style="width:44px; height:60px; border:none; box-shadow:none; background:#e2e8f0; border-radius:6px; margin-right:6px; flex-shrink:0;"></canvas>
          <strong style="color:${stage.color}; flex:1;">${a.gender === 'ชาย' ? '👨' : '👩'} ${a.name} (${stage.label} ${a.age} ปี · รุ่น ${a.gen})</strong>
          <span class="tag tag-tier">โซน ${a.zone}</span>
        </div>
        <div style="color:#cbd5e1; margin-top:2px;">🏠 บ้าน ${a.home}${a.crowd ? ' 😣' : ''} · ${villageOf(a) ? `🏛️ ${villageOf(a).name}` : '🏕️ อิสระ'} · อาชีพ: ${a.role} · 🍖 อาหารติดตัว ${a.food || 0}${guardian ? ` · 👪 ผู้ดูแล: ${guardian.name}` : ''}</div>
        <div style="color:#e2e8f0; margin-top:2px;">💬 ${a.bubble || '-'}</div>
        <div style="margin-top:4px; display:flex; flex-wrap:wrap; gap:3px;">
          <span class="tag tag-gov">Lv ${agentLevel(a)}</span>
          ${STAT_KEYS.map(k => { const g = talentGrade(a.talent[k]); const pct = Math.round(100 * a.sexp[k] / expNeed(a.stats[k])); return `<span class="badge" style="font-size:10px; padding:2px 5px;" title="${STATS[k].name} · พรสวรรค์ ${g} (x${a.talent[k]}) · EXP ${pct}%">${STATS[k].icon}${STATS[k].short} <b>${a.stats[k]}</b> <span style="color:${GRADE_COLOR[g]};">${g}</span></span>`; }).join('')}
        </div>
        <div class="stat-row">
          <span>❤️ ${a.hp}/${maxHp(a)}</span>
          <div class="bar-wrap"><div class="bar-hp" style="width:${Math.round(100 * a.hp / maxHp(a))}%; background:${a.hp < maxHp(a) * 0.35 ? '#ef4444' : '#22c55e'};"></div></div>
          <span>🍖 หิว ${a.hunger}%</span>
          <div class="bar-wrap"><div class="bar-hg" style="width:${a.hunger}%; background:${a.hunger > 75 ? '#ef4444' : '#f59e0b'};"></div></div>
        </div>
        <div class="stat-row">
          <span>⚡ แรง ${Math.round(a.stamina ?? 100)}%</span>
          <div class="bar-wrap"><div class="bar-hp" style="width:${Math.round(a.stamina ?? 100)}%; background:${(a.stamina ?? 100) < 25 ? '#ef4444' : '#38bdf8'};"></div></div>
          <span>🌡️ ${a.felt ?? '-'}°C ${(a.warmth ?? 100) < 50 ? '🥶' : ''}</span>
          <span>${a.sleeping ? (a.sleepKind === 'bed' ? '🛖 นอนในที่พัก' : a.sleepKind === 'fire' ? '🔥 นอนข้างกองไฟ' : '😪 นอนกับพื้น') : a.wantRest ? '🥱 กำลังไปพัก' : '🏃 ตื่นอยู่'}</span>
        </div>
        ${(() => {
          const others = aiAgents.filter(o => o !== a).map(o => [o, rel(a, o)]);
          const fr = others.filter(x => x[1] >= 20).sort((p, q) => q[1] - p[1])[0];
          const en = others.filter(x => x[1] <= -20).sort((p, q) => p[1] - q[1])[0];
          const qq = quests.find(q => q.id === a.questId);
          return `<div style="margin-top:5px; font-size:11px; color:#f9a8d4;">${fr ? `💞 สนิทกับ ${fr[0].name} (+${fr[1]})` : '💞 ยังไม่มีเพื่อนสนิท'}${en ? ` · <span style="color:#ffb3bd;">💢 ไม่ถูกกับ ${en[0].name} (${en[1]})</span>` : ''}</div>
            <div style="font-size:11px; color:var(--muted);">⭐ ชื่อเสียง ${a.rep} · นิสัย: ${a.kind >= 0.65 ? 'ใจดีชอบช่วย' : a.kind <= 0.35 ? 'หวังผลตอบแทน' : 'กลางๆ'} / ${a.generous >= 1.1 ? 'ใจกว้าง' : a.generous <= 0.7 ? 'ขี้เหนียว' : 'พอประมาณ'}${a.keepsakes.length ? ` · 🎁 ${a.keepsakes.join(', ')}` : ''}${qq ? `<br>📜 กำลังช่วย: ${qq.title}` : ''}</div>`;
        })()}
        ${(a.pastLives || []).length ? `<div style="margin-top:4px; font-size:11px; color:#d8b4fe; padding:4px 8px; border-radius:10px; background:rgba(124,92,255,.15); border:1px dashed rgba(167,139,250,.5);">🔒 ความลับชาติก่อน (มีแต่เจ้าตัวกับพระเจ้าที่รู้): ${a.pastLives.map(l => `${l.name} Lv.${l.level}`).join(' → ')} · ความทรงจำเก่า ${Object.keys(a.pastKnow || {}).length} สูตร</div>` : ''}
        <div style="margin-top:4px; font-size:11px; color:#93c5fd;">🎒 กระเป๋า ${bagCount(a)}/${bagCap(a)}${(() => { const own = shelters.filter(x => x.owner === a.id).map(x => '🏠' + x.name.split(' (')[0]).concat(toolItems.filter(t => t.owner === a.id).map(t => '🔧' + t.name)); return own.length ? ' · เป็นเจ้าของ: ' + own.join(', ') : ''; })()}</div>
        <div style="margin-top:5px; color:#c4b5fd;">📚 ทำเป็น ${byOut.size} อย่าง (จำสูตรได้ ${okE.length}/${recipeCap(a)}) · <span style="color:#fca5a5;">⚠️ จำข้อห้าม ${bad}/${failCap(a)}</span></div>
        <div>${chips || '<span style="color:#64748b;">ยังไม่มีความรู้ใดๆ ในหัว</span>'}</div>
      </div>`;
  }).join('');

  document.querySelectorAll('canvas.avatar').forEach(cv => {
    const a = aiAgents.find(x => x.id === cv.dataset.id);
    if (!a) return;
    const c = cv.getContext('2d');
    c.clearRect(0, 0, cv.width, cv.height);
    if (PUP.ready) { const sf = a._face, sh = a._hit; a._face = 1; drawPuppet(c, a, 22, 58, 54, 'idle', 0); a._face = sf; a._hit = sh; c.setTransform(1, 0, 0, 1, 0, 0); }
    else drawStickFigure(c, a, 20, 56, a.age < 12 ? 36 : 52);
  });

  // Quest board
  const active = quests.filter(q => q.status === 'open' || q.status === 'accepted');
  document.getElementById('cnt-quest').innerText = active.length;
  const ST = { open: ['รอคนช่วย', 'tag-warn'], accepted: ['กำลังช่วย', 'tag-tier'], done: ['สำเร็จ', 'tag-ok'], failed: ['ล้มเหลว', 'tag-fail'], expired: ['หมดเวลา', 'tag-fail'], cancelled: ['ยกเลิก', 'tag-fail'] };
  document.getElementById('quest-list').innerHTML = quests.length ? quests.slice(0, 25).map(q => {
    const T = QUEST_TYPES[q.type], stt = ST[q.status] || ['-', ''];
    const left = Math.max(0, q.deadlineH - nowH());
    return `<div class="card" style="padding:9px; font-size:11.5px; border-left:4px solid ${q.status === 'done' ? '#6ee7a8' : q.status === 'open' ? '#f5a524' : q.status === 'accepted' ? '#a78bfa' : '#ff5a6e'};">
      <div class="card-title"><span>${T.icon} ${q.title}</span><span class="tag ${stt[1]}">${stt[0]}</span></div>
      <div style="color:var(--muted);">ผู้ขอ: <b style="color:var(--text);">${q.giverName}</b>${q.helperName ? ` · ผู้ช่วย: <b style="color:var(--text);">${q.helperName}</b>` : ''} · ความยาก ${q.difficulty}${(q.status === 'open' || q.status === 'accepted') ? ` · เหลือ ${left} ชม.` : ''}</div>
      ${q.type === 'gather' && q.status === 'accepted' ? `<div class="stat-row"><span>🧺 ${q.progress}/${q.qty}</span><div class="bar-wrap"><div class="bar-hg" style="width:${Math.round(100 * q.progress / q.qty)}%; background:#f5a524;"></div></div></div>` : ''}
      <div style="margin-top:4px;">เสนอ: ${rewardText(q.offer)}${q.agreed ? `<br>ตกลงที่: <b style="color:var(--amber-2);">${rewardText(q.agreed)}</b>` : ''}</div>
      ${q.talk.length ? `<div style="margin-top:5px; padding:6px 8px; border-radius:10px; background:rgba(18,15,42,.6); color:#d8ccff; font-size:11px;">💬 ${q.talk.slice(-5).join('<br>💬 ')}</div>` : ''}
      ${q.failWhy ? `<div style="color:#ffb3bd;">เหตุผล: ${q.failWhy}</div>` : ''}
    </div>`;
  }).join('') : '<div class="sec-note">ยังไม่มีใครตั้งเควส</div>';
  const pairsShown = [];
  aiAgents.forEach(a => aiAgents.forEach(b => {
    if (a.id >= b.id) return;
    const v = Math.round((rel(a, b) + rel(b, a)) / 2);
    if (Math.abs(v) >= 25) pairsShown.push([a, b, v]);
  }));
  pairsShown.sort((p, q) => Math.abs(q[2]) - Math.abs(p[2]));
  document.getElementById('rel-list').innerHTML = pairsShown.length ? pairsShown.slice(0, 12).map(([a, b, v]) =>
    `<div class="card" style="padding:7px 10px; font-size:11.5px; display:flex; justify-content:space-between; align-items:center;">
      <span>${v >= 0 ? '💞' : '💢'} <b>${a.name}</b> ↔ <b>${b.name}</b></span>
      <span class="tag ${v >= 0 ? 'tag-ok' : 'tag-fail'}">${relLabel(v)} ${v > 0 ? '+' : ''}${v}</span></div>`).join('')
    : '<div class="sec-note">ยังไม่มีใครสนิทหรือขัดแย้งกันเป็นพิเศษ</div>';

  document.getElementById('teach-list').innerHTML = teachLogs.length ? teachLogs.slice(0, 15).map(t => `
    <div class="card" style="padding:5px 8px; font-size:11px; border-color:#6d28d9;"><span style="color:#94a3b8;">[${t.t}]</span> ${t.text}</div>`).join('')
    : '<div class="sec-note">ยังไม่มีการสอน (ต้องมีคนรู้อะไรสักอย่างก่อน)</div>';

  document.getElementById('family-list').innerHTML = families.map(f => `
    <div class="card" style="border-color:#f472b6; padding:6px; font-size:11px;">💍 <b>${f.parents}</b> → <b>${f.child}</b> (รุ่น ${f.gen})</div>`).join('');

  // Stations, methods, inventory, trials
  const stationRows = shelters.map(s => `
    <div class="card" style="padding:6px; font-size:11px; border-color:${s.station ? '#f59e0b' : '#334155'};">
      🏗️ <b>${s.name}</b> ${s.builder ? `<span style="color:#94a3b8;">สร้างโดย ${s.builder}</span>` : ''}
      ${s.station ? `<div style="margin-top:3px;">${s.owner ? `👑 เจ้าของ: <b>${s.ownerName}</b>` : '🏝️ ของส่วนรวม'} ${s.public || !s.owner ? '<span class="tag tag-ok">🔓 ทุกคนใช้ได้</span>' : `<span class="tag tag-warn">🔒 ต้องขออนุญาต</span>${(s.permits || []).length ? ` · อนุญาตแล้ว: ${(s.permits || []).map(id => byId(id)?.name).filter(Boolean).join(', ')}` : ''}`}</div>` : ''}
      ${s.station && STATION_METHODS[s.station] ? `<div style="color:#fcd34d;">ใช้ทำ: ${STATION_METHODS[s.station].map(m => METHODS[m].name).join(', ')}</div>` : ''}
    </div>`).join('');
  document.getElementById('station-list').innerHTML = stationRows;

  document.getElementById('method-list').innerHTML = Object.values(METHODS).map(M => {
    const stOk = !M.station || stationsOf(M.station).length;
    const tlOk = !M.tool || hasTool(M.tool);
    const req = [M.station ? `${stOk ? '✅' : '❌'} ${STATION_LABEL[M.station]}` : null, M.tool ? `${tlOk ? '✅' : '❌'} ${TOOL_LABEL[M.tool]}` : null].filter(Boolean).join(' · ') || '✋ มือเปล่า';
    return `<span class="badge" style="font-size:10px; display:inline-block; margin:0 4px 4px 0; opacity:${stOk && tlOk ? 1 : 0.55};">${M.name}: ${req}</span>`;
  }).join('');

  document.getElementById('inv-list').innerHTML = villages.length ? villages.map(v => {
    const items = Object.entries(v.store).filter(([, q]) => q > 0);
    return `<div class="card" style="padding:8px 10px; font-size:11.5px; width:100%;">
      <div style="display:flex; justify-content:space-between;"><b>🏛️ โกดัง${v.name}</b><span style="color:var(--muted);">🍚 อาหาร ${v.food} · ส่ง ${Math.round(v.tax * 100)}%</span></div>
      <div style="margin-top:4px;">${items.length ? items.map(([n, q]) => `<span class="kchip">${n} ×${q} <span style="opacity:.7">(ค่า ${itemValue(n, v)})</span></span>`).join('') : '<span style="color:var(--muted);">ยังว่าง</span>'}</div>
      ${(v.ledger || []).length ? `<details style="margin-top:5px;"><summary style="cursor:pointer; color:var(--violet);">🔄 บันทึกการแลกของ</summary><div style="font-size:11px; color:#d8ccff; line-height:1.6;">${v.ledger.slice(0, 10).join('<br>')}</div></details>` : ''}
    </div>`;
  }).join('') : '<div class="sec-note" style="width:100%;">ยังไม่มีโกดัง ต้องตั้งหมู่บ้านก่อน ตอนนี้ทุกคนมีแค่กระเป๋าของตัวเอง</div>';
  document.getElementById('tool-list').innerHTML = toolItems.length ? toolItems.map(t => {
    const def = productDef(keyByName(t.name));
    const lent = t.lentTo && (t.lendUntil || 0) >= nowH() ? byId(t.lentTo) : null;
    return `<div class="card" style="padding:6px 10px; font-size:11.5px; display:flex; justify-content:space-between; gap:6px; flex-wrap:wrap;">
      <span>🔧 <b>${t.name}</b> <span style="color:#fb923c;">ทน ${def.dur - t.wear}/${def.dur}</span></span>
      <span>${t.owner ? `👑 ${t.ownerName}` : '🏝️ ส่วนรวม'} ${t.public ? '<span class="tag tag-ok">🔓 ให้ทุกคนใช้</span>' : '<span class="tag tag-warn">🔒 ต้องขอ</span>'}${lent ? ` <span class="tag tag-tier">ให้ ${lent.name} ยืม</span>` : ''}</span></div>`;
  }).join('') : '<div class="sec-note">ยังไม่มีใครมีเครื่องมือ</div>';
  document.getElementById('bag-list').innerHTML = aiAgents.filter(a => a.age >= 4).map(a => {
    const items = Object.entries(a.bag || {}).filter(([, q]) => q > 0);
    return `<div class="card" style="padding:7px 10px; font-size:11.5px;">
      <div style="display:flex; justify-content:space-between;"><b>🎒 ${a.name}</b><span style="color:var(--muted);">${bagCount(a)}/${bagCap(a)} · 🍖 ${a.food || 0} · ${villageOf(a) ? `${villageOf(a).name} ส่ง ${Math.round(shareRatio(a) * 100)}%` : 'อิสระ'}</span></div>
      <div style="margin-top:3px;">${items.length ? items.map(([n, q]) => `<span class="kchip">${n} ×${q}</span>`).join('') : '<span style="color:var(--muted);">ว่าง</span>'}</div></div>`;
  }).join('');

  document.getElementById('rnd-list').innerHTML = rndTrials.map(t => `
    <div class="card" style="border-left:4px solid ${t.success ? (t.craft ? '#38bdf8' : '#22c55e') : '#ef4444'}; padding:6px; font-size:11px;">
      <div style="font-weight:bold;">${t.success ? '✅' : '❌'} ${t.title} (${t.actor} · วันที่ ${t.day})</div>
      <div style="color:#94a3b8;">${t.detail}</div>
      <div style="color:#cbd5e1;">${t.note}</div>
    </div>`).join('');

  // Alchemy
  const elemStock = sym => villages.reduce((t, v) => t + Object.entries(v.store).filter(([n, q]) => q > 0 && propsOf(n).elem === sym).reduce((x, [, q]) => x + q, 0), 0) + aiAgents.reduce((t, a) => t + Object.entries(a.bag || {}).filter(([n]) => propsOf(n).elem === sym).reduce((x, [, q]) => x + q, 0), 0);
  document.getElementById('element-grid').innerHTML = discoveredElements.map(el => `
    <div class="elem-tile" style="${el.isSynthetic ? 'border-color:#a855f7; background:#1e1b4b;' : ''}">
      <div class="elem-sym">${el.sym}</div>
      <div class="elem-name" style="font-size:10px;">${el.name}</div>
      <div style="font-size:10px; color:#94a3b8;">ในคลัง: ${elemStock(el.sym)}</div>
    </div>`).join('');
  const labLine = stationsOf('lab').length ? '<div class="card" style="padding:6px; font-size:11px; border-color:#22d3ee;">🧪 มีห้องแล็บแล้ว AI จะแวะไปทดลองเอง หรือกด "สั่งแปรธาตุ" เพื่อส่งนักวิจัยไปทันที</div>'
    : '<div class="card" style="padding:6px; font-size:11px; border-color:#475569;">🔒 ยังไม่มีห้องแล็บแปรธาตุบนเกาะ</div>';
  document.getElementById('alchemy-log-list').innerHTML = labLine + alchemyLogs.map(a => `
    <div class="card" style="padding:6px; font-size:11px;">⚛️ ${a.formula} → <b style="color:#22d3ee;">${a.newElem}</b> <span style="color:#94a3b8;">(${a.actor}, วันที่ ${a.day})</span></div>`).join('');

  // Crisis & fauna
  document.getElementById('crisis-status-box').innerHTML = `<div class="card" style="padding:6px; font-size:11px;">อาหารติดตัวรวม: <b>${aiAgents.reduce((t, a) => t + (a.food || 0), 0)}</b> · คลังหมู่บ้าน: <b>${villages.reduce((t, v) => t + v.food, 0)}</b> | ฤดูกาล: <b>${SEASONS[currentSeasonIdx].name}</b> | อาวุธบนเกาะ: <b>${hasTool('bow') ? 'ธนู' : hasTool('blade') ? 'ของมีคม' : 'มือเปล่า'}</b></div>`;
  document.getElementById('ai-solutions-list').innerHTML = aiCrisisProposals.map(s => `
    <div class="card" style="border-left:4px solid #f59e0b; padding:6px; font-size:11px;">
      <div style="font-weight:bold; color:#fbbf24;">${s.title}</div>
      <div>${s.reason}</div><div style="color:#86efac;">${s.effect}</div>
      ${!s.applied ? `<button class="btn-green" style="width:100%; margin-top:6px;" onclick="applyAISolution('${s.id}')">✅ อนุมัติแผนนี้</button>` : '<span class="tag tag-ok">ดำเนินการแล้ว</span>'}
    </div>`).join('');
  document.getElementById('fauna-pop-list').innerHTML = faunaSpecies.map(f => `
    <div class="card" style="padding:7px 10px; font-size:11.5px; ${f.predator ? 'border-color:rgba(255,90,110,.55);' : ''}">
      ${f.predator ? '⚠️' : '🐾'} <b>${f.name}</b>${f.predator ? ' <span class="tag tag-fail">นักล่า</span>' : ''} · ทั้งเกาะ <b>${f.pop}/${f.maxPop}</b>${f.pop <= 2 ? ' · <span style="color:#fbbf24;">สงวนพันธุ์ห้ามล่า</span>' : ''}
      <div style="color:var(--muted); margin-top:2px;">อยู่ที่: ${f.zones.map(z => `${z}×${f.zp[z]}`).join(', ') || '-'}</div>
      ${f.zones.filter(z => traitScore(trOf(f, z))).map(z => { const t = trOf(f, z); return `<div style="margin-top:3px; font-size:11px; color:${t.name ? '#f0abfc' : '#d8ccff'};">🧬 ${z}: ${t.name ? `<b>${t.name}</b> · ` : ''}${traitText(t)}</div>`; }).join('')}
    </div>`).join('') + (animalLogs.length ? `<h4 style="color:#fdba74;">⚔️ ข่าวในป่า</h4>` + animalLogs.slice(0, 12).map(t => `<div class="card" style="padding:5px 9px; font-size:11px;">${t}</div>`).join('') : '');
  if (false) document.getElementById('fauna-pop-list').innerHTML = faunaSpecies.map(f => `
    <div class="card" style="padding:6px; font-size:11px;">
      🐾 <b>${f.name}</b>: <b>${f.pop}/${f.maxPop} ตัว</b> (เกิดใหม่ทุก ${f.reproDays} วัน | ${f.pop <= 2 ? '<span style="color:#fbbf24;">สงวนพันธุ์ห้ามล่า</span>' : '<span style="color:#4ade80;">สมดุลปกติ</span>'})
    </div>`).join('');

  renderMiniMap();
  updateSkyHud();
}

// ==========================================
// 10a. STICK-FIGURE CHARACTERS (layered: body → outfit → face → hair/head → hand item)
// Add new outfits / weapons / gear by adding a draw function to the registries below.
// ==========================================
const INK = '#0f3b52';

// Facial expression from what the AI is going through right now
function getMood(a) {
  const b = a.bubble || '';
  if (a.hp < maxHp(a) * 0.3) return 'hurt';
  if (b.startsWith('🐆')) return 'scared';
  if (b.startsWith('💡') || b.startsWith('⬆️')) return 'eureka';
  if (b.startsWith('😵') || b.startsWith('😵‍💫')) return 'dizzy';
  if (b.startsWith('❌') || b.startsWith('😓') || b.startsWith('😅') || b.startsWith('🤔')) return 'confused';
  if (a.hunger >= 70 || (a.crowd || 0) >= 2) return 'sad';
  if (b.startsWith('🏹') || b.startsWith('🚶') || b.startsWith('🔬')) return 'focus';
  if ((a.warmth ?? 100) < 50 && !a.sleeping) return 'scared';
  if (a.sleeping || ((a.stamina ?? 100) < 25)) return 'sleepy';
  return 'happy';
}

// Which gear the AI is carrying (derived from real tools in storage + what they're doing)
function getEquip(a) {
  const b = a.bubble || '';
  let hand = null;
  if (a.age >= 12) {
    if ((b.includes('🏹') || a.role.includes('ล่า')) && hasTool('bow', a)) hand = 'bow';
    else if (b.includes('🛠️') && hasTool('blade', a)) hand = toolItems.some(t => t.name === 'มีดเหล็ก' && canUse(a, t)) ? 'iron_knife' : 'stone_knife';
    else if (a.role.includes('เก็บ') && hasTool('axe', a)) hand = 'axe';
    else if (a.role.includes('ล่า') && hasTool('blade', a)) hand = 'stone_knife';
    else if (b.includes('🔬') || b.includes('🧪')) hand = hasTool('vessel', a) ? 'pot' : null;
  }
  if (a.age >= 55 && !hand) hand = 'cane';
  const body = a.age < 4 ? null : (Object.keys(a.bag || {}).some(n => /หนัง/.test(n)) || discoveredProducts.hide_bag ? 'hide_tunic' : 'leaf_skirt');
  const back = a.age >= 12 && (a.bag || {})[BAG_NAME] > 0 ? 'bag' : null;
  return { hand, body, back };
}

const FACE = {
  eyes(ctx, hx, hy, r, mood) {
    ctx.fillStyle = INK; ctx.strokeStyle = INK;
    const ex = r * 0.38, ey = hy - r * 0.18;
    if (mood === 'sleepy') { [-1, 1].forEach(d => { ctx.beginPath(); ctx.arc(hx + d * ex, ey, r * 0.13, 0, Math.PI); ctx.stroke(); }); return; }
    if (mood === 'hurt' || mood === 'dizzy') {
      [-1, 1].forEach(d => { const x = hx + d * ex, s = r * 0.13;
        ctx.beginPath(); ctx.moveTo(x - s, ey - s); ctx.lineTo(x + s, ey + s); ctx.moveTo(x + s, ey - s); ctx.lineTo(x - s, ey + s); ctx.stroke(); });
      return;
    }
    const big = mood === 'eureka' || mood === 'scared' ? 1.35 : 1;
    [-1, 1].forEach(d => { ctx.beginPath(); ctx.ellipse(hx + d * ex, ey, r * 0.09 * big, r * 0.15 * big, d * 0.25, 0, Math.PI * 2); ctx.fill(); });
    if (mood === 'focus' || mood === 'confused') { // brows
      ctx.beginPath();
      ctx.moveTo(hx - ex - r * 0.15, ey - r * (mood === 'focus' ? 0.32 : 0.28)); ctx.lineTo(hx - ex + r * 0.15, ey - r * (mood === 'focus' ? 0.24 : 0.36));
      ctx.moveTo(hx + ex - r * 0.15, ey - r * 0.24); ctx.lineTo(hx + ex + r * 0.15, ey - r * 0.32);
      ctx.stroke();
    }
  },
  nose(ctx, hx, hy, r) { ctx.fillStyle = INK; ctx.beginPath(); ctx.ellipse(hx, hy + r * 0.02, r * 0.07, r * 0.035, 0, 0, Math.PI * 2); ctx.fill(); },
  mouth(ctx, hx, hy, r, mood) {
    ctx.strokeStyle = INK; ctx.fillStyle = INK;
    const my = hy + r * 0.32;
    ctx.beginPath();
    if (mood === 'happy') ctx.arc(hx + r * 0.08, my - r * 0.1, r * 0.2, 0.15 * Math.PI, 0.85 * Math.PI);
    else if (mood === 'eureka') { ctx.ellipse(hx, my, r * 0.15, r * 0.13, 0, 0, Math.PI * 2); ctx.fill(); return; }
    else if (mood === 'scared') { ctx.ellipse(hx, my, r * 0.1, r * 0.16, 0, 0, Math.PI * 2); ctx.stroke(); return; }
    else if (mood === 'sad' || mood === 'hurt') ctx.arc(hx, my + r * 0.12, r * 0.18, 1.15 * Math.PI, 1.85 * Math.PI);
    else if (mood === 'confused' || mood === 'dizzy') { ctx.moveTo(hx - r * 0.18, my); ctx.quadraticCurveTo(hx - r * 0.06, my - r * 0.1, hx, my); ctx.quadraticCurveTo(hx + r * 0.08, my + r * 0.1, hx + r * 0.18, my - r * 0.02); }
    else if (mood === 'focus') { ctx.moveTo(hx - r * 0.14, my); ctx.lineTo(hx + r * 0.14, my); }
    else if (mood === 'sleepy') { ctx.ellipse(hx, my, r * 0.06, r * 0.05, 0, 0, Math.PI * 2); }
    ctx.stroke();
  },
  extras(ctx, hx, hy, r, mood, t) {
    ctx.strokeStyle = INK; ctx.fillStyle = INK; ctx.font = `bold ${Math.max(8, r * 0.7)}px sans-serif`;
    if (mood === 'eureka') { ctx.fillStyle = '#facc15'; ctx.fillText('✦', hx + r * 0.9, hy - r * 0.8); ctx.fillText('✦', hx - r * 1.4, hy - r * 0.5); }
    if (mood === 'confused') { ctx.fillStyle = '#f8fafc'; ctx.fillText('?', hx + r * 1.0, hy - r * 0.6); }
    if (mood === 'sleepy') { ctx.fillStyle = '#bae6fd'; ctx.fillText(t % 2 ? 'z' : 'Z', hx + r * 1.0, hy - r * 0.9); }
    if (mood === 'scared' || mood === 'hurt') { ctx.fillStyle = '#7dd3fc'; ctx.beginPath(); ctx.ellipse(hx + r * 0.95, hy - r * 0.3, r * 0.1, r * 0.17, 0, 0, Math.PI * 2); ctx.fill(); }
    if (mood === 'dizzy') { ctx.beginPath(); ctx.ellipse(hx, hy - r * 1.15, r * 0.7, r * 0.18, 0, 0, Math.PI * 2); ctx.strokeStyle = '#facc15'; ctx.stroke(); }
  }
};

// Outfit layer (drawn over torso). Add new outfits here.
const OUTFITS = {
  leaf_skirt(ctx, p) {
    ctx.fillStyle = '#16a34a'; ctx.beginPath();
    ctx.moveTo(p.hipX - p.u * 2.2, p.hipY - p.u * 0.6); ctx.lineTo(p.hipX + p.u * 2.2, p.hipY - p.u * 0.6);
    for (let i = 4; i >= 0; i--) { ctx.lineTo(p.hipX - p.u * 2.2 + i * p.u * 1.1, p.hipY + p.u * (i % 2 ? 1.6 : 2.4)); }
    ctx.closePath(); ctx.fill();
  },
  hide_tunic(ctx, p) {
    ctx.fillStyle = '#b45309'; ctx.strokeStyle = '#78350f'; ctx.lineWidth = Math.max(1, p.u * 0.35);
    ctx.beginPath();
    ctx.moveTo(p.neckX - p.u * 1.6, p.shoulderY); ctx.lineTo(p.neckX + p.u * 1.6, p.shoulderY);
    ctx.lineTo(p.hipX + p.u * 2.4, p.hipY + p.u * 1.8); ctx.lineTo(p.hipX - p.u * 2.4, p.hipY + p.u * 1.8);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#fde68a'; ctx.beginPath(); ctx.moveTo(p.hipX - p.u * 2, p.hipY); ctx.lineTo(p.hipX + p.u * 2, p.hipY); ctx.stroke();
  }
};

// Hand-held items (drawn at the free hand). Add new weapons/tools here.
const HAND_ITEMS = {
  stone_knife(ctx, x, y, u) { ctx.strokeStyle = '#78350f'; ctx.lineWidth = u * 0.6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + u * 1.2, y - u * 1.2); ctx.stroke(); ctx.fillStyle = '#94a3b8'; ctx.beginPath(); ctx.moveTo(x + u * 1.1, y - u * 1.1); ctx.lineTo(x + u * 3.2, y - u * 3.4); ctx.lineTo(x + u * 1.8, y - u * 1.0); ctx.closePath(); ctx.fill(); },
  iron_knife(ctx, x, y, u) { ctx.strokeStyle = '#1f2937'; ctx.lineWidth = u * 0.6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + u * 1.2, y - u * 1.2); ctx.stroke(); ctx.strokeStyle = '#e5e7eb'; ctx.lineWidth = u * 0.8; ctx.beginPath(); ctx.moveTo(x + u * 1.2, y - u * 1.2); ctx.lineTo(x + u * 3.6, y - u * 3.6); ctx.stroke(); },
  axe(ctx, x, y, u) { ctx.strokeStyle = '#78350f'; ctx.lineWidth = u * 0.6; ctx.beginPath(); ctx.moveTo(x - u * 0.5, y + u * 1.5); ctx.lineTo(x + u * 1.5, y - u * 3.5); ctx.stroke(); ctx.fillStyle = '#64748b'; ctx.beginPath(); ctx.moveTo(x + u * 1.2, y - u * 3); ctx.lineTo(x + u * 3.2, y - u * 3.8); ctx.lineTo(x + u * 2.8, y - u * 1.8); ctx.closePath(); ctx.fill(); },
  bow(ctx, x, y, u) { ctx.strokeStyle = '#92400e'; ctx.lineWidth = u * 0.6; ctx.beginPath(); ctx.arc(x - u * 1.2, y, u * 4, -0.45 * Math.PI, 0.45 * Math.PI); ctx.stroke(); ctx.strokeStyle = '#e2e8f0'; ctx.lineWidth = Math.max(1, u * 0.2); ctx.beginPath(); ctx.moveTo(x - u * 1.2 + u * 4 * Math.cos(-0.45 * Math.PI), y + u * 4 * Math.sin(-0.45 * Math.PI)); ctx.lineTo(x - u * 1.2 + u * 4 * Math.cos(0.45 * Math.PI), y + u * 4 * Math.sin(0.45 * Math.PI)); ctx.stroke(); },
  pot(ctx, x, y, u) { ctx.fillStyle = '#c2410c'; ctx.beginPath(); ctx.ellipse(x + u * 0.8, y + u * 0.4, u * 1.4, u * 1.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#7dd3fc'; ctx.fillRect(x - u * 0.3, y - u * 0.8, u * 2.2, u * 0.5); },
  cane(ctx, x, y, u, feetY) { ctx.strokeStyle = '#78350f'; ctx.lineWidth = u * 0.6; ctx.beginPath(); ctx.moveTo(x + u * 0.6, y - u * 0.6); ctx.lineTo(x + u * 0.6, feetY); ctx.stroke(); }
};

const BACK_ITEMS = {
  bag(ctx, p) { ctx.fillStyle = '#a16207'; ctx.beginPath(); ctx.ellipse(p.neckX - p.u * 1.8, p.hipY - p.u * 1.5, p.u * 1.3, p.u * 1.8, 0.2, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#713f12'; ctx.lineWidth = p.u * 0.4; ctx.beginPath(); ctx.moveTo(p.neckX + p.u * 0.6, p.shoulderY); ctx.lineTo(p.neckX - p.u * 1.8, p.hipY - p.u * 2.5); ctx.stroke(); }
};

function drawStickFigure(ctx, a, fx, feetY, H) {
  const u = H / 22;                      // unit
  const child = a.age < 12, elder = a.age >= 55;
  const headR = H * (child ? 0.22 : 0.17);
  const hx = fx + u * 0.3, hy = feetY - H + headR;
  const neckX = fx + u * 0.6, shoulderY = hy + headR + u * 1.2;
  const hipX = fx + u * 0.3, hipY = shoulderY + H * (child ? 0.2 : 0.27);
  const t = Math.floor(simMinutes / 60) + (a.x + a.y);
  const moving = !!a.goal || !!a.gatherT;
  const swing = moving ? (t % 2 ? 1 : -1) * u * 1.6 : 0;
  const mood = getMood(a);
  const eq = getEquip(a);
  const lw = Math.max(1.5, u * (child ? 0.75 : 0.65));
  const p = { u, hx, hy, headR, neckX, shoulderY, hipX, hipY, feetY };

  const strokeLimbs = (color, w) => {
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath();
    // neck + torso (slight lean like the reference)
    ctx.moveTo(hx + u * 0.3, hy + headR); ctx.lineTo(neckX, shoulderY);
    ctx.lineTo(hipX - u * (elder ? -1 : 0), hipY);
    // legs
    ctx.moveTo(hipX, hipY); ctx.lineTo(fx - u * 1.6 + swing, feetY);
    ctx.moveTo(hipX, hipY); ctx.lineTo(fx + u * 2.4 - swing, feetY);
    // back arm: hand on hip (like the drawing) unless scared
    if (mood === 'scared') { ctx.moveTo(neckX, shoulderY); ctx.lineTo(neckX - u * 3, shoulderY - u * 3); }
    else { ctx.moveTo(neckX, shoulderY); ctx.lineTo(neckX - u * 3.2, shoulderY + u * 3.6); ctx.lineTo(hipX - u * 0.4, hipY - u * 0.6); }
    // front arm: down, raised when eureka / holding something
    const handUp = mood === 'eureka' || (eq.hand && eq.hand !== 'cane');
    p.handX = neckX + u * (handUp ? 3.4 : 2.4);
    p.handY = handUp ? shoulderY - (mood === 'eureka' ? u * 3.5 : -u * 2) : hipY + u * 1.2;
    ctx.moveTo(neckX, shoulderY); ctx.lineTo(neckX + u * 1.8, shoulderY + u * 2.4); ctx.lineTo(p.handX, p.handY);
    ctx.stroke();
  };

  if (eq.back && BACK_ITEMS[eq.back]) BACK_ITEMS[eq.back](ctx, p);
  strokeLimbs('rgba(248,250,252,0.85)', lw + 2.2);   // light halo so figures read on any terrain
  strokeLimbs(INK, lw);
  if (eq.body && OUTFITS[eq.body]) OUTFITS[eq.body](ctx, p);

  // head
  ctx.lineWidth = lw + 2.2; ctx.strokeStyle = 'rgba(248,250,252,0.85)';
  ctx.beginPath(); ctx.arc(hx, hy, headR, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = '#f8fafc'; ctx.fill();
  ctx.lineWidth = lw; ctx.strokeStyle = INK; ctx.stroke();

  // hair / head layer
  ctx.strokeStyle = elder ? '#cbd5e1' : INK; ctx.lineWidth = Math.max(1, lw * 0.8);
  if (a.gender === 'หญิง') {
    ctx.beginPath(); ctx.moveTo(hx - headR * 0.9, hy - headR * 0.4); ctx.quadraticCurveTo(hx - headR * 1.6, hy + headR * 0.2, hx - headR * 1.3, hy + headR * 0.9); ctx.stroke();
    ctx.fillStyle = '#ec4899'; ctx.beginPath(); ctx.arc(hx - headR * 0.85, hy - headR * 0.55, Math.max(1.5, headR * 0.16), 0, Math.PI * 2); ctx.fill();
  }
  if (elder) { ctx.beginPath(); ctx.arc(hx, hy - headR * 0.1, headR * 1.02, 1.1 * Math.PI, 1.9 * Math.PI); ctx.stroke(); }
  if (child) { ctx.beginPath(); ctx.moveTo(hx, hy - headR); ctx.quadraticCurveTo(hx + headR * 0.4, hy - headR * 1.5, hx + headR * 0.2, hy - headR * 1.2); ctx.stroke(); }

  // face
  ctx.lineWidth = Math.max(1, lw * 0.7);
  FACE.eyes(ctx, hx, hy, headR, mood);
  FACE.nose(ctx, hx, hy, headR);
  FACE.mouth(ctx, hx, hy, headR, mood);
  FACE.extras(ctx, hx, hy, headR, mood, t);

  // hand item
  if (eq.hand && HAND_ITEMS[eq.hand]) { ctx.lineCap = 'round'; HAND_ITEMS[eq.hand](ctx, p.handX, p.handY, u, feetY); }
}

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
  sleep: { dur: 4, f: u => { const b = Math.sin(u * 2 * Math.PI); return pr({ lean: 84, dy: 25.5, dx: 6, thN: 8 + b, thF: -6, knN: -10, knF: -14, upN: 20 + b * 2, foN: 70, upF: 10, foF: 30, capeRot: 0, cape: 3 }); } },
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
  if (a.sleeping && !moving) return 'sleep';
  if (moving) return fast || b.startsWith('💨') || b.startsWith('⚠️') || b.includes('โจมตี') ? 'run' : 'walk';
  if (b.startsWith('🏹')) return 'bow';
  if (b.startsWith('🩸') || b.includes('โจมตี') || b.startsWith('💢')) return 'slash';
  if (b.startsWith('🛠️') || b.startsWith('🔬') || b.startsWith('🔁') || b.startsWith('😓') || b.startsWith('😅')) return 'craft';
  if (b.startsWith('เก็บ') || b.startsWith('🍃') || b.startsWith('🌿') || b.startsWith('🧺') || a.gatherT) {
    if (/ไม้|ไผ่/.test(b) && getEquip(a).hand === 'axe') return 'chop';
    return 'gather';
  }
  if (isNightTime() && !a.goal && stationInZone(a.zone, 'campfire')) return 'sit';
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
  const u = ((tSec + (hashStr(String(a.id)) % 7) * 0.37) / def.dur) % 1;
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

// ==========================================
// 10. CANVAS (camera view, cached terrain, animated puppets)
// ==========================================
const WT = 16;                                   // world pixels per tile
const VIEW = { zoom: 2.4, cx: 40 * WT, cy: 40 * WT, follow: null, w: 0, h: 0, dpr: 1, last: 0 };
const NATURE = { ocean: '#4a9fd1', river: '#6cc0e8', swamp_water: '#5aa596', sand_bank: '#efdca6', mud_flat: '#b08a5e', grass: '#9bd472',
  tall_grass: '#84c75f', forest: '#6aad55', hill_slope: '#bdb291', mountain_cliff: '#a59e94', mountain_peak: '#d6cfc4' };
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
  const key = (typeof activeRealm !== 'undefined' ? activeRealm : 0) + '|' + zId + '|' + currentSeasonIdx;
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
  if (!VIEW.zoomSet) { VIEW.zoom = Math.max(1.4, Math.min(3.2, Math.min(VIEW.w, VIEW.h) / (20 * WT))); }
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
  // weather overlay (rain / snow)
  ctx.setTransform(d, 0, 0, d, 0, 0);
  const wk = (weather && weather.kind) || 'clear';
  if (wk === 'rain' || wk === 'storm' || wk === 'snow') {
    if (wk !== 'snow') { ctx.fillStyle = wk === 'storm' ? 'rgba(40,50,80,.28)' : 'rgba(60,80,110,.14)'; ctx.fillRect(0, 0, VIEW.w, VIEW.h); }
    const n = wk === 'storm' ? 160 : wk === 'rain' ? 90 : 70, t = now;
    ctx.strokeStyle = 'rgba(220,235,255,.55)'; ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 1.2; ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const sx = ((i * 97.3 + (wk === 'snow' ? Math.sin(t + i) * 20 : -t * 120)) % (VIEW.w + 40) + VIEW.w + 40) % (VIEW.w + 40) - 20;
      const sy = ((i * 53.7 + t * (wk === 'snow' ? 40 : 520)) % (VIEW.h + 40)) - 20;
      if (wk === 'snow') { ctx.moveTo(sx + 2, sy); ctx.arc(sx, sy, 2, 0, 7); } else { ctx.moveTo(sx, sy); ctx.lineTo(sx - 4, sy + 12); }
    }
    wk === 'snow' ? ctx.fill() : ctx.stroke();
    if (wk === 'storm' && Math.sin(t * 1.7) > 0.995) { ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.fillRect(0, 0, VIEW.w, VIEW.h); }
  }
  // screen-space labels (constant size)
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
  if ((a.warmth ?? 100) < 50) return '🥶';
  if ((a.felt ?? 25) > 38) return '🥵';
  if (a.sleeping) return '💤';
  if (a.wantRest || (a.stamina ?? 100) < 25) return '🥱';
  if (a.hunger >= 70) return '🍖';
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
  const sta = Math.max(0, Math.min(1, (a.stamina ?? 100) / 100));
  ctx.fillStyle = 'rgba(30,24,60,.6)'; ctx.fillRect(sx - 15, y + 23, 30, 3);
  ctx.fillStyle = sta < 0.25 ? '#f87171' : '#38bdf8'; ctx.fillRect(sx - 15, y + 23, 30 * sta, 3);
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
  if (a.sleeping) { const t = now * 0.8 + (a._ry || 0); ctx.fillStyle = 'rgba(70,90,160,.85)'; ctx.font = `bold ${WT * 0.55}px sans-serif`;
    [0, 1, 2].forEach(i => { const ph = (t + i * 0.33) % 1; ctx.globalAlpha = 1 - ph; ctx.fillText(i % 2 ? 'Z' : 'z', fx - WT * 0.6 + ph * WT * 0.6 + i * 3, feetY - WT * 1.2 - ph * WT * 1.2); }); ctx.globalAlpha = 1; }
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
  const hp = Math.round(a.hp / maxHp(a) * 100), hg = Math.round(a.hunger || 0), sta = Math.round(a.stamina ?? 100);
  const stats = ['str', 'agi', 'vit', 'int', 'dex', 'cha'].map(k => `<span class="st"><b>${k.toUpperCase()}</b> ${st(a, k)}</span>`).join('');
  const kn = Object.keys(a.know || {}).length;
  el.innerHTML = `<div class="ac-head"><canvas id="ac-avatar" width="84" height="96"></canvas><div class="ac-info">
      <div class="ac-name">${a.gender === 'หญิง' ? '👩' : '👨'} ${a.name}${v && v.chiefId === a.id ? ' 👑' : ''}</div>
      <div class="ac-sub">${stage.label} ${Math.floor(a.age)} ปี · ${a.role || 'ยังไม่มีอาชีพ'}${v ? ' · ' + v.name : ''}</div>
      <div class="ac-bubble">${a.bubble || '...'}</div></div>
      <button class="gbtn ghost round close" onclick="closeAgentCard()">✕</button></div>
    <div class="ac-bars"><span>❤️</span><div class="bar-wrap"><div class="bar-hp" style="width:${hp}%;background:${hp > 50 ? '#4ade80' : hp > 25 ? '#facc15' : '#f87171'}"></div></div><span>${hp}%</span>
      <span>🍖</span><div class="bar-wrap"><div class="bar-hg" style="width:${hg}%;background:#f5a524"></div></div><span>${hg}%</span>
      <span>⚡</span><div class="bar-wrap"><div class="bar-hp" style="width:${sta}%;background:${sta < 25 ? '#ef4444' : '#38bdf8'}"></div></div><span>${sta}%</span>
      <span>🌡️</span><div class="bar-wrap"><div class="bar-hp" style="width:${Math.round(a.warmth ?? 100)}%;background:${(a.warmth ?? 100) < 50 ? '#60a5fa' : '#fb923c'}"></div></div><span>${a.felt ?? '-'}°</span>
      <span>${a.sleeping ? '😴' : '🏃'}</span><div class="ac-sub" style="grid-column: span 2">${a.sleeping ? (a.sleepKind === 'bed' ? 'นอนในที่พัก' : a.sleepKind === 'fire' ? 'นอนข้างกองไฟ' : 'นอนกับพื้น') : a.wantRest ? 'กำลังไปพัก' : 'ตื่นอยู่'}</div></div>
    <div class="ac-stats">${stats}</div>
    <div class="ac-sub">🧠 รู้ ${kn} สูตร · 🎒 ${Object.entries(a.bag || {}).filter(([, n]) => n > 0).slice(0, 5).map(([k, n]) => `${k}×${n}`).join(', ') || 'กระเป๋าว่าง'}</div>`;
  const av = document.getElementById('ac-avatar'); const c = av.getContext('2d'); c.clearRect(0, 0, 84, 96);
  if (PUP.ready) { const sf = a._face, sh = a._hit; a._face = 1; drawPuppet(c, a, 42, 90, 80, 'idle', performance.now() / 1000); a._face = sf; a._hit = sh; c.setTransform(1, 0, 0, 1, 0, 0); }
}

// ---------- render loop (~30 fps) ----------
function renderLoop(ts) {
  if (!renderLoop.last || ts - renderLoop.last > 32) { renderLoop.last = ts; try { drawCanvas(); } catch (err) { console.error(err); } }
  if (!renderLoop.cardT || ts - renderLoop.cardT > 500) { renderLoop.cardT = ts; if (cardAgentId) renderAgentCard();
    const open = typeof godRequests !== 'undefined' && godRequests.some(q => q.status !== 'done');
    const gd = document.getElementById('god-dot'); if (gd) gd.classList.toggle('on', open);
    const gc = document.getElementById('cnt-god'); if (gc) gc.style.display = open ? '' : 'none'; }
  requestAnimationFrame(renderLoop);
}

function startSimLoop() {
  if (simTimer) clearInterval(simTimer);
  simTimer = setInterval(() => {
    try {
      tickAllRealms();
      if (++ticksSinceLastSave >= 5) { ticksSinceLastSave = 0; saveGameState(); }
    } catch (err) { console.error(err); }
  }, Math.floor(10000 / simSpeed));   // 1 game hour = 10 real seconds at 1x
}

const BASE_ZONES = JSON.parse(JSON.stringify(ZONES));
const INITIAL_REALM = JSON.parse(JSON.stringify(captureRealm()));

window.addEventListener('DOMContentLoaded', () => {
  initAmbient();
  if (window.innerWidth < 520) document.getElementById('minimap-box').classList.add('collapsed');
  resizeView();
  const hasSaved = loadGameState();
  if (!hasSaved) {
    realms = REALM_DEFS.map((def, i) => ({ def, state: null }));
    realms.forEach((r, i) => { tickingRealm = i; r.state = makeRealmState(r.def, i); });
    activeRealm = 0; tickingRealm = 0;
    restoreRealm(realms[0].state);
    godTick(); restoreRealm(realms[0].state);
  }
  { const bar = document.getElementById('log-bar'); bar.innerHTML = logBuffer.map(l => `<div class="log-entry" style="color:${l.color}">${l.t} ${l.msg}</div>`).join(''); }
  buildZoneTerrain(currentZoneId);
  renderAllUI();
  centerOnZone();
  requestAnimationFrame(renderLoop);
  if (hasSaved) addLog(`💾 โหลดเซฟสำเร็จ! ${realms.length} ดินแดนเดินเวลาต่อพร้อมกัน`, '#38bdf8');
  startSimLoop();
});
