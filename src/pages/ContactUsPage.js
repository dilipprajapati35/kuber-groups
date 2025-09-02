// src/pages/ContactUsPage.js
import React, { useState } from 'react';
import './ContactUsPage.css'; // We'll create this CSS file

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="contact-us-page container">
      <h1 className="page-title">Contact Us</h1>

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Please reach out to us with any inquiries.</p>
        <p><strong>Address:</strong> [Your Company Address Here, e.g., Kuber Towers, Ulwe, Panvel, Navi Mumbai]</p>
        <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
        <p><strong>Email:</strong> info@kubergroup.com</p>
      </div>

      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
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
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>

      <div className="location-map">
        <h2>Our Location</h2>
        {/* Placeholder for an embedded Google Map */}
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
      </div>
    </div>
  );
};

export default ContactUsPage;