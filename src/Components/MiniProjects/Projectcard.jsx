import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import BackgroundContext from "../../Context/BackgroundContext";

const ProjectCard = ({ image, title, tech, github, demo }) => {

  const {back} = useContext(BackgroundContext)
  


  return (
    <motion.div
      className="project-card"
      style={{ backgroundColor: !back ? "#0f1722" : "#1f1f1fff" }}
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
        <a href={github} target="_blank" rel="noopener noreferrer" style={{backgroundColor: !back ? "#0f1722" : "#171717f3" }}>GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer" style={{backgroundColor: !back ? "#0f1722" : "#171717ee" }}>Live Demo</a> 
      </div> 
    </motion.div> 
  );
};

export default ProjectCard;
