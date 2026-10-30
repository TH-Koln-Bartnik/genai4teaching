// Druckzwilling und QR-Code für die Übersichtstafel „Vier Stufen des Agenten-Gedächtnisses“ (Kapitel 2).
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-agenten-gedaechtnis.cjs (braucht playwright und qrcode),
// danach python3 scripts/qr-in-abbildung.py, das den QR-Code rechts unten in die Abbildung setzt.
const { chromium } = require('playwright');
const QR = require('qrcode');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const URL = 'https://th-koln-bartnik.github.io/genai4teaching/interactions/agenten-gedaechtnis.html';
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1.6 });
  await p.goto('file://' + REPO + 'interactions/agenten-gedaechtnis.html#druck');
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(1500);
  await p.locator('#tafel').screenshot({ path: REPO + 'images/druck/agenten-gedaechtnis.png' });
  await b.close();
  await QR.toFile(REPO + 'images/qr/qr-agenten-gedaechtnis.png', URL, { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } });
})();
