import { Outlet, Link } from "react-router-dom";

import "./style.css";
import { useEffect, useState } from "react";
import DesktopNav from "./components/desktopNav";
import MobileNav from "./components/mobileNav";

export default function NavFooterWrapper() {
  const [showNav, setShowNav] = useState(true);
  const [fufilledNavOffset, setFufilledNavOffset] = useState(10);

  useEffect(() => {
    if (fufilledNavOffset < 0) {
      console.log("OUT");
      setShowNav(false);
    } else if (fufilledNavOffset > 10) {
      console.log("IN");
      setShowNav(true);
    }
  }, [fufilledNavOffset]);

  useEffect(() => {
    let prevScroll = 0;
    function listenForScroll(e) {
      setFufilledNavOffset((prev) => {
        if (prevScroll < window.scrollY) {
          prevScroll = window.scrollY;
          if (prev < 0) return prev;
          return (prev -= 1);
        } else {
          prevScroll = window.scrollY;
          if (prev > 10) return prev;
          return (prev += 1);
        }
      });
    }

    window.addEventListener("scroll", listenForScroll);

    return () => {
      window.removeEventListener(listenForScroll);
    };
  }, []);
  return (
    <>
      <nav style={{ top: showNav ? 0 : -60 }}>
        <div className="navContent">
          <img
            alt="blitz wallet full text logo"
            className="logo"
            src="/favicon.png"
          />
          <DesktopNav />
          {/* <MobileNav /> */}
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>

      {/* <footer>
        <div className="content">
          <div className="privcyContent">
            <p>@1023 Blitz Wallet LLC.</p>
            <div>
              <a href="./pages/privacyPolicy/">
                <p>Privacy Policy</p>
              </a>

              <p>|</p>
              <a
                target="_blank"
                href=" http://www.apache.org/licenses/LICENSE-2.0"
              >
                Lisencse
              </a>
            </div>
          </div>
          <div className="img">
            <img alt="blitz wallet icon" src="../../public/favicon.png" />
          </div>
          <div className="footerOptions">
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
            <div className="socials">
              <a className="socialsLink" href="">
                <img
                  className="socialIcon"
                  src="/github.svg"
                  alt="github socials icon"
                />
                Github
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}
