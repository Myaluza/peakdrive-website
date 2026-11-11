# Phanda Website

Marketing + legal website for the [Phanda](https://github.com/Myaluza/PeakDrive)
app, served at **https://phandadrive.co.za**.

The Phanda app hardcodes these URLs (see `PeakDrive/constants/config.ts`), so the
routes below must keep working:

| Route             | Purpose                                                                     |
| ----------------- | --------------------------------------------------------------------------- |
| `/`               | Landing page                                                                |
| `/privacy`        | Privacy Policy — Play Store requirement, linked from the app's About screen |
| `/terms`          | Terms of Service — linked from the app's About screen                       |
| `/delete-account` | Account & data deletion — Google Play data-deletion URL                     |
| `/support`        | FAQ + WhatsApp/email support                                                |

## Stack

- **Vite + React + TypeScript**
- **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)** — statically
  pre-renders each route to its own HTML file (`dirStyle: 'flat'` → `/privacy` →
  `dist/privacy.html`, `/404` → `dist/404.html`). Real files mean deep links resolve
  directly on the server (no SPA redirect hack) and are crawlable.
- **React Router 7** — vite-react-ssg 0.9.2 only supports v6, so
  `patches/vite-react-ssg+0.9.2.patch` (applied by `patch-package` on `postinstall`)
  points its static render at v7's main entry instead of the removed
  `react-router-dom/server.js`. The `overrides` entry in `package.json` silences its v6
  peer range. If you upgrade vite-react-ssg, check whether it supports v7 natively and
  drop the patch; `npm install` fails loudly if the patch no longer applies.
- Hand-written CSS design system mirroring the app's tokens (`src/styles/theme.css`).
- Hosted on **Cyber Circuit**. `.github/workflows/deploy.yml` uploads every push to `main`.

## Develop

```bash
npm install
npm run dev           # http://localhost:5173
npm run typecheck     # tsc --noEmit
npm run lint          # eslint
npm run format:check  # prettier --check  (CI fails on this)
npm run format        # prettier --write
npm run build         # static site -> dist/
npm run preview       # preview the built site
```

CI (`.github/workflows/ci.yml`) runs `format:check`, `lint`, `typecheck` and
`build` on every push and PR to `main`, and the deploy job waits on it — a red
build does not ship. Running those four locally is the same gate.

## Project layout

```
src/
  main.tsx            vite-react-ssg entry
  routes.tsx          route table (Layout + pages)
  analytics.ts        GA4 gtag wrapper; no-op unless VITE_GA4_MEASUREMENT_ID is set
  components/         Layout, Header, Footer, Brand, Seo, JsonLd, Phone,
                      DownloadBadge, FaqAccordion, LegalPage
  pages/             Home, Privacy, Terms, DeleteAccount, Support, NotFound (/404)
  data/
    site.ts           site-wide constants (edit placeholders here)
    faqs.ts           FAQs, copied verbatim from the app — do not edit here
  styles/            theme.css (tokens), global.css, home.css, legal.css
public/              robots.txt, sitemap.xml, favicon.svg, og-image.png,
                     .htaccess (clean URLs, /download, headers)
.github/workflows/   ci.yml (quality gate on PRs), deploy.yml (upload from main)
```

Every download link goes through `DownloadBadge` (or, for the footer's text
link, uses `site.downloadPath` with the same `click_get_app` event). Don't
hand-roll one — the header and footer both used to, and the footer's was
silently untracked.

## Releasing the app

**Downloads are closed for now.** `downloadsOpen` is false in `src/data/site.ts`,
so the site says "Coming soon" and `/download` and `/install` go to the home page.
The steps to open them are next to that setting and in `public/.htaccess`. The
GitHub releases stay up, because the app's update screen downloads from them.

Phanda isn't on Google Play yet; drivers download the APK. `/download` is a
302 in `public/.htaccess` to
`https://github.com/Myaluza/peakdrive-website/releases/latest/download/Phanda.apk`,
so a new version needs no change to the link:

1. Build `production-apk` in the app repo (`eas build -p android --profile production-apk`).
2. Create a release on this repo with the same APK attached twice, as exactly
   `Phanda.apk` and `PeakDrive.apk`, marked latest. Tag it `app-<version>-<build>`,
   e.g. `app-1.0.0-3`. Drivers download `Phanda.apk`. Builds up to 9 were released
   as `PeakDrive.apk`, and older `apk_url` values point at that name.
