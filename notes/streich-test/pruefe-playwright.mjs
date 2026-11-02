// Browserprüfung des Streich-Tests (P1), 1200 px und 390 px, Maus und Tastatur, axe.
// Laiensicht: Ein Skript steuert einen unsichtbaren Browser, klickt die Übung durch wie ein Mensch
// und meldet, ob etwas fehlt oder kaputt ist; Bildschirmfotos landen im angegebenen Ordner.
// Aufruf: node notes/streich-test/pruefe-playwright.mjs <basis-url> <screenshot-ordner> <pfad-zu-axe.min.js>
// Basis-URL: z. B. http://localhost:8765 (docs/ per „python3 -m http.server“ ausgeliefert)
import { createRequire } from "node:module";
// Playwright ist in der Arbeitsumgebung global installiert; createRequire findet es über NODE_PATH.
const { chromium } = createRequire(import.meta.url)("playwright");
import { readFileSync, mkdirSync } from "node:fs";

const [BASIS, ORDNER, AXE] = process.argv.slice(2);
mkdirSync(ORDNER, { recursive: true });
const axeSrc = readFileSync(AXE, "utf8");
const fehler = [];
const pruefe = (bed, text) => { console.log((bed ? "ok   " : "FEHLT") + "  " + text); if (!bed) fehler.push(text); };

const browser = await chromium.launch();

async function durchlauf(breite, art) {
  const page = await browser.newPage({ viewport: { width: breite, height: 900 } });
  const konsole = [];
  page.on("console", m => { if (m.type() === "error") konsole.push(m.text()); });
  page.on("pageerror", e => konsole.push(String(e)));
  await page.goto(`${BASIS}/interactions/streich-test-prompting.html`);
  const tag = `${breite}-${art}`;
  await page.screenshot({ path: `${ORDNER}/${tag}-1-start.png`, fullPage: true });

  if (art === "maus") {
    await page.click("#zeile-1 .zk");                                  // umformulieren, gestrichen
    await page.click('#zeile-6 .zk');                                  // behalten, aber gestrichen …
    await page.click('#zeile-6 .sicher button[data-s="3"]');           // … mit Sicherheit 3 → Hyperkorrektur
    await page.click("#zeile-9 .zk");                                  // streichen, richtig
    await page.click('#zeile-9 .sicher button[data-s="1"]');
  } else {
    await page.focus("#zeile-1 .zk");
    await page.keyboard.press("Tab");                                  // → Zeile 2
    await page.keyboard.press(" ");                                    // streichen (richtig)
    await page.keyboard.press("ArrowRight");                           // Sicherheit 3
    for (let i = 0; i < 3; i++) await page.keyboard.press("Tab");      // → Zeile 5
    await page.keyboard.press("Enter");                                // streichen (falsch) …
    await page.keyboard.press("ArrowRight");                           // … mit Sicherheit 3 → Hyperkorrektur
    await page.keyboard.press("ArrowRight");                           // bleibt bei 3
  }
  const gestrichen = await page.$$eval('.zk[aria-checked="true"]', els => els.length);
  pruefe(gestrichen === (art === "maus" ? 3 : 2), `${tag}: Streichungen gesetzt (${gestrichen})`);
  const zaehler = await page.textContent("#zaehler");
  pruefe(zaehler.startsWith(String(gestrichen)), `${tag}: Zähler „${zaehler}“`);
  const durchgestrichen = await page.$eval('.zk[aria-checked="true"] .text', el => getComputedStyle(el).textDecorationLine);
  pruefe(durchgestrichen.includes("line-through"), `${tag}: Durchstreichung sichtbar`);
  const label = await page.$eval('.zk[aria-checked="true"] .gest-label', el => getComputedStyle(el).display);
  pruefe(label !== "none", `${tag}: Text „gestrichen“ sichtbar (nicht nur Farbe)`);
  await page.screenshot({ path: `${ORDNER}/${tag}-2-gestrichen.png`, fullPage: true });

  await page.click("#aufloesen");
  const hyperNr = art === "maus" ? 6 : 5;
  pruefe(await page.$eval(`#zeile-${hyperNr}`, el => el.classList.contains("hyper")), `${tag}: Zeile ${hyperNr} als Hyperkorrektur hervorgehoben`);
  pruefe((await page.$$(".zeile.hyper")).length === 1, `${tag}: genau eine Hyperkorrektur`);
  pruefe((await page.textContent("#bilanz")).includes(`Zeile ${hyperNr}`), `${tag}: Bilanz nennt Zeile ${hyperNr}`);
  pruefe((await page.$$(".aufl:not([hidden])")).length === 10, `${tag}: zehn Begründungen sichtbar`);
  pruefe(await page.getAttribute("#bilanz", "aria-live") === "polite", `${tag}: Auflösung in aria-live`);
  // Nach der Auflösung keine Änderung mehr
  const vorher = await page.getAttribute("#zeile-3 .zk", "aria-checked");
  await page.click("#zeile-3 .zk", { force: true });
  await page.focus("#zeile-3 .zk"); await page.keyboard.press(" ");
  pruefe(await page.getAttribute("#zeile-3 .zk", "aria-checked") === vorher, `${tag}: Streichungen nach Auflösung gesperrt`);
  await page.screenshot({ path: `${ORDNER}/${tag}-3-aufloesung.png`, fullPage: true });

  await page.click("#weiter3");
  pruefe(await page.isVisible("#p3"), `${tag}: Vorher – nachher sichtbar`);
  const zahlen = await page.textContent("#zahlen");
  pruefe(/Alt: \d+ Wörter/.test(zahlen) && /Neu: \d+ Wörter/.test(zahlen), `${tag}: Wortzahlen „${zahlen.replace(/\s+/g, " ")}“`);
  pruefe((await page.$$("#alt sup.zn")).length >= 8, `${tag}: Zeilennummern im alten Prompt markiert`);
  await page.screenshot({ path: `${ORDNER}/${tag}-4-vorher-nachher.png`, fullPage: true });
  await page.click("#weiter4");
  pruefe(await page.isVisible("#p4"), `${tag}: Transfer und Making-of sichtbar`);
  await page.screenshot({ path: `${ORDNER}/${tag}-5-transfer.png`, fullPage: true });

  const breitInhalt = await page.evaluate(() => document.documentElement.scrollWidth);
  pruefe(breitInhalt <= breite, `${tag}: kein horizontales Scrollen (${breitInhalt} ≤ ${breite})`);

  // axe nach vollständigem Aufklappen
  await page.addScriptTag({ content: axeSrc });
  const axe = await page.evaluate(async () => (await window.axe.run(document, { resultTypes: ["violations"] })).violations
    .map(v => `${v.id} (${v.impact}): ${v.nodes.length}× ${v.nodes[0].target.join(" ")}`));
  pruefe(axe.length === 0, `${tag}: axe ohne Befund ${axe.length ? "→ " + axe.join(" | ") : ""}`);

  await page.click("#nochmal").catch(() => {});
  await page.evaluate(() => window.scrollTo(0, 0));
  pruefe(await page.$$eval('.zk[aria-checked="true"]', els => els.length) === 0 && await page.isHidden("#p2"), `${tag}: „Noch einmal“ setzt zurück`);

  pruefe(konsole.length === 0, `${tag}: keine Konsolenfehler ${konsole.join(" | ")}`);
  await page.close();
}

