// src/pages/ContactUsPage.js

import React, { useState } from "react";
import "./ContactUsPage.css";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUsPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: '', message: '' });
    emailjs.sendForm("service_id", "template_id", e.target, "user_id").then(
      () => {
        setAlert({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      },
      (error) => {
        console.error(error.text);
        setAlert({ type: 'error', message: 'Oops! Something went wrong.' });
        setLoading(false);
      }
    );
  };

  return (
    <div className="contact-us-page container">
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Contact Us
      </motion.h1>

      <motion.div
        className="contact-details"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you. Please reach out to us with any inquiries.
        </p>
        <p>
          <FaMapMarkerAlt /> Plot no 18 & 19, Sector 15, CBD Belapur, Navi
          Mumbai, Maharashtra 400614
        </p>
        <p>
          <FaPhone /> 022 49783318
        </p>
        <p>
          <FaEnvelope /> kuber.enterprises06@gmail.com
        </p>
      </motion.div>

      <motion.div
        className="contact-form-section"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>Send Us a Message</h2>
        {alert.message && (
          <motion.div
            className={`contact-alert ${alert.type}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {alert.message}
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? (
              <span className="spinner"></span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="location-map"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.930408542982!2d72.87106885!3d19.0759899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648303!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kuber Group Location"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUsPage;
