// Bilder zur Modellwahl in Kapitel 2.3: zwei statische Abbildungen (SVG -> PNG) und der Druckzwilling des Klick-Baums mit QR-Code.
// Aufruf aus dem Repo-Wurzelordner: python3 scripts/modellwahl-grafiken.py && node scripts/druck-modellwahl.cjs (braucht playwright und qrcode),
// danach python3 scripts/qr-in-abbildung.py, das den QR-Code rechts unten in den Druckzwilling setzt.
const { chromium } = require('playwright');
const QR = require('qrcode');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const URL = 'https://th-koln-bartnik.github.io/genai4teaching/interactions/modellwahl-baum.html';
(async () => {
  const b = await chromium.launch();
  for (const n of ['modellwahl-stufen', 'modellwahl-klassen']) {
    const p = await b.newPage({ viewport: { width: 1000, height: 700 }, deviceScaleFactor: 2.5 });
    await p.goto('file://' + REPO + 'images/modellwahl/' + n + '.svg');
    await p.locator('svg').screenshot({ path: REPO + 'images/modellwahl/' + n + '.png' });
    await p.close();
  }
  const p = await b.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2.5 });
  await p.goto('file://' + REPO + 'interactions/modellwahl-baum.html#druck');
  await p.waitForTimeout(500);
  await p.locator('#buehne').screenshot({ path: REPO + 'images/druck/modellwahl-baum.png' });
  await b.close();
  await QR.toFile(REPO + 'images/qr/qr-modellwahl-baum.png', URL, { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } });
})();
