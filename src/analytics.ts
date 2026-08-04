// GA4 (gtag.js) for the marketing site. No-ops unless VITE_GA4_MEASUREMENT_ID is
// set at build time, so local/preview builds send nothing. SPA-aware: auto
// page_view is disabled and we send one per client-side route change instead.
//
// POPIA note: enabling this loads Google's tag and sets analytics cookies —
// disclose it in the privacy policy (and add a consent gate) before turning it on.
const MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let initialized = false

export function initAnalytics(): void {
  if (initialized || !MEASUREMENT_ID || typeof window === "undefined") return
  initialized = true

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }
  window.gtag("js", new Date())
  // We emit page_view manually on each route change, so turn off the automatic one.
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageView(path: string): void {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return
  window.gtag("event", name, params)
}
