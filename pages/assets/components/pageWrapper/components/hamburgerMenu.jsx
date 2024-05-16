import React, { useState } from "react";
import "./hamburgerMenu.css"; // CSS for styling

const HamburgerMenu = ({ setIsActive, isActive }) => {
  return (
    <div
      className={`hamburger-menu ${isActive ? "active" : ""}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className="line"></div>
    </div>
  );
};

export default HamburgerMenu;
