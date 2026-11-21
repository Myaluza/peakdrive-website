import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site, plusPlans } from "../data/site";
import "../styles/legal.css";

// Information only. Plus is bought in the app, through Google Play's own
// checkout in the Play Store version. Nothing is sold on this site, so this
// page must never grow a checkout, price button or payment link.
//
// Keep "What Plus includes" in step with the app's Plus screen
// (PeakDrive/app/(main)/plus.tsx), in the same order.
export default function Plus() {
  return (
    <LegalPage
      title="Phanda Plus"
      seoTitle={`Phanda Plus · ${site.appName}`}
      description={`${site.appName} Plus: the shift planner, earnings insights, a 90-minute surge alert, offline use and no ads. Your first week is free.`}
      path="/plus"
      showUpdated={false}
    >
      <div className="callout">
        <strong>Your first week is free.</strong> Every new driver gets 7 days of Plus when they
        sign up. Plus isn&rsquo;t on sale yet: buying it in the app is coming soon.
      </div>

      <p>
        {site.appName} is free to use. Plus is for drivers who want to plan their shifts and see
        what their hours really earn. One extra trip a month pays for it.
      </p>

      <h2 id="free">What&rsquo;s free for everyone</h2>
      <ul>
        <li>The live map with surge circles, and the list of what&rsquo;s on.</li>
        <li>
          An alert an hour before an event ends, and another as the surge starts if you&rsquo;re
          nearby.
        </li>
        <li>Other drivers&rsquo; live reports of where it&rsquo;s busy or dead.</li>
        <li>Your shift and earnings log, with this week&rsquo;s totals and your best hours.</li>
      </ul>

      <h2 id="included">What Plus adds</h2>
      <ul>
        <li>
          <strong>Shift planner.</strong> Every surge until 06:00 on one timeline, so you pick when
          to start instead of chasing whatever comes next.
        </li>
        <li>
          <strong>Earnings insights.</strong> Which parts of your week pay, the hours that
          don&rsquo;t, the last four weeks, what each trip earns, and surge shifts against quiet
          ones. Worked out on your phone; your earnings are never sent to us.
        </li>
        <li>
          <strong>A 90-minute heads-up</strong> before each surge, on top of the free alerts.
        </li>
        <li>
          <strong>Quiet hours and a distance limit</strong> for your early alerts.
        </li>
        <li>
          <strong>Offline use.</strong> The map, events and your settings from the last time you
          were online keep working when your signal drops.
        </li>
        <li>
          <strong>No ads.</strong>
        </li>
      </ul>

      <h2 id="free-days">Free days of Plus</h2>
      <ul>
        <li>
          <strong>Your first week.</strong> New drivers get 7 days of Plus at sign-up, with nothing
          to pay and no card needed.
        </li>
        <li>
          <strong>Invite a driver.</strong> Share the code on your Profile. The driver who uses it
          gets a day of Plus straight away, and you get one when they open {site.appName} again on
          another day, up to 10 a month.
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
        When Plus goes on sale, you&rsquo;ll buy it in the {site.appName} app from Google Play,
        through Google Play&rsquo;s own checkout. Google handles the payment, so {site.appName}{" "}
        never sees your card details. Each plan is a single purchase, not a subscription or a debit
        order.
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
