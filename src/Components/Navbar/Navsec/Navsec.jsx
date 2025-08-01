import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Navbar/Navbar.css";
import logo from '../../../assets/images.png';
import { motion } from "framer-motion";
import { Link } from 'react-scroll'; // 👈 ADD THIS

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
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                onClick={closeMenu}
                activeClass="active" 
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                onClick={closeMenu}
                activeClass="active"
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                to="Resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                onClick={closeMenu}
                activeClass="active"
              >
                Resume
              </Link>
            </li> */}
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                onClick={closeMenu}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                onClick={closeMenu}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
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
