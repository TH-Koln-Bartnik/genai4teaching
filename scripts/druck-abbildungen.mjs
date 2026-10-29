// Druckzwillinge der interaktiven Elemente (Konzept „Simulationen mit Observable JS
// und Quarto Live“, Abschnitt 8).
//
// Laiensicht: Das gedruckte Buch kann keine Regler zeigen. Dieses Skript ruft
// dieselben Modelldateien mit denselben Startwerten auf wie das Online-Widget und
// zeichnet die Szenarien als Vektorgrafik (SVG, bleibt in jeder Vergrößerung scharf).
// Dazu erzeugt es die QR-Codes, die im Druck auf die Online-Fassung zeigen.
//
// Ausführen im Repo-Wurzelordner (einmalig vorher: npm install):
//   npm run druck
// Ergebnis:
//   images/druck/littles-law-szenarien.svg
//   images/qr/qr-littles-law.png

import { writeFileSync, mkdirSync } from "node:fs";
import { JSDOM } from "jsdom";
import * as Plot from "@observablehq/plot";
import QRCode from "qrcode";
import { simulate, SZENARIEN } from "../interactions/models/littles-law.js";

const BASIS = "https://th-koln-bartnik.github.io/genai4teaching/";
const { document } = new JSDOM("").window;
const SCHRIFT = "TeX Gyre Heros, Helvetica, Arial, sans-serif";
const de = (x, d = 1) => x.toLocaleString("de-DE", { maximumFractionDigits: d, minimumFractionDigits: d });
// Vorzeichen mit echtem Minuszeichen; Werte, die gerundet null ergeben, ohne Vorzeichen.
const prozent = a => {
  const r = Math.round(1000 * a) / 10;
  return r === 0 ? "0,0 %" : `${r > 0 ? "+" : "−"}${de(Math.abs(r))} %`;
};
// Maße: Die Abbildung wird im Satzspiegel (128 mm) auf volle Breite gesetzt. Bei 450 px
// Breite entspricht 1 px etwa 0,28 mm; 9 px Schrift ergeben rund 7 pt im Druck.

function panel(sz, breite, hoehe) {
  const fenster = sz.fensterMin / 60;
  const res = simulate({ ...sz, fenster, seed: sz.seed, punkte: 240 });
  const einheit = sz.fensterMin >= 120 ? "h" : "min";
  const f = einheit === "h" ? 1 : 60;
  const L = res.verlauf.map(d => ({ t: d.t * f, y: d.L }));
  const G = res.verlauf.filter(d => d.lambdaW !== null).map(d => ({ t: d.t * f, y: d.lambdaW }));
  const a = res.ende.abweichung;
  const svg = Plot.plot({
    document, width: breite, height: hoehe,
    marginLeft: 28, marginRight: 8, marginTop: 54, marginBottom: 30,
    style: { fontFamily: SCHRIFT, fontSize: "9px", background: "white", color: "black" },
    x: { label: `Fensterlänge (${einheit})`, labelAnchor: "center", labelArrow: "none", ticks: 4, domain: [0, fenster * f] },
    y: { label: null, grid: true, nice: true, ticks: 4, tickFormat: d => de(d) },
    marks: [
      Plot.ruleY([0]),
      Plot.line(L, { x: "t", y: "y", stroke: "black", strokeWidth: 1.4 }),
      Plot.line(G, { x: "t", y: "y", stroke: "#555", strokeWidth: 1.4, strokeDasharray: "4 3" }),
      Plot.text([sz.name.replace(" in der Anmeldewoche", "").replace(" in die Mensa", "")],
        { frameAnchor: "top-left", dx: -20, dy: -46, fontWeight: "bold", fontSize: 10 }),
      Plot.text([`Auslastung ρ = ${de(res.rho)}\nAbweichung am Ende ${prozent(a)}`],
        { frameAnchor: "top-left", lineAnchor: "top", dx: -20, dy: -33, lineHeight: 1.15 })
    ]
  });
  return { svg: svg.outerHTML, res };
}

function littlesLaw() {
  const B = 148, H = 180, GAP = 3, LEG = 22;
  const teile = SZENARIEN.map(sz => panel(sz, B, H));
  const breite = 3 * B + 2 * GAP;
  let inhalt = teile.map((p, i) =>
    p.svg.replace("<svg", `<svg x="${i * (B + GAP)}" y="0"`)).join("\n");
  // Legende in Graustufen: Linienart statt Farbe.
  const y = H + 12;
  inhalt += `
  <g font-family="${SCHRIFT}" font-size="9" transform="translate(${breite / 2 - 165}, ${y})">
    <line x1="0" x2="24" y1="0" y2="0" stroke="black" stroke-width="1.4"/>
    <text x="30" y="3">gezählter mittlerer Bestand</text>
    <line x1="170" x2="194" y1="0" y2="0" stroke="#555" stroke-width="1.4" stroke-dasharray="4 3"/>
    <text x="200" y="3">Rechnung λ · W aus Beobachtung</text>
  </g>`;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Erzeugt von scripts/druck-abbildungen.mjs aus interactions/models/littles-law.js; nicht von Hand bearbeiten. -->
<svg xmlns="http://www.w3.org/2000/svg" width="${breite}" height="${H + LEG}" viewBox="0 0 ${breite} ${H + LEG}">
<rect width="100%" height="100%" fill="white"/>
${inhalt}
</svg>
`;
  mkdirSync("images/druck", { recursive: true });
  writeFileSync("images/druck/littles-law-szenarien.svg", svg);
  for (const [i, p] of teile.entries()) {
    const e = p.res.ende;
    console.log(`${SZENARIEN[i].id}: L̄ = ${e.L.toFixed(3)}, λ̂Ŵ = ${e.lambdaW?.toFixed(3)}, Abweichung = ${(100 * e.abweichung).toFixed(2)} %`);
  }
}

async function qr(datei, url) {
  mkdirSync("images/qr", { recursive: true });
  await QRCode.toFile(datei, url, { errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" } });
  console.log(`${datei} -> ${url}`);
}

littlesLaw();
await qr("images/qr/qr-littles-law.png", BASIS + "kapitel04.html#sec-widget-littles-law");
