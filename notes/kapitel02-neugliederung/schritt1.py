"""Commit 1: Kapitel 2 nach Variante B umordnen, nur Verschieben + Überschriften/IDs."""
import re, sys
A = open(sys.argv[2] if len(sys.argv) > 2 else 'kapitel02-alt.qmd', encoding='utf-8').read().split('\n')
def L(a, b): return '\n'.join(A[a-1:b])
def H(t): return t
teile = [
 H('# Grundbegriffe und vier Kompetenzen {#sec-grundbegriffe}'), L(2, 48),
 H('## Mit KI arbeiten: vier Kompetenzen {#sec-schemas}'), L(835, 839),
 L(870, 885), L(892, 910),        # ### Das 4D-Modell ohne Modalitäten
 H('### Wie dieses Kapitel und das Buch das Schema nutzen {#sec-4d-nutzung}'), L(912, 916),
 L(840, 869),                      # ### Kompetenzrahmen im Vergleich (wird in Commit 2 Kasten)
 H('## Grundbegriffe: Modell, Harness und Agent {#sec-definitionen}'), L(50, 69),
 H('### Was ein Sprachmodell tut {#sec-sprachmodell}'), L(203, 206),
 L(70, 190),                       # ### sec-harness
 H('## Delegation: Was übernimmt die KI? {#sec-delegation}'), L(191, 200),
 H('### Was die Modelle können – und was nicht {#sec-capabilities}'), L(592, 674),
 H('### Welches Setup: LLM, RAG oder Agent? {#sec-patterns-usage}'), L(248, 298),
 H('### Welches Modell? {#sec-model-choice}'), L(518, 590), L(725, 729),
 H('### Wer macht was: Arbeitsweisen von Centaur bis dunkle Fabrik {#sec-arbeitsweisen}'), L(675, 721), L(722, 724), L(886, 891), L(917, 929),
 H('## Description: Wie sage ich der KI, was ich will? {#sec-access}'), L(731, 833),
 H('## Discernment: Wie beurteile ich, was die KI liefert? {#sec-hallucinations}'), L(494, 516),
 H('## Diligence: Verantwortung, Offenlegung, Ressourcen {#sec-diligence}'), L(436, 443),
 H('### Ressourcenverbrauch der Modelle {#sec-energy}'), L(931, 948),
 H('## Vertiefung: Was im Modell und im Harness passiert {#sec-vertiefung}'),
 H('### Tokens, Zahlen, Aufmerksamkeit {#sec-gpt-bedeutung}'), L(206, 230), L(244, 246),
 H('### Blick ins Modell {#sec-blick-ins-modell}'), L(466, 493), L(231, 243),
 H('### Agenten in der Praxis: Skills und Werkzeuganschluss {#sec-agenten-praxis}'), L(300, 377),
 H('### Gedächtnis: Was ein Agent von einer Sitzung in die nächste mitnimmt {#sec-agenten-gedaechtnis}'), L(379, 435), L(444, 463),
 L(949, 991),
]
txt = '\n\n'.join(teile)
txt = re.sub(r'\n{3,}', '\n\n', txt).strip() + '\n'
open(sys.argv[1], 'w', encoding='utf-8').write(txt)
