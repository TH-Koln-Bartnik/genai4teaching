// P6 „Stützräder – wie die Prompting-Ratschläge kamen und gingen“: die neun Szenen als HTML/CSS + GSAP-Bewegungen.
// Bildsprache nach Primer A: Graustufen + eine Akzentfarbe (--red des Buchs: #c1002a, auf dunklem Grund #ff5c7a),
// die Akzentfarbe markiert nur das jeweils neue Element. Hauptfigur ist ein Prompt-Zettel (weiße Karte): Er wächst in
// Szene 1–3, verliert in 4–5 die Aufkleber und wird in 6–7 neu gebaut. Unten rechts steht in jeder Szene eine
// Quellenmarke, nach Form unterscheidbar: ■ Labor (Hersteller-Doku), ● Studie, ▲ Folklore.
// Keine Logos, keine Figuren; Labornamen nur als Text. Zeiten: ctx.wt("Wort") = Zeitpunkt, an dem das Wort fällt.
// Text, der im Bild erscheint, steht im Manifest unter „bildtext“; Zitate in Quellenmarken (Klasse „zit“) zählen nicht.

// ---------- Hilfen ----------
const J = JSON.stringify;
const F = (sel, von, nach, t) => `tl.fromTo(${J(sel)}, ${J(von)}, ${J(nach)}, ${(+t).toFixed(3)});`;
const TO = (sel, nach, t) => `tl.to(${J(sel)}, ${J(nach)}, ${(+t).toFixed(3)});`;
const ein = (sel, t, d = 0.4, extra = {}) => F(sel, { opacity: 0, ...extra.von }, { opacity: 1, duration: d, ...extra.nach }, t);
const aus = (sel, t, d = 0.3) => TO(sel, { opacity: 0, duration: d }, t);
const FORM = { labor: "■", studie: "●", folklore: "▲", zaehlung: "◆" };
const TYP = { labor: "Labor", studie: "Studie", folklore: "Folklore", zaehlung: "" };

// Kopf: Genre groß (von der Komposition ein- und ausgeblendet), dann klein oben links mit Leitjahr
const kopf = (c, cls) => `
  <div class="genre-klein ${cls}"><span class="nr">${c.nr}/${c.n}</span> ${c.esc(c.s.genre)}${c.s.jahr ? ` <span class="jahr">${c.esc(c.s.jahr)}</span>` : ""}</div>
  <div class="genre-gross ${cls}"><span>${c.esc(c.s.genre)}</span></div>`;

// Quellenmarke unten rechts: Form + Typwort, Zitat klein (Zitate zählen nicht als Bildwörter)
const marke = (c, cls = "") => `<div class="qm ${cls}">${c.s.quellenmarke
  .map((q) => `<div class="q"><span class="form f-${q.typ}">${FORM[q.typ]}</span>${TYP[q.typ] ? ` ${TYP[q.typ]}` : ""} <span class="zit">${c.esc(q.zitat)}</span></div>`)
  .join("")}</div>`;

// Schematische Textzeile auf dem Zettel (grauer Balken statt Text)
const balken = (b, cls = "") => `<i class="bal ${cls}" style="width:${b}%"></i>`;

export const basisCss = `
:root { --A:#c1002a; --Ad:#ff5c7a; --T:#1b1b1b; }
.szene { font-family: Inter, "DejaVu Sans", sans-serif; }
.genre-klein { position:absolute; left:40px; top:26px; font-size:24px; letter-spacing:.02em; z-index:20; opacity:0; }
.genre-klein .nr { font-family:"DejaVu Sans Mono", monospace; font-size:18px; opacity:.85; margin-right:8px; }
.genre-klein .jahr { font-family:"DejaVu Sans Mono", monospace; font-size:20px; margin-left:10px; padding:1px 8px; border:2px solid currentColor; border-radius:4px; }
.genre-gross { position:absolute; left:0; right:0; top:290px; height:140px; display:flex; align-items:center; justify-content:center; font-size:76px; z-index:30; opacity:0; }
.genre-gross span { padding:6px 40px; }
.hell { color:#1d1d1d; } .genre-gross.hell span { background:#ffffffeb; color:#1d1d1d; } .genre-klein.hell { color:#333; }
.dunkel { color:#f2f2f2; } .genre-gross.dunkel span { background:#000000d8; color:#f2f2f2; } .genre-klein.dunkel { color:#d6d6d6; }
.qm { position:absolute; right:28px; bottom:20px; z-index:25; font-size:18px; text-align:right; opacity:0; line-height:1.35; }
.qm .form { font-family:"DejaVu Sans", sans-serif; font-size:19px; display:inline-block; width:22px; text-align:center; }
.qm .zit { font-size:16px; opacity:.92; }
.qm.hell { color:#2b2b2b; } .qm.dunkel { color:#dcdcdc; }
.zettel { position:absolute; background:#fff; color:var(--T); border:2px solid #1b1b1b; border-radius:6px; box-shadow:0 10px 26px #0000004d; padding:16px 18px; overflow:hidden; }
.zettel .titel { font-family:"DejaVu Sans Mono", monospace; font-size:18px; letter-spacing:.12em; text-transform:uppercase; color:#444; border-bottom:2px solid #1b1b1b; padding-bottom:6px; margin-bottom:12px; }
.bal { display:block; height:10px; background:#9a9a9a; border-radius:5px; margin:9px 0; }
.bal.dunkel { background:#5a5a5a; }
.tag { position:absolute; font-size:20px; border:2px dashed currentColor; border-radius:6px; padding:3px 12px; opacity:0; }
`;

