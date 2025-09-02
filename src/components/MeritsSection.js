// src/components/MeritsSection.js
import React from 'react';
import './MeritsSection.css'; // We'll create this CSS file
import { meritsData } from '../data/projectsData'; // Import your merits data

const MeritsSection = () => {
  return (
    <section className="merits-section">
      <div className="container">
        <h2>Our Merits</h2>
        <div className="merits-grid">
          {meritsData.map((merit, index) => (
            <div className="merit-card" key={index}>
              <h3>{merit.title}</h3>
              <p>{merit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeritsSection;
