// Bullwhip-Effekt in einer vierstufigen Lieferkette als reines Modell, ohne Oberfläche.
//
// Laiensicht: Eine kleine Bewegung am Griff einer Peitsche wird an der Spitze zum
// großen Ausschlag. In einer Lieferkette schwanken die Bestellungen umso stärker, je
// weiter eine Stufe vom Endkunden entfernt ist, obwohl die Kundennachfrage kaum
// schwankt (Lee et al., 1997).
//
// Modell nach Chen et al. (1999, 2000); kein Code aus dem GPL-Paket bullwhipgame.
// Vier Stufen: Händler (1), Großhandel (2), Verteilzentrum (3), Fabrik (4).
// Je Periode t:
//   1. Stufe k erhält ihre Nachfrage d: Stufe 1 die Kundennachfrage D_t, Stufe k > 1
//      die Bestellung q^(k-1)_t ihres Kunden aus derselben Periode.
//   2. Prognose μ̂ = gleitender Mittelwert der letzten p Werte (einschließlich d).
//      Modus "getrennt": jede Stufe mittelt ihre eigene Nachfrage.
//      Modus "geteilt":  alle Stufen mitteln die Kundennachfrage D (geteilte Kassendaten).
//   3. Bestellgrenze y = L·μ̂ + z·√L·σ̂ (σ̂: Standardabweichung der letzten p
//      Prognosefehler). Für z = 0 deckt sie genau die Prognose über L Perioden.
//   4. Bestellung q = y − Bestandsposition (Bestand + offene Bestellungen − Rückstand).
//      Ohne negative Bestellungen: q = max(0, ·); der Überschuss bleibt dann liegen.
// Lieferzeit L wie bei Chen et al.: Eine Bestellung vom Ende der Periode t kommt zu
// Beginn der Periode t + L an (Chen et al., 1999, S. 423). Gezählt ist also die
// Überprüfungsperiode mit („L is the lead time plus 1“, ebd., S. 421).
//
// Prüfwerte (unabhängige Nachfrage, z = 0, negative Bestellungen zugelassen):
//   Händler:            Var(q¹)/Var(D) = 1 + 2L/p + 2L²/p²            (exakt)
//   geteilt, Stufe k:   Var(qᵏ)/Var(D) = 1 + 2kL/p + 2(kL)²/p²        (exakt)
//   getrennt, Stufe k:  Var(qᵏ)/Var(D) ≥ (1 + 2L/p + 2L²/p²)^k        (untere Schranke)
// Tests: tests/models.test.mjs

import { mulberry32 } from "./rng.js";

export const STUFEN = ["Händler", "Großhandel", "Verteilzentrum", "Fabrik"];

export const ANNAHMEN = [
  "Vier Stufen; jede bestellt einmal pro Periode bei der nächsten.",
  "Die Kundennachfrage schwankt zufällig und unabhängig um 100 Stück pro Periode (Normalverteilung, nicht unter 0).",
  "Jede Stufe prognostiziert mit dem gleitenden Mittelwert über p Perioden.",
  "Bestellgrenze: Prognose über die Lieferzeit L; ein fester Sicherheitsbestand ändert die Schwankung der Bestellungen nicht und ist weggelassen.",
  "Lieferzeit fest und für alle Stufen gleich; Lieferanten liefern immer vollständig.",
  "Negative Bestellungen bedeuten kostenlose Rücksendungen wie im Rechenmodell von Chen et al.",
  "Das Varianzverhältnis wird über 2000 Perioden gemessen, damit der Zufall das Ergebnis nicht bestimmt."
];

/** Standardnormalverteilte Zufallszahl (Box-Muller). */
export function normal(rand) {
  const u = 1 - rand();
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

/** Zufällige Kundennachfrage: unabhängig, normalverteilt, nicht unter 0. */
export function nachfrageZufall({ perioden, mittel = 100, schwankung = 10, seed = 1 }) {
  const rand = mulberry32(seed);
  const d = [];
  for (let t = 0; t < perioden; t++) d.push(Math.max(0, mittel + schwankung * normal(rand)));
  return d;
}

/** Deterministisches Referenzszenario: Sprung von `vor` auf `nach` ab Periode `ab`. */
export function nachfrageSprung({ perioden, vor = 100, nach = 120, ab = 10 }) {
  return Array.from({ length: perioden }, (_, t) => (t >= ab ? nach : vor));
}

/** Untere Schranke für den Händler (Chen et al., 2000). */
export function chenSchranke(L, p) {
  return 1 + (2 * L) / p + (2 * L * L) / (p * p);
}

/** Schranke für Stufe k (1–4) je nach Informationsmodus. */
export function schranke(L, p, k, info) {
  return info === "geteilt" ? chenSchranke(k * L, p) : chenSchranke(L, p) ** k;
}

const mittelwert = a => a.reduce((s, x) => s + x, 0) / a.length;

export function varianz(a) {
  if (a.length < 2) return 0;
  const m = mittelwert(a);
  return a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1);
}

/**
 * Lieferkette für eine gegebene Kundennachfrage durchrechnen.
 * @param {object} o
 * @param {number[]} o.nachfrage   Kundennachfrage je Periode
 * @param {number} o.L             Lieferzeit in Perioden (ganzzahlig, ≥ 1)
 * @param {number} o.p             Prognosefenster in Perioden (ganzzahlig, ≥ 1)
 * @param {"getrennt"|"geteilt"} [o.info]
 * @param {boolean} [o.negativ]    negative Bestellungen zulassen
 * @param {number} [o.z]           Sicherheitsfaktor (Chen et al.: z); 0 = ohne
 * @param {number} [o.mittel]      Ausgangszustand: Nachfrage vor Periode 0
 * @returns {{bestellungen:number[][], negativeBestellungen:number}}
 */
