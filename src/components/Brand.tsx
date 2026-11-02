import { Link } from "react-router-dom";
import { site } from "../data/site";

/** Wordmark + mark, links home. The mark is the app's rising double chevron. */
export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label={`${site.appName} home`}>
      <span className="brand__mark" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 96 96" fill="none">
          <path
            d="M28 56 L48 34 L68 56"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 72 L48 50 L68 72"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
        </svg>
      </span>
      <span>
        SURGE<span className="brand__accent">DRIVE</span>
      </span>
    </Link>
  );
}
