import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import logo from '../../assets/images.png';
import { motion } from "framer-motion";

const Navsec = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.div
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navsec">
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li><a className='home' href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#Resume" onClick={closeMenu}>Resume</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navsec;
