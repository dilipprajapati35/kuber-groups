// src/pages/AboutUsPage.js
import React from 'react';
import { meritsData } from '../data/projectsData'; // Merits data is also used here
import './AboutUsPage.css'; // We'll create this CSS file

const AboutUsPage = () => {
  return (
    <div className="about-us-page container">
      <h1 className="page-title">About Kuber Group</h1>

      <section className="founder-message">
        <h2>From the Desk of Founder</h2>
        <p>A piece of land, four walls built around it & a roof on top can make a house, but we at Kuber Heritage LLP add foundation of experience, strength of quality construction, colors of innovative solutions, lights of new technology, surety of transparent transactions & finally the touch of emotion that converts it into your dream home which adds status to you.</p>
        <p>In this age of technology where the world has become very small, companies today need to provide quality, efficient, innovative, new age & cost effective solutions to cater the ever evolving customers, and real estate industry is no exception to it.</p>
        <p>Kuber Heritage LLP stands tall when it comes to deliver the above attributes. We have an approach where we work for utmost customer satisfaction & thus we have been able to create our niche in the market as one of the premier construction companies. Our constructions at different locations have been the address for more than 10,000 happy families and we assure to our customers a perfect living solution with continuing our journey of building status.</p>
      </section>

      <section className="company-vision">
        <h2>Company Vision</h2>
        <p>The real estate sector is a very important & critical sector of our economy. It has a huge multiplier effect on the economy and therefore, is a big driver of economic growth. It is the second-largest employment-generating sector after agriculture. Growing at a rate of about 20% per annum, this sector has been contributing about 5-6% to India's GDP. Not only does it generate a high-level of direct employment, but also stimulates the demand in over 250 ancillary industries such as cement, steel, paint, brick, building materials, consumer durables and so on.</p>
        <p>With huge sector, comes huge responsibilities & being a part of this sector we are well aware of that. Our vision is not only to give our customers a complete living experience from beginning to end with quality products, clear transactions and secure constructions but also on the larger issues like impact on environment, social responsibilities of the industry etc.</p>
        <p>We are continuously improving ourselves by adapting better techniques, eco-friendly methods, proper training of the staff, raising good social & economical stands through responsible associations, thus making a better constructed India for tomorrow.</p>
      </section>

      <section className="about-merits">
        <h2>Our Merits</h2>
        <div className="merits-grid"> {/* Reusing merits-grid style */}
          {meritsData.map((merit, index) => (
            <div className="merit-card" key={index}>
              <h3>{merit.title}</h3>
              <p>{merit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;