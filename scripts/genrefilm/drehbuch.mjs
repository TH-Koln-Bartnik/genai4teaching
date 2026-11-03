#!/usr/bin/env node
// Erzeugt aus dem Manifest (einzige Quelle) zwei lesbare Fassungen:
//   1. <Filmordner>/drehbuch.md  – Szenen, Sprechtext, Bildtext, Prüfspalte mit Belegen, Haltepunkte
//   2. Arbeitsblatt für die Vertonung (ElevenLabs; Modell aus manifest.vertonung, Standard v3) – Pfad über --vertonung <datei>
// Aufruf: node scripts/genrefilm/drehbuch.mjs --film kap02-token-genres [--vertonung claude-notizen/VERTONUNG-….md]
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { args, findeFilm, leseManifest } from "./pipeline.mjs";

const a = args();
const src = findeFilm(a.film);
const m = leseManifest(src);
const zpPfad = join(src, "build/zeitplan.json");
const zp = existsSync(zpPfad) ? JSON.parse(readFileSync(zpPfad, "utf8")) : null;
const zelle = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
const woerter = (s) => s.split(/\s+/).filter(Boolean).length;

let d = `# Drehbuch: ${m.titel}\n\nErzeugt aus \`manifest.json\` (einzige Quelle; Änderungen dort, dann \`node scripts/genrefilm/drehbuch.mjs --film ${m.film}\`).\n`;
d += `Bildsprache: Graustufen + eine Akzentfarbe (${m.farben.hell}; auf dunklem Grund ${m.farben.dunkel}); Leitobjekt: ${m.leitobjekt}.\n`;
if (zp) d += `Laufzeit mit aktueller Tonspur: ${(zp.at(-1).start + zp.at(-1).dauer).toFixed(1)} s.\n`;
d += `\n## Vorhersage vor dem Start\n\n${m.vorhersage.frage}\n\n${m.vorhersage.optionen.map((o, i) => `${"abc"[i]}) ${o}${i === m.vorhersage.richtig ? " **(richtig)**" : ""}`).join("  \n")}\n\nAuflösung: ${m.vorhersage.aufloesung}\n`;
m.szenen.forEach((s, i) => {
  d += `\n## Szene ${i + 1}: ${s.genre}${zp ? ` (${zp[i].start.toFixed(1)}–${(zp[i].start + zp[i].dauer).toFixed(1)} s)` : ""}\n\n`;
  d += `**Idee:** ${s.idee}  \n**Sprechtext (${woerter(s.sprechtext)} Wörter):** ${s.sprechtext}  \n**Stimme:** ${s.stimmhinweis}  \n`;
  d += `**Bildtext:** ${s.bildtext.map((x) => `„${x}“`).join(", ")}  \n**Bild:** ${s.bildobjekte}  \n`;
  if (s.schematisch) d += `**Gekennzeichnet:** ${s.schematisch}  \n`;
  d += `\n| Fachaussage | Beleg |\n|---|---|\n${s.belege.map((b) => `| ${zelle(b.aussage)} | ${zelle(b.beleg)} |`).join("\n")}\n`;
  const h = m.haltepunkte.find((x) => x.nachSzene === i + 1);
  if (h) d += `\n**Haltepunkt nach Szene ${i + 1}:** ${h.frage}  \n${h.optionen.map((o, j) => `${"abc"[j]}) ${o}${j === h.richtig ? " **(richtig)**" : ""}`).join("  \n")}  \nAuflösung: ${h.aufloesung}\n`;
});
d += `\n## Selbsttest\n\n${m.selbsttest.map((f, i) => `${i + 1}. ${f.frage}  \n${f.optionen.map((o, j) => `   ${"abc"[j]}) ${o}${j === f.richtig ? " **(richtig)**" : ""}`).join("  \n")}  \n   ${f.erklaerung}`).join("\n")}\n`;
if (m.tokenwerte) d += `\n## Tokenwerte (zur Bauzeit berechnet, ${m.tokenwerte.tokenizer})\n\n- ${m.tokenwerte.lieferant.text}: ${m.tokenwerte.lieferant.teile.map((t) => `[${t}]`).join("")} = ${m.tokenwerte.lieferant.ids.length}\n- ${m.tokenwerte.supplier.text}: ${m.tokenwerte.supplier.teile.map((t) => `[${t}]`).join("")} = ${m.tokenwerte.supplier.ids.length}\n- ${m.tokenwerte.satz.text}: ${m.tokenwerte.satz.ids.join(", ")}\n`;
writeFileSync(join(src, "drehbuch.md"), d);
console.log("drehbuch.md geschrieben");

