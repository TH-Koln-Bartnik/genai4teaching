// QR-Code für den Druckkasten „Mensch oder KI?“ (Kap. 5, Detektor-Duell).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Er führt direkt an die Stelle im Online-Kapitel, an der das Spiel steht.
// Ausführen im Repo-Wurzelordner: node scripts/qr-detektor-duell.mjs
import QRCode from "qrcode";

const URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel05-4d-phasen.html#sec-detektor-duell";
await QRCode.toFile("images/qr/qr-detektor-duell.png", URL, {
  errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
});
const q = QRCode.create(URL, { errorCorrectionLevel: "M" });
console.log(`qr-detektor-duell: ${q.modules.size}×${q.modules.size} Module → ${URL}`);
