// Tests für das Detektor-Duell (Kap. 5): Spieltexte, Herkunft, Python/JS-Gleichheit, Trennung von Training und Spiel.
// Ausführen: node --test tests/detektor-duell.test.mjs
// Optional mit Volltexten der menschlichen Quellen (liegen nicht im Repo):
//   DETEKTOR_QUELLEN=/pfad/quellen-spieltexte.json node --test tests/detektor-duell.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import vm from "node:vm";

const lies = p => JSON.parse(readFileSync(p, "utf8"));
const spiel = lies("_src/detektor/spieltexte.json");
const modell = lies("_src/detektor/modell.json");
const pruef = lies("_src/detektor/pruef-texte.json");
const ki = readFileSync("_src/detektor/ki-essays.jsonl", "utf8").trim().split("\n").map(z => JSON.parse(z));
const html = readFileSync("interactions/detektor-duell.html", "utf8");

const kernQuelle = html.match(/<script id="detektor-kern">([\s\S]*?)<\/script>/)[1];
const kontext = { module: { exports: {} } };
vm.createContext(kontext);
vm.runInContext(kernQuelle, kontext);
const Kern = kontext.module.exports;
const norm = t => t.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();

test("zwölf Spielauszüge mit Herkunft: Runde 1 vier Mensch, vier KI; Runde 2 vier Mensch", () => {
  assert.equal(spiel.runde1.length, 8);
  assert.equal(spiel.runde1.filter(e => e.herkunft === "Mensch").length, 4);
  assert.equal(spiel.runde1.filter(e => e.herkunft === "KI").length, 4);
  assert.equal(spiel.runde2.length, 4);
  assert.ok(spiel.runde2.every(e => e.herkunft === "Mensch"));
  assert.equal(spiel.runde2.filter(e => e.aufgabe === "TOEFL").length, 2);
  for (const e of [...spiel.runde1, ...spiel.runde2, ...spiel.druck]) {
    for (const f of ["herkunft", "quelle", "id", "aufgabe_de", "text"]) assert.ok(e[f], `${e.id}: ${f} fehlt`);
  }
});

test("eingebettete Daten im Spiel entsprechen der Skript-Ausgabe", () => {
  const d = JSON.parse(html.match(/<script type="application\/json" id="detektor-daten">([\s\S]*?)<\/script>/)[1]);
  assert.deepEqual(d.runde1, spiel.runde1);
  assert.deepEqual(d.runde2, spiel.runde2);
  assert.deepEqual(d.modell.gewichte, modell.gewichte);
  assert.equal(d.modell.achsenabschnitt, modell.achsenabschnitt);
});

test("Python- und JS-Rechnung identisch (20 Texte, Toleranz 1e-6)", () => {
  assert.equal(pruef.length, 20);
  for (const p of pruef) {
    const f = Kern.merkmale(p.text, modell);
    f.forEach((v, i) => assert.ok(Math.abs(v - p.merkmale[i]) < 1e-6, `Merkmal ${modell.merkmale[i]}: ${v} vs. ${p.merkmale[i]}`));
    assert.ok(Math.abs(Kern.pKI(p.text, modell) - p.p_ki) < 1e-6);
  }
});

test("KI-Auszüge stehen wörtlich in ki-essays.jsonl, Prüfsummen stimmen", () => {
  const nach = Object.fromEntries(ki.map(x => [x.id, x]));
  assert.equal(ki.length, 40);
  for (const x of ki) assert.equal(createHash("sha256").update(x.text, "utf8").digest("hex"), x.sha256);
  for (const e of [...spiel.runde1, ...spiel.druck].filter(e => e.herkunft === "KI")) {
    assert.ok(nach[e.id], e.id);
    assert.ok(norm(nach[e.id].text).startsWith(e.text), `${e.id} nicht wörtlich`);
  }
});

test("Spieltexte nicht im Training", () => {
  const train = new Set([...modell.train_ids_mensch, ...modell.train_ids_ki]);
  for (const e of [...spiel.runde1, ...spiel.runde2, ...spiel.druck]) assert.ok(!train.has(e.id), `${e.id} im Training`);
  for (const e of [...spiel.runde1, ...spiel.druck].filter(e => e.herkunft === "KI")) assert.ok(modell.halt_ids_ki.includes(e.id));
});

const Q = process.env.DETEKTOR_QUELLEN;
test("menschliche Auszüge wörtlich im Quelldatensatz", { skip: !(Q && existsSync(Q)) && "DETEKTOR_QUELLEN nicht gesetzt" }, () => {
  const q = lies(Q);
  for (const e of [...spiel.runde1, ...spiel.runde2, ...spiel.druck].filter(e => e.herkunft === "Mensch")) {
    assert.ok(q[e.id], e.id);
    assert.ok(norm(q[e.id]).startsWith(e.text), `${e.id} nicht wörtlich`);
  }
});
