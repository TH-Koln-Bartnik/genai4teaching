"""Auszug aus dem Anthropic Economic Index für die Leserübung „Höher oder tiefer“ (Kap. 1).

Laiensicht: Der Economic Index ist eine große Tabelle (rund 220 MB), in der Anthropic
veröffentlicht, welchen Arbeitsaufgaben der US-Berufsdatenbank O*NET die Gespräche mit
dem KI-Assistenten Claude zugeordnet wurden, als Prozentanteil aller Gespräche eines
Monats. Dieses Skript liest die Tabelle, zieht die wenigen Zahlen heraus, die das Spiel
braucht, und schreibt sie in eine kleine JSON-Datei (ein Textformat für Daten). Kein
Wert im Spiel stammt aus dem Gedächtnis eines Menschen oder eines Sprachmodells.

Quelle: Hugging Face, Datensatz Anthropic/EconomicIndex, Ordner release_2026_06_26,
Datei data/aei_claude_ai_2026-06-26.csv (Lizenz CC BY). Zitation: Massenkoff et al. (2026).

Aufruf im Repo-Wurzelordner (CSV liegt außerhalb des Repos):
    python3 -I scripts/aei-hoeher-tiefer.py /pfad/aei_claude_ai_2026-06-26.csv
Ergebnis: interactions/data/aei-hoeher-tiefer.json und eine Kurzprüfung auf der Konsole.
Mit --liste werden zusätzlich die englischen Volltexte aller verwendeten Aufgaben
ausgegeben (Arbeitsliste für die Übersetzung in scripts/aei-hoeher-tiefer-de.json).
"""
import json
import random
import re
import sys
from pathlib import Path

import pandas as pd

STARTWERT = 20261102  # fester Startwert: gleiche Eingabe, gleiche Ausgabe
FAKTOR_MIN = 1.5
TOP_N = 60
WURZEL = Path(__file__).resolve().parent.parent
AUSGABE = WURZEL / "interactions" / "data" / "aei-hoeher-tiefer.json"
DE_DATEI = WURZEL / "scripts" / "aei-hoeher-tiefer-de.json"
MODELL_DATEI = WURZEL / "scripts" / "aei-hoeher-tiefer-modell.json"

# Lehraufgaben: Suchwörter laut Auftrag (Wortgrenzen, Groß/Klein egal).
LEHR_MUSTER = re.compile(
    r"\b(?:students?|instructional|teaching|lectures?|examinations?|grade|grading|courses?)\b", re.I)

