#!/usr/bin/env node
// S5 „Das nächste Token – in neun Genres“ bauen. Dünne Hülle um die gemeinsame Pipeline scripts/genrefilm/bauen.mjs.
//   node scripts/video-s5-bauen.mjs                      Platzhalterstimme (Piper) aus audio-platzhalter/
//   node scripts/video-s5-bauen.mjs --audio _src/videos/s5-token-genres/audio --stimme elevenlabs   (Sitzung B)
//   node scripts/video-s5-bauen.mjs --probe 10           Renderzeit an 10 s Film messen
// Platzhalter neu sprechen:  python3 scripts/genrefilm/stimme-piper.py --film kap02-token-genres
import { spawnSync } from "node:child_process";
const rest = process.argv.slice(2);
const hat = (k) => rest.includes(k);
const argv = ["scripts/genrefilm/bauen.mjs", "--film", "kap02-token-genres"];
if (!hat("--audio")) argv.push("--audio", "_src/videos/s5-token-genres/audio-platzhalter");
if (!hat("--stimme")) argv.push("--stimme", rest.join(" ").includes("audio-platzhalter") || !hat("--audio") ? "piper" : "elevenlabs");
const r = spawnSync(process.execPath, [...argv, ...rest], { stdio: "inherit" });
process.exit(r.status ?? 1);
