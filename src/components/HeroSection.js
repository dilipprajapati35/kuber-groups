// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // We'll create this CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Building Dreams, Crafting Futures</h1>
        <p>Your trusted partner in creating landmark residential and commercial properties.</p>
        <button className="btn-primary">Explore Projects</button>
      </div>
    </section>
  );
};

export default HeroSection;