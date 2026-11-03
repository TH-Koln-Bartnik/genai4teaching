"""Phase 1 der neuen Gliederung (04.11.2026): Abschnitte wörtlich an ihren neuen Ort verschieben.

Plan: claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md, Abschnitt 2.
Das Skript schneidet die alten Kapiteldateien an Überschriften und wenigen Textmarken in
Stücke und setzt sie in sieben neuen Dateien zusammen. Es ändert keinen Fließtext; es passt
nur Überschriftenebenen an, setzt neue Kapiteltitel und fügt drei neue Abschnittsüberschriften
ein. Prüfung am Ende: Jede Nicht-Überschriftenzeile der alten Dateien steht genau so oft in
den neuen Dateien wie vorher (Multimenge der Zeilen gleich).

Aufruf (im Repo-Wurzelverzeichnis, auf dem Stand vor dem Umzug): python3 scripts/umzug/umzug_phase1.py
"""
import collections
import re
import subprocess
import sys

ALT = {
    "k1": "kapitel01.qmd",
    "k2": "kapitel02.qmd",
    "k3": "kapitel03.qmd",
    "k4": "kapitel04.qmd",
    "k5": "kapitel05.qmd",
    "k6": "kapitel06-fallbeispiele.qmd",
    "aA": "kapitel07-appendix02-prompt-sammlung.qmd",
}
NEU = {
    "n1": "kapitel01-einleitung.qmd",
    "n2": "kapitel02-grundlagen.qmd",
    "n3": "kapitel03-automation.qmd",
    "n4": "kapitel04-lernmechanismen.qmd",
    "n5": "kapitel05-4d-phasen.qmd",
    "n6": "kapitel06-rollen.qmd",
    "n7": "kapitel07-artefakte.qmd",
}

L = {k: open(f, encoding="utf-8").read().split("\n") for k, f in ALT.items()}
for k in L:  # letzte Zeile leer (Datei endet mit Zeilenumbruch) – nicht als Inhalt führen
    if L[k] and L[k][-1] == "":
        L[k].pop()

HEAD = re.compile(r"^(#{1,6}) ")


def ueberschriften(zeilen):
    """Zeilennummern (0-basiert) aller Überschriften außerhalb von Codeblöcken."""
    out, code = [], False
    for i, z in enumerate(zeilen):
        if z.startswith("```"):
            code = not code
            continue
        if not code and HEAD.match(z):
            out.append(i)
    return out


H = {k: ueberschriften(v) for k, v in L.items()}


def finde(k, muster, ab=0):
    """Erste Zeile ab `ab`, die mit `muster` beginnt (Überschrift per ID oder Textanfang)."""
    for i in range(ab, len(L[k])):
        z = L[k][i]
        if z.startswith(muster) or ("{#" + muster + "}" in z or "{#" + muster + " " in z):
            return i
    sys.exit(f"Marke nicht gefunden: {k} {muster}")


def bis_naechste(k, i):
    """Ende (exklusiv) des Abschnitts ab Überschrift i: nächste Überschrift beliebiger Ebene."""
    for h in H[k]:
        if h > i:
            return h
    return len(L[k])


def ebene(z):
    m = HEAD.match(z)
    return len(m.group(1)) if m else 0


def stueck(k, a, b, neue_ebene=None):
    """Zeilen [a, b) von Datei k; die erste Zeile ist eine Überschrift, deren Ebene sich ändern kann."""
    z = list(L[k][a:b])
    if neue_ebene is not None:
        assert HEAD.match(z[0]), (k, a, z[0])
        z[0] = "#" * neue_ebene + z[0][ebene(z[0]):]
    return z


def abschnitt(k, marke, neue_ebene=None):
    """Abschnitt ab Überschrift bis zur nächsten Überschrift; endet vor dem Kapitelapparat."""
    a = finde(k, marke)
    b = bis_naechste(k, a)
    if k in APP and a < APP[k] < b:
        b = APP[k]
    return stueck(k, a, b, neue_ebene)


def apparat_start(k):
    """Beginn des Kapitelapparats (Kernaussagen, Schlüsselbegriffe, Lernfragen)."""
    return finde(k, '::: {.callout-tip title="Kernaussagen"}')


def kopf(k, titel=None):
    """Kapitelkopf bis vor die erste Unterüberschrift; optional neuer Titel (ID bleibt)."""
    z = list(L[k][: H[k][1]])
    if titel:
        m = re.match(r"^# .*?(\{#sec-[\w-]+\})\s*$", z[0])
        z[0] = f"# {titel} {m.group(1)}"
    return z


