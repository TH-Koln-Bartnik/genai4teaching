// Tests für Genrefilme (S5, später S6). Aufruf: node --test tests/genrefilm.test.mjs
// Prüft das Manifest (Vollständigkeit, Bildwörter, Belege), die Tokenwerte gegen T1,
// die Untertitel (lückenlos, im Film) und den Zeitplan (Szenendauer = Audiolänge + Luft).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { REPO, zeitplan, untertitel, stuecke, audioDatei } from "../scripts/genrefilm/pipeline.mjs";

const filme = readdirSync(join(REPO, "_src/videos"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(REPO, "_src/videos", d.name, "manifest.json")))
  .map((d) => ({ dir: join(REPO, "_src/videos", d.name), m: JSON.parse(readFileSync(join(REPO, "_src/videos", d.name, "manifest.json"), "utf8")) }))
  .filter((f) => Array.isArray(f.m.szenen));

const zeit = (s) => { const [h, m, r] = s.split(":"); return +h * 3600 + +m * 60 + parseFloat(r); };

for (const { dir, m } of filme) {
  test(`${m.film}: Manifest vollständig`, () => {
    assert.equal(m.szenen.length, 9, "neun Szenen");
    for (const s of m.szenen) {
      for (const k of ["id", "genre", "idee", "datei", "sprechtext", "v3", "stimmhinweis", "bildtext", "bildobjekte", "belege"]) assert.ok(s[k], `${s.id}: ${k} fehlt`);
      const w = s.sprechtext.split(/\s+/).length;
      assert.ok(w >= 35 && w <= 55, `${s.id}: ${w} Wörter (35–55)`);
      assert.ok(s.belege.length >= 1 && s.belege.every((b) => b.aussage && b.beleg), `${s.id}: Beleg je Fachaussage`);
      // v3-Text = Sprechtext + Tags: ohne die Tags und Auslassungspunkte müssen die Wörter gleich sein
      const nackt = (t) => t.replace(/\[[^\]]*\]/g, " ").replace(/\.\.\./g, ",").toLowerCase().match(/[a-zäöüß]+/g).join(" ");
      assert.equal(nackt(s.v3), nackt(s.sprechtext), `${s.id}: v3-Text weicht vom Sprechtext ab`);
    }
    assert.equal(m.haltepunkte.length, 3);
    for (const f of [m.vorhersage, ...m.haltepunkte, ...m.selbsttest]) assert.ok(f.optionen.length === 3 && f.richtig >= 0 && f.richtig < 3);
    const vorlage = m.makingof.vorlage.split(/\s+/).length;
    assert.ok(vorlage <= 60, `Prompt-Vorlage ${vorlage} Wörter (≤ 60)`);
  });

  test(`${m.film}: höchstens acht neue Bildwörter je Szene`, () => {
    // Bildtext = erklärende Beschriftung; Beispieldaten (Token-Kästchen, Zahlen) zählen nicht (Feld bildobjekte)
    const gesehen = new Set();
    for (const s of m.szenen) {
      const neu = s.bildtext.flatMap((t) => t.toLowerCase().match(/[a-zäöüß]+/g) || []).filter((x) => !gesehen.has(x) && gesehen.add(x));
      assert.ok(neu.length <= 8, `${s.id}: ${neu.length} neue Bildwörter (${neu.join(", ")})`);
    }
  });

  const audio = [join(dir, "audio"), join(dir, "audio-platzhalter")].find((o) => m.szenen.every((s) => audioDatei(o, s.datei)));
  test(`${m.film}: Zeitplan folgt dem Ton, Untertitel lückenlos`, { skip: !audio && "keine Tondateien vorhanden" }, () => {
    const zp = zeitplan(m, audio);
    zp.forEach((z, i) => {
      assert.ok(Math.abs(z.dauer - (z.audioDauer + m.ton.luft)) < 0.002, `${z.id}: Dauer = Audio + Luft`);
      if (i) assert.ok(Math.abs(z.start - (zp[i - 1].start + zp[i - 1].dauer)) < 0.002, `${z.id}: lückenlos an Vorgänger`);
    });
    const T = zp.at(-1).start + zp.at(-1).dauer;
    const cues = [...untertitel(m, zp).matchAll(/(\d\d:\d\d:\d\d\.\d{3}) --> (\d\d:\d\d:\d\d\.\d{3})\n([\s\S]*?)\n\n/g)].map((x) => ({ a: zeit(x[1]), b: zeit(x[2]), t: x[3] }));
    assert.equal(cues.length, m.szenen.reduce((n, s) => n + stuecke(s.sprechtext).length, 0));
    zp.forEach((z, i) => {
      const meine = cues.filter((c) => c.a >= z.start - 1e-3 && c.b <= z.start + z.dauer + 1e-3);
      assert.ok(Math.abs(meine[0].a - (z.start + z.audioStart)) < 0.01, `${z.id}: erster Untertitel bei Tonbeginn`);
      assert.ok(Math.abs(meine.at(-1).b - (z.start + z.audioStart + z.audioDauer)) < 0.01, `${z.id}: letzter Untertitel bei Tonende`);
      for (let k = 1; k < meine.length; k++) assert.ok(Math.abs(meine[k].a - meine[k - 1].b) < 0.002, `${z.id}: Lücke im Untertitel`);
    });
    assert.ok(cues.every((c) => c.b <= T + 1e-3 && c.t.split("\n").length <= 2 && c.t.split("\n").every((l) => l.length <= 50)), "Untertitel im Film, ≤ 2 Zeilen");
  });

  if (m.film === "kap02-token-genres") {
    test("kap02-token-genres: Tokenwerte = T1 und = gpt-tokenizer", async () => {
      const { encode } = await import("gpt-tokenizer/encoding/o200k_base");
      const t1 = readFileSync(join(REPO, "interactions/vom-satz-zum-naechsten-wort.html"), "utf8");
      const nrT1 = [...t1.matchAll(/<text class="f nr"[^>]*>(\d+)<\/text>/g)].map((x) => +x[1]);
      const tw = m.tokenwerte;
      assert.ok(tw, "tokenwerte fehlen im Manifest (Build laufen lassen)");
      assert.deepEqual(tw.satz.ids, encode("Die Bank steht unter einem Baum."));
      assert.deepEqual(tw.satz.ids, nrT1.slice(0, 7), "Token-Nummern wie in T1 Schritt 3");
      assert.equal(nrT1[7], tw.kandidaten[" Sie"], "gezogenes Token ␣Sie wie in T1 Schritt 8");
      assert.equal(tw.lieferant.ids.length, 5); assert.equal(tw.supplier.ids.length, 2);
      for (const [k, id] of Object.entries(tw.kandidaten)) {
        assert.deepEqual(encode(k), [id]);
        assert.ok(t1.includes(`${k.replace(" ", "␣")} ${id}`), `Kandidat ${k} ${id} in T1`);
      }
      for (const [k, v] of Object.entries(tw.lehrwerte)) assert.ok(t1.includes(`${v} % ${k.replace(" ", "␣")}`), `Lehrwert ${k} = ${v} % wie T1`);
    });
  }
}
