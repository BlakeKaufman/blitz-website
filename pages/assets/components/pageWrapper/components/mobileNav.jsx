import { useState } from "react";
import "../style.css";
export default function MobileNav() {
  const [displayMobileNav, setDisplayMobileNav] = useState(true);
  return (
    <>
      <div onClick={toggleNav} className="mobile mobileNavBTN">
        <img src="/hamburger.png" alt="hamburger icon for mobile nav" />
      </div>
      <div
        style={{ display: displayMobileNav ? "flex" : "none" }}
        className="mobileNavDropdown"
      >
        <div className="imgContainer">
          <img
            onClick={toggleNav}
            className="iconStyle closeMobileNavBTN"
            src={"/xIcon.svg"}
            alt="x icon to close the mobile nav dropdown"
          />
        </div>
        <ul className="navItems">
          <li className="navItem">
            <a href="./pages/donate/">Welcome</a>
            <div className="underline"></div>
          </li>
          <li className="navItem">
            <a href="./pages/download/">Vision</a>
            <div className="underline"></div>
          </li>
          <li className="navItem">
            <a href="./pages/notBuildYet">Overview</a>
            <div className="underline"></div>
          </li>
          <li className="navItem">
            <a href="./pages/notBuildYet">Features</a>
            <div className="underline"></div>
          </li>
          <li className="navItem">
            <a href="./pages/notBuildYet">Download</a>
            <div className="underline"></div>
          </li>
          <li className="navItem">
            <a href="./pages/notBuildYet">Donate</a>
            <div className="underline"></div>
          </li>
        </ul>
        <div className="appContainer">
          <a href="https://testflight.apple.com/join/fh56Swuk" className="app">
            <img
              alt="apple icon to show if the app is doanloadable on app store"
              draggable="false"
              className="iconStyle"
              src="/apple.svg"
            />
            <span>Testflight</span>
            <div className="screen"></div>
          </a>
          <a
            href="../assets/APks/V-1.0.3-Feb7,2024.apk"
            download
            className="app"
          >
            <img
              draggable="false"
              alt="Google playstore icon to show if app is downlaodable on goodle playstore"
              className="iconStyle"
              src="/google-play.png"
            />
            <span>Android APK</span>
            <div className="screen"></div>
          </a>
        </div>
      </div>
    </>
  );
  function toggleNav() {
    setDisplayMobileNav((prev) => !prev);
  }
}
