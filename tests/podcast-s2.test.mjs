// Prüft das Hörstück S2 „Was Forschende über KI sagen“ (Kap. 4.1, @sec-podcast-interviews).
// Aufruf: node --test tests/podcast-s2.test.mjs
// Die Prüfungen gegen die Originaltranskripte brauchen die CSV von Hugging Face
// (Anthropic/AnthropicInterviewer, interview_transcripts/scientists_transcripts.csv);
// Pfad über S2_CSV, sonst /home/claude/daten/interviewer/scientists_transcripts.csv. Fehlt sie, werden diese Tests übersprungen.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const SRC = new URL('../_src/audio/s2-podcast/', import.meta.url);
const lies = (n) => readFileSync(new URL(n, SRC), 'utf8');
const manifest = JSON.parse(lies('manifest.json'));
const uebung = JSON.parse(lies('uebung.json'));
const auszug = JSON.parse(lies('auszug.json'));
const html = readFileSync(new URL('../interactions/podcast-forschende-ki.html', import.meta.url), 'utf8');
const daten = JSON.parse(html.match(/<script type="application\/json" id="podcastdaten">([\s\S]*?)<\/script>/)[1]);
const CSV = process.env.S2_CSV || '/home/claude/daten/interviewer/scientists_transcripts.csv';
const csv = existsSync(CSV) ? readFileSync(CSV, 'utf8') : null;

// Text eines Transkripts aus der Roh-CSV (Zeilen beginnen mit der ID; Anführungszeichen sind verdoppelt)
function transkript(id) {
  const a = csv.indexOf('\n' + id + ',');
  assert.ok(a >= 0, `ID ${id} nicht in der CSV`);
  const b = csv.indexOf('\nscience_', a + 1);
  return ws(csv.slice(a, b < 0 ? undefined : b).replaceAll('""', '"'));
}
// Leerraum vereinheitlichen (Zeilenumbrüche im Original, Leerzeichen im Auszug); Wörter und Zeichen bleiben wörtlich
const ws = (s) => s.replace(/\s+/g, ' ');

test('Manifest: jede Zeile mit Sprecher, Text, Eingabetext und Zeitmarken', () => {
  assert.ok(manifest.zeilen.length >= 20);
  let vorher = 0;
  for (const z of manifest.zeilen) {
    assert.ok(['lea', 'jonas'].includes(z.sprecher), `Zeile ${z.nr}: Sprecher ${z.sprecher}`);
    assert.ok(z.text.trim().length > 0 && z.tts.trim().length > 0, `Zeile ${z.nr}: Text fehlt`);
    assert.ok(!/science_\d{4}/.test(z.text + z.tts), `Zeile ${z.nr}: Transkript-ID wird gesprochen`);
    assert.ok(manifest.themen.some((t) => t.id === z.thema), `Zeile ${z.nr}: Thema ${z.thema}`);
    assert.ok(typeof z.start === 'number' && z.ende > z.start && z.start >= vorher, `Zeile ${z.nr}: Zeitmarken`);
    vorher = z.ende;
  }
  assert.ok(manifest.dauer >= vorher);
});

test('Player-Daten stimmen mit Manifest und Übung überein', () => {
  assert.equal(daten.zeilen.length, manifest.zeilen.length);
  assert.equal(daten.pruefung.length, 3);
  assert.equal(daten.meta.dauer, manifest.dauer);
  daten.zeilen.forEach((z, i) => assert.equal(z.text, manifest.zeilen[i].text));
  assert.ok(daten.meta.kennzeichnung.includes('KI-erzeugt') && daten.meta.kennzeichnung.includes('ungeprüft'));
});

test('Drei Prüfaussagen mit Urteil, Zeile im Manifest markiert, 2–3 Originalstellen', () => {
  assert.equal(uebung.pruefung.length, 3);
  for (const a of uebung.pruefung) {
    assert.ok(['belegt', 'ueberzogen', 'nicht_belegt'].includes(a.urteil), `Aussage ${a.nr}: Urteil`);
    const z = manifest.zeilen.find((x) => x.nr === a.zeile);
    assert.equal(z.pruef, a.nr, `Aussage ${a.nr}: Zeile ${a.zeile} nicht als Prüfaussage markiert`);
    assert.ok(a.stellen.length >= 2 && a.stellen.length <= 3);
    for (const s of a.stellen) assert.ok(s.en.split(/\s+/).length <= 60 && s.de.length > 0);
  }
});

test('Zahlen in der Vorhersage stammen aus der Stichwortzählung', () => {
  for (const o of daten.vorhersage.optionen) assert.equal(o.zahl, auszug.themen[o.thema].interviews);
  assert.equal(daten.vorhersage.regler.zahl, auszug.themen[daten.vorhersage.regler.thema].interviews);
  assert.equal(daten.vorhersage.n, 125);
});

test('ElevenLabs-Blöcke: höchstens 2.000 Zeichen, alle Zeilen enthalten', () => {
  const md = lies('elevenlabs-bloecke.md');
  const zeichen = [...md.matchAll(/· (\d+) Zeichen/g)].map((m) => Number(m[1]));
  assert.ok(zeichen.length >= 2);
  for (const z of zeichen) assert.ok(z <= 2000, `Block mit ${z} Zeichen`);
  assert.equal((md.match(/^- \*\*(Lea|Jonas):\*\*/gm) || []).length, manifest.zeilen.length);
});

test('Transkript-IDs existieren in der CSV', { skip: !csv && 'CSV fehlt' }, () => {
  const ids = new Set(manifest.zeilen.flatMap((z) => z.ids));
  uebung.pruefung.forEach((a) => a.stellen.forEach((s) => ids.add(s.id)));
  assert.ok(ids.size > 10);
  for (const id of ids) transkript(id);
});

test('Jede Originalstelle steht wörtlich im genannten Transkript', { skip: !csv && 'CSV fehlt' }, () => {
  for (const a of uebung.pruefung) {
    for (const s of a.stellen) assert.ok(transkript(s.id).includes(ws(s.en)), `Aussage ${a.nr}: Stelle nicht wörtlich in ${s.id}: ${s.en.slice(0, 50)}`);
  }
  for (const [thema, liste] of Object.entries(auszug.stellen)) {
    for (const s of liste) assert.ok(transkript(s.id).includes(ws(s.text)), `Auszug ${thema}: Stelle nicht wörtlich in ${s.id}`);
  }
});

test('Ton = Transkript: keine Zeile mehr in unkorrigierter Blockfassung', () => {
  // Zeilen mit Feld blockfassung brauchen eine Ersatzaufnahme (Persönlichkeitsschutz-Korrekturen, Sitzung A)
  assert.deepEqual(manifest.ersatz_offen ?? [], [], `Ersatzaufnahme fehlt für Zeile(n) ${(manifest.ersatz_offen ?? []).join(', ')}`);
});
