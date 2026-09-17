import * as THREE from 'three';

// ============ CONTENT DATA ============
const WORKS = {
  cv: { tag:'red', label:'CV — MAN CHIT LIU', title:'Curriculum Vitae',
    body:'Sound Designer · Music Producer\nClick below to view or download the PDF (placeholder version — final CV coming soon).',
    links:[['📄 Open / Download CV (PDF)','assets/cv.pdf']] },
  r1: { tag:'red', label:'RED PILL GALLERY', title:'VANN JEWELRY — Brand Film Sound Design',
    body:'Role: Sound Designer & Composer\nTools: Ableton Live\n\nRetro-futuristic soundscape blending synthwave textures with futuristic techno, crafted in direct collaboration with the film director for precise audio-to-picture sync.',
    vids:['40yvHKSG2Zg'] },
  r2: { tag:'red', label:'RED PILL GALLERY', title:'AGE OF TANKS (Web3 Game) — Official Trailer Audio',
    body:'Role: Sound Designer & Composer\nClient: Defnition (Singapore)\n\nFull trailer audio: original SFX, foley, cinematic orchestration with electronic elements, mastered and synced to picture.',
    vids:['rcDyp2n9OGI'] },
  r3: { tag:'red', label:'RED PILL GALLERY', title:'MOSCHINO — Year of the Tiger Campaign BGM',
    body:'Role: Composer & Audio Producer\nTools: Ableton Live\n\nFunky, vibrant soundtrack precisely synchronised with visual pacing, amplifying the campaign\'s bold, playful energy.',
    vids:['mPEqpFp3q58'] },
  r4: { tag:'red', label:'RED PILL GALLERY', title:'VOODOO BOO PARK — Theme Park Sound Design',
    body:'Haunted-house theme park sound design across 21 zones (roller coaster, clown fun house, UV maze…).\n\n🚧 Exhibit under construction — coming soon.' },
  r5: { tag:'red', label:'RED PILL GALLERY · ALSO IN BLUE PILL LAB', title:'《你是你的傳奇》— Docudrama Theme & Ending Songs',
    body:'Client: Fame Universal Entertainment Limited\nRole: Music Producer & Supervisor\nRecorded at Zoo Studio · budget control · composition · arrangement · lyrics\nFeaturing Erhu by a Hong Kong Chinese Orchestra musician.',
    audio:[['主題曲「水花」','assets/audio/docudrama-theme.mp3'],['Ending Song「Everybody like Kung Fu!」(working title)','assets/audio/docudrama-ending.mp3']],
    links:[['📄 Credit List & Lyrics (PDF)','assets/credit.pdf']] },
  r6: { tag:'red', label:'RED PILL GALLERY · HIGHLIGHT', title:'Apple Store Film Workshop —《Pride》MV',
    body:'Music Video for Taste of Blue —《Pride》(Original Mix)\nA collaboration with Hong Kong director Kitty Yang, who chose the first track of my debut album for this Apple Store film workshop piece.',
    vids:['YkDTNMo1kCY'],
    links:[['🎧 Listen on Spotify','https://open.spotify.com/album/65MDRMLghrnWW4oan5xdhU']] },
  b1: { tag:'blue', label:'BLUE PILL LAB · MAIN ACT', title:'HÖR Radio Berlin — Main Act of the Night',
    body:'Headline performance on Berlin\'s iconic HÖR Radio, plus main-act shows at Berlin venues RSO and Club OST.',
    vids:['HGpJAA-Z8d0'],
    links:[['📸 RSO Berlin (Instagram)','https://www.instagram.com/rso.berlin'],
      ['📸 Club OST (Instagram)','https://www.instagram.com/club.ost']] },
  b2: { tag:'blue', label:'BLUE PILL LAB · LOCAL & ASIA', title:'Local & Asia — Clockenflap · China Tour · S2O · Taiwan',
    body:'International names catch the eye — but what I\'ve achieved as an Asia-based artist matters just as much.\n\nClockenflap live set, Taste of Blue Full China Tour 2024 (9 cities, November), S2O Festival HK, Taiwan mini tour incl. Kaohsiung Otobasho (rebooked).',
    vids:['o99esn5cZiQ'],
    imgs:[['Taste of Blue — China Tour 2024 Poster','assets/china-tour-poster.jpg']],
    links:[['📸 China Tour 2024 Poster (IG)','https://www.instagram.com/p/DBQyaRYPaqs/'],
      ['🎬 Shanghai Stop Highlights (IG Reel)','https://www.instagram.com/reel/DB6lx2vvPeJ/'],
      ['🎬 S2O Festival HK Highlights (IG Reel)','https://www.instagram.com/reel/DaTZJuGzHPo/'],
      ['🎬 Taiwan Otobasho Show Highlights (IG Reel)','https://www.instagram.com/reel/DHo0J2TTpgv/'],
      ['🎧 Eason Chan「裙下之臣」TOB Mashup Remix (SoundCloud)','https://on.soundcloud.com/BIlbfQAoCXx8hhpOr3']] },
  b3: { tag:'blue', label:'BLUE PILL LAB · TASTE OF BLUE', title:'Taste of Blue — Event Organising × Artist Collaboration',
    body:'Event Coordinator / Music Producer\n\nOrganising Hong Kong local electronic music events (Abyss852) and bridging the scene with forward-thinking content — including a collaboration with Taiwan-based AI singer NYRA.',
    vids:['ieJpklzCzlM'],
    links:[['📸 Abyss852 Event Post (IG)','https://www.instagram.com/p/DFjy_1dxwdB/'],
      ['🎬 Abyss852 Event Reel 1 (IG)','https://www.instagram.com/reel/C-2mo5OvX6t/'],
      ['🎬 Abyss852 Event Reel 2 (IG)','https://www.instagram.com/reel/C6YahWcvj8c/'],
      ['🎬 Abyss852 Event Reel 3 (IG)','https://www.instagram.com/reel/CsWTDxlrI2X/']] },
  b4: { tag:'blue', label:'BLUE PILL LAB · PRESS WALL', title:'Media Coverage — Taste of Blue',
    body:'Selected press features:',
    links:[['Esquire HK — Taste of Blue feature','https://www.esquirehk.com/lifestyle/taste-of-blue'],
      ['HK01 — 2023年值得留意的香港電子音樂人','https://www.hk01.com/%E7%9C%BE%E6%A8%82%E8%BF%B7/854977/'],
      ['Mixmag Asia — Artists Exciting Us in 2024','https://mixmag.asia/feature/artists-exciting-us-in-2024-august'],
      ['Mixmag Asia — Taste of Blue China Tour','https://mixmag.asia/read/taste-of-blue-china-tour-whole-month-of-november-local'],
      ['Mixmag Asia — Studio Fire / Prion Era First Release','https://mixmag.asia/read/taste-of-blue-studio-fire-label-first-release-domina-red-beach-prion-era-new-releases']] },
  b5: { tag:'blue', label:'CONTACT · LUCKY DRAW 🎁', title:'Get in Touch — Lucky Draw',
    body:'If you want to join the lucky draw, please send your:\n1. Instagram profile link\n2. Email address\n3. Phone number (optional)\n\n4. Follow CHRØNYX Instagram page and pick the favourite post or reel you like the most — comment what you feel about that post on it~\n\nThank you for supporting me and hope to give the free ticket to you with respect and love 💚',
    links:[['📱 +852 6339 7327','tel:+85263397327'],
      ['IG @taste_of_Blue','https://www.instagram.com/taste_of_Blue'],
      ['IG @chronyx_xynorhc','https://www.instagram.com/chronyx_xynorhc']] },
};

