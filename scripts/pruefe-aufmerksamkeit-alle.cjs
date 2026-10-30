// Messlauf: prüft alle Ziele aus scripts/aufmerksamkeit-ziele.json mit scripts/pruefe-aufmerksamkeit.cjs
// und schreibt eine Markdown-Tabelle. Bild-Erzeugung optional.
// Aufruf (aus dem Repository-Ordner):
//   npm run pruefe:aufmerksamkeit -- [--md reviews/datei.md] [--bilder ordner] [--wurzel ordner] [--nur A1,A4]
//   --md      Ausgabedatei (Standard: reviews/aufmerksamkeit-messung.md)
//   --bilder  Ordner für Farb-/Graustufenbilder je Ziel und je Schritt, dazu je Ziel eine Übersicht
//   --wurzel  Ordner, der per HTTP ausgeliefert wird (Standard: Repository). Für die Ziele mit
//             "gerendert": true eine Arbeitskopie mit frisch gerendertem docs/kapitel04.html angeben.
//   --nur     nur diese Ziele (Kommaliste der Nummern)
// Alle Seiten werden über einen lokalen HTTP-Server geladen, weil OJS-Module unter file:// nicht laden.
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const REPO = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const MD = path.resolve(opt("--md") || path.join(REPO, "reviews", "aufmerksamkeit-messung.md"));
const BILDER = opt("--bilder") ? path.resolve(opt("--bilder")) : null;
const WURZEL = path.resolve(opt("--wurzel") || REPO);
const NUR = opt("--nur") ? new Set(opt("--nur").split(",")) : null;
const { ziele } = JSON.parse(fs.readFileSync(path.join(__dirname, "aufmerksamkeit-ziele.json"), "utf8"));

const TYPEN = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".mp4": "video/mp4", ".woff2": "font/woff2", ".ojs": "text/plain" };
const server = http.createServer((req, res) => {
  const p = path.join(WURZEL, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!p.startsWith(WURZEL) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": TYPEN[path.extname(p)] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
});

const farbtoene = z => [...new Set(z.zeilen.flatMap(r => String(r["Farbton-Klassen (°)"] || "").split(" ").filter(Boolean)))].map(Number).sort((a, b) => a - b);

async function uebersicht(ordner, nr) {
  const { chromium } = require("playwright");
  const dateien = fs.readdirSync(ordner).filter(f => /^schritt-\d+\.png$/.test(f)).sort();
  const bild = f => "data:image/png;base64," + fs.readFileSync(path.join(ordner, f)).toString("base64");
  const zellen = dateien.map(f => `<figure><div><img src="${bild(f)}"><img src="${bild(f.replace(".png", "-grau.png"))}"></div><figcaption>${nr} · Schritt ${+f.match(/\d+/)[0]}</figcaption></figure>`).join("");
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1400, height: 600 } });
  await p.setContent(`<style>body{margin:8px;font:12px system-ui;display:grid;grid-template-columns:repeat(auto-fill,minmax(680px,1fr));gap:10px}
    figure{margin:0;border:1px solid #ccc;padding:4px}figure div{display:flex;gap:4px}img{width:50%;height:auto;object-fit:contain;object-position:top}</style>${zellen}`);
  await p.screenshot({ path: path.join(ordner, "uebersicht.png"), fullPage: true });
  await b.close();
}

