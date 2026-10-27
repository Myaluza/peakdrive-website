import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Type-only import so vite-react-ssg's `ssgOptions` augmentation on Vite's
// UserConfig is loaded when this file is type-checked in isolation.
import type {} from "vite-react-ssg";

// An executable inline <script> — no `src`, and either no `type` or a JS one.
// JSON-LD (`type="application/ld+json"`) is a data block the browser never
// runs, so CSP doesn't apply to it and it stays inline for crawlers.
const INLINE_SCRIPT =
  /<script(?![^>]*\bsrc=)(?![^>]*\btype="(?!module|text\/javascript)[^"]*")([^>]*)>([\s\S]*?)<\/script>/g;

/**
 * Moves every executable inline script in the generated pages into a
 * same-origin file, so the Content-Security-Policy in netlify.toml can say
 * `script-src 'self'` without `'unsafe-inline'`.
 *
 * vite-react-ssg writes two inline scripts into each page: the router's
 * hydration data, and `window.__VITE_REACT_SSG_HASH__`, which is random on
 * every build. A static CSP can't hash a value that changes per build, so we
 * externalise them instead. A blocking classic `<script src>` runs at the same
 * point in parsing as the inline one it replaces, so execution order is
 * unchanged.
 */
async function externaliseInlineScripts(outDir: string) {
  const dir = resolve(outDir);
  const pages = (await readdir(dir)).filter((f) => f.endsWith(".html"));
  for (const page of pages) {
    const file = join(dir, page);
    const html = await readFile(file, "utf-8");
    const written: Promise<void>[] = [];
    const out = html.replace(INLINE_SCRIPT, (_, attrs: string, body: string) => {
      const name = `assets/inline-${createHash("sha256").update(body).digest("hex").slice(0, 12)}.js`;
      written.push(writeFile(join(dir, name), body, "utf-8"));
      return `<script${attrs} src="/${name}"></script>`;
    });
    await Promise.all(written);
    if (out !== html) await writeFile(file, out, "utf-8");
  }
}

// The site is served from the apex domain (peakdrive.co.za) on Netlify, so the
// base is the site root. If you ever host under a sub-path, change `base`.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  ssgOptions: {
    // flat: `/privacy` -> `dist/privacy.html`, `/404` -> `dist/404.html`.
    // Netlify serves `privacy.html` at the clean URL `/privacy` (which the app
    // hardcodes) and uses `404.html` as its custom not-found page.
    dirStyle: "flat",
    onFinished: externaliseInlineScripts,
  },
});
