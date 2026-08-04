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
  { id: "location", label: "Location data" },
  { id: "notifications", label: "Push notifications" },
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
      reviewBanner
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
              <td>Approximate and precise device location while the app is in use.</td>
              <td>
                To centre the map on you and show nearby surge zones. Used live — we do not keep a
                history of where you've been.
              </td>
            </tr>
            <tr>
              <td>Community submissions</td>
              <td>Events you submit and the verification votes you cast.</td>
              <td>To build and verify the shared event map for all drivers.</td>
            </tr>
            <tr>
              <td>Push tokens</td>
              <td>Your device's push notification token and the city it's registered to.</td>
              <td>To send surge alerts scoped to your city.</td>
            </tr>
            <tr>
              <td>Advertising identifiers</td>
              <td>Your device advertising ID and ad-interaction data, via Google AdMob.</td>
              <td>To display ads and, unless you opt out, personalise them.</td>
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
        <li>Send the notifications you've enabled.</li>
        <li>Run community event submission and verification.</li>
        <li>Show ads on the free tier.</li>
        <li>Diagnose crashes and improve the app.</li>
        <li>Prevent fraud and abuse, and comply with our legal obligations.</li>
      </ul>

      <h2 id="legal-basis">4. Our lawful basis for processing (POPIA)</h2>
      <p>Depending on the activity, we rely on:</p>
      <ul>
        <li>
          <strong>Your consent</strong> — for example, location access, push notifications and
          personalised ads. You can withdraw consent at any time.
        </li>
        <li>
          <strong>Performance of our agreement</strong> with you (our Terms of Service) to provide
          the app.
        </li>
        <li>
          <strong>Our legitimate interests</strong> — keeping the service secure, preventing abuse
          and improving the app.
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
          <strong>Google</strong> — Maps (map display &amp; geocoding), AdMob (ads), Firebase Cloud
          Messaging (push delivery) and Google Sign-In.
        </li>
        <li>
          <strong>Expo</strong> — push notification delivery.
        </li>
        <li>
          <strong>Sentry</strong> — crash and error reporting.
        </li>
      </ul>
      <p>
        We may also disclose information where required by law, or to protect the rights, safety and
        property of PeakDrive and our users. Our backend uses SerpAPI and Google Gemini to build the
        public event feed; these process event data, not your personal account information.
      </p>

      <h2 id="ads">6. Advertising</h2>
      <p>
        On the free tier, PeakDrive shows ads through Google AdMob. Ads may use your device
        advertising ID to measure performance and — where permitted and with consent — personalise
        what you see. You can reset or limit ad tracking in your device settings. Google's handling
        of advertising data is governed by Google's own privacy policy.
      </p>

      <h2 id="location">7. Location data</h2>
      <p>
        We request location only to centre the map and show nearby surge zones while you use the
        app. You can turn Location off in the app's <strong>Settings</strong> or in your device
        permissions — the app still works with a manually selected city.
      </p>

      <h2 id="notifications">8. Push notifications</h2>
      <p>
        If you enable notifications, we store a push token tagged with your city so alerts stay
        limited to your area. You can turn notifications off at any time in{" "}
        <strong>Settings</strong>.
      </p>

      <h2 id="retention">9. Data retention</h2>
      <p>
        We keep your account and profile data while your account is active. When you delete your
        account, we delete your personal data (see{" "}
        <Link to="/delete-account">Deleting your account</Link>), except where we must retain
        limited records to comply with the law, resolve disputes or prevent abuse. Diagnostic logs
        are kept for a limited period only.
      </p>

      <h2 id="security">10. Security</h2>
      <p>
        We use reputable processors, encryption of data in transit, and access controls. Access to
        user data in our database is protected by row-level security. No method of transmission or
        storage is completely secure, but we work continuously to protect your information.
      </p>

      <h2 id="your-rights">11. Your rights under POPIA</h2>
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

      <h2 id="deletion">12. Deleting your account</h2>
      <p>
        You can permanently delete your account and associated data in-app (
        <strong>Settings → Delete Account</strong>) or by emailing us. Full details are on the{" "}
        <Link to="/delete-account">Account &amp; Data Deletion</Link> page.
      </p>

      <h2 id="children">13. Children</h2>
      <p>
        PeakDrive is intended for licensed e-hailing drivers and is not directed at children under
        18. We do not knowingly collect personal information from children.
      </p>

      <h2 id="transfers">14. International transfers</h2>
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

      <h2 id="changes">15. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We'll revise the &ldquo;Last updated&rdquo;
        date above and, for material changes, notify you in the app.
      </p>

      <h2 id="contact">16. Contact us</h2>
      <p>
        Responsible party: {site.legalName}, operated by {site.operator}. Questions about this
        policy or your data? Email <a href={mailtoLink}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
