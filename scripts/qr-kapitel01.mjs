// QR-Code der Druckabbildung in Kapitel 1: Galerie „Was 2026 möglich ist“.
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Er zeigt auf die Galerie im Buch (interactions/), die ohne Kapitelseite läuft.
// Ausführen im Repo-Wurzelordner: node scripts/qr-kapitel01.mjs
import QRCode from "qrcode";

const URL = "https://th-koln-bartnik.github.io/genai4teaching/interactions/galerie-kapitel01.html";
await QRCode.toFile("images/qr/qr-galerie-kapitel01.png", URL, {
  errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
});
const q = QRCode.create(URL, { errorCorrectionLevel: "M" });
console.log(`qr-galerie-kapitel01: ${q.modules.size}×${q.modules.size} Module → ${URL}`);
