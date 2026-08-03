import { site } from "../data/site";

interface Props {
  variant?: "primary" | "light";
  className?: string;
}

/** Google Play call-to-action button. `light` renders a white button for use on
 *  coloured/dark bands; `primary` is the default indigo button. */
export default function DownloadBadge({ variant = "primary", className }: Props) {
  const variantClass = variant === "light" ? "btn-light" : "btn-primary";
  return (
    <a
      href={site.playStoreUrl}
      className={`btn ${variantClass} ${className ?? ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.6 2.3 13 12 3.6 21.7A1.5 1.5 0 0 1 3 20.5v-17c0-.5.2-.9.6-1.2Zm11 10.8 2.8 2.9-9.2 5.3 6.4-8.2Zm0-2.2L8.2 2.9l9.2 5.3-2.8 2.7Zm1.5 1.1 3.4-2 .1.1c1 .6 1 2 0 2.6l-3.5 2-2.1-2.3 2.1-2.4Z" />
      </svg>
      Get it on Google Play
    </a>
  );
}
