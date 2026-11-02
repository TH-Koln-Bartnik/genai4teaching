// QR-Code für den Druckkasten „Der Streich-Test“ (Kap. 2.4.1).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Er führt direkt an die Stelle im Online-Kapitel, an der der Test steht.
// Ausführen im Repo-Wurzelordner: node scripts/qr-streich-test.mjs
import QRCode from "qrcode";

const URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel02.html#sec-streichtest";
await QRCode.toFile("images/qr/qr-streich-test.png", URL, {
  errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
});
const q = QRCode.create(URL, { errorCorrectionLevel: "M" });
console.log(`qr-streich-test: ${q.modules.size}×${q.modules.size} Module → ${URL}`);
