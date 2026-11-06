import type { MouseEvent } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { trackEvent } from "./analytics";
import { site } from "./data/site";

/**
 * Click handler for every link to `site.downloadPath`.
 *
 * On Android the file downloads as usual, and the install steps open behind it
 * so they're on screen when Android starts asking questions. Anywhere else an
 * APK is no use, so the visitor goes to the install page instead. Once they're
 * on that page the link always downloads, so a button there is never dead.
 * Without JavaScript the link still downloads the file.
 */
export function useDownloadClick(location: string) {
  const navigate = useNavigate();
  const onInstallPage = useMatch(site.installPath) !== null;

  return (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent("click_get_app", { location });
    if (onInstallPage) return;
    if (!/Android/i.test(navigator.userAgent)) event.preventDefault();
    navigate(site.installPath);
  };
}