// 展框封面相（user 未撳入去之前見到嘅 image）
const THUMBS = {
  r1:'assets/thumbs/40yvHKSG2Zg.jpg', r2:'assets/thumbs/rcDyp2n9OGI.jpg',
  r3:'assets/thumbs/mPEqpFp3q58.jpg', r4:'assets/thumbs/voodoo-boo.jpg',
  r5:'assets/thumbs/docudrama.jpg',   r6:'assets/thumbs/YkDTNMo1kCY.jpg',
  b1:'assets/thumbs/HGpJAA-Z8d0.jpg', b2:'assets/china-tour-poster.jpg',
  b3:'assets/thumbs/ieJpklzCzlM.jpg', b4:'assets/thumbs/press-wall.jpg',
  b5:'assets/thumbs/contact.jpg',
};

// ============ SCENE SETUP ============
const canvas = document.getElementById('scene-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050508);
const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 100);

scene.add(new THREE.HemisphereLight(0xffffff, 0x334455, 1.1));
const dir = new THREE.DirectionalLight(0xffffff, 0.8); dir.position.set(5,10,4); scene.add(dir);

// Rooms geometry: Reception x[-6,6] z[-5,5]; Red x[-22,-6]; Blue x[6,22]; all z[-5,5], height 4
const H = 4, interactives = [];

function canvasTexture(draw, w=512, h=512) {
  const c = document.createElement('canvas'); c.width=w; c.height=h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// ---- Photo thumb texture: loads work image, cover-fit + bottom title bar; falls back to placeholder ----
function photoTexture(workId, title, sub, color, w, h, fallbackDraw) {
  const c = document.createElement('canvas'); c.width=w; c.height=h;
  const g = c.getContext('2d');
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const drawFallback = () => { g.clearRect(0,0,w,h); fallbackDraw(g,w,h); };
  const drawTitleBar = () => {
    const barH = h*0.30;
    const gr = g.createLinearGradient(0,h-barH,0,h);
    gr.addColorStop(0,'rgba(0,0,0,0)'); gr.addColorStop(0.5,'rgba(0,0,0,.72)'); gr.addColorStop(1,'rgba(0,0,0,.88)');
    g.fillStyle = gr; g.fillRect(0,h-barH,w,barH);
    g.fillStyle = '#ffffff'; g.textAlign='center';
    g.font = `bold ${Math.round(h*0.055)}px Arial`;
    const words = title.split(' '); let lines=[], cur='';
    for (const wd of words){ if((cur+' '+wd).length>18){lines.push(cur);cur=wd;} else cur=cur?cur+' '+wd:wd; }
    lines.push(cur);
    lines.slice(0,2).forEach((l,i)=>g.fillText(l, w/2, h - (sub? h*0.085 : h*0.06) - (lines.slice(0,2).length-1-i)*h*0.06));
    if (sub){ g.font = `${Math.round(h*0.034)}px Arial`; g.fillStyle='rgba(255,255,255,.75)'; g.fillText(sub, w/2, h - h*0.028); }
  };
  const url = THUMBS[workId];
  if (!url) { drawFallback(); return t; }
  const img = new Image();
  img.onload = () => {
    const s = Math.max(w/img.width, h/img.height);
    const dw = img.width*s, dh = img.height*s;
    g.drawImage(img, (w-dw)/2, (h-dh)/2, dw, dh);
    g.strokeStyle = color; g.lineWidth = Math.max(6, w*0.012); g.strokeRect(6,6,w-12,h-12);
    drawTitleBar();
    t.needsUpdate = true;
  };
  img.onerror = () => { drawFallback(); t.needsUpdate = true; };
  drawFallback(); // show placeholder until photo loads
  img.src = url;
  return t;
}
const whiteTex = canvasTexture((g,w,h)=>{ g.fillStyle='#f2f4f6'; g.fillRect(0,0,w,h);
  g.strokeStyle='rgba(180,190,200,.5)'; g.lineWidth=2;
  for(let i=0;i<=4;i++){ g.beginPath(); g.moveTo(i*w/4,0); g.lineTo(i*w/4,h); g.stroke(); g.beginPath(); g.moveTo(0,i*h/4); g.lineTo(w,i*h/4); g.stroke(); }});

// ---- Animated digital-rain texture (Matrix style) ----
function makeRain({ w=256, h=512, bg, fade, fg, glyph='アカサタナハマヤラワ0123456789ABCDEF<>+*†' }) {
  const c = document.createElement('canvas'); c.width=w; c.height=h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0,0,w,h);
  const cols = Math.floor(w/14);
  const drops = Array.from({length:cols}, () => Math.random()*h/16|0);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  function step(speed) {
    g.fillStyle = fade; g.fillRect(0,0,w,h);
    g.font = 'bold 13px monospace'; g.fillStyle = fg;
    for (let i=0;i<cols;i++){
      g.fillText(glyph[(Math.random()*glyph.length)|0], i*14, drops[i]*16);
      drops[i] += speed;
      if (drops[i]*16 > h && Math.random() > 0.975) drops[i] = 0;
    }
    tex.needsUpdate = true;
  }
  return { tex, step };
}
// Reception walls: white light rain flowing down (ref IMG_8167)
const rainWhite = makeRain({ bg:'#f2f4f6', fade:'rgba(242,244,246,0.10)', fg:'rgba(140,170,190,0.85)' });
// Red portal pill: red rain, FAST flow (1.8x white rain speed) — ref IMG_8165-2
const rainRed = makeRain({ bg:'#1a0205', fade:'rgba(26,2,5,0.06)', fg:'#ff3346' });
// Blue portal pill: blue rain, same spec — ref IMG_8165-2 left pill
const rainBlue = makeRain({ bg:'#020a18', fade:'rgba(2,10,24,0.06)', fg:'#4a9bff' });
const tileTex = canvasTexture((g,w,h)=>{ g.fillStyle='#4fa8d8'; g.fillRect(0,0,w,h);
  g.strokeStyle='#2d7ba8'; g.lineWidth=6;
  for(let i=0;i<=8;i++){ g.beginPath(); g.moveTo(i*w/8,0); g.lineTo(i*w/8,h); g.stroke(); g.beginPath(); g.moveTo(0,i*h/8); g.lineTo(w,i*h/8); g.stroke(); }});