export function lieferkette({ nachfrage, L, p, info = "getrennt", negativ = true, z = 0, mittel = 100 }) {
  if (!(Number.isInteger(L) && L >= 1)) throw new Error("lieferkette: L muss eine ganze Zahl ≥ 1 sein.");
  if (!(Number.isInteger(p) && p >= 1)) throw new Error("lieferkette: p muss eine ganze Zahl ≥ 1 sein.");
  if (info !== "getrennt" && info !== "geteilt") throw new Error("lieferkette: info ist 'getrennt' oder 'geteilt'.");
  const K = STUFEN.length;
  // Ausgangszustand: eingeschwungen bei `mittel`, Bestandsposition auf der Bestellgrenze.
  const verlaufNachfrage = Array.from({ length: K }, () => Array(p).fill(mittel));
  const verlaufKunde = Array(p).fill(mittel);
  const fehler = Array.from({ length: K }, () => []);
  const position = Array(K).fill(L * mittel);
  const bestellungen = Array.from({ length: K }, () => []);
  let negativeBestellungen = 0;

  for (let t = 0; t < nachfrage.length; t++) {
    verlaufKunde.push(nachfrage[t]);
    for (let k = 0; k < K; k++) {
      const d = k === 0 ? nachfrage[t] : bestellungen[k - 1][t];
      const eigene = verlaufNachfrage[k];
      const quelle = info === "geteilt" ? verlaufKunde : eigene;
      // Prognosefehler: neuer Wert gegen die Prognose vor diesem Wert. (Die
      // Kundennachfrage dieser Periode steht schon in verlaufKunde, d noch nicht in eigene.)
      fehler[k].push(info === "geteilt"
        ? nachfrage[t] - mittelwert(verlaufKunde.slice(-p - 1, -1))
        : d - mittelwert(eigene.slice(-p)));
      eigene.push(d);
      const mu = mittelwert(quelle.slice(-p));
      const sigma = z > 0 ? Math.sqrt(varianz(fehler[k].slice(-p))) : 0;
      const grenze = L * mu + z * Math.sqrt(L) * sigma;
      position[k] -= d;
      let q = grenze - position[k];
      if (q < 0) {
        if (negativ) negativeBestellungen++;
        else q = 0;
      }
      position[k] += q;
      bestellungen[k].push(q);
    }
  }
  return { bestellungen, negativeBestellungen };
}

/**
 * Hauptfunktion für Widget, Druckabbildung und Tests.
 * Kurven: die ersten `perioden` Perioden. Varianzverhältnisse: dieselbe Zufallsfolge,
 * fortgesetzt über `lang` Perioden nach einer Einschwingzeit von `vorlauf` Perioden.
 */
export function simulate({ L, p, schwankung = 10, info = "getrennt", negativ = true, z = 0,
  seed = 1, perioden = 52, lang = 2000, vorlauf = 50 }) {
  const n = Math.max(perioden, vorlauf + lang);
  const nachfrage = nachfrageZufall({ perioden: n, schwankung, seed });
  const { bestellungen, negativeBestellungen } = lieferkette({ nachfrage, L, p, info, negativ, z });
  const varD = varianz(nachfrage.slice(vorlauf, vorlauf + lang));
  const verhaeltnis = STUFEN.map((stufe, k) => {
    const v = varianz(bestellungen[k].slice(vorlauf, vorlauf + lang));
    return { stufe, k: k + 1, wert: varD > 0 ? v / varD : null, schranke: schranke(L, p, k + 1, info) };
  });
  const verlauf = [];
  for (let t = 0; t < perioden; t++) {
    verlauf.push({ t: t + 1, stufe: "Kunde", menge: nachfrage[t] });
    STUFEN.forEach((stufe, k) => verlauf.push({ t: t + 1, stufe, menge: bestellungen[k][t] }));
  }
  const negImJahr = STUFEN.reduce((s, _, k) => s + bestellungen[k].slice(0, perioden).filter(q => q < 0).length, 0);
  return { verlauf, verhaeltnis, negativeBestellungen, negImJahr, varD };
}

// Voreinstellungen (Konzept, Abschnitt 4): Grundszenario, doppelte Lieferzeit,
// geteilte Kassendaten. Fester Startwert, damit Online-Fassung und Druckabbildung
// identisch ablaufen; alle drei nutzen dieselbe Kundennachfrage. Der Startwert ist
// nicht auf einen Effekt hin ausgesucht, sondern typisch: Unter 400 Startwerten liegt
// 71 beim Varianzverhältnis Fabrik/Kunde in den 52 gezeigten Perioden auf Rang 198
// (B1), 212 (B2) und 173 (B3), also jeweils nahe am Median.
export const SZENARIEN = [
  { id: "B1", name: "B1 Grundszenario", L: 2, p: 5, schwankung: 10, info: "getrennt", negativ: true, seed: 71 },
  { id: "B2", name: "B2 Lieferzeit verdoppelt", L: 4, p: 5, schwankung: 10, info: "getrennt", negativ: true, seed: 71 },
  { id: "B3", name: "B3 Kassendaten geteilt", L: 2, p: 5, schwankung: 10, info: "geteilt", negativ: true, seed: 71 }
];
