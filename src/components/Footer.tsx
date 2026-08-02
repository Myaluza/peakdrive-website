import { Link } from "react-router-dom";
import { site, whatsappLink } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <h4>{site.appName}</h4>
            <p style={{ maxWidth: "32ch" }}>{site.tagline}</p>
            <div className="social-row">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Product</h4>
            <ul>
              <li>
                <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </li>
              <li>
                <Link to="/support">Support &amp; FAQ</Link>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/delete-account">Delete your account</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span>Made for South African e-hailing drivers.</span>
        </div>
      </div>
    </footer>
  );
}
