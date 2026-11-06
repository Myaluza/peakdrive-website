import { Link } from "react-router-dom";
import DownloadBadge from "../components/DownloadBadge";
import InstallQr from "../components/InstallQr";
import LegalPage from "../components/LegalPage";
import { site, whatsappLink, emailLink } from "../data/site";
import "../styles/legal.css";

// Android's wording differs between phones and versions, so these steps describe
// what each warning means rather than promising exact button text.
export default function Install() {
  return (
    <LegalPage
      title="Install Phanda"
      seoTitle={`How to install ${site.appName} on Android`}
      description={`Download ${site.appName} for Android and install it in a few steps, including what to do when Android shows a warning.`}
      path={site.installPath}
      showUpdated={false}
    >
      <div className="callout">
        <strong>Android only for now.</strong> There&rsquo;s no iPhone version yet. On a computer,
        open {site.domain}
        {site.installPath} on your Android phone instead.
        <InstallQr />
      </div>

      <p>
        {site.appName} isn&rsquo;t on Google Play yet, so you download it from this site. It takes a
        few minutes on a good connection and uses about {site.apkSizeMb} MB of data, so use Wi-Fi if
        you can.
      </p>

      <div className="contact-row">
        <DownloadBadge location="install" />
      </div>

      <h2 id="steps">Install it in five steps</h2>
      <ol>
        <li>
          <strong>Download the app.</strong> Tap the button above. Your browser may say the file
          could be harmful, because it warns about every app file. Choose to download it anyway.
        </li>
        <li>
          <strong>Open the file.</strong> Tap it when the download finishes, or find{" "}
          <strong>{site.apkFileName}</strong> in your Downloads.
        </li>
        <li>
          <strong>Allow the install.</strong> If Android says your browser can&rsquo;t install apps,
          open <strong>Settings</strong>, turn on <strong>Allow from this source</strong>, then go
          back.
        </li>
        <li>
          <strong>Tap Install.</strong> If Google Play Protect says it doesn&rsquo;t recognise the
          app, open <strong>More details</strong> and choose <strong>Install anyway</strong>.
        </li>
        <li>
          <strong>Open {site.appName}</strong> and sign up. You can turn the browser permission off
          again afterwards.
        </li>
      </ol>

      <h2 id="warnings">Why does Android warn me?</h2>
      <p>
        Android warns about any app that doesn&rsquo;t come from Google Play, whoever made it. Only
        continue if you downloaded the file from this website. To be sure you have the right file,
        check the details below.
      </p>

      <h2 id="details">About this version</h2>
      <div className="table-scroll">
        <table className="data-table">
          <tbody>
            <tr>
              <th scope="row">Version</th>
              <td>
                {site.appVersion} (build {site.appBuild})
              </td>
            </tr>
            <tr>
              <th scope="row">Released</th>
              <td>{site.apkReleased}</td>
            </tr>
            <tr>
              <th scope="row">File</th>
              <td>
                {site.apkFileName}, {site.apkSizeMb} MB
              </td>
            </tr>
            <tr>
              <th scope="row">SHA-256</th>
              <td className="break-all">{site.apkSha256}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="problems">If it doesn&rsquo;t install</h2>
      <ul>
        <li>
          <strong>&ldquo;App not installed&rdquo;:</strong> free up some storage and try again. If
          you already have {site.appName}, restart your phone first. Only uninstall it as a last
          resort, as that removes your shift log.
        </li>
        <li>
          <strong>The download stops:</strong> move to a stronger connection and tap the button
          again.
        </li>
        <li>
          <strong>You can&rsquo;t find the file:</strong> open your browser&rsquo;s Downloads list,
          or your phone&rsquo;s Files app.
        </li>
      </ul>

      <h2 id="updates">Updating Phanda</h2>
      <p>
        Most updates arrive by themselves when you open the app. When a new version is required, the
        app downloads it and opens the installer for you. You can also install a new version from
        this page over your old one, without uninstalling.
      </p>

      <h2 id="help">Still stuck?</h2>
      <p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>{" "}
        or email <a href={emailLink}>{site.supportEmail}</a> and tell us your phone model and what
        the screen says. There&rsquo;s more help on the <Link to="/support">Support page</Link>.
      </p>
    </LegalPage>
  );
}
