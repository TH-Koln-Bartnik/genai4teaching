// Druckzwilling und QR-Code für den Semester-Simulator (Kapitel 1).
// Laiensicht: Das gedruckte Buch kann nicht klicken. Dieses Skript öffnet den Simulator unsichtbar im Browser,
// spielt den Standardlauf bis Woche 8 und fotografiert die Bühne; dazu erzeugt es den QR-Code,
// eine gedruckte Internetadresse, die das Smartphone öffnet.
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-semester-simulator.cjs (braucht playwright und qrcode),
// danach python3 scripts/qr-in-abbildung.py, das den QR-Code rechts unten in die Abbildung setzt.
const { chromium } = require('playwright');
const QR = require('qrcode');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const URL = 'https://th-koln-bartnik.github.io/genai4teaching/interactions/semester-simulator.html';
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2.5, colorScheme: 'light' });
  await p.goto('file://' + REPO + 'interactions/semester-simulator.html#druck');
  await p.waitForTimeout(500);
  await p.locator('#buehne').screenshot({ path: REPO + 'images/druck/semester-simulator.png' });
  console.log(await p.evaluate(() => { const s = window.__sim, r = s.simuliere(s.STANDARD.slice(0, 8)), w = r.wochen[7];
    return `Woche 8: ${w.kurz} kürzen ab, ${120 - r.angetreten} ausgestiegen, Hausübung ${Math.round(w.hu)} %`; }));
  await b.close();
  await QR.toFile(REPO + 'images/qr/qr-semester-simulator.png', URL, { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } });
})();
