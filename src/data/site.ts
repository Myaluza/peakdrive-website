// Single source of truth for site-wide constants. Mirrors the app's
// PeakDrive/constants/config.ts + app.config.js so the website and the app stay
// in sync. Items marked PLACEHOLDER should be confirmed before launch (see README).

export interface City {
  name: string;
  live: boolean;
}

export interface Social {
  label: string;
  href: string;
  // Inline SVG path data (24x24 viewBox) so we ship no icon dependency.
  icon: string;
}

export const site = {
  appName: "PeakDrive",
  tagline: "Stop guessing. Start earning.",
  // Blurb reused from the app's About screen (app/(main)/about.tsx).
  description:
    "PeakDrive helps Uber and Bolt drivers in South Africa find high-demand areas by tracking local events in real time. Position yourself smarter, earn more, waste less time.",

  domain: "peakdrive.co.za",
  url: "https://peakdrive.co.za",

  // Legal / responsible-party details — PLACEHOLDER, confirm before publishing.
  legalName: "PeakDrive",
  operator: "Myaluza",
  jurisdiction: "the Republic of South Africa",

  supportEmail: "support@peakdrive.co.za",
  // International format, no leading "+", for wa.me links.
  supportWhatsApp: "27671884585",

  // PLACEHOLDER — confirm the live Play Store listing URL.
  packageId: "com.myaluza.PeakDrive",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.myaluza.PeakDrive",

  // Keep in sync with the date the legal copy was last edited.
  lastUpdated: "11 August 2026",

  // The single statement of coverage on this site — the home page reads these
  // flags rather than restating coverage in prose.
  //
  // All four are live. Checked against the events table on 2026-08-10: every one
  // carried 80+ upcoming events (Durban 151, Johannesburg 118, Cape Town 100,
  // Pretoria 80), while this file still advertised three of them as "coming
  // soon" and directly contradicted the in-app FAQ.
  cities: [
    { name: "Durban", live: true },
    { name: "Johannesburg", live: true },
    { name: "Cape Town", live: true },
    { name: "Pretoria", live: true },
  ] as City[],

  socials: [
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@peakdrive",
      icon: "M16.5 3c.3 2.1 1.6 3.7 3.5 4v2.4c-1.3.1-2.5-.3-3.6-1v6.3a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.5a3.2 3.2 0 1 0 2.3 3V3h2.6Z",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/peakdrive",
      icon: "M12 7.6A4.4 4.4 0 1 0 12 16.4 4.4 4.4 0 0 0 12 7.6Zm0 7.2A2.8 2.8 0 1 1 12 9.2a2.8 2.8 0 0 1 0 5.6Zm4.6-7.4a1 1 0 1 1-1-1 1 1 0 0 1 1 1ZM20 7.6a5 5 0 0 0-1.4-3.6A5 5 0 0 0 15 2.6C13.7 2.5 10.3 2.5 9 2.6a5 5 0 0 0-3.6 1.4A5 5 0 0 0 4 7.6c-.1 1.3-.1 4.7 0 6a5 5 0 0 0 1.4 3.6A5 5 0 0 0 9 18.6c1.3.1 4.7.1 6 0a5 5 0 0 0 3.6-1.4 5 5 0 0 0 1.4-3.6c.1-1.3.1-4.7 0-6Zm-1.9 7.4a2.8 2.8 0 0 1-1.6 1.6c-1.1.4-3.7.3-4.5.3s-3.4.1-4.5-.3a2.8 2.8 0 0 1-1.6-1.6c-.4-1.1-.3-3.7-.3-4.5s-.1-3.4.3-4.5A2.8 2.8 0 0 1 7.5 5.9c1.1-.4 3.7-.3 4.5-.3s3.4-.1 4.5.3a2.8 2.8 0 0 1 1.6 1.6c.4 1.1.3 3.7.3 4.5s.1 3.4-.3 4.5Z",
    },
    {
      label: "X",
      href: "https://twitter.com/peakdrive",
      icon: "M17.5 3h3l-6.6 7.5L21.7 21h-5.9l-4.3-5.6L6.5 21H3.4l7-8L2.7 3h6l3.9 5.1L17.5 3Zm-1 16h1.7L7.6 4.7H5.8L16.5 19Z",
    },
  ] as Social[],
};

export const whatsappLink = `https://wa.me/${site.supportWhatsApp}`;
export const mailtoLink = `mailto:${site.supportEmail}`;

// Play Store URL with an install `referrer` for attribution. Google Play surfaces
// it in the Play Console (Acquisition) and, when GA4 is linked to Play, as campaign
// data — so installs coming from the website are distinguishable from organic ones.
// Keep `site.playStoreUrl` clean (canonical) for JSON-LD; use this for CTA links.
export const playStoreCtaUrl = `${site.playStoreUrl}&referrer=${encodeURIComponent(
  "utm_source=peakdrive_web&utm_medium=web&utm_campaign=site_cta",
)}`;
