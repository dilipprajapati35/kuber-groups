// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import MeritsSection from '../components/MeritsSection';
// You might add a section for "Featured Projects" here later

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <MeritsSection />
      {/* Add sections for featured projects, testimonials, etc. */}
    </div>
  );
};

export default HomePage;