APP = {k: apparat_start(k) for k in ("k1", "k2", "k3", "k4", "k5", "k6")}


def apparat(k):
    """Kapitelapparat bis zur nächsten Überschrift (in Kap. 5 folgt danach noch ein Abschnitt)."""
    return list(L[k][APP[k]: bis_naechste(k, APP[k])])


neu = {}

# ---------- Kap. 1 Einleitung: unverändert ----------
neu["n1"] = list(L["k1"])

# ---------- Kap. 2 Grundlagen von KI und LLMs ----------
k = "k2"
i_engpass_a = finde(k, "Die Konsequenz der Delegation")
i_engpass_b = finde(k, "Wie Studierende eine solche Quellenanbindung")
i_praxis = finde(k, "sec-agenten-praxis")
agenten_praxis = stueck(k, i_praxis, i_engpass_a, 3) + list(L[k][i_engpass_b: bis_naechste(k, i_praxis)])
engpass = list(L[k][i_engpass_a:i_engpass_b])
gedaechtnis = abschnitt(k, "sec-agenten-gedaechtnis", 3)

neu["n2"] = (
    kopf(k, "Grundlagen von KI und LLMs")
    + abschnitt(k, "sec-definitionen", 2)
    + abschnitt(k, "sec-sprachmodell", 3)
    + abschnitt(k, "sec-harness", 3)
    + abschnitt("k5", "sec-durchspielen", 3)
    + abschnitt("k5", "sec-informiert", 3)
    + abschnitt(k, "sec-model-choice", 2)
    + abschnitt(k, "sec-access", 2)
    + abschnitt(k, "sec-how-to-speak", 3)
    + abschnitt(k, "sec-prompt-components", 3)
    + abschnitt(k, "sec-prompts-schreiben-lassen", 3)
    + abschnitt(k, "sec-prompting-myths", 3)
    + abschnitt(k, "sec-prompts-teaching", 3)
    + ["## Das erweiterte LLM {#sec-erweitertes-llm}", ""]
    + abschnitt(k, "sec-patterns-usage", 3)
    + agenten_praxis
    + gedaechtnis
    + abschnitt(k, "sec-energy", 2)
    + abschnitt(k, "sec-vertiefung", 2)
    + abschnitt(k, "sec-gpt-bedeutung", 3)
    + abschnitt(k, "sec-blick-ins-modell", 3)
    + apparat(k)
)

# ---------- Kap. 3 Prinzipien der Automation von Aufgaben (neu) ----------
k = "k4"
i_hiwi = finde(k, "sec-hiwi")
i_aufg = finde(k, "### Was sind unsere Aufgaben?")
i_bib = finde(k, "::: {#sec-bibliothek-prompts}")
i_rech = finde(k, "sec-recherche")
neu["n3"] = (
    ["# Prinzipien der Automation von Aufgaben {#sec-automation}", "", "::: kapitel-gliederung", ":::", ""]
    + ["## Was sind unsere Aufgaben? {#sec-aufgaben}", ""]
    + list(L[k][i_bib:i_rech])
    + abschnitt("k2", "sec-arbeitsweisen", 2)
    + ["## Leitungsaufgabe Mensch–LLM {#sec-leitungsaufgabe}", ""]
    + engpass
)

# ---------- Kap. 4 Lern- und Wirkmechanismen (bisher Kap. 3) ----------
k = "k3"
i_evid = finde(k, "sec-evidenz")
neu["n4"] = (
    kopf(k, "Lern- und Wirkmechanismen")
    + list(L[k][H[k][1]:i_evid])
    + abschnitt("k5", "## Ausrichtung der Anpassungen nach Empfehlungen der Lernforschung", 3)
    + list(L[k][i_evid:])
)

