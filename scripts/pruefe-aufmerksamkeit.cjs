// Prüft eine Schritt-Animation gegen das Aufmerksamkeitsbudget.
// Herkunft: Skill „lehranimation-schritte“, Anhang B (30.10.2026). Regeln F1–F7, T1–T7, A1–A5.
// Aufruf: node scripts/pruefe-aufmerksamkeit.cjs animation.html [Optionen]
//   --kontrast  eine zweite, im Storyboard begründete Farbe ist erlaubt (Regel F3)
//   --bilder    speichert je Schritt ein Farb- und ein Graustufenbild (Regel F1)
//   --api NAME  Name des Steuerobjekts, falls nicht window.ANIM (z. B. --api __p7)
//   --letzter N letzter Schritt (0-basiert), falls das Steuerobjekt ihn nicht nennt
//   --buehne CSS Bereich, der gemessen wird (Standard: das erste svg)
//   --adapter JS eine Zeile JavaScript, die vor der Messung läuft und window.ANIM
//               aus einer anderen Steuerung baut, z. B.
//               --adapter "window.ANIM={gehe:n=>PA.seek(n*5),letzter:8}"
// Ergänzungen für den Messlauf über den Bestand (Repository genai4teaching, 30.10.2026):
//   --json DATEI schreibt Zeilen und Ergebnis zusätzlich als JSON (für scripts/pruefe-aufmerksamkeit-alle.cjs)
//   --warte MS   wartet nach dem Laden, bevor gemessen wird (z. B. für OJS-Widgets)
//   Statt eines Dateinamens geht auch eine URL (http://…); an Dateinamen dürfen ?abfrage und #anker hängen.
//   Bilder zeigen nur die Bühne (bei body/html die ganze Seite), nicht bloß den sichtbaren Fensterausschnitt.
// Neue Animationen legen window.ANIM = { gehe, letzter } offen. Ohne Steuerobjekt
// wird ein Standbild gemessen (Endzustand, Animationen abgeschaltet).
const { chromium } = require("playwright");
const path = require("node:path");
const fs = require("node:fs");
const { pathToFileURL } = require("node:url");

(async () => {

const args = process.argv.slice(2);
const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const werte = new Set(["--bilder", "--api", "--letzter", "--buehne", "--adapter", "--json", "--warte"].map(opt).filter(Boolean));
const ziel = args.find(a => !a.startsWith("--") && !werte.has(a)) || "";
const kontrast = args.includes("--kontrast");
const bilder = opt("--bilder") ? path.resolve(opt("--bilder")) : null;
const API = opt("--api") || "ANIM";
const BUEHNE = opt("--buehne") || "svg";
const WARTE = +(opt("--warte") || 0);
const BUDGET = { farben: kontrast ? 2 : 1, neueWoerter: 8, sichtbar: 40 };

// Ziel in eine URL verwandeln; ?abfrage und #anker bleiben erhalten
let url;
if (/^(https?|file):\/\//.test(ziel)) url = ziel;
else {
  const m = /^([^?#]*)(.*)$/.exec(ziel);
  const datei = path.resolve(m[1]);
  if (!fs.existsSync(datei)) { console.error(`Datei nicht gefunden: ${datei}`); process.exit(2); }
  url = pathToFileURL(datei).href + m[2];
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
await page.goto(url, { waitUntil: "load" });
await page.addStyleTag({ content: "*{transition:none!important;animation:none!important}" });
if (WARTE) await page.waitForTimeout(WARTE);
if (opt("--adapter")) await page.evaluate(code => { (0, eval)(code); }, opt("--adapter"));
if (!(await page.$(BUEHNE))) { console.error(`Bühne „${BUEHNE}“ nicht gefunden in ${url}`); await browser.close(); process.exit(2); }
const hatApi = await page.evaluate(a => !!(window[a] && window[a].gehe), API);
const letzter = opt("--letzter") != null ? +opt("--letzter") : hatApi ? await page.evaluate(a => window[a].letzter ?? 0, API) : 0;
if (!hatApi) console.log("Kein Steuerobjekt gefunden: gemessen wird ein Standbild.");
if (bilder) fs.mkdirSync(bilder, { recursive: true });
const ganzeSeite = /^(body|html)$/i.test(BUEHNE.trim());
const knipse = async datei => ganzeSeite
  ? page.screenshot({ path: datei, fullPage: true })
  : page.locator(BUEHNE).first().screenshot({ path: datei });

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
    return { alle, neu, gruppen, farben: toene.size, toene: [...toene].sort((a, b) => a - b).map(k => k * 30) };
  }, BUEHNE);
  const verstoss = [];
  if (r.farben > BUDGET.farben) verstoss.push(`${r.farben} Farbtöne`);
  if (r.neu > BUDGET.neueWoerter) verstoss.push(`${r.neu} neue Wörter`);
  if ((s < letzter || !hatApi) && r.alle > BUDGET.sichtbar) verstoss.push(`${r.alle} sichtbare Wörter`);
  if (s > 0 && r.gruppen !== null && r.gruppen !== 1) verstoss.push(`${r.gruppen} neue Gruppen`);
  if (verstoss.length) fehler++;
  zeilen.push({ Schritt: s + 1, "Wörter sichtbar": r.alle, "Wörter neu": r.gruppen === null ? "–" : r.neu, "Gruppen neu": r.gruppen ?? "–", Farbtöne: r.farben, "Farbton-Klassen (°)": r.toene.join(" "), Ergebnis: verstoss.length ? "ÄNDERN: " + verstoss.join(", ") : "ok" });
  if (bilder) {
    await knipse(path.join(bilder, `schritt-${String(s + 1).padStart(2, "0")}.png`));
    await page.evaluate(() => { document.documentElement.style.filter = "grayscale(1)"; });
    await knipse(path.join(bilder, `schritt-${String(s + 1).padStart(2, "0")}-grau.png`));
    await page.evaluate(() => { document.documentElement.style.filter = ""; });
  }
}
await browser.close();
console.table(zeilen);
console.log(fehler ? `ÜBERARBEITEN: ${fehler} Schritt(e) über dem Budget.` : "BESTANDEN: alle Schritte im Budget.");
if (opt("--json")) fs.writeFileSync(opt("--json"), JSON.stringify({ url, buehne: BUEHNE, steuerobjekt: hatApi, schritte: letzter + 1, fehler, zeilen }, null, 2));
process.exit(fehler ? 1 : 0);
})();
