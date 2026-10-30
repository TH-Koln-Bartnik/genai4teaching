// Zufallsgenerator mit Startwert (mulberry32, gemeinfrei; Tommy Ettinger 2017).
// Laiensicht: ein Würfelbecher mit nummerierter Wurfliste. Dieselbe Nummer (seed)
// ergibt dieselbe Folge von Würfen, deshalb sieht ein Szenario online, im Druck
// und im Test identisch aus.
// Rückgabe: Funktion, die bei jedem Aufruf eine Zahl in [0, 1) liefert.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Exponentialverteilte Zufallszahl mit Mittelwert `mean` (Inversionsmethode).
export function exponential(rand, mean) {
  return -mean * Math.log(1 - rand());
}
