// Genrefilm-Pipeline: baut aus Manifest, Zeitplan und Szenen-Modul eine HyperFrames-Komposition (index.html).
// In Alltagssprache: Jede Szene ist ein Stück Webseite (HTML + CSS) mit einer Bewegungsliste (GSAP).
// Diese Datei setzt die neun Stücke auf eine gemeinsame Zeitleiste; HyperFrames filmt die Seite dann Bild für Bild ab.
// Wiederverwendbar: Das Szenen-Modul eines Films (z. B. _src/videos/s5-token-genres/szenen.mjs) liefert nur noch
// die Funktionen je Szene; Zeiten kommen aus dem Zeitplan (Audiolängen), nie aus festen Zahlen.

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Zeitpunkt (Sekunden ab Tonbeginn) einer Zeichenposition im Sprechtext.
 *  Ohne Anker: Anteil der Zeichenposition × Audiolänge (Schätzung, bei lebhafter Stimme bis ~1,5 s daneben).
 *  Mit Ankern aus wortzeiten.json ([[position, sekunden], …], gemessen mit wortzeiten.py): linear zwischen
 *  den gemessenen Wörtern, also so genau wie die Spracherkennung. */
export function zeitAnPosition(textLaenge, ad, anker) {
  const p = [[0, 0], ...(anker || []).filter(([, t]) => t >= 0 && t <= ad), [textLaenge, ad]];
  return (pos) => {
    if (!anker?.length) return (pos / textLaenge) * ad;
    for (let i = 1; i < p.length; i++) {
      if (pos <= p[i][0]) {
        const [x0, y0] = p[i - 1], [x1, y1] = p[i];
        return x1 === x0 ? y0 : y0 + ((pos - x0) / (x1 - x0)) * (y1 - y0);
      }
    }
    return ad;
  };
}

/** Zeitpunkt eines Wortes im Sprechtext (für Bildereignisse, die am gesprochenen Wort hängen). */
export function wortzeit(sprechtext, a0, ad, anker) {
  const text = sprechtext;
  const zeit = zeitAnPosition(text.length, ad, anker);
  return (wort, n = 1, versatz = 0) => {
    let pos = -1;
    for (let i = 0; i < n; i++) {
      pos = text.indexOf(wort, pos + 1);
      if (pos < 0) throw new Error(`Wort „${wort}“ (${n}.) nicht im Sprechtext: ${text.slice(0, 40)}…`);
    }
    return +(a0 + zeit(pos) + versatz).toFixed(3);
  };
}

/**
 * @param {object} p
 * @param {object} p.manifest   Film-Manifest (szenen[], video{breite,hoehe}, farben{})
 * @param {object[]} p.zeitplan [{id,start,dauer,audioStart,audioDauer}] aus zeitplan()
 * @param {object} p.szenen     { s1: (ctx) => ({html, css, js}), … }
 * @param {string} p.basisCss   gemeinsames CSS des Films
 * @param {object} p.extra      beliebige Zusatzdaten für die Szenen (z. B. tokenwerte)
 */
export function baueKomposition({ manifest, zeitplan, szenen, basisCss = "", extra = {} }) {
  const { breite: W, hoehe: H } = manifest.video;
  const gesamt = zeitplan.at(-1).start + zeitplan.at(-1).dauer;
  let html = "", css = "", js = "";
  zeitplan.forEach((z, i) => {
    const s = manifest.szenen[i];
    const fn = szenen[s.id];
    if (!fn) throw new Error(`Szene ${s.id} fehlt im Szenen-Modul`);
    const ctx = {
      s, nr: i + 1, n: zeitplan.length, t0: z.start, d: z.dauer, a0: z.start + z.audioStart, ad: z.audioDauer,
      at: (f) => +(z.start + f * z.dauer).toFixed(3),
      wt: wortzeit(s.sprechtext, z.start + z.audioStart, z.audioDauer, z.anker),
      W, H, farben: manifest.farben, esc, ...extra,
    };
    const r = fn(ctx);
    html += `<section id="${s.id}" class="clip szene" data-start="${z.start.toFixed(3)}" data-duration="${z.dauer.toFixed(3)}" data-track-index="0">
${r.html}
</section>\n`;
    css += (r.css || "") + "\n";
    // Einblendung jeder Szene (0,35 s) und Genre-Karte: Name groß in der Mitte, dann klein oben links
    js += `// ---- Szene ${i + 1}: ${s.genre} (${z.start.toFixed(2)}–${(z.start + z.dauer).toFixed(2)} s)
tl.fromTo("#${s.id}", { opacity: 0 }, { opacity: 1, duration: 0.35 }, ${z.start.toFixed(3)});
tl.fromTo("#${s.id} .genre-gross", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.3 }, ${(z.start + 0.05).toFixed(3)});
tl.to("#${s.id} .genre-gross", { opacity: 0, duration: 0.3 }, ${(z.start + 1.0).toFixed(3)});
tl.fromTo("#${s.id} .genre-klein", { opacity: 0 }, { opacity: 1, duration: 0.3 }, ${(z.start + 1.1).toFixed(3)});
${r.js || ""}
`;
  });
  return `<!doctype html>
<html lang="${manifest.sprache || "de"}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=${W}, height=${H}" />
<title>${esc(manifest.titel)}</title>
<script src="assets/gsap.min.js"></script>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html, body { width:${W}px; height:${H}px; overflow:hidden; background:#000; }
#root { position:relative; width:100%; height:100%; }
.szene { position:absolute; inset:0; overflow:hidden; }
${basisCss}
${css}
</style>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-duration="${gesamt.toFixed(3)}" data-width="${W}" data-height="${H}">
${html}</div>
<script>
window.__timelines = window.__timelines || {};
const tl = gsap.timeline({ paused: true });
${js}
window.__timelines["main"] = tl;
tl.seek(0);
</script>
</body>
</html>
`;
}
