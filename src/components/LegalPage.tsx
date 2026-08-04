import type { ReactNode } from "react";
import Seo from "./Seo";
import { site } from "../data/site";

export interface TocItem {
  id: string;
  label: string;
}

interface LegalPageProps {
  title: string;
  /** Overrides the <title> tag; defaults to `${title} · PeakDrive`. */
  seoTitle?: string;
  description?: string;
  path: string;
  /** Show the "last updated" line under the title. */
  showUpdated?: boolean;
  toc?: TocItem[];
  children: ReactNode;
}

export default function LegalPage({
  title,
  seoTitle,
  description,
  path,
  showUpdated = true,
  toc,
  children,
}: LegalPageProps) {
  return (
    <div className="legal">
      <Seo title={seoTitle ?? `${title} · ${site.appName}`} description={description} path={path} />
      <div className="legal__container">
        <header className="legal__header">
          <h1>{title}</h1>
          {showUpdated && <p className="legal__updated">Last updated: {site.lastUpdated}</p>}
        </header>

        {toc && toc.length > 0 && (
          <nav className="legal__toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="legal__body">{children}</div>
      </div>
    </div>
  );
}
