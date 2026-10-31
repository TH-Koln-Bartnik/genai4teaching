# Whisper-Abnahmeprüfung für Lernsongs (Regel A4)
# Stand 29.10.2026 · für Google Colab (Laufzeit > Laufzeittyp ändern > T4-GPU)
#
# Was das Skript tut: Whisper hört die Aufnahme wie jemand, der das Textblatt
# nie gesehen hat, und schreibt mit. Danach vergleicht das Skript das
# Transkript mit (1) der Fachwortliste und (2) dem Textblatt.
# Bewusst KEIN initial_prompt: Gäbe man Whisper den Text vor, würde es
# "richtig hören", was Studierende falsch hören.

# ---- Zelle 1: Installation (nur in Colab, dauert ca. 1 Minute) ----
# !pip install -q openai-whisper

# ---- Zelle 2: Funktionen ----
import re
import unicodedata
import difflib


def normalisiere(text: str) -> list[str]:
    """Kleinschreibung, Umlaute vereinheitlichen, Satzzeichen und
    Abschnittsmarken wie [Verse 1] entfernen; Rückgabe als Wortliste."""
    text = re.sub(r"\[[^\]]*\]", " ", text)          # Suno-Marken entfernen
    text = text.lower()
    text = (text.replace("ä", "ae").replace("ö", "oe")
                .replace("ü", "ue").replace("ß", "ss"))
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = re.sub(r"[^a-z0-9 ]+", " ", text)
    return text.split()


def fachwort_abgleich(transkript: str, fachwoerter: list[str], schwelle=0.8):
    """Prüft für jedes Fachwort (auch mehrteilig), ob es im Transkript steht.
    Fehlt es, wird die ähnlichste Wortfolge als vermutlicher Verhörer gemeldet."""
    woerter = normalisiere(transkript)
    ergebnis = []
    for fw in fachwoerter:
        ziel = normalisiere(fw)
        n = len(ziel)
        fenster = [woerter[i:i + n] for i in range(max(1, len(woerter) - n + 1))]
        if ziel in fenster:
            ergebnis.append((fw, "gefunden", ""))
            continue
        # Schreibvarianten ohne Hörfehler: "Bestell Menge" / "DS" statt "D S"
        kompakt = "".join(ziel)
        varianten = {"".join(woerter[i:i + k]) for k in range(1, n + 3)
                     for i in range(len(woerter) - k + 1)}
        if kompakt in varianten:
            ergebnis.append((fw, "gefunden", "andere Schreibung"))
            continue
        bester, quote = "", 0.0
        for f in fenster:
            q = difflib.SequenceMatcher(None, " ".join(ziel), " ".join(f)).ratio()
            if q > quote:
                bester, quote = " ".join(f), q
        status = "verhört?" if quote >= schwelle else "FEHLT"
        ergebnis.append((fw, status, f"{bester} ({quote:.0%})"))
    return ergebnis


def wortfehlerrate(textblatt: str, transkript: str) -> float:
    """Anteil der Wörter des Textblatts, die Whisper anders, gar nicht oder
    zusätzlich schreibt (Levenshtein auf Wortebene, WER)."""
    ref, hyp = normalisiere(textblatt), normalisiere(transkript)
    d = list(range(len(hyp) + 1))
    for i, r in enumerate(ref, 1):
        prev, d[0] = d[0], i
        for j, h in enumerate(hyp, 1):
            cur = min(d[j] + 1, d[j - 1] + 1, prev + (r != h))
            prev, d[j] = d[j], cur
    return d[len(hyp)] / max(1, len(ref))


def bericht(transkript, textblatt, fachwoerter):
    print("Fachwort-Abgleich (A4)")
    print(f"{'Fachwort':<28}{'Status':<11}nächstliegende Stelle im Transkript")
    for fw, status, naechste in fachwort_abgleich(transkript, fachwoerter):
        print(f"{fw:<28}{status:<11}{naechste}")
    wer = wortfehlerrate(textblatt, transkript)
    print(f"\nWortfehlerrate gegen Textblatt: {wer:.0%}")
    fehlend = [f for f, s, _ in fachwort_abgleich(transkript, fachwoerter)
               if s != "gefunden"]
    urteil = "BESTANDEN" if not fehlend else "NICHT BESTANDEN"
    print(f"A4-Prüfkriterium 'Transkript enthält jedes Fachwort': {urteil}")


# ---- Zelle 3: Eingaben (anpassen) ----
# from google.colab import files
# hochgeladen = files.upload()                 # MP3/WAV der Suno-Aufnahme
# AUDIO = list(hochgeladen.keys())[0]
# TEXTBLATT = """hier das Textblatt einfügen"""
# FACHWOERTER = ["Bestellmenge", "Wurzel", "Nachfrage", "Bestellkosten",
#                "Lagerkosten"]

# ---- Zelle 4: Transkription und Bericht ----
# import whisper
# modell = whisper.load_model("medium")        # "large-v3" genauer, langsamer
# roh = modell.transcribe(AUDIO, language="de", temperature=0.0)
# print(roh["text"])
# bericht(roh["text"], TEXTBLATT, FACHWOERTER)