tileTex.wrapS = tileTex.wrapT = THREE.RepeatWrapping;
const dreamTex = canvasTexture((g,w,h)=>{
  const gr = g.createLinearGradient(0,0,w,h);
  gr.addColorStop(0,'#f7b8e0'); gr.addColorStop(.45,'#b78ae0'); gr.addColorStop(.75,'#8a7ae0'); gr.addColorStop(1,'#7ab8e8');
  g.fillStyle=gr; g.fillRect(0,0,w,h);
  for(let i=0;i<40;i++){ g.beginPath(); g.arc(Math.random()*w,Math.random()*h,20+Math.random()*60,0,7);
    g.fillStyle=`rgba(255,255,255,${0.03+Math.random()*0.06})`; g.fill(); }});
dreamTex.wrapS = dreamTex.wrapT = THREE.RepeatWrapping;

function wallMat(tex, rx=2, ry=1) { const t = tex.clone(); t.needsUpdate=true; t.repeat.set(rx,ry);
  return new THREE.MeshStandardMaterial({ map:t, roughness:.85 }); }
const animatedTexes = []; // all canvas-texture clones needing per-frame GPU refresh
// animated rain wall material (clones share the same canvas source; all registered for refresh)
function rainWallMat(tex, rx=2, ry=1) {
  const t = tex.clone(); t.needsUpdate=true; t.repeat.set(rx,ry);
  animatedTexes.push(t);
  return new THREE.MeshStandardMaterial({ map:t, emissive:0xffffff, emissiveMap:t, emissiveIntensity:.35, roughness:.7 });
}

// Build one room: cx = center x; tex for floor/ceiling; doors: 'left','right' gaps; wallsTex optional animated wall texture
function buildRoom(cx, tex, doors, wallsTex=null) {
  const g = new THREE.Group();
  const W = 12, D = 10; // room size
  const mkWall = wallsTex ? rainWallMat.bind(null, wallsTex) : wallMat.bind(null, tex);
  const floorT = tex.clone(); floorT.needsUpdate=true; floorT.repeat.set(3,3);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W,D), new THREE.MeshStandardMaterial({ map:floorT, roughness:.9 }));
  floor.rotation.x = -Math.PI/2; floor.position.set(cx,0,0); g.add(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W,D), wallMat(tex,3,3));
  ceil.rotation.x = Math.PI/2; ceil.position.set(cx,H,0); g.add(ceil);
  // front (z=-5) & back (z=+5) walls
  for (const z of [-D/2, D/2]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(W,H), mkWall(3,1));
    m.position.set(cx, H/2, z); if (z<0) m.rotation.y = 0; else m.rotation.y = Math.PI;
    g.add(m);
  }
  // side walls with optional door gap (door z in [-1.2,1.2], height 3)
  for (const side of [-1,1]) {
    const x = cx + side*W/2;
    const hasDoor = (side<0 && doors.includes('left')) || (side>0 && doors.includes('right'));
    const isPillDoor = doors.includes('pill'); // pill portals: full wall on both sides, pill mesh placed separately
    if (!hasDoor || isPillDoor) {
      // pill doors: render the FULL wall (rain texture) — no visible gap at all
      const m = new THREE.Mesh(new THREE.PlaneGeometry(D,H), mkWall(2.5,1));
      m.position.set(x,H/2,0); m.rotation.y = side<0 ? Math.PI/2 : -Math.PI/2; g.add(m);
    } else {
      // two segments: z[-5,-1.2], z[1.2,5], plus lintel above door
      for (const [zc, zw] of [[-3.1, 3.8],[3.1, 3.8]]) {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(zw,H), mkWall(zw/4,1));
        m.position.set(x,H/2,zc); m.rotation.y = side<0 ? Math.PI/2 : -Math.PI/2; g.add(m);
      }
      const lintel = new THREE.Mesh(new THREE.PlaneGeometry(2.4, H-3), mkWall(1,.3));
      lintel.position.set(x, 3+(H-3)/2, 0); lintel.rotation.y = side<0 ? Math.PI/2 : -Math.PI/2; g.add(lintel);
      // glowing portal frame (only for doors without a solid pill portal)
      if (!(side<0 && doors.includes('pill'))) {
        const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.4,3),
          new THREE.MeshBasicMaterial({ color: side<0 ? 0xff2244 : 0xcc88ff, transparent:true, opacity:.18, side:THREE.DoubleSide }));
        glow.position.set(x,1.5,0); glow.rotation.y = Math.PI/2; g.add(glow);
        const frame = new THREE.Mesh(new THREE.TorusGeometry(1.35,.06,8,32),
          new THREE.MeshStandardMaterial({ color:0x111111, emissive: side<0 ? 0xff2244 : 0xcc88ff, emissiveIntensity:1.6 }));
        frame.position.set(x,1.5,0); frame.rotation.y = Math.PI/2; frame.scale.y = 1.15; g.add(frame);
      }
    }
  }
  scene.add(g);
  return g;
}

// soft gallery plaster walls for Red Pill Gallery (ref: Red Pill Gallery Overall room reference.jpg)
const plasterTex = canvasTexture((g,w,h)=>{ const gr=g.createLinearGradient(0,0,0,h);
  gr.addColorStop(0,'#8ea5b7'); gr.addColorStop(.55,'#a9bdcc'); gr.addColorStop(1,'#95abbd');
  g.fillStyle=gr; g.fillRect(0,0,w,h);
  for(let i=0;i<400;i++){ g.fillStyle=`rgba(255,255,255,${Math.random()*0.035})`; g.fillRect(Math.random()*w,Math.random()*h,2,2); }});
plasterTex.wrapS = plasterTex.wrapT = THREE.RepeatWrapping;

buildRoom(0, whiteTex, ['left','right','pill'], rainWhite.tex);  // Reception — animated white rain walls
buildRoom(-16, plasterTex, ['right']);         // Red Pill Gallery — gallery plaster walls
// Blue Pill Lab → 自建有機洞穴（見下面 CAVE section，取代原本長方形房間）

