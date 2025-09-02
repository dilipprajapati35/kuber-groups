// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Kuber Group. All rights reserved.</p>
        {/* You can add quick links, social media icons here */}
      </div>
    </footer>
  );
};

export default Footer;