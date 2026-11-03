// Playwright-Prüfung S2 (Hörstück Kap. 4.1): Kapitelseite + iframe, 1200 und 390 px, Klick- und Tastaturdurchlauf, axe.
// Vorher: quarto render kapitel04.qmd --to html; node scripts/testserver-range.cjs docs &   (Server mit Range-Anfragen,
// sonst springt das Audio nicht). axe-core liegt nicht im Repo: Pfad zu axe.min.js über AXE (npm install axe-core in einem Werkzeugordner).
// Aufruf: AXE=/pfad/axe.min.js node scripts/pruefe-podcast-s2.cjs [ausgabeordner]
const { chromium } = require('playwright');
const fs = require('fs');
const AXE = process.env.AXE && fs.existsSync(process.env.AXE) ? fs.readFileSync(process.env.AXE, 'utf8') : null;
const BASIS = 'http://127.0.0.1:8765/';
const OUT = (process.argv[2] || '/home/claude/screens-s2') + '/';
fs.mkdirSync(OUT, { recursive: true });
const befunde = [];
const log = (...a) => { const s = a.join(' '); befunde.push(s); console.log(s); };

async function lauf(browser, breite, modus) {
  const ctx = await browser.newContext({ viewport: { width: breite, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await ctx.newPage();
  const fehler = [];
  page.on('console', m => { if (m.type() === 'error') fehler.push(m.text()); });
  page.on('pageerror', e => fehler.push(String(e)));
  await page.goto(BASIS + 'kapitel04.html#sec-podcast-interviews', { waitUntil: 'networkidle' });
  const rahmen = page.locator('#podcast-forschende-ki');
  await rahmen.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  const f = page.frameLocator('#podcast-forschende-ki');
  const frame = page.frame({ url: /podcast-forschende-ki/ });
  const tag = `${breite}-${modus}`;
  const schuss = async (n) => { await rahmen.scrollIntoViewIfNeeded(); await page.waitForTimeout(300); await rahmen.screenshot({ path: `${OUT}${tag}-${n}.png` }); };
  const hscroll = async () => frame.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

  // Phase 1
  if (modus === 'klick') {
    await f.getByLabel('Datenanalyse und Code').check();
    await f.locator('#regler').fill('40');
  } else {
    await frame.focus('input[name="vorhersage"]');
    await page.keyboard.press('ArrowRight'); // zweite Option
    await page.keyboard.press('Tab'); // Regler
    for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowLeft'); // 30 %
  }
  await schuss('1-vorhersage');
  log(tag, 'Phase 1 horizontales Scrollen px:', await hscroll());
  const weiter = async (txt) => {
    if (modus === 'klick') await f.getByRole('button', { name: txt }).click();
    else { await f.getByRole('button', { name: txt }).focus(); await page.keyboard.press('Enter'); }
    await page.waitForTimeout(300);
  };
  await weiter('Weiter zum Hören');
  const fokus = await frame.evaluate(() => document.activeElement && document.activeElement.id);
  log(tag, 'Fokus nach Weiter:', fokus);

  // Phase 2: Ton und Hervorhebung
  const dauer = await frame.evaluate(() => new Promise(r => { const a = document.querySelector('audio'); if (a.readyState >= 1) r(a.duration); else a.addEventListener('loadedmetadata', () => r(a.duration)); setTimeout(() => r(NaN), 5000); }));
  log(tag, 'Audiodauer (Browser):', dauer && dauer.toFixed(1));
  const daten = await frame.evaluate(() => JSON.parse(document.getElementById('podcastdaten').textContent));
  for (const idx of [2, 16, 30]) {
    const z = daten.zeilen[idx];
    const t = (z.start + z.ende) / 2;
    const aktiv = await frame.evaluate(async (t) => {
      const a = document.querySelector('audio'); a.muted = true;
      a.currentTime = t; await a.play().catch(() => {}); await new Promise(r => setTimeout(r, 700)); a.pause();
      const k = document.querySelector('.zeile.aktiv .was'); return k ? k.textContent : null;
    }, t);
    log(tag, `Hervorhebung bei ${t.toFixed(1)} s (Zeile ${idx + 1}):`, aktiv === z.text ? 'passt' : 'FALSCH: ' + (aktiv || '').slice(0, 40));
  }
  // Klick auf Transkriptzeile springt
  await f.locator('.zeile').nth(10).click();
  await page.waitForTimeout(500);
  const pos = await frame.evaluate(() => { const a = document.querySelector('audio'); a.pause(); return a.currentTime; });
  log(tag, 'Klick Zeile 11 -> Position', pos.toFixed(1), 'Soll ab', daten.zeilen[10].start);
  await schuss('2-hoeren');
  log(tag, 'Phase 2 horizontales Scrollen px:', await hscroll());
  await weiter('Weiter zum Prüfen');

  // Phase 3: drei Urteile
  const wahl = ['ueberzogen', 'belegt', 'belegt'];
  for (let i = 0; i < 3; i++) {
    const box = f.locator('article.aussage').nth(i);
    if (modus === 'klick') {
      await box.locator(`input[value="${wahl[i]}"]`).check();
      await box.locator('input[value="2"]').check();
      await box.getByRole('button', { name: 'Urteil abgeben' }).click();
    } else {
      await box.locator(`input[value="${wahl[i]}"]`).focus(); await page.keyboard.press('Space');
      await box.locator('input[value="2"]').focus(); await page.keyboard.press('Space');
      await box.getByRole('button', { name: 'Urteil abgeben' }).focus(); await page.keyboard.press('Enter');
    }
    await page.waitForTimeout(150);
    const txt = await box.locator('.aufloesung').innerText().catch(() => '');
    log(tag, `Aussage ${i + 1} aufgelöst:`, txt ? txt.split('\n')[0] : 'NEIN');
  }
  await schuss('3-pruefen');
  log(tag, 'Phase 3 horizontales Scrollen px:', await hscroll());
  await weiter('Weiter zur Bilanz');
  const bilanz = await f.locator('section:not([hidden])').innerText();
  log(tag, 'Bilanz:', bilanz.split('\n').filter(x => /Bei \d|Sie schätzten/.test(x)).join(' | '));
  await schuss('4-bilanz');
  log(tag, 'Phase 4 horizontales Scrollen px:', await hscroll());
  await weiter('Weiter: Für Ihre Lehre');
  await f.getByRole('button', { name: 'Vorlage kopieren' }).click();
  await page.waitForTimeout(200);
  log(tag, 'Kopier-Status:', await f.locator('.status').innerText());
  const ab = await page.evaluate(() => navigator.clipboard.readText().catch(() => '(nicht lesbar)'));
  log(tag, 'Zwischenablage beginnt mit:', ab.slice(0, 40));
  await f.locator('summary').click();
  await schuss('5-transfer');
  log(tag, 'Phase 5 horizontales Scrollen px:', await hscroll());
  log(tag, 'iframe-Höhe:', await rahmen.evaluate(e => e.style.height || e.getAttribute('height')));

  // axe nur einmal je Breite (Klickdurchlauf): Element im iframe und Kapitelseite
  if (modus === 'klick' && AXE) {
    await frame.addScriptTag({ content: AXE });
    const r = await frame.evaluate(async () => (await axe.run(document, { resultTypes: ['violations'] })).violations.map(v => `${v.id} (${v.impact}, ${v.nodes.length}x): ${v.nodes[0].target.join(' ')}`));
    log(tag, 'axe Element:', r.length ? r.join(' ; ') : 'keine Verstöße');
    await page.addScriptTag({ content: AXE });
    const s = await page.evaluate(async () => (await axe.run(document.querySelector('#sec-podcast-interviews'), { resultTypes: ['violations'] })).violations.map(v => `${v.id} (${v.impact}, ${v.nodes.length}x)`));
    log(tag, 'axe Kapitelabschnitt:', s.length ? s.join(' ; ') : 'keine Verstöße');
  }
  log(tag, 'Konsolenfehler:', fehler.length ? fehler.join(' | ') : 'keine');
  await ctx.close();
}

(async () => {
  const browser = await chromium.launch();
  for (const b of [1200, 390]) for (const m of ['klick', 'tastatur']) await lauf(browser, b, m);
  // Dunkelmodus-Stichprobe
  const ctx = await browser.newContext({ viewport: { width: 390, height: 900 }, colorScheme: 'dark' });
  const p = await ctx.newPage();
  await p.goto(BASIS + 'interactions/podcast-forschende-ki.html');
  await p.screenshot({ path: OUT + '390-dunkel-1.png', fullPage: true });
  await browser.close();
  fs.writeFileSync(OUT + 'befunde.txt', befunde.join('\n') + '\n');
})();
