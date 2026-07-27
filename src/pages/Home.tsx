import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import DownloadBadge from "../components/DownloadBadge";
import FaqAccordion from "../components/FaqAccordion";
import Phone from "../components/Phone";
import { site } from "../data/site";
import { faqs } from "../data/faqs";
import "../styles/home.css";

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
    icon: "🚫",
    title: "Ad-free membership",
    body: "Redeem a voucher from any major retailer for an ad-free experience. Start with a 7-day free trial.",
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

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">For Uber &amp; Bolt drivers · South Africa</span>
            <h1>{site.tagline}</h1>
            <p className="lead">{site.description}</p>
            <div className="hero__cta">
              <DownloadBadge />
              <a href="#how" className="btn btn-secondary">
                See how it works
              </a>
            </div>
            <p className="hero__note">7-day free trial · No card required</p>
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
                PeakDrive lists today's concerts, sports and festivals with a demand
                rating and finish time, and drops a surge circle on the map the
                moment each one is about to let out — so you're already there when
                the requests start.
              </p>
              <p className="hero__note" style={{ marginTop: 0 }}>
                Live in Durban · Johannesburg, Cape Town &amp; Pretoria coming soon.
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
              Circle colour and size show expected demand. The brighter and larger
              the circle, the more rides you can expect.
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
            <p>Live in Durban now, with more South African cities on the way.</p>
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
              Join the drivers turning event schedules into extra trips. Download
              PeakDrive and see today's surge zones.
            </p>
            <DownloadBadge variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
