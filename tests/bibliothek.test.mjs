// Tests für die Bibliothek der Prompts (S3, Kap. 4.1).
// Laiensicht: Diese Prüfungen laufen ohne Browser und ohne die große Quelltabelle. Sie
// vergleichen die Daten im Element mit einem unabhängig erzeugten Zweitauszug und prüfen,
// ob jedes Buch im richtigen Regal steht und jede Aufgabe laut O*NET zu ihrem Beruf gehört.
// Aufruf: node --test tests/bibliothek.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const D = JSON.parse(readFileSync("interactions/data/aei-bibliothek.json", "utf8"));
const S = JSON.parse(readFileSync("tests/fixtures/aei-bibliothek-stichprobe.json", "utf8"));
const html = readFileSync("interactions/bibliothek-der-prompts.html", "utf8");
const buecher = D.regale.flatMap((r) => r.buecher.map((b) => ({ ...b, regal: r.soc })));

test("22 Regale, eindeutige Ränge 1–22, Bildungsregal vorhanden", () => {
  assert.equal(D.regale.length, 22);
  assert.deepEqual(D.regale.map((r) => r.rang).sort((a, b) => a - b), [...Array(22)].map((_, i) => i + 1));
  assert.deepEqual(D.regale.map((r) => r.rang_deu).sort((a, b) => a - b), [...Array(22)].map((_, i) => i + 1));
  assert.ok(D.regale.find((r) => r.soc === D.eigenes_regal));
});

test("Regale sind absteigend nach Anteil sortiert", () => {
  const w = D.regale.map((r) => r.pct);
  for (let i = 1; i < w.length; i++) assert.ok(w[i - 1] >= w[i]);
});

test("jedes Buch steht im Regal seiner Hauptgruppe; Anteile ≥ 0; höchstens 40 Bücher plus Sammelbuch", () => {
  for (const b of buecher) {
    assert.ok(b.pct >= 0);
    if (b.soc) assert.equal(b.soc.slice(0, 2), b.regal, `${b.soc} in Regal ${b.regal}`);
  }
  for (const r of D.regale) {
    assert.ok(r.buecher.filter((b) => b.soc).length <= 40);
    assert.ok(r.buecher.filter((b) => !b.soc).length <= 1);
  }
});

test("Prüfsumme ausgewiesen, nicht ausgeglichen (Abweichung ≤ 0,1 Prozentpunkte)", () => {
  for (const r of D.regale) {
    const summe = Math.round(100 * r.buecher.reduce((s, b) => s + b.pct, 0)) / 100;
    assert.ok(Math.abs(summe - r.summe_berufe) < 0.011, `Regal ${r.soc}: ${summe} vs. ${r.summe_berufe}`);
    assert.ok(Math.abs(r.pct - r.summe_berufe) <= 0.1, `Regal ${r.soc}: ${r.pct} vs. ${r.summe_berufe}`);
  }
});

test("Stichprobe gleich dem unabhängigen Zweitauszug (Python csv)", () => {
  assert.equal(D.quelle.monat, S.monat);
  let n = 0;
  for (const [soc, v] of Object.entries(S.berufe)) { assert.equal(buecher.find((b) => b.soc === soc).pct, v, soc); n++; }
  for (const [k, v] of Object.entries(S.regale)) {
    const [geo, soc] = k.split(":"); const r = D.regale.find((x) => x.soc === soc);
    assert.equal(geo === "GLOBAL" ? r.pct : r.pct_deu, v, k); n++;
  }
  for (const [id, v] of Object.entries(S.aufgaben)) {
    const a = buecher.flatMap((b) => b.aufgaben).find((x) => x.id === id);
    assert.equal(a.pct, v, id); n++;
  }
  assert.ok(n >= 10);
});

test("jede Aufgabe gehört laut O*NET Task Statements zu ihrem Beruf", () => {
  for (const b of buecher) for (const a of b.aufgaben) {
    assert.ok(S.aufgabe_beruf[a.id]?.includes(b.soc), `Aufgabe ${a.id} nicht bei ${b.soc}`);
    assert.equal(a.berufe, S.aufgabe_beruf[a.id].length);
  }
});

test("Aufgaben je Buch absteigend, höchstens 5, alle über 0,00 %", () => {
  for (const b of buecher) {
    assert.ok(b.aufgaben.length <= 5);
    for (let i = 0; i < b.aufgaben.length; i++) {
      assert.ok(b.aufgaben[i].pct > 0);
      if (i) assert.ok(b.aufgaben[i - 1].pct >= b.aufgaben[i].pct);
    }
  }
});

test("alles übersetzt; Berufe ≤ 6 Wörter, Aufgaben ≤ 12 Wörter", () => {
  const woerter = (t) => t.trim().split(/\s+/).length;
  for (const r of D.regale) assert.notEqual(r.name, r.name_en, r.soc);
  for (const b of buecher.filter((x) => x.soc)) {
    assert.ok(woerter(b.name) <= 6, `${b.soc}: ${b.name}`);
    for (const a of b.aufgaben) assert.ok(woerter(a.text) <= 12, `${a.id}: ${a.text}`);
  }
});

test("Element enthält genau diese Daten, läuft offline und ist ≤ 1,5 MB", () => {
  const m = html.match(/<script type="application\/json" id="daten">([\s\S]*?)<\/script>/);
  const eingebettet = JSON.parse(m[1]);
  assert.deepEqual(eingebettet.regale, D.regale);
  assert.ok(Buffer.byteLength(html) <= 1.5 * 1024 * 1024);
  assert.ok(!/\bfetch\(|https?:\/\/[^"'\s]*\.(js|css)["']/.test(html.replace(/<script type="text\/plain"[\s\S]*?<\/script>/, "")), "kein Nachladen");
});
