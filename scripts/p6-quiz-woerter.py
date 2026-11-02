#!/usr/bin/env python3
"""Zählt die Wörter des Quiz-Erstellers (Anhang B, Abschnitt sec-prompt-quiz-maker) in einem Git-Stand.

In Alltagssprache: Der Film „Stützräder“ (P6, Szene 9) nennt, wie stark unser eigener Quiz-Prompt geschrumpft ist.
Die Zahl soll nicht abgetippt, sondern gezählt werden. Das Skript holt den Prompt aus einem Stand des Repos
(z. B. main oder dem Branch mit dem neuen Anhang B) und zählt die Wörter im Codeblock (Wort = Folge ohne Leerzeichen).

Aufruf (Repo-Hauptordner):
  python3 scripts/p6-quiz-woerter.py origin/main origin/anhangB-prompts-neu
Ausgabe je Stand: <stand> <wörter>
"""
import re
import subprocess
import sys

DATEI = "kapitel07-appendix02-prompt-sammlung.qmd"


def prompt_block(quelltext):
    t = quelltext[quelltext.index("{#sec-prompt-quiz-maker}"):]
    t = t[t.index("``` markdown") + len("``` markdown"):]
    return t[: t.index("```")]


def woerter(text):
    # Zählregel wie Streich-Test (P1): nur Stücke mit Buchstabe oder Ziffer; Aufzählungszeichen, Pfeile, Gedankenstriche zählen nicht
    return sum(1 for w in text.split() if re.search(r"[0-9A-Za-zÄÖÜäöüß]", w))


def main(staende):
    for stand in staende or ["HEAD"]:
        quelltext = subprocess.run(["git", "show", f"{stand}:{DATEI}"], capture_output=True, text=True, check=True).stdout
        print(stand, woerter(prompt_block(quelltext)))


if __name__ == "__main__":
    main(sys.argv[1:])
