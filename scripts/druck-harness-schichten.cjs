// Druckzwilling und QR-Code für die Animation „Seit 2022 ist vor allem die Schicht um das Modell gewachsen“ (Kapitel 2).
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-harness-schichten.cjs (braucht playwright und qrcode),
// danach python3 scripts/qr-in-abbildung.py, das den QR-Code rechts unten in die Abbildung setzt.
const { chromium } = require('playwright');
const QR = require('qrcode');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const URL = 'https://th-koln-bartnik.github.io/genai4teaching/interactions/harness-schichten.html';
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2.5 });
  await p.goto('file://' + REPO + 'interactions/harness-schichten.html#druck');
  await p.waitForTimeout(500);
  await p.locator('#buehne').screenshot({ path: REPO + 'images/druck/harness-schichten.png' });
  await b.close();
  await QR.toFile(REPO + 'images/qr/qr-harness-schichten.png', URL, { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } });
})();
