// Prüft die Daten der Leserübung „Höher oder tiefer“ (Kap. 1).
// Laiensicht: Ein Test ist ein kleines Programm, das nachrechnet, ob die Spieldaten den
// Regeln aus dem Auftrag genügen, und bei jedem Verstoß rot meldet.
// Ausführen im Repo-Wurzelordner: node --test tests/hoeher-tiefer.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const d = JSON.parse(readFileSync("interactions/data/aei-hoeher-tiefer.json", "utf8"));
const probe = JSON.parse(readFileSync("tests/fixtures/aei-stichprobe.json", "utf8"));
const html = readFileSync("interactions/hoeher-tiefer-ki-aufgaben.html", "utf8");

test("JSON vollständig", () => {
  for (const k of ["quelle", "n_aufgaben", "kopfzahlen", "vorhersage", "modell", "kandidaten", "spiel", "wer_fragt", "druck", "top60"])
    assert.ok(d[k] !== undefined && d[k] !== null, `Feld ${k} fehlt`);
  assert.equal(d.quelle.monat, "2026-05-01");
  assert.equal(d.top60.length, 60);
  for (const a of [...d.top60, ...d.kandidaten.flatMap(p => [p.a, p.b])]) {
    assert.ok(a.name_de && a.name_de.split(/\s+/).length <= 12, `Übersetzung ${a.id}`);
    assert.ok(a.name_en && a.pct >= 0 && a.rang >= 1, `Aufgabe ${a.id}`);
  }
});

test("15 Kandidaten, 7 ausgewählt (3 Lehr-, 4 Überraschungspaare)", () => {
  assert.equal(d.kandidaten.length, 15);
  assert.equal(d.kandidaten.filter(p => p.typ === "lehre").length, 5);
  assert.equal(d.spiel.length, 7);
  const typen = d.spiel.map(id => d.kandidaten.find(p => p.id === id).typ);
  assert.equal(typen.filter(t => t === "lehre").length, 3);
  assert.equal(typen.filter(t => t === "ueberraschung").length, 4);
  const lehrIdx = typen.map((t, i) => (t === "lehre" ? i : -1)).filter(i => i >= 0);
  assert.equal(d.spiel[lehrIdx.at(-1)], d.wer_fragt, "letztes Lehrpaar = Paar für „Wer fragt?“");
  assert.equal(d.druck.length, 3);
  assert.ok(d.druck.every(id => d.spiel.includes(id)));
});

test("Faktor ≥ 1,5, richtige Seite, keine Aufgabe doppelt", () => {
  const ids = d.kandidaten.flatMap(p => [p.a.id, p.b.id]);
  assert.equal(new Set(ids).size, ids.length);
  for (const p of d.kandidaten) {
    const hoch = Math.max(p.a.pct, p.b.pct), tief = Math.min(p.a.pct, p.b.pct);
    assert.ok(tief > 0 && hoch / tief >= 1.5, `${p.id}: Faktor ${hoch / tief}`);
    assert.equal(p.richtig, p.a.pct > p.b.pct ? "A" : "B");
    if (p.typ === "lehre") assert.ok(p.a.lehre && p.b.lehre, `${p.id}: Lehraufgaben`);
  }
});

test("Modell-Tipps für alle 15 vorhanden", () => {
  for (const p of d.kandidaten) {
    assert.ok(["A", "B"].includes(p.model_tip), `${p.id} model_tip`);
    assert.ok([1, 2, 3].includes(p.model_confidence), `${p.id} model_confidence`);
  }
  assert.ok(d.modell.modell && d.modell.datum && d.modell.prompt && d.modell.rohantwort);
});

test("10 Stichprobenwerte stimmen mit unabhängigem CSV-Auszug überein", () => {
  const alle = new Map([...d.top60, ...d.kandidaten.flatMap(p => [p.a, p.b])].map(a => [a.id, a.pct]));
  const ids = Object.keys(probe.werte).filter(k => !k.startsWith("coursework_"));
  assert.ok(ids.length >= 10);
  for (const id of ids) assert.equal(alle.get(id), probe.werte[id], `Aufgabe ${id}`);
  assert.equal(d.kopfzahlen.GLOBAL.use_case_coursework_pct, probe.werte.coursework_GLOBAL);
  assert.equal(d.kopfzahlen.DEU.use_case_coursework_pct, probe.werte.coursework_DEU);
});

test("Spieldatei enthält den aktuellen Datenstand", () => {
  const m = html.match(/<script id="aei-daten" type="application\/json">([\s\S]*?)<\/script>/);
  const e = JSON.parse(m[1]);
  assert.deepEqual(e.spiel, d.spiel);
  assert.equal(e.kandidaten.length, 15);
  assert.ok(!/fetch\(/.test(html), "kein Nachladen");
});
