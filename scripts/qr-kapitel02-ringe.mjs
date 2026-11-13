// QR-Codes für die Drucksätze der Online-Abschnitte in Kap. 2 (Reduktion nach drei Ringen, 13.11.2026).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Jeder Code führt direkt zum vollständigen Abschnitt im Online-Kapitel.
// Ausführen im Repo-Wurzelordner: node scripts/qr-kapitel02-ringe.mjs
import QRCode from "qrcode";

const BASIS = "https://th-koln-bartnik.github.io/genai4teaching/kapitel02-grundlagen.html";
const CODES = {
  "qr-informiert": `${BASIS}#sec-informiert`,
  "qr-blick-ins-modell": `${BASIS}#sec-blick-ins-modell`,
};
for (const [name, url] of Object.entries(CODES)) {
  await QRCode.toFile(`images/qr/${name}.png`, url, {
    errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
  });
  const q = QRCode.create(url, { errorCorrectionLevel: "M" });
  console.log(`${name}: ${q.modules.size}×${q.modules.size} Module → ${url}`);
}
