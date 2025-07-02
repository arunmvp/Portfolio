import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, tech, github, demo }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="project-img" />
      <h3>{title}</h3>
      <p className="tech">{tech}</p>
      <div className="btn-group">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
