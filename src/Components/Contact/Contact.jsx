import React, { useRef, useState } from "react"; // 👈 useState add
import "../Contact/Contact.css";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useContext } from "react";
import BackgroundContext from "../../Context/BackgroundContext";
import emailjs from "emailjs-com";

const Contact = () => {
  const { back } = useContext(BackgroundContext);
  const form = useRef();
  const [loading, setLoading] = useState(false); // 👈 loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // 👈 Start loading

    emailjs
      .sendForm(
        "service_m32sqsb",
        "template_qmcr86s",
        form.current,
        "DmrHis-fpWPHvsWr_"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          form.current.reset();
          setLoading(false); // 👈 Stop loading
        },
        (error) => {
          alert("Failed to send message, try again!");
          console.log(error.text);
          setLoading(false); // 👈 Stop loading
        }
      );
  };

  return (
    <div
      id="contact"
      className="contact-section"
      style={{ backgroundColor: !back ? "#0f1722" : "#1a1a1a" }}
    >
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
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={{
              backgroundColor: !back ? "#0d1520ec" : "#1e1e1eff",
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={{
              backgroundColor: !back ? "#0d1520ec" : "#1e1e1eff",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            style={{
              backgroundColor: !back ? "#0d1520ec" : "#1e1e1eff",
            }}
          ></textarea>

          {/* Button with loader */}
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Right Side Info */}
        <motion.div
          className="contact-info"
          style={{
            backgroundColor: !back ? "#0d1520ec" : "#1e1e1eff",
          }}
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
              <a
                href="https://github.com/arunmvp"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/arun-pandian-9833a7357/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://wa.me/916385843484"
                target="_blank"
                rel="noreferrer"
              >
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
