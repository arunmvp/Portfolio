import React, { useState } from "react";
import ProjectCard from "./Projectcard";
import { motion } from "framer-motion";
import project1 from "../../assets/box.png"; 
import "./MiniProjects.css";

const MiniProjects = () => {
  const allProjects = [
    {
      image: project1,
      title: "Todo App",
      tech: "React",
      github: "#",
      demo: "#",
    },
    {
      image: project1,
      title: "Weather App",
      tech: "JavaScript",
      github: "#",
      demo: "#",
    },
    {
      image: project1,
      title: "Cart UI",
      tech: "JavaScript",
      github: "#",
      demo: "#",
    },
    {
      image: project1,
      title: "Portfolio",
      tech: "React",
      github: "#",
      demo: "#",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allProjects
    : allProjects.filter((p) => p.tech === activeTab);

  return (
    <section className="mini-projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Mini Projects
      </motion.h2>

      {/* Tabs */}
      <div className="tabs">
        {["All", "React", "JavaScript"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="project-grid">
        {filtered.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default MiniProjects;
