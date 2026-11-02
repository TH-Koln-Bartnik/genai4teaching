// S5 „Das nächste Token – in neun Genres“: die neun Szenen als HTML/CSS + GSAP-Bewegungen.
// Bildsprache nach Primer A: Graustufen + eine Akzentfarbe (wie T1, #b45309; auf dunklem Grund #f59e0b),
// Leitobjekt ist das Token „Bank“ (in jeder Szene in Akzentfarbe), höchstens acht neue Bildwörter je Szene,
// Genre nur über Machart (Schrift, Rahmen, Bewegung), keine Figuren, Marken oder Filmzitate.
// Zeiten: ctx.wt("Wort") = ungefährer Zeitpunkt, an dem das Wort gesprochen wird (aus der Audiolänge).

// ---------- Tokenwerte (zur Bauzeit berechnet, ins Manifest geschrieben, im Test gegen T1 geprüft) ----------
export async function tokenwerte() {
  const { encode, decode } = await import("gpt-tokenizer/encoding/o200k_base");
  const zerlege = (s) => { const ids = encode(s); return { text: s, ids, teile: ids.map((i) => decode([i])) }; };
  const einzel = (s) => { const ids = encode(s); if (ids.length !== 1) throw new Error(`„${s}“ ist kein Einzeltoken`); return ids[0]; };
  return {
    tokenizer: "o200k_base (npm gpt-tokenizer 4.1.0)",
    lieferant: zerlege("Lieferantenbewertung"),
    supplier: zerlege("supplier evaluation"),
    satz: zerlege("Die Bank steht unter einem Baum."),
    kandidaten: Object.fromEntries([" Sie", " Er", " Im", " Kunden"].map((k) => [k, einzel(k)])),
    fortsetzung: [" Sie", " ist", " alt", "."].map((k) => ({ text: k, id: einzel(k) })),
    lehrwerte: { " Sie": 45, " Er": 27, " Im": 15, " Kunden": 1 },
  };
}

// ---------- Hilfen ----------
const J = JSON.stringify;
const F = (sel, von, nach, t) => `tl.fromTo(${J(sel)}, ${J(von)}, ${J(nach)}, ${t});`;
const TO = (sel, nach, t) => `tl.to(${J(sel)}, ${J(nach)}, ${t});`;
const SET = (sel, w, t) => `tl.set(${J(sel)}, ${J(w)}, ${t});`;
const ein = (sel, t, d = 0.4, extra = {}) => F(sel, { opacity: 0, ...extra.von }, { opacity: 1, duration: d, ...extra.nach }, t);
const sichtbar = (t) => t.replace(/^ /, "␣");          // Leerzeichen am Tokenanfang sichtbar machen (wie T1)
const chip = (text, cls = "", id = "") => `<span ${id ? `id="${id}" ` : ""}class="chip ${cls}">${sichtbar(text).replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>`;
const istBank = (t) => t.trim() === "Bank";
const kopf = (c, cls) => `
  <div class="genre-klein ${cls}"><span class="nr">${c.nr}/${c.n}</span> ${c.esc(c.s.genre)}</div>
  <div class="genre-gross ${cls}"><span>${c.esc(c.s.genre)}</span></div>`;

export const basisCss = `
:root { --A:#b45309; --Ad:#f59e0b; }
.szene { font-family: Inter, "DejaVu Sans", sans-serif; }
.genre-klein { position:absolute; left:40px; top:26px; font-size:24px; letter-spacing:.02em; z-index:20; opacity:0; }
.genre-klein .nr { font-family:"DejaVu Sans Mono", monospace; font-size:18px; opacity:.8; margin-right:8px; }
.genre-gross { position:absolute; left:0; right:0; top:290px; height:140px; display:flex; align-items:center; justify-content:center;
  font-size:76px; z-index:30; opacity:0; }
.genre-gross span { padding:6px 40px; }
.chip { display:inline-block; font-family:"DejaVu Sans Mono", monospace; white-space:pre; border:2px solid currentColor;
  border-radius:8px; padding:4px 12px; margin:0 6px; }
.tag { position:absolute; right:40px; bottom:28px; font-size:20px; border:2px dashed currentColor; border-radius:6px; padding:4px 12px; opacity:0; }
.cap { position:absolute; left:0; right:0; text-align:center; opacity:0; }
.hell { color:#1d1d1d; } .hell .genre-gross span { background:#ffffffe6; } .hell.genre-klein { color:#3d3d3d; }
.dunkel { color:#f2f2f2; } .dunkel .genre-gross span, .genre-gross.dunkel span { background:#000000d0; } .genre-klein.dunkel { color:#cfcfcf; }
.genre-gross.hell span { background:#ffffffe6; color:#1d1d1d; }
`;

