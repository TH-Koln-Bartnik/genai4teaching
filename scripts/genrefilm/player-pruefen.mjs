#!/usr/bin/env node
// Playwright-Prüfung des Genrefilm-Players: 1200 und 390 px, Vorhersage, Haltepunkt mit Frage, Weiter,
// Kapitelsprung, Selbsttest, Kopier-Knopf, Tastatur, Konsolenfehler, Bildschirmfotos, optional axe.
//   node scripts/genrefilm/player-pruefen.mjs --film kap02-token-genres [--axe /pfad/axe.min.js] [--aus <ordner>]
// Startet selbst einen kleinen Webserver auf dem Repo-Ordner (Video braucht http, nicht file://).
import http from "node:http";
import { createReadStream, existsSync, statSync, mkdirSync, readFileSync } from "node:fs";
import { join, extname } from "node:path";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { REPO, args } from "./pipeline.mjs";

let chromium;
try { ({ chromium } = await import("playwright")); }
catch { ({ chromium } = createRequire(execSync("npm root -g").toString().trim() + "/")("playwright")); }

const a = args();
const film = a.film || "kap02-token-genres";
const aus = a.aus || join(REPO, "_src/videos/s5-token-genres/build/pruefung");
mkdirSync(aus, { recursive: true });
const typen = { ".html": "text/html; charset=utf-8", ".mp4": "video/mp4", ".vtt": "text/vtt", ".png": "image/png", ".js": "text/javascript", ".css": "text/css", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const p = join(REPO, decodeURIComponent(req.url.split("?")[0]));
  if (!p.startsWith(REPO) || !existsSync(p) || statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  const groesse = statSync(p).size, range = req.headers.range;
  const kopf = { "Content-Type": typen[extname(p)] || "application/octet-stream", "Accept-Ranges": "bytes" };
  if (range) { // Video-Sprünge brauchen Range-Anfragen
    const [s, e] = range.replace("bytes=", "").split("-"); const start = +s, ende = e ? +e : groesse - 1;
    res.writeHead(206, { ...kopf, "Content-Range": `bytes ${start}-${ende}/${groesse}`, "Content-Length": ende - start + 1 });
    return createReadStream(p, { start, end: ende }).pipe(res);
  }
  res.writeHead(200, { ...kopf, "Content-Length": groesse }); createReadStream(p).pipe(res);
}).listen(0);
const port = server.address().port;
const url = `http://localhost:${port}/interactions/genrefilm-player.html?film=${film}`;

const ergebnis = [];
const ok = (bed, text) => { ergebnis.push(`${bed ? "OK  " : "FEHLER"} ${text}`); };
const browser = await chromium.launch({ args: ["--autoplay-policy=no-user-gesture-required"] });

