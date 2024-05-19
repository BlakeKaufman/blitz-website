import { Outlet, Link } from "react-router-dom";

import "./style.css";
import { useEffect, useState } from "react";
import DesktopNav from "./components/desktopNav";
import MobileNav from "./components/mobileNav";
import HamburgerMenu from "./components/hamburgerMenu";
import Footer from "./components/footer";

export default function NavFooterWrapper() {
  const [showNav, setShowNav] = useState(true);
  const [fufilledNavOffset, setFufilledNavOffset] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowNav(true);
      return;
    }
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
      if (window.scrollY === 0) {
        setShowNav(true);
        return;
      }
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
          <HamburgerMenu setIsActive={setIsActive} isActive={isActive} />
        </div>
      </nav>
      <MobileNav isActive={isActive} />
      <div
        style={{
          transform: isActive
            ? `translateY(30px) scale(.95)`
            : `translateY(0) scale(1)`,
        }}
        className="container"
      >
        <Outlet />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
