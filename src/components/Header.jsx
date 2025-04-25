import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <Link to="/"><span className="logo">AlansLinks</span></Link>
      
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <NavLink to="/scholarships" className="nav-link">Scholarships</NavLink>
        <NavLink to="/winnersCorner" className="nav-link">Winners Corner</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>

        <div id="toggle-theme">
          <img src="/assets/images/icon-moon.png" alt="theme icon" style={{ height: "26px", width: "26px" }} />
          <span>Dark mode</span>
        </div>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "x" : "☰"}
      </button>
    </header>
  );
}
