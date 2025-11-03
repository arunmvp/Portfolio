import React, { useState } from "react";
import ProjectCard from "./Projectcard";
import { motion } from "framer-motion";
import project1 from "../../assets/todo.png";
import project2 from "../../assets/cart.png";
import project3 from "../../assets/movies.png";
import ecom from "../../assets/ecommerce.png";
import ecom2 from "../../assets/e-com.png";
import ecom33 from '../../assets/ecom33.png';
import cartreact from '../../assets/cartreact.png';
import mern from '../../assets/mern.png'
import todo from '../../assets/todo-mern.png'
import "./MiniProjects.css";
import { useContext } from "react";
import BackgroundContext from "../../Context/BackgroundContext"; 

const MiniProjects = () => { 
  const allProjects = [ 
    {
      image: todo,
      title: "Todo App - MERN",
      tech: "Fullstack",
      github:
        "https://github.com/arunmvp/mytodo",
      demo: "https://mytod0.netlify.app/",
    },
    {
      image: project1,
      title: "Todo App",
      tech: "JavaScript",
      github:
        "https://github.com/arunmvp/mini/tree/6423bb9d41bf0eaab69a716c0614b86e249ac08d/Todo",
      demo: "https://miniprojectsarun.netlify.app/todo/",
    },
    {
      image: project3,
      title: "Movies Api",
      tech: "JavaScript",
      github:
        "https://github.com/arunmvp/mini/tree/6423bb9d41bf0eaab69a716c0614b86e249ac08d/Movie",
      demo: "https://miniprojectsarun.netlify.app/movie/movie",
    },
    {
      image: project2,
      title: "Cart UI",
      tech: "JavaScript",
      github:
        "https://github.com/arunmvp/mini/tree/6423bb9d41bf0eaab69a716c0614b86e249ac08d/Cart",
      demo: "https://miniprojectsarun.netlify.app/cart/cart",
    },
    {
      image: ecom,
      title: "E-Commerce UI",
      tech: "Html Css",
      github: "https://github.com/arunmvp/arun2321.git",
      demo: "https://upbasketthemearun.netlify.app/",
    },
    {
      image: ecom2,
      title: "E-Commerce Site",
      tech: "React",
      github: "https://github.com/arunmvp/arun2321.git",
      demo: "https://arun-react.netlify.app/",
    },
    {
      image: mern,
      title: "E-Commerce - MERN",
      tech: "Fullstack",
      github: "https://github.com/arunmvp/mern-frontend",
      demo: "https://mern-pro.netlify.app/",
    },
      {
      image: ecom33,
      title: "E-Commerce - Django",
      tech: "Fullstack",
      github: "https://github.com/arunmvp/django-frontend.git",
      demo: "https://cake-art-arun.netlify.app/",
    },
    {
      image: cartreact,
      title: "Cart UI (Fetch API, Redux)",
      tech: "React",
      github: "https://github.com/arunmvp/cartui.git",
      demo : "https://cartuisys.netlify.app/"
    }
  ];

  const [activeTab, setActiveTab] = useState("All"); 
  const { back } = useContext(BackgroundContext); 

  const filtered =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.tech === activeTab);

  return (
        
    <section id="projects" className="mini-projects-section" style={{ backgroundColor: !back ? "#0f1722" : "#1a1a1a" }}>
      <section
        className="mini-projects"
        style={{ backgroundColor: !back ? "#0f1722" : "#1a1a1a" }}
      >
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
          {["All", "React", "JavaScript", "Fullstack"].map((tab) => (
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
    </section>
  );
};

export default MiniProjects;
