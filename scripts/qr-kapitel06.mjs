// QR-Codes der drei Druckabbildungen in Kapitel 6 (Lernsong, Linien-Widget, Kaya-Teaser).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Seit dem 30.10.2026 zeigen die drei Codes auf Kopien im Buch (interactions/),
// nicht mehr auf die Studierendenseite des SSCM-Moduls, die nach dem Semester umgebaut wird.
// Ausführen im Repo-Wurzelordner: node scripts/qr-kapitel06.mjs && python3 scripts/qr-tausch-kapitel06.py
import { writeFileSync } from "node:fs";
import QRCode from "qrcode";

const BASIS = "https://th-koln-bartnik.github.io/genai4teaching/interactions/";
export const ZIELE = {
  "lernsong-forecast": BASIS + "lernsong-forecast.html",
  "widget-linie": BASIS + "line-widget.html",
  "fallstudie-kaya": BASIS + "galerie-animationen.html#kaya-teaser",
};
const matrizen = {};
for (const [name, url] of Object.entries(ZIELE)) {
  await QRCode.toFile(`images/qr/qr-${name}.png`, url, { errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" } });
  const q = QRCode.create(url, { errorCorrectionLevel: "M" });
  const n = q.modules.size;
  matrizen[name] = { url, n, bits: Array.from(q.modules.data) };
}
writeFileSync("scripts/qr-kapitel06.json", JSON.stringify(matrizen));
console.log(Object.entries(matrizen).map(([k, v]) => `${k}: ${v.n}×${v.n} Module → ${v.url}`).join("\n"));
