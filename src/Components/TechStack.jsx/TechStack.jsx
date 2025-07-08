import React from "react";
import "./TechStack.css";
import { motion } from "framer-motion"; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiMysql, SiFirebase, SiPostman, SiBootstrap, SiMui, SiExpress } from "react-icons/si";

const frontendSkills = [
  { title: "HTML5", icon: <FaHtml5 />, percent: 95 },
  { title: "CSS3", icon: <FaCss3Alt />, percent: 90 },
  { title: "JavaScript", icon: <FaJs />, percent: 85 },
  { title: "React.js", icon: <FaReact />, percent: 90 },
];

const backendDatabaseSkills = [
  { title: "Node.js", icon: <FaNode />, percent: 85 },
  { title: "Express.js", icon: <SiExpress />, percent: 80 },
  { title: "MySQL", icon: <SiMysql />, percent: 75 },
  { title: "Firebase", icon: <SiFirebase />, percent: 70 },  
]; 

const otherTools = [ 
  { title: "Bootstrap", icon: <SiBootstrap /> },
  { title: "Material UI", icon: <SiMui /> },
  { title: "Postman", icon: <SiPostman /> },
  { title: "Git & GitHub", icon: <FaGitAlt /> },
  { title: "Figma", icon: <FaFigma /> }, 
]; 

const TechStack = () => {
  return (
    <div className="tech-section">
      <h2 className="tech-heading">🛠 Tech Stack</h2>
      
      <div className="tech-grid">
        <div className="skill-group"> 
          <h3>Frontend</h3> 
          {frontendSkills.map((skill, index) => ( 
            <div className="progress-box" key={index}>
              <div className="label">
                 
                {skill.icon} {skill.title} 
              </div> 
              <div className="bar">  
                <motion.div
                  className="fill" 
                  initial={{ width: 0 }} 
                  whileInView={{ width: `${skill.percent}%` }}  
                  transition={{ duration: 1 }} 
                />
              </div> 
            </div>
          ))}
        </div>

        <div className="skill-group">
          <h3>Backend & Database</h3>
          {backendDatabaseSkills.map((skill, index) => (
            <div className="progress-box" key={index}>
              <div className="label">
                {skill.icon} {skill.title}
              </div>
              <div className="bar">
                <motion.div
                  className="fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="others">
        <h3>🧰 Other Tools</h3>
        <motion.div
          className="tools-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
        >
          {otherTools.map((tool, index) => (
            <motion.div className="tool" key={index}
              whileHover={{ scale: 1.1 }}
            >
              {tool.icon}
              <p>{tool.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