// ---- Pill portals: tall slim capsules (floor→ceiling), fast fibre rain (1.8x reception speed) — ref IMG_8165-2 ----
rainRed.tex.repeat.set(2.2, 1.4);
rainBlue.tex.repeat.set(2.2, 1.4);
function pillPortal(x, rainTex, glowColor) {
  const pill = new THREE.Mesh(new THREE.CapsuleGeometry(0.95, 2.1, 8, 24),
    new THREE.MeshStandardMaterial({ map:rainTex, emissive:glowColor, emissiveMap:rainTex, emissiveIntensity:1.5, roughness:1, metalness:0 }));
  pill.position.set(x, 2.0, 0); pill.scale.set(1.05, 1, 0.7); scene.add(pill);
  const glow = new THREE.PointLight(glowColor, 18, 8); glow.position.set(x*0.87, 1.8, 0); scene.add(glow);
}
pillPortal(-6, rainRed.tex, 0xff2233);   // Red Pill Gallery portal
pillPortal(6, rainBlue.tex, 0x4488ff);   // Blue Pill Lab portal

// lights per room
const pl1 = new THREE.PointLight(0xffffff, 60, 30); pl1.position.set(0,3.4,0); scene.add(pl1);
const pl2 = new THREE.PointLight(0xdfeaf2, 14, 26); pl2.position.set(-16,2.4,0); scene.add(pl2);
const pl3 = new THREE.PointLight(0x66ffe0, 45, 30); pl3.position.set(14,2.6,0); scene.add(pl3);
const plPink = new THREE.PointLight(0xff77dd, 26, 15); plPink.position.set(14,3.3,0); scene.add(plPink); // 粉紅網布嘅光晕
for (const lx of [10, 18]) { const l = new THREE.PointLight(0x66ffe0, 24, 14); l.position.set(lx,2.2,0); scene.add(l); } // 洞穴補光

// ---- Reception: big profile screen on front wall (z=-5) ----
const screenMat = new THREE.MeshBasicMaterial({ color:0x220044 });
const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(8,4.5), screenMat);
screenMesh.position.set(0,2.1,-4.92); scene.add(screenMesh);
new THREE.TextureLoader().load('assets/profile-screen.jpg',
  t => { t.colorSpace = THREE.SRGBColorSpace; screenMat.map = t; screenMat.color.set(0xffffff); screenMat.needsUpdate = true; },
  undefined,
  err => console.warn('profile texture failed', err));
{
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(8.4,4.9,.12), new THREE.MeshStandardMaterial({ color:0x0a0a0a, roughness:.3, metalness:.6 }));
  bezel.position.set(0,2.1,-5.04); scene.add(bezel); // 前面 = -4.98，永遠喺螢幕(-4.92)後面，避免 z-fighting
}

// ---- Reception: CV panel on back wall (z=+5) ----
{
  const t = canvasTexture((g,w,h)=>{ g.fillStyle='#0d1b2a'; g.fillRect(0,0,w,h);
    g.strokeStyle='#0ff'; g.lineWidth=8; g.strokeRect(10,10,w-20,h-20);
    g.fillStyle='#0ff'; g.font='bold 90px Arial'; g.textAlign='center'; g.fillText('CV', w/2, h/2+30); });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(2,2), new THREE.MeshStandardMaterial({ map:t, emissive:0x0088aa, emissiveMap:t, emissiveIntensity:.5 }));
  p.position.set(0,2,4.92); p.rotation.y = Math.PI; p.userData.work='cv'; scene.add(p); interactives.push(p);
}

// ---- Reception: 4 ceiling speakers (stylised HS7) ----
{
  const boxG = new THREE.BoxGeometry(.45,.65,.4);
  const boxM = new THREE.MeshStandardMaterial({ color:0x151515, roughness:.5 });
  const coneM = new THREE.MeshStandardMaterial({ color:0xdddddd, roughness:.4 });
  for (const [sx,sz] of [[-1,-1],[1,-1],[-1,1],[1,1]]) {
    const grp = new THREE.Group();
    const box = new THREE.Mesh(boxG, boxM); grp.add(box);
    const cone = new THREE.Mesh(new THREE.CircleGeometry(.14,24), coneM);
    cone.position.set(0,-.08,.21); grp.add(cone);
    const cone2 = new THREE.Mesh(new THREE.CircleGeometry(.06,24), coneM);
    cone2.position.set(0,.18,.21); grp.add(cone2);
    grp.position.set(sx*5.2, H-.5, sz*4.2);
    grp.lookAt(0,0,0); grp.rotateX(-.5);
    scene.add(grp);
  }
}

// ---- Gallery panels ----
function panel(cx, z, rotY, work, color, title) {
  const fallback = (g,w,h)=>{ g.fillStyle='#0a0f18'; g.fillRect(0,0,w,h);
    g.strokeStyle=color; g.lineWidth=10; g.strokeRect(12,12,w-24,h-24);
    g.fillStyle=color; g.font='bold 44px Arial'; g.textAlign='center';
    const words = title.split(' '); let lines=[], cur='';
    for (const wd of words){ if((cur+' '+wd).length>18){lines.push(cur);cur=wd;} else cur=cur?cur+' '+wd:wd; }
    lines.push(cur);
    lines.slice(0,4).forEach((l,i)=>g.fillText(l, w/2, h/2 - (lines.length-1)*28 + i*56)); };
  const t = photoTexture(work, title, '', color, 1024, 683, fallback);
  const p = new THREE.Mesh(new THREE.PlaneGeometry(3,2), new THREE.MeshStandardMaterial({ map:t, emissive:new THREE.Color(color), emissiveMap:t, emissiveIntensity:.45 }));
  p.position.set(cx,2,z); p.rotation.y = rotY; p.userData.work = work;
  scene.add(p); interactives.push(p);
  const f = new THREE.Mesh(new THREE.BoxGeometry(3.2,2.2,.08), new THREE.MeshStandardMaterial({ color:0x111111, roughness:.4, metalness:.5 }));
  f.position.set(cx - Math.sin(rotY)*0.05, 2, z - Math.cos(rotY)*0.05); f.rotation.y = rotY;
  scene.add(f);
}

