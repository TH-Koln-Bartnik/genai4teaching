// Modelltests mit node:test (in Node.js eingebaut, nichts zu installieren).
// Ausführen im Repo-Wurzelordner:  node --test tests/models.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  runFifo, generateJobs, windowStats, simulate, SZENARIEN
} from "../interactions/models/littles-law.js";

const close = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

test("Little's Law: Handrechnung an zwei Aufträgen", () => {
  // Auftrag 1 kommt bei 0 h, dauert 2 h; Auftrag 2 kommt bei 1 h, dauert 1 h, wartet bis 2 h.
  const jobs = runFifo([0, 1], [2, 1]);
  assert.deepEqual(jobs.map(j => j.departure), [2, 3]);
  // Fenster [0, 3]: System am Ende leer -> exakt. Fläche 2 + 2 = 4, L = 4/3, λ̂ = 2/3, Ŵ = 2.
  const a = windowStats(jobs, 3);
  assert.ok(close(a.L, 4 / 3) && close(a.lambdaHat, 2 / 3) && close(a.W, 2));
  assert.ok(close(a.L, a.lambdaW));
  // Fenster [0, 2,5]: Auftrag 2 noch im System. Fläche 2 + 1,5 = 3,5, L = 1,4; λ̂ = 0,8; Ŵ = 2 -> λ̂Ŵ = 1,6.
  const b = windowStats(jobs, 2.5);
  assert.ok(close(b.L, 1.4) && close(b.lambdaW, 1.6));
  assert.ok(close(b.abweichung, 1.6 / 1.4 - 1));
});

test("Little's Law: exakte Gleichheit, wenn das System an beiden Fensterrändern leer ist", () => {
  for (const seed of [1, 2, 3, 261, 292]) {
    const jobs = generateJobs({ lambda: 12, service: 3, horizon: 40, seed });
    let geprueft = 0;
    // Leerlaufzeitpunkte: kurz vor jeder Ankunft, deren Vorgänger schon fertig ist.
    for (let i = 1; i < jobs.length; i++) {
      if (jobs[i - 1].departure < jobs[i].arrival) {
        const t = (jobs[i - 1].departure + jobs[i].arrival) / 2;
        const s = windowStats(jobs, t);
        assert.equal(s.inSystem, 0);
        assert.ok(close(s.L, s.lambdaW, 1e-9), `seed ${seed}, t ${t}: ${s.L} vs ${s.lambdaW}`);
        geprueft++;
      }
    }
    assert.ok(geprueft > 50, "zu wenige Leerlaufzeitpunkte geprüft");
  }
});

test("Little's Law: Abweichung unter 2 % bei ρ = 0,6 und 40 h (Szenario-Startwert und 95 % von 100 Startwerten)", () => {
  const p = { lambda: 12, service: 3, fenster: 40 };
  assert.ok(Math.abs(simulate({ ...p, seed: 261 }).ende.abweichung) < 0.02);
  let unter = 0;
  for (let seed = 1; seed <= 100; seed++) {
    if (Math.abs(simulate({ ...p, seed }).ende.abweichung) < 0.02) unter++;
  }
  assert.ok(unter >= 95, `nur ${unter} von 100 unter 2 %`);
});

test("Little's Law: Warnung bei ρ ≥ 1, keine Warnung darunter", () => {
  const voll = simulate({ lambda: 20, service: 3, fenster: 8, seed: 1 });
  assert.ok(close(voll.rho, 1));
  assert.equal(voll.stabil, false);
  assert.match(voll.hinweis, /kein Gleichgewicht/);
  const ueber = simulate({ lambda: 30, service: 3, fenster: 8, seed: 1 });
  assert.equal(ueber.stabil, false);
  // Bei Überlast wächst die Schlange: am Ende sind viele Aufträge im System.
  assert.ok(ueber.ende.inSystem > 50);
  assert.equal(simulate({ lambda: 12, service: 3, fenster: 8, seed: 1 }).hinweis, null);
});

test("Little's Law: gleicher Startwert, gleiches Ergebnis; anderer Startwert, anderer Verlauf", () => {
  const p = { lambda: 12, service: 3, fenster: 8 };
  assert.deepEqual(simulate({ ...p, seed: 7 }), simulate({ ...p, seed: 7 }));
  assert.notDeepEqual(simulate({ ...p, seed: 7 }).verlauf, simulate({ ...p, seed: 8 }).verlauf);
});

test("Little's Law: längeres Fenster verlängert nur die Folge (S3 ist der Anfang von S1)", () => {
  const kurz = generateJobs({ lambda: 12, service: 3, horizon: 1 / 3, seed: 261 });
  const lang = generateJobs({ lambda: 12, service: 3, horizon: 8, seed: 261 });
  assert.deepEqual(kurz, lang.slice(0, kurz.length));
  const s1 = SZENARIEN.find(s => s.id === "S1"), s3 = SZENARIEN.find(s => s.id === "S3");
  assert.equal(s1.seed, s3.seed);
});

