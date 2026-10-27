import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import type { TocItem } from "../components/LegalPage";
import { site, mailtoLink } from "../data/site";
import "../styles/legal.css";

const toc: TocItem[] = [
  { id: "who-we-are", label: "Who we are" },
  { id: "data-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use it" },
  { id: "legal-basis", label: "Lawful basis" },
  { id: "sharing", label: "How we share it" },
  { id: "ads", label: "Advertising" },
  { id: "analytics", label: "Analytics" },
  { id: "location", label: "Location data" },
  { id: "notifications", label: "Push notifications" },
  { id: "plus", label: "PeakDrive Plus and vouchers" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "deletion", label: "Deleting your account" },
  { id: "children", label: "Children" },
  { id: "transfers", label: "International transfers" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`How ${site.appName} collects, uses and protects your personal information under POPIA.`}
      path="/privacy"
      toc={toc}
    >
      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        {site.appName} (&ldquo;{site.appName}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), operated
        by {site.operator}, provides a mobile app that helps e-hailing drivers in South Africa find
        high-demand areas by tracking local events in real time. This policy explains what personal
        information we process when you use the {site.appName} app and website, and your rights
        under the <strong>Protection of Personal Information Act, 2013 (POPIA)</strong>.
      </p>
      <p>
        The responsible party for your personal information is {site.legalName}. You can reach us at{" "}
        <a href={mailtoLink}>{site.supportEmail}</a>.
      </p>

      <h2 id="data-we-collect">2. Information we collect</h2>
      <p>We collect only what we need to run PeakDrive:</p>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
              <th>Why we collect it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account &amp; profile</td>
              <td>
                Email address and authentication identifiers (you sign in with Google), display
                name, home city, and your notification and location preferences.
              </td>
              <td>To create, secure and manage your account.</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                Approximate and precise device location while the app is in use, plus a single
                stored <strong>approximate</strong> position (roughly which area you're in) held
                against your device while Location is switched on.
              </td>
              <td>
                To centre the map on you and show nearby surge zones, and to work out how long you'd
                need to reach an event so a surge alert arrives in time to be useful. We keep only
                your latest approximate position — never a history of where you've been — and it is
                deleted the moment you switch Location off.
              </td>
            </tr>
            <tr>
              <td>Community submissions</td>
              <td>
                Events you submit, the verification votes you cast, and your ratings of how busy a
                surge actually turned out to be. Where you place a pin when submitting an event,
                that location is saved with the submission.
              </td>
              <td>
                To build and verify the shared event map, and to correct our demand predictions
                against what drivers actually found.
              </td>
            </tr>
            <tr>
              <td>Ride reports</td>
              <td>
                If you answer the follow-up prompt after an event, we record whether you went,
                whether you got a ride, and roughly how long you waited — linked to your account and
                to that event. You can skip the prompt, and skipping is recorded as a skip.
              </td>
              <td>
                To measure whether a predicted surge was real, which is how the predictions get
                better. Answers are aggregated per event; they are never shown to other drivers.
              </td>
            </tr>
            <tr>
              <td>&quot;I&apos;m going&quot; declarations</td>
              <td>
                When you tap &quot;I&apos;m going&quot; on an event, we record that against your
                account and that event.
              </td>
              <td>
                To show other drivers how many are heading to the same place, so you can judge
                whether a surge is worth chasing. Other drivers see only the count, never who.
              </td>
            </tr>
            <tr>
              <td>Push tokens</td>
              <td>
                Your device's push notification token, the city it's registered to, and — while
                Location is on — the latest approximate position described above.
              </td>
              <td>To send surge alerts scoped to your city and timed to your travel time.</td>
            </tr>
            <tr>
              <td>Advertising identifiers</td>
              <td>Your device advertising ID and ad-interaction data, via Google AdMob.</td>
              <td>To display non-personalised ads on the free tier (see section 6).</td>
            </tr>
            <tr>
              <td>Usage analytics</td>
              <td>
                The name of an action you take (for example opening the app, submitting an event or
                rating a surge), the city you have selected, and a random identifier generated on
                your device — via Google Analytics. Not your account, not your email, not your
                location.
              </td>
              <td>
                To see which parts of the app are actually used and where drivers get stuck. You can
                switch this off in the app&rsquo;s Settings.
              </td>
            </tr>
            <tr>
              <td>Diagnostics</td>
              <td>
                Crash reports, error logs and basic device info (model, OS version), via Sentry.
              </td>
              <td>To keep the app stable and fix problems.</td>
            </tr>
            <tr>
              <td>Support messages</td>
              <td>The content of messages you send us on WhatsApp or email.</td>
              <td>To respond to and support you.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="how-we-use">3. How we use your information</h2>
      <ul>
        <li>Operate the live surge map and event feed.</li>
        <li>Authenticate you and keep your account secure.</li>
        <li>
          Send the notifications you've enabled, timed — where you've enabled Location — to how long
          it would take you to reach the event.
        </li>
        <li>Run community event submission and verification.</li>
        <li>Improve our demand estimates using drivers' ratings of past surges.</li>
        <li>Show ads on the free tier.</li>
        <li>
          Measure which features are used, so we fix what&rsquo;s broken rather than guessing —
          unless you switch Analytics off.
        </li>
        <li>Diagnose crashes and improve the app.</li>
        <li>Prevent fraud and abuse, and comply with our legal obligations.</li>
      </ul>

      <h2 id="legal-basis">4. Our lawful basis for processing (POPIA)</h2>
      <p>Depending on the activity, we rely on:</p>
      <ul>
        <li>
          <strong>Your consent</strong> — for example, location access and push notifications. You
          can withdraw consent at any time. We do not rely on consent for advertising, because we do
          not personalise ads (see section 6).
        </li>
        <li>
          <strong>Performance of our agreement</strong> with you (our Terms of Service) to provide
          the app.
        </li>
        <li>
          <strong>Our legitimate interests</strong> — keeping the service secure, preventing abuse
          and improving the app. This covers the usage analytics described in section 7, which is
          why you can switch it off without losing any functionality: an interest you can decline is
          the only kind we think is legitimate.
        </li>
        <li>
          <strong>Legal obligations</strong> where the law requires us to process or retain data.
        </li>
      </ul>

      <h2 id="sharing">5. How we share information</h2>
      <p>
        <strong>We do not sell your personal information.</strong> We share limited data with the
        operators (sub-processors) that run PeakDrive:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — authentication, database and account data hosting.
        </li>
        <li>
          <strong>Render</strong> — hosting for our events backend.
        </li>
        <li>
          <strong>Google</strong> — Maps (map display &amp; geocoding), AdMob (ads), Analytics
          (usage measurement), Firebase Cloud Messaging (push delivery) and Google Sign-In.
        </li>
        <li>
          <strong>Anthropic</strong> — automated screening of events you submit.
        </li>
        <li>
          <strong>Sentry</strong> — crash and error reporting.
        </li>
      </ul>
      <p>
        We may also disclose information where required by law, or to protect the rights, safety and
        property of PeakDrive and our users.
      </p>
      <p>
        Two separate automated systems are involved, and they see different things.{" "}
        <strong>DataForSEO</strong> (Google Events results) and <strong>Google Gemini</strong> build
        the public event feed from publicly listed events; they do not process your personal account
        information. When <strong>you submit an event yourself</strong>, the details you type —
        event name, venue, address, date and expected finish time — are sent to{" "}
        <strong>Anthropic</strong> to check for duplicates and spam before your submission reaches
        the review queue. That check also sees the names and venues of other pending submissions, so
        it can recognise a duplicate. It is not sent your name, your email address or your account
        identifier.
      </p>

      <h2 id="ads">6. Advertising</h2>
      <p>
        On the free tier, PeakDrive shows ads through Google AdMob.{" "}
        <strong>We request non-personalised ads only.</strong> Every ad the app asks for is flagged
        this way, so what you are shown is not based on a profile of your interests or your
        behaviour in other apps. There is no setting to turn personalisation on, because we never
        turn it on.
      </p>
      <p>
        Non-personalised ads still use your device advertising ID for frequency capping and to
        measure whether an ad worked. You can reset or limit that identifier in your device
        settings. Google's handling of advertising data is governed by Google's own privacy policy.
      </p>

      <h2 id="analytics">7. Analytics</h2>
      <p>
        We use <strong>Google Analytics</strong> to count how the app is used — which screens get
        opened, whether sign-in succeeds, whether people who start submitting an event finish. It
        tells us what is broken or ignored. It is not used to advertise to you, and it is kept
        separate from the advertising identifier described above.
      </p>
      <p>What is sent, precisely:</p>
      <ul>
        <li>
          The <strong>name of an action</strong> — one of a short fixed list such as opening the
          app, signing in, selecting a city, submitting or confirming an event, tapping
          &ldquo;I&rsquo;m going&rdquo;, or answering one of the post-surge questions.
        </li>
        <li>
          A little context about that action: the city you selected, whether a submission was
          accepted, the rating you gave a surge, or how long you waited.
        </li>
        <li>
          A <strong>random identifier</strong> created on your device the first time the app runs,
          so separate actions can be recognised as one session. It is not your account, your email
          or your device advertising ID, and it is never linked to them.
        </li>
      </ul>
      <p>
        What is not sent: your location, your name or email, the text of anything you submit, or any
        identifier that points back to you as a person.
      </p>
      <p>
        You can switch <strong>Analytics</strong> off at any time under <strong>Settings</strong> in
        the app. It stops immediately — not at the next restart — and every feature keeps working
        exactly as before. Nothing is sent from that device again unless you switch it back on.
      </p>
      <p>
        Google processes this on our behalf under its own terms, and the data may be handled outside
        South Africa — see <a href="#transfers">International transfers</a>.
      </p>

      <h2 id="location">8. Location data</h2>
      <p>
        We use your location for three things. First, to centre the map on you and show nearby surge
        zones while you're using the app — that use is live and nothing is retained.
      </p>
      <p>
        Second, when you <strong>submit an event</strong>, the screen opens with a map pin already
        placed at your current position so you don't have to hunt for the venue. You can drag that
        pin anywhere before submitting, and{" "}
        <strong>wherever you leave it is saved with the submission</strong> — that is the point of
        it, since the pin is what puts the event on other drivers' maps. If you submit without
        moving the pin, the location saved is where you were at the time. It is stored with the
        event, not as a record of your movements, and it stays with the event for as long as the
        submission does.
      </p>
      <p>
        Third, if you have both Location and Notifications switched on, we store your{" "}
        <strong>latest approximate position</strong> against your device so surge alerts can be
        timed to reach you with enough notice to actually drive there. Without it we can only send
        the same alert to everyone in a city at the same moment, which is rarely useful to anyone.
      </p>
      <p>What that does and doesn't mean:</p>
      <ul>
        <li>
          We keep <strong>one</strong> current position per device, overwritten as it changes — not
          a trail, journey history or record of where you have been.
        </li>
        <li>
          It is refreshed only when you have moved a meaningful distance or the stored position has
          become stale, not continuously, and only while the app is open.
        </li>
        <li>It is never shown to other drivers and never used to advertise to you.</li>
        <li>
          Switching <strong>Location</strong> off in the app's <strong>Settings</strong> deletes it
          immediately. Revoking the permission in your device settings stops any further collection.
        </li>
      </ul>
      <p>
        The app still works with Location off — you simply pick your city manually, and surge alerts
        fall back to a fixed lead time rather than one based on your distance.
      </p>

      <h2 id="notifications">9. Push notifications</h2>
      <p>
        If you enable notifications, we store a push token tagged with your city so alerts stay
        limited to your area, along with the approximate position described above where you've also
        enabled Location. We also keep a record of which alerts we've already sent your device, so
        you aren't sent the same one twice.
      </p>
      <p>
        How many alerts you receive is governed by your own settings, not by a daily limit we
        impose. In <strong>Alert preferences</strong> you choose whether to get the early and nearby
        alerts, the minimum busyness worth alerting you about, and which kinds of event count. There
        is no cap beyond those choices.
      </p>
      <p>
        You can turn notifications off at any time in <strong>Settings</strong>, which deletes your
        push tokens.
      </p>

      <h2 id="plus">10. PeakDrive Plus and vouchers (coming soon)</h2>
      <p>
        <strong>PeakDrive Plus isn&rsquo;t available yet.</strong> When it launches, you&rsquo;ll
        pay for it with PeakDrive credit, which you add by buying a prepaid voucher (Blu Voucher,
        OTT Voucher or 1Voucher) at a shop or spaza and entering its PIN in the app. Nothing is sold
        in the app or on this website, and we never ask for card or bank details.
      </p>
      <p>
        When you redeem a voucher, the PIN is sent to the <strong>voucher provider</strong> that
        issued it, which checks and processes it. We don&rsquo;t keep the PIN. We keep only:
      </p>
      <ul>
        <li>
          the <strong>last 4 digits</strong> and a <strong>one-way hash</strong> of the PIN, so we
          can stop the same voucher being redeemed twice and help you if a redemption goes wrong;
        </li>
        <li>the amount of credit the voucher added; and</li>
        <li>
          a <strong>ledger</strong> of your credit and plans: credit added, Plus days, weeks or
          months bought, and when each started and ends.
        </li>
      </ul>
      <p>
        The ledger is linked to your account and kept while your account exists, except where the
        law requires us to keep transaction records for longer.
      </p>

      <h2 id="retention">11. Data retention</h2>
      <p>
        We keep your account and profile data while your account is active. When you delete your
        account, we delete your personal data (see{" "}
        <Link to="/delete-account">Deleting your account</Link>), except where we must retain
        limited records to comply with the law, resolve disputes or prevent abuse.
      </p>
      <p>Specific periods, where we can state one:</p>
      <ul>
        <li>
          <strong>Events and the record of alerts sent about them</strong> — deleted once the event
          is more than 7 days past.
        </li>
        <li>
          <strong>Your stored approximate position</strong> — held only while Location is on. It is
          overwritten rather than accumulated, and deleted the moment you switch Location off, turn
          notifications off, or delete your account.
        </li>
        <li>
          <strong>Ride reports and surge ratings</strong> — kept while your account exists, and
          deleted with it. They are retained rather than expired because their whole purpose is a
          demand history that outlives the individual events.
        </li>
        <li>
          <strong>Diagnostic and crash logs</strong> — retained by Sentry under its own retention
          schedule, which is currently 90 days for errors.
        </li>
      </ul>
      <p>
        Where we have not stated a period, the data is kept for as long as your account exists and
        deleted when you delete it.
      </p>

      <h2 id="security">12. Security</h2>
      <p>
        We use reputable processors, encryption of data in transit, and access controls. Access to
        user data in our database is protected by row-level security. No method of transmission or
        storage is completely secure, but we work continuously to protect your information.
      </p>

      <h2 id="your-rights">13. Your rights under POPIA</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access a copy of the personal information we hold about you;</li>
        <li>correct or update inaccurate information;</li>
        <li>delete your information;</li>
        <li>object to, or restrict, certain processing;</li>
        <li>withdraw consent you've given; and</li>
        <li>lodge a complaint with the Information Regulator (South Africa).</li>
      </ul>
      <p>
        To exercise any of these, email <a href={mailtoLink}>{site.supportEmail}</a>. You can
        contact the Information Regulator at{" "}
        <a href="mailto:inforeg@inforegulator.org.za">inforeg@inforegulator.org.za</a>.
      </p>

      <h2 id="deletion">14. Deleting your account</h2>
      <p>
        You can permanently delete your account and associated data in-app (
        <strong>Settings → Delete Account</strong>) or by emailing us. Full details are on the{" "}
        <Link to="/delete-account">Account &amp; Data Deletion</Link> page.
      </p>

      <h2 id="children">15. Children</h2>
      <p>
        PeakDrive is intended for licensed e-hailing drivers and is not directed at children under
        18. We do not knowingly collect personal information from children.
      </p>

      <h2 id="transfers">16. International transfers</h2>
      <p>
        PeakDrive stores personal information outside South Africa. In particular, our database and
        authentication (Supabase) and our events backend (Render) are hosted in the{" "}
        <strong>European Union (Frankfurt, Germany)</strong>, and other processors named above
        (Google, Expo, Sentry) may process data in further countries. Your information is therefore
        transferred across borders as contemplated by <strong>section 72 of POPIA</strong>. We rely
        on these recipients being bound by laws or agreements that provide protection substantially
        similar to POPIA — the European Union's data protection regime (GDPR) offers a comparable
        standard — and we transfer only the limited data described in this policy.
      </p>

      <h2 id="changes">17. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We'll revise the &ldquo;Last updated&rdquo;
        date above and, for material changes, notify you in the app.
      </p>

      <h2 id="contact">18. Contact us</h2>
      <p>
        Responsible party: {site.legalName}, operated by {site.operator}. Questions about this
        policy or your data? Email <a href={mailtoLink}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
