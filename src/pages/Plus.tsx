import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site, plusPlans } from "../data/site";
import "../styles/legal.css";

// Information only. Plus is paid for in the app, on Peach Payments' hosted
// page — nothing is sold on this site, so this page must never grow a
// checkout, price button or payment link.
export default function Plus() {
  return (
    <LegalPage
      title="Phanda Plus"
      seoTitle={`Phanda Plus (coming soon) · ${site.appName}`}
      description={`${site.appName} Plus: no ads, earlier surge alerts and extra alert filters, from R5 a day, paid by card, 1Voucher or bank. Coming soon.`}
      path="/plus"
      showUpdated={false}
    >
      <div className="callout">
        <strong>Coming soon.</strong> Plus isn&rsquo;t available yet. Everything on this page
        describes how it will work when it launches.
      </div>

      <p>
        {site.appName} is free, and it stays free. The free tier keeps every feature that helps you
        earn: the live surge map, event alerts, community submissions and verification. Plus is an
        optional extra for drivers who want fewer distractions and more warning.
      </p>

      <h2 id="included">What Plus includes</h2>
      <ul>
        <li>
          <strong>No ads.</strong>
        </li>
        <li>
          <strong>Earlier alerts.</strong> Hear about a surge about 90 minutes ahead, instead of
          about an hour.
        </li>
        <li>
          <strong>Extra alert filters</strong>, so you hear only about the events you actually work.
        </li>
        <li>
          <strong>Offline use.</strong> The map, events and your settings from the last time you
          were online keep working when your signal drops.
        </li>
      </ul>

      <h2 id="prices">Prices</h2>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {plusPlans.map((p) => (
              <tr key={p.period}>
                <td>{p.period}</td>
                <td>R{p.priceRand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Plans don&rsquo;t auto-renew. When a day, week or month runs out, Plus stops until you
        choose another one.
      </p>

      <h2 id="paying">How to pay</h2>
      <p>
        In the {site.appName} app, choose a plan and pay on the secure page of{" "}
        <strong>Peach Payments</strong>, our payment provider. You can pay with:
      </p>
      <ul>
        <li>a bank card;</li>
        <li>
          <strong>1Voucher</strong>, bought with cash at any shop or spaza, so no card or bank
          account is needed; or
        </li>
        <li>straight from your bank account.</li>
      </ul>
      <p>
        You enter your card, voucher or bank details on Peach&rsquo;s page, not ours. {site.appName}{" "}
        never sees them. There&rsquo;s no debit order: you pay once for each plan.
      </p>

      <h2 id="earn">Earn ad-free time for free</h2>
      <p>You don&rsquo;t have to pay to drive without ads. You can also earn ad-free time by:</p>
      <ul>
        <li>contributing to the map: adding events and verifying other drivers&rsquo; ones; or</li>
        <li>choosing to watch a rewarded ad.</li>
      </ul>
      <p>
        Ad-free time also lets you use Phanda offline. When your Plus and ad-free time have both run
        out, Phanda needs a connection again.
      </p>

      <h2 id="small-print">The small print</h2>
      <p>
        The full rules are in section 6 of our <Link to="/terms#membership">Terms of Service</Link>,
        and what we keep when you pay is in our <Link to="/privacy#plus">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