# Kandidatenpaare. Die Paarbildung ist ein Urteil des Agenten (Claude, Sitzung vom
# 02.11.2026), kein Messwert: Die IDs wurden nach Sichtung der Lehraufgaben und der
# Top 60 festgelegt, bevor ein Modell nach seinem Tipp gefragt wurde. Das Skript prüft
# nur Faktor, Eindeutigkeit und Veröffentlichung. „hoch“/„tief“ stehen hier nur zur
# Lesbarkeit; welche Aufgabe vorn liegt, rechnet das Skript selbst aus.
# typ: "lehre" oder "ueberraschung". grund: Begründung (Agent-Urteil).
# erklaerung: ein Satz nach der Auflösung; {rang_hoch}, {rang_tief}, {n} werden aus den
# Daten eingesetzt.
KANDIDATEN = [
    # --- Lehrpaare -------------------------------------------------------------
    dict(id="L1", typ="lehre", a="22389", b="5217",
         grund="Kernaufgabe Unterricht gegen Einzelfrage: Viele vermuten das Unterrichten vorn.",
         erklaerung="Einzelne Fragen beantworten liegt auf Rang {rang_hoch} von {n} Aufgaben; "
                    "ganze Kurse unterrichten landet weit dahinter auf Rang {rang_tief}."),
    dict(id="L2", typ="lehre", a="17031", b="22406",
         grund="Der viel beschworene KI-Tutor gegen das unscheinbare Materialerstellen.",
         erklaerung="Lehrmaterial entwerfen (Rang {rang_hoch}) kommt fast fünfmal so oft vor wie "
                    "Einzelnachhilfe (Rang {rang_tief}), obwohl der KI-Tutor die Debatte prägt."),
    dict(id="L3", typ="lehre", a="22444", b="5663",
         grund="Bewerten gilt als Entlastungsfeld für Lehrende; Unterrichtsplanung wirkt alltäglicher.",
         erklaerung="Unterrichtsmaterial und Prüfungen entwerfen liegt auf Rang {rang_hoch}; "
                    "Arbeiten bewerten und benoten nur auf Rang {rang_tief}."),
    dict(id="L4", typ="lehre", a="18593", b="6454",
         grund="Curriculumsplanung ist Lehrenden-Alltag; Studienberatung wirkt randständig.",
         erklaerung="Studien- und Laufbahnberatung (Rang {rang_hoch}) liegt weit vor der "
                    "Planung von Curricula und Kursinhalten (Rang {rang_tief})."),
    dict(id="L5", typ="lehre", a="6263", b="6446",
         grund="Feedback zum Lernfortschritt gilt als Paradefall; Prüfungsvorbereitung wirkt enger.",
         erklaerung="Auf Prüfungen vorbereiten (Rang {rang_hoch}) liegt vor dem Beobachten und "
                    "Rückmelden von Lernfortschritt (Rang {rang_tief})."),
    # --- Überraschungskandidaten -------------------------------------------------
    dict(id="U1", typ="ueberraschung", a="16221", b="21000",
         grund="Texte schreiben gilt als Paradeaufgabe generativer KI; Recherche wirkt wie Suchmaschine.",
         erklaerung="Informationen in Quellen suchen ist die häufigste Einzelaufgabe im ganzen "
                    "Datensatz (Rang {rang_hoch}); Texte schreiben folgt auf Rang {rang_tief}."),
    dict(id="U2", typ="ueberraschung", a="680", b="16120",
         grund="Programmieren ist der bekannteste Profi-Einsatz; Kaufberatung wirkt banal.",
         erklaerung="Produkte und Dienstleistungen empfehlen liegt auf Rang {rang_hoch}, "
                    "Programme schreiben auf Rang {rang_tief}: Rat im Alltag schlägt Code."),
    dict(id="U3", typ="ueberraschung", a="22691", b="9328",
         grund="Übersetzen ist der Klassiker maschineller Sprachverarbeitung; Gesundheitsfragen wirken heikel.",
         erklaerung="Fragen zu Gesundheit und Wohlbefinden (Rang {rang_hoch}) kommen gut doppelt so oft "
                    "vor wie Übersetzen (Rang {rang_tief})."),
    dict(id="U4", typ="ueberraschung", a="12980", b="21828",
         grund="Diagramme erstellen wirkt wie typische Büroarbeit für KI; Lebensberatung wirkt menschlich.",
         erklaerung="Beratung bei persönlichen Problemen liegt auf Rang {rang_hoch}, Diagramme und "
                    "Grafiken erstellen auf Rang {rang_tief}."),
    dict(id="U5", typ="ueberraschung", a="1592", b="23994",
         grund="Juristische Entwürfe gelten als Vorzeigefall; Gefühle aussprechen wirkt wie Therapie.",
         erklaerung="Gespräche, in denen Menschen über Gefühle und Lebenslage sprechen (Rang {rang_hoch}), "
                    "sind häufiger als juristische Dokumente (Rang {rang_tief})."),
    dict(id="U6", typ="ueberraschung", a="1101", b="11055",
         grund="Gedichte sind das bekannteste Partystück von Chatbots; Rezepte wirken unspektakulär.",
         erklaerung="Rezepte entwickeln (Rang {rang_hoch}) liegt vor Gedichte schreiben (Rang {rang_tief}); "
                    "beide Werte sind klein."),
    dict(id="U7", typ="ueberraschung", a="802", b="945",
         grund="Marketingstrategie klingt nach Wissensarbeit für KI; Seitenlayout einstellen wirkt nebensächlich.",
         erklaerung="Formatierung und Seitenlayout (Rang {rang_hoch}) kommen häufiger vor als "
                    "Marketingstrategien (Rang {rang_tief})."),
    dict(id="U8", typ="ueberraschung", a="1782", b="9788",
         grund="Statistische Auswertung gilt als Stärke von KI; Themenideen wirken weich.",
         erklaerung="Ideen für Geschichten und Inhalte (Rang {rang_hoch}) liegen vor statistischer "
                    "Datenauswertung (Rang {rang_tief})."),
    dict(id="U9", typ="ueberraschung", a="8114", b="14707",
         grund="Webentwicklung ist ein bekannter Codefall; persönliche Produktempfehlung wirkt trivial.",
         erklaerung="Produkte nach Bedarf empfehlen (Rang {rang_hoch}) liegt vor Code für Webanwendungen "
                    "(Rang {rang_tief})."),
    dict(id="U10", typ="ueberraschung", a="692", b="14713",
         grund="E-Mails beantworten gilt als typische Büro-KI; Pflegehinweise für Waren wirken exotisch.",
         erklaerung="Ratschläge zu Gebrauch und Pflege von Waren (Rang {rang_hoch}) kommen deutlich "
                    "häufiger vor als E-Mail-Anfragen beantworten (Rang {rang_tief})."),
]

