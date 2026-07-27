import type { Faq } from "../data/faqs";

/**
 * Native <details> accordion — works without JS (progressive enhancement) and is
 * accessible by default. Mirrors the app's Help screen behaviour.
 */
export default function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.id}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
