import { Head } from "vite-react-ssg";
import { site } from "../data/site";

interface SeoProps {
  title: string;
  description?: string;
  /** Route path beginning with "/", used to build the canonical URL. */
  path: string;
}

/**
 * Per-page <head> tags. `Head` from vite-react-ssg is SSR-aware, so these are
 * baked into each pre-rendered HTML file (good for crawlers / app reviewers).
 */
export default function Seo({ title, description, path }: SeoProps) {
  const desc = description ?? site.description;
  const canonical = `${site.url}${path === "/" ? "" : path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.appName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${site.url}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Head>
  );
}