server.listen(0, "127.0.0.1", async () => {
  const basis = `http://127.0.0.1:${server.address().port}/`;
  const ergebnisse = [];
  for (const z of ziele.filter(z => !NUR || NUR.has(z.nr))) {
    const jsonDatei = path.join(os.tmpdir(), `aufmerksamkeit-${z.nr}.json`);
    const a = [path.join(__dirname, "pruefe-aufmerksamkeit.cjs"), basis + z.seite, ...z.args, "--json", jsonDatei];
    if (BILDER) a.push("--bilder", path.join(BILDER, z.nr));
    process.stdout.write(`${z.nr.padEnd(10)} ${z.seite} … `);
    // asynchron starten, damit der Server in diesem Prozess weiter antworten kann
    const code = await new Promise(ok => spawn(process.execPath, a, { stdio: ["ignore", "ignore", "pipe"] })
      .on("close", ok).stderr.on("data", d => process.stderr.write(d)));
    if (code === 2 || !fs.existsSync(jsonDatei)) { console.log("FEHLER"); ergebnisse.push({ z, fehlerText: "nicht messbar (Seite oder Bühne nicht gefunden)" }); continue; }
    const r = JSON.parse(fs.readFileSync(jsonDatei, "utf8")); fs.unlinkSync(jsonDatei);
    console.log(r.fehler ? `${r.fehler}/${r.schritte} über Budget` : "im Budget");
    if (BILDER) await uebersicht(path.join(BILDER, z.nr), z.nr);
    ergebnisse.push({ z, r });
  }
  server.close();

  const zeit = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
  const md = [];
  md.push(`# Messlauf Aufmerksamkeitsbudget: Animationen im Lehrbuch`, "");
  md.push(`Stand: ${zeit} · Werkzeug: \`scripts/pruefe-aufmerksamkeit.cjs\` über \`scripts/pruefe-aufmerksamkeit-alle.cjs\` · Ziele: \`scripts/aufmerksamkeit-ziele.json\` · Budget je Schritt: ≤ 1 Farbton außer Grau, ≤ 8 neue Wörter, ≤ 40 sichtbare Wörter bis zum vorletzten Schritt, genau 1 neue Gruppe.`, "");
  md.push(`Die Zahlen sind Messwerte, kein Urteil. Das Urteil (BESTANDEN oder ÄNDERN je Regel) fällt in Phase 2 mit der Reviewer-Karte. Für Gruppe B gelten die Kurzregeln aus \`prozessanimation-lehre\`, für Gruppe C nur F4, F5 und T1. „Wörter neu“ und „Gruppen neu“ misst das Skript nur bei Seiten mit \`data-ab\`; der Bestand hat keine, daher fehlen diese Spalten. Farbton-Klassen sind 30°-Sektoren des Farbkreises (0 = Rot, 30 = Orange, 60 = Gelb, 120 = Grün, 150 = Grüntürkis, 180 = Cyan, 210 = Blau, 270 = Violett).`, "");
  md.push(`## Übersicht`, "");
  md.push(`| Nr. | Datei | Gr. | Art | Schritte | Farbtöne max. | Farbton-Klassen (°) | Wörter Start | Wörter max. vor Ende | Wörter Ende | Schritte über Budget |`);
  md.push(`|---|---|---|---|---|---|---|---|---|---|---|`);
  for (const { z, r, fehlerText } of ergebnisse) {
    if (!r) { md.push(`| ${z.nr} | \`${z.seite}\` | ${z.gruppe} | ${z.art} | – | – | – | – | – | – | ${fehlerText} |`); continue; }
    const w = r.zeilen.map(x => x["Wörter sichtbar"]);
    const vorEnde = w.length > 1 ? Math.max(...w.slice(0, -1)) : w[0];
    md.push(`| ${z.nr} | \`${z.seite}\` | ${z.gruppe} | ${z.art} | ${r.schritte}${r.steuerobjekt ? "" : " (Standbild)"} | ${Math.max(...r.zeilen.map(x => x.Farbtöne))} | ${farbtoene(r).join(", ") || "–"} | ${w[0]} | ${vorEnde} | ${w[w.length - 1]} | ${r.fehler} von ${r.schritte} |`);
  }
  md.push("", `## Einzelwerte je Schritt`, "");
  for (const { z, r } of ergebnisse.filter(e => e.r && e.r.schritte > 1)) {
    md.push(`### ${z.nr}: \`${z.seite}\``, "", `Bühne \`${r.buehne}\` · ${z.art}`, "");
    md.push(`| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |`, `|---|---|---|---|---|`);
    r.zeilen.forEach(x => md.push(`| ${x.Schritt} | ${x["Wörter sichtbar"]} | ${x.Farbtöne} | ${x["Farbton-Klassen (°)"] || "–"} | ${x.Ergebnis} |`));
    md.push("");
  }
  fs.mkdirSync(path.dirname(MD), { recursive: true });
  fs.writeFileSync(MD, md.join("\n") + "\n");
  console.log(`Tabelle: ${path.relative(process.cwd(), MD)}`);
});
