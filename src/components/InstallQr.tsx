import { site } from "../data/site";

/** Takes someone on a computer to /install on their phone. Hidden on small screens. */
export default function InstallQr() {
  return (
    <div className="qr-block">
      <img src="/install-qr.svg" alt="" width={84} height={84} loading="lazy" />
      <p>On a computer? Scan this with your Android phone to install {site.appName}.</p>
    </div>
  );
}
