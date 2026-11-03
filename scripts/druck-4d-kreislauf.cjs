// Druckzwilling und QR-Codes für den 4D-Kreislauf (Kapitel 2, @fig-4d-kreislauf) und die Übung in Anhang A.
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-4d-kreislauf.cjs (braucht qrcode).
// Schreibt images/druck/4d-kreislauf.svg (Kreislauf mit eingesetztem QR-Code),
// images/qr/qr-4d-kreislauf.png und images/qr/qr-ai-fluency-uebung.png.
// Geometrie und Beschriftung entsprechen interactions/4d-kreislauf.html; bei Änderungen beide anpassen.
const QR = require('qrcode');
const fs = require('fs');
const path = require('path'); const REPO = path.resolve(__dirname, '..') + '/';
const BASIS = 'https://th-koln-bartnik.github.io/genai4teaching/';
const URL = BASIS + 'interactions/4d-kreislauf.html';
const URL_UEBUNG = BASIS + 'kapitel05-4d-phasen.html#sec-ai-fluency-uebung';

const TINTE = '#1b1b1b', GRAU = '#767676', ZURUECK = '#b5b5b5', FLAECHE = '#f2f2f2';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const t = (x, y, s, a = '') => `<text x="${x}" y="${y}" ${a}>${esc(s)}</text>`;

const qrOpt = { errorCorrectionLevel: 'M', margin: 2, width: 600, color: { dark: '#000000', light: '#ffffff' } };

(async () => {
  await QR.toFile(REPO + 'images/qr/qr-4d-kreislauf.png', URL, qrOpt);
  await QR.toFile(REPO + 'images/qr/qr-ai-fluency-uebung.png', URL_UEBUNG, qrOpt);
  const qrSvg = await QR.toString(URL, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#000000', light: '#ffffff' } });
  const vb = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/)[1];
  const qrPfade = qrSvg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

  const W = 900, H = 500;
  const o = [];
  o.push(`<defs><marker id="sp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${GRAU}"/></marker></defs>`);
  const pf = d => `<path d="${d}" fill="none" stroke="${GRAU}" stroke-width="2.5" marker-end="url(#sp)"/>`;
  // äußere Schleife (Delegation ↔ Diligence), zweiseitig
  o.push(pf('M232,62 C40,110 40,340 232,388'));
  o.push(pf('M408,388 C600,340 600,110 408,62'));
  o.push(t(8, 112, 'strategisch:', `fill="${GRAU}" font-size="15" font-weight="bold"`));
  o.push(t(8, 131, 'einmal je', `fill="${GRAU}" font-size="15"`));
  o.push(t(8, 150, 'Vorhaben', `fill="${GRAU}" font-size="15"`));
  // innere Schleife (Description ↔ Discernment)
  o.push(`<circle cx="320" cy="225" r="116" fill="none" stroke="${ZURUECK}" stroke-width="2"/>`);
  o.push(pf('M245,137 A116,116 0 0 1 395,137'));
  o.push(pf('M395,313 A116,116 0 0 1 245,313'));
  o.push(t(320, 160, 'erzeugen lassen', `fill="${GRAU}" font-size="14" text-anchor="middle"`));
  o.push(t(320, 298, 'nachbessern', `fill="${GRAU}" font-size="14" text-anchor="middle"`));
  o.push(t(320, 219, 'operativ:', `fill="${GRAU}" font-size="14" text-anchor="middle" font-weight="bold"`));
  o.push(t(320, 237, 'viele Runden', `fill="${GRAU}" font-size="14" text-anchor="middle"`));
  // Knoten
  const knoten = (x, y, w, name, frage) => {
    o.push(`<rect x="${x}" y="${y}" width="${w}" height="62" rx="10" fill="#fff" stroke="${TINTE}" stroke-width="2"/>`);
    o.push(t(x + w / 2, y + 27, name, `text-anchor="middle" font-size="19" font-weight="bold"`));
    o.push(t(x + w / 2, y + 48, frage, `text-anchor="middle" font-size="14" fill="${GRAU}"`));
  };
  knoten(232, 22, 176, 'Delegation', 'Wer macht was?');
  knoten(232, 366, 176, 'Diligence', 'Wer verantwortet es?');
  knoten(132, 194, 136, 'Description', 'Was will ich?');
  knoten(372, 194, 136, 'Discernment', 'Taugt es?');
  // Zuordnung der Rollen (rechte Spalte, oben)
  const xR = 640;
  o.push(t(xR, 40, 'Modalität je Rolle', `font-size="15" font-weight="bold" fill="${GRAU}"`));
  [['Hiwi', 'Automation'], ['Copilot', 'Augmentation'], ['Tutor', 'Agency'], ['Simulator', 'Agency']].forEach(([r, m], i) => {
    const y = 58 + i * 30;
    o.push(`<rect x="${xR}" y="${y}" width="240" height="26" fill="${i % 2 ? '#fff' : FLAECHE}"/>`);
    o.push(t(xR + 8, y + 18, r, 'font-size="15"'));
    o.push(t(xR + 232, y + 18, m, 'font-size="15" text-anchor="end"'));
  });
  // QR rechts unten
  const q = 200, xq = W - q - 20, yq = H - q - 20;
  o.push(`<svg x="${xq}" y="${yq}" width="${q}" height="${q}" viewBox="0 0 ${vb} ${vb}" shape-rendering="crispEdges">${qrPfade}</svg>`);
  o.push(t(xq + q / 2, yq - 10, 'Fassung zum Anklicken', `font-size="14" fill="${GRAU}" text-anchor="middle"`));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Helvetica, Arial, sans-serif" fill="${TINTE}">\n<rect width="${W}" height="${H}" fill="#fff"/>\n${o.join('\n')}\n</svg>\n`;
  fs.writeFileSync(REPO + 'images/druck/4d-kreislauf.svg', svg);
  console.log('geschrieben: images/druck/4d-kreislauf.svg (' + W + '×' + H + '), images/qr/qr-4d-kreislauf.png, images/qr/qr-ai-fluency-uebung.png');
})();
