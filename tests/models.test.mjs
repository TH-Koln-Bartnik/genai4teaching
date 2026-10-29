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
