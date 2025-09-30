// src/pages/HomePage.js
import React from "react";

import HeroSection from "../components/HeroSection";
import FeaturedProjects from "../components/FeaturedProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import MeritsSection from "../components/MeritsSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <MeritsSection />
    </div>
  );
};

export default HomePage;
