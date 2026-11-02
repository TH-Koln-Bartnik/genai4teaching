// Genrefilm-Pipeline: Bausteine (Zeitplan aus Audiolängen, Tonspur, Untertitel, Standbilder, Player-Daten).
// In Alltagssprache: Die Tonaufnahmen bestimmen den Takt. Das Skript misst, wie lange jede Szene gesprochen wird,
// legt daraus Anfang und Ende jeder Szene fest und leitet alles andere davon ab: Film, Untertitel, Kapitelmarken,
// Haltepunkte im Player. Wer die Stimme austauscht, baut neu, ohne eine Zeile Code zu ändern.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

export const REPO = resolve(new URL("../..", import.meta.url).pathname);
export const AUDIO_ENDUNGEN = ["mp3", "wav", "m4a", "flac", "ogg"];

export function args(argv = process.argv.slice(2)) {
  const a = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith("--")) continue;
    const k = argv[i].slice(2);
    const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
    a[k] = v;
  }
  return a;
}

/** Sucht das Quellverzeichnis eines Films anhand der Film-ID in _src/videos/*\/manifest.json. */
export function findeFilm(film) {
  const basis = join(REPO, "_src/videos");
  for (const d of readdirSync(basis, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const m = join(basis, d.name, "manifest.json");
    if (existsSync(m) && JSON.parse(readFileSync(m, "utf8")).film === film) return join(basis, d.name);
  }
  throw new Error(`Kein Manifest mit "film": "${film}" unter _src/videos/`);
}

export const leseManifest = (src) => JSON.parse(readFileSync(join(src, "manifest.json"), "utf8"));
export const schreibeManifest = (src, m) => writeFileSync(join(src, "manifest.json"), JSON.stringify(m, null, 2) + "\n");

export function sh(cmd, argv, opts = {}) {
  return execFileSync(cmd, argv, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 64 << 20, ...opts });
}
export const ff = (...a) => sh("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...a]);
export const dauer = (pfad) =>
  parseFloat(sh("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", pfad]).trim());

export function audioDatei(ordner, name) {
  for (const e of AUDIO_ENDUNGEN) {
    const p = join(ordner, `${name}.${e}`);
    if (existsSync(p)) return p;
  }
  return null;
}

/** Zeitplan: Szenendauer = Audiolänge + Luft; Ton beginnt nach dem Vorlauf. */
export function zeitplan(manifest, audioOrdner) {
  const { luft, vorlauf } = manifest.ton;
  let t = 0;
  return manifest.szenen.map((s) => {
    const datei = audioDatei(audioOrdner, s.datei);
    if (!datei) throw new Error(`Audio fehlt: ${s.datei}.(${AUDIO_ENDUNGEN.join("|")}) in ${audioOrdner}`);
    const ad = +dauer(datei).toFixed(3);
    const z = { id: s.id, genre: s.genre, datei, start: +t.toFixed(3), dauer: +(ad + luft).toFixed(3), audioStart: vorlauf, audioDauer: ad };
    t += z.dauer;
    return z;
  });
}
export const gesamtdauer = (zp) => +(zp.at(-1).start + zp.at(-1).dauer).toFixed(3);

/** Tonspur: Szenen-Audio an seine Stelle, kurzer synthetischer Übergangston je Szenenwechsel, −16 LUFS. */
export function tonspur(manifest, zp, ziel) {
  const inputs = [], filter = [], labels = [];
  zp.forEach((z, i) => {
    inputs.push("-i", z.datei);
    const ms = Math.round((z.start + z.audioStart) * 1000);
    filter.push(`[${i}:a]aresample=48000,aformat=channel_layouts=mono,adelay=${ms}:all=1[a${i}]`);
    labels.push(`[a${i}]`);
  });
  if (manifest.ton.uebergangston) {
    zp.slice(1).forEach((z, j) => {
      const ms = Math.round(z.start * 1000);
      // zwei leise Sinustöne (Quinte), 0,18 s, weich ein- und ausgeblendet – aus Code, keine Musik
      filter.push(`sine=f=660:d=0.18:sample_rate=48000,afade=t=in:d=0.02,afade=t=out:st=0.06:d=0.12,volume=0.05,adelay=${ms}:all=1[u${j}a]`);
      filter.push(`sine=f=990:d=0.18:sample_rate=48000,afade=t=in:d=0.02,afade=t=out:st=0.06:d=0.12,volume=0.03,adelay=${ms + 70}:all=1[u${j}b]`);
      labels.push(`[u${j}a]`, `[u${j}b]`);
    });
  }
  const T = gesamtdauer(zp);
  filter.push(`${labels.join("")}amix=inputs=${labels.length}:normalize=0:duration=longest,apad=whole_dur=${T},atrim=0:${T},loudnorm=I=${manifest.ton.lufs}:TP=-1.5:LRA=11,aresample=48000[out]`);
  ff(...inputs, "-filter_complex", filter.join(";"), "-map", "[out]", "-ac", "1", "-ar", "48000", ziel);
  return ziel;
}

