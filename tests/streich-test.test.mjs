// Konsistenzprüfung Streich-Test (Kap. 2.4.1): Element, Druckkasten und Lösung gegen notes/streich-test/urteile.md.
// Laiensicht: Ein automatischer Abgleich, der Alarm schlägt, wenn eine Begründung im Element
// anders lautet als in der Urteils-Tabelle oder eine Wortzahl nicht stimmt.
// Aufruf im Repo-Wurzelordner: node --test tests/streich-test.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const md = readFileSync("notes/streich-test/urteile.md", "utf8");
const tabelle = md.split("\n").filter(z => /^\| \d+ \|/.test(z)).map(z => {
  const [nr, text, herkunft, urteil, marke, quellen, zitat, begruendung, neu] = z.trim().replace(/^\||\|$/g, "").split(" | ").map(s => s.trim());
  return { nr: +nr, text: text.replace(/<br>/g, "\n"), herkunft, urteil, marke, quellen: quellen.split(";").map(s => s.trim()), zitat, begruendung, neu };
});
const html = readFileSync("interactions/streich-test-prompting.html", "utf8");
const D = JSON.parse(html.match(/\/\*DATEN-START\*\/(.*?)\/\*DATEN-ENDE\*\//s)[1]);
const druck = readFileSync("_einbau/streich-test-druck.qmd", "utf8");
const loesung = readFileSync("_einbau/streich-test-loesung.qmd", "utf8");
const refs = new Set(JSON.parse(readFileSync("references.json", "utf8")).map(e => e.id));
const woerter = t => t.split(/\s+/).filter(w => /[0-9A-Za-zÄÖÜäöüß]/.test(w)).length;

test("zehn Zeilen, höchstens zwei ergänzt", () => {
  assert.equal(tabelle.length, 10);
  assert.ok(tabelle.filter(z => z.herkunft === "ergänzt").length <= 2);
});

test("Element entspricht der Urteils-Tabelle", () => {
  assert.equal(D.zeilen.length, tabelle.length);
  for (const z of tabelle) {
    const e = D.zeilen.find(x => x.nr === z.nr);
    for (const k of ["text", "herkunft", "urteil", "marke", "zitat", "begruendung", "neu"]) assert.equal(e[k], z[k], `Zeile ${z.nr}, Feld ${k}`);
    assert.deepEqual(e.quellen, z.quellen);
  }
});

test("Originalzeilen stehen wörtlich im alten Prompt, ergänzte nicht", () => {
  for (const z of tabelle) for (const teil of z.text.split("\n"))
    assert.equal(D.alt.includes(teil), z.herkunft === "Original", `Zeile ${z.nr}`);
});

test("Wortzahlen stimmen mit der Zählregel überein", () => {
  assert.equal(woerter(D.alt), D.woerter_alt);
  assert.equal(woerter(D.neu), D.woerter_neu);
  assert.ok(D.woerter_neu < D.woerter_alt);
});

test("Druckkasten und Lösung enthalten jede Zeile bzw. Begründung", () => {
  for (const z of tabelle) {
    assert.ok(druck.includes(`\n${z.nr}. & `), `Druck Zeile ${z.nr}`);
    assert.ok(loesung.includes(z.begruendung), `Lösung Zeile ${z.nr}`);
  }
  assert.ok(loesung.includes(`${D.woerter_neu} statt ${D.woerter_alt} Wörter`));
  assert.ok(druck.includes("#sec-streichtest") && druck.includes("qr-streich-test.png"));
});

test("alle Quellenschlüssel sind in references.json", () => {
  for (const z of tabelle) for (const q of z.quellen) assert.ok(refs.has(q), q);
  for (const q of ["richland2009", "butterfield2001"]) assert.ok(refs.has(q), q);
});

test("Making-of nennt die richtige Zahl Labor-Zeilen", () => {
  const n = tabelle.filter(z => z.marke === "Labor-Doku").length;
  const wort = ["null", "eine", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn"][n];
  assert.ok(html.includes(`bei ${wort} von zehn Zeilen`), `erwartet „bei ${wort} von zehn Zeilen“`);
});

test("keine doppelten Schlüssel in references.json (wichtig beim Rebase nach Sitzung A)", () => {
  const ids = JSON.parse(readFileSync("references.json", "utf8")).map(e => e.id);
  const doppelt = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert.deepEqual(doppelt, []);
});
