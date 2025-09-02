// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this CSS file

// Assuming your logo is in src/assets/kuber-logo.png or similar
// You'll need to place your logo image in a public or assets folder
// For now, let's use a placeholder or assume it's imported
import kuberLogo from '../assets/kuber-logo.png'; // Make sure to put your logo here

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={kuberLogo} alt="Kuber Group Logo" />
          <span className="logo-text">Kuber Group</span>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ongoing-projects">Ongoing Projects</Link></li>
            <li><Link to="/completed-projects">Completed Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
