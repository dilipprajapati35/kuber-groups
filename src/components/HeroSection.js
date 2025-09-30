import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './HeroSection.css';

// Import your background images
import background1 from '../assets/moral-orchid.jpg';
import background2 from '../assets/kuber-homes.jpg';
import background3 from '../assets/image3.jpg';

const sliderData = [
  {
    image: background1,
    title: "Building Dreams, Crafting Futures",
    description: "Your trusted partner in creating landmark residential and commercial properties."
  },
  {
    image: background2,
    title: "Innovative Designs, Lasting Quality",
    description: "We bring innovation and quality to every project, ensuring lasting value."
  },
  {
    image: background3,
    title: "Your Vision, Our Commitment",
    description: "Let us turn your vision into a reality with our commitment to excellence."
  }
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop={true}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="container hero-content">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {slide.description}
                </motion.p>
                <motion.button
                  className="btn-primary"
                  onClick={() => {
                    window.location.href = '/ongoing-projects';
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Projects
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;