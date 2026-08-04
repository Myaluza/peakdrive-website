import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { initAnalytics, trackPageView } from "../analytics";

/** App shell: skip link, sticky header, routed page, footer. */
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Load GA4 once (no-op unless configured). Declared before the page-view effect
  // so the gtag shim exists when the first page_view fires.
  useEffect(() => {
    initAnalytics();
  }, []);

  // One page_view per client-side route change (auto page_view is disabled).
  // Keyed on pathname only, so in-page hash anchors don't double-count.
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  // Scroll to top on navigation, but honour in-page hash anchors.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