test("Little's Law: Parameter ändern den Verlauf, nicht nur die Zahlen (rechnet statt abzuspielen)", () => {
  const a = simulate({ lambda: 12, service: 3, fenster: 8, seed: 5 });
  const b = simulate({ lambda: 12, service: 6, fenster: 8, seed: 5 });
  assert.ok(b.ende.L > a.ende.L, "längere Bearbeitung muss den Bestand erhöhen");
  const c = simulate({ lambda: 12, service: 3, dist: "fest", fenster: 40, seed: 5 });
  // M/D/1 hat bei gleicher Auslastung kürzere Wartezeiten als M/M/1 (Pollaczek-Chintschin).
  const d = simulate({ lambda: 12, service: 3, dist: "exp", fenster: 40, seed: 5 });
  assert.ok(c.ende.W < d.ende.W);
});

test("Little's Law: Grenzfall λ nahe null", () => {
  const r = simulate({ lambda: 0.01, service: 3, fenster: 1, seed: 1 });
  assert.equal(r.ende.arrived, 0);
  assert.equal(r.ende.L, 0);
  assert.equal(r.ende.lambdaW, null);
  assert.throws(() => simulate({ lambda: 0, service: 3, fenster: 1 }));
});

test("Little's Law: Langzeitmittel trifft die M/M/1-Formel L = ρ/(1−ρ)", () => {
  // 2000 h bei ρ = 0,6: theoretisch L = 1,5. Toleranz 10 %, weil Zufall.
  const r = simulate({ lambda: 12, service: 3, fenster: 2000, seed: 3, punkte: 1 });
  assert.ok(Math.abs(r.ende.L / 1.5 - 1) < 0.1, `L = ${r.ende.L}`);
});

// ---------------------------------------------------------------------------
// Bullwhip-Modell (Schritt 2). Prüfwerte nach Chen et al. (1999, 2000).
import * as BW from "../interactions/models/bullwhip.js";

const relNah = (a, b, tol) => Math.abs(a / b - 1) < tol;

test("Bullwhip: Handrechnung am Nachfragesprung 100 → 120 (L = 2, p = 4)", () => {
  // Händler: q = D + (L/p)(D_t − D_{t−p}) = 120 + 0,5 · 20 = 130 für p Perioden, dann 120.
  // Großhandel: 130 + 0,5 · 30 = 145, dann 120 + 0,5 · (120 − 130) = 115, dann 120.
  const { bestellungen } = BW.lieferkette({ nachfrage: BW.nachfrageSprung({ perioden: 22 }), L: 2, p: 4 });
  assert.deepEqual(bestellungen[0].slice(8, 16), [100, 100, 130, 130, 130, 130, 120, 120]);
  assert.deepEqual(bestellungen[1].slice(8, 20), [100, 100, 145, 145, 145, 145, 115, 115, 115, 115, 120, 120]);
  assert.deepEqual(bestellungen[2].slice(10, 12), [167.5, 167.5]);
  assert.deepEqual(bestellungen[3].slice(10, 15), [201.25, 201.25, 201.25, 201.25, 66.25]);
  // Ohne Sprung bestellt jede Stufe genau die Nachfrage.
  const ruhig = BW.lieferkette({ nachfrage: Array(30).fill(100), L: 3, p: 6 });
  assert.ok(ruhig.bestellungen.every(r => r.every(q => q === 100)));
});

test("Bullwhip: Händler trifft die Chen-Formel 1 + 2L/p + 2L²/p² (auf 4 %)", () => {
  for (const [L, p] of [[1, 10], [2, 5], [4, 5], [6, 20]]) {
    const r = BW.simulate({ L, p, seed: 3, lang: 40000 });
    assert.ok(relNah(r.verhaeltnis[0].wert, BW.chenSchranke(L, p), 0.04), `L ${L}, p ${p}: ${r.verhaeltnis[0].wert}`);
  }
});

test("Bullwhip: geteilte Kassendaten treffen 1 + 2kL/p + 2(kL)²/p² auf jeder Stufe (auf 4 %)", () => {
  for (const [L, p] of [[2, 5], [1, 10]]) {
    const r = BW.simulate({ L, p, info: "geteilt", seed: 4, lang: 40000 });
    for (const v of r.verhaeltnis) {
      assert.ok(relNah(v.wert, BW.schranke(L, p, v.k, "geteilt"), 0.04), `L ${L}, p ${p}, Stufe ${v.k}: ${v.wert}`);
    }
  }
});