# ---------- Kap. 5 Phasen der Arbeit mit generativer KI (4D) ----------
k = "k5"
aA = "aA"
i_af = finde(aA, "## AI Fluency am Berufsprofil")
assert L[aA][i_af - 1].startswith("::::: {.content-visible when-format=\"html\"}")
i_af_ende = finde(aA, '::::: {.content-visible unless-format="html"}', i_af)  # Beginn der Druckliste
ai_fluency = list(L[aA][i_af - 1: i_af_ende])
i_bsp = finde(k, "### Beispiel: KI-Übung in Präsenzveranstaltung")
i_richt = finde(k, "## Richtlinien zur KI-Nutzung")
i_diligence = finde("k2", "sec-diligence")
i_energy = finde("k2", "sec-energy")
neu["n5"] = (
    kopf(k, "Phasen der Arbeit mit generativer KI (4D)")
    + abschnitt("k2", "sec-schemas", 2)
    + abschnitt("k2", "sec-4d", 3)
    + abschnitt("k2", "sec-4d-nutzung", 3)
    + ai_fluency
    + abschnitt("k2", "sec-delegation", 2)
    + abschnitt("k2", "sec-capabilities", 3)
    + abschnitt(k, "sec-einfuehrung-studierende", 3)
    + stueck(k, i_bsp, bis_naechste(k, i_bsp), 4)
    + abschnitt("k2", "sec-hallucinations", 2)
    + stueck("k2", i_diligence, i_energy, 2)
    + stueck(k, i_richt, bis_naechste(k, i_richt), 3)
    + abschnitt(k, "### Übersicht: Was regeln die Richtlinien", 4)
    + abschnitt(k, "sec-ki-vo", 4)
    + abschnitt(k, "sec-dokumentation", 3)
    + abschnitt(k, "sec-pruefen", 2)
    + abschnitt(k, "sec-detektor-duell", 3)
    + abschnitt(k, "### Formate nach den vier Säulen", 3)
    + abschnitt(k, "sec-kurs-integration", 2)
    + apparat(k)
)

# ---------- Kap. 6 Rollen der KI (bisher Kap. 4) ----------
k = "k4"
neu["n6"] = (
    kopf(k, "Rollen der KI: Hiwi, Copilot, Tutor, Simulator")
    + list(L[k][i_hiwi:i_aufg])
    + list(L[k][i_aufg + 1: i_bib])  # Zeitanteile Lehrender bleiben beim Hiwi
    + list(L[k][i_rech:])
)

# ---------- Kap. 7 Artefakte (bisher Kap. 6) ----------
k = "k6"
neu["n7"] = kopf(k, "Artefakte: Fallbeispiele aus der Lehre") + list(L[k][H[k][1]:])

# ---------- Anhang A ohne AI-Fluency-Übung ----------
anhang_a = list(L[aA][: i_af - 1]) + list(L[aA][i_af_ende:])

# ---------- Prüfung: Multimenge der Nicht-Überschriftenzeilen gleich ----------
def inhalt(zeilen):
    return collections.Counter(z for z in zeilen if not HEAD.match(z) and z.strip())


vorher = sum((inhalt(v) for v in L.values()), collections.Counter())
nachher = sum((inhalt(v) for v in neu.values()), collections.Counter()) + inhalt(anhang_a)
# neu eingefügte Nicht-Überschriftenzeilen: kapitel-gliederung in Kap. 3
erwartet_neu = collections.Counter({"::: kapitel-gliederung": 1, ":::": 1})
diff_plus = nachher - vorher
diff_minus = vorher - nachher
if diff_plus != erwartet_neu or diff_minus:
    print("FEHLER Zeilenabgleich", "zu viel:", list(diff_plus.items())[:5], "fehlt:", list(diff_minus.items())[:5])
    sys.exit(1)

# Überschriften: alte IDs müssen alle noch vorkommen
def ids(zeilen):
    return collections.Counter(re.findall(r"\{#(sec-[\w-]+)", "\n".join(zeilen)))


ids_vorher = sum((ids(v) for v in L.values()), collections.Counter())
ids_nachher = sum((ids(v) for v in neu.values()), collections.Counter()) + ids(anhang_a)
assert not (ids_vorher - ids_nachher), ids_vorher - ids_nachher
print("neue IDs:", sorted((ids_nachher - ids_vorher).elements()))


# Div-Bilanz je neuer Datei
def bilanz(zeilen):
    s, code = 0, False
    for z in zeilen:
        if z.startswith("```"):
            code = not code
            continue
        if code:
            continue
        m = re.match(r"^(:{3,})\s*(.*)$", z)
        if m:
            s += 1 if m.group(2) else -1
    return s


for n, z in neu.items():
    assert bilanz(z) == 0, (n, bilanz(z))
assert bilanz(anhang_a) == 0

# ---------- Schreiben ----------
alt_dateien = [ALT[x] for x in ("k1", "k2", "k3", "k4", "k5", "k6")]
subprocess.run(["git", "rm", "-q", *alt_dateien], check=True)
for n, z in neu.items():
    open(NEU[n], "w", encoding="utf-8").write("\n".join(z).rstrip("\n") + "\n")
open(ALT["aA"], "w", encoding="utf-8").write("\n".join(anhang_a).rstrip("\n") + "\n")
subprocess.run(["git", "add", *NEU.values(), ALT["aA"]], check=True)
print("ok: Zeilen-Multimenge gleich, alle IDs vorhanden, Div-Bilanz 0")
