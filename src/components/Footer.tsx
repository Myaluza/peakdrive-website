import { Link } from "react-router-dom";
import { site, whatsappLink, emailLink } from "../data/site";
import { useDownloadClick } from "../useDownloadClick";

export default function Footer() {
  const year = new Date().getFullYear();
  const onDownload = useDownloadClick("footer");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <h4>{site.appName}</h4>
            <p style={{ maxWidth: "32ch" }}>{site.tagline}</p>
          </div>

          <div>
            <h4>Product</h4>
            <ul>
              {site.downloadsOpen && (
                <>
                  <li>
                    {/* A plain text link, but tracked like every other download
                        CTA. */}
                    <a href={site.downloadPath} onClick={onDownload}>
                      Download
                    </a>
                  </li>
                  <li>
                    <Link to={site.installPath}>How to install</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/plus">Phanda Plus</Link>
              </li>
              <li>
                <Link to="/support">Support &amp; FAQ</Link>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp support
                </a>
              </li>
              <li>
                <a href={emailLink}>Email support</a>
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

        <p className="site-footer__notice">
          {site.appName} is an independent app. It isn&rsquo;t affiliated with, endorsed by or
          sponsored by any e-hailing company.
        </p>

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