test("Bullwhip: getrennt steigt das Verhältnis stromaufwärts und liegt nicht unter der Produktschranke", () => {
  for (const seed of [1, 2, 71]) {
    const r = BW.simulate({ L: 2, p: 5, seed, lang: 20000 });
    const w = r.verhaeltnis.map(v => v.wert);
    for (let k = 1; k < 4; k++) assert.ok(w[k] > w[k - 1], `seed ${seed}: ${w}`);
    r.verhaeltnis.forEach(v => assert.ok(v.wert >= 0.97 * v.schranke, `seed ${seed}, Stufe ${v.k}: ${v.wert} < ${v.schranke}`));
  }
});

test("Bullwhip: geteilte Kassendaten dämpfen, beseitigen den Effekt aber nicht", () => {
  const a = BW.simulate({ L: 2, p: 5, info: "getrennt", seed: 71 }).verhaeltnis;
  const b = BW.simulate({ L: 2, p: 5, info: "geteilt", seed: 71 }).verhaeltnis;
  assert.ok(relNah(a[0].wert, b[0].wert, 1e-12), "Händler hat in beiden Modi dieselben Daten");
  for (let k = 1; k < 4; k++) {
    assert.ok(b[k].wert < a[k].wert, `Stufe ${k + 1}`);
    assert.ok(b[k].wert > 1, `Stufe ${k + 1} bleibt verstärkend`);
  }
});

test("Bullwhip: Lieferzeit und Prognosefenster wirken in die erwartete Richtung", () => {
  const fabrik = o => BW.simulate({ p: 5, seed: 9, ...o }).verhaeltnis[3].wert;
  assert.ok(fabrik({ L: 4 }) > fabrik({ L: 2 }), "längere Lieferzeit verstärkt");
  assert.ok(fabrik({ L: 2, p: 15 }) < fabrik({ L: 2, p: 5 }), "längeres Prognosefenster dämpft");
});

test("Bullwhip: Sicherheitsfaktor z > 0 erhöht die Schwankung (Schranke gilt dann als untere Grenze)", () => {
  const r = BW.simulate({ L: 2, p: 5, z: 2, seed: 3, lang: 20000 });
  assert.ok(r.verhaeltnis[0].wert > BW.chenSchranke(2, 5));
});

test("Bullwhip: ohne negative Bestellungen gibt es keine, mit ihnen bei langer Lieferzeit schon", () => {
  const an = BW.simulate({ L: 4, p: 5, negativ: true, seed: 71 });
  const aus = BW.simulate({ L: 4, p: 5, negativ: false, seed: 71 });
  assert.ok(an.negativeBestellungen > 0 && an.negImJahr > 0);
  assert.equal(aus.negativeBestellungen, 0);
  assert.ok(aus.verlauf.every(d => d.menge >= 0));
  assert.ok(aus.verhaeltnis[3].wert < an.verhaeltnis[3].wert, "Rücksendungen verstärken die Fabrikschwankung");
});

test("Bullwhip: gleicher Startwert, gleiches Ergebnis; Parameter ändern den Verlauf", () => {
  const p = { L: 2, p: 5, seed: 71 };
  assert.deepEqual(BW.simulate(p), BW.simulate(p));
  assert.notDeepEqual(BW.simulate(p).verlauf, BW.simulate({ ...p, seed: 72 }).verlauf);
  const fabrikJahr = r => r.verlauf.filter(d => d.stufe === "Fabrik").map(d => d.menge);
  assert.notDeepEqual(fabrikJahr(BW.simulate(p)), fabrikJahr(BW.simulate({ ...p, L: 4 })));
  // Die Kundennachfrage hängt nur vom Startwert ab, nicht von L, p oder dem Modus.
  const kunde = r => r.verlauf.filter(d => d.stufe === "Kunde").map(d => d.menge);
  assert.deepEqual(kunde(BW.simulate(p)), kunde(BW.simulate({ ...p, L: 5, p: 12, info: "geteilt" })));
});

test("Bullwhip: Grenzfälle und Eingabeprüfung", () => {
  const r = BW.simulate({ L: 2, p: 5, schwankung: 0, seed: 1 });
  assert.ok(r.verlauf.every(d => d.menge === 100), "ohne Schwankung bestellt jede Stufe 100");
  assert.ok(r.verhaeltnis.every(v => v.wert === null));
  assert.throws(() => BW.simulate({ L: 0, p: 5 }));
  assert.throws(() => BW.simulate({ L: 2, p: 2.5 }));
  assert.throws(() => BW.simulate({ L: 2, p: 5, info: "zentral" }));
  assert.ok(BW.SZENARIEN.every(s => s.seed === BW.SZENARIEN[0].seed), "alle Szenarien mit derselben Kundennachfrage");
});
