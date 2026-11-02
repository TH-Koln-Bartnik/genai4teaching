#!/usr/bin/env python3
"""S2 Podcast (Kap. 4.1): Auszug aus den Anthropic-Interviewer-Transkripten der Forschenden.

In Alltagssprache: Das Skript liest die 125 Interview-Mitschriften (CSV von Hugging Face,
Anthropic/AnthropicInterviewer, CC BY), trennt die Fragen des KI-Interviewers von den Antworten
der Forschenden, zählt mit offengelegten Stichwortlisten, in wie vielen Interviews ein Thema in
den Antworten vorkommt, und zieht je Thema 10-15 kurze Originalstellen heraus. Nur dieser Auszug
geht an den Drehbuch-Agenten, nicht die rund 180.000 Wörter.

Aufruf (im Repo-Hauptordner):
  python3 -I scripts/interviewer-s2-auszug.py /pfad/zu/scientists_transcripts.csv
Schreibt:
  _src/audio/s2-podcast/auszug.json              Zählung, Stichwortlisten, Originalstellen (committet)
  _src/audio/s2-podcast/auszug-drehbuch.md       dasselbe als Text für den Drehbuch-Agenten
  _src/audio/s2-podcast/lokal/antworten.json     alle Teilnehmer-Antworten (nicht committet)
"""
import json, re, sys
from pathlib import Path

import pandas as pd

REPO = Path(__file__).resolve().parent.parent
ZIEL = REPO / "_src/audio/s2-podcast"

# Offengelegte Stichwortlisten (englisch, Wortanfänge; \b davor, Groß/klein egal).
# Die Zählung ist grob: Ein Treffer heißt nur, dass das Wort in den Antworten vorkommt.
THEMEN = {
    "literatur_schreiben": {
        "name": "Literatur und Schreiben",
        "stichworte": ["literature", "paper", "manuscript", "writing", "write", "wrote", "draft",
                        "summari", "proofread", "grant", "abstract", "citation"],
    },
    "code_daten": {
        "name": "Code und Datenanalyse",
        "stichworte": ["code", "coding", "python", "script", "programm", "debug", "data analys",
                        "analyz", "analys", "statistic", "dataset"],
    },
    "ideen_hypothesen": {
        "name": "Ideen und Hypothesen",
        "stichworte": ["idea", "brainstorm", "hypothes", "creativ", "inspir", "novel"],
    },
    "pruefen": {
        "name": "Prüfen und Verifizieren",
        "stichworte": ["verif", "double-check", "double check", "check", "validat", "cross-check",
                        "fact-check", "confirm"],
    },
    "misstrauen_fehler": {
        "name": "Misstrauen und Fehler",
        "stichworte": ["hallucinat", "fabricat", "made up", "make up", "makes up", "incorrect", "wrong",
                        "mistake", "inaccura", "unreliab", "not trust", "n't trust", "distrust",
                        "skeptic", "sceptic"],
    },
    "zeitgewinn": {
        "name": "Zeitgewinn",
        "stichworte": ["save time", "saves time", "saved time", "saving time", "time-saving",
                        "time saving", "faster", "quicker", "speed up", "sped up", "efficien"],
    },
    "kompetenz_sorge": {
        "name": "Sorge um Fachkompetenz",
        "stichworte": ["deskill", "de-skill", "atroph", "critical thinking", "over-reli", "overreli",
                        "over reli", "dependen", "lazy", "lose the abilit", "lose my", "lose our",
                        "lose skill", "losing skill"],
    },
    "grenzen": {
        "name": "Wunsch nach Grenzen",
        "stichworte": ["boundar", "guardrail", "draw the line", "off-limits", "off limits",
                        "wouldn't let", "would never", "never let", "never use", "wouldn't trust",
                        "not comfortable", "uncomfortable"],
    },
}

MAX_WOERTER = 60
JE_THEMA = 12


def teile(text):
    """Zerlegt ein Transkript in (Rolle, Text)-Abschnitte. Der Interviewer heißt in den Daten erst
    "Assistant:", nach der Begrüßung "AI:"; die Forschenden heißen "User:"."""
    stuecke = re.split(r"(?:^|\n\n)(Assistant|AI|User): ", text)
    paare = []
    for i in range(1, len(stuecke) - 1, 2):
        rolle = "User" if stuecke[i] == "User" else "Interviewer"
        paare.append((rolle, stuecke[i + 1].strip()))
    return paare


def muster(stichworte):
    return re.compile(r"\b(?:" + "|".join(re.escape(s) for s in stichworte) + r")", re.I)


def saetze(text):
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if s.strip()]


