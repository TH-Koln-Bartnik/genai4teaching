// Erzeugt index.html aus data/tab-4-1.json.
// Ändert sich die Tabelle im Buch, genügt: node build.mjs && npx hyperframes render
import { readFileSync, writeFileSync } from "node:fs";

const d = JSON.parse(readFileSync(new URL("./data/tab-4-1.json", import.meta.url)));

// ---------- Layout (Pixel auf 1920 × 1080) ----------
const W = 345, H = 150, GAP = 18;
const L = { x: 80, y: 140, w: 1120, h: 580 };     // Zone Lehrperson
const K = { x: 1260, y: 140, w: 580, h: 580 };    // Zone KI
const PAD = { x: 24, y: 64 };
const S_KI = 0.72, S_P = 0.74, S_MIX = 0.87;      // Skalen: KI-Zone, Augmentierung, gemischt

const slot = (i) => ({
  left: L.x + PAD.x + (i % 3) * (W + GAP),
  top: L.y + PAD.y + Math.floor(i / 3) * (H + GAP),
});
const kiSlot = (j) => ({
  left: K.x + PAD.x + (j % 2) * (W * S_KI + GAP),
  top: K.y + PAD.y + Math.floor(j / 2) * (H * S_KI + GAP),
});

// ---------- Zeitplan (Sekunden) ----------
const T = { tilesIn: 0.8, v: 5.0, vMove: 6.2, p: 12.5, w: 20.0, end: 29.0, total: 38 };

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const tag = { V: "Automatisierung", P: "Augmentierung", W: "neu" };

let ghosts = "", tiles = "", news = "";
const V = [], P = [], MIX = [];
d.aufgaben.forEach((a, i) => {
  const s = slot(i);
  ghosts += `<div class="ghost" style="left:${s.left}px;top:${s.top}px"></div>\n`;
  tiles += `<div id="t-${a.id}" class="tile eff-${a.effekt}" style="left:${s.left}px;top:${s.top}px">
  <div class="hatch"></div><span class="tag">${a.gemischt ? "gemischt" : tag[a.effekt]}</span>
  <span class="txt">${esc(a.text)}</span>${a.gemischt ? '<span class="badge">?</span>' : ""}</div>\n`;
  if (a.effekt === "V") V.push({ id: a.id, from: s, to: kiSlot(V.length) });
  else (a.gemischt ? MIX : P).push(a.id);
});
// Neue Aufgaben: zuerst in die frei gewordenen Plätze, die letzte darunter
const freeSlots = d.aufgaben.map((a, i) => (a.effekt === "V" ? i : -1)).filter((i) => i >= 0);
d.neu.forEach((n, k) => {
  const s = k < freeSlots.length ? slot(freeSlots[k]) : slot(10); // Reihe 4, Mitte
  news += `<div id="n-${n.id}" class="tile eff-W" style="left:${s.left}px;top:${s.top}px">
  <span class="tag">${tag.W}</span><span class="txt">${esc(n.text)}</span></div>\n`;
});

const legend = ["V", "P", "W"].map((k, i) =>
  `<div id="leg-${k}" class="leg"><span class="sw sw-${k}"></span><b>${i + 1}&nbsp;${d.effekte[k].name}</b><span>${d.effekte[k].satz}</span></div>`
).join("\n");

