# PeakDrive Website

Marketing + legal website for the [PeakDrive](https://github.com/Myaluza/PeakDrive)
app, served at **https://peakdrive.co.za**.

The PeakDrive app hardcodes these URLs (see `PeakDrive/constants/config.ts`), so the
routes below must keep working:

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/privacy` | Privacy Policy — Play Store requirement, linked from the app's About screen |
| `/terms` | Terms of Service — linked from the app's About screen |
| `/delete-account` | Account & data deletion — Google Play data-deletion URL |
| `/support` | FAQ + WhatsApp/email support |

## Stack

- **Vite + React + TypeScript**
- **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)** — statically
  pre-renders each route to its own HTML file (`dirStyle: 'flat'` → `/privacy` →
  `dist/privacy.html`, `/404` → `dist/404.html`). Real files mean deep links resolve
  directly on GitHub Pages (no SPA redirect hack) and are crawlable.
- Hand-written CSS design system mirroring the app's tokens (`src/styles/theme.css`).
- Deployed to **GitHub Pages** via GitHub Actions.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # static site -> dist/
npm run preview    # preview the built site
```

## Project layout

```
src/
  main.tsx            vite-react-ssg entry
  routes.tsx          route table (Layout + pages)
  components/         Layout, Header, Footer, Brand, Seo, DownloadBadge,
                      FaqAccordion, LegalPage
  pages/             Home, Privacy, Terms, DeleteAccount, Support, NotFound
  data/
    site.ts           site-wide constants (edit placeholders here)
    faqs.ts           FAQs, copied verbatim from the app
  styles/            theme.css (tokens), global.css, home.css, legal.css
public/              CNAME, .nojekyll, robots.txt, sitemap.xml, favicon.svg, og-image.png
.github/workflows/   deploy.yml (GitHub Pages)
```

## ⚠️ Before you publish — placeholders to confirm

Edit **`src/data/site.ts`** (single source of truth):

- [x] **`supportWhatsApp`** — set to `27671884585` (+27 67 188 4585).
- [ ] **`playStoreUrl`** / **`packageId`** — confirm the live Play Store listing URL
      (built from the package id `com.myaluza.PeakDrive`; correct once published).
- [ ] **`socials`** — TikTok / Instagram / X handles are assumed to be `@peakdrive`
      (from the app's About screen). Confirm they exist or update them.
- [ ] **`legalName`** / **`operator`** — real legal/company name (and, if you have
      one, a registered address) for the responsible-party block in the legal pages.
- [ ] **`lastUpdated`** — bump whenever you change the legal copy.

Assets (in `public/` and `public/screenshots/`):

- [x] App **screenshots** — real ones added: `surge-circle.jpg` (hero) and
      `events-list.jpg` (showcase). Replace with fresh captures anytime.
- [ ] **`og-image.png`** — auto-generated placeholder; swap for a real social card.

### 🎨 Brand colour — please confirm

The site uses **Electric Indigo `#6366F1`**, the brand accent documented in the app's
`constants/theme.ts` (its UI primary). But the app's **splash and login screens use a
cyan/teal wordmark**. Decide which is the real PeakDrive brand and tell me — I'll
recolour the site (and the favicon/OG image) to match. Right now they're inconsistent
with each other in the app itself.

### 🧑‍⚖️ Legal review (important)

The Privacy Policy, Terms and Deletion pages were drafted from the app's **actual**
data practices (Supabase, Google/AdMob/Firebase, Expo, Sentry, POPIA), but they are a
**template, not legal advice**. Each page shows a review banner — have a qualified
attorney review them for POPIA compliance, then remove the banner by setting
`reviewBanner={false}` (in `src/pages/Privacy.tsx` and `Terms.tsx`).

## Analytics (GA4)

Analytics is **off until you set a measurement id** (`.env.example` → `VITE_GA4_MEASUREMENT_ID`,
inlined at build time). When set, `src/analytics.ts` loads gtag.js, sends one `page_view`
per client-side route change, and fires a `click_get_app` event on the Play CTAs. Those
CTAs also carry an install `referrer` (`utm_source=peakdrive_web…`) so installs are
attributable in the Play Console.

To enable on the live site: **Settings → Secrets and variables → Actions → Variables →
New variable** `VITE_GA4_MEASUREMENT_ID = G-XXXXXXXXXX`. The deploy workflow already passes
it to the build. (It's not a secret — a GA4 id is public in the page.)

> **POPIA:** enabling GA4 loads Google's tag and sets analytics cookies. Disclose it in the
> Privacy Policy and add a consent gate before turning it on. This reverses the font
> self-hosting privacy win, so it's a deliberate opt-in, not on by default.

## Deploy to GitHub Pages

1. Create a repo (e.g. `Myaluza/peakdrive-website`) and push this folder to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to
   `main`.

### DNS for `peakdrive.co.za`

At your `.co.za` registrar, point the domain at GitHub Pages:

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `myaluza.github.io` |

Then in **Settings → Pages**, set the custom domain to `peakdrive.co.za` (the `CNAME`
file in `public/` already does this on deploy) and enable **Enforce HTTPS**. The app
links use `https://`, so HTTPS must be on.

> If you deploy under a project path instead of a custom domain
> (`myaluza.github.io/peakdrive-website/`), set `base` in `vite.config.ts` to
> `/peakdrive-website/` and remove `public/CNAME`.
