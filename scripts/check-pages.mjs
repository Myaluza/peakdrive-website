// Smoke test for the built site: run after `npm run build` (CI does).
//
// Checks every page the build should produce, without a browser:
//   - it exists, with a title and exactly one <h1>;
//   - no rendering slips ("undefined", "NaN", "[object Object]") in the text;
//   - the support address is on it, and WhatsApp isn't (support is email only);
//   - no e-hailing company is named (the site says "e-hailing drivers");
//   - while downloads are closed, nothing links to an APK, /download or /install;
//   - the Support page shows every FAQ question, and its FAQPage structured
//     data has one entry per FAQ.
//
// Plain Node, no dependencies. Exits 1 with a list of every problem found.

import { existsSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const site = read("src/data/site.ts");
const downloadsOpen = /downloadsOpen:\s*true/.test(site);
const email = site.match(/supportEmail:\s*"([^"]+)"/)?.[1];

const pages = ["index", "privacy", "terms", "delete-account", "support", "plus", "404"];
if (downloadsOpen) pages.push("install");

/** FAQ questions from src/data/faqs.ts, read as data rather than run. */
function faqQuestions(source) {
  const out = [];
  const re = /question:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
  for (const [, literal] of source.matchAll(re)) {
    const inner = literal.slice(1, -1);
    out.push(
      literal[0] === '"'
        ? JSON.parse(literal)
        : JSON.parse(`"${inner.replace(/\\'/g, "'").replace(/"/g, '\\"')}"`),
    );
  }
  return out;
}

const decode = (html) =>
  html
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

/** Visible text: scripts, styles and tags removed, entities decoded. */
const visibleText = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ");

const problems = [];
if (!email) problems.push("src/data/site.ts: no supportEmail found");

for (const page of pages) {
  const file = `dist/${page}.html`;
  if (!existsSync(file)) {
    problems.push(`${file}: missing (was the site built?)`);
    continue;
  }
  const html = read(file);
  const text = visibleText(html);
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1]?.trim();
  if (!title) problems.push(`${file}: no <title>`);
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) problems.push(`${file}: ${h1s} <h1> elements, expected 1`);
  for (const slip of ["undefined", "NaN", "[object Object]"]) {
    if (new RegExp(`(^|\\W)${slip.replace(/[[\]]/g, "\\$&")}(\\W|$)`).test(text)) {
      problems.push(`${file}: "${slip}" in the page text`);
    }
  }
  if (email && !html.includes(email)) problems.push(`${file}: no ${email}`);
  if (/whatsapp/i.test(text)) problems.push(`${file}: mentions WhatsApp (support is email only)`);
  const company = text.match(/\b(Uber|Bolt|DiDi|inDrive|InDriver)\b/i);
  if (company) problems.push(`${file}: names "${company[0]}" (say e-hailing drivers instead)`);
  if (!downloadsOpen) {
    const link = html.match(/href="[^"]*(\.apk|\/download|\/install)[^"]*"/);
    if (link) problems.push(`${file}: links to ${link[0]} while downloads are closed`);
  }
}

if (existsSync("dist/support.html")) {
  const html = read("dist/support.html");
  const text = visibleText(html);
  const questions = faqQuestions(read("src/data/faqs.ts"));
  if (questions.length === 0) problems.push("src/data/faqs.ts: no questions found");
  for (const q of questions) {
    if (!text.includes(q)) problems.push(`dist/support.html: FAQ "${q}" not shown`);
  }
  const ldQuestions = (html.match(/"@type":\s*"Question"/g) ?? []).length;
  if (ldQuestions !== questions.length) {
    problems.push(
      `dist/support.html: FAQPage data has ${ldQuestions} questions, the FAQ has ${questions.length}`,
    );
  }
}

if (problems.length > 0) {
  console.error(`${problems.length} problem(s) in the built site:`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`All ${pages.length} pages checked: no problems.`);