3. Update `appVersion`, `appBuild`, `apkReleased`, `apkSha256` and `apkSizeMb` in
   `site.ts`, because `/install` shows them.
4. If older builds must not keep running, raise the minimum in Supabase. From
   1.1.0, builds below it show only an update screen, which downloads this APK
   and opens Android's installer. Use the versioned URL, not `latest`:
   ```sql
   update public.app_release set min_version_code = 5, version_name = '1.1.0 (5)',
     apk_url = 'https://github.com/Myaluza/peakdrive-website/releases/download/app-1.1.0-5/PeakDrive.apk',
     apk_size_bytes = <size in bytes>, updated_at = now()
   where platform = 'android';
   ```
   Skip this for optional releases: drivers on older builds keep working and
   get the new APK from `/download` whenever they like.

## Unconfirmed values

`src/data/site.ts` is the single source of truth for site-wide constants, and a
few of its values are still assumptions. Each is marked `PLACEHOLDER` at its
definition — that marker is the live record; this list is only a summary.

| Value                    | Why it's unconfirmed                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `legalName` / `operator` | Needs the real legal/company name (and registered address, if there is one) for the responsible-party block in the legal pages. |
| `lastUpdated`            | Bumped by hand; nothing enforces it when legal copy changes.                                                                    |
| `public/og-image.png`    | Social card. No e-hailing company is named on it or anywhere on the site (decided 2026-11-11).                                  |

**Brand colour is genuinely undecided.** The site uses Electric Indigo `#6366F1`,
the accent documented in the app's `constants/theme.ts`, but the app's own splash
and login screens use a cyan/teal wordmark. The app is inconsistent with itself,
so this is a decision to make, not a bug to fix — the site follows whatever the
app settles on.

### 🧑‍⚖️ Legal review (important)

The Privacy Policy, Terms and Deletion pages were drafted from the app's **actual**
data practices (Supabase, Google/AdMob/Firebase, Expo, Sentry, POPIA), but they are a
**template, not legal advice**. Have a qualified attorney review them for POPIA
compliance before relying on them.

> Earlier revisions of this file described a review banner on each page and a
> `reviewBanner={false}` prop to remove it. There is no such prop on `LegalPage`
> and no banner in `src/` — the instruction was dead. If the banner was removed
> before the legal review happened, that review is still outstanding.

**Section numbers are not stable.** Headings in `Privacy.tsx` and `Terms.tsx`
carry hardcoded numbers in both the heading text and the `toc` array, so
inserting a clause renumbers everything after it. This has already broken one
external cross-reference: the app's `docs/play-store-submission.md` pointed at
Privacy "§7" for Location, which became §8 when an Analytics section was
inserted. **Cross-reference legal sections by their `id`** (`#location`,
`#analytics`), never by number.

## Analytics (GA4)

Analytics is **off until you set a measurement id** (`.env.example` → `VITE_GA4_MEASUREMENT_ID`,
inlined at build time). When set, `src/analytics.ts` loads gtag.js, sends one `page_view`
per client-side route change, and fires a `click_get_app` event on the download buttons.
Until then, count downloads from the GitHub release asset's download count.

To enable on the live site: in this GitHub repo, **Settings → Secrets and variables →
Actions → Variables**, add `VITE_GA4_MEASUREMENT_ID = G-XXXXXXXXXX`, then re-run the
Deploy workflow (it is inlined at build time). (It's not a secret — a GA4 id is public in the page.)

> **POPIA:** enabling GA4 loads Google's tag and sets analytics cookies. Disclose it in the
> Privacy Policy and add a consent gate before turning it on. This reverses the font
> self-hosting privacy win, so it's a deliberate opt-in, not on by default.

## Deploy

`phandadrive.co.za` is registered and hosted with Cyber Circuit (LiteSpeed, and the plan
has no SSH). Every push to `main` runs the quality gate, builds and uploads `dist`
through cPanel's upload API. Run the **Deploy** workflow by hand to redeploy.

The upload needs two repo secrets: `CPANEL_USERNAME` (Current User in cPanel) and
`CPANEL_TOKEN` (from **Manage API Tokens**). Files are only added or replaced, so old
hashed assets stay on the server until someone clears them.

### The domain

If the address changes, update `domain`/`url` in `src/data/site.ts`,
`public/robots.txt`, `public/sitemap.xml`, the app's `constants/config.ts` and the
backend's bot descriptions.
