// Baut interactions/bibliothek-der-prompts.html aus _src/bibliothek/ (eine Datei, läuft offline).
//
// Laiensicht: Der Quelltext liegt in mehreren kleinen Dateien. Das Werkzeug esbuild
// („Bündler“) fügt sie mit der 3D-Bibliothek Three.js zu je einem Programmblock zusammen
// und lässt dabei alles weg, was nicht gebraucht wird. Dieses Skript setzt die Blöcke,
// die Daten aus scripts/aei-bibliothek.py und das Standbild in die HTML-Vorlage ein.
// Ergebnis: eine einzige Datei ohne Nachladen aus dem Netz.
//
// Aufruf im Repo-Wurzelordner:  node scripts/build-bibliothek.mjs
import { build } from "esbuild";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const SRC = "_src/bibliothek/";
const ZIEL = "interactions/bibliothek-der-prompts.html";

async function buendel(einstieg, globalName) {
  const r = await build({
    entryPoints: [SRC + einstieg], bundle: true, minify: true, write: false, format: "iife",
    globalName, target: ["es2020"], legalComments: "none", charset: "utf8",
  });
  return r.outputFiles[0].text;
}

const daten = JSON.parse(readFileSync("interactions/data/aei-bibliothek.json", "utf8"));
const zusatz = JSON.parse(readFileSync(SRC + "aufloesung.json", "utf8"));
Object.assign(daten, zusatz);
const app = await buendel("app.js");
let raum = await buendel("raum.js", "BibliothekRaum");
const poster = existsSync(SRC + "poster.jpg")
  ? "data:image/jpeg;base64," + readFileSync(SRC + "poster.jpg").toString("base64") : "";

// Inhalte in <script>-Blöcken dürfen kein „</script“ enthalten.
const sicher = (s) => s.replace(/<\/(script)/gi, "<\\/$1");
let html = readFileSync(SRC + "vorlage.html", "utf8");
html = html.replace("/*DATEN*/", () => sicher(JSON.stringify(daten)))
  .replace("/*RAUM*/", () => sicher(raum))
  .replace("/*APP*/", () => sicher(app))
  .replace("/*POSTER*/", () => poster);
writeFileSync(ZIEL, html);
const kb = (n) => (n / 1024).toFixed(0) + " KB";
console.log(`${ZIEL}: ${kb(Buffer.byteLength(html))} (Daten ${kb(JSON.stringify(daten).length)}, Raum ${kb(raum.length)}, App ${kb(app.length)}, Poster ${kb(poster.length)})`);
