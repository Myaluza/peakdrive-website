import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
// Self-hosted Poppins (latin subset) — bundled and served same-origin so we
// don't leak visitor IPs to Google Fonts (POPIA). Weights match --font-sans use.
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/unbounded/latin-700.css";
import "./styles/global.css";

// vite-react-ssg owns hydration (dev) and static generation (build). It renders
// the route tree into #root and injects each page's <Head> tags at build time.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
  customCreateRouter: (dataRoutes, options) =>
    createBrowserRouter(withoutLoaders(dataRoutes), options),
});

/**
 * vite-react-ssg gives every route a loader that fetches a data manifest, even
 * though no page here uses one. The router then starts empty and waits for that
 * fetch, so React hydrates nothing, and on any real connection the finished
 * page was added beside the server's copy: every page showed twice. Without
 * loaders the router is ready at once and matches the server's HTML.
 */
function withoutLoaders(routeList: RouteObject[]): RouteObject[] {
  return routeList.map(
    (route) =>
      ({
        ...route,
        loader: undefined,
        children: route.children && withoutLoaders(route.children),
      }) as RouteObject,
  );
}
