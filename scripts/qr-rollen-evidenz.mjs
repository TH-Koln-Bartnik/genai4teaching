// QR-Code für den Druckkasten „Warum die Rolle aus dem Arbeitsauftrag verschwindet“ (Kap. 2.4.4).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Er führt direkt zum vollständigen Kasten im Online-Kapitel.
// Ausführen im Repo-Wurzelordner: node scripts/qr-rollen-evidenz.mjs
import QRCode from "qrcode";

const URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel02.html#sec-rollen-evidenz";
await QRCode.toFile("images/qr/qr-rollen-evidenz.png", URL, {
  errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
});
const q = QRCode.create(URL, { errorCorrectionLevel: "M" });
console.log(`qr-rollen-evidenz: ${q.modules.size}×${q.modules.size} Module → ${URL}`);
