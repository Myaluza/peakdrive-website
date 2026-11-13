import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import JsonLd from "../components/JsonLd";
import DownloadBadge from "../components/DownloadBadge";
import FaqAccordion from "../components/FaqAccordion";
import InstallQr from "../components/InstallQr";
import Phone from "../components/Phone";
import {
  BellIcon,
  CalendarIcon,
  MapIcon,
  OfflineIcon,
  PeopleIcon,
  WalletIcon,
} from "../components/FeatureIcons";
import { site, downloadUrl, emailLink } from "../data/site";
import { faqs } from "../data/faqs";
import "../styles/home.css";

// Rich-result metadata for the app itself. No aggregateRating — we don't invent
// ratings we don't have.
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.appName,
  description: site.description,
  applicationCategory: "TravelApplication",
  operatingSystem: "Android",
  url: site.url,
  ...(site.downloadsOpen && {
    downloadUrl,
    softwareVersion: site.appVersion,
    fileSize: `${site.apkSizeMb} MB`,
  }),
  offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
  areaServed: site.cities
    .filter((c) => c.live)
    .map((c) => ({ "@type": "City", name: c.name, containedInPlace: "South Africa" })),
  publisher: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    logo: `${site.url}/icon-512.png`,
    email: site.supportEmail,
  },
};

/**
 * Coverage stated once, from `site.cities`.
 *
 * Two separate hand-written sentences used to assert it independently ("Live in
 * Durban · … coming soon" and "Live in Durban now, …"), and both went stale when
 * the other three cities went live. Derive it instead, so the flags are the only
 * thing to update.
 */
const liveCityNames = (() => {
  const names = site.cities.filter((c) => c.live).map((c) => c.name);
  // One live city reads as a region, not a lone dot on the map.
  if (names.length === 1) return `${names[0]} & surrounds`;
  if (names.length === 0) return "selected South African cities";
  return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
})();

const steps = [
  {
    title: "Open the live map",
    body: "Phanda tracks concerts, matches, festivals, airport arrivals and club closing times, and drops surge zones on the map.",
  },
  {
    title: "Spot demand before it spikes",
    body: "Surge circles appear 10 to 30 minutes before an event lets out, earlier for busier ones. The colour shows how busy it should be, and the size shows the area it covers.",
  },
  {
    title: "Position, and earn",
    body: "Move to the zone before the crowd does. Stop circling for pings and start your next trip the moment demand hits.",
  },
];

// Each card says what the driver gets, not how Phanda works behind the scenes.
const features = [
  {
    icon: <MapIcon />,
    title: "Know where to head next",
    body: "The live map shows where rides should pick up near you, so you spend less time driving around empty.",
  },
  {
    icon: <CalendarIcon />,
    title: "Plan your shift around what's on",
    body: "See when concerts, matches and festivals should finish and how busy each could get. Some finish times are estimates.",
  },
  {
    icon: <BellIcon />,
    title: "Get there in time",
    body: "Get a heads-up an hour before an event ends, a second alert as the surge starts if you're nearby, and a warning a few hours before rain.",
  },
  {
    icon: <PeopleIcon />,
    title: "Skip the dead spots",
    body: "Other drivers' live reports show where it's busy or dead right now. Add yours and earn time without ads.",
  },
  {
    icon: <WalletIcon />,
    title: "See what you really earned",
    body: "Log your shifts and earnings to see how each one went. The log stays on your phone, so nobody else can see it.",
  },
  {
    icon: <OfflineIcon />,
    title: "Keep going when signal drops",
    body: "With Plus or ad-free time, your last surge map keeps working on your phone.",
  },
];

const legend = [
  { label: "Low", color: "var(--surge-low)" },
  { label: "Medium", color: "var(--surge-medium)" },
  { label: "High", color: "var(--surge-high)" },
  { label: "Very high", color: "var(--surge-very-high)" },
];

