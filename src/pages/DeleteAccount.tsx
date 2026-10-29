import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { site, mailtoLink } from "../data/site";
import "../styles/legal.css";

export default function DeleteAccount() {
  return (
    <LegalPage
      title="Account & Data Deletion"
      seoTitle={`Delete your account & data · ${site.appName}`}
      description={`How to permanently delete your ${site.appName} account and associated personal data.`}
      path="/delete-account"
      showUpdated
    >
      <p>
        You can permanently delete your {site.appName} account and the personal data associated with
        it at any time. There are two ways to do it.
      </p>

      <h2 id="in-app">Option 1 — Delete in the app (fastest)</h2>
      <div className="callout">
        <strong>In the {site.appName} app:</strong>
        <ol>
          <li>
            Open the menu and go to <strong>Settings</strong>.
          </li>
          <li>
            Under <strong>Account</strong>, tap <strong>Delete Account</strong>.
          </li>
          <li>Confirm when prompted.</li>
        </ol>
      </div>
      <p>
        Your account and all associated data are then permanently deleted, in line with POPIA. This
        action cannot be undone.
      </p>

      <h2 id="by-email">Option 2 — Request deletion by email</h2>
      <p>
        If you can't access the app, email us from the address on your account and we'll delete it
        for you:
      </p>
      <p>
        <a
          className="btn btn-primary"
          href={`${mailtoLink}?subject=Delete%20my%20PeakDrive%20account`}
        >
          Email {site.supportEmail}
        </a>
      </p>
      <p>
        Please send the request from your account's email address (or include enough detail for us
        to verify you own the account) so we can confirm it's really you. We'll action verified
        requests within 30 days and confirm once it's done.
      </p>

      <h2 id="what-is-deleted">What gets deleted</h2>
      <p>Deleting your account removes:</p>
      <ul>
        <li>your account and login credentials;</li>
        <li>your profile (display name, home city, notification and location preferences);</li>
        <li>your community event submissions and verification votes;</li>
        <li>
          your event organiser profile (organisation name, contact details, website and description)
          and the events you listed, if you used {site.appName} as an organiser;
        </li>
        <li>your ride reports, live reports and surge ratings;</li>
        <li>your invite code and the record of who invited you;</li>
        <li>your PeakDrive credit ledger and any ad-free time you were granted;</li>
        <li>
          your &quot;I&apos;m going&quot; declarations, and the record of which alerts we sent you;
          and
        </li>
        <li>
          your push notification token(s), including any approximate position stored against them.
        </li>
      </ul>
      <p>
        Where you verified another driver&apos;s submission, the submission itself remains — it is
        part of the shared event map other drivers rely on — but the record that it was <em>you</em>{" "}
        who verified it is removed along with your account.
      </p>

      <h2 id="what-we-keep">What we may keep</h2>
      <p>
        We may retain a limited amount of information where the law requires it, or where we need it
        to resolve disputes, prevent fraud or abuse, or enforce our{" "}
        <Link to="/terms">Terms of Service</Link>. Any retained data is kept only for as long as
        necessary and then deleted. Anonymised or aggregated data that no longer identifies you may
        be retained.
      </p>
      <p>
        Copies of deleted data can remain in our encrypted database backups until those backups age
        out, which happens within 90 days.
      </p>

      <h2 id="more">More information</h2>
      <p>
        For how we handle your data generally, see our <Link to="/privacy">Privacy Policy</Link>.
        Questions? Contact <a href={mailtoLink}>{site.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
