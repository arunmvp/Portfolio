import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Scroll.css";

const Scroll = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      setShow(window.scrollY > window.innerHeight); // show after 2nd component 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return ( 
    show && ( 
      <Link to="home" smooth={true} duration={600}> 
        <motion.div
          className="back-to-top"
          animate={{ rotate: [0, 15, -15, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            ease: "easeInOut", 
          }}
        >
          <FaChevronUp className="up-icon" />
        </motion.div>
      </Link>
    )
  );
};

export default Scroll;
