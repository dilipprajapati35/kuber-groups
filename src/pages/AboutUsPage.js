// src/pages/AboutUsPage.js

import React from 'react';
import { meritsData } from '../data/projectsData';
import { FaAward, FaLeaf, FaUsers, FaRegHandshake, FaRegBuilding, FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
// No founder image available; use placeholder avatar
import './AboutUsPage.css';

const AboutUsPage = () => {

  // Icon selection for merits (cycle through icons for demo)
  const meritIcons = [FaAward, FaLeaf, FaUsers, FaRegHandshake, FaRegBuilding, FaRegLightbulb];

  return (
    <div className="about-us-page container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        About Kuber Group
      </motion.h1>

      <motion.section
        className="founder-message fade-in-section"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="founder-flex">
          <div className="founder-img founder-avatar">KG</div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >From the Desk of Founder</motion.h2>
            <p>A piece of land, four walls built around it & a roof on top can make a house, but we at Kuber Group add foundation of experience, strength of quality construction, colors of innovative solutions, lights of new technology, surety of transparent transactions & finally the touch of emotion that converts it into your dream home which adds status to you.</p>
            <p>In this age of technology where the world has become very small, companies today need to provide quality, efficient, innovative, new age & cost effective solutions to cater the ever evolving customers, and real estate industry is no exception to it.</p>
            <p>Kuber Group stands tall when it comes to deliver the above attributes. We have an approach where we work for utmost customer satisfaction & thus we have been able to create our niche in the market as one of the premier construction companies. Our constructions at different locations have been the address for more than 10,000 happy families and we assure to our customers a perfect living solution with continuing our journey of building status.</p>
            <div className="founder-signature">- Founder, Kuber Group</div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="company-vision fade-in-section"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >Company Vision</motion.h2>
        <p>The real estate sector is a very important & critical sector of our economy. It has a huge multiplier effect on the economy and therefore, is a big driver of economic growth. It is the second-largest employment-generating sector after agriculture. Growing at a rate of about 20% per annum, this sector has been contributing about 5-6% to India's GDP. Not only does it generate a high-level of direct employment, but also stimulates the demand in over 250 ancillary industries such as cement, steel, paint, brick, building materials, consumer durables and so on.</p>
        <p>With huge sector, comes huge responsibilities & being a part of this sector we are well aware of that. Our vision is not only to give our customers a complete living experience from beginning to end with quality products, clear transactions and secure constructions but also on the larger issues like impact on environment, social responsibilities of the industry etc.</p>
        <p>We are continuously improving ourselves by adapting better techniques, eco-friendly methods, proper training of the staff, raising good social & economical stands through responsible associations, thus making a better constructed India for tomorrow.</p>
      </motion.section>

      <motion.section
        className="about-merits fade-in-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >Our Merits</motion.h2>
        <div className="merits-grid">
          {meritsData.map((merit, index) => {
            const Icon = meritIcons[index % meritIcons.length];
            return (
              <motion.div
                className="merit-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="merit-icon"><Icon size={36} /></div>
                <h3>{merit.title}</h3>
                <p>{merit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;