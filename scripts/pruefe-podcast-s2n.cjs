// Playwright-Prüfung S2-N (Hörstück aus Gemini Notebook): Element in einem Testrahmen (iframe wie im Buch),
// 1200 und 390 px, Klick- und Tastaturdurchlauf, Hervorhebung, Prüf-Zeitfenster, axe, Dunkelmodus.
// Das Element ist vor G2c nicht in kapitel04.qmd eingebunden; das Skript startet deshalb einen eigenen
// Server (mit Range-Anfragen wie GitHub Pages) und eine Rahmenseite mit Höhenmeldung.
// Aufruf (im Repo-Hauptordner): AXE=/pfad/axe.min.js node scripts/pruefe-podcast-s2n.cjs [ausgabeordner]
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const AXE = process.env.AXE && fs.existsSync(process.env.AXE) ? fs.readFileSync(process.env.AXE, 'utf8') : null;
const WURZEL = path.resolve(__dirname, '..');
const OUT = (process.argv[2] || '/home/claude/screens-s2n') + '/';
fs.mkdirSync(OUT, { recursive: true });
const befunde = [];
const log = (...a) => { const s = a.join(' '); befunde.push(s); console.log(s); };

const RAHMEN = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Testrahmen S2-N</title><style>body{font-family:system-ui;margin:0 auto;max-width:760px;padding:12px}iframe{width:100%;border:0;display:block}</style></head>
<body><main><h1>Testrahmen</h1><p>Spalte wie im Buch.</p>
<iframe id="podcast-forschende-ki-notebook" src="interactions/podcast-forschende-ki-notebook.html" title="Hörstück aus Gemini Notebook mit Prüfauftrag" height="900" loading="lazy"></iframe>
<script>addEventListener('message',e=>{if(e.data&&e.data.typ==='rahmen-hoehe'&&e.data.id==='podcast-forschende-ki-notebook'){document.getElementById(e.data.id).style.height=e.data.h+'px'}});</script>
</main></body></html>`;
const TYP = { '.html': 'text/html; charset=utf-8', '.mp3': 'audio/mpeg', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/rahmen.html') { res.writeHead(200, { 'Content-Type': TYP['.html'] }); return res.end(RAHMEN); }
  const datei = path.join(WURZEL, url);
  if (!datei.startsWith(WURZEL) || !fs.existsSync(datei) || fs.statSync(datei).isDirectory()) { res.writeHead(404); return res.end(); }
  const groesse = fs.statSync(datei).size, typ = TYP[path.extname(datei)] || 'application/octet-stream';
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
  if (m) {
    const a = m[1] ? Number(m[1]) : 0, b = m[2] ? Number(m[2]) : groesse - 1;
    res.writeHead(206, { 'Content-Type': typ, 'Content-Range': `bytes ${a}-${b}/${groesse}`, 'Accept-Ranges': 'bytes', 'Content-Length': b - a + 1 });
    return fs.createReadStream(datei, { start: a, end: b }).pipe(res);
  }
  res.writeHead(200, { 'Content-Type': typ, 'Accept-Ranges': 'bytes', 'Content-Length': groesse });
  fs.createReadStream(datei).pipe(res);
});

async function lauf(browser, basis, breite, modus) {
  const ctx = await browser.newContext({ viewport: { width: breite, height: 900 }, permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await ctx.newPage();
  const fehler = [];
  page.on('console', m => { if (m.type() === 'error') fehler.push(m.text()); });
  page.on('pageerror', e => fehler.push(String(e)));
  await page.goto(basis + 'rahmen.html', { waitUntil: 'networkidle' });
  const rahmen = page.locator('#podcast-forschende-ki-notebook');
  await page.waitForTimeout(800);
  const f = page.frameLocator('#podcast-forschende-ki-notebook');
  const frame = page.frame({ url: /podcast-forschende-ki-notebook/ });
  const tag = `${breite}-${modus}`;
  const schuss = async (n) => { await rahmen.scrollIntoViewIfNeeded(); await page.waitForTimeout(300); await rahmen.screenshot({ path: `${OUT}${tag}-${n}.png` }); };
  const hscroll = async () => frame.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

  if (modus === 'klick') {
    await f.getByLabel('Datenanalyse und Code').check();
    await f.locator('#regler').fill('40');
  } else {
    await frame.focus('input[name="vorhersage"]');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Tab');
    for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowLeft');
  }
  await schuss('1-vorhersage');
  log(tag, 'Phase 1 horizontales Scrollen px:', await hscroll());
  const weiter = async (txt) => {
    if (modus === 'klick') await f.getByRole('button', { name: txt }).click();
    else { await f.getByRole('button', { name: txt }).focus(); await page.keyboard.press('Enter'); }
    await page.waitForTimeout(300);
  };
  await weiter('Weiter zum Hören');
  log(tag, 'Fokus nach Weiter:', await frame.evaluate(() => document.activeElement && document.activeElement.id));

  const dauer = await frame.evaluate(() => new Promise(r => { const a = document.querySelector('audio'); if (a.readyState >= 1) r(a.duration); else a.addEventListener('loadedmetadata', () => r(a.duration)); setTimeout(() => r(NaN), 5000); }));
  log(tag, 'Audiodauer (Browser):', dauer && dauer.toFixed(1));
  const daten = await frame.evaluate(() => JSON.parse(document.getElementById('podcastdaten').textContent));
  const n = daten.zeilen.length;
  for (const idx of [Math.floor(n * 0.1), Math.floor(n * 0.5), Math.floor(n * 0.9)]) {
    const z = daten.zeilen[idx];
    const t = (z.start + z.ende) / 2;
    const aktiv = await frame.evaluate(async (t) => {
      const a = document.querySelector('audio'); a.muted = true;
      a.currentTime = t; await a.play().catch(() => {}); await new Promise(r => setTimeout(r, 700)); a.pause();
      const k = document.querySelector('.zeile.aktiv .was'); return k ? k.textContent : null;
    }, t);
    log(tag, `Hervorhebung bei ${t.toFixed(1)} s (Zeile ${idx + 1}):`, aktiv === z.text ? 'passt' : 'FALSCH: ' + (aktiv || '').slice(0, 40));
  }
  await f.locator('.zeile').nth(10).click();
  await page.waitForTimeout(500);
  const pos = await frame.evaluate(() => { const a = document.querySelector('audio'); a.pause(); return a.currentTime; });
  log(tag, 'Klick Zeile 11 -> Position', pos.toFixed(1), 'Soll ab', daten.zeilen[10].start);
  await schuss('2-hoeren');
  log(tag, 'Phase 2 horizontales Scrollen px:', await hscroll());
  await weiter('Weiter zum Prüfen');

  const wahl = ['ueberzogen', 'belegt', 'nicht_belegt'];
  for (let i = 0; i < 3; i++) {
    const box = f.locator('article.aussage').nth(i);
    if (modus === 'klick' && breite === 1200) {
      // Prüf-Zeitfenster: Knopf spielt die Aussage und hält an ihrem Ende an
      const a = daten.pruefung[i];
      await box.getByRole('button', { name: /Stelle anhören/ }).click();
      const t0 = await frame.evaluate(() => { const x = document.querySelector('audio'); x.muted = true; return x.currentTime; });
      await frame.evaluate((e) => { const x = document.querySelector('audio'); x.currentTime = Math.max(e - 1.0, 0); }, a.ende);
      await page.waitForTimeout(2200);
      const t1 = await frame.evaluate(() => { const x = document.querySelector('audio'); return [x.currentTime, x.paused]; });
      log(tag, `Prüfaussage ${i + 1}: Start ${t0.toFixed(1)} (Soll ${a.start}), angehalten ${t1[1]} bei ${t1[0].toFixed(1)} (Ende ${a.ende})`);
    }
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

  if (modus === 'klick' && AXE) {
    await frame.addScriptTag({ content: AXE });
    const r = await frame.evaluate(async () => (await axe.run(document, { resultTypes: ['violations'] })).violations.map(v => `${v.id} (${v.impact}, ${v.nodes.length}x): ${v.nodes[0].target.join(' ')}`));
    log(tag, 'axe Element:', r.length ? r.join(' ; ') : 'keine Verstöße');
  }
  log(tag, 'Konsolenfehler:', fehler.length ? fehler.join(' | ') : 'keine');
  await ctx.close();
}

server.listen(0, '127.0.0.1', async () => {
  const basis = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  try {
    for (const b of [1200, 390]) for (const m of ['klick', 'tastatur']) await lauf(browser, basis, b, m);
    const ctx = await browser.newContext({ viewport: { width: 390, height: 900 }, colorScheme: 'dark' });
    const p = await ctx.newPage();
    await p.goto(basis + 'interactions/podcast-forschende-ki-notebook.html');
    await p.screenshot({ path: OUT + '390-dunkel-1.png', fullPage: true });
  } finally {
    await browser.close();
    server.close();
    fs.writeFileSync(OUT + 'befunde.txt', befunde.join('\n') + '\n');
  }
});
