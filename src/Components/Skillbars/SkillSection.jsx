import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SkillSection.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const skills = [
  {
    id: 1,
    title: "Web Design",
    description:
      "I break down the complex user experience problem to create integrity-focused solutions that connect billions of people.",
  },
  {
    id: 2,
    title: "Front-End",
    description:
      "I specialize in building responsive and fast-working front-end web applications using React.js. My solutions focus on delivering seamless and intuitive user experiences for millions of users.",
  },
  {
    id: 3,
    title: "Back-End",
    description:
      "I build robust and scalable backend systems using Node.js, Express.js, and Sequelize. My solutions ensure efficient data handling and seamless integration, providing a solid foundation for web applications.",
  },
  {
    id: 4,
    title: "Database",
    description:
      "I specialize in designing and managing databases using MySQL, other SQL databases, and Firebase. My expertise includes creating efficient database schemas, optimizing queries, ensuring data integrity, and security.",
  },
];

const SkillSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="skill-section">
      <h1 className="skill-title">What I DO</h1>
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          className="skill-box"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: skill.id * 0.1 }} 
          viewport={{ once: true }}
          onClick={() => setActiveId(skill.id)} 
        >
          <div className="skill-index"> 
            {`0${skill.id}`}
          </div>
          <div className="skill-content"> 
            <h3>{skill.title}</h3>
            <p>{skill.description}</p> 
          </div>
          <div className="skill-icon"> 
            <FaExternalLinkAlt /> 
          </div>
        </motion.div>

      ))}

    </div>
  );
};

export default SkillSection;