// ---- Red Pill Gallery: curated gallery system ----
// artwork canvas: photo thumb + title bar; fallback = Zima-blue gradient + title (ref: overall room photo)
function artTexture(work, title, sub) {
  const fallback = (g,w,h)=>{
    const gr=g.createLinearGradient(0,0,0,h);
    gr.addColorStop(0,'#2a5fb8'); gr.addColorStop(.5,'#3b74d4'); gr.addColorStop(1,'#1a3c7e');
    g.fillStyle=gr; g.fillRect(0,0,w,h);
    const sheen=g.createLinearGradient(0,0,w,h); sheen.addColorStop(0,'rgba(255,255,255,.12)'); sheen.addColorStop(.5,'rgba(255,255,255,0)');
    g.fillStyle=sheen; g.fillRect(0,0,w,h);
    g.fillStyle='rgba(255,255,255,.95)'; g.textAlign='center';
    g.font='bold 44px Arial';
    const words=title.split(' '); let lines=[], cur='';
    for (const wd of words){ if((cur+' '+wd).length>16){lines.push(cur);cur=wd;} else cur=cur?cur+' '+wd:wd; }
    lines.push(cur);
    lines.slice(0,4).forEach((l,i)=>g.fillText(l, w/2, h-120-(lines.length-1)*52+i*52));
    if (sub){ g.font='24px Arial'; g.fillStyle='rgba(255,255,255,.7)'; g.fillText(sub, w/2, h-50); }
  };
  return photoTexture(work, title, sub, '#f4f6f8', 512, 768, fallback);
}
// wall-mounted framed artwork + ceiling spotlight (ref 1)
function wallFrame(work, x, z, rotY, title, sub) {
  const art = new THREE.Mesh(new THREE.PlaneGeometry(1.7,2.5), new THREE.MeshStandardMaterial({ map:artTexture(work,title,sub), roughness:.35 }));
  art.position.set(x,2,z); art.rotation.y=rotY; art.userData.work=work;
  scene.add(art); interactives.push(art);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(2.0,2.8,.09), new THREE.MeshStandardMaterial({ color:0xf4f6f8, roughness:.5 }));
  frame.position.set(x - Math.sin(rotY)*0.06, 2, z - Math.cos(rotY)*0.06); frame.rotation.y=rotY; scene.add(frame);
  const spot = new THREE.SpotLight(0xffffff, 50, 12, 0.55, 0.6);
  spot.position.set(x - Math.sin(rotY)*1.2, H-0.05, z - Math.cos(rotY)*1.2);
  spot.target = art; scene.add(spot);
  const can = new THREE.Mesh(new THREE.CylinderGeometry(.09,.12,.12,16), new THREE.MeshStandardMaterial({ color:0xdddddd }));
  can.position.set(x - Math.sin(rotY)*1.2, H-0.06, z - Math.cos(rotY)*1.2); scene.add(can);
}
// freestanding tall frame, main works (ref 2) — double-sided art, plinth base
function standFrame(work, x, z, rotY, title, sub) {
  const tex = artTexture(work,title,sub);
  for (const s of [0, Math.PI]) {
    const art = new THREE.Mesh(new THREE.PlaneGeometry(1.5,2.7), new THREE.MeshStandardMaterial({ map:tex, roughness:.3 }));
    const off = 0.055;
    art.position.set(x + Math.sin(rotY+s)*off, 1.55, z + Math.cos(rotY+s)*off);
    art.rotation.y = rotY+s; art.userData.work=work; scene.add(art); interactives.push(art);
  }
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.75,2.95,.1), new THREE.MeshStandardMaterial({ color:0xf4f6f8, roughness:.45 }));
  frame.position.set(x,1.55,z); frame.rotation.y=rotY; scene.add(frame);
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.0,.14,.5), new THREE.MeshStandardMaterial({ color:0xdfe4e8, roughness:.6 }));
  base.position.set(x,0.07,z); base.rotation.y=rotY; scene.add(base);
  const spot = new THREE.SpotLight(0xffffff, 40, 10, 0.6, 0.7);
  spot.position.set(x, H-0.05, z); const tgt = new THREE.Object3D(); tgt.position.set(x,1.2,z); scene.add(tgt);
  spot.target = tgt; scene.add(spot);
  const can = new THREE.Mesh(new THREE.CylinderGeometry(.09,.12,.12,16), new THREE.MeshStandardMaterial({ color:0xdddddd }));
  can.position.set(x, H-0.06, z); scene.add(can);
}

// Red Pill Gallery layout (room x∈[-22,-10], entrance from Reception on its right wall)
// MAIN works: freestanding frames in the middle, facing the entrance
standFrame('r6', -16.5, -1.6, Math.PI/2, 'APPLE STORE × PRIDE MV', 'Kitty Yang × Taste of Blue');
standFrame('r3', -16.5,  1.6, Math.PI/2, 'MOSCHINO', 'Year of the Tiger BGM');
// wall-mounted works
wallFrame('r1', -19.5, -4.9, 0,       'VANN JEWELRY', 'Brand Film Sound');
wallFrame('r2', -12.8, -4.9, 0,       'AGE OF TANKS', 'Game Trailer Audio');
wallFrame('r4', -19.5,  4.9, Math.PI, 'VOODOO BOO PARK', 'Theme Park Sound');
wallFrame('r5', -12.8,  4.9, Math.PI, '你是你的傳奇', 'Docudrama Songs');

// ==================== BLUE PILL LAB — ORGANIC CAVE ====================
// ref: 銀綠洞穴（空間主體）· 藍/橙霓虹光框（展框）· 粉紅網布（天花）
const rockTex = canvasTexture((g,w,h)=>{
  g.fillStyle='#0c1414'; g.fillRect(0,0,w,h);
  for(let i=0;i<2600;i++){ const v=Math.random();
    g.fillStyle=`rgba(${40+v*40},${70+v*50},${70+v*45},${0.05+Math.random()*0.12})`;
    g.fillRect(Math.random()*w,Math.random()*h,2+Math.random()*4,1+Math.random()*3); }
  g.strokeStyle='rgba(120,170,165,.15)'; g.lineWidth=1;
  for(let i=0;i<40;i++){ g.beginPath(); let x=Math.random()*w,y=Math.random()*h; g.moveTo(x,y);
    for(let j=0;j<5;j++){ x+=(Math.random()-.5)*40; y+=(Math.random()-.5)*40; g.lineTo(x,y);} g.stroke(); }
});
rockTex.wrapS=rockTex.wrapT=THREE.RepeatWrapping; rockTex.repeat.set(6,2);

// 洞穴隧道：沿 X 軸嘅圓管，頂點加 noise 位移變成有機岩石形狀（x∈[6,22]）
{
  const caveGeo = new THREE.CylinderGeometry(5.5,5.5,16,48,20,true);
  caveGeo.rotateZ(Math.PI/2);
  const p = caveGeo.attributes.position;
  for (let i=0;i<p.count;i++){
    const x=p.getX(i), y=p.getY(i), z=p.getZ(i);
    const a=Math.atan2(z,y);
    const n=Math.sin(a*3+x*0.8)*0.5+Math.sin(a*7+x*1.7)*0.3+Math.sin(a*11+x*3.1)*0.15;
    const r=5.5*(1+0.16*n);
    p.setY(i, Math.cos(a)*r); p.setZ(i, Math.sin(a)*r);
  }
  caveGeo.computeVertexNormals();
  const cave = new THREE.Mesh(caveGeo, new THREE.MeshStandardMaterial({ map:rockTex, side:THREE.BackSide, roughness:.95 }));
  cave.position.set(14,1,0); scene.add(cave);
  // 洞穴地面（深色岩石）
  const ft = rockTex.clone(); ft.needsUpdate=true; ft.repeat.set(4,3);
  const caveFloor = new THREE.Mesh(new THREE.PlaneGeometry(16,10.8), new THREE.MeshStandardMaterial({ map:ft, roughness:.95 }));
  caveFloor.rotation.x=-Math.PI/2; caveFloor.position.set(14,0,0); scene.add(caveFloor);
  // 盡頭岩壁（x=22）
  const ct = rockTex.clone(); ct.needsUpdate=true;
  const cap = new THREE.Mesh(new THREE.CircleGeometry(6.5,32), new THREE.MeshStandardMaterial({ map:ct, roughness:1 }));
  cap.position.set(22,1,0); cap.rotation.y=-Math.PI/2; scene.add(cap);
  // 石板路（ref 3）
  const slabM = new THREE.MeshStandardMaterial({ color:0x1e2a2a, roughness:.9 });
  for (let x=6.6; x<21.6; x+=0.75){
    const s=new THREE.Mesh(new THREE.BoxGeometry(0.6,0.06,1.6+Math.random()*0.3), slabM);
    s.position.set(x,0.03,(Math.random()-.5)*0.15); s.rotation.y=(Math.random()-.5)*0.06; scene.add(s);
  }
}