const js = `
const tl = gsap.timeline({ paused: true });
// Auftakt
tl.fromTo(".zone", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" }, 0);
tl.fromTo("#title .w", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.13, stagger: 0.067 }, 0.2);
tl.fromTo("#foot", { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.6);
tl.fromTo(".eff-V, .eff-P", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.45, stagger: 0.07, ease: "expo.out" }, ${T.tilesIn});
tl.set(".eff-W", { opacity: 0 }, 0);

// 1 Automatisierung
tl.fromTo("#leg-V", { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2 }, ${T.v});
tl.to(".eff-V", { backgroundColor: "#C81E0F", borderColor: "#C81E0F", color: "#ffffff", duration: 0.4, stagger: 0.1 }, ${T.v + 0.2});
tl.fromTo(".eff-V .tag", { opacity: 0 }, { opacity: 1, duration: 0.3 }, ${T.v + 0.3});
${V.map((v, j) => `tl.fromTo("#t-${v.id}", { x: 0, y: 0, scale: 1 }, { x: ${(v.to.left - v.from.left).toFixed(1)}, y: ${(v.to.top - v.from.top).toFixed(1)}, scale: ${S_KI}, duration: 1.0, ease: "power2.inOut" }, ${(T.vMove + j * 0.55).toFixed(2)});`).join("\n")}

// 2 Augmentierung
tl.fromTo("#leg-P", { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2 }, ${T.p});
tl.to(".eff-P", { backgroundColor: "#FDEBDD", borderColor: "#EA5A00", duration: 0.4, stagger: 0.08 }, ${T.p + 0.1});
tl.fromTo(".eff-P .hatch", { opacity: 0 }, { opacity: 1, duration: 0.4 }, ${T.p + 0.1});
tl.fromTo(".eff-P .tag", { opacity: 0 }, { opacity: 1, duration: 0.3 }, ${T.p + 0.3});
${P.map((id, j) => `tl.fromTo("#t-${id}", { scale: 1 }, { scale: ${S_P}, duration: 0.8, ease: "power3.out" }, ${(T.p + 1.3 + j * 0.15).toFixed(2)});`).join("\n")}
${MIX.map((id, j) => `tl.fromTo("#t-${id}", { scale: 1 }, { scale: ${S_MIX}, duration: 0.8, ease: "power3.out" }, ${(T.p + 1.9 + j * 0.15).toFixed(2)});`).join("\n")}
tl.fromTo(".badge", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.4)" }, ${T.p + 3.0});

// 3 Neue Aufgaben
tl.fromTo("#leg-W", { opacity: 0, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2 }, ${T.w});
${d.neu.map((n, k) => {
  const t = k < 4 ? T.w + 0.4 + k * 0.6 : T.w + 3.2;
  return `tl.fromTo("#n-${n.id}", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" }, ${t.toFixed(2)});`;
}).join("\n")}
tl.fromTo("#ext", { opacity: 0 }, { opacity: 1, duration: 0.4 }, ${T.w + 2.9});
tl.fromTo("#ext-q", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2 }, ${T.w + 3.9});

