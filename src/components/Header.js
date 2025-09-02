// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import kuberLogo from "../assets/kuber-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={kuberLogo} alt="Kuber Group Logo" />
          <span className="logo-text">Kuber Group</span>
        </Link>

        {/* Hamburger Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/ongoing-projects" onClick={() => setIsMenuOpen(false)}>Ongoing Projects</Link></li>
            <li><Link to="/completed-projects" onClick={() => setIsMenuOpen(false)}>Completed Projects</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
