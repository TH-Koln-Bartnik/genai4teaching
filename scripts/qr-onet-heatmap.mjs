// QR-Code für die Druckfassung von Abb. 3.1 (Aufgaben Lehrender, Kap. 3).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet. Er führt direkt zur interaktiven Heatmap im Online-Kapitel.
// Ausführen im Repo-Wurzelordner: node scripts/qr-onet-heatmap.mjs
import QRCode from "qrcode";

const URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel03-automation.html#fig-onet-tasks";
await QRCode.toFile("images/qr/qr-onet-heatmap.png", URL, {
  errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" },
});
const q = QRCode.create(URL, { errorCorrectionLevel: "M" });
console.log(`qr-onet-heatmap: ${q.modules.size}×${q.modules.size} Module → ${URL}`);
