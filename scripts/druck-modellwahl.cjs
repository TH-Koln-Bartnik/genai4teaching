// Druckzwilling und QR-Code für den Klick-Baum „Welches Modell für welche Aufgabe?“ (Kapitel 2, @fig-modellwahl-baum).
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-modellwahl.cjs (braucht qrcode).
// Schreibt images/druck/modellwahl-baum.svg (Baum mit eingesetztem QR-Code) und images/qr/qr-modellwahl-baum.png.
// Inhalte der Zeilen stehen gleichlautend in interactions/modellwahl-baum.html; bei Änderungen beide anpassen.
const QR = require('qrcode');
const fs = require('fs');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const URL = 'https://th-koln-bartnik.github.io/genai4teaching/interactions/modellwahl-baum.html';

const TINTE = '#1b1b1b', GRAU = '#767676', ZURUECK = '#b5b5b5', HELL = '#e4e4e4', FLAECHE = '#f2f2f2', AKZENT = '#b45309';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const t = (x, y, s, a = '') => `<text x="${x}" y="${y}" ${a}>${esc(s)}</text>`;

const ZEILEN = [
  ['… eine Frage klären, einen Text überarbeiten', 'kleines Frontier-Modell', '0 €'],
  ['… ein Bild erstellen (Diagramme besser als Code)', 'Frontier-Modell mit Bildgenerator', '0 €'],
  ['… eine Lerneinheit, Folien, Aufgaben erstellen', 'großes Frontier-Modell, hohe Denkstufe', '20 €'],
  ['… regelmäßig recherchieren', 'großes Frontier-Modell mit Recherche-Agent', '20 €'],
  ['… ein Werkzeug bauen (Simulation, Lernspiel)', 'großes Frontier-Modell im Agentenmodus', '20 €'],
  ['… einen Tutor für Studierende betreiben', 'API (nach Verbrauch) oder Hochschule', 'kein Abo'],
];

(async () => {
  await QR.toFile(REPO + 'images/qr/qr-modellwahl-baum.png', URL, { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } });
  const qrSvg = await QR.toString(URL, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#000000', light: '#ffffff' } });
  const vb = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/)[1];
  const qrPfade = qrSvg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

  const W = 900, x0 = 20, xT = 46, xK = 455, xS = 860;
  let y = 0; const o = [];
  // Frage 1
  o.push(`<rect x="${x0}" y="10" width="560" height="84" rx="8" fill="#fff" stroke="${TINTE}" stroke-width="2"/>`);
  o.push(t(xT - 8, 40, '1  Daten', `font-weight="bold" fill="${GRAU}" font-size="15"`));
  o.push(t(xT - 8, 64, 'Personenbezogene Daten, Prüfungsleistungen'));
  o.push(t(xT - 8, 86, 'oder unveröffentlichte Forschung?'));
  o.push(`<line x1="580" y1="52" x2="612" y2="52" stroke="${TINTE}" stroke-width="2"/>`);
  o.push(t(588, 44, 'ja', `fill="${GRAU}" font-size="15"`));
  o.push(`<rect x="612" y="10" width="268" height="84" rx="8" fill="${FLAECHE}" stroke="${TINTE}" stroke-width="2"/>`);
  o.push(t(628, 38, 'Hochschulzugang', 'font-weight="bold"'));
  o.push(t(628, 62, 'oder kleines offenes Modell'));
  o.push(t(628, 84, 'auf dem eigenen Rechner'));
  o.push(`<line x1="${xT}" y1="94" x2="${xT}" y2="128" stroke="${TINTE}" stroke-width="2"/>`);
  o.push(t(xT + 10, 116, 'nein', `fill="${GRAU}" font-size="15"`));
  // Frage 2
  o.push(t(x0, 152, '2  Aufgabe: Ich will …', `font-weight="bold" fill="${GRAU}" font-size="15"`));
  o.push(t(xK, 152, 'Modellklasse', `fill="${GRAU}" font-size="15"`));
  o.push(t(xS, 152, 'Stufe', `fill="${GRAU}" font-size="15" text-anchor="end"`));
  y = 166;
  ZEILEN.forEach(([a, k, s], i) => {
    o.push(`<rect x="${x0}" y="${y}" width="${W - 2 * x0}" height="44" fill="${i % 2 ? '#fff' : FLAECHE}"/>`);
    o.push(t(xT - 18, y + 28, a));
    o.push(t(xK, y + 28, k));
    o.push(t(xS, y + 28, s, `text-anchor="end" font-weight="bold"`));
    y += 44;
  });
  o.push(`<line x1="${x0}" y1="${y}" x2="${W - x0}" y2="${y}" stroke="${ZURUECK}" stroke-width="1.5"/>`);
  // Frage 3
  y += 36;
  o.push(t(x0, y, '3  Häufigkeit', `font-weight="bold" fill="${GRAU}" font-size="15"`));
  const yH = y - 22;
  o.push(t(x0 + 130, y, 'Täglich, auch mit langen Agentenläufen?'));
  o.push(t(x0 + 130, y + 24, 'Dann eine Stufe höher: 0 → 20 €, 20 → 100 €.'));
  // Prüfregel
  y += 50;
  const yP = y;
  o.push(`<rect x="${x0}" y="${yP}" width="640" height="96" fill="${FLAECHE}"/>`);
  o.push(`<rect x="${x0}" y="${yP}" width="6" height="96" fill="${AKZENT}"/>`);
  o.push(t(x0 + 22, yP + 30, 'Prüfregel', `font-weight="bold" fill="${AKZENT}"`));
  o.push(t(x0 + 22, yP + 56, 'Muss das Ergebnis stimmen und können Sie es nicht selbst prüfen?'));
  o.push(t(x0 + 22, yP + 80, 'Größtes Modell, höchste Denkstufe, und ein Mensch prüft.'));
  // QR
  const q = 160, qx = W - x0 - q, qy = yH + 4;
  o.push(`<svg x="${qx}" y="${qy}" width="${q}" height="${q}" viewBox="0 0 ${vb} ${vb}" shape-rendering="crispEdges">${qrPfade}</svg>`);
  const H = Math.max(yP + 110, qy + q + 14);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Erzeugt von scripts/druck-modellwahl.cjs; nicht von Hand bearbeiten. Online-Fassung: ${URL} -->
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="TeX Gyre Heros, Helvetica, Arial, sans-serif" role="img" aria-label="Entscheidungsbaum: Welches Modell für welche Aufgabe?">
<rect width="${W}" height="${H}" fill="#ffffff"/>
<g fill="${TINTE}" font-size="17">
${o.join('\n')}
</g>
</svg>
`;
  fs.writeFileSync(REPO + 'images/druck/modellwahl-baum.svg', svg);
  console.log('geschrieben: images/druck/modellwahl-baum.svg (' + W + '×' + H + '), images/qr/qr-modellwahl-baum.png');
})();