/** Endfassung: stummes HyperFrames-Video + Tonspur → H.264 (CRF/Preset aus Manifest) + AAC, faststart. */
export function muxen(manifest, videoStumm, ton, ziel, T) {
  const v = manifest.video;
  ff("-i", videoStumm, "-i", ton, "-map", "0:v:0", "-map", "1:a:0", "-c:v", "libx264", "-crf", String(v.crf),
    "-preset", v.preset, "-pix_fmt", "yuv420p", "-r", String(v.fps), "-c:a", "aac", "-b:a", "128k",
    "-t", String(T), "-movflags", "+faststart", ziel);
  return ziel;
}

// ---------- Untertitel ----------
const vttZeit = (t) => {
  const ms = Math.max(0, Math.round(t * 1000));
  const h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000), s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(ms % 1000).padStart(3, "0")}`;
};
function umbrechen(text, max = 42) {
  if (text.length <= max) return text;
  const mitte = text.length / 2;
  let best = -1;
  for (let i = 0; i < text.length; i++) if (text[i] === " " && (best < 0 || Math.abs(i - mitte) < Math.abs(best - mitte))) best = i;
  return best < 0 ? text : text.slice(0, best) + "\n" + text.slice(best + 1);
}
/** Sprechtext → Untertitel-Stücke: Sätze, zu lange Sätze an Komma/Doppelpunkt geteilt (max. 2 Zeilen à 42 Zeichen). */
export function stuecke(text) {
  const saetze = text.match(/[^.!?]+[.!?]+["“”]?\s*/g) || [text];
  const out = [];
  for (let s of saetze.map((x) => x.trim())) {
    while (s.length > 84) {
      const kandidaten = [...s.matchAll(/[,:;]\s/g)].map((m) => m.index + 1).filter((i) => i > 15 && i < s.length - 10);
      if (!kandidaten.length) break;
      const mitte = s.length / 2;
      const i = kandidaten.reduce((a, b) => (Math.abs(b - mitte) < Math.abs(a - mitte) ? b : a));
      out.push(s.slice(0, i).trim()); s = s.slice(i).trim();
    }
    out.push(s);
  }
  return out;
}
export function untertitel(manifest, zp) {
  let vtt = "WEBVTT\n\n", n = 1;
  zp.forEach((z, i) => {
    const teile = stuecke(manifest.szenen[i].sprechtext);
    const summe = teile.reduce((a, t) => a + t.length, 0);
    let t = z.start + z.audioStart;
    for (const teil of teile) {
      const d = (teil.length / summe) * z.audioDauer;
      vtt += `${n++}\n${vttZeit(t)} --> ${vttZeit(t + d)}\n${umbrechen(teil)}\n\n`;
      t += d;
    }
  });
  return vtt;
}
export function kapitelmarken(zp) {
  return "WEBVTT\n\n" + zp.map((z, i) => `k${i + 1}\n${vttZeit(z.start)} --> ${vttZeit(z.start + z.dauer)}\n${i + 1} ${z.genre}\n`).join("\n");
}

/** Standbilder: je Szene ein Bild kurz vor Szenenende (alles aufgebaut, für Druckraster); Poster = Schlussbild. */
export function standbilder(video, zp, ordner, anteil = 0.96) {
  mkdirSync(ordner, { recursive: true });
  return zp.map((z, i) => {
    const p = join(ordner, `${String(i + 1).padStart(2, "0")}-${z.id}.png`);
    ff("-ss", (z.start + z.dauer * anteil).toFixed(3), "-i", video, "-frames:v", "1", p);
    return p;
  });
}
export function poster(video, T, ziel) {
  ff("-ss", (T - 0.4).toFixed(3), "-i", video, "-frames:v", "1", ziel);
  return ziel;
}

/** Filmdaten für den Player: Kapitel, Haltepunkte, Fragen; eingebettet als JSON zwischen Markern. */
export function playerDaten(manifest, zp, stimme) {
  return {
    film: manifest.film, titel: manifest.titel, anker: manifest.anker,
    video: `media/${manifest.film}.mp4`, poster: `media/${manifest.film}-poster.png`,
    untertitel: `media/${manifest.film}.de.vtt`, kapitelVtt: `media/${manifest.film}-kapitel.vtt`,
    dauer: gesamtdauer(zp), stimme, kennzeichnung: manifest.kennzeichnung[stimme],
    kapitel: zp.map((z, i) => ({ nr: i + 1, genre: z.genre, start: z.start, ende: +(z.start + z.dauer).toFixed(3) })),
    vorhersage: manifest.vorhersage, haltepunkte: manifest.haltepunkte, selbsttest: manifest.selbsttest,
    makingof: manifest.makingof, zurueck: manifest.zurueck,
  };
}
export function playerEinbetten(playerPfad, daten) {
  const html = readFileSync(playerPfad, "utf8");
  const id = daten.film;
  const block = `<script type="application/json" class="filmdaten" data-film="${id}">\n${JSON.stringify(daten)}\n</script>`;
  const re = new RegExp(`<script type="application/json" class="filmdaten" data-film="${id}">[\\s\\S]*?</script>`);
  let neu;
  if (re.test(html)) neu = html.replace(re, block);
  else if (html.includes("<!-- FILMDATEN-ENDE -->")) neu = html.replace("<!-- FILMDATEN-ENDE -->", `${block}\n<!-- FILMDATEN-ENDE -->`);
  else throw new Error("Player ohne Marker <!-- FILMDATEN-ENDE -->");
  writeFileSync(playerPfad, neu);
}
