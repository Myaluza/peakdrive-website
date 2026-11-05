import { site } from "../data/site";
import { trackEvent } from "../analytics";

interface Props {
  variant?: "primary" | "light";
  className?: string;
  /** Where on the page this badge sits, for click attribution (e.g. "hero"). */
  location?: string;
  /** Button text. Defaults to the full download wording. */
  label?: string;
  /** Whether to render the download glyph. Off for tight spots like the header. */
  showIcon?: boolean;
}

/**
 * The download call-to-action button, and the single place the download link
 * is built.
 *
 * Every CTA on the site goes through here so the link and the `click_get_app`
 * event travel together. They previously drifted: the header hand-rolled its
 * own copy, and the footer linked with no tracking at all, so footer downloads
 * were uncounted.
 *
 * The link is `site.downloadPath`, which redirects to the newest APK.
 * Same tab, no `target`: it starts a file download rather than opening a page.
 *
 * `light` renders a white button for use on coloured/dark bands; `primary` is
 * the default indigo button.
 */
export default function DownloadBadge({
  variant = "primary",
  className,
  location,
  label = "Download for Android",
  showIcon = true,
}: Props) {
  const variantClass = variant === "light" ? "btn-light" : "btn-primary";
  return (
    <a
      href={site.downloadPath}
      className={`btn ${variantClass} ${className ?? ""}`}
      onClick={() => trackEvent("click_get_app", { location: location ?? "unknown" })}
    >
      {showIcon && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3v12m0 0-5-5m5 5 5-5M4 19h16" />
        </svg>
      )}
      {label}
    </a>
  );
}