export default function Home() {
  return (
    <>
      <Seo title={`${site.appName}: surge map for e-hailing drivers in Durban`} path="/" />
      <JsonLd data={appJsonLd} />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">For e-hailing drivers · {liveCityNames}</span>
            <h1>{site.tagline}</h1>
            <p className="lead">{site.description}</p>
            <div className="hero__cta">
              <DownloadBadge location="hero" />
              <a href="#how" className="btn btn-secondary">
                See how it works
              </a>
            </div>
            <p className="hero__note">Free to use · Works whichever platform you drive for</p>
            {site.downloadsOpen && (
              <>
                {/* Not from Google Play, so Android asks first. Saying so here
                    means the prompt isn't a surprise. */}
                <p className="hero__note">
                  Android APK, {site.apkSizeMb} MB, from this site.{" "}
                  <Link to={site.installPath}>How to install it</Link>
                </p>
                <InstallQr />
              </>
            )}
          </div>

          <Phone
            src="/screenshots/surge-circle.jpg"
            alt="Phanda app showing a live surge circle around Moses Mabhida Stadium in Durban"
            priority
          />
        </div>
      </section>

      {/* Screenshot showcase */}
      <section className="section" id="screens" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="showcase">
            <Phone
              src="/screenshots/events-list.jpg"
              alt="Phanda upcoming events list for Durban with expected demand and finish times"
            />
            <div className="showcase__text">
              <span className="eyebrow">See it in action</span>
              <h2>The events that move demand, in one view</h2>
              <p>
                Phanda lists what's on today with a demand rating and finish time, and drops a surge
                circle on the map as each one is about to let out, so you can be there when the
                requests start.
              </p>
              <h3>What the circle colours mean</h3>
              <p>
                Colour shows expected demand. Size shows the ground the surge covers, so an airport
                looks wide and a small bar looks tight.
              </p>
              <div className="legend">
                {legend.map((l) => (
                  <span className="legend__item" key={l.label}>
                    <span className="legend__swatch" style={{ background: l.color }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Three steps to smarter positioning</h2>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="card step" key={s.title}>
                <div className="step__num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p style={{ margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Phanda</span>
            <h2>Everything you need to chase demand, not luck</h2>
          </div>
          <div className="features">
            {features.map((f) => (
              <div className="card feature" key={f.title}>
                <div className="feature__icon" aria-hidden="true">
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="section section--tight">
        <div className="container coverage">
          <div>
            <span className="eyebrow">Coverage</span>
            <h2>Where Phanda works</h2>
            <p>
              Live in {liveCityNames}: {site.serviceArea.join(", ")}. More South African cities are
              coming soon.
            </p>
          </div>
          <div className="cities">
            {site.cities.map((c) => (
              <span className="city-chip" data-live={c.live} key={c.name}>
                {c.name}
                <span className="badge">{c.live ? "Live" : "Soon"}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Organisers */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="section-head">
            <span className="eyebrow">For event organisers</span>
            <h2>Organising an event in Durban?</h2>
            <p>
              List it on Phanda and drivers will be waiting when your crowd heads home. Choose
              &ldquo;I organise events&rdquo; when you sign up in the app, fill in your organiser
              profile, and we&rsquo;ll verify you once. Each event you add is then checked online
              and goes live on drivers&rsquo; maps as soon as it&rsquo;s confirmed. If we
              can&rsquo;t confirm it, we review it first. You&rsquo;ll see how many drivers plan to
              be there, and you can change times or cancel at any point. It&rsquo;s free.
            </p>
          </div>
          <div className="organiser-cta">
            {site.downloadsOpen && <DownloadBadge location="organisers" />}
            <a href={emailLink} className="btn btn-secondary">
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked</h2>
          </div>
          <FaqAccordion items={faqs.slice(0, 4)} />
          <p className="center" style={{ marginTop: "var(--space-lg)" }}>
            <Link to="/support">See all FAQs &amp; contact support →</Link>
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to stop guessing?</h2>
            <p>
              {site.downloadsOpen ? (
                <>Phanda is free to use in Durban. Download it and see what&rsquo;s on today.</>
              ) : (
                <>Phanda is coming soon for drivers in Durban, and it will be free to use.</>
              )}
            </p>
            <DownloadBadge variant="light" location="cta_band" />
          </div>
        </div>
      </section>
    </>
  );
}
