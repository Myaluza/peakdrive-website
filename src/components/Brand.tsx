import { Link } from "react-router-dom";
import { site } from "../data/site";

/** Wordmark + mark, links home. The mark is a small map-pin/peak glyph. */
export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label={`${site.appName} home`}>
      <span className="brand__mark" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 18 10 7l4 6 2-3 4 8z"
            fill="currentColor"
            opacity="0.95"
          />
        </svg>
      </span>
      <span>{site.appName}</span>
    </Link>
  );
}
