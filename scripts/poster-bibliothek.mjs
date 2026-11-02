// Standbild (Poster) für die Bibliothek der Prompts: zeigt den Raum, bevor WebGL geladen wird.
// Aufruf: node scripts/poster-bibliothek.mjs && node scripts/build-bibliothek.mjs
import { createRequire } from "node:module";
import { resolve } from "node:path";
const { chromium } = createRequire(import.meta.url)("playwright");
const b = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const s = await (await b.newContext({ viewport: { width: 1100, height: 900 }, colorScheme: "light" })).newPage();
await s.goto("file://" + resolve("interactions/bibliothek-der-prompts.html"));
await s.click("#tipp-fest"); await s.click("#ansicht-3d"); await s.click("#start-3d");
await s.waitForSelector("#buehne canvas"); await s.waitForTimeout(800);
await s.evaluate(() => document.querySelectorAll(".ort,.steuer").forEach((e) => e.remove()));
await s.locator("#buehne canvas").screenshot({ path: "_src/bibliothek/poster.jpg", type: "jpeg", quality: 62 });
await b.close();
console.log("_src/bibliothek/poster.jpg");