def stelle(antwort, rx):
    """Erster Satz mit Treffer, ergänzt um Folgesatz, solange <= MAX_WOERTER Wörter. Wörtlich."""
    s = saetze(antwort)
    for i, satz in enumerate(s):
        if rx.search(satz):
            teil = [satz]
            if i + 1 < len(s) and len((satz + " " + s[i + 1]).split()) <= MAX_WOERTER:
                teil.append(s[i + 1])
            txt = " ".join(teil)
            w = txt.split()
            if len(w) > MAX_WOERTER:
                # bei überlangen Sätzen: Fenster um den Treffer, wörtlich ausgeschnitten
                m = rx.search(txt)
                pos = len(txt[: m.start()].split())
                a = max(0, pos - 25)
                txt = " ".join(w[a:a + MAX_WOERTER])
            if len(txt.split()) >= 8:
                return txt
    return None


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    csv = Path(sys.argv[1])
    d = pd.read_csv(csv)
    ZIEL.mkdir(parents=True, exist_ok=True)
    (ZIEL / "lokal").mkdir(exist_ok=True)

    rx = {k: muster(v["stichworte"]) for k, v in THEMEN.items()}
    proto, antworten = [], {}
    for _, r in d.iterrows():
        paare = teile(r["text"])
        user = [t for rolle, t in paare if rolle == "User"]
        antworten[r["transcript_id"]] = user
        utext = "\n\n".join(user)
        proto.append({
            "id": r["transcript_id"],
            "woerter_gesamt": len(r["text"].split()),
            "woerter_antworten": len(utext.split()),
            "antworten": len(user),
            "themen": {k: bool(rx[k].search(utext)) for k in THEMEN},
        })

    n = len(proto)
    zaehlung = {}
    for k, v in THEMEN.items():
        treffer = sum(p["themen"][k] for p in proto)
        zaehlung[k] = {"name": v["name"], "interviews": treffer, "anteil": round(treffer / n, 3)}

    # Originalstellen: je Thema eine Stelle je Interview (erste passende Antwort), dann gleichmäßig
    # über die nach ID sortierten Interviews verteilt JE_THEMA Stellen auswählen (deterministisch).
    stellen = {}
    for k in THEMEN:
        kand = []
        for p in sorted(proto, key=lambda x: x["id"]):
            for a in antworten[p["id"]]:
                s = stelle(a, rx[k])
                if s:
                    kand.append({"id": p["id"], "text": s})
                    break
        if len(kand) > JE_THEMA:
            schritt = len(kand) / JE_THEMA
            kand = [kand[int(i * schritt)] for i in range(JE_THEMA)]
        stellen[k] = kand

    wz = pd.Series([p["woerter_gesamt"] for p in proto])
    pruef = {
        "transkripte": n,
        "woerter_gesamt": int(wz.sum()),
        "woerter_min": int(wz.min()), "woerter_median": float(wz.median()), "woerter_max": int(wz.max()),
        "woerter_antworten_gesamt": int(sum(p["woerter_antworten"] for p in proto)),
        "ohne_antworten": [p["id"] for p in proto if p["antworten"] == 0],
    }
    out = {
        "quelle": "Hugging Face Anthropic/AnthropicInterviewer, interview_transcripts/scientists_transcripts.csv (CC BY)",
        "pruefung": pruef,
        "methode": "Stichwortzählung: Ein Interview zählt für ein Thema, wenn mindestens ein Stichwort "
                   "(Wortanfang, Groß/klein egal) in den Antworten der Teilnehmenden vorkommt. Grobe Zählung.",
        "themen": {k: {**THEMEN[k], **zaehlung[k]} for k in THEMEN},
        "stellen": stellen,
        "interviews": proto,
    }
    (ZIEL / "auszug.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    (ZIEL / "lokal/antworten.json").write_text(json.dumps(antworten, ensure_ascii=False), encoding="utf-8")

    # Text für den Drehbuch-Agenten
    zeilen = [f"# Auszug: Interviews mit {n} Forschenden über ihre Arbeit mit KI",
              "", "Quelle: Anthropic Interviewer (2025), öffentlicher Datensatz, CC BY. Interviewer war Claude.",
              f"Stichwortzählung (grob: Stichwort kommt in den Antworten vor), Basis {n} Interviews:", ""]
    for k in THEMEN:
        z = zaehlung[k]
        zeilen.append(f"- {z['name']}: {z['interviews']} von {n} Interviews")
    for k in THEMEN:
        zeilen += ["", f"## {THEMEN[k]['name']}", ""]
        for s in stellen[k]:
            zeilen.append(f"- [{s['id']}] \"{s['text']}\"")
    (ZIEL / "auszug-drehbuch.md").write_text("\n".join(zeilen) + "\n", encoding="utf-8")

    print(json.dumps(pruef, ensure_ascii=False))
    for k, z in zaehlung.items():
        print(f"{k:20s} {z['interviews']:4d} / {n}  ({z['anteil']:.0%})  Stellen: {len(stellen[k])}")
    print(f"Auszug für Drehbuch: {len((ZIEL / 'auszug-drehbuch.md').read_text().split())} Wörter")


if __name__ == "__main__":
    main()
