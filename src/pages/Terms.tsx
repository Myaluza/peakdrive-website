import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import type { TocItem } from "../components/LegalPage";
import { site, mailtoLink } from "../data/site";
import "../styles/legal.css";

const toc: TocItem[] = [
  { id: "acceptance", label: "Acceptance" },
  { id: "eligibility", label: "Eligibility" },
  { id: "service", label: "The service" },
  { id: "no-guarantee", label: "No guarantee of earnings" },
  { id: "community", label: "Community content" },
  { id: "membership", label: "Membership & vouchers" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "ip", label: "Intellectual property" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description={`The terms governing your use of the ${site.appName} app and website.`}
      path="/terms"
      reviewBanner
      toc={toc}
    >
      <h2 id="acceptance">1. Acceptance of these terms</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the {site.appName} mobile
        app and website (together, the &ldquo;Service&rdquo;), operated by {site.operator}. By
        downloading, accessing or using the Service, you agree to these Terms. If you don't agree,
        please don't use the Service.
      </p>

      <h2 id="eligibility">2. Eligibility</h2>
      <p>
        The Service is intended for licensed e-hailing drivers in South Africa. You must be at least
        18 years old and able to enter into a binding agreement to use it. You are responsible for
        complying with the rules of any ride-hailing platform you drive for and with all applicable
        traffic and safety laws.
      </p>

      <h2 id="service">3. The service</h2>
      <p>
        {site.appName} tracks local events and displays &ldquo;surge zones&rdquo; on a map to help
        you anticipate demand. It also lets drivers submit and verify events, view a leaderboard,
        and manage an ad-free membership. Features and supported cities may change over time.
      </p>
      <p>
        <strong>Drive safely.</strong> Never interact with the app while your vehicle is moving.
        Always follow the road rules and prioritise safety over any information the app provides.
      </p>

      <h2 id="no-guarantee">4. No guarantee of demand or earnings</h2>
      <p>
        Surge zones, expected-demand levels and event finish times are{" "}
        <strong>estimates and predictions</strong>, generated in part by automated and AI-based
        processing of third-party data. They may be inaccurate, incomplete or out of date.{" "}
        {site.appName} does <strong>not guarantee</strong> ride requests, demand, income or any
        particular outcome, and you rely on the information at your own discretion.
      </p>

      <h2 id="community">5. Community content</h2>
      <p>
        You may submit events and verify others' submissions. You are responsible for the content
        you submit and confirm that it is accurate and lawful. You grant {site.appName} a
        non-exclusive, royalty-free licence to use, display and distribute your submissions within
        the Service. We may moderate, edit or remove submissions — including through automated
        screening — and may suspend accounts that submit false or abusive content.
      </p>

      <h2 id="membership">6. Membership, vouchers &amp; free trial</h2>
      <p>
        {site.appName} offers a 7-day free trial with no card required. After the trial, you can
        continue using the app with ads or redeem a voucher for an ad-free period. Vouchers are sold
        through third-party retailers and payment partners; once redeemed they are non-refundable
        and non-transferable except as required by law. We may change trial length, pricing and
        voucher availability at any time.
      </p>

      <h2 id="acceptable-use">7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Service for any unlawful purpose;</li>
        <li>submit false, misleading or abusive event content;</li>
        <li>
          scrape, copy or resell the event feed or any part of the Service without permission;
        </li>
        <li>attempt to disrupt, reverse-engineer or gain unauthorised access to the Service; or</li>
        <li>interfere with other drivers' use of the Service.</li>
      </ul>

      <h2 id="ip">8. Intellectual property</h2>
      <p>
        The Service, including its software, design, branding and content (excluding your
        submissions), is owned by {site.appName} and protected by law. We grant you a limited,
        personal, non-transferable licence to use the app for its intended purpose. You may not use
        our name or branding without permission.
      </p>

      <h2 id="disclaimers">9. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
        warranties of any kind, whether express or implied, to the fullest extent permitted by law.
        We do not warrant that the Service will be uninterrupted, error-free, or that event
        information will be accurate.
      </p>

      <h2 id="liability">10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {site.appName} and its operator will not be liable
        for any indirect, incidental or consequential loss, or for any loss of income, profit or
        opportunity, arising from your use of — or inability to use — the Service or your reliance
        on any information in it. Nothing in these Terms limits liability that cannot be limited
        under South African law.
      </p>

      <h2 id="termination">11. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time (see{" "}
        <Link to="/delete-account">Account &amp; Data Deletion</Link>). We may suspend or terminate
        your access if you breach these Terms or misuse the Service.
      </p>

      <h2 id="law">12. Governing law</h2>
      <p>
        These Terms are governed by the laws of {site.jurisdiction}, and you submit to the
        jurisdiction of its courts.
      </p>

      <h2 id="changes">13. Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. We'll revise the &ldquo;Last updated&rdquo;
        date above and, for material changes, notify you in the app. Continued use after changes
        take effect means you accept the updated Terms.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        Questions about these Terms? Email <a href={mailtoLink}>{site.supportEmail}</a>. See also
        our <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
