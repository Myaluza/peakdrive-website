# PeakDrive Website

Marketing + legal website for the [PeakDrive](https://github.com/Myaluza/PeakDrive)
app, served at **https://peakdrive.co.za**.

The PeakDrive app hardcodes these URLs (see `PeakDrive/constants/config.ts`), so the
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
  directly on Netlify (no SPA redirect hack) and are crawlable.
- **React Router 7** — vite-react-ssg 0.9.2 only supports v6, so
  `patches/vite-react-ssg+0.9.2.patch` (applied by `patch-package` on `postinstall`)
  points its static render at v7's main entry instead of the removed
  `react-router-dom/server.js`. The `overrides` entry in `package.json` silences its v6
  peer range. If you upgrade vite-react-ssg, check whether it supports v7 natively and
  drop the patch; `npm install` fails loudly if the patch no longer applies.
- Hand-written CSS design system mirroring the app's tokens (`src/styles/theme.css`).
- Deployed to **Netlify** (`netlify.toml`), building on every push to `main`.

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
public/              robots.txt, sitemap.xml, favicon.svg, og-image.png
.github/workflows/   ci.yml (quality gate on PRs)
netlify.toml         build command (same quality gate), publish dir, headers
```

Every Play Store link goes through `DownloadBadge`, which is the only place the
referrer-tagged URL, `rel="noopener noreferrer"` and the `click_get_app` event
are assembled. Don't hand-roll a Play link — the header and footer both used to,
and the footer's was silently untracked.

## Unconfirmed values

`src/data/site.ts` is the single source of truth for site-wide constants, and a
few of its values are still assumptions. Each is marked `PLACEHOLDER` at its
definition — that marker is the live record; this list is only a summary.

| Value                        | Why it's unconfirmed                                                                                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `playStoreUrl` / `packageId` | Built from the package id `com.myaluza.PeakDrive`; correct once the listing is published.                                                                         |
| `socials`                    | TikTok / Instagram / X handles assumed to be `@peakdrive`, taken from the app's About screen. Duplicated verbatim in the app — confirm they exist, then fix both. |
| `legalName` / `operator`     | Needs the real legal/company name (and registered address, if there is one) for the responsible-party block in the legal pages.                                   |
| `lastUpdated`                | Bumped by hand; nothing enforces it when legal copy changes.                                                                                                      |
| `public/og-image.png`        | Auto-generated placeholder; swap for a real social card.                                                                                                          |

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
per client-side route change, and fires a `click_get_app` event on the Play CTAs. Those
CTAs also carry an install `referrer` (`utm_source=peakdrive_web…`) so installs are
attributable in the Play Console.

To enable on the live site: in Netlify, **Site configuration → Environment variables →
Add a variable** `VITE_GA4_MEASUREMENT_ID = G-XXXXXXXXXX`, then trigger a redeploy (it is
inlined at build time). (It's not a secret — a GA4 id is public in the page.)

> **POPIA:** enabling GA4 loads Google's tag and sets analytics cookies. Disclose it in the
> Privacy Policy and add a consent gate before turning it on. This reverses the font
> self-hosting privacy win, so it's a deliberate opt-in, not on by default.

## Deploy to Netlify

1. In Netlify, **Add new site → Import an existing project → GitHub →
   `Myaluza/peakdrive-website`**. Netlify reads `netlify.toml`, so leave the build
   settings as detected (command runs format, lint, typecheck, then build; publish
   directory `dist`).
2. Set `VITE_GA4_MEASUREMENT_ID` under **Site configuration → Environment variables**
   if analytics should be on.
3. Every push to `main` deploys; pull requests get deploy previews.

### DNS for `peakdrive.co.za`

In Netlify, **Domain management → Add a domain → `peakdrive.co.za`**, then follow its
DNS instructions at whoever hosts the domain's DNS — either point the apex `A` record
at Netlify's load balancer and `www` as a `CNAME` to `<site>.netlify.app`, or move the
nameservers to Netlify DNS. Netlify issues the HTTPS certificate once DNS resolves;
the app links use `https://`, so wait for that before announcing the URL.

Then turn off GitHub Pages (**Settings → Pages → Source: None**) so the old
`myaluza.github.io` copy stops redirecting.