for (const b of [1200, 390]) for (const art of ["maus", "tastatur"]) await durchlauf(b, art);

// Kapitelseite: iframe-Höhe und Fehler
for (const b of [1200, 390]) {
  const page = await browser.newPage({ viewport: { width: b, height: 900 } });
  const konsole = [];
  page.on("console", m => { if (m.type() === "error") konsole.push(m.text()); });
  page.on("pageerror", e => konsole.push(String(e)));
  await page.goto(`${BASIS}/kapitel02.html#sec-streichtest`);
  const f = page.locator("#streich-test");
  await f.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  const h = await f.evaluate(el => el.getBoundingClientRect().height);
  const inhalt = await page.frameLocator("#streich-test").locator("html").evaluate(el => el.scrollHeight);
  pruefe(Math.abs(h - inhalt) <= 4, `Kapitel ${b}px: iframe-Höhe ${Math.round(h)} passt zum Inhalt ${inhalt}`);
  await page.screenshot({ path: `${ORDNER}/kapitel-${b}.png` });
  const k = konsole.filter(t => /streich/i.test(t));
  pruefe(k.length === 0, `Kapitel ${b}px: keine Konsolenfehler aus dem Element ${k.join(" | ")}`);
  if (b === 1200) {
    await page.addScriptTag({ content: axeSrc });
    const axe = await page.evaluate(async () => (await window.axe.run("#streich-test", { resultTypes: ["violations"] })).violations
      .map(v => `${v.id} (${v.impact})`));
    pruefe(axe.length === 0, `Kapitel: axe am iframe ohne Befund ${axe.join(" | ")}`);
  }
  await page.close();
}

await browser.close();
console.log(fehler.length ? `\n${fehler.length} Befund(e).` : "\nAlle Prüfungen bestanden.");
process.exit(fehler.length ? 1 : 0);
