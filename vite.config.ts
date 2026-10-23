import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Type-only import so vite-react-ssg's `ssgOptions` augmentation on Vite's
// UserConfig is loaded when this file is type-checked in isolation.
import type {} from "vite-react-ssg";

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
  },
});