// 粉紅發光網布天花（ref: ceiling reference.jpg）— wireframe 波浪布，loop 入面郁
let netMesh=null, netBase=null;
{
  netMesh = new THREE.Mesh(new THREE.PlaneGeometry(14.5,8.5,48,28),
    new THREE.MeshBasicMaterial({ color:0xff77dd, wireframe:true, transparent:true, opacity:.42, side:THREE.DoubleSide }));
  netMesh.rotation.x = -Math.PI/2; netMesh.position.set(14,3.2,0); scene.add(netMesh);
  const p=netMesh.geometry.attributes.position; netBase=new Float32Array(p.count*2);
  for(let i=0;i<p.count;i++){ netBase[i*2]=p.getX(i); netBase[i*2+1]=p.getY(i); }
}

// 霓虹光框展框（ref: blue/orange light box）— 扇形面向入口，S=整體放大倍數
function neonFrame(work, x, z, rotY, title, sub, color=0x4a9bff, S=1){
  const fallback = (g,w,h)=>{ g.fillStyle='#04101c'; g.fillRect(0,0,w,h);
    g.strokeStyle='#9fd4ff'; g.lineWidth=10; g.strokeRect(12,12,w-24,h-24);
    g.fillStyle='#cfeaff'; g.font='bold 44px Arial'; g.textAlign='center'; g.fillText(title,w/2,h/2); };
  const t = photoTexture(work, title, sub, '#9fd4ff', 1024, 640, fallback);
  const cy = Math.min(1.7*S, 2.6); // 放大時升高，Main 唔會被前面框遮住
  const art = new THREE.Mesh(new THREE.PlaneGeometry(2.5*S,1.6*S),
    new THREE.MeshStandardMaterial({ map:t, emissive:0xffffff, emissiveMap:t, emissiveIntensity:.55, side:THREE.DoubleSide }));
  art.position.set(x,cy,z); art.rotation.y=rotY; art.userData.work=work;
  scene.add(art); interactives.push(art);
  const m = new THREE.MeshBasicMaterial({ color });
  const W=2.7*S, Hf=1.85*S, T=0.07*S;
  const grp = new THREE.Group();
  const top = new THREE.Mesh(new THREE.BoxGeometry(W,T,T), m); top.position.y=Hf/2; grp.add(top);
  const bot = top.clone(); bot.position.y=-Hf/2; grp.add(bot);
  const l = new THREE.Mesh(new THREE.BoxGeometry(T,Hf,T), m); l.position.x=-W/2; grp.add(l);
  const r = l.clone(); r.position.x=W/2; grp.add(r);
  grp.position.set(x,cy,z); grp.rotation.y=rotY; scene.add(grp);
}
// 放射式策展排列（owner 手繪概念圖）：訪客喺 x≈9 出隧道，
// Main 喺最深處正中放大聚焦，2nd 貼身側翼，其餘扇形圍住，全部框面扭向入口
neonFrame('b1', 20.2,  0.0, -Math.PI/2,       'HÖR BERLIN', 'Main Act of the Night', 0xffaa33, 1.5); // MAIN
neonFrame('b2', 17.6, -2.9, -Math.PI/2+0.72,  'LOCAL & ASIA', 'Clockenflap · China Tour · S2O · TW', 0x4a9bff, 1.15); // 2nd
neonFrame('b3', 17.6,  2.9, -Math.PI/2-0.72,  'TASTE OF BLUE', 'Event Organising × Artist Collaboration');
neonFrame('b4', 13.4, -3.3, -Math.PI/2+0.95,  'PRESS WALL', 'Esquire · HK01 · Mixmag');
neonFrame('b5', 13.4,  3.3, -Math.PI/2-0.95,  'CONTACT', 'Lucky Draw · Get in touch', 0xcc88ff);

// ==================== DOORWAY TUNNELS ====================
// 短門道（唔延長距離）：藥丸後面 3 米隧道，完全遮擋視覺
function buildTunnel(cx, style){
  const LEN=3.0;
  if (style==='grid'){ // 🔴 Red：黑底白線框網格（ref: door way option ref.jpg）
    const box = new THREE.Mesh(new THREE.BoxGeometry(LEN,3.2,2.8,1,1,1),
      new THREE.MeshBasicMaterial({ color:0x000000, side:THREE.BackSide }));
    box.position.set(cx,1.6,0); scene.add(box);
    const wire = new THREE.Mesh(new THREE.BoxGeometry(LEN*0.99,3.1,2.7,5,5,4),
      new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:true, transparent:true, opacity:.75 }));
    wire.position.set(cx,1.6,0); scene.add(wire);
  } else { // 🔵 Blue：波浪玻璃隧道（ref: blue room door way.jpg）+ 內層黑管遮擋
    const inner = new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.5,LEN,32,1,true),
      new THREE.MeshBasicMaterial({ color:0x010a0c, side:THREE.BackSide }));
    inner.geometry.rotateZ(Math.PI/2); inner.position.set(cx,1.6,0); scene.add(inner);
    const geo = new THREE.CylinderGeometry(1.7,1.7,LEN,32,12,true);
    geo.rotateZ(Math.PI/2);
    const pos = geo.attributes.position;
    for(let i=0;i<pos.count;i++){
      const x=pos.getX(i), y=pos.getY(i), z=pos.getZ(i);
      const a=Math.atan2(z,y);
      const r=1.7+0.22*Math.sin(a*4+x*2.2);
      pos.setY(i, Math.cos(a)*r); pos.setZ(i, Math.sin(a)*r);
    }
    geo.computeVertexNormals();
    const tube = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color:0x9ff2e8, transparent:true, opacity:.3, roughness:.15, metalness:.85,
      side:THREE.DoubleSide, emissive:0x1a8f84, emissiveIntensity:.5 }));
    tube.position.set(cx,1.6,0); scene.add(tube);
  }
}
buildTunnel(-7.5,'grid');  // Red Pill 門道（喺紅房嗰邊，Reception 見唔到）
buildTunnel(7.5,'wave');   // Blue Pill 門道（喺藍洞穴嗰邊）

