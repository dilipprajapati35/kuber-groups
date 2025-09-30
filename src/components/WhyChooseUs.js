import React from "react";
import { motion } from "framer-motion";
import './WhyChooseUs.css';

const features = [
  {
    icon: "🏗️",
    title: "Quality Construction",
    desc: "We use the best materials and skilled professionals for every project."
  },
  {
    icon: "🛡️",
    title: "Trust & Transparency",
    desc: "Honest communication and clear processes at every step."
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Modern designs and new-age solutions for future-ready spaces."
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    desc: "Thousands of happy families and successful projects delivered."
  }
];

const WhyChooseUs = () => (
  <section className="why-choose-section">
    <div className="container">
      <motion.h2
        className="why-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Why Choose Kuber Group?
      </motion.h2>
      <div className="why-features-grid">
        {features.map((f, idx) => (
          <motion.div
            className="why-feature-card"
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -10, boxShadow: '0 10px 22px rgba(0,0,0,0.13)' }}
          >
            <div className="why-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
