import "./footerCopywriteBar.css";
import { ICONS } from "../../../../../constants";

export default function FooterCopywriteBar() {
  return (
    <div className="copywriteBar">
      <p>Blitz Wallet © 2023</p>
      <div className="socials">
        <div className="socialIcon">
          <img src={ICONS.githubIcon} alt="" srcset="" />
        </div>
        <div className="socialIcon"></div>
      </div>
    </div>
  );
}
