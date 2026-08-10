import { playStoreCtaUrl } from "../data/site";
import { trackEvent } from "../analytics";

interface Props {
  variant?: "primary" | "light";
  className?: string;
  /** Where on the page this badge sits, for click attribution (e.g. "hero"). */
  location?: string;
  /** Button text. Defaults to the full Play Store wording. */
  label?: string;
  /** Whether to render the Play glyph. Off for tight spots like the header. */
  showIcon?: boolean;
}

/**
 * Google Play call-to-action button, and the single place a Play Store link is
 * built.
 *
 * Every CTA on the site goes through here so the four things that must travel
 * together — the referrer-tagged `playStoreCtaUrl`, `target="_blank"`,
 * `rel="noopener noreferrer"`, and the `click_get_app` event — cannot drift
 * apart. They previously did: the header hand-rolled its own copy of all four,
 * and the footer linked the canonical URL with no tracking at all, so footer
 * installs were both unattributed and uncounted.
 *
 * `light` renders a white button for use on coloured/dark bands; `primary` is
 * the default indigo button.
 */
export default function DownloadBadge({
  variant = "primary",
  className,
  location,
  label = "Get it on Google Play",
  showIcon = true,
}: Props) {
  const variantClass = variant === "light" ? "btn-light" : "btn-primary";
  return (
    <a
      href={playStoreCtaUrl}
      className={`btn ${variantClass} ${className ?? ""}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_get_app", { location: location ?? "unknown" })}
    >
      {showIcon && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.6 2.3 13 12 3.6 21.7A1.5 1.5 0 0 1 3 20.5v-17c0-.5.2-.9.6-1.2Zm11 10.8 2.8 2.9-9.2 5.3 6.4-8.2Zm0-2.2L8.2 2.9l9.2 5.3-2.8 2.7Zm1.5 1.1 3.4-2 .1.1c1 .6 1 2 0 2.6l-3.5 2-2.1-2.3 2.1-2.4Z" />
        </svg>
      )}
      {label}
    </a>
  );
}