// Schluss
tl.to("#title", { opacity: 0, filter: "blur(6px)", duration: 0.2 }, ${T.end});
tl.fromTo("#final .w", { opacity: 0, filter: "blur(6px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.13, stagger: 0.067 }, ${T.end + 0.2});
window.__timelines["main"] = tl;
tl.seek(0);
`;

const words = (s) => s.split(" ").map((w) => `<span class="w">${w}</span>`).join(" ");

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=1920, height=1080" />
<script src="assets/gsap.min.js"></script>
<style>
:root { --ground:#F5F5F7; --ink:#1D1D1F; --gray:#6B6B73; --red:#C81E0F; --orange:#EA5A00; --magenta:#B43092; }
* { margin:0; padding:0; box-sizing:border-box; }
html, body { width:1920px; height:1080px; overflow:hidden; background:var(--ground); }
#root { position:relative; width:100%; height:100%; font-family:Inter, sans-serif; color:var(--ink); }
.head { position:absolute; left:80px; top:44px; font-size:46px; font-weight:700; letter-spacing:-0.02em; }
#final b { color:var(--magenta); }
.zone { position:absolute; border:2px solid #D2D2D7; border-radius:16px; background:#FFFFFF80; }
.zone .zl { position:absolute; left:24px; top:18px; font-size:24px; font-weight:700; color:var(--gray); letter-spacing:0.04em; text-transform:uppercase; }
#ext { position:absolute; left:${L.x}px; top:${L.y + L.h}px; width:${L.w}px; height:170px; border:2px dashed var(--magenta); border-top:none; border-radius:0 0 16px 16px; }
#ext-q { position:absolute; left:${slot(11).left + 10}px; top:${slot(11).top + 44}px; width:330px; font-size:26px; font-weight:700; color:var(--magenta); line-height:1.25; }
.ghost { position:absolute; width:${W}px; height:${H}px; border:2px dashed #A1A1A8; border-radius:10px; }
.tile { position:absolute; width:${W}px; height:${H}px; border-radius:10px; background:#FFFFFF; border:2px solid #C9C9CF;
  padding:16px 20px; display:flex; flex-direction:column; justify-content:space-between; transform-origin:0 0; overflow:hidden; }
.tile .txt { position:relative; font-size:25px; font-weight:700; line-height:1.22; }
.tile .tag { position:relative; font-size:17px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; opacity:0; }
.tile .hatch { position:absolute; inset:0; opacity:0; background:repeating-linear-gradient(135deg, transparent 0 14px, #EA5A0026 14px 17px); }
.eff-P .tag { color:#A84300; }
.eff-V { z-index:5; }
.eff-W { border:3px solid var(--magenta); box-shadow: inset 10px 0 0 var(--magenta); padding-left:30px; }
.eff-W .tag { color:var(--magenta); opacity:1; }
.badge { position:absolute; right:14px; top:10px; width:40px; height:40px; border-radius:20px; background:#A84300; color:#fff;
  font-size:28px; font-weight:900; display:flex; align-items:center; justify-content:center; opacity:0; }
#legend { position:absolute; left:80px; top:938px; width:1760px; display:flex; gap:40px; }
.leg { display:flex; align-items:center; gap:12px; font-size:23px; opacity:0; white-space:nowrap; }
.leg b { font-weight:700; }
.leg span:last-child { color:var(--gray); }
.sw { width:34px; height:34px; border-radius:6px; flex:none; }
.sw-V { background:var(--red); }
.sw-P { background:#FDEBDD repeating-linear-gradient(135deg, transparent 0 6px, #EA5A0066 6px 8px); border:2px solid var(--orange); }
.sw-W { background:#fff; border:3px solid var(--magenta); box-shadow: inset 7px 0 0 var(--magenta); }
#foot { position:absolute; left:80px; top:1010px; font-size:18px; color:var(--gray); }
</style>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-duration="${T.total}" data-width="1920" data-height="1080">
  <div id="scene" class="clip" data-start="0" data-duration="${T.total}" data-track-index="0" data-layout-allow-overlap>
    <div class="zone" style="left:${L.x}px;top:${L.y}px;width:${L.w}px;height:${L.h}px"><span class="zl">Lehrperson</span></div>
    <div class="zone" style="left:${K.x}px;top:${K.y}px;width:${K.w}px;height:${K.h}px"><span class="zl">KI</span></div>
    <div id="ext"></div>
    <div id="ext-q">Passt das noch in die Woche?</div>
${ghosts}${tiles}${news}
    <h1 id="title" class="head">${words("Was macht generative KI mit den Aufgaben Lehrender?")}</h1>
    <h1 id="final" class="head">${words("Der Aufgaben-Mix ändert sich.")} ${words("Ob Zeit frei wird, ist")} <b>${words("offen.")}</b></h1>
    <div id="legend">${legend}</div>
    <div id="foot">Schema nach Acemoglu, Kong &amp; Restrepo (2025); Aufgaben aus Tab. 4.1. Kachelgrößen sind nicht gemessen.</div>
  </div>
</div>
<script>${js}</script>
</body>
</html>
`;
writeFileSync(new URL("./index.html", import.meta.url), html);
console.log(`index.html geschrieben: ${d.aufgaben.length} Aufgaben, ${d.neu.length} neue, ${T.total} s`);
