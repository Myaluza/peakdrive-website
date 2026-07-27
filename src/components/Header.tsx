import { Link } from "react-router-dom";
import Brand from "./Brand";
import { site } from "../data/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <nav aria-label="Primary">
          <div className="nav-links">
            <Link to="/#features">Features</Link>
            <Link to="/#how">How it works</Link>
            <Link to="/support">Support</Link>
          </div>
          <a
            href={site.playStoreUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
