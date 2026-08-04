import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import { playStoreCtaUrl } from "../data/site";
import { trackEvent } from "../analytics";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <nav aria-label="Primary">
          <div id="primary-nav" className={`nav-links${open ? " nav-links--open" : ""}`}>
            <Link to="/#features" onClick={close}>
              Features
            </Link>
            <Link to="/#how" onClick={close}>
              How it works
            </Link>
            <Link to="/support" onClick={close}>
              Support
            </Link>
          </div>
          <a
            href={playStoreCtaUrl}
            className="btn btn-primary site-header__cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_get_app", { location: "header" })}
          >
            Get the app
          </a>
          {/* Shown only under 720px (CSS); reveals the links above as a dropdown. */}
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </nav>
      </div>
    </header>
  );
}
