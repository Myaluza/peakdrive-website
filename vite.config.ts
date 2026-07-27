import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Type-only import so vite-react-ssg's `ssgOptions` augmentation on Vite's
// UserConfig is loaded when this file is type-checked in isolation.
import type {} from "vite-react-ssg";

// The site is served from the apex domain (peakdrive.co.za) via a CNAME, so the
// base is the site root. If you ever host under a sub-path (e.g. a project Pages
// URL like myaluza.github.io/peakdrive-website/), change `base` accordingly.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  ssgOptions: {
    // flat: `/privacy` -> `dist/privacy.html`, `/404` -> `dist/404.html`.
    // GitHub Pages serves `privacy.html` at the clean URL `/privacy` (which the
    // app hardcodes) and uses `404.html` as its custom not-found page.
    dirStyle: "flat",
  },
});
