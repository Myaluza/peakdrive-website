import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./styles/global.css";

// vite-react-ssg owns hydration (dev) and static generation (build). It renders
// the route tree into #root and injects each page's <Head> tags at build time.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