# Vorläufige Auswahl von 7 Paaren in Spielreihenfolge (vor der Modellbefragung fixiert):
# Einstieg eher leicht (großer Abstand), Lehrpaare in der Mitte, letztes Lehrpaar = Paar
# für „Wer fragt?“ (Bewerten/Prüfen). DRUCK: 1 Lehr- und 2 Überraschungspaare.
AUSWAHL = ["U1", "U2", "L2", "L1", "L3", "U3", "U5"]
WER_FRAGT = "L3"
DRUCK = ["U1", "L3", "U5"]


def laden(pfad):
    spalten = ["date_start", "geo_id", "category_name", "hierarchy_level", "metric_id",
               "value", "node_name", "node_external_id"]
    return pd.read_csv(pfad, usecols=spalten, dtype={"node_external_id": str})


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    liste = "--liste" in sys.argv
    if len(args) != 1:
        sys.exit("Aufruf: python3 -I scripts/aei-hoeher-tiefer.py <aei_claude_ai_….csv> [--liste]")
    df = laden(args[0])
    monat = df.date_start.max()

    onet = df[(df.geo_id == "GLOBAL") & (df.date_start == monat) & (df.category_name == "onet")
              & (df.hierarchy_level == 0) & (df.metric_id == "pct")]
    onet = onet.sort_values(["value", "node_external_id"], ascending=[False, True]).reset_index(drop=True)
    onet["rang"] = onet.value.rank(method="min", ascending=False).astype(int)
    n_aufgaben = len(onet)
    nach_id = {r.node_external_id: r for r in onet.itertuples()}

    lehr = onet[onet.node_name.str.contains(LEHR_MUSTER)]
    lehr_ids = set(lehr.node_external_id)
    top = onet.head(TOP_N)

    # Kopfzahlen aus den overall-Zeilen
    kopf = {}
    for geo in ("GLOBAL", "DEU"):
        o = df[(df.geo_id == geo) & (df.date_start == monat) & (df.category_name == "overall")]
        werte = dict(zip(o.metric_id, o.value))
        kopf[geo] = {k: werte.get(k) for k in (
            "use_case_coursework_pct", "use_case_work_pct", "use_case_personal_pct",
            "collaboration_bucket_augmentation_pct", "collaboration_bucket_automation_pct",
            "usage_per_capita_index")}
    nutzung = {"Arbeit": kopf["GLOBAL"]["use_case_work_pct"],
               "Privat": kopf["GLOBAL"]["use_case_personal_pct"],
               "Studium": kopf["GLOBAL"]["use_case_coursework_pct"]}
    haeufigste = max(nutzung, key=nutzung.get)

    de = json.loads(DE_DATEI.read_text(encoding="utf-8")) if DE_DATEI.exists() else {}
    modell = json.loads(MODELL_DATEI.read_text(encoding="utf-8")) if MODELL_DATEI.exists() else {}

    def aufgabe(tid):
        r = nach_id[tid]
        return {"id": tid, "name_en": r.node_name, "name_de": de.get(tid), "pct": float(r.value),
                "rang": int(r.rang), "lehre": tid in lehr_ids}

    rng = random.Random(STARTWERT)
    paare, benutzt, fehler = [], set(), []
    for k in KANDIDATEN:
        for tid in (k["a"], k["b"]):
            if tid not in nach_id:
                fehler.append(f"{k['id']}: Aufgabe {tid} nicht veröffentlicht")
            if tid in benutzt:
                fehler.append(f"{k['id']}: Aufgabe {tid} doppelt")
            benutzt.add(tid)
        if fehler:
            continue
        x, y = aufgabe(k["a"]), aufgabe(k["b"])
        hoch, tief = (x, y) if x["pct"] >= y["pct"] else (y, x)
        faktor = round(hoch["pct"] / tief["pct"], 2) if tief["pct"] > 0 else None
        if faktor is None or faktor < FAKTOR_MIN:
            fehler.append(f"{k['id']}: Faktor {faktor} < {FAKTOR_MIN}")
        if k["typ"] == "lehre" and not (x["lehre"] and y["lehre"]):
            fehler.append(f"{k['id']}: keine reine Lehraufgabe")
        # Anzeige-Reihenfolge A/B zufällig mit festem Startwert (gilt für Spiel und Modell)
        links, rechts = (x, y) if rng.random() < 0.5 else (y, x)
        paar = {
            "id": k["id"], "typ": k["typ"], "a": links, "b": rechts,
            "richtig": "A" if links["pct"] > rechts["pct"] else "B",
            "faktor": faktor, "begruendung_agent": k["grund"],
            "erklaerung": k["erklaerung"].format(rang_hoch=hoch["rang"], rang_tief=tief["rang"], n=n_aufgaben),
            "ausgewaehlt": k["id"] in AUSWAHL, "druck": k["id"] in DRUCK,
        }
        m = modell.get("antworten", {}).get(k["id"])
        paar["model_tip"] = m["tip"] if m else None
        paar["model_confidence"] = m["sicherheit"] if m else None
        paare.append(paar)
    if fehler:
        sys.exit("FEHLER:\n" + "\n".join(fehler))

    ordnung = {pid: i for i, pid in enumerate(AUSWAHL)}
    spiel = sorted([p for p in paare if p["ausgewaehlt"]], key=lambda p: ordnung[p["id"]])

    daten = {
        "quelle": {
            "datensatz": "Anthropic Economic Index, Release 2026-06-26 (Hugging Face Anthropic/EconomicIndex, CC BY)",
            "datei": "release_2026_06_26/data/aei_claude_ai_2026-06-26.csv",
            "monat": monat, "geo": "GLOBAL", "kategorie": "onet, hierarchy_level 0, metric pct",
            "bericht": "https://www.anthropic.com/research/economic-index-june-2026-report",
            "startseite": "https://www.anthropic.com/economic-index",
            "zitation": "Massenkoff et al. (2026). Anthropic Economic Index report: Cadences.",
        },
        "n_aufgaben": n_aufgaben,
        "n_lehraufgaben": len(lehr),
        "kopfzahlen": kopf,
        "vorhersage": {"frage_richtig": haeufigste, "werte": nutzung,
                        "studium_pct": kopf["GLOBAL"]["use_case_coursework_pct"]},
        "modell": modell.get("meta"),
        "kandidaten": paare,
        "spiel": [p["id"] for p in spiel],
        "wer_fragt": WER_FRAGT,
        "druck": DRUCK,
        "top60": [aufgabe(t) for t in top.node_external_id],
    }
    AUSGABE.parent.mkdir(parents=True, exist_ok=True)
    AUSGABE.write_text(json.dumps(daten, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    # Kurzprüfung
    print(f"Monat {monat}; {n_aufgaben} Aufgaben (GLOBAL, onet L0, pct); Spannweite "
          f"{onet.value.min():.2f}–{onet.value.max():.2f} %; Summe {onet.value.sum():.2f} %; "
          f"Lehraufgaben {len(lehr)}")
    print(f"Nutzung GLOBAL: {nutzung} → häufigste: {haeufigste}; DEU: "
          f"Arbeit {kopf['DEU']['use_case_work_pct']}, Privat {kopf['DEU']['use_case_personal_pct']}, "
          f"Studium {kopf['DEU']['use_case_coursework_pct']}")
    print("Kandidaten (Faktor, A/B, richtig, Modell):")
    for p in paare:
        mark = "*" if p["ausgewaehlt"] else " "
        print(f" {mark}{p['id']:<4} {p['faktor']:>6} | A {p['a']['pct']:.2f} [{p['a']['id']}] {p['a']['name_en'][:48]}"
              f" | B {p['b']['pct']:.2f} [{p['b']['id']}] {p['b']['name_en'][:48]} | {p['richtig']} | "
              f"{p['model_tip']}/{p['model_confidence']}")
    print("Spielreihenfolge:", daten["spiel"], "| Wer fragt:", WER_FRAGT, "| Druck:", DRUCK)
    fehlend = [t["id"] for p in paare for t in (p["a"], p["b"]) if not t["name_de"]] + \
              [t["id"] for t in daten["top60"] if not t["name_de"]]
    print(f"Ohne Übersetzung: {len(set(fehlend))}")
    if liste:
        for tid in sorted(set(fehlend), key=lambda t: nach_id[t].rang):
            print(f'  "{tid}": "",  # {nach_id[tid].node_name}')
    print(f"geschrieben: {AUSGABE.relative_to(WURZEL)}")


if __name__ == "__main__":
    main()
