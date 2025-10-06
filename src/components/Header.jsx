import React, { useState } from "react";
import logo from "/src/images/CODEVINE-LOGO-BLACK.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="left-section">
        <div className="image-container">
          <img src={logo} alt="CODEVINE Logo - Web Developer Portfolio" />
        </div>
      </div>

      <div className="mid-sect">
        <p>CODEVINE</p>
      </div>

      {/* Hamburger button (always visible) */}
      <div
        aria-label="Toggle navigation menu"
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav menu (toggles open/close) */}
      <nav
        aria-label="Main navigation"
        className={`nav-menu ${isOpen ? "show" : ""}`}
      >
        <a href="#hero" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        
      </nav>
    </header>
  );
}

export default Header;
