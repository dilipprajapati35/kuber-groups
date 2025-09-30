import React from 'react';
import { motion } from 'framer-motion';
import './MeritsSection.css';
import { meritsData } from '../data/projectsData';

const MeritsSection = () => {
  return (
    <section className="merits-section">
      <div className="container">
        <h2>Our Merits</h2>
        <div className="merits-grid">
          {meritsData.map((merit, index) => (
            <motion.div
              className="merit-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 22px rgba(0, 0, 0, 0.12)' }}
            >
              <h3>{merit.title}</h3>
              <p>{merit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeritsSection;