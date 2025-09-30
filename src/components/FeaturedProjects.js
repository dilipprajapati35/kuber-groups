import React from "react";
import { motion } from "framer-motion";
import './FeaturedProjects.css';
import { completedProjects } from '../data/projectsData';

const featured = completedProjects.slice(1, 4);

const FeaturedProjects = () => (
  <section className="featured-projects-section">
    <div className="container">
      <motion.h2
        className="featured-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
      </motion.h2>
      <div className="featured-projects-grid">
        {featured.map((proj, idx) => (
          <motion.div
            className="featured-card"
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -10, boxShadow: '0 10px 22px rgba(0,0,0,0.13)' }}
          >
            <img src={proj.imageUrl} alt={proj.name} className="featured-img" />
            <div className="featured-info">
              <h3>{proj.name}</h3>
              <p>{proj.location}</p>
              <p className="featured-details">{proj.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
