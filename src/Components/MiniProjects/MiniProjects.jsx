import React, { useState } from "react";
import ProjectCard from "./Projectcard";
import { motion } from "framer-motion";
import project1 from "../../assets/todo.png"; 
import project2 from "../../assets/cart.png"; 
import project3 from "../../assets/movies.png"; 
import ecom from "../../assets/ecommerce.png"; 
import "./MiniProjects.css";

const MiniProjects = () => {
  const allProjects = [
    {
      image: project1,
      title: "Todo App",
      tech: "JavaScript",
      github: "https://github.com/arunmvp/mini/tree/6423bb9d41bf0eaab69a716c0614b86e249ac08d/Todo", 
      demo: "https://miniprojectsarun.netlify.app/todo/",
    },
    {
      image: project3,
      title: "Movies Api",
      tech: "JavaScript",
      github: "https://github.com/arunmvp/mini/tree/6423bb9d41bf0eaab69a716c0614b86e249ac08d/Movie",
      demo: "https://miniprojectsarun.netlify.app/movie/movie",
    },
    {
      image: project2,
      title: "Cart UI",
      tech: "JavaScript",
      github: "https://github.com/arunmvp/mini/tree/6423bb9d41bf0eaab69a716c0614b86e249ac08d/Cart", 
      demo: "https://miniprojectsarun.netlify.app/cart/cart", 
    }, 
    { 
      image: ecom,
      title: "E-Commerce UI",
      tech: "Html Css",
      github: "#",  
      demo: "https://upbasketthemearun.netlify.app/", 
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
