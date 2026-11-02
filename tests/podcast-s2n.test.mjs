// Prüft das Hörstück S2-N „Was Forschende über KI sagen“ aus Gemini Notebook (Parallelversuch zu S2).
// Aufruf: node --test tests/podcast-s2n.test.mjs
// Die Prüfungen gegen die Originaltranskripte brauchen die CSV von Hugging Face
// (Anthropic/AnthropicInterviewer, interview_transcripts/scientists_transcripts.csv);
// Pfad über S2_CSV, sonst /home/claude/daten/interviewer/scientists_transcripts.csv. Fehlt sie, werden diese Tests übersprungen.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const SRC = new URL('../_src/audio/s2n-notebook/', import.meta.url);
const lies = (n) => readFileSync(new URL(n, SRC), 'utf8');
const manifest = JSON.parse(lies('manifest.json'));
const uebung = JSON.parse(lies('uebung.json'));
const zaehlung = JSON.parse(lies('zaehlung.json'));
const html = readFileSync(new URL('../interactions/podcast-forschende-ki-notebook.html', import.meta.url), 'utf8');
const daten = JSON.parse(html.match(/<script type="application\/json" id="podcastdaten">([\s\S]*?)<\/script>/)[1]);
const CSV = process.env.S2_CSV || '/home/claude/daten/interviewer/scientists_transcripts.csv';
const csv = existsSync(CSV) ? readFileSync(CSV, 'utf8') : null;

function transkript(id) {
  const a = csv.indexOf('\n' + id + ',');
  assert.ok(a >= 0, `ID ${id} nicht in der CSV`);
  const b = csv.indexOf('\nscience_', a + 1);
  return ws(csv.slice(a, b < 0 ? undefined : b).replaceAll('""', '"'));
}
const ws = (s) => s.replace(/\s+/g, ' ');
const idAusNr = (nr) => 'science_' + String(Number(nr) - 1).padStart(4, '0');

test('Manifest: jede Zeile mit Stimme, Text, Thema und steigenden Zeitmarken', () => {
  assert.ok(manifest.zeilen.length >= 20);
  let vorher = 0;
  for (const z of manifest.zeilen) {
    assert.ok(['s1', 's2'].includes(z.sprecher), `Zeile ${z.nr}: Sprecher ${z.sprecher}`);
    assert.ok(z.text.trim().length > 0, `Zeile ${z.nr}: Text fehlt`);
    assert.ok(manifest.themen.some((t) => t.id === z.thema), `Zeile ${z.nr}: Thema ${z.thema}`);
    assert.ok(typeof z.start === 'number' && z.ende > z.start && z.start >= vorher - 0.01, `Zeile ${z.nr}: Zeitmarken`);
    vorher = z.ende;
  }
  assert.ok(manifest.themen.length >= 3);
  assert.deepEqual(Object.values(manifest.stimmen).map((s) => s.name), ['Stimme 1', 'Stimme 2']);
});

test('Genannte Interview-Nummern liegen in 001–125 und sind der richtigen transcript_id zugeordnet', () => {
  for (const z of manifest.zeilen) {
    for (const q of z.quelle_genannt) {
      const n = Number(q.nr);
      assert.ok(n >= 1 && n <= 125, `Zeile ${z.nr}: Nummer ${q.nr} außerhalb 001–125`);
      assert.equal(q.transcript_id, idAusNr(q.nr), `Zeile ${z.nr}: Zuordnung ${q.nr}`);
    }
  }
});

test('Jede Erkennungskorrektur ist in erkennung-korrekturen.json mit Begründung erfasst', () => {
  const k = JSON.parse(lies('erkennung-korrekturen.json'));
  const korrigiert = manifest.zeilen.filter((x) => x.erkannt);
  assert.ok(korrigiert.length > 0 && korrigiert.length <= 12);
  for (const z of korrigiert) {
    assert.ok(Object.keys(k.ersetzungen).some((alt) => z.erkannt.includes(alt)), `Zeile ${z.nr}: Änderung ohne Eintrag`);
  }
  assert.ok(Object.keys(k.begruendung).length >= Object.keys(k.ersetzungen).length - 2);
});

test('Player-Daten stimmen mit Manifest und Übung überein; Kennzeichnung nach Art. 50 KI-VO', () => {
  assert.equal(daten.zeilen.length, manifest.zeilen.length);
  daten.zeilen.forEach((z, i) => assert.equal(z.text, manifest.zeilen[i].text));
  assert.equal(daten.pruefung.length, 3);
  assert.equal(daten.zeilen.filter((z) => z.pruef).length, 3);
  const k = daten.meta.kennzeichnung;
  for (const w of ['KI-erzeugt', 'Gemini Notebook', 'ungeprüft', 'Spracherkennung']) assert.ok(k.includes(w), `Kennzeichnung ohne „${w}“`);
  assert.equal(daten.meta.src, 'media/kap04-podcast-forschende-notebook.mp3');
  assert.ok(existsSync(new URL('../interactions/' + daten.meta.src, import.meta.url)), 'mp3 fehlt');
});

test('Drei Prüfaussagen mit Urteil, Zeitfenster ab ihrer Zeile, 2–3 Originalstellen', () => {
  assert.equal(uebung.pruefung.length, 3);
  for (const a of daten.pruefung) {
    assert.ok(['belegt', 'ueberzogen', 'nicht_belegt'].includes(a.urteil), `Aussage ${a.nr}: Urteil`);
    const z = manifest.zeilen.find((x) => x.nr === a.zeile);
    assert.ok(z, `Aussage ${a.nr}: Zeile ${a.zeile} fehlt`);
    assert.ok(a.start >= z.start - 0.01 && a.start < z.ende && a.ende > a.start && a.ende - a.start < 40 && a.ende <= manifest.dauer, `Aussage ${a.nr}: Zeitfenster`);
    assert.ok(a.stellen.length >= 2 && a.stellen.length <= 3);
    for (const s of a.stellen) assert.ok(s.en.split(/\s+/).length <= 60 && s.de.length > 0);
  }
});

test('Zahlen in der Vorhersage stammen aus der Stichwortzählung', () => {
  for (const o of daten.vorhersage.optionen) assert.equal(o.zahl, zaehlung.themen[o.thema].interviews);
  assert.equal(daten.vorhersage.regler.zahl, zaehlung.themen[daten.vorhersage.regler.thema].interviews);
  assert.equal(daten.vorhersage.n, 125);
});

test('Transkript-IDs der Prüfphase und genannte Nummern existieren in der CSV', { skip: !csv && 'CSV fehlt' }, () => {
  const ids = new Set(manifest.zeilen.flatMap((z) => z.quelle_genannt.map((q) => q.transcript_id)));
  uebung.pruefung.forEach((a) => a.stellen.forEach((s) => ids.add(s.id)));
  for (const id of ids) transkript(id);
});

test('Jede Originalstelle der Prüfphase steht wörtlich im genannten Transkript', { skip: !csv && 'CSV fehlt' }, () => {
  for (const a of uebung.pruefung) {
    for (const s of a.stellen) assert.ok(transkript(s.id).includes(ws(s.en)), `Aussage ${a.nr}: Stelle nicht wörtlich in ${s.id}: ${s.en.slice(0, 50)}`);
  }
});
