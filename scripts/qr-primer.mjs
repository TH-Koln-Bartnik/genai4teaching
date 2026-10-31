// QR-Codes der Praxis-Primer (Anhang „Praxis-Primer für Lehrende“).
// Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
// und öffnet; jeder Code führt im Druck zur Vollfassung des Primers in der Online-Version.
// Ausführen im Repo-Wurzelordner: npm install && node scripts/qr-primer.mjs
import QRCode from "qrcode";

const BASIS = "https://th-koln-bartnik.github.io/genai4teaching/anhang-primer.html#sec-primer-";
const ZIELE = ["animationen", "praesentationen", "lernsongs", "lernspiele"];
for (const name of ZIELE) {
  const url = BASIS + name;
  await QRCode.toFile(`images/qr/qr-primer-${name}.png`, url, { errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" } });
  console.log(`qr-primer-${name}.png → ${url}`);
}
