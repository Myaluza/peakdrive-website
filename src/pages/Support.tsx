import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import FaqAccordion from "../components/FaqAccordion";
import { faqs } from "../data/faqs";
import { site, whatsappLink, mailtoLink } from "../data/site";
import "../styles/legal.css";

export default function Support() {
  return (
    <LegalPage
      title="Support & FAQ"
      seoTitle={`Support & FAQ · ${site.appName}`}
      description={`Answers to common questions about ${site.appName}, plus how to reach the team.`}
      path="/support"
      showUpdated={false}
    >
      <p>
        Most questions are answered below. If you still need a hand — or you've
        spotted an incorrect event on the map — contact the team directly.
      </p>

      <h2 id="faqs">Frequently asked questions</h2>
      <FaqAccordion items={faqs} />

      <h2 id="contact">Contact support</h2>
      <p>
        We're a small team building for South African drivers. WhatsApp is the
        fastest way to reach us.
      </p>
      <div className="contact-row">
        <a
          className="btn btn-whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp support
        </a>
        <a className="btn btn-secondary" href={mailtoLink}>
          Email {site.supportEmail}
        </a>
      </div>

      <h2 id="account">Deleting your account</h2>
      <p>
        You can permanently delete your account and data at any time. See the{" "}
        <Link to="/delete-account">account &amp; data deletion</Link> page for the
        steps and what gets removed.
      </p>
    </LegalPage>
  );
}
