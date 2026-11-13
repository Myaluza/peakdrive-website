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
    "Phanda helps e-hailing drivers in Durban and the surrounding areas find high-demand spots by tracking local events in real time. Position yourself smarter, earn more, waste less time.",

  domain: "phandadrive.co.za",
  url: "https://phandadrive.co.za",

  // Legal / responsible-party details, from the CIPC registration certificate
  // (COR 14.3, 12 November 2026). Phanda is the app's name, not a separate entity.
  legalName: "Kubongwa Isibusiso (Pty) Ltd",
  registrationNumber: "2026/913810/07",
  // Registered office as filed with CIPC; shown so the site meets ECTA s43.
  registeredAddress: "18 Bhubesi Place, Umlazi AA, Umlazi, KwaZulu-Natal, 4089",
  jurisdiction: "the Republic of South Africa",
  // Registered with the Information Regulator (POPIA s55). Reached through
  // email support.
  informationOfficer: "Thuthukani Ngubane",

  // Email is the only support channel.
  supportEmail: "support@phandadrive.co.za",

  packageId: "com.myaluza.PeakDrive",
  // False until the app opens to the public: buttons say "Coming soon" and the
  // install page is left out. To open, set this to true and restore the
  // `/download` and `/install` rules in public/.htaccess and the sitemap entry.
  downloadsOpen: false,
  // Not on Google Play yet: drivers download the APK directly. `/download` is
  // a redirect in public/.htaccess to the newest GitHub Release asset on this
  // repo, so a new version is a new release, not a site change.
  downloadPath: "/download",
  installPath: "/install",
  // Shown next to the buttons, so drivers know what they're getting. Update
  // with each release.
  apkSizeMb: 38,
  // The live release, shown on /install and in the structured data. Update all
  // of these with each release.
  appVersion: "1.1.0",
  appBuild: 9,
  apkReleased: "6 November 2026",
  apkFileName: "Phanda.apk",
  apkSha256: "773174c22ed59c5d8c63e287a06ff905a78131eedf852cfd80c64414334f2978",

  // Keep in sync with the date the legal copy was last edited.
  lastUpdated: "13 November 2026",

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

export const emailLink = `mailto:${site.supportEmail}`;

// Absolute, for JSON-LD; the buttons use the relative `site.downloadPath`.
export const downloadUrl = `${site.url}${site.downloadPath}`;
