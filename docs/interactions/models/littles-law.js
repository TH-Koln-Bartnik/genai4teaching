// Little's Law (L = λW) als reines Modell, ohne Oberfläche.
//
// Laiensicht: Wer jeden Monat zehn Flaschen Wein kauft und jede ein Jahr liegen
// lässt, hat im Mittel 120 Flaschen im Keller. Das Gesetz ist eine Bilanz
// (Little, 1961). Bilanzen stimmen aber nur über den ganzen Zeitraum; in einem
// kurzen Beobachtungsfenster kann die Gleichung deutlich verfehlt werden.
//
// Modell: eine Station, ein Bediener, Bearbeitung in Ankunftsreihenfolge (FIFO).
// Ankünfte zufällig (Poisson-Prozess) mit Rate λ; Bearbeitungszeit exponentiell
// ("exp", M/M/1) oder fest ("fest", M/D/1) mit Mittelwert `service`.
// Einheiten: Zeit in Stunden, `service` in Minuten (wie im Regler).
//
// Für jedes Fenster [0, t] gilt:
//   L̄(t)  = (1/t) · ∫₀ᵗ N(s) ds          zeitgemittelter Bestand
//   λ̂(t)  = Ankünfte in [0, t] / t        beobachtete Ankunftsrate
//   Ŵ(t)  = mittlere Verweilzeit der bis t abgeschlossenen Aufträge
// Ist das System zu Beginn und bei t leer, gilt L̄ = λ̂·Ŵ exakt. Sonst entsteht
// die Abweichung an den Rändern: Aufträge, die bei t noch im System sind, gehen
// in L̄ ein, aber nicht in Ŵ.
//
// Prüfwerte und Tests: tests/models.test.mjs

import { mulberry32, exponential } from "./rng.js";

export const ANNAHMEN = [
  "Eine Station, ein Bediener, Bearbeitung in Ankunftsreihenfolge.",
  "Ankünfte zufällig und unabhängig (Poisson-Prozess) mit Rate λ.",
  "Bearbeitungszeit exponentiell oder fest verteilt, Mittelwert wie eingestellt.",
  "Das System ist zu Beginn leer; Zeitpunkt 0 ist der Fensterbeginn.",
  "Ŵ zählt nur Aufträge, die im Fenster abgeschlossen wurden."
];

/**
 * Aufträge aus festen Listen durchrechnen (deterministisch, für Referenzszenarien
 * und den späteren Abgleich mit der R-Fassung).
 * @param {number[]} arrivals  Ankunftszeitpunkte in h, aufsteigend
 * @param {number[]} services  Bearbeitungsdauern in h
 * @returns {{arrival:number,start:number,departure:number}[]}
 */
export function runFifo(arrivals, services) {
  if (arrivals.length !== services.length) {
    throw new Error("runFifo: arrivals und services brauchen gleich viele Einträge.");
  }
  const jobs = [];
  let free = 0;
  for (let i = 0; i < arrivals.length; i++) {
    if (i > 0 && arrivals[i] < arrivals[i - 1]) {
      throw new Error("runFifo: Ankunftszeiten müssen aufsteigend sein.");
    }
    const start = Math.max(arrivals[i], free);
    const departure = start + services[i];
    jobs.push({ arrival: arrivals[i], start, departure });
    free = departure;
  }
  return jobs;
}

/**
 * Zufällige Ankünfte und Bearbeitungszeiten bis zum Horizont erzeugen.
 * Ankunft und Bearbeitung werden je Auftrag abwechselnd gezogen; ein längerer
 * Horizont verlängert deshalb nur die Folge, der Anfang bleibt gleich.
 */
