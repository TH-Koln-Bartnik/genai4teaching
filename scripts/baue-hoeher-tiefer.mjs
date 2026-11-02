// Bettet die Daten der Leserübung „Höher oder tiefer“ in die Spieldatei ein.
//
// Laiensicht: Das Spiel ist eine einzige Webseite, die auch ohne Internet läuft. Damit sie
// keine Daten nachladen muss, kopiert dieses Skript die nötigen Zahlen aus
// interactions/data/aei-hoeher-tiefer.json (erzeugt von scripts/aei-hoeher-tiefer.py) in
// einen Datenblock der Seite. Paare tauschen (Gate G3): in scripts/aei-hoeher-tiefer.py die
// Liste AUSWAHL ändern, Python-Skript und dieses Skript erneut ausführen.
//
// Ausführen im Repo-Wurzelordner: node scripts/baue-hoeher-tiefer.mjs
import { readFileSync, writeFileSync } from "node:fs";

const JSON_DATEI = "interactions/data/aei-hoeher-tiefer.json";
const HTML_DATEI = "interactions/hoeher-tiefer-ki-aufgaben.html";
const d = JSON.parse(readFileSync(JSON_DATEI, "utf8"));

const knapp = a => ({ id: a.id, name_en: a.name_en, name_de: a.name_de, pct: a.pct, rang: a.rang, lehre: a.lehre });
const kandidaten = d.kandidaten.map(p => ({
  id: p.id, typ: p.typ, a: knapp(p.a), b: knapp(p.b), richtig: p.richtig, faktor: p.faktor,
  erklaerung: p.erklaerung, model_tip: p.model_tip, model_confidence: p.model_confidence,
}));
const treffer = d.kandidaten.filter(p => p.model_tip === p.richtig).length;

// Die beim Bau tatsächlich aufgetretene Schwäche (Sitzung 02.11.2026), Zahl aus den Daten.
const schwaeche =
  `Die Überraschungspaare wählte derselbe Modelltyp aus, der danach als Mitspieler tippte. ` +
  `Paare, die der Intuition des Agenten widersprachen, widersprachen auch der des Mitspielers: ` +
  `Er lag bei ${treffer} von ${d.kandidaten.length} Kandidatenpaaren richtig. Das Duell ist also ` +
  `kein fairer Leistungstest, es zeigt aber, dass auch ein Sprachmodell Nutzungsdaten nicht aus dem Bauch kennt.`;

const einbettung = {
  quelle: d.quelle, n_aufgaben: d.n_aufgaben, kopfzahlen: d.kopfzahlen, vorhersage: d.vorhersage,
  modell: d.modell ? { modell: d.modell.modell, datum: d.modell.datum } : null,
  kandidaten, spiel: d.spiel, wer_fragt: d.wer_fragt, top60: d.top60.map(knapp), schwaeche,
};
const text = JSON.stringify(einbettung).replace(/</g, "\\u003c");
const html = readFileSync(HTML_DATEI, "utf8");
const muster = /(<script id="aei-daten" type="application\/json">)[\s\S]*?(<\/script>)/;
if (!muster.test(html)) throw new Error("Datenblock nicht gefunden");
writeFileSync(HTML_DATEI, html.replace(muster, (_, a, b) => a + text + b));
console.log(`${HTML_DATEI}: ${d.spiel.length} Spielpaare, ${kandidaten.length} Kandidaten, ${d.top60.length} Top-Aufgaben, ` +
  `${(text.length / 1024).toFixed(1)} KB eingebettet; Modell-Treffer ${treffer}/${d.kandidaten.length}`);