// room title signs (floating text planes)
function sign(x, z, rotY, text, color) {
  const t = canvasTexture((g,w,h)=>{ g.clearRect(0,0,w,h); g.fillStyle=color; g.font='bold 60px Arial'; g.textAlign='center'; g.fillText(text,w/2,h/2+22); },1024,128);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(6,.75), new THREE.MeshBasicMaterial({ map:t, transparent:true, side:THREE.DoubleSide }));
  m.position.set(x,3.4,z); m.rotation.y=rotY; scene.add(m);
}
sign(0,4.9,Math.PI,'RECEPTION','#00ffff');
sign(7.2,0,-Math.PI/2,'BLUE PILL LAB · TASTE OF BLUE','#9ff2e8');

// ---- Reception 牆上指示牌：紅藍藥丸方向導引 ----
function directionSign(x, z, rotY, line1, line2, color, arrowLeft){
  const t = canvasTexture((g,w,h)=>{
    g.clearRect(0,0,w,h);
    // 深色半透明底板 + 主色描邊
    g.fillStyle='rgba(8,12,18,.85)';
    g.beginPath(); g.roundRect(6,6,w-12,h-12,26); g.fill();
    g.strokeStyle=color; g.lineWidth=6; g.stroke();
    // 箭嘴（三角形+柄），指向藥丸
    const ax = arrowLeft ? 90 : w-90, dir = arrowLeft ? -1 : 1, ay = h/2;
    g.fillStyle=color;
    g.beginPath();
    g.moveTo(ax+dir*46, ay); g.lineTo(ax-dir*10, ay-38); g.lineTo(ax-dir*10, ay-14);
    g.lineTo(ax-dir*62, ay-14); g.lineTo(ax-dir*62, ay+14); g.lineTo(ax-dir*10, ay+14);
    g.lineTo(ax-dir*10, ay+38); g.closePath(); g.fill();
    // 文字
    const tx = arrowLeft ? 170 : 60, align='left';
    g.textAlign=align;
    g.fillStyle='#ffffff'; g.font='bold 44px Arial';
    g.fillText(line1, tx, h/2-14);
    g.fillStyle=color; g.font='bold 40px Arial';
    g.fillText(line2, tx, h/2+42);
  },1024,256);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(3.6,.9),
    new THREE.MeshBasicMaterial({ map:t, transparent:true, side:THREE.DoubleSide }));
  m.position.set(x,2.3,z); m.rotation.y=rotY; scene.add(m);
}
// 左牆（紅藥丸側，企於大螢幕同紅門之間）：箭嘴指向 +z（本地 -x 方向）
directionSign(-5.92,-2.7, Math.PI/2,'FOR CORPORATE PORTFOLIO','PLEASE ENTER THE RED PILL','#ff3346', true);
// 右牆（藍藥丸側）
directionSign( 5.92,-2.7,-Math.PI/2,'ARTIST PORTFOLIO','PLEASE ENTER THE BLUE PILL','#4a9bff', false);

// ============ PLAYER CONTROLS ============
const player = { x:0, z:3, yaw:0, pitch:0 };
const keys = {};
addEventListener('keydown', e => keys[e.code]=true);
addEventListener('keyup',   e => keys[e.code]=false);

let dragging=false, lx=0, ly=0;
canvas.addEventListener('pointerdown', e => { if (e.pointerType==='touch') return; dragging=true; lx=e.clientX; ly=e.clientY; moved=0; });
addEventListener('pointerup', () => dragging=false);
let moved=0;
addEventListener('pointermove', e => {
  if (!dragging) return;
  const dx=e.clientX-lx, dy=e.clientY-ly; lx=e.clientX; ly=e.clientY;
  moved += Math.abs(dx)+Math.abs(dy);
  player.yaw -= dx*0.004; player.pitch = Math.max(-1.2, Math.min(1.2, player.pitch - dy*0.004));
});

// ============ TOUCH CONTROLS (iPhone / Android) ============
// 左半屏：虛擬 joystick（推前後=行、推左右=轉向）；右半屏：拖動環顧；輕點展品=開啟
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const joyBase = document.getElementById('joy-base');
const joyKnob = document.getElementById('joy-knob');
const joy = { x:0, y:0 }; // -1..1
let moveT = null, lookT = null;
if (isTouch) {
  document.getElementById('controls-hint').textContent = 'LEFT THUMB: WALK & TURN · RIGHT THUMB: LOOK · TAP ARTWORK TO OPEN';
  document.getElementById('hud').textContent = '👈 WALK & TURN · LOOK 👉 · TAP ARTWORK';
}
canvas.addEventListener('touchstart', e => {
  e.preventDefault();
  for (const t of e.changedTouches) {
    if (t.clientX < innerWidth*0.45 && !moveT) {
      moveT = { id:t.identifier, x0:t.clientX, y0:t.clientY };
      joyBase.style.display = 'block';
      joyBase.style.left = t.clientX+'px'; joyBase.style.top = t.clientY+'px';
      joyKnob.style.transform = 'translate(-50%,-50%)';
    } else if (!lookT) {
      lookT = { id:t.identifier, x:t.clientX, y:t.clientY, moved:0, time:performance.now() };
    }
  }
}, { passive:false });
canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  for (const t of e.changedTouches) {
    if (moveT && t.identifier === moveT.id) {
      const dx = t.clientX - moveT.x0, dy = t.clientY - moveT.y0;
      const len = Math.hypot(dx,dy), max = 48;
      const k = len > max ? max/len : 1;
      joy.x = (dx*k)/max; joy.y = (dy*k)/max;
      joyKnob.style.transform = `translate(calc(-50% + ${dx*k}px), calc(-50% + ${dy*k}px))`;
    } else if (lookT && t.identifier === lookT.id) {
      const dx = t.clientX - lookT.x, dy = t.clientY - lookT.y;
      lookT.x = t.clientX; lookT.y = t.clientY;
      lookT.moved += Math.abs(dx)+Math.abs(dy);
      player.yaw -= dx*0.005; player.pitch = Math.max(-1.2, Math.min(1.2, player.pitch - dy*0.005));
    }
  }
}, { passive:false });
canvas.addEventListener('touchend', e => {
  for (const t of e.changedTouches) {
    if (moveT && t.identifier === moveT.id) {
      moveT = null; joy.x = 0; joy.y = 0; joyBase.style.display = 'none';
    } else if (lookT && t.identifier === lookT.id) {
      // tap (短時間+少移動) → 開展品
      if (lookT.moved < 12 && performance.now() - lookT.time < 400) {
        const ndc = new THREE.Vector2((t.clientX/innerWidth)*2-1, -(t.clientY/innerHeight)*2+1);
        raycaster.setFromCamera(ndc, camera);
        const hits = raycaster.intersectObjects(interactives);
        if (hits.length && hits[0].distance < 6) openModal(hits[0].object.userData.work);
      }
      lookT = null;
    }
  }
}, { passive:false });
canvas.addEventListener('touchcancel', () => { moveT=null; lookT=null; joy.x=0; joy.y=0; joyBase.style.display='none'; });

