// Modellprüfung Semester-Simulator (Kap. 1): Rechnet das Lehrmodell die Studienwerte nach, und ist jede Stellgröße
// entweder an eine Quelle gebunden oder als Annahme mit Regler geführt?
// Laiensicht: Ein automatischer Abgleich, der Alarm schlägt, wenn jemand eine Zahl im Simulator ändert
// und sie danach nicht mehr zu den Studien passt, aus denen sie stammt.
// Aufruf im Repo-Wurzelordner: node --test tests/semester-simulator.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

const html = readFileSync("interactions/semester-simulator.html", "utf8");
const dom = new JSDOM(html, { runScripts: "dangerously", url: "https://example.org/semester-simulator.html" });
const S = dom.window.__sim;
const refs = new Set(JSON.parse(readFileSync("references.json", "utf8")).map(e => e.id));
const ohneAusstieg = { ...S.P, pRaus: 0 };
const lauf = (zuege, par = ohneAusstieg) => S.simuliere(zuege, par);
const zwoelf = z => Array(12).fill(z);
const nah = (ist, soll, tol, was) => assert.ok(Math.abs(ist - soll) <= tol, `${was}: ist ${ist}, soll ${soll} ± ${tol}`);

test("zwölf Wochen, 120 Studierende, fünf Züge", () => {
  assert.equal(S.WOCHEN, 12); assert.equal(S.N, 120); assert.equal(S.ZUEGE.length, 5);
});

test("jede Stellgröße hat eine Quelle aus references.json oder einen Regler", () => {
  const schluessel = { "Bastani et al. (2025)": "bastani2025", "Adesope et al. (2017)": "adesope2017", "Cepeda et al. (2006)": "cepeda2006" };
  for (const p of S.PARAMETER) {
    if (p.art === "quelle") {
      const k = Object.keys(schluessel).find(q => p.quelle.startsWith(q));
      assert.ok(k && refs.has(schluessel[k]), `Quelle fehlt: ${p.id}`);
      assert.ok(html.includes(k.replace(" et al. ", ", ").split(",")[0]), p.id);
    } else if (p.art === "bauart") {
      assert.ok(p.name.length > 30);
    } else {
      assert.equal(p.art, "annahme");
      assert.ok(p.min < p.max && p.schritt > 0 && p.min <= p.wert && p.wert <= p.max, `Regler fehlt: ${p.id}`);
    }
  }
});

test("Studienwerte stehen unverändert im Modell", () => {
  const w = Object.fromEntries(S.PARAMETER.filter(p => p.id).map(p => [p.id, p.wert]));
  assert.equal(w.exChat, -0.17); assert.equal(w.exTutor, 0); assert.equal(w.huChat, 0.48); assert.equal(w.huTutor, 1.27);
  assert.equal(w.gTest, 0.51); nah(w.spaced, 36.7 / 47.3, 1e-12, "Cepeda");
});

test("Bezugskurs ohne KI: Schnitt 60, Streuung 15", () => {
  const a = lauf(zwoelf("aufsicht"));
  nah(a.schnitt, 60, 0.01, "Schnitt");            // Deckel bei 100 Punkten kappt einzelne Spitzenwerte
  const sd = Math.sqrt(a.pers.reduce((s, q) => s + (q.wissen - a.schnitt) ** 2, 0) / 120);
  nah(sd, 15, 0.2, "Streuung");
});

test("Bastani: Chatbot frei −17 % in der Klausur, Tutor ohne Unterschied", () => {
  const a = lauf(zwoelf("aufsicht")).schnitt;
  nah(lauf(zwoelf("chat")).schnitt / a - 1, -0.17, 1e-9, "Chatbot");
  for (const pChat of [20, 35, 80, 100]) nah(lauf(zwoelf("chat"), { ...ohneAusstieg, pChat }).schnitt / a - 1, -0.17, 1e-9, `Chatbot bei ${pChat} % Abkürzern`);
  assert.equal(lauf(zwoelf("tutor")).schnitt, a);
});

test("Bastani: Übungsleistung +48 % mit Chatbot, +127 % mit Tutor", () => {
  const a = lauf(["aufsicht"]).wochen[0].hu;
  nah(lauf(["chat"]).wochen[0].hu / a - 1, 0.48, 1e-9, "Chatbot");
  nah(lauf(["tutor"]).wochen[0].hu / a - 1, 1.27, 1e-9, "Tutor");
  for (const hu0 of [15, 40]) nah(lauf(["tutor"], { ...ohneAusstieg, hu0 }).wochen[0].hu / lauf(["aufsicht"], { ...ohneAusstieg, hu0 }).wochen[0].hu - 1, 1.27, 1e-9, `Tutor bei hu0 = ${hu0}`);
});

test("Adesope und Cepeda: verteilte Abrufübungen zählen voll, Folgewochen × 0,78; zwölf verteilte ergäben g = 0,51", () => {
  nah(S.P.folge, 36.7 / 47.3, 0.005, "Faktor für Folgewochen");
  nah(lauf(zwoelf("abruf"), { ...ohneAusstieg, pPrivat: 0, folge: 1, bezug: 50 }).schnitt - 50, 0.51 * 15, 0.02, "zwölf verteilte = g × Streuung");
  const a = lauf(zwoelf("aufsicht")).schnitt, je = 0.51 * 15 / 12;
  const verteilt = lauf(Array.from({ length: 12 }, (_, i) => i % 2 ? "aufsicht" : "abruf"), { ...ohneAusstieg, pPrivat: 0 }).schnitt - a;
  const geballt = lauf([...Array(6).fill("abruf"), ...Array(6).fill("aufsicht")], { ...ohneAusstieg, pPrivat: 0 }).schnitt - a;
  nah(verteilt, 6 * je, 0.06, "verteilt");
  nah(geballt, je * (1 + 5 * 0.78), 0.06, "geballt");
  nah(lauf(zwoelf("abruf"), { ...ohneAusstieg, pPrivat: 0 }).schnitt - a, je * (1 + 11 * 0.78), 0.12, "zwölf am Stück");
});

test("gleiche Züge, gleiches Ergebnis (fester Zufallsstartwert)", () => {
  const z = S.STANDARD;
  assert.equal(JSON.stringify(S.simuliere(z).wochen), JSON.stringify(S.simuliere(z).wochen));
  assert.equal(S.simuliere(z).schnitt, S.simuliere(z).schnitt);
});

test("Standardlauf bleibt im Zeitkonto; niemand steigt vor Woche 3 oder in Woche 12 aus", () => {
  const h = S.STANDARD.reduce((s, z) => s + (S.P[S.ZUEGE.find(x => x.id === z).h] || 0), 0);
  assert.ok(h <= S.P.zeit * 12);
  const r = S.simuliere(zwoelf("chat"));
  assert.equal(r.wochen[0].raus + r.wochen[1].raus + r.wochen[11].raus, 0);
  assert.ok(r.angetreten < 120);
});

test("Kennzeichnung: Lehrmodell, keine Messung", () => {
  assert.ok(html.includes("Lehrmodell, keine Messung"));
  assert.ok(html.includes("Was dieses Modell annimmt"));
  assert.ok(!/\b(50|18|12)\b/.test(html.match(/function simuliere[\s\S]*?\n  }\n/)[0].replace(/WOCHEN/g, "")), "feste Zahl in simuliere()");
});
