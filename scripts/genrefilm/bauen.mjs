#!/usr/bin/env node
// Genrefilm bauen: Manifest → Zeitplan (aus Audiolängen) → Szenen (HyperFrames) → Rendern → Ton → MP4,
// Untertitel, Kapitelmarken, Poster, Standbilder, Player-Daten.
//
// Aufruf (im Repo-Hauptordner):
//   node scripts/genrefilm/bauen.mjs --film kap02-token-genres --audio _src/videos/s5-token-genres/audio-platzhalter
//   … --stimme elevenlabs        Kennzeichnung im Player („Stimmen KI-erzeugt (ElevenLabs v3)“); Standard: piper
//   … --probe 10                 nur die ersten 10 s rendern (Renderzeit hochrechnen), nichts nach interactions/
//   … --ohne-render              stummes Video aus dem letzten Lauf wiederverwenden (nur Ton/VTT/Player neu)
//
// Das Szenen-Modul des Films liegt neben dem Manifest (szenen.mjs) und exportiert
//   szenen   { s1: (ctx) => ({html, css, js}), … }   basisCss   und optional   async tokenwerte()
import { copyFileSync, mkdirSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { baueKomposition } from "./komposition.mjs";
import {
  REPO, args, findeFilm, leseManifest, schreibeManifest, sh, zeitplan, gesamtdauer, tonspur, muxen,
  untertitel, kapitelmarken, standbilder, poster, playerDaten, playerEinbetten,
} from "./pipeline.mjs";

const a = args();
if (!a.film) { console.error("Bitte --film <id> angeben (siehe manifest.json)."); process.exit(1); }
const src = findeFilm(a.film);
const audio = a.audio ? join(REPO, a.audio) : join(src, "audio");
const stimme = a.stimme || "piper";
const build = join(src, "build");
mkdirSync(join(build, "assets"), { recursive: true });
const t00 = Date.now();
const log = (...x) => console.log(`[${((Date.now() - t00) / 1000).toFixed(1).padStart(6)} s]`, ...x);

// 1 Manifest + Szenen-Modul; berechnete Werte (z. B. Tokens) ins Manifest schreiben
const manifest = leseManifest(src);
const modul = await import(pathToFileURL(join(src, "szenen.mjs")).href);
let extra = {};
if (modul.tokenwerte) {
  manifest.tokenwerte = await modul.tokenwerte();
  schreibeManifest(src, manifest);
  extra.tok = manifest.tokenwerte;
  log("Tokenwerte berechnet und ins Manifest geschrieben");
}

// 2 Zeitplan aus den Audiolängen
const zp = zeitplan(manifest, audio);
const T = gesamtdauer(zp);
writeFileSync(join(build, "zeitplan.json"), JSON.stringify(zp.map((z) => ({ ...z, datei: relative(REPO, z.datei) })), null, 2));
log(`Zeitplan: ${zp.length} Szenen, ${T.toFixed(1)} s (${zp.map((z) => z.dauer.toFixed(1)).join(" | ")})`);

// 3 Komposition schreiben
copyFileSync(join(REPO, "node_modules/gsap/dist/gsap.min.js"), join(build, "assets/gsap.min.js"));
writeFileSync(join(build, "index.html"), baueKomposition({ manifest, zeitplan: zp, szenen: modul.szenen, basisCss: modul.basisCss, extra }));
log("index.html geschrieben");

// 4 Rendern (stumm)
const stumm = join(build, a.probe ? "probe-stumm.mp4" : "video-stumm.mp4");
if (!a["ohne-render"] || !existsSync(stumm)) {
  const r0 = Date.now();
  const opt = ["hyperframes", "render", build, "-o", stumm, "--fps", String(manifest.video.fps), "--crf", "16", "--quiet"];
  if (a.probe) opt.push("--end", String(a.probe));
  sh("npx", opt, { cwd: REPO, stdio: ["ignore", "pipe", "pipe"] });
  const sek = (Date.now() - r0) / 1000;
  const film = a.probe ? +a.probe : T;
  log(`Gerendert: ${film.toFixed(1)} s Film in ${sek.toFixed(0)} s (Faktor ${(sek / film).toFixed(1)}; hochgerechnet ganzer Film ≈ ${((sek / film) * T / 60).toFixed(1)} min)`);
  if (a.probe) process.exit(0);
}

// 5 Ton + Endfassung
const media = join(REPO, "interactions/media");
const ton = tonspur(manifest, zp, join(build, "ton.wav"));
const mp4 = muxen(manifest, stumm, ton, join(media, `${manifest.film}.mp4`), T);
const mb = statSync(mp4).size / 1e6;
log(`MP4: ${relative(REPO, mp4)} – ${mb.toFixed(1)} MB${mb > manifest.video.maxMB ? `  ACHTUNG > ${manifest.video.maxMB} MB` : ""}`);
const mess = spawnSync("ffmpeg", ["-hide_banner", "-nostats", "-i", mp4, "-af", "ebur128=framelog=quiet", "-f", "null", "-"], { encoding: "utf8" }).stderr;
const I = (mess.match(/I:\s+(-?[\d.]+) LUFS/) || [])[1];
writeFileSync(join(build, "lautheit.txt"), mess);
log(`Lautheit integriert: ${I} LUFS (Ziel ${manifest.ton.lufs})`);

// 6 Untertitel, Kapitel, Poster, Standbilder
writeFileSync(join(media, `${manifest.film}.de.vtt`), untertitel(manifest, zp));
writeFileSync(join(media, `${manifest.film}-kapitel.vtt`), kapitelmarken(zp));
poster(mp4, T, join(media, `${manifest.film}-poster.png`));
standbilder(mp4, zp, join(build, "standbilder"));
log("Untertitel, Kapitelmarken, Poster, Standbilder geschrieben");

// 7 Player-Daten
playerEinbetten(join(REPO, "interactions/genrefilm-player.html"), playerDaten(manifest, zp, stimme));
log(`Player-Daten für ${manifest.film} eingebettet (Stimme: ${stimme})`);