// collision: room rects + door corridors
const regions = [
  {x1:-6+0.35, x2:6-0.35, z1:-5+0.35, z2:5-0.35},      // reception
  {x1:-22+0.35, x2:-6-0.35, z1:-5+0.35, z2:5-0.35},    // red
  {x1:6+0.35, x2:22-0.35, z1:-5+0.35, z2:5-0.35},      // blue
  {x1:-7.6, x2:-4.4, z1:-1.2, z2:1.2},             // door L tunnel
  {x1:4.4, x2:7.6, z1:-1.2, z2:1.2},               // door R tunnel
];
function allowed(x,z){ return regions.some(r => x>=r.x1 && x<=r.x2 && z>=r.z1 && z<=r.z2); }

let lastRoom = 'RECEPTION';
function roomOf(x,z){ if (x<-6.6) return 'RED PILL GALLERY'; if (x>6.6) return 'BLUE PILL LAB'; return 'RECEPTION'; }
const fade = document.getElementById('fade');
const roomLabel = document.getElementById('room-label');

// ============ INTERACTION ============
const raycaster = new THREE.Raycaster();
const tip = document.getElementById('interact-tip');
let hovered = null;
function checkHover(){
  raycaster.setFromCamera(new THREE.Vector2(0,0), camera);
  const hits = raycaster.intersectObjects(interactives);
  hovered = hits.length && hits[0].distance < 6 ? hits[0].object : null;
  tip.style.display = hovered ? 'block' : 'none';
}
canvas.addEventListener('click', () => { if (moved < 8 && hovered) openModal(hovered.userData.work); });

// ============ MODAL ============
const wrap = document.getElementById('modal-wrap');
const content = document.getElementById('modal-content');
function openModal(id){
  const w = WORKS[id]; if (!w) return;
  let html = `<span class="tag ${w.tag}">${w.label}</span><h2>${w.title}</h2>`;
  if (w.body) html += `<p>${w.body}</p>`;
  if (w.vids) for (const v of w.vids)
    html += `<div class="vid"><iframe src="https://www.youtube.com/embed/${v}" allowfullscreen allow="autoplay; encrypted-media"></iframe></div>`;
  if (w.imgs) for (const [alt,src] of w.imgs)
    html += `<img src="${src}" alt="${alt}" style="width:100%;border-radius:6px;margin-bottom:14px">`;
  if (w.audio) for (const [label,src] of w.audio)
    html += `<p style="margin-bottom:4px">🎵 ${label}</p><audio controls src="${src}"></audio>`;
  if (w.links) { html += `<div class="btn-row">` + w.links.map(([t,u])=>`<a href="${u}" target="_blank">${t}</a>`).join('') + `</div>`; }
  content.innerHTML = html;
  wrap.classList.add('open');
}
document.getElementById('modal-close').onclick = () => { wrap.classList.remove('open'); content.innerHTML=''; };
wrap.addEventListener('click', e => { if (e.target===wrap){ wrap.classList.remove('open'); content.innerHTML=''; } });

// ============ MAIN LOOP ============
const clock = new THREE.Clock();
let rainAccW = 0, rainAccR = 0;
function loop(){
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), .05);
  // animated digital rain — white (reception) normal speed, red (pill) slower
  rainAccW += dt; rainAccR += dt;
  let rainDirty = false;
  if (rainAccW > 0.07) { rainWhite.step(0.5); rainAccW = 0; rainDirty = true; }
  if (rainAccR > 0.07) { rainRed.step(0.9); rainBlue.step(0.9); rainAccR = 0; rainDirty = true; }
  if (rainDirty) for (const t of animatedTexes) t.needsUpdate = true;
  // 粉紅網布波浪動畫（洞穴天花）
  if (netMesh){
    const p=netMesh.geometry.attributes.position, t=clock.elapsedTime;
    for(let i=0;i<p.count;i++){
      const bx=netBase[i*2], by=netBase[i*2+1];
      p.setZ(i, Math.sin(bx*0.9+t*0.9)*0.35 + Math.cos(by*1.1+t*0.6)*0.3);
    }
    p.needsUpdate=true;
  }
  const spd = 4*dt;
  let mx=0, mz=0;
  if (keys['ArrowUp']||keys['KeyW']) mz += 1;
  if (keys['ArrowDown']||keys['KeyS']) mz -= 1;
  if (keys['ArrowLeft']||keys['KeyA']) player.yaw += 1.8*dt;
  if (keys['ArrowRight']||keys['KeyD']) player.yaw -= 1.8*dt;
  // mobile joystick: 推上=行前、推下=退後、推左右=轉向
  if (moveT) { mz += -joy.y; player.yaw -= joy.x * 2.0 * dt; }
  if (mz){
    const nx = player.x - Math.sin(player.yaw)*spd*mz;
    const nz = player.z - Math.cos(player.yaw)*spd*mz;
    if (allowed(nx, player.z)) player.x = nx;
    if (allowed(player.x, nz)) player.z = nz;
  }
  camera.position.set(player.x, 1.7, player.z);
  camera.rotation.set(0,0,0);
  camera.rotateY(player.yaw); camera.rotateX(player.pitch);

  const room = roomOf(player.x, player.z);
  if (room !== lastRoom){
    lastRoom = room; roomLabel.textContent = room;
    fade.style.background = room==='RED PILL GALLERY' ? '#ff2244' : room==='BLUE PILL LAB' ? '#cc88ff' : '#ffffff';
    fade.style.opacity = .55; setTimeout(()=>fade.style.opacity=0, 180);
  }
  checkHover();
  renderer.render(scene, camera);
}
loop();

addEventListener('resize', () => {
  camera.aspect = innerWidth/innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// Enter overlay
document.getElementById('enter-btn').onclick = () => {
  document.getElementById('enter-overlay').classList.add('hidden');
};
if (new URLSearchParams(location.search).has('autoenter')) {
  document.getElementById('enter-overlay').style.display = 'none';
}
// debug: ?px=-16&pz=0&yaw=0 to start elsewhere
{
  const q = new URLSearchParams(location.search);
  if (q.has('px')) player.x = parseFloat(q.get('px'));
  if (q.has('pz')) player.z = parseFloat(q.get('pz'));
  if (q.has('pyaw')) player.yaw = parseFloat(q.get('pyaw'));
}
