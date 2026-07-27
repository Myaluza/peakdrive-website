interface PhoneProps {
  src: string;
  alt: string;
  /** Above-the-fold images (hero) should load eagerly; others lazily. */
  priority?: boolean;
}

// Resolve public asset paths against the configured base URL (works whether the
// site is served from the domain root or a project sub-path).
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

/** A phone frame that displays an app screenshot. */
export default function Phone({ src, alt, priority }: PhoneProps) {
  return (
    <div className="phone">
      <div className="phone__notch" />
      <img
        className="phone__shot"
        src={asset(src)}
        alt={alt}
        width={620}
        height={1371}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