for (const breite of [1200, 390]) {
  const ctx = await browser.newContext({ viewport: { width: breite, height: 900 }, permissions: ["clipboard-read", "clipboard-write"] });
  const page = await ctx.newPage();
  const fehler = [];
  page.on("console", (m) => m.type() === "error" && fehler.push(m.text()));
  page.on("pageerror", (e) => fehler.push(String(e)));
  await page.goto(url);
  await page.waitForFunction(() => window.__genrefilm && window.__genrefilm.video.readyState >= 1, null, { timeout: 20000 });
  const F = await page.evaluate(() => window.__genrefilm.F);
  ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${breite}px: kein horizontales Scrollen`);
  ok(await page.evaluate(() => [...document.querySelectorAll("video track")].some((t) => t.default)), `${breite}px: Untertitel standardmäßig an`);
  ok(await page.evaluate(() => window.__genrefilm.video.autoplay === false && window.__genrefilm.video.paused), `${breite}px: kein Autoplay`);
  // Phase 1
  await page.click("#vh-optionen button:nth-child(2)");
  ok((await page.getAttribute("#vh-optionen button:nth-child(2)", "aria-pressed")) === "true", `${breite}px: Vorhersage wählbar`);
  // Haltepunkt nach Szene 4
  const k4 = F.kapitel[3];
  await page.evaluate((t) => { const v = window.__genrefilm.video; v.muted = true; v.currentTime = t; }, k4.ende - 0.8);
  await page.evaluate(() => window.__genrefilm.video.play());
  await page.waitForSelector("#halt.an", { timeout: 8000 }).catch(() => {});
  const haltOffen = await page.isVisible("#halt.an");
  ok(haltOffen, `${breite}px: Film hält nach Szene 4 an`);
  ok(await page.evaluate(() => window.__genrefilm.video.paused), `${breite}px: Video pausiert am Haltepunkt`);
  ok((await page.textContent("#halt-frage")).includes(F.haltepunkte[0].frage.slice(0, 20)), `${breite}px: Haltepunkt-Frage angezeigt`);
  if (breite === 1200) await page.screenshot({ path: join(aus, `player-${breite}-haltepunkt.png`) });
  await page.click("#halt-optionen button:nth-child(1)");
  ok((await page.textContent("#halt-rueck")).startsWith("Richtig."), `${breite}px: Rückmeldung nach Klick (aria-live)`);
  ok((await page.getAttribute("#halt-rueck", "aria-live")) === "polite", `${breite}px: Rückmeldung mit aria-live`);
  await page.click("#weiter");
  await page.waitForTimeout(600);
  ok(!(await page.evaluate(() => window.__genrefilm.video.paused)), `${breite}px: Weiter spielt ab`);
  // Haltepunkt nach Szene 5 zeigt Auflösung der Eingangsvorhersage
  await page.evaluate((t) => { window.__genrefilm.video.currentTime = t; }, F.kapitel[4].ende - 0.6);
  await page.waitForSelector("#halt.an", { timeout: 8000 }).catch(() => {});
  ok((await page.textContent("#halt-optionen")).includes("Eingangsvorhersage stimmte"), `${breite}px: Eingangsvorhersage nach Szene 5 aufgelöst`);
  await page.click("#weiter");
  // Kapitelsprung
  await page.click("#kapitel button:nth-child(7)");
  await page.waitForTimeout(500);
  const t7 = await page.evaluate(() => window.__genrefilm.video.currentTime);
  ok(Math.abs(t7 - F.kapitel[6].start) < 1.0, `${breite}px: Kapitelsprung zu Szene 7 (${t7.toFixed(1)} s)`);
  // Tastatur
  await page.evaluate(() => { window.__genrefilm.video.pause(); document.activeElement.blur(); });
  await page.keyboard.press("Space");
  await page.waitForTimeout(300);
  ok(!(await page.evaluate(() => window.__genrefilm.video.paused)), `${breite}px: Leertaste startet`);
  const vor = await page.evaluate(() => window.__genrefilm.video.currentTime);
  await page.keyboard.press("ArrowRight");
  const nach = await page.evaluate(() => window.__genrefilm.video.currentTime);
  ok(nach - vor > 4, `${breite}px: Pfeil rechts springt 5 s vor`);
  await page.keyboard.press("Space");
  // Ende → Selbsttest offen
  await page.evaluate((t) => { const v = window.__genrefilm.video; v.currentTime = t; v.play(); }, F.dauer - 0.5);
  await page.waitForFunction(() => document.getElementById("selbsttest").open, null, { timeout: 8000 }).catch(() => {});
  ok(await page.evaluate(() => document.getElementById("selbsttest").open), `${breite}px: Selbsttest öffnet sich am Ende`);
  await page.click("#st-fragen .frage:nth-child(3) .optionen button:nth-child(2)");
  ok((await page.textContent("#st-fragen .frage:nth-child(3) .rueck")).startsWith("Richtig."), `${breite}px: Selbsttest-Rückmeldung`);
  // Making-of, Kopier-Knopf
  await page.click("#makingof summary");
  await page.click("#kopieren");
  await page.waitForTimeout(300);
  const kopiert = await page.evaluate(() => navigator.clipboard.readText().catch(() => ""));
  ok(kopiert === F.makingof.vorlage, `${breite}px: Kopier-Knopf kopiert die Vorlage`);
  await page.screenshot({ path: join(aus, `player-${breite}-ende.png`), fullPage: true });
  ok(fehler.length === 0, `${breite}px: keine Konsolenfehler${fehler.length ? ": " + fehler.join(" | ") : ""}`);
  // axe
  if (a.axe && breite === 1200) {
    await page.addScriptTag({ content: readFileSync(a.axe, "utf8") });
    const r = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21aa"] })).violations.map((v) => `${v.id} (${v.impact}, ${v.nodes.length})`));
    ok(r.length === 0, `axe Player: ${r.length ? r.join("; ") : "keine Verstöße"}`);
  }
  await ctx.close();
}
await browser.close();
server.close();
console.log(ergebnis.join("\n"));
process.exit(ergebnis.some((z) => z.startsWith("FEHLER")) ? 1 : 0);