// ---------- Die neun Szenen ----------
export const szenen = {
  // 1 Stummfilm, 2020: Few-Shot – drei Beispiele, dann die eigene Aufgabe
  s1(c) {
    const t = { zt: c.t0 + 1.3, vor: c.wt("Also macht"), drei: c.wt("drei gelöste"), dann: c.wt("dann die eigene"), few: c.wt("Few-Shot"), gut: c.wt("Es wirkt"), zeig: c.wt("Zeig’s") };
    const karte = (n) => `<div class="bsp b${n}"><div class="lab">Beispiel ${n}</div>${balken(78)}<div class="pf">→</div>${balken(46, "dunkel")}</div>`;
    return {
      html: `<div class="bg"></div><div class="kratzer k1"></div><div class="kratzer k2"></div><div class="flimmer"></div>${kopf(c, "dunkel stumm")}
  <div class="zt"><div class="innen">2020</div></div>
  <div class="zettel z1"><div class="titel">Prompt</div>${karte(1)}${karte(2)}${karte(3)}
    <div class="auf"><div class="lab">Ihre Aufgabe</div>${balken(70)}<div class="pf">→</div><div class="leer">…</div></div></div>
  ${marke(c, "dunkel")}`,
      css: `#s1 .bg { position:absolute; inset:0; background:radial-gradient(ellipse at 50% 45%, #2a2a2a, #050505 78%); }
#s1 .stumm, #s1 .zt { font-family:"DejaVu Serif", serif; }
#s1 .kratzer { position:absolute; top:0; bottom:0; width:2px; background:#ffffff30; }
#s1 .k1 { left:210px; } #s1 .k2 { left:1010px; width:1px; }
#s1 .flimmer { position:absolute; inset:0; background:#fff; opacity:0; z-index:15; pointer-events:none; }
#s1 .zt { position:absolute; left:340px; top:170px; width:600px; height:330px; border:6px double #e6e6e6; display:flex; align-items:center; justify-content:center; opacity:0; }
#s1 .zt .innen { font-size:150px; color:#f0f0f0; letter-spacing:.08em; }
#s1 .z1 { left:380px; top:96px; width:520px; height:560px; opacity:0; }
#s1 .bsp, #s1 .auf { display:grid; grid-template-columns:130px 1fr 26px 1fr; align-items:center; gap:10px; border:3px solid var(--A); border-radius:6px; padding:10px 12px; margin-bottom:14px; opacity:0; }
#s1 .bsp .lab { color:var(--A); font-weight:700; font-size:20px; }
#s1 .bsp .bal, #s1 .auf .bal { margin:0; }
#s1 .pf { font-size:22px; color:#555; text-align:center; }
#s1 .auf { border:3px dashed #1b1b1b; margin-top:22px; }
#s1 .auf .lab { font-weight:700; font-size:20px; }
#s1 .leer { font-size:26px; color:#555; }`,
      js: [
        F("#s1 .k1", { x: 0 }, { x: 260, duration: c.d, ease: "steps(14)" }, c.t0),
        F("#s1 .k2", { x: 0 }, { x: -340, duration: c.d, ease: "steps(11)" }, c.t0),
        F("#s1 .flimmer", { opacity: 0 }, { opacity: 0.05, duration: 0.09, repeat: Math.floor(c.d / 0.18), yoyo: true, ease: "none" }, c.t0),
        ein("#s1 .zt", t.zt, 0.4),
        aus("#s1 .zt", t.vor - 0.35, 0.35),
        ein("#s1 .z1", t.vor, 0.4, { von: { y: 16 }, nach: { y: 0 } }),
        F("#s1 .bsp", { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.32 }, t.drei),
        ein("#s1 .auf", t.dann, 0.4),
        ein("#s1 .qm", t.few, 0.4),
        F("#s1 .bsp", { scale: 1 }, { scale: 1.03, duration: 0.25, yoyo: true, repeat: 1, stagger: 0.1 }, t.gut),
        F("#s1 .z1", { rotation: 0 }, { rotation: -1.5, duration: 0.25, yoyo: true, repeat: 1 }, t.zeig),
      ].join("\n"),
    };
  },

  // 2 Zaubershow, 2022: „Denken wir Schritt für Schritt.“ – 18 → 79 von 100 (Kojima et al., 2022)
  s2(c) {
    const t = { satz: c.wt("ein einziger"), flug: c.wt("‚Denken") - 0.2, zahl: c.wt("79 statt"), mess: c.wt("Kein Trick"), ab: c.wt("Ab jetzt") };
    const mini = [1, 2, 3].map(() => `<div class="mini">${balken(60)}${balken(35, "dunkel")}</div>`).join("");
    return {
      html: `<div class="bg"></div><div class="vorhang l"></div><div class="vorhang r"></div><div class="spot"></div>${kopf(c, "dunkel zauber")}
  <div class="hut"><div class="krone"></div><div class="krempe"></div></div><div class="stab"></div>
  <div class="zettel z2"><div class="titel">Prompt</div>${mini}<div class="platz"></div></div>
  <div class="satz">Denken wir Schritt für Schritt.</div>
  <div class="werte"><div class="reihe r18"><div class="spur"><div class="b b18"></div></div><span class="w">18</span></div>
    <div class="reihe r79"><div class="spur"><div class="b b79"></div></div><span class="w">79</span></div>
    <div class="cap">von 100 Aufgaben</div></div>
  ${marke(c, "dunkel")}`,
      css: `#s2 .bg { position:absolute; inset:0; background:#0c0c0c; }
#s2 .vorhang { position:absolute; top:0; bottom:0; width:120px; background:repeating-linear-gradient(90deg, #2c2c2c 0 18px, #1a1a1a 18px 34px); }
#s2 .vorhang.l { left:0; } #s2 .vorhang.r { right:0; }
#s2 .spot { position:absolute; left:120px; top:-120px; width:520px; height:860px; background:radial-gradient(ellipse at 50% 85%, #3b3b3b, transparent 62%); }
#s2 .zauber { font-family:"DejaVu Serif", serif; font-style:italic; }
#s2 .hut { position:absolute; left:250px; top:470px; width:200px; height:170px; opacity:0; }
#s2 .krone { position:absolute; left:30px; top:0; width:140px; height:140px; background:#050505; border:3px solid #9a9a9a; border-bottom:none; }
#s2 .krempe { position:absolute; left:0; top:136px; width:200px; height:24px; border-radius:50%; background:#050505; border:3px solid #9a9a9a; }
#s2 .stab { position:absolute; left:460px; top:430px; width:150px; height:10px; background:linear-gradient(90deg, #111 0 78%, #f2f2f2 78%); border:2px solid #9a9a9a; transform-origin:0% 50%; opacity:0; }
#s2 .z2 { left:820px; top:120px; width:340px; height:430px; }
#s2 .mini { border:2px solid #8a8a8a; border-radius:5px; padding:4px 10px; margin-bottom:10px; }
#s2 .mini .bal { margin:6px 0; height:8px; }
#s2 .satz { position:absolute; left:838px; top:405px; width:300px; font-size:27px; line-height:1.25; font-weight:700; color:var(--A); background:#fff; border:3px solid var(--A); border-radius:6px; padding:8px 12px; opacity:0; z-index:5; }
#s2 .werte { position:absolute; left:170px; top:150px; width:560px; opacity:0; }
#s2 .reihe { display:flex; align-items:center; gap:16px; margin-bottom:18px; }
#s2 .spur { flex:0 0 420px; height:46px; border:2px solid #777; border-radius:4px; background:#161616; }
#s2 .b { height:100%; width:0; background:#8f8f8f; }
#s2 .b79 { background:var(--Ad); }
#s2 .w { font-family:"DejaVu Sans Mono", monospace; font-size:42px; color:#ededed; }
#s2 .r79 .w { color:var(--Ad); font-weight:700; }
#s2 .cap { font-size:28px; color:#e6e6e6; }`,
      js: [
        ein("#s2 .hut", c.t0 + 1.3, 0.4),
        ein("#s2 .stab", c.t0 + 1.4, 0.4),
        F("#s2 .z2", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.5 }, c.t0 + 1.5),
        F("#s2 .stab", { rotation: 0 }, { rotation: -28, duration: 0.25, yoyo: true, repeat: 3 }, t.satz),
        F("#s2 .satz", { opacity: 0, x: -560, y: 80, scale: 0.5, rotation: -10 }, { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 1.1, ease: "power2.out" }, t.flug),
        ein("#s2 .werte", t.zahl - 0.2, 0.3),
        F("#s2 .b18", { width: "0%" }, { width: "18%", duration: 0.6, ease: "power2.out" }, t.zahl),
        F("#s2 .b79", { width: "0%" }, { width: "79%", duration: 0.9, ease: "power2.out" }, t.zahl + 0.4),
        ein("#s2 .qm", t.mess, 0.4),
        F("#s2 .satz", { scale: 1 }, { scale: 1.06, duration: 0.3, yoyo: true, repeat: 1 }, t.ab),
      ].join("\n"),
    };
  },

  // 3 Teleshopping, 2023: Aufkleber prasseln auf den Zettel, jeder mit eigener Quellenmarke
  s3(c) {
    const t = { neu: c.wt("Jetzt neu"), exp: c.wt("Expertenrolle"), tg: c.wt("Trinkgeld"), gb: c.wt("Großbuchstaben"), kar: c.wt("Karriere"), ein: c.wt("Einiges"), lang: c.wt("länger und") };
    const mini = [1, 2, 3].map(() => `<div class="mini">${balken(60)}${balken(35, "dunkel")}</div>`).join("");
    const kleber = [
      ["k1", "labor", "Expertin!", t.exp], ["k2", "folklore", "200 $ Trinkgeld", t.tg],
      ["k3", "folklore", "WICHTIG!!!", t.gb], ["k4", "studie", "Karriere!", t.kar],
    ];
    const js = [
      F("#s3 .z3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, c.t0 + 1.3),
      F("#s3 .stern", { opacity: 0, scale: 0.3, rotation: -30 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.45, ease: "back.out(2)" }, t.neu),
      F("#s3 .stern", { rotation: 0 }, { rotation: 8, duration: 0.5, yoyo: true, repeat: Math.max(1, Math.floor((c.t0 + c.d - t.neu) / 0.5) - 1), ease: "sine.inOut" }, t.neu + 0.45),
    ];
    kleber.forEach(([k, , , zeit], i) => {
      js.push(F(`#s3 .${k}`, { opacity: 0, y: -260, scale: 1.4 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.in" }, zeit));
      const naechste = kleber[i + 1] ? kleber[i + 1][3] : t.ein;
      js.push(TO(`#s3 .${k}`, { borderColor: "#1b1b1b", color: "#1b1b1b", duration: 0.25 }, naechste));
    });
    js.push(ein("#s3 .qm", t.ein, 0.4));
    js.push(TO("#s3 .z3", { height: 980, duration: 2.2, ease: "power1.in" }, t.lang - 0.3));
    js.push(TO("#s3 .kleber", { y: "+=40", duration: 2.2, ease: "power1.in" }, t.lang - 0.3));
    return {
      html: `<div class="bg"></div>${kopf(c, "hell tele")}
  <div class="zettel z3"><div class="titel">Prompt</div>${mini}<div class="streifen">Denken wir Schritt für Schritt.</div>${balken(80)}${balken(64)}${balken(72)}${balken(58)}${balken(76)}${balken(66)}${balken(70)}</div>
  ${kleber.map(([k, typ, text]) => `<div class="kleber ${k}"><span class="form">${FORM[typ]}</span> ${c.esc(text)}</div>`).join("\n  ")}
  <div class="stern"><span>NEU!</span></div>
  ${marke(c, "hell")}`,
      css: `#s3 .bg { position:absolute; inset:0; background:repeating-linear-gradient(135deg, #efefef 0 34px, #e3e3e3 34px 68px); }
#s3 .tele { font-family:Inter, sans-serif; font-weight:800; }
#s3 .z3 { left:330px; top:96px; width:420px; height:560px; opacity:0; }
#s3 .mini { border:2px solid #8a8a8a; border-radius:5px; padding:4px 10px; margin-bottom:10px; }
#s3 .mini .bal { margin:6px 0; height:8px; }
#s3 .streifen { font-size:22px; font-weight:700; border:2px solid #5a5a5a; border-radius:5px; padding:6px 10px; margin:6px 0 10px; color:#2b2b2b; }
#s3 .kleber { position:absolute; font-size:31px; font-weight:800; background:#fff; color:var(--A); border:4px solid var(--A); border-radius:8px; padding:8px 16px; box-shadow:0 6px 14px #0000003d; opacity:0; white-space:nowrap; }
#s3 .kleber .form { font-family:"DejaVu Sans", sans-serif; font-weight:400; }
#s3 .k1 { left:300px; top:270px; transform:rotate(-8deg); }
#s3 .k2 { left:560px; top:350px; transform:rotate(6deg); }
#s3 .k3 { left:350px; top:450px; transform:rotate(3deg); }
#s3 .k4 { left:600px; top:540px; transform:rotate(-5deg); }
#s3 .stern { position:absolute; left:930px; top:120px; width:210px; height:210px; background:var(--A); color:#fff; display:flex; align-items:center; justify-content:center; font-size:46px; font-weight:900; opacity:0;
  clip-path:polygon(50% 0%, 61% 18%, 82% 8%, 80% 30%, 100% 36%, 86% 52%, 100% 68%, 79% 72%, 82% 94%, 61% 84%, 50% 100%, 39% 84%, 18% 94%, 21% 72%, 0% 68%, 14% 52%, 0% 36%, 20% 30%, 18% 8%, 39% 18%); }`,
      js: js.join("\n"),
    };
  },

  // 4 Gerichtsdrama, 2025: drei Beweisstücke, Stempel „nicht erwiesen“, Aufkleber fallen vom Zettel
  s4(c) {
    const t = { auf: c.wt("Die Beweisaufnahme"), b1: c.wt("kein messbarer"), b2: c.wt("keine genaueren"), b3: c.wt("hilft mal"), urteil: c.wt("Das Gericht"), fall: c.wt("Die Aufkleber") };
    const stueck = (n, text) => `<div class="stueck s${n}"><span class="nr">${n}</span><span class="wort">${text}</span><div class="stempel">nicht erwiesen</div></div>`;
    return {
      html: `<div class="bg"></div><div class="tisch"></div>${kopf(c, "dunkel gericht")}
  <div class="hammer"><div class="kopf"></div><div class="stiel"></div></div><div class="block"></div>
  ${stueck(1, "Trinkgeld")}${stueck(2, "Expertin")}${stueck(3, "Bitte")}
  <div class="zettel z4"><div class="titel">Prompt</div>${balken(70)}${balken(55)}${balken(66)}
    <i class="mk m1"></i><i class="mk m2"></i><i class="mk m3"></i><i class="mk m4"></i></div>
  ${marke(c, "dunkel")}`,
      css: `#s4 .bg { position:absolute; inset:0; background:repeating-linear-gradient(90deg, #2a2a2a 0 120px, #232323 120px 124px); }
#s4 .tisch { position:absolute; left:0; right:0; top:300px; bottom:0; background:linear-gradient(#383838, #1f1f1f); border-top:6px solid #4a4a4a; }
#s4 .gericht { font-family:"DejaVu Serif", serif; }
#s4 .stueck { position:absolute; top:360px; width:250px; height:170px; background:#ececec; color:#1b1b1b; border-radius:6px; box-shadow:0 8px 20px #0007; opacity:0; display:flex; align-items:flex-start; justify-content:center; padding-top:46px; }
#s4 .s1 { left:110px; } #s4 .s2 { left:400px; } #s4 .s3 { left:690px; }
#s4 .stueck .nr { position:absolute; left:10px; top:8px; font-family:"DejaVu Sans Mono", monospace; font-size:22px; border:2px solid #1b1b1b; border-radius:50%; width:34px; height:34px; display:flex; align-items:center; justify-content:center; }
#s4 .stueck .wort { font-size:34px; font-weight:700; }
#s4 .stempel { position:absolute; left:22px; top:104px; font-family:"DejaVu Sans Mono", monospace; font-weight:700; font-size:26px; color:var(--A); border:4px solid var(--A); padding:4px 10px; background:#ffffffd9; transform:rotate(-12deg); opacity:0; white-space:nowrap; }
#s4 .hammer { position:absolute; left:1040px; top:120px; width:200px; height:120px; transform-origin:85% 85%; opacity:0; }
#s4 .hammer .kopf { position:absolute; left:0; top:0; width:110px; height:56px; background:#9a9a9a; border-radius:8px; border:3px solid #cfcfcf; }
#s4 .hammer .stiel { position:absolute; left:100px; top:20px; width:110px; height:14px; background:#7a7a7a; border-radius:7px; }
#s4 .block { position:absolute; left:1010px; top:230px; width:120px; height:30px; background:#5c5c5c; border-radius:6px; opacity:0; }
#s4 .z4 { left:1000px; top:330px; width:230px; height:300px; opacity:0; }
#s4 .mk { position:absolute; width:120px; height:30px; background:#fff; border:3px solid #3a3a3a; border-radius:5px; }
#s4 .m1 { left:24px; top:120px; transform:rotate(-8deg); } #s4 .m2 { left:80px; top:160px; transform:rotate(6deg); }
#s4 .m3 { left:30px; top:205px; transform:rotate(3deg); } #s4 .m4 { left:86px; top:245px; transform:rotate(-5deg); }`,
      js: [
        ein("#s4 .z4", c.t0 + 1.3, 0.4),
        ein("#s4 .hammer", c.t0 + 1.3, 0.4), ein("#s4 .block", c.t0 + 1.3, 0.4),
        F("#s4 .stueck", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.25 }, t.auf + 0.4),
        F("#s4 .s1 .stempel", { opacity: 0, scale: 1.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power3.in" }, t.b1),
        F("#s4 .s2 .stempel", { opacity: 0, scale: 1.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power3.in" }, t.b2),
        F("#s4 .s3 .stempel", { opacity: 0, scale: 1.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power3.in" }, t.b3),
        TO("#s4 .s1 .stempel, #s4 .s2 .stempel", { color: "#1b1b1b", borderColor: "#1b1b1b", duration: 0.3 }, t.b3),
        F("#s4 .hammer", { rotation: 0 }, { rotation: -32, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.in" }, t.urteil + 0.3),
        TO("#s4 .s3 .stempel", { color: "#1b1b1b", borderColor: "#1b1b1b", duration: 0.3 }, t.urteil + 0.4),
        F("#s4 .stempel", { scale: 1 }, { scale: 1.08, duration: 0.18, yoyo: true, repeat: 1 }, t.urteil + 0.5),
        ein("#s4 .qm", t.urteil, 0.4),
        F("#s4 .mk", { y: 0, rotation: 0, opacity: 1 }, { y: 420, rotation: 40, opacity: 0, duration: 1.1, stagger: 0.18, ease: "power2.in" }, t.fall),
      ].join("\n"),
    };
  },

  // 5 Naturdokumentation, 2024–2026: Reasoning-Modell denkt selbst; Schnitt auf Stützräder (Analogie)
  s5(c) {
    const t = { tier: c.wt("Hier sehen"), denkt: c.wt("Es denkt"), antw: c.wt("ganz ohne"), vor: c.wt("Wer ihm"), kaum: c.wt("gewinnt kaum"), zahlt: c.wt("zahlt mit"), rad: c.wt("Stützräder"), kurve: c.wt("In der Kurve") };
    const rad = `<svg class="rad" viewBox="0 0 520 300" width="520" height="300">
      <path d="M -40 300 Q 260 120 600 250" stroke="#c9c9c9" stroke-width="70" fill="none"/>
      <g class="velo" transform="translate(120 70)">
        <circle cx="80" cy="150" r="58" stroke="#262626" stroke-width="7" fill="none"/>
        <circle cx="270" cy="150" r="58" stroke="#262626" stroke-width="7" fill="none"/>
        <path d="M80 150 L150 70 L240 70 L270 150 M150 70 L175 150 L80 150 M175 150 L240 70 M240 70 L232 40 L262 34 M150 70 L140 52" stroke="#262626" stroke-width="7" fill="none" stroke-linejoin="round"/>
        <rect x="118" y="44" width="44" height="9" rx="4" fill="#262626"/>
        <line x1="80" y1="150" x2="40" y2="196" stroke="#555" stroke-width="5"/>
        <circle class="stuetz" cx="34" cy="196" r="17" stroke="#555" stroke-width="6" fill="#efefef"/>
        <g class="funken"><line x1="10" y1="214" x2="-22" y2="208" /><line x1="12" y1="220" x2="-16" y2="232"/><line x1="18" y1="214" x2="-6" y2="196"/></g>
      </g></svg>`;
    return {
      html: `<div class="bg"></div><div class="ecke e1"></div><div class="ecke e2"></div><div class="ecke e3"></div><div class="ecke e4"></div><div class="rec">● REC</div>${kopf(c, "hell doku")}
  <div class="teil-a">
    <div class="tier"><div class="auge"></div></div><div class="lab">Reasoning-Modell</div>
    <div class="blase b1"><span class="pk">•</span><span class="pk">•</span><span class="pk">•</span></div><div class="denkt">denkt selbst</div>
    <div class="blase b2">…</div>
    <div class="streifen">Schritt für Schritt<i class="strich"></i></div>
  </div>
  <div class="teil-b">${rad}<div class="tag ana">Analogie</div></div>
  ${marke(c, "hell")}`,
      css: `#s5 .bg { position:absolute; inset:0; background:radial-gradient(ellipse at 50% 45%, #f4f3f0, #d9d7d2 85%); }
#s5 .doku { font-family:"DejaVu Serif", serif; font-style:italic; }
#s5 .ecke { position:absolute; width:60px; height:60px; border-color:#4a4a4a; border-style:solid; border-width:0; }
#s5 .e1 { left:24px; top:76px; border-left-width:4px; border-top-width:4px; } #s5 .e2 { right:24px; top:76px; border-right-width:4px; border-top-width:4px; }
#s5 .e3 { left:24px; bottom:24px; border-left-width:4px; border-bottom-width:4px; } #s5 .e4 { right:24px; bottom:24px; border-right-width:4px; border-bottom-width:4px; }
#s5 .rec { position:absolute; right:44px; top:28px; font-family:"DejaVu Sans Mono", monospace; font-size:20px; color:#3a3a3a; }
#s5 .tier { position:absolute; left:250px; top:300px; width:280px; height:200px; background:#2e2e2e; border-radius:46% 54% 40% 60% / 60% 55% 45% 40%; opacity:0; }
#s5 .auge { position:absolute; left:190px; top:56px; width:22px; height:22px; border-radius:50%; background:#efefef; }
#s5 .lab { position:absolute; left:250px; top:520px; width:280px; text-align:center; font-size:28px; color:#222; opacity:0; }
#s5 .blase { position:absolute; background:#fff; border:3px solid #2e2e2e; border-radius:50%; display:flex; align-items:center; justify-content:center; gap:10px; opacity:0; color:#222; }
#s5 .b1 { left:520px; top:170px; width:200px; height:120px; font-size:48px; }
#s5 .b2 { left:760px; top:250px; width:150px; height:90px; font-size:44px; border-radius:18px; }
#s5 .denkt { position:absolute; left:520px; top:120px; width:200px; text-align:center; font-size:26px; color:#222; opacity:0; }
#s5 .streifen { position:absolute; left:820px; top:430px; font-size:30px; font-weight:700; background:#fff; color:#1b1b1b; border:3px solid #1b1b1b; border-radius:6px; padding:8px 16px; opacity:0; white-space:nowrap; }
#s5 .streifen .strich { position:absolute; left:-6px; right:-6px; top:50%; height:6px; background:var(--A); transform:scaleX(0); transform-origin:0 50%; }
#s5 .teil-b { position:absolute; inset:0; opacity:0; }
#s5 .rad { position:absolute; left:380px; top:200px; }
#s5 .funken line { stroke:var(--A); stroke-width:5; stroke-linecap:round; opacity:0; }
#s5 .ana { left:120px; top:560px; color:#2b2b2b; }
#s5 .qm { right:60px; bottom:44px; }`,
      js: [
        ein("#s5 .tier", t.tier, 0.5, { von: { x: -40 }, nach: { x: 0 } }),
        ein("#s5 .lab", t.tier + 0.4, 0.4),
        F("#s5 .tier", { y: 0 }, { y: -8, duration: 0.6, yoyo: true, repeat: 5, ease: "sine.inOut" }, t.tier + 0.5),
        ein("#s5 .b1", t.denkt, 0.35), ein("#s5 .denkt", t.denkt + 0.2, 0.35),
        F("#s5 .pk", { opacity: 0.2 }, { opacity: 1, duration: 0.3, stagger: 0.2, repeat: 3, yoyo: true }, t.denkt + 0.3),
        ein("#s5 .b2", t.antw, 0.35),
        F("#s5 .streifen", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 0.5 }, t.vor),
        F("#s5 .strich", { scaleX: 0 }, { scaleX: 1, duration: 0.4 }, t.kaum),
        TO("#s5 .streifen", { y: 260, rotation: 20, opacity: 0, duration: 0.9, ease: "power2.in" }, t.zahlt + 0.4),
        ein("#s5 .qm", t.kaum, 0.4),
        aus("#s5 .teil-a", t.rad - 0.4, 0.35),
        ein("#s5 .teil-b", t.rad - 0.1, 0.4),
        ein("#s5 .ana", t.rad + 0.2, 0.4),
        F("#s5 .velo", { rotation: 0, svgOrigin: "200 220" }, { rotation: -9, svgOrigin: "200 220", duration: 1.0, ease: "sine.inOut" }, t.kurve - 0.6),
        F("#s5 .funken line", { opacity: 0 }, { opacity: 1, duration: 0.12, stagger: 0.08, repeat: 5, yoyo: true }, t.kurve),
        TO("#s5 .stuetz", { stroke: "#c1002a", duration: 0.3 }, t.kurve),
      ].join("\n"),
    };
  },

  // 6 Kochshow: Was im Topf bleibt – neuer Zettel aus Ziel, Wozu, Material, Format; Tutor: Ablauf bleibt
  s6(c) {
    const t = { ziel: c.wt("Das Ziel"), wozu: c.wt("Der Grund"), mat: c.wt("Ihr Material"), oben: c.wt("lange Texte"), form: c.wt("Format und"), tutor: c.wt("Tutor-Bots"), ablauf: c.wt("Ablauf") };
    const zut = [["ziel", "Ziel", t.ziel], ["wozu", "Wozu", t.wozu], ["mat", "Material", t.mat], ["form", "Format", t.form]];
    const js = [ein("#s6 .z6", c.t0 + 1.3, 0.4, { von: { y: 20 }, nach: { y: 0 } }), F("#s6 .schale", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.12 }, c.t0 + 1.4)];
    zut.forEach(([k, , zeit], i) => {
      js.push(F(`#s6 .sch-${k}`, { y: 0 }, { y: -46, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.out" }, zeit));
      js.push(F(`#s6 .zl-${k}`, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.35 }, zeit + 0.15));
      const naechste = zut[i + 1] ? zut[i + 1][2] : t.tutor;
      js.push(TO(`#s6 .zl-${k}`, { color: "#1b1b1b", borderColor: "#1b1b1b", duration: 0.25 }, naechste));
    });
    js.push(ein("#s6 .doc", t.oben, 0.3), ein("#s6 .frage", t.oben + 0.6, 0.3));
    js.push(ein("#s6 .qm", t.mat, 0.4));
    js.push(F("#s6 .rezept", { opacity: 0, rotation: -6, y: -30 }, { opacity: 1, rotation: -3, y: 0, duration: 0.45 }, t.tutor));
    js.push(F("#s6 .rezept", { scale: 1 }, { scale: 1.05, duration: 0.25, yoyo: true, repeat: 1 }, t.ablauf));
    return {
      html: `<div class="bg"></div><div class="theke"></div>${kopf(c, "hell koch")}
  ${zut.map(([k, w]) => `<div class="schale sch-${k}"><span>${w}</span></div>`).join("")}
  <div class="zettel z6"><div class="titel">Prompt</div>
    <div class="zl zl-ziel">Ziel</div><div class="zl zl-wozu">Wozu</div>
    <div class="zl zl-mat">Material<div class="doc">${balken(90)}${balken(84)}${balken(88)}</div><div class="frage">?</div></div>
    <div class="zl zl-form">Format</div></div>
  <div class="rezept"><b>Tutor:</b> Ablauf bleibt</div>
  ${marke(c, "hell")}`,
      css: `#s6 .bg { position:absolute; inset:0; background-color:#f3f3f1; background-image:linear-gradient(#dedede 2px, transparent 2px), linear-gradient(90deg, #dedede 2px, transparent 2px); background-size:80px 80px; }
#s6 .theke { position:absolute; left:0; right:0; top:520px; bottom:0; background:linear-gradient(#c9c9c9, #a9a9a9); border-top:8px solid #8a8a8a; }
#s6 .koch { font-family:"DejaVu Serif", serif; }
#s6 .schale { position:absolute; top:440px; width:170px; height:86px; background:#fff; border:4px solid #3a3a3a; border-radius:0 0 85px 85px; display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:700; color:#1b1b1b; opacity:0; }
#s6 .sch-ziel { left:70px; } #s6 .sch-wozu { left:260px; } #s6 .sch-mat { left:450px; } #s6 .sch-form { left:640px; }
#s6 .z6 { left:870px; top:96px; width:360px; height:500px; opacity:0; }
#s6 .zl { font-size:30px; font-weight:700; color:var(--A); border-left:8px solid var(--A); padding:2px 0 2px 12px; margin:12px 0 16px; opacity:0; }
#s6 .doc { width:200px; border:2px solid #777; border-radius:4px; padding:2px 10px; margin-top:8px; opacity:0; }
#s6 .doc .bal { height:8px; margin:7px 0; }
#s6 .frage { font-size:30px; margin-top:4px; color:#1b1b1b; opacity:0; }
#s6 .rezept { position:absolute; left:110px; top:150px; width:480px; padding:22px 26px; background:#fff; border:4px solid var(--A); border-radius:8px; font-size:38px; color:#1b1b1b; box-shadow:0 8px 20px #0003; opacity:0; }
#s6 .rezept b { color:var(--A); }`,
      js: js.join("\n"),
    };
  },

  // 7 Roadmovie, 2026: Taxi – Ziel und Abnahme nennen, dann fahren lassen; drei Labore zeigen in dieselbe Richtung
  s7(c) {
    const t = { nicht: c.wt("Dem Taxifahrer"), hbf: c.wt("Hauptbahnhof"), zeit: c.wt("bis 14:40"), labs: c.wt("alle drei"), erfolg: c.wt("Erfolgskriterium"), fahr: c.wt("dann fahren") };
    const striche = [0, 1, 2, 3, 4].map((i) => `<i class="mst m${i}"></i>`).join("");
    const schild = (n, text) => `<div class="schild sch${n}">${text}</div>`;
    return {
      html: `<div class="bg"></div><div class="strasse"></div>${striche}${kopf(c, "dunkel road")}
  ${schild(1, "Anthropic")}${schild(2, "OpenAI")}${schild(3, "Google")}<div class="pfosten"></div>
  <div class="taxi"><div class="dach">TAXI</div><div class="karosse"><div class="scheibe">
    <div class="zettel z7"><div class="zz z-ziel">Ziel: Hauptbahnhof</div><div class="zz z-abn">Abnahme: 14:40, ICE</div></div></div>
    <i class="licht l"></i><i class="licht r"></i></div><i class="reifen l"></i><i class="reifen r"></i></div>
  ${marke(c, "dunkel")}`,
      css: `#s7 .bg { position:absolute; inset:0; background:linear-gradient(#050505 0 40%, #161616 41%, #111 100%); }
#s7 .road { font-family:"DejaVu Sans Mono", monospace; }
#s7 .strasse { position:absolute; left:0; right:0; top:290px; bottom:0; background:#2a2a2a; clip-path:polygon(47% 0, 53% 0, 100% 100%, 0 100%); }
#s7 .mst { position:absolute; left:636px; width:8px; height:40px; background:#d8d8d8; top:300px; }
#s7 .taxi { position:absolute; left:440px; top:330px; width:400px; height:320px; }
#s7 .dach { position:absolute; left:140px; top:0; width:120px; height:38px; background:#e8e8e8; color:#111; font-weight:800; font-size:24px; display:flex; align-items:center; justify-content:center; border-radius:6px 6px 0 0; letter-spacing:.12em; }
#s7 .karosse { position:absolute; left:0; top:38px; width:400px; height:240px; background:#bdbdbd; border-radius:40px 40px 14px 14px; border:4px solid #e0e0e0; }
#s7 .scheibe { position:absolute; left:40px; top:16px; width:312px; height:128px; background:#3a3a3a; border-radius:22px 22px 6px 6px; }
#s7 .z7 { left:22px; top:12px; width:270px; height:104px; padding:10px 12px; opacity:0; box-shadow:none; }
#s7 .zz { font-size:20px; font-weight:700; color:#1b1b1b; margin-bottom:8px; white-space:nowrap; }
#s7 .z-abn { color:var(--A); opacity:0; }
#s7 .licht { position:absolute; top:170px; width:70px; height:28px; background:#efefef; border-radius:6px; }
#s7 .licht.l { left:18px; } #s7 .licht.r { right:18px; }
#s7 .reifen { position:absolute; top:270px; width:64px; height:44px; background:#0a0a0a; border-radius:0 0 10px 10px; }
#s7 .reifen.l { left:28px; } #s7 .reifen.r { right:28px; }
#s7 .pfosten { position:absolute; left:1150px; top:150px; width:10px; height:330px; background:#8a8a8a; opacity:0; }
#s7 .schild { position:absolute; left:950px; width:220px; height:56px; background:#f0f0f0; color:#111; font-size:26px; font-weight:700; display:flex; align-items:center; justify-content:center; padding-left:22px; opacity:0;
  clip-path:polygon(16% 0, 100% 0, 100% 100%, 16% 100%, 0 50%); }
#s7 .sch1 { top:150px; } #s7 .sch2 { top:222px; } #s7 .sch3 { top:294px; }`,
      js: [
        ...[0, 1, 2, 3, 4].map((i) => F(`#s7 .m${i}`, { y: 0, scaleY: 0.4, scaleX: 0.5, opacity: 0.2 }, { y: 420, scaleY: 2.4, scaleX: 2.2, opacity: 1, duration: 1.6, repeat: Math.ceil(c.d / 1.6), ease: "power1.in" }, c.t0 + i * 0.32)),
        F("#s7 .taxi", { y: 0 }, { y: 3, duration: 0.2, yoyo: true, repeat: Math.floor(c.d / 0.2), ease: "sine.inOut" }, c.t0),
        ein("#s7 .z7", t.hbf - 0.2, 0.35),
        ein("#s7 .z-abn", t.zeit, 0.35),
        ein("#s7 .pfosten", t.labs - 0.2, 0.3),
        F("#s7 .schild", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.3 }, t.labs),
        ein("#s7 .qm", t.labs + 0.6, 0.4),
        F("#s7 .z-abn", { scale: 1 }, { scale: 1.08, duration: 0.25, yoyo: true, repeat: 1, transformOrigin: "0% 50%" }, t.erfolg),
        TO("#s7 .taxi", { scale: 0.86, y: -40, duration: 1.4, ease: "power1.in" }, t.fahr),
      ].join("\n"),
    };
  },

  // 8 Heist-Film: Bauplan – Interview → Spezifikation → neue Sitzung → fremde Prüfung
  s8(c) {
    const t = { plan: c.wt("Dann zuerst"), int: c.wt("interviewt"), spec: c.wt("Spezifikation"), neu: c.wt("frischen Sitzung"), pruef: c.wt("prüft jemand") };
    const st = [["st1", "Interview", 120, 230, t.int], ["st2", "Spezifikation", 390, 400, t.spec], ["st3", "neue Sitzung", 680, 230, t.neu], ["st4", "fremde Prüfung", 950, 400, t.pruef]];
    const pfeile = [
      ["p1", "M 330 300 C 380 320, 400 360, 430 400"], ["p2", "M 640 440 C 680 420, 690 360, 720 300"], ["p3", "M 900 270 C 950 300, 980 360, 1000 400"],
    ];
    const js = [ein("#s8 .plan", t.plan, 0.4), F("#s8 .lampe", { x: 0, y: 0, opacity: 0 }, { opacity: 1, duration: 0.4 }, t.plan)];
    st.forEach(([k, , x, y, zeit], i) => {
      js.push(TO("#s8 .lampe", { x: x - 120, y: y - 230, duration: 0.5, ease: "power2.inOut" }, zeit - 0.4));
      js.push(F(`#s8 .${k}`, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.35 }, zeit));
      if (i > 0) js.push(F(`#s8 .${pfeile[i - 1][0]}`, { strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: 0.5 }, zeit - 0.45));
    });
    js.push(ein("#s8 .qm", t.spec + 0.5, 0.4));
    return {
      html: `<div class="bg"></div>${kopf(c, "dunkel heist")}
  <div class="plan"></div><div class="lampe"></div>
  <svg class="linien" viewBox="0 0 1280 720" width="1280" height="720">${pfeile.map(([k, d]) => `<path class="pf ${k}" d="${d}" marker-end="url(#spitze)"/>`).join("")}
    <defs><marker id="spitze" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#dcdcdc"/></marker></defs></svg>
  ${st.map(([k, w, x, y]) => `<div class="station ${k}" style="left:${x}px;top:${y}px">${w}</div>`).join("")}
  ${marke(c, "dunkel")}`,
      css: `#s8 .bg { position:absolute; inset:0; background-color:#151515; background-image:linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px); background-size:40px 40px; }
#s8 .heist { font-family:"DejaVu Sans Mono", monospace; }
#s8 .plan { position:absolute; left:80px; top:150px; width:1120px; height:430px; border:3px dashed #8a8a8a; border-radius:8px; opacity:0; }
#s8 .lampe { position:absolute; left:20px; top:110px; width:420px; height:320px; background:radial-gradient(ellipse at center, #ffffff24, transparent 65%); opacity:0; pointer-events:none; }
#s8 .linien { position:absolute; left:0; top:0; }
#s8 .pf { stroke:#dcdcdc; stroke-width:4; fill:none; stroke-dasharray:300; stroke-dashoffset:300; }
#s8 .station { position:absolute; width:240px; height:90px; border:3px solid #e8e8e8; border-radius:10px; background:#1d1d1d; color:#f0f0f0; font-size:28px; display:flex; align-items:center; justify-content:center; text-align:center; opacity:0; font-family:"DejaVu Sans Mono", monospace; }
#s8 .st2 { border-color:var(--Ad); color:var(--Ad); font-weight:700; border-width:4px; }`,
      js: js.join("\n"),
    };
  },

  // 9 Science-Fiction (Zeitkapsel): 308 → rund 120 Wörter; Stand November 2026; beim nächsten Modell prüfen
  s9(c) {
    const t = { kapsel: c.wt("Eine Nachricht"), alt: c.wt("308"), neu: c.wt("rund 120"), regeln: c.wt("Auch die Regeln"), zettel: c.wt("Zettel hervorholen"), zeile: c.wt("Zeile für") };
    const sterne = Array.from({ length: 70 }, (_, i) => {
      const x = (i * 137.5) % 1280, y = (i * 89.3 + (i % 7) * 53) % 720, r = 1 + (i % 3);
      return `<i class="stern" style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px;width:${r}px;height:${r}px"></i>`;
    }).join("");
    const altZeilen = [88, 72, 80, 64, 90, 70, 84, 58, 76, 86, 62, 80, 70, 88, 66, 74, 82, 60, 78, 68, 86].map((b) => balken(b)).join("");
    return {
      html: `<div class="bg"></div>${sterne}${kopf(c, "dunkel scifi")}
  <div class="zettel alt"><div class="titel">Prompt</div>${altZeilen}</div>
  <div class="zettel neu"><div class="titel">Prompt</div>
    <div class="nz">Ziel</div>${balken(70)}<div class="nz">Wozu</div>${balken(56)}<div class="nz">Material</div>${balken(40)}<div class="nz">Abnahme</div>${balken(80)}${balken(62)}
    <i class="scan"></i></div>
  <div class="zahl za">308 Wörter</div><div class="zahl zn">rund 120 Wörter</div>
  <div class="kapsel kl"></div><div class="kapsel kr"></div>
  <div class="stand">Stand: November 2026</div>
  <div class="tag pr">prüfen</div>
  ${marke(c, "dunkel")}`,
      css: `#s9 .bg { position:absolute; inset:0; background:radial-gradient(ellipse at 50% 60%, #1c1c1c, #000 75%); }
#s9 .scifi { font-family:"DejaVu Sans Mono", monospace; letter-spacing:.04em; }
#s9 .stern { position:absolute; background:#d8d8d8; border-radius:50%; }
#s9 .alt { left:330px; top:96px; width:260px; height:480px; opacity:0; }
#s9 .neu { left:690px; top:356px; width:260px; height:220px; opacity:0; }
#s9 .alt .bal { height:8px; margin:6px 0; }
#s9 .nz { font-size:15px; font-weight:700; color:#333; margin-top:6px; }
#s9 .neu .bal { height:8px; margin:3px 0 4px; }
#s9 .scan { position:absolute; left:0; right:0; top:44px; height:4px; background:var(--A); box-shadow:0 0 12px var(--A); opacity:0; }
#s9 .zahl { position:absolute; top:596px; width:300px; text-align:center; font-family:"DejaVu Sans Mono", monospace; font-size:30px; opacity:0; }
#s9 .za { left:310px; color:#e2e2e2; } #s9 .zn { left:670px; color:var(--Ad); font-weight:700; }
#s9 .kapsel { position:absolute; top:120px; width:330px; height:470px; background:linear-gradient(90deg, #5a5a5a, #9c9c9c 40%, #6a6a6a); border:3px solid #bdbdbd; }
#s9 .kl { left:310px; border-radius:160px 0 0 160px; } #s9 .kr { left:640px; border-radius:0 160px 160px 0; }
#s9 .stand { position:absolute; left:960px; top:110px; font-family:"DejaVu Sans Mono", monospace; font-size:22px; color:#e6e6e6; border:3px solid #e6e6e6; padding:6px 12px; transform:rotate(-4deg); opacity:0; }
#s9 .pr { left:980px; top:440px; color:#e6e6e6; }`,
      js: [
        F("#s9 .stern", { opacity: 0.3 }, { opacity: 1, duration: 0.8, stagger: { each: 0.03, repeat: -1, yoyo: true } }, c.t0),
        TO("#s9 .kl", { x: -360, opacity: 0, duration: 1.2, ease: "power2.in" }, t.kapsel + 0.5),
        TO("#s9 .kr", { x: 360, opacity: 0, duration: 1.2, ease: "power2.in" }, t.kapsel + 0.5),
        ein("#s9 .alt", t.kapsel + 0.9, 0.5), ein("#s9 .neu", t.kapsel + 1.1, 0.5),
        ein("#s9 .za", t.alt, 0.35),
        ein("#s9 .zn", t.neu, 0.35),
        F("#s9 .zn", { scale: 1 }, { scale: 1.08, duration: 0.25, yoyo: true, repeat: 1 }, t.neu + 0.4),
        F("#s9 .stand", { opacity: 0, scale: 1.6 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power3.in" }, t.regeln),
        ein("#s9 .qm", t.regeln + 0.6, 0.4),
        ein("#s9 .pr", t.zettel, 0.35),
        F("#s9 .scan", { opacity: 0, y: 0 }, { opacity: 1, y: 150, duration: 1.6, ease: "none", repeat: 1 }, t.zeile - 0.3),
      ].join("\n"),
    };
  },
};
