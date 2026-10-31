// Druckzwillinge und QR-Codes für die fünf Animationen nach Frontier-Lab-Darstellungen (Kapitel 2.1).
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-frontier-animationen.cjs (braucht playwright und qrcode),
// danach python3 scripts/qr-in-abbildung.py, das den QR-Code rechts unten in die Abbildung setzt.
const { chromium } = require('playwright');
const QR = require('qrcode');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const BASIS = 'https://th-koln-bartnik.github.io/genai4teaching/interactions/';
const NAMEN = ['drei-labs-ein-bauplan', 'zwischenschritt-texas', 'skills-handbuch', 'sitzung-und-gedaechtnis', 'autonomiestufen'];
(async () => {
  const b = await chromium.launch();
  for (const n of NAMEN) {
    const p = await b.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2.5 });
    await p.goto('file://' + REPO + 'interactions/' + n + '.html#druck');
    await p.waitForTimeout(500);
    await p.locator('#buehne').screenshot({ path: REPO + 'images/druck/' + n + '.png' });
    await p.close();
    await QR.toFile(REPO + 'images/qr/qr-' + n + '.png', BASIS + n + '.html', { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } });
  }
  await b.close();
})();
