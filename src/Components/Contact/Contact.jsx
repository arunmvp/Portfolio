import React from "react";
import "../Contact/Contact.css";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-section"> 
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="contact-container">
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Sivakasi, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>mvparun3@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <h3>Social Links</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
