import "./footerCopywriteBar.css";
import { ICONS } from "../../../../../constants";

export default function FooterCopywriteBar() {
  return (
    <div className="copywriteBar">
      <p>Blitz Wallet © 2023</p>
      <div className="socials">
        <a
          target="_blank"
          href="https://github.com/BlakeKaufman/BlitzWallet"
          className="socialIcon"
        >
          <img src={ICONS.githubIcon} alt="github icon to link to code" />
        </a>
        <a
          target="_blank"
          href="https://x.com/BlitzWallet1"
          className="socialIcon"
        >
          <img src={ICONS.twitterIcon} alt="github icon to link to code" />
        </a>
      </div>
    </div>
  );
}
