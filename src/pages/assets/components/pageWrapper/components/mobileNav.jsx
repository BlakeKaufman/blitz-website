import { useState } from "react";
import "../style.css";

import "./mobileNav.css";

export default function MobileNav({ isActive }) {
  return (
    <div
      style={{
        // display: isActive ? "flex" : "none",
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 99 : -1,
        backdropFilter: isActive ? `blur(5px)` : `blur(0)`,
        WebkitBackdropFilter: isActive ? `blur(5px)` : `blur(0)`,
      }}
      className="mobileNavDropdown"
    >
      <ul
        style={{ visibility: isActive ? "visible" : "hidden" }}
        className="navItems"
      >
        <li className="navItem">
          <a href="./pages/donate/">Vision</a>
        </li>
        <li className="navItem">
          <a href="./pages/donate/">Product</a>
        </li>
        <li className="navItem">
          <a href="./pages/donate/">Demos</a>
        </li>
        <li className="navItem">
          <a href="./pages/donate/">Donate</a>
        </li>
      </ul>
    </div>
  );
}
