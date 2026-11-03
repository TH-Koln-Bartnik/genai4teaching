// Browserprüfung der Bibliothek der Prompts (Playwright, Chromium).
// Laiensicht: Ein ferngesteuerter Browser spielt das Element durch wie eine Leserin:
// Tipp abgeben, Rundgang starten, mit der Tastatur zum Bildungsregal, Buch öffnen,
// Auflösung, Listenansicht. Er meldet Fehler, misst die Bildrate und macht Bildschirmfotos.
// Aufruf: node scripts/pruefe-bibliothek.mjs [ausgabeordner]   (ein lokaler Server ist nicht nötig)
import { createRequire } from "node:module";
// Playwright ist im Container global installiert (nicht in package.json); require nutzt NODE_PATH.
const { chromium } = createRequire(import.meta.url)("playwright");
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const AUS = process.argv[2] || "/tmp/bibliothek-pruefung";
mkdirSync(AUS, { recursive: true });
const URL = "file://" + resolve("interactions/bibliothek-der-prompts.html");
const fehler = [];
const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });

async function lauf(breite, hoehe, name) {
  const ctx = await browser.newContext({ viewport: { width: breite, height: hoehe }, deviceScaleFactor: 1 });
  const s = await ctx.newPage();
  s.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") fehler.push(`${name} ${m.type()}: ${m.text()}`); });
  s.on("pageerror", (e) => fehler.push(`${name} pageerror: ${e.message}`));
  await s.goto(URL);
  await s.screenshot({ path: `${AUS}/${name}-1-vorhersage.png`, fullPage: true });
  // Phase 1 per Tastatur
  await s.focus("#tipp-rang"); for (let i = 0; i < 4; i++) await s.keyboard.press("ArrowLeft");
  await s.focus("#tipp-anteil"); for (let i = 0; i < 6; i++) await s.keyboard.press("ArrowRight");
  await s.click("#tipp-fest");
  const ergebnis = { name };
  // Phase 2: 3D
  await s.click("#ansicht-3d");
  await s.click("#start-3d");
  await s.waitForSelector("#buehne canvas");
  await s.waitForTimeout(800);
  await s.screenshot({ path: `${AUS}/${name}-2a-3d-start.png` });
  ergebnis.fps = await s.evaluate(() => window.__bibliothek.messen(3000));
  // Zweite Messung mit 4-fach gedrosselter CPU (Chrome DevTools Protocol)
  const cdp = await ctx.newCDPSession(s);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  ergebnis.fpsGedrosselt = await s.evaluate(() => window.__bibliothek.messen(4000));
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 1 });
  ergebnis.info = await s.evaluate(() => window.__bibliothek.info());
  // Tastatur: N bis zum Bildungsregal (Rang 3), Enter öffnet Regal, erstes Buch wählen
  await s.focus("#buehne canvas");
  await s.keyboard.press("n"); await s.keyboard.press("n"); await s.keyboard.press("n");
  // Enter sofort, noch während der Kamerafahrt: muss trotzdem das Zielregal öffnen
  await s.keyboard.press("Enter");
  ergebnis.regalWaehrendFahrt = (await s.textContent(".karte h3")).trim();
  await s.keyboard.press("Escape");
  await s.waitForFunction(() => !window.__bibliothek.inBewegung(), null, { timeout: 15000 });
  ergebnis.ort = await s.textContent(".ort");
  await s.focus("#buehne canvas");
  await s.keyboard.press("Enter");
  await s.waitForTimeout(300);
  await s.click(".karte .buchwahl button >> nth=0");
  await s.waitForTimeout(800);
  ergebnis.karte = (await s.textContent(".karte h3")).trim();
  await s.screenshot({ path: `${AUS}/${name}-2b-3d-buch.png` });
  await s.keyboard.press("Escape");
  ergebnis.karteZu = await s.isHidden(".karte");
  // Auflösung
  await s.click("#zur-aufloesung");
  await s.waitForTimeout(1600);
  await s.screenshot({ path: `${AUS}/${name}-3a-aufloesung-3d.png` });
  await s.locator("#p3").screenshot({ path: `${AUS}/${name}-3b-aufloesung-text.png` });
  ergebnis.aufloesung = (await s.textContent("#aufloesung")).replace(/\s+/g, " ").slice(0, 400);
  await s.click("#zur-bilanz"); await s.click("#zum-transfer");
  await s.click("#kopieren"); await s.waitForTimeout(200);
  ergebnis.kopiert = await s.textContent("#kopiert");
  await s.locator("#p4").screenshot({ path: `${AUS}/${name}-4-bilanz.png` });
  await s.locator("#p5").screenshot({ path: `${AUS}/${name}-5-transfer.png` });
  // Listenansicht vollständig per Tastatur
  await s.click("#ansicht-liste");
  await s.focus("#liste li[data-soc='25'] .regalknopf");
  const offen = await s.getAttribute("#liste li[data-soc='25'] .regalknopf", "aria-expanded");
  if (offen !== "true") await s.keyboard.press("Enter");
  await s.keyboard.press("Tab"); await s.keyboard.press("Enter");
  ergebnis.listeAufgaben = await s.locator("#liste li[data-soc='25'] .aufgaben li").count();
  await s.click("#geo-deu");
  ergebnis.deuErstes = (await s.textContent("#liste li:first-child .name")).trim();
  await s.locator("#p2").screenshot({ path: `${AUS}/${name}-2c-liste.png` });
  ergebnis.scrollX = await s.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  await ctx.close();
  return ergebnis;
}

async function reduziert() {
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, reducedMotion: "reduce" });
  const s = await ctx.newPage();
  s.on("pageerror", (e) => fehler.push(`reduziert pageerror: ${e.message}`));
  await s.goto(URL);
  await s.click("#tipp-fest");
  const r = { listeSichtbar: await s.isVisible("#ansicht-liste-box"), dreiDSichtbar: await s.isVisible("#ansicht-3d-box") };
  await ctx.close();
  return r;
}

console.log(JSON.stringify(await lauf(1200, 900, "b1200"), null, 1));
console.log(JSON.stringify(await lauf(390, 844, "b390"), null, 1));
console.log("reduced-motion:", JSON.stringify(await reduziert()));
console.log(fehler.length ? "FEHLER:\n" + fehler.join("\n") : "Keine Konsolenfehler.");
await browser.close();
