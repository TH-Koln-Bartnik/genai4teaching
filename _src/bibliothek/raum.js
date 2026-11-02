// Bibliothek der Prompts: der begehbare 3D-Raum.
// Laiensicht: Three.js ist eine Programmbibliothek, die im Browser über die Grafikkarte
// (WebGL) dreidimensionale Szenen zeichnet. Hier entsteht eine Halle mit 22 Regalen.
// Alle rund 500 Bücher sind ein einziges „Instanzen-Objekt“: Die Grafikkarte zeichnet
// dasselbe Quader-Modell 500-mal an verschiedenen Stellen, in einem Arbeitsgang.
// Gezeichnet wird nur, wenn sich etwas bewegt; steht man still, ruht die Grafikkarte.
import * as THREE from "three";

const K = 0.42;          // Meter Buchbreite je Prozentpunkt
const MIN_B = 0.042;     // Mindestbreite (entspricht 0,10 %)
const FACH_H = 0.44;     // Abstand der Regalböden
const MAX_FAECHER = 5;
const GANG = 1.55;       // halbe Gangbreite (Regalfront bis Gangmitte)
const AUGE = 1.6;

function palette() {
  const dunkel = matchMedia("(prefers-color-scheme: dark)").matches;
  return dunkel
    ? { himmel: 0x1b1f26, boden: 0x2a2f37, wand: 0x232830, holz: 0x4a4f58, buch: [0x8a9099, 0xb6bcc4], akzent: 0xff6b5b, schrift: "#e6edf3", schild: "rgba(22,27,34,0.92)" }
    : { himmel: 0xe4e4e8, boden: 0xc9c9ce, wand: 0xd9d9de, holz: 0x6c6c72, buch: [0x8e8e95, 0xd6d6db], akzent: 0xc81e0f, schrift: "#1b1b1b", schild: "rgba(255,255,255,0.94)" };
}

function zufall(s) { let x = 0; for (const c of s) x = (x * 31 + c.charCodeAt(0)) >>> 0; return (x % 1000) / 1000; }
const fmt = (x) => x.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Bücher auf Böden verteilen: Bodenlänge so wählen, dass höchstens fünf Böden reichen.
function packe(buecher) {
  const breiten = buecher.map((b) => Math.max(MIN_B, b.pct * K));
  const summe = breiten.reduce((a, b) => a + b, 0);
  let L = Math.max(0.9, Math.max(...breiten) + 0.06, summe / MAX_FAECHER * 1.06);
  for (;;) {
    const faecher = [[]]; let x = 0;
    breiten.forEach((w, i) => {
      if (x + w > L - 0.04 && faecher[faecher.length - 1].length) { faecher.push([]); x = 0; }
      faecher[faecher.length - 1].push({ i, x, w }); x += w + 0.004;
    });
    if (faecher.length <= MAX_FAECHER) return { L, faecher };
    L *= 1.08;
  }
}

function schild(text1, text2, breite, p) {
  const c = document.createElement("canvas"); c.width = 1024; c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = p.schild; g.fillRect(0, 0, 1024, 256);
  g.fillStyle = p.schrift; g.textBaseline = "middle";
  g.font = "600 64px system-ui, Segoe UI, Arial, sans-serif";
  let t = text1; while (g.measureText(t).width > 980 && t.length > 4) t = t.slice(0, -2) + "…";
  g.fillText(t, 22, 84);
  g.font = "400 56px system-ui, Segoe UI, Arial, sans-serif"; g.fillText(text2, 22, 178);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(breite, breite / 4), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
  return m;
}

