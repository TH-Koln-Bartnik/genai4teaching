// Prüft eine Schritt-Animation gegen das Aufmerksamkeitsbudget.
// Aufruf: node pruefe-aufmerksamkeit.cjs animation.html [--kontrast] [--bilder ordner]
//   --kontrast  eine zweite, im Storyboard begründete Farbe ist erlaubt (Regel F3)
//   --bilder    speichert je Schritt ein Farb- und ein Graustufenbild (Regel F1)
//   --api NAME  Name des Steuerobjekts, falls nicht window.ANIM (z. B. --api __p7)
//   --letzter N letzter Schritt (0-basiert), falls das Steuerobjekt ihn nicht nennt
//   --buehne CSS Bereich, der gemessen wird (Standard: das erste svg)
//   --adapter JS eine Zeile JavaScript, die vor der Messung läuft und window.ANIM
//               aus einer anderen Steuerung baut, z. B.
//               --adapter "window.ANIM={gehe:n=>PA.seek(n*5),letzter:8}"
// Neue Animationen legen window.ANIM = { gehe, letzter } offen. Ohne Steuerobjekt
// wird ein Standbild gemessen (Endzustand, Animationen abgeschaltet).
const { chromium } = require("playwright");
const path = require("node:path");
const fs = require("node:fs");

(async () => {

const args = process.argv.slice(2);
const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const werte = new Set(["--bilder", "--api", "--letzter", "--buehne", "--adapter"].map(opt).filter(Boolean));
const datei = path.resolve(args.find(a => !a.startsWith("--") && !werte.has(a)) || "");
const kontrast = args.includes("--kontrast");
const bilder = opt("--bilder") ? path.resolve(opt("--bilder")) : null;
const API = opt("--api") || "ANIM";
const BUEHNE = opt("--buehne") || "svg";
const BUDGET = { farben: kontrast ? 2 : 1, neueWoerter: 8, sichtbar: 40 };

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
await page.goto("file://" + datei);
await page.addStyleTag({ content: "*{transition:none!important;animation:none!important}" });
if (opt("--adapter")) await page.evaluate(code => { (0, eval)(code); }, opt("--adapter"));
const hatApi = await page.evaluate(a => !!(window[a] && window[a].gehe), API);
const letzter = opt("--letzter") != null ? +opt("--letzter") : hatApi ? await page.evaluate(a => window[a].letzter ?? 0, API) : 0;
if (!hatApi) console.log("Kein Steuerobjekt gefunden: gemessen wird ein Standbild.");
if (bilder) fs.mkdirSync(bilder, { recursive: true });

const zeilen = [];
let fehler = 0;
for (let s = 0; s <= letzter; s++) {
  if (hatApi) await page.evaluate(([a, n]) => window[a].gehe(n), [API, s]);
  await page.waitForTimeout(30);
  const r = await page.evaluate(sel => {
    const buehne = document.querySelector(sel);
    const sichtbar = e => e.checkVisibility({ opacityProperty: true, visibilityProperty: true, checkOpacity: true, checkVisibilityCSS: true });
    const zaehle = s => (s.match(/[\p{L}\p{N}][\p{L}\p{N}.,%:–-]*/gu) || []).length;
    // Wörter: alle sichtbaren Textknoten der Bühne (SVG-Text und HTML-Text)
    let alle = 0, neu = 0;
    const gang = document.createTreeWalker(buehne, NodeFilter.SHOW_TEXT);
    for (let n = gang.nextNode(); n; n = gang.nextNode()) {
      const e = n.parentElement;
      if (!e || e.closest("title,desc,style,script") || !sichtbar(e)) continue;
      const w = zaehle(n.textContent);
      alle += w; if (e.closest(".neu")) neu += w;
    }
    const mitAb = buehne.querySelectorAll("[data-ab]").length > 0;
    const gruppen = mitAb ? [...buehne.querySelectorAll("[data-ab].neu")].filter(sichtbar).length : null;
    // Farben: Füllung, Linie, Schrift-, Hintergrund- und Rahmenfarbe aller sichtbaren Elemente
    const werte = [];
    [buehne, ...buehne.querySelectorAll("*")].filter(sichtbar).forEach(e => {
      const c = getComputedStyle(e);
      if (e instanceof SVGElement) werte.push(c.fill, c.stroke); else werte.push(c.color, c.backgroundColor, c.borderTopColor);
    });
    document.querySelectorAll(".unterschrift .akz").forEach(e => { if (sichtbar(e)) werte.push(getComputedStyle(e).color); });
    const toene = new Set();
    werte.forEach(v => {
      const m = /rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/.exec(v || "");
      if (!m || (m[4] !== undefined && +m[4] === 0)) return;
      const [r, g, b] = [m[1], m[2], m[3]].map(x => x / 255);
      const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
      const sat = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
      if (sat < 0.25 || l < 0.12 || l > 0.92) return;               // Grau, Schwarz, Weiß zählen nicht
      let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      toene.add(Math.round(((h * 60 + 360) % 360) / 30) % 12);       // Farbton in 30°-Klassen
    });
    return { alle, neu, gruppen, farben: toene.size };
  }, BUEHNE);
  const verstoss = [];
  if (r.farben > BUDGET.farben) verstoss.push(`${r.farben} Farbtöne`);
  if (r.neu > BUDGET.neueWoerter) verstoss.push(`${r.neu} neue Wörter`);
  if ((s < letzter || !hatApi) && r.alle > BUDGET.sichtbar) verstoss.push(`${r.alle} sichtbare Wörter`);
  if (s > 0 && r.gruppen !== null && r.gruppen !== 1) verstoss.push(`${r.gruppen} neue Gruppen`);
  if (verstoss.length) fehler++;
  zeilen.push({ Schritt: s + 1, "Wörter sichtbar": r.alle, "Wörter neu": r.gruppen === null ? "–" : r.neu, "Gruppen neu": r.gruppen ?? "–", Farbtöne: r.farben, Ergebnis: verstoss.length ? "ÄNDERN: " + verstoss.join(", ") : "ok" });
  if (bilder) {
    await page.screenshot({ path: path.join(bilder, `schritt-${String(s + 1).padStart(2, "0")}.png`) });
    await page.evaluate(() => { document.documentElement.style.filter = "grayscale(1)"; });
    await page.screenshot({ path: path.join(bilder, `schritt-${String(s + 1).padStart(2, "0")}-grau.png`) });
    await page.evaluate(() => { document.documentElement.style.filter = ""; });
  }
}
await browser.close();
console.table(zeilen);
console.log(fehler ? `ÜBERARBEITEN: ${fehler} Schritt(e) über dem Budget.` : "BESTANDEN: alle Schritte im Budget.");
process.exit(fehler ? 1 : 0);
})();
