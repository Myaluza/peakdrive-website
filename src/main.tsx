import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
// Self-hosted Poppins (latin subset) — bundled and served same-origin so we
// don't leak visitor IPs to Google Fonts (POPIA). Weights match --font-sans use.
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "./styles/global.css";

// vite-react-ssg owns hydration (dev) and static generation (build). It renders
// the route tree into #root and injects each page's <Head> tags at build time.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
