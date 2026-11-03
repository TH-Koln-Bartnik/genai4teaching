// QR-Code der Druckabbildung im Vorwort: Galerie „Vierzehn Praxisbeispiele“.
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Er zeigt auf die Galerie (interactions/), die ohne Buchseite läuft.
// Ausführen im Repo-Wurzelordner: node scripts/qr-vorwort.mjs
import QRCode from "qrcode";

const URL = "https://th-koln-bartnik.github.io/genai4teaching/interactions/galerie-vorwort.html";
await QRCode.toFile("images/qr/qr-galerie-vorwort.png", URL, {
  errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
});
const q = QRCode.create(URL, { errorCorrectionLevel: "M" });
console.log(`qr-galerie-vorwort: ${q.modules.size}×${q.modules.size} Module → ${URL}`);
