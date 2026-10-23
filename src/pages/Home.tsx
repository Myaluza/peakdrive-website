import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import JsonLd from "../components/JsonLd";
import DownloadBadge from "../components/DownloadBadge";
import FaqAccordion from "../components/FaqAccordion";
import Phone from "../components/Phone";
import { site } from "../data/site";
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
  downloadUrl: site.playStoreUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
  areaServed: site.cities
    .filter((c) => c.live)
    .map((c) => ({ "@type": "City", name: c.name, containedInPlace: "South Africa" })),
  publisher: { "@type": "Organization", name: site.legalName, url: site.url },
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
    body: "PeakDrive tracks concerts, sports and festivals across your city and drops surge zones on the map in real time.",
  },
  {
    title: "Spot demand before it spikes",
    body: "Surge circles appear 15 minutes before an event lets out — the brighter and bigger the circle, the more rides to expect.",
  },
  {
    title: "Position, and earn",
    body: "Move to the zone before the crowd does. Stop circling for pings and start your next trip the moment demand hits.",
  },
];

const features = [
  {
    icon: "🗺️",
    title: "Live surge map",
    body: "Animated demand circles show exactly where and when rides are about to spike near you.",
  },
  {
    icon: "🤖",
    title: "AI event tracking",
    body: "Events are scraped, enriched and given a finish time and expected demand automatically — no guesswork.",
  },
  {
    icon: "🙌",
    title: "Community verified",
    body: "Missed an event? Submit it. Drivers verify each other's submissions to keep the map accurate.",
  },
  {
    icon: "🔔",
    title: "City-scoped alerts",
    body: "Get a push notification for today's high-demand events in your city — and nowhere else.",
  },
  {
    icon: "🏆",
    title: "Driver leaderboard",
    body: "Earn recognition for accurate submissions and climb your city's contributor leaderboard.",
  },
  {
    icon: "📴",
    title: "Works offline",
    body: "Your last surge map stays cached, so it keeps working when your signal drops mid-shift.",
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
      <Seo title={`${site.appName} — ${site.tagline}`} path="/" />
      <JsonLd data={appJsonLd} />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">For Uber &amp; Bolt drivers · {liveCityNames}</span>
            <h1>{site.tagline}</h1>
            <p className="lead">{site.description}</p>
            <div className="hero__cta">
              <DownloadBadge location="hero" />
              <a href="#how" className="btn btn-secondary">
                See how it works
              </a>
            </div>
            <p className="hero__note">Free to use · Made for South African e-hailing drivers</p>
          </div>

          <Phone
            src="/screenshots/surge-circle.jpg"
            alt="PeakDrive app showing a live surge circle around Moses Mabhida Stadium in Durban"
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
              alt="PeakDrive upcoming events list for Durban with expected demand and finish times"
            />
            <div className="showcase__text">
              <span className="eyebrow">See it in action</span>
              <h2>Every event that moves demand, in one view</h2>
              <p>
                PeakDrive lists today's concerts, sports and festivals with a demand rating and
                finish time, and drops a surge circle on the map the moment each one is about to let
                out — so you're already there when the requests start.
              </p>
              <p className="hero__note" style={{ marginTop: 0 }}>
                Live in {liveCityNames}.
              </p>
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
            <span className="eyebrow">Why PeakDrive</span>
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

      {/* Demand legend */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Read the map at a glance</span>
            <h2>What the circle colours mean</h2>
            <p>
              Circle colour and size show expected demand. The brighter and larger the circle, the
              more rides you can expect.
            </p>
          </div>
          <div className="legend">
            {legend.map((l) => (
              <span className="legend__item" key={l.label}>
                <span className="legend__swatch" style={{ background: l.color }} />
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Coverage</span>
            <h2>Where PeakDrive works</h2>
            <p>
              Live in {liveCityNames} — {site.serviceArea.join(", ")}. More South African cities are
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
              Join the drivers turning event schedules into extra trips. Download PeakDrive and see
              today's surge zones.
            </p>
            <DownloadBadge variant="light" location="cta_band" />
          </div>
        </div>
      </section>
    </>
  );
}