// ---------- Die neun Szenen ----------
export const szenen = {
  // 1 Film noir: Text → Tokens
  s1(c) {
    const L = c.tok.lieferant.teile, S = c.tok.supplier.teile;
    const satz = [..."Die Bank steht unter einem Baum."].map((ch, i) => `<span class="z${i >= 4 && i <= 7 ? " ak" : ""}">${ch}</span>`).join("");
    const reihe = (teile, p) => teile.map((t, i) => `<span class="st ${p}-${i}"><span class="rahmen"></span>${[...t].map((ch) => `<span class="z">${ch === " " ? "&nbsp;" : ch}</span>`).join("")}</span>`).join("");
    const t = { satz: c.wt("Ein Text") - 0.3, zerl: c.wt("Es zerlegt"), lief: c.wt("Lieferantenbewertung") - 1.0, fuenf: c.wt("fünf Stücke"), sup: c.wt("Supplier") - 0.6, zwei: c.wt("Zwei"), vok: c.wt("Der Tokenizer") };
    return {
      html: `<div class="bg"></div><div class="jal"></div>${kopf(c, "dunkel noir")}
  <div class="satz">${satz}</div>
  <div class="zeile z1">${reihe(L, "l")}<span class="zahl n1">${L.length} Tokens</span></div>
  <div class="zeile z2">${reihe(S, "s")}<span class="zahl n2">${S.length} Tokens</span></div>
  <div class="cap c1">Text wird zu Tokens</div>`,
      css: `#s1 .bg { position:absolute; inset:0; background:radial-gradient(ellipse at 30% 20%, #2e2e2e, #0e0e0e 70%); }
#s1 .jal { position:absolute; inset:-80px; background:repeating-linear-gradient(162deg, #ffffff12 0 20px, transparent 20px 54px); }
#s1 .noir { font-family:"Courier 10 Pitch", Courier, monospace; }
#s1, #s1 .cap { color:#ededed; font-family:"Courier 10 Pitch", Courier, monospace; }
#s1 .satz { position:absolute; left:80px; top:110px; font-size:30px; color:#b8b8b8; letter-spacing:.04em; }
#s1 .satz .z, #s1 .zeile .z { opacity:0; }
#s1 .ak { color:var(--Ad); font-weight:700; }
#s1 .zeile { position:absolute; left:80px; font-size:58px; display:flex; align-items:center; }
#s1 .z1 { top:230px; } #s1 .z2 { top:390px; }
#s1 .st { position:relative; display:inline-block; }
#s1 .rahmen { position:absolute; inset:-6px -2px; border:3px solid #e6e6e6; border-radius:8px; opacity:0; }
#s1 .zahl { position:absolute; left:960px; font-size:40px; color:#cfcfcf; opacity:0; white-space:nowrap; }
#s1 .c1 { top:590px; font-size:44px; }`,
      js: [
        F("#s1 .jal", { x: -60 }, { x: 0, duration: c.d, ease: "none" }, c.t0),
        F("#s1 .satz .z", { opacity: 0 }, { opacity: 1, duration: 0.02, stagger: 0.045 }, t.satz),
        F("#s1 .z1 .z", { opacity: 0 }, { opacity: 1, duration: 0.02, stagger: 0.05 }, t.lief),
        ...L.map((_, i) => F(`#s1 .l-${i}`, { x: 0 }, { x: i * 22, duration: 0.5, ease: "power2.out" }, t.fuenf - 0.4)),
        F("#s1 .z1 .rahmen", { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08 }, t.fuenf - 0.2),
        ein("#s1 .n1", t.fuenf + 0.2),
        F("#s1 .z2 .z", { opacity: 0 }, { opacity: 1, duration: 0.02, stagger: 0.04 }, t.sup),
        ...S.map((_, i) => F(`#s1 .s-${i}`, { x: 0 }, { x: i * 22, duration: 0.5, ease: "power2.out" }, t.zwei - 0.3)),
        F("#s1 .z2 .rahmen", { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: 0.08 }, t.zwei - 0.1),
        ein("#s1 .n2", t.zwei + 0.2),
        ein("#s1 .c1", t.zerl, 0.5, { von: { y: 12 }, nach: { y: 0 } }),
      ].join("\n"),
    };
  },

  // 2 Naturdokumentation: Tokens → Nummern
  s2(c) {
    const { teile, ids } = c.tok.satz;
    const chips = teile.map((t, i) => `<div class="tk k${i}${istBank(t) ? " bank" : ""}">${chip(t)}<div class="id">${ids[i]}</div></div>`).join("");
    const t = { chips: c.wt("Die Bank"), sieben: c.wt("Sieben Tokens"), leer: c.wt("Das Leerzeichen"), nr: c.wt("feste Nummer"), die: c.wt("Das Token Die"), bank: c.wt("Unsere Bank"), ab: c.wt("Ab jetzt") };
    return {
      html: `<div class="bg"></div>
  <div class="ecke e1"></div><div class="ecke e2"></div><div class="ecke e3"></div><div class="ecke e4"></div>
  <div class="rec">● REC</div>${kopf(c, "hell doku")}
  <div class="reihe">${chips}</div>
  <div class="unten"><div class="cap c2">Tokens werden Nummern</div></div>`,
      css: `#s2 .bg { position:absolute; inset:0; background:radial-gradient(ellipse at 50% 45%, #f4f3f0, #dcdad5 85%); }
#s2 { color:#1f1f1f; }
#s2 .doku { font-family:"DejaVu Serif", serif; font-style:italic; }
#s2 .ecke { position:absolute; width:60px; height:60px; border-color:#4a4a4a; border-style:solid; border-width:0; }
#s2 .e1 { left:24px; top:76px; border-left-width:4px; border-top-width:4px; } #s2 .e2 { right:24px; top:76px; border-right-width:4px; border-top-width:4px; }
#s2 .e3 { left:24px; bottom:24px; border-left-width:4px; border-bottom-width:4px; } #s2 .e4 { right:24px; bottom:24px; border-right-width:4px; border-bottom-width:4px; }
#s2 .rec { position:absolute; right:44px; top:28px; font-family:"DejaVu Sans Mono", monospace; font-size:20px; color:#4a4a4a; }
#s2 .reihe { position:absolute; left:0; right:0; top:240px; display:flex; justify-content:center; gap:4px; }
#s2 .tk { text-align:center; opacity:0; }
#s2 .tk .chip { font-size:34px; color:#2a2a2a; background:#ffffffb0; }
#s2 .tk .id { font-family:"DejaVu Sans Mono", monospace; font-size:28px; margin-top:22px; color:#3a3a3a; opacity:0; }
#s2 .bank .chip, #s2 .bank .id { color:var(--A); font-weight:700; }
#s2 .unten { position:absolute; left:0; right:0; bottom:70px; }
#s2 .c2 { position:relative; font-family:"DejaVu Serif", serif; font-size:42px; }`,
      js: [
        F("#s2 .tk", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.32, ease: "power2.out" }, t.chips),
        F("#s2 .reihe", { scale: 1 }, { scale: 1.04, duration: 0.4, yoyo: true, repeat: 1 }, t.sieben),
        F("#s2 .tk .id", { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.18 }, t.nr),
        F("#s2 .k0 .id", { scale: 1 }, { scale: 1.25, duration: 0.3, yoyo: true, repeat: 1 }, t.die),
        F("#s2 .bank", { scale: 1 }, { scale: 1.18, duration: 0.35, yoyo: true, repeat: 1 }, t.bank),
        ein("#s2 .c2", t.nr - 0.3, 0.5, { von: { y: 14 }, nach: { y: 0 } }),
        F("#s2 .reihe", { x: 0 }, { x: -10, duration: c.d, ease: "none" }, c.t0),
      ].join("\n"),
    };
  },

  // 3 Kochshow: Nummer → Zahlenliste (Vektor) → Ort auf der Karte
  s3(c) {
    const werte = ["0,12", "−0,48", "0,91", "0,03", "−0,77", "0,35", "−0,20", "0,64"];
    const t = { karte: c.wt("Aus jeder Nummer") - 0.4, liste: c.wt("lange Zahlenliste"), vektor: c.wt("einen Vektor"), stadt: c.wt("Stadtplan"), nach: c.wt("Ähnliche Wörter"), bank: c.wt("Unsere Bank"), schema: c.wt("Die Karte hier") };
    return {
      html: `<div class="bg"></div>${kopf(c, "hell koch")}
  <div class="karte">
    <div class="kopfzeile">${chip(" Bank", "bk")}<span class="pfeil">→</span><span class="nr">9950</span></div>
    <div class="pfeil2">↓</div>
    <div class="liste">${werte.map((w) => `<span class="w">${w}</span>`).join("")}<span class="w">…</span></div>
  </div>
  <div class="plan">
    <div class="strassen"></div>
    <div class="pt geld"><i></i><b>Geld</b></div>
    <div class="pt park"><i></i><b>Park</b></div>
    <div class="pt bankpt"><i></i><b>Bank</b></div>
  </div>
  <div class="cap c3">Nummer wird Zahlenliste (Vektor)</div>
  <div class="tag t3">schematisch</div>`,
      css: `#s3 .bg { position:absolute; inset:0; background:#f6f6f4; background-image:linear-gradient(#e3e3e0 2px, transparent 2px), linear-gradient(90deg, #e3e3e0 2px, transparent 2px); background-size:64px 64px; }
#s3 { color:#1d1d1d; } #s3 .koch { font-family:Inter, sans-serif; font-weight:800; }
#s3 .karte { position:absolute; left:60px; top:110px; width:520px; height:430px; background:#fff; border-radius:22px; border:3px solid #cfcfcf; padding:26px 28px; opacity:0; }
#s3 .kopfzeile { display:flex; align-items:center; gap:14px; font-size:34px; }
#s3 .bk { color:var(--A); font-weight:700; } #s3 .nr { font-family:"DejaVu Sans Mono", monospace; font-size:38px; }
#s3 .pfeil { font-size:36px; color:#555; } #s3 .pfeil2 { font-size:40px; color:#555; margin:12px 0 6px 40px; }
#s3 .liste { display:flex; flex-wrap:wrap; gap:10px; }
#s3 .w { font-family:"DejaVu Sans Mono", monospace; font-size:28px; background:#ededeb; border-radius:10px; padding:6px 12px; opacity:0; }
#s3 .plan { position:absolute; left:640px; top:110px; width:580px; height:430px; background:#ffffff; border:3px solid #cfcfcf; border-radius:22px; overflow:hidden; opacity:0; }
#s3 .strassen { position:absolute; inset:0; background-image:linear-gradient(20deg, transparent 47%, #d8d8d8 47% 49%, transparent 49%), linear-gradient(110deg, transparent 30%, #d8d8d8 30% 31.5%, transparent 31.5%), linear-gradient(110deg, transparent 68%, #d8d8d8 68% 69.5%, transparent 69.5%); }
#s3 .pt { position:absolute; display:flex; flex-direction:column; align-items:center; gap:6px; opacity:0; }
#s3 .pt i { width:30px; height:30px; border-radius:50%; background:#3d3d3d; display:block; }
#s3 .pt b { font-size:28px; }
#s3 .geld { left:70px; top:90px; } #s3 .park { left:440px; top:270px; }
#s3 .bankpt { left:255px; top:180px; color:var(--A); } #s3 .bankpt i { background:var(--A); }
#s3 .c3 { top:575px; font-size:42px; font-weight:700; }
#s3 .t3 { color:#4a4a4a; }`,
      js: [
        ein("#s3 .karte", t.karte, 0.4, { von: { y: 30 }, nach: { y: 0 } }),
        F("#s3 .w", { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.16, ease: "bounce.out" }, t.liste),
        ein("#s3 .c3", t.vektor - 0.2),
        ein("#s3 .plan", t.stadt - 0.4),
        F("#s3 .geld, #s3 .park", { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.3, ease: "back.out(2)" }, t.nach),
        F("#s3 .bankpt", { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2)" }, t.bank),
        ein("#s3 .t3", t.schema),
      ].join("\n"),
    };
  },

  // 4 Sportreportage: Aufmerksamkeit, nur zurück
  s4(c) {
    const { teile } = c.tok.satz;
    const t = { tafel: c.wt("die Aufmerksamkeit") - 0.2, blick: c.wt("blickt das Modell"), nur: c.wt("Nur zurück"), park: c.wt("in Richtung Park"), viel: c.wt("Echte Modelle"), punkt: c.wt("Was kommt") };
    return {
      html: `<div class="bg"></div><div class="feld"></div>${kopf(c, "dunkel sport")}
  <div class="tafel">AUFMERKSAMKEIT</div>
  <div class="reihe">${teile.map((x, i) => `<span class="tk k${i}${istBank(x) ? " bank" : ""}">${chip(x)}</span>`).join("")}<span class="tk frage">${chip(" ? ")}</span></div>
  <svg class="bogen" viewBox="0 0 1280 720"><path d="M 870 252 C 820 120, 420 120, 372 250" fill="none" stroke="#f2f2f2" stroke-width="6"/><path d="M 356 232 L 372 262 L 392 236" fill="none" stroke="#f2f2f2" stroke-width="6" stroke-linejoin="round"/></svg>
  <div class="nur">← nur zurück</div>
  <div class="mini"><div class="m geld">Geld</div><div class="m park">Park</div><div class="bp"></div><div class="bl">Bank</div><div class="bp2"></div><div class="bl2">Bank im Satz</div><div class="zug"></div></div>`,
      css: `#s4 .bg { position:absolute; inset:0; background:#1b1b1b; }
#s4 .feld { position:absolute; inset:0; background:linear-gradient(90deg, transparent 49.8%, #3a3a3a 49.8% 50.2%, transparent 50.2%), radial-gradient(circle at 50% 50%, transparent 118px, #3a3a3a 118px 122px, transparent 122px); }
#s4 { color:#f2f2f2; } #s4 .sport { font-family:Inter, sans-serif; font-weight:900; font-style:italic; }
#s4 .tafel { position:absolute; left:0; right:0; top:84px; text-align:center; font-family:Inter, sans-serif; font-weight:900; font-style:italic; font-size:62px; letter-spacing:.04em; opacity:0; }
#s4 .reihe { position:absolute; left:0; right:0; top:262px; display:flex; justify-content:center; }
#s4 .tk .chip { font-size:28px; margin:0 3px; padding:4px 8px; background:#262626; }
#s4 .bank .chip { color:var(--Ad); font-weight:700; }
#s4 .frage { opacity:0; } #s4 .frage .chip { border-style:dashed; color:#cfcfcf; }
#s4 .bogen { position:absolute; inset:0; width:1280px; height:720px; opacity:0; }
#s4 .nur { position:absolute; left:0; right:0; top:342px; text-align:center; font-size:38px; font-weight:800; font-style:italic; opacity:0; }
#s4 .mini { position:absolute; left:290px; top:450px; width:700px; height:180px; border:3px solid #4a4a4a; border-radius:16px; opacity:0; }
#s4 .m { position:absolute; top:62px; font-size:34px; font-weight:800; color:#d8d8d8; } #s4 .geld { left:34px; } #s4 .park { right:34px; }
#s4 .bp { position:absolute; left:335px; top:72px; width:34px; height:34px; border-radius:50%; background:var(--Ad); }
#s4 .bl { position:absolute; left:318px; top:118px; font-size:26px; font-weight:800; color:var(--Ad); }
#s4 .bp2 { position:absolute; left:520px; top:52px; width:34px; height:34px; border-radius:50%; border:5px solid var(--Ad); opacity:0; }
#s4 .bl2 { position:absolute; left:470px; top:12px; font-size:24px; font-weight:800; color:var(--Ad); opacity:0; white-space:nowrap; }
#s4 .zug { position:absolute; left:372px; top:84px; width:150px; height:4px; background:repeating-linear-gradient(90deg, #d8d8d8 0 10px, transparent 10px 18px); transform-origin:0 50%; transform:rotate(-8deg); opacity:0; }`,
      js: [
        F("#s4 .tafel", { opacity: 0, scale: 1.6 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" }, t.tafel),
        F("#s4 .tk:not(.frage)", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.25, stagger: 0.07 }, c.t0 + 1.0),
        ein("#s4 .mini", c.t0 + 1.4),
        F("#s4 .bogen", { opacity: 0, scale: 0.85, transformOrigin: "50% 40%" }, { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }, t.blick),
        F("#s4 .nur", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.35, ease: "power3.out" }, t.nur),
        F("#s4 .zug", { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out" }, t.park),
        F("#s4 .bp2, #s4 .bl2", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }, t.park + 0.5),
        F("#s4 .reihe", { scale: 1 }, { scale: 1.03, duration: 0.25, yoyo: true, repeat: 3 }, t.viel),
        F("#s4 .frage", { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }, t.punkt),
      ].join("\n"),
    };
  },

  // 5 Wetterbericht: Verteilung über das nächste Token
  s5(c) {
    const lw = c.tok.lehrwerte;
    const symbol = { " Sie": "sonne", " Er": "wolke1", " Im": "wolke2", " Kunden": "niesel" };
    // „für jedes Token im Vokabular“: ein Streifen vieler kleiner Balken (deterministisch, schematisch)
    let streifen = "";
    for (let i = 0; i < 90; i++) streifen += `<i style="height:${(4 + ((i * 37) % 23) * (i % 7 === 0 ? 2.2 : 0.6)).toFixed(0)}px"></i>`;
    const t = { kopf: c.wt("Die Vorhersage") + 0.6, vok: c.wt("für jedes Token"), sie: c.wt("Sie, fünf"), er: c.wt("Er, sieben"), im: c.wt("Im, fünf"), ku: c.wt("Und Kunden"), lehr: c.wt("Das sind Lehrwerte") };
    const zeilen = Object.entries(lw).map(([k, v], i) => `<div class="z z${i}"><span class="lab">${sichtbar(k)}</span><span class="balken"><b style="width:${v * 13}px"></b></span><span class="pz">${v} %</span><span class="sym ${symbol[k]}"></span></div>`).join("");
    return {
      html: `<div class="bg"></div><svg class="iso" viewBox="0 0 1280 720"><path d="M-20 600 C 300 480, 600 700, 1300 520" /><path d="M-20 660 C 360 560, 700 760, 1300 600" /><path d="M-20 160 C 400 260, 800 60, 1300 200" /></svg>${kopf(c, "hell wetter")}
  <div class="kopfz">Vorhersage: nächstes Token</div>
  <div class="satz">Die <b>Bank</b> steht unter einem Baum. <span class="luecke">&nbsp;?&nbsp;</span></div>
  <div class="streifen">${streifen}</div>
  <div class="tabelle">${zeilen}</div>
  <div class="tag t5">Lehrwerte, keine Messung</div>`,
      css: `#s5 .bg { position:absolute; inset:0; background:linear-gradient(180deg, #f5f5f5, #e4e4e4); }
#s5 .iso { position:absolute; inset:0; width:1280px; height:720px; } #s5 .iso path { fill:none; stroke:#cfcfcf; stroke-width:3; }
#s5 { color:#1d1d1d; } #s5 .wetter { font-family:"Inter Display", Inter, sans-serif; font-weight:600; }
#s5 .kopfz { position:absolute; left:40px; top:76px; font-family:"Inter Display", Inter, sans-serif; font-size:42px; font-weight:700; opacity:0; }
#s5 .satz { position:absolute; left:40px; top:140px; font-size:32px; color:#333; }
#s5 .satz b { color:var(--A); }
#s5 .luecke { border:2px dashed #555; border-radius:6px; font-family:"DejaVu Sans Mono", monospace; }
#s5 .streifen { position:absolute; left:40px; top:200px; height:60px; display:flex; align-items:flex-end; gap:3px; opacity:0; }
#s5 .streifen i { display:block; width:9px; background:#9a9a9a; }
#s5 .tabelle { position:absolute; left:40px; top:290px; }
#s5 .z { display:flex; align-items:center; height:78px; opacity:0; }
#s5 .lab { width:200px; font-family:"DejaVu Sans Mono", monospace; font-size:34px; }
#s5 .balken { width:620px; } #s5 .balken b { display:block; height:40px; background:#3b3b3b; border-radius:0 6px 6px 0; transform-origin:0 50%; }
#s5 .pz { width:120px; font-size:34px; font-weight:700; text-align:right; }
#s5 .sym { position:relative; width:70px; height:50px; margin-left:40px; }
#s5 .sonne::before { content:""; position:absolute; left:16px; top:6px; width:38px; height:38px; border-radius:50%; background:#5a5a5a; box-shadow:0 0 0 6px #5a5a5a40; }
#s5 .wolke1::before, #s5 .wolke2::before, #s5 .niesel::before { content:""; position:absolute; left:6px; top:14px; width:58px; height:26px; border-radius:14px; background:#7a7a7a; }
#s5 .wolke1::after { content:""; position:absolute; left:34px; top:2px; width:26px; height:26px; border-radius:50%; background:#5a5a5a; }
#s5 .wolke2::after { content:""; position:absolute; left:20px; top:4px; width:28px; height:28px; border-radius:50%; background:#7a7a7a; }
#s5 .niesel::after { content:""; position:absolute; left:14px; top:44px; width:44px; height:8px; background:repeating-linear-gradient(90deg, #7a7a7a 0 3px, transparent 3px 11px); }
#s5 .t5 { color:#3d3d3d; }`,
      js: [
        ein("#s5 .kopfz", t.kopf),
        F("#s5 .streifen", { opacity: 0, scaleY: 0.2, transformOrigin: "0 100%" }, { opacity: 1, scaleY: 1, duration: 0.6 }, t.vok),
        ...[t.sie, t.er, t.im, t.ku].map((tt, i) => [
          ein(`#s5 .z${i}`, tt - 0.15, 0.25),
          F(`#s5 .z${i} .balken b`, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.out" }, tt - 0.1),
        ].join("\n")),
        ein("#s5 .t5", t.lehr),
      ].join("\n"),
    };
  },

  // 6 Quizshow: Auswahl, Temperatur
  s6(c) {
    const lw = Object.entries(c.tok.lehrwerte);
    const t = { felder: c.wt("Die Preisfrage"), null: c.wt("Bei Temperatur null"), sie: c.wt("also Sie"), ueber: c.wt("über null"), klein: c.wt("kleinerem Balken"), jetzt: c.wt("Gewählt wird") };
    const pos = [[150, 200], [660, 200], [150, 330], [660, 330]];
    const felder = lw.map(([k, v], i) => `<div class="feld f${i}" style="left:${pos[i][0]}px;top:${pos[i][1]}px"><span class="bu">${"ABCD"[i]}</span><span class="tok">${sichtbar(k)}</span><span class="pz">${v} %</span><b class="fill" style="width:${Math.max(v * 9.4, 6)}px"></b></div>`).join("");
    // Auswahlrahmen springt: bei Temperatur 1 einmal A → C → A → B (Beispiel einer Ziehung)
    const hop = (i, tt) => TO("#s6 .wahl", { x: pos[i][0] - 150, y: pos[i][1] - 200, duration: 0.18, ease: "power1.inOut" }, tt);
    return {
      html: `<div class="bg"></div>${kopf(c, "dunkel quiz")}
  <div class="kontext">Die <b>Bank</b> steht unter einem Baum. <span>?</span></div>
  ${felder}
  <div class="wahl"></div><div class="gez">gezogen</div>
  <div class="tag t6">Beispielziehung</div>
  <div class="regler"><div class="lab">Temperatur</div><div class="skala"><span>0</span><span>1</span></div><div class="bogen"></div><div class="nadel"></div></div>`,
      css: `#s6 .bg { position:absolute; inset:0; background:radial-gradient(circle at 50% 18%, #444 0, #1e1e1e 45%, #0f0f0f 80%); }
#s6 { color:#f2f2f2; } #s6 .quiz { font-family:"Inter Display", Inter, sans-serif; font-weight:900; }
#s6 .kontext { position:absolute; left:0; right:0; top:120px; text-align:center; font-size:30px; color:#cfcfcf; }
#s6 .kontext b { color:var(--Ad); } #s6 .kontext span { border:2px dashed #aaa; border-radius:6px; padding:0 10px; }
#s6 .feld { position:absolute; width:470px; height:100px; border:3px solid #8a8a8a; border-radius:50px; background:#262626; display:flex; align-items:center; gap:18px; padding:0 34px; overflow:hidden; opacity:0; }
#s6 .bu { font-family:"Inter Display", Inter, sans-serif; font-weight:900; font-size:30px; color:#bdbdbd; z-index:1; }
#s6 .tok { font-family:"DejaVu Sans Mono", monospace; font-size:34px; z-index:1; }
#s6 .pz { margin-left:auto; font-size:30px; font-weight:800; z-index:1; }
#s6 .fill { position:absolute; left:0; top:0; bottom:0; background:#ffffff26; }
#s6 .wahl { position:absolute; left:144px; top:194px; width:482px; height:112px; border:6px solid #ffffff; border-radius:56px; opacity:0; }
#s6 .gez { position:absolute; left:300px; top:168px; font-size:24px; font-weight:800; background:#f2f2f2; color:#111; padding:2px 14px; border-radius:6px; opacity:0; }
#s6 .regler { position:absolute; left:440px; top:470px; width:400px; height:200px; opacity:0; }
#s6 .regler .lab { text-align:center; font-size:30px; font-weight:800; }
#s6 .bogen { position:absolute; left:80px; top:60px; width:240px; height:120px; border:6px solid #8a8a8a; border-bottom:none; border-radius:120px 120px 0 0; }
#s6 .skala { position:absolute; left:40px; right:40px; top:150px; display:flex; justify-content:space-between; font-size:26px; font-family:"DejaVu Sans Mono", monospace; }
#s6 .t6 { color:#d8d8d8; }
#s6 .nadel { position:absolute; left:197px; top:76px; width:6px; height:104px; background:#f2f2f2; border-radius:3px; transform-origin:50% 100%; }`,
      js: [
        F("#s6 .feld", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.18, ease: "back.out(1.6)" }, t.felder),
        F("#s6 .fill", { scaleX: 0, transformOrigin: "0 50%" }, { scaleX: 1, duration: 0.6, stagger: 0.18 }, t.felder + 0.3),
        ein("#s6 .regler", t.null - 0.8),
        SET("#s6 .nadel", { rotation: -80 }, c.t0),
        F("#s6 .wahl", { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: 0.3 }, t.null + 0.2),
        F("#s6 .gez", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 }, t.sie),
        TO("#s6 .gez", { opacity: 0, duration: 0.2 }, t.ueber - 0.2),
        TO("#s6 .nadel", { rotation: 80, duration: 0.8, ease: "power2.inOut" }, t.ueber),
        hop(2, t.ueber + 0.9), hop(0, t.ueber + 1.15), hop(3, t.ueber + 1.4), hop(1, t.ueber + 1.7),
        SET("#s6 .gez", { x: 510 }, t.ueber + 1.8),
        F("#s6 .gez", { opacity: 0 }, { opacity: 1, duration: 0.25 }, Math.max(t.klein, t.ueber + 2.0)),
        F("#s6 .wahl", { scale: 1 }, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }, t.jetzt),
        ein("#s6 .t6", t.ueber + 1.8),
      ].join("\n"),
    };
  },

  // 7 Stummfilm: anhängen, neu rechnen, wiederholen
  s7(c) {
    const [sie, ist, alt, punkt] = c.tok.fortsetzung;
    const t = { k1: c.wt("Erster Akt"), haeng: c.wt("angehängt"), k2: c.wt("Zweiter Akt"), ganz: c.wt("Der Text, jetzt"), mod: c.wt("ist die neue Eingabe"), k3: c.wt("Dritter Akt"), neu: c.wt("neue Verteilung"), fort: c.wt("Und so fort"), tft: c.wt("Token für Token"), ende: c.wt("bis die Antwort") };
    const karte = (n, rom, txt) => `<div class="karte k${n}"><div class="innen"><div class="rom">${rom}</div><div class="txt">${txt}</div></div></div>`;
    // Flackern: Helligkeitssprünge in festem Takt (deterministisch)
    const flacker = [];
    for (let x = c.t0; x < c.t0 + c.d; x += 0.14) flacker.push(SET("#s7 .flimmer", { opacity: 0.05 + ((Math.round(x * 100) * 7) % 10) / 100 }, +x.toFixed(2)));
    const kratzer = [];
    for (let x = c.t0; x < c.t0 + c.d; x += 0.5) kratzer.push(SET("#s7 .kratzer", { x: ((Math.round(x * 10) * 131) % 1100) }, +x.toFixed(2)));
    return {
      html: `<div class="bg"></div>${kopf(c, "dunkel stumm")}
  <div class="buehne">
    <div class="satz"><span>Die</span> <span class="bank">Bank</span> <span>steht unter einem Baum.</span><span class="neu n0">${chip(sie.text)}</span><span class="neu n1">${chip(ist.text)}</span><span class="neu n2">${chip(alt.text)}</span><span class="neu n3">${chip(punkt.text)}</span></div>
    <div class="modell">Modell</div>
  </div>
  ${karte(1, "I", "Anhängen.")}${karte(2, "II", "Neu rechnen.")}${karte(3, "III", "Wiederholen.")}
  <div class="tag t7">Beispiel ausgedacht</div>
  <div class="vignette"></div><div class="flimmer"></div><div class="kratzer"></div>`,
      css: `#s7 .bg { position:absolute; inset:0; background:#262626; }
#s7 { color:#ececec; font-family:"GFS Baskerville", "DejaVu Serif", serif; } #s7 .stumm { font-family:"GFS Baskerville", serif; font-size:28px; }
#s7 .genre-gross span { font-family:"GFS Baskerville", serif; }
#s7 .buehne { position:absolute; inset:0; }
#s7 .satz { position:absolute; left:70px; top:250px; font-size:46px; white-space:nowrap; }
#s7 .satz .bank { color:var(--Ad); font-weight:700; }
#s7 .neu { display:inline-block; opacity:0; } #s7 .neu .chip { font-size:34px; margin:0 0 0 8px; padding:2px 8px; border-color:#d0d0d0; }
#s7 .modell { position:absolute; left:440px; top:420px; width:400px; height:150px; border:4px solid #d0d0d0; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:48px; opacity:0; }
#s7 .karte { position:absolute; inset:0; background:#0b0b0b; display:flex; align-items:center; justify-content:center; opacity:0; z-index:10; }
#s7 .innen { width:860px; height:400px; border:4px solid #e6e6e6; outline:2px solid #e6e6e6; outline-offset:10px; display:flex; flex-direction:column; align-items:center; justify-content:center; }
#s7 .rom { font-size:40px; letter-spacing:.2em; } #s7 .txt { font-size:86px; font-style:italic; }
#s7 .t7 { color:#e0e0e0; z-index:13; font-family:Inter, sans-serif; }
#s7 .vignette { position:absolute; inset:0; background:radial-gradient(ellipse at center, transparent 52%, #000000d9 100%); z-index:11; }
#s7 .flimmer { position:absolute; inset:0; background:#ffffff; opacity:0.06; z-index:12; }
#s7 .kratzer { position:absolute; left:80px; top:0; width:2px; height:720px; background:#bdbdbd80; z-index:12; }`,
      js: [
        ...flacker, ...kratzer,
        ein("#s7 .k1", t.k1 - 0.2, 0.25), TO("#s7 .k1", { opacity: 0, duration: 0.25 }, t.k1 + 1.3),
        F("#s7 .n0", { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, Math.max(t.haeng - 0.4, t.k1 + 1.5)),
        ein("#s7 .k2", t.k2 - 0.2, 0.25), TO("#s7 .k2", { opacity: 0, duration: 0.25 }, t.k2 + 1.3),
        ein("#s7 .modell", t.ganz),
        ein("#s7 .t7", Math.max(t.haeng - 0.2, t.k1 + 1.6)),
        F("#s7 .satz", { y: 0, scale: 1 }, { y: 30, scale: 0.92, duration: 0.6, transformOrigin: "0 50%" }, t.mod - 0.2),
        F("#s7 .modell", { scale: 1 }, { scale: 1.06, duration: 0.2, yoyo: true, repeat: 3 }, t.mod + 0.3),
        ein("#s7 .k3", t.k3 - 0.2, 0.25), TO("#s7 .k3", { opacity: 0, duration: 0.25 }, t.k3 + 1.3),
        F("#s7 .n1", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.35 }, Math.max(t.fort, t.k3 + 1.5)),
        F("#s7 .n2", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.35 }, Math.max(t.tft, t.k3 + 2.0)),
        F("#s7 .n3", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.35 }, Math.max(t.ende, t.k3 + 2.5)),
      ].join("\n"),
    };
  },

  // 8 Gerichtsdrama: wahrscheinlich ≠ wahr
  s8(c) {
    const neu = [" Sie", " wurde", " 1897", " gegründet", "."];
    const t = { fluessig: c.wt("flüssig, aber falsch"), waehlt: c.wt("Das Modell wählt"), plaus: c.wt("Ein plausibles"), hallu: c.wt("Halluzination"), urteil: c.wt("Das Urteil") };
    return {
      html: `<div class="bg"></div>${kopf(c, "dunkel gericht")}
  <div class="titel">wahrscheinlich ≠ wahr</div>
  <div class="blatt"><div class="satz">Die <b>Bank</b> steht unter einem Baum.${neu.map((w, i) => `<span class="w w${i}${i === 2 || i === 3 ? " falsch" : ""}">${w}</span>`).join("")}</div>
    <div class="stempel">ohne Beleg</div></div>
  <div class="hammer"><div class="kopf"></div><div class="stiel"></div></div><div class="block"></div>
  <div class="tag t8">Beispiel ausgedacht</div>`,
      css: `#s8 .bg { position:absolute; inset:0; background:repeating-linear-gradient(90deg, #474747 0 92px, #3c3c3c 92px 96px, #4f4f4f 96px 180px); }
#s8 { color:#f2f2f2; font-family:"DejaVu Serif", serif; } #s8 .gericht { font-family:"DejaVu Serif", serif; }
#s8 .titel { position:absolute; left:0; right:0; top:84px; text-align:center; font-size:56px; letter-spacing:.02em; opacity:0; }
#s8 .blatt { position:absolute; left:110px; top:200px; width:1060px; height:250px; background:#efefef; color:#1d1d1d; border-radius:6px; padding:46px 50px; box-shadow:0 10px 0 #2a2a2a; }
#s8 .satz { font-size:40px; line-height:1.55; } #s8 .satz b { color:var(--A); }
#s8 .w { opacity:0; }
#s8 .falsch { border-bottom:5px solid #efefef00; }
#s8 .stempel { position:absolute; right:50px; bottom:30px; font-size:36px; font-weight:700; color:#1d1d1d; border:5px double #1d1d1d; padding:4px 18px; transform:rotate(-8deg); opacity:0; font-family:"DejaVu Sans Mono", monospace; }
#s8 .hammer { position:absolute; left:960px; top:520px; width:290px; height:130px; transform-origin:270px 65px; }
#s8 .hammer .kopf { position:absolute; left:0; top:0; width:80px; height:130px; background:#d9d9d9; border-radius:12px; }
#s8 .hammer .stiel { position:absolute; left:70px; top:54px; width:210px; height:22px; background:#bdbdbd; border-radius:8px; }
#s8 .block { position:absolute; left:930px; top:652px; width:140px; height:34px; background:#d0d0d0; border-radius:6px; }
#s8 .t8 { left:40px; right:auto; color:#e6e6e6; }`,
      js: [
        F("#s8 .w", { opacity: 0 }, { opacity: 1, duration: 0.15, stagger: 0.32 }, t.fluessig - 0.4),
        ein("#s8 .t8", t.fluessig + 1.4),
        ein("#s8 .titel", t.waehlt, 0.5, { von: { y: -10 }, nach: { y: 0 } }),
        F("#s8 .falsch", { borderBottomColor: "rgba(29,29,29,0)" }, { borderBottomColor: "rgba(29,29,29,1)", duration: 0.5 }, t.plaus),
        F("#s8 .stempel", { opacity: 0, scale: 1.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power4.in" }, t.hallu),
        SET("#s8 .hammer", { rotation: 22 }, c.t0),
        TO("#s8 .hammer", { rotation: -4, duration: 0.18, ease: "power4.in" }, t.urteil + 0.4),
        TO("#s8 .hammer", { rotation: 0, duration: 0.25 }, t.urteil + 0.6),
        F("#s8 .blatt", { y: 0 }, { y: 4, duration: 0.06, yoyo: true, repeat: 1 }, t.urteil + 0.58),
      ].join("\n"),
    };
  },

  // 9 Märchen: die Kette in einem Satz, zurück zu T1
  s9(c) {
    const stationen = [["Text", "ein Satz"], ["Tokens", "zu Tokens"], ["Nummern", "zu Nummern"], ["Zahlenliste", "zu Zahlenlisten"],
      ["Aufmerksamkeit", "Die Aufmerksamkeit"], ["Vorhersage", "eine Verteilung"], ["gezogen", "eine Auswahl"], ["Anhängen", "angehängt"]];
    const cx = 640, cy = 420, rx = 440, ry = 170;
    const P = stationen.map((_, i) => { const w = Math.PI + (i * 2 * Math.PI) / stationen.length; return [cx + rx * Math.cos(w), cy + ry * Math.sin(w)]; });
    const zeiten = stationen.map(([, w]) => c.wt(w));
    const t = { anfang: c.wt("Es war einmal"), vorn: c.wt("von vorn"), zur: c.wt("zurück zur Animation") };
    return {
      html: `<div class="bg"></div><div class="rand"></div>${kopf(c, "hell maerchen")}
  <div class="einmal"><span class="ini">E</span>s war einmal</div>
  <svg class="bahn" viewBox="0 0 1280 720"><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" /></svg>
  ${stationen.map(([n], i) => `<div class="st st${i}" style="left:${P[i][0].toFixed(0)}px;top:${P[i][1].toFixed(0)}px">${n}</div>`).join("")}
  <div class="held">${chip(" Bank")}</div>
  <div class="kreis">↺</div>
  <div class="zur">↩ Zurück zur Animation</div>`,
      css: `#s9 .bg { position:absolute; inset:0; background:#f1efea; }
#s9 .rand { position:absolute; inset:18px; border:3px solid #6a6a6a; outline:1px solid #6a6a6a; outline-offset:-10px; }
#s9 { color:#252525; font-family:FreeSerif, "DejaVu Serif", serif; } #s9 .maerchen { font-family:FreeSerif, serif; font-style:italic; }
#s9 .einmal { position:absolute; left:0; right:0; top:84px; text-align:center; font-size:58px; font-style:italic; opacity:0; }
#s9 .ini { font-size:96px; font-style:normal; font-weight:700; vertical-align:-10px; }
#s9 .bahn { position:absolute; inset:0; width:1280px; height:720px; } #s9 .bahn ellipse { fill:none; stroke:#bdbdbd; stroke-width:3; stroke-dasharray:10 10; }
#s9 .st { position:absolute; transform:translate(-50%, -50%); background:#fbfaf7; border:3px solid #4a4a4a; border-radius:30px; padding:6px 18px; font-size:30px; white-space:nowrap; opacity:0; }
#s9 .held { position:absolute; left:${(P[0][0] - 60).toFixed(0)}px; top:${(P[0][1] - 80).toFixed(0)}px; opacity:0; }
#s9 .held .chip { font-size:26px; color:var(--A); font-weight:700; background:#fbfaf7; }
#s9 .kreis { position:absolute; left:${cx - 40}px; top:${cy - 50}px; font-size:84px; opacity:0; }
#s9 .zur { position:absolute; left:0; right:0; bottom:46px; text-align:center; font-size:34px; opacity:0; }`,
      js: [
        ein("#s9 .einmal", t.anfang, 0.6),
        ...zeiten.map((tt, i) => [
          F(`#s9 .st${i}`, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }, tt),
          i === 0 ? ein("#s9 .held", tt + 0.2) : TO("#s9 .held", { x: P[i][0] - P[0][0], y: P[i][1] - P[0][1], duration: 0.5, ease: "power2.inOut" }, tt),
        ].join("\n")),
        TO("#s9 .held", { x: 0, y: 0, duration: 0.9, ease: "power2.inOut" }, t.vorn),
        F("#s9 .kreis", { opacity: 0, rotation: -90 }, { opacity: 1, rotation: 0, duration: 0.6 }, t.vorn),
        ein("#s9 .zur", t.zur - 0.3, 0.5),
      ].join("\n"),
    };
  },
};
