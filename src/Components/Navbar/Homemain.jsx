import React, { useContext, useState, useEffect } from "react";
import "./Homemain.css";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import profile from "../../assets/blackwhite.jpg";
import profile2 from "../../assets/color.jpg";
import box from "../../assets/box.png";
import DownloadIcon from "@mui/icons-material/Download";
import BackgroundContext from "../../Context/BackgroundContext";
import resume from "../../assets/Arun_Pandian.pdf"

const textReveal = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const flipWords = ["Coder", "Designer", "Explorer"];

const Homemain = () => {
  const { back } = useContext(BackgroundContext);
  const name = "Hi, I’m Arun!";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flipWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [boxImage, setBoxImage] = useState(false);

  const handleMouseOver = () => {
    setBoxImage(!boxImage);
  }

  return (
    <section className="mainsec" id="home">
      <div className="mainsec1">
        <h1 className="title1">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="reveal-char"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Flip Animation */}
        <div className="flip-container">
          Creative
          <div key={currentIndex} className="flip-word">
            {flipWords[currentIndex]}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          From idea to interaction — I build interfaces that people remember.
        </motion.p>

        <div className="icons1">
          <Tooltip title="HTML" arrow placement="top">
            <motion.i
              className="devicon-html5-plain"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            ></motion.i>
          </Tooltip>

          <Tooltip title="CSS" arrow placement="top">
            <motion.i
              className="devicon-css3-plain"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            ></motion.i>
          </Tooltip>

          <Tooltip title="JavaScript" arrow placement="top">
            <motion.i
              className="devicon-javascript-plain"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            ></motion.i>
          </Tooltip>

          <Tooltip title="React" arrow placement="top">
            <motion.i
              className="devicon-react-original"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            ></motion.i>
          </Tooltip>

          <Tooltip title="GitHub" arrow placement="top">
            <motion.i
              className="devicon-github-original"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            ></motion.i>
          </Tooltip>
        </div>

        <a href={resume} download >
          <button
          className="download-btn"
          style={{ backgroundColor: back ? "#1a1a1a" : "#09101A" }}
        > 
         Download CV
          <span className="download-icon">
            <DownloadIcon />
          </span>
        </button>
        </a>
      </div>

      <motion.div
        className="mainsec2"
        initial={{ opacity: 0, x: 200 ,y:200, scale:.4 }} 
        animate={{ opacity: 1, x: 0,y:0 , scale:1 }} 
        transition={{ duration: 1, delay: 0.6 }} 
      >
        <div className="code-box" onMouseOver={handleMouseOver}>
          <img className="boxcode" src={box} alt="" />
          <img className="propic"  src={boxImage ? profile : profile2} alt="" />
          <div className="tag-icon">&lt;/&gt;</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Homemain;