export function start(buehne, D, cb, opt) {
  const p = palette();
  // Kantenglättung kostet bei großen Flächen viel Rechenzeit; bei hoher Pixeldichte ist sie kaum sichtbar.
  const glatt = (devicePixelRatio || 1) < 1.5 && buehne.clientWidth * buehne.clientHeight < 700 * 400;
  const renderer = new THREE.WebGLRenderer({ antialias: glatt, powerPreference: "low-power" });
  const basisDichte = Math.min(devicePixelRatio || 1, 1.75);
  let faktor = 1, langsam = 0;
  renderer.setPixelRatio(basisDichte);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute("role", "application");
  canvas.setAttribute("aria-label", "3D-Rundgang durch 22 Regale. Pfeiltasten gehen, N und P wechseln das Regal, Enter öffnet die Bücherliste des Regals.");
  buehne.prepend(canvas);

  const szene = new THREE.Scene();
  szene.background = new THREE.Color(p.himmel);
  szene.fog = new THREE.Fog(p.himmel, 9, 34);
  const kamera = new THREE.PerspectiveCamera(62, 16 / 9, 0.05, 80);
  szene.add(new THREE.HemisphereLight(0xffffff, p.boden, 1.6));
  const sonne = new THREE.DirectionalLight(0xffffff, 1.4); sonne.position.set(3, 8, 4); szene.add(sonne);
  szene.add(new THREE.AmbientLight(0xffffff, 0.25));

  // Regale anordnen: Rang 1, 3, 5 … links, 2, 4, 6 … rechts; größte vorn.
  const regale = [...D.regale].sort((a, b) => a.rang - b.rang);
  const plan = [];
  const zLinks = { v: -1.0 }, zRechts = { v: -1.0 };
  regale.forEach((r, k) => {
    const pk = packe(r.buecher);
    const links = k % 2 === 0; const zz = links ? zLinks : zRechts;
    const mitteZ = zz.v - pk.L / 2; zz.v -= pk.L + 0.7;
    const x = links ? -GANG : GANG;
    const g = new THREE.Object3D(); g.position.set(x, 0, mitteZ); g.rotation.y = links ? Math.PI / 2 : -Math.PI / 2; g.updateMatrixWorld();
    plan.push({ r, pk, links, g, mitteZ, x });
  });
  const tiefe = Math.min(zLinks.v, zRechts.v) - 1;

  // Halle
  const halleL = -tiefe + 4;
  const boden = new THREE.Mesh(new THREE.PlaneGeometry(9, halleL), new THREE.MeshLambertMaterial({ color: p.boden }));
  boden.rotation.x = -Math.PI / 2; boden.position.set(0, 0, 3 - halleL / 2); szene.add(boden);
  const wandM = new THREE.MeshLambertMaterial({ color: p.wand });
  for (const sx of [-1, 1]) { const w = new THREE.Mesh(new THREE.PlaneGeometry(halleL, 4.2), wandM); w.position.set(sx * 3.1, 2.1, 3 - halleL / 2); w.rotation.y = -sx * Math.PI / 2; szene.add(w); }
  const rueck = new THREE.Mesh(new THREE.PlaneGeometry(9, 4.2), wandM); rueck.position.set(0, 2.1, tiefe - 1); szene.add(rueck);
  // Laufstreifen im Gang für Tiefenwirkung
  const streifenM = new THREE.MeshLambertMaterial({ color: p.holz, transparent: true, opacity: 0.25 });
  for (let z = 2; z > tiefe; z -= 2) { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.9), streifenM); s.rotation.x = -Math.PI / 2; s.position.set(0, 0.002, z); szene.add(s); }

  // Regalgestelle (eine Instanz je Brett/Seitenwand) und Bücher (eine Instanz je Buch)
  const tmp = new THREE.Object3D();
  const gestellTeile = [];
  const buchTeile = [];
  plan.forEach((e, ri) => {
    const { L, faecher } = e.pk; const H = MAX_FAECHER * FACH_H + 0.12;
    const teil = (sx, sy, sz, px, py, pz) => gestellTeile.push({ ri, sx, sy, sz, px, py, pz });
    teil(0.035, H, 0.32, -L / 2 - 0.02, H / 2, 0); teil(0.035, H, 0.32, L / 2 + 0.02, H / 2, 0);
    teil(L + 0.07, H, 0.02, 0, H / 2, -0.16);
    for (let f = 0; f <= MAX_FAECHER; f++) teil(L + 0.07, 0.03, 0.32, 0, 0.06 + f * FACH_H, 0);
    faecher.forEach((fach, fi) => fach.forEach(({ i, x, w }) => {
      const b = e.r.buecher[i]; const h = 0.27 + 0.08 * zufall(b.name_en + i);
      buchTeile.push({ ri, bi: i, w, h, px: -L / 2 + x + w / 2, py: 0.075 + (MAX_FAECHER - 1 - fi) * FACH_H + h / 2, pz: 0.01, ton: zufall(b.soc || "rest" + ri) });
    }));
    const s = schild(`${e.r.rang}. ${e.r.name}`, `${fmt(e.r.pct)} % der Gespräche · ${e.r.buecher.length} Bücher`, Math.max(1.6, Math.min(2.6, L + 0.4)), p);
    tmp.position.set(0, H + 0.38, 0.05); tmp.rotation.set(0, 0, 0); tmp.updateMatrix();
    s.applyMatrix4(new THREE.Matrix4().multiplyMatrices(e.g.matrixWorld, tmp.matrix));
    szene.add(s);
  });
  const gestell = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0xffffff }), gestellTeile.length);
  const holz = new THREE.Color(p.holz), akzent = new THREE.Color(p.akzent);
  gestellTeile.forEach((t, k) => {
    tmp.position.set(t.px, t.py, t.pz); tmp.scale.set(t.sx, t.sy, t.sz); tmp.rotation.set(0, 0, 0); tmp.updateMatrix();
    gestell.setMatrixAt(k, new THREE.Matrix4().multiplyMatrices(plan[t.ri].g.matrixWorld, tmp.matrix));
    gestell.setColorAt(k, holz);
  });
  szene.add(gestell);
  const buecher = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0xffffff }), buchTeile.length);
  const c0 = new THREE.Color(p.buch[0]), c1 = new THREE.Color(p.buch[1]);
  const grundfarbe = buchTeile.map((t) => c0.clone().lerp(c1, t.ton));
  buchTeile.forEach((t, k) => {
    tmp.position.set(t.px, t.py, t.pz); tmp.scale.set(t.w * 0.97, t.h, 0.22); tmp.rotation.set(0, 0, 0); tmp.updateMatrix();
    buecher.setMatrixAt(k, new THREE.Matrix4().multiplyMatrices(plan[t.ri].g.matrixWorld, tmp.matrix));
    buecher.setColorAt(k, grundfarbe[k]);
  });
  szene.add(buecher);

  // ---------- Kamera und Bewegung ----------
  const pos = new THREE.Vector3(0, AUGE, 2.6);
  let gier = 0, nick = -0.04; // Blick den Gang hinunter (−z)
  let ziel = null;            // laufende Kamerafahrt
  let aktuelles = -1;
  let sprungIndex = -1;
  let fahrt = false;     // nach einem Sprung gilt das Zielregal, bis man selbst geht oder sich umsieht  // Regal des letzten Sprungs; N/P zählen von hier, am Eingang von vorn
  const tasten = new Set();
  let laeuft = false, letzte = 0;
  const zRange = [tiefe + 0.5, 3];

  function grenzen() { pos.x = Math.max(-GANG + 0.45, Math.min(GANG - 0.45, pos.x)); pos.z = Math.max(zRange[0], Math.min(zRange[1], pos.z)); nick = Math.max(-0.9, Math.min(0.7, nick)); }
  function kameraSetzen() { kamera.position.copy(pos); kamera.rotation.set(nick, gier, 0, "YXZ"); }
  function groesse() {
    const w = buehne.clientWidth, h = buehne.clientHeight;
    renderer.setSize(w, h, false); kamera.aspect = w / h; kamera.updateProjectionMatrix(); anstossen();
  }
  new ResizeObserver(groesse).observe(buehne);

  function naechstesRegal() {
    let best = -1, bd = 1e9;
    plan.forEach((e, i) => { const d = Math.abs(e.mitteZ - pos.z) + (Math.sign(e.x) === Math.sign(Math.sin(-gier)) ? 0 : 0.8); if (d < bd) { bd = d; best = i; } });
    return best;
  }
  function meldeOrt() {
    if (fahrt) return;
    const i = naechstesRegal(); if (i === aktuelles) return; aktuelles = i;
    const r = plan[i].r; cb.onOrt(`Vor Ihnen: ${r.rang}. ${r.name} (${fmt(r.pct)} %)`);
  }

  function schritt(t) {
    const dt = Math.min(0.05, (t - letzte) / 1000 || 0.016); letzte = t;
    let bewegt = false;
    if (ziel) {
      const k = opt.reduziert ? 1 : Math.min(1, dt * 3.2);
      pos.lerp(ziel.pos, k);
      let dg = ziel.gier - gier; dg = Math.atan2(Math.sin(dg), Math.cos(dg)); gier += dg * k; nick += (ziel.nick - nick) * k;
      if (pos.distanceTo(ziel.pos) < 0.01 && Math.abs(dg) < 0.005) { pos.copy(ziel.pos); gier = ziel.gier; nick = ziel.nick; ziel = null; }
      bewegt = true;
    }
    const vor = (tasten.has("w") ? 1 : 0) - (tasten.has("s") ? 1 : 0);
    const dreh = (tasten.has("a") ? 1 : 0) - (tasten.has("d") ? 1 : 0);
    if (vor || dreh) {
      ziel = null; fahrt = false; sprungIndex = Math.max(-1, naechstesRegal() - 1);
      gier += dreh * dt * 1.6;
      pos.x += -Math.sin(gier) * vor * dt * 2.4; pos.z += -Math.cos(gier) * vor * dt * 2.4;
      bewegt = true;
    }
    grenzen(); kameraSetzen(); renderer.render(szene, kamera); zaehler++;
    // Adaptive Auflösung: sind 20 Bilder in Folge im Mittel langsamer als 30 ms, rechnet der
    // Raum mit weniger Bildpunkten (bis 60 %); das Bild wird etwas weicher, bleibt aber flüssig.
    if (bewegt || dauerlauf) {
      langsam = dt > 0.03 ? langsam + 1 : 0;
      if (langsam >= 20 && faktor > 0.6) { faktor = Math.max(0.6, faktor * 0.8); renderer.setPixelRatio(basisDichte * faktor); groesse(); langsam = 0; }
    }
    if (bewegt) meldeOrt();
    if (bewegt || dauerlauf) requestAnimationFrame(schritt); else laeuft = false;
  }
  function anstossen() { if (!laeuft) { laeuft = true; letzte = performance.now(); requestAnimationFrame(schritt); } }

  function springe(soc, sofort) {
    const i = plan.findIndex((e) => e.r.soc === soc); if (i < 0) return;
    const e = plan[i];
    const zielPos = new THREE.Vector3(e.x > 0 ? -0.95 : 0.95, AUGE, e.mitteZ);
    const blick = e.x > 0 ? -Math.PI / 2 : Math.PI / 2;
    // Abstand so wählen, dass das ganze Regal ins Bild passt (bei schmalem Bildschirm etwas weiter weg).
    const breit = e.pk.L + 0.3; const fovH = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(kamera.fov / 2)) * kamera.aspect);
    const abstand = Math.min(2 * GANG - 0.45, Math.max(1.4, breit / 2 / Math.tan(fovH / 2)));
    zielPos.x = e.x > 0 ? GANG - abstand : -GANG + abstand;
    ziel = { pos: zielPos, gier: blick, nick: -0.12 };
    fahrt = true; anstossen();
    if (sofort) { pos.copy(zielPos); gier = blick; nick = -0.12; ziel = null; }
    cb.onOrt(`Vor Ihnen: ${e.r.rang}. ${e.r.name} (${fmt(e.r.pct)} %)`); aktuelles = i; sprungIndex = i;
  }

  // Tastatur
  const karte = { ArrowUp: "w", w: "w", W: "w", ArrowDown: "s", s: "s", S: "s", ArrowLeft: "a", a: "a", A: "a", ArrowRight: "d", d: "d", D: "d" };
  canvas.addEventListener("keydown", (ev) => {
    if (karte[ev.key]) { tasten.add(karte[ev.key]); anstossen(); ev.preventDefault(); return; }
    if (ev.key === "n" || ev.key === "N" || ev.key === "PageDown") { const i = Math.min(plan.length - 1, sprungIndex + 1); springe(plan[i].r.soc); ev.preventDefault(); }
    else if (ev.key === "p" || ev.key === "P" || ev.key === "PageUp") { const i = Math.max(0, sprungIndex - 1); springe(plan[i].r.soc); ev.preventDefault(); }
    else if (ev.key === "Enter" || ev.key === " ") { const i = aktuelles < 0 ? naechstesRegal() : aktuelles; cb.onRegal(plan[i].r.soc, true); ev.preventDefault(); }
  });
  canvas.addEventListener("keyup", (ev) => { if (karte[ev.key]) tasten.delete(karte[ev.key]); });
  canvas.addEventListener("blur", () => tasten.clear());
  buehne.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && cb.onEsc()) ev.preventDefault(); });

  // Zeiger: ziehen = umsehen, tippen = Buch wählen
  let zug = null;
  canvas.addEventListener("pointerdown", (ev) => { zug = { x: ev.clientX, y: ev.clientY, g: gier, n: nick, weit: false }; canvas.setPointerCapture(ev.pointerId); canvas.focus({ preventScroll: true }); });
  canvas.addEventListener("pointermove", (ev) => {
    if (!zug) return; const dx = ev.clientX - zug.x, dy = ev.clientY - zug.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) zug.weit = true;
    if (zug.weit) { ziel = null; fahrt = false; gier = zug.g + dx * 0.005; nick = zug.n + dy * 0.004; grenzen(); kameraSetzen(); renderer.render(szene, kamera); meldeOrt(); }
  });
  canvas.addEventListener("pointerup", (ev) => {
    if (zug && !zug.weit) waehle(ev);
    zug = null;
  });
  const strahl = new THREE.Raycaster(); const maus = new THREE.Vector2();
  function waehle(ev) {
    const r = canvas.getBoundingClientRect();
    maus.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    strahl.setFromCamera(maus, kamera);
    const t = strahl.intersectObject(buecher)[0];
    if (!t) return;
    const bt = buchTeile[t.instanceId];
    markiereBuch(plan[bt.ri].r.soc, bt.bi);
    cb.onBuch(plan[bt.ri].r.soc, bt.bi);
  }
  // Knöpfe für Touch und Maus
  const steuer = document.createElement("div"); steuer.className = "steuer";
  steuer.innerHTML = `<button type="button" class="vor" data-t="w" aria-label="vorwärts">▲</button><button type="button" class="links" data-t="a" aria-label="nach links drehen">◀</button><button type="button" class="zurueck" data-t="s" aria-label="rückwärts">▼</button><button type="button" class="rechts" data-t="d" aria-label="nach rechts drehen">▶</button>`;
  steuer.querySelectorAll("button").forEach((b) => {
    const an = (ev) => { ev.preventDefault(); tasten.add(b.dataset.t); anstossen(); };
    const aus = () => tasten.delete(b.dataset.t);
    b.addEventListener("pointerdown", an); b.addEventListener("pointerup", aus); b.addEventListener("pointerleave", aus); b.addEventListener("pointercancel", aus);
    b.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") an(ev); });
    b.addEventListener("keyup", aus);
  });
  buehne.appendChild(steuer);

  // ---------- Markieren ----------
  let markiert = -1;
  function markiereBuch(soc, bi) {
    if (markiert >= 0) buecher.setColorAt(markiert, grundfarbe[markiert]);
    markiert = soc == null ? -1 : buchTeile.findIndex((t) => plan[t.ri].r.soc === soc && t.bi === bi);
    if (markiert >= 0) buecher.setColorAt(markiert, akzent);
    buecher.instanceColor.needsUpdate = true; anstossen();
  }
  function markiereRegal(soc) {
    gestellTeile.forEach((t, k) => gestell.setColorAt(k, plan[t.ri].r.soc === soc ? akzent : holz));
    gestell.instanceColor.needsUpdate = true; anstossen();
  }

  // ---------- Bildrate messen (Prüflauf) ----------
  let dauerlauf = false, zaehler = 0;
  function messen(ms) {
    return new Promise((ok) => {
      const vorher = { p: pos.clone(), g: gier, n: nick };
      dauerlauf = true; zaehler = 0; tasten.add("w"); tasten.add("a"); anstossen();
      const t0 = performance.now();
      setTimeout(() => {
        dauerlauf = false; tasten.clear();
        const fps = Math.round(zaehler * 1000 / (performance.now() - t0));
        pos.copy(vorher.p); gier = vorher.g; nick = vorher.n; sprungIndex = -1; aktuelles = -1; anstossen();
        ok({ fps, aufloesung: faktor });
      }, ms);
    });
  }

  groesse(); kameraSetzen(); meldeOrt(); anstossen();
  return {
    springe, markiereBuch, markiereRegal, messen,
    inBewegung: () => !!ziel,
    fokus() { canvas.focus({ preventScroll: true }); },
    info: () => ({ buecher: buchTeile.length, regale: plan.length, gestell: gestellTeile.length }),
  };
}