if (a.vertonung) {
  let v = `# Vertonung „${m.titel}“ mit ${m.vertonung?.modell || "ElevenLabs v3"} – Arbeitsblatt für Roman\n\n`;
  v += `Film: \`${m.film}\` · Szenen: ${m.szenen.length} · eine Datei je Szene · geschätzte Zeit: ${m.vertonung?.zeit || "20–25 min (eine Stimme für alle Szenen) bzw. 35–45 min (eigene Stimme je Genre)"}.\n\n`;
  v += `## So geht es\n\n1. **Tarif:** bezahlter Tarif (kommerzielle Nutzung; Starter genügt, wie bei den Hörbeispielen Kap. 2.3.1).\n2. **Modell:** ${m.vertonung?.modellText || "Text to Speech → **Eleven v3** (\\`eleven_v3\\`). Nur v3 versteht die Regieanweisungen in eckigen Klammern (Englisch, z. B. \\`[whispers]\\`)."} Keine SSML-Pausen; Pausen entstehen aus \`[pause]\`, Auslassungspunkten und Satzzeichen.\n3. **Stimme wählen (Empfehlung: eine Stimme für alle neun Szenen).** Die Genres tragen die Tags und die Wortwahl; eine Stimme spart Zeit und hält den Film zusammen. In der Stimmenbibliothek (*Voice Library*) filtern: Sprache **German**, Akzent Standard, Einsatz *Narrative & Story* oder *Characters*, Alter *middle aged*, Geschlecht nach Wahl; 2–3 Kandidaten mit Szene 1 und Szene 5 probehören und die Stimme nehmen, die sowohl rauchig (Noir) als auch sachlich (Wetter) glaubwürdig klingt. Konkrete Stimmennamen sind hier nicht vorgegeben, weil die Bibliothek in dieser Sitzung nicht einsehbar war. Keine geklonte Stimme einer realen Person.\n`;
  v += `4. **Einstellungen:** Stabilität „Natural“; wirkt ein Genre zu flach, „Creative“. Tempo Standard.\n5. **Erzeugen:** je Szene den Eingabetext unten einfügen (ohne Backticks), 2–3 Varianten, die beste behalten. Prüffragen: Wortlaut genau wie im Text (die Untertitel zeigen ihn wörtlich)? ${m.vertonung?.aussprache || "Zahlen richtig ausgesprochen („achttausendsiebenhundertsechsundneunzig“)? Tokens als Wörter gesprochen („Lieferantenbewertung“, „Supplier evaluation“ englisch)?"}\n`;
  v += `6. **Speichern:** mp3, Dateiname genau wie in der Tabelle (z. B. \`${m.szenen[0].datei}.mp3\`), Ablage in Tresorit \`${m.vertonung?.ordner || "0_GenAI/1-Research/06-Lehrbuch-Publikation-Logos/Audio-S5-Token-Genres/"}\`.\n7. **Danach (Sitzung B):** Claude holt die Dateien, baut den Film neu (die Szenenlängen passen sich der Tonlänge an) und stellt G3.\n\n`;
  v += `Länge zur Orientierung: Die Platzhalterstimme braucht je Szene ${zp ? zp.map((z) => z.audioDauer.toFixed(0) + " s").join(", ") : "15–22 s"}; ElevenLabs-Takes dürfen 10–30 % länger sein.\n\n`;
  v += `## Szenen\n\n| Nr. | Datei | Genre / Stimmhinweis | Eingabetext für ${m.vertonung?.modell || "ElevenLabs v3"} (Audio Tags in eckigen Klammern) |\n|---|---|---|---|\n`;
  v += m.szenen.map((s, i) => `| ${i + 1} | \`${s.datei}.mp3\` | **${s.genre}** – ${zelle(s.stimmhinweis)} | \`${zelle(s.v3)}\` |`).join("\n") + "\n";
  v += `\n## Wenn eigene Stimmen je Genre gewünscht sind\n\nFilterprofile (Sprache jeweils German): ${m.szenen.map((s, i) => `${i + 1} ${s.genre}: ${s.stimmhinweis}`).join("; ")}.\n`;
  writeFileSync(a.vertonung, v);
  console.log("Vertonungsblatt geschrieben:", a.vertonung);
}
