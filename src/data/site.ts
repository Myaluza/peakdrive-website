// Single source of truth for site-wide constants. Mirrors the app's
// PeakDrive/constants/config.ts + app.config.js so the website and the app stay
// in sync. Items marked PLACEHOLDER should be confirmed before launch (see README).

export interface City {
  name: string;
  live: boolean;
}

export const site = {
  appName: "Phanda",
  tagline: "Stop guessing. Start earning.",
  // Blurb reused from the app's About screen (app/(main)/about.tsx).
  description:
    "Phanda helps Uber and Bolt drivers in Durban and the surrounding areas find high-demand spots by tracking local events in real time. Position yourself smarter, earn more, waste less time.",

  // Netlify's default address until Phanda has a domain of its own.
  domain: "surgedrive.netlify.app",
  url: "https://surgedrive.netlify.app",

  // Legal / responsible-party details — PLACEHOLDER, confirm before publishing.
  legalName: "Phanda",
  operator: "Myaluza",
  jurisdiction: "the Republic of South Africa",
  // Registered with the Information Regulator (POPIA s55). Reached through
  // WhatsApp support.
  informationOfficer: "Thuthukani Ngubane",

  // WhatsApp is the only support channel for now: there's no domain to send
  // email from. International format, no leading "+", for wa.me links.
  supportWhatsApp: "27671884585",
  supportWhatsAppDisplay: "+27 67 188 4585",

  packageId: "com.myaluza.PeakDrive",
  // Not on Google Play yet: drivers download the APK directly. `/download` is
  // a redirect in netlify.toml to the newest GitHub Release asset on this
  // repo, so a new version is a new release, not a site change.
  downloadPath: "/download",
  // Shown next to the buttons, so drivers know what they're getting. Update
  // with each release.
  apkSizeMb: 34,

  // Keep in sync with the date the legal copy was last edited.
  lastUpdated: "5 November 2026",

  // The single statement of coverage on this site — the home page reads these
  // flags rather than restating coverage in prose.
  //
  // Durban only, from 2026-10-23: Phanda is getting Durban and its
  // surrounds working properly before it expands. The other three are paused
  // in the backend and shown as "coming soon" in the app — keep this file
  // matching that, and `serviceArea` below matching the backend's 60 km
  // service area.
  cities: [
    { name: "Durban", live: true },
    { name: "Johannesburg", live: false },
    { name: "Cape Town", live: false },
    { name: "Pretoria", live: false },
  ] as City[],

  // What "Durban and surrounding areas" means on the ground.
  serviceArea: ["Durban CBD", "Umhlanga", "Ballito", "Pinetown", "Westville", "Amanzimtoti"],
};

// Phanda Plus (coming soon), paid in the app. Read by the /plus page
// and Terms §6 so the two can't quote different prices.
export const plusPlans = [
  { period: "1 day", priceRand: 5 },
  { period: "1 week", priceRand: 15 },
  { period: "1 month", priceRand: 50 },
];

export const whatsappLink = `https://wa.me/${site.supportWhatsApp}`;

// Absolute, for JSON-LD; the buttons use the relative `site.downloadPath`.
export const downloadUrl = `${site.url}${site.downloadPath}`;