export function generateJobs({ lambda, service, dist = "exp", horizon, seed = 1 }) {
  if (!(lambda > 0)) throw new Error("generateJobs: λ muss größer als 0 sein.");
  if (!(service > 0)) throw new Error("generateJobs: Bearbeitungszeit muss größer als 0 sein.");
  const rand = mulberry32(seed);
  const meanService = service / 60;
  const arrivals = [];
  const services = [];
  let t = 0;
  for (;;) {
    t += exponential(rand, 1 / lambda);
    const s = dist === "fest" ? meanService : exponential(rand, meanService);
    if (t > horizon) break;
    arrivals.push(t);
    services.push(s);
  }
  return runFifo(arrivals, services);
}

/** Kennzahlen für das Fenster [0, t]. */
export function windowStats(jobs, t) {
  if (!(t > 0)) throw new Error("windowStats: Fensterlänge muss größer als 0 sein.");
  let area = 0;          // ∫₀ᵗ N(s) ds in Auftrags-Stunden
  let arrived = 0;
  let completed = 0;
  let sojournSum = 0;
  let inSystem = 0;
  for (const j of jobs) {
    if (j.arrival > t) break;
    arrived++;
    area += Math.min(j.departure, t) - j.arrival;
    if (j.departure <= t) {
      completed++;
      sojournSum += j.departure - j.arrival;
    } else {
      inSystem++;
    }
  }
  const L = area / t;
  const lambdaHat = arrived / t;
  const W = completed > 0 ? sojournSum / completed : null;
  const lambdaW = W === null ? null : lambdaHat * W;
  const abweichung = lambdaW === null || L === 0 ? null : (lambdaW - L) / L;
  return { t, L, lambdaHat, W, lambdaW, abweichung, arrived, completed, inSystem };
}

/**
 * Hauptfunktion für Widget, Druckabbildung und Tests.
 * @param {object} p
 * @param {number} p.lambda   Ankünfte pro Stunde
 * @param {number} p.service  mittlere Bearbeitungszeit in Minuten
 * @param {"exp"|"fest"} [p.dist]
 * @param {number} p.fenster  Beobachtungsfenster in Stunden
 * @param {number} [p.seed]
 * @param {number} [p.punkte] Stützstellen des Verlaufs
 */
export function simulate({ lambda, service, dist = "exp", fenster, seed = 1, punkte = 200 }) {
  const rho = (lambda * service) / 60;
  const jobs = generateJobs({ lambda, service, dist, horizon: fenster, seed });
  const verlauf = [];
  for (let i = 1; i <= punkte; i++) {
    const t = (fenster * i) / punkte;
    const s = windowStats(jobs, t);
    verlauf.push({ t, L: s.L, lambdaW: s.lambdaW, abweichung: s.abweichung });
  }
  return {
    rho,
    stabil: rho < 1,
    hinweis: rho >= 1
      ? "Auslastung ab 100 %: Es gibt kein Gleichgewicht, die Schlange wächst ohne Grenze."
      : null,
    jobs,
    ende: windowStats(jobs, fenster),
    verlauf
  };
}

// Voreinstellungen (Konzept, Abschnitt 3). Fester Startwert je Szenario, damit
// Online-Fassung und Druckabbildung identisch ablaufen. Die Startwerte sind nicht
// auf einen Effekt hin ausgesucht, sondern typisch: Unter 400 Startwerten liegen
// 261 (ρ = 0,6) und 292 (ρ = 0,9) beim Median der mittleren Abweichung in der
// zweiten Fensterhälfte (S1 0,9 %, S2 3,8 %). S3 ist der Anfang von S1.
export const SZENARIEN = [
  { id: "S1", name: "S1 Mensa", lambda: 12, service: 3, dist: "exp", fensterMin: 480, seed: 261 },
  { id: "S2", name: "S2 Prüfungsamt in der Anmeldewoche", lambda: 6, service: 9, dist: "exp", fensterMin: 480, seed: 292 },
  { id: "S3", name: "S3 Kurzer Blick in die Mensa", lambda: 12, service: 3, dist: "exp", fensterMin: 20, seed: 261 }
];
