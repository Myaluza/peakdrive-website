import { Head } from "vite-react-ssg";

type Schema = Record<string, unknown>;

/**
 * Injects a schema.org JSON-LD block into <head>. `Head` (react-helmet-async) is
 * SSR-aware, so the script is baked into the pre-rendered HTML for crawlers /
 * rich results. Pass a single schema object or an array of them.
 */
export default function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
