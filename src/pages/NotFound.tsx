import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../data/site";

export default function NotFound() {
  return (
    <section className="section">
      <Seo title={`Page not found · ${site.appName}`} path="/404" />
      <div className="container center" style={{ maxWidth: 560, padding: "48px 24px" }}>
        <span className="eyebrow">404</span>
        <h1>This road doesn't exist</h1>
        <p>The page you're looking for moved or never existed. Let's get you back on the map.</p>
        <p style={{ marginTop: "var(--space-lg)" }}>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
