import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Education/Education.css";
import { useContext } from "react";
import BackgroundContext from "../../Context/BackgroundContext";

const Education = () => {
  const [activeTab, setActiveTab] = useState("bio");

  const educationList = [
    {
      degree: "B.Com",
      institution: "Ayya Nadar Janaki Ammal College",
      year: "2019 – 2022",
      place: "Sivakasi, Tamil Nadu",
    },
    {
      degree: "HSC",
      institution: "SHNV Higher Secondary School",
      year: "2017 – 2019",
      place: "Sivakasi, Tamil Nadu",
    },
  ];

  const bioData = [
    { label: "Name", value: "Arun pandian P" },
    { label: "Birthday", value: "12 Feb, 2002" },
    { label: "Age", value: "23" },
    { label: "Address", value: "Sivakasi, Tamil Nadu" },
    { label: "Email", value: "mvparun3@gmail.com.com" },
    { label: "Mobile No", value: "(+91) 6385843484" },
    // { label: "Skype", value: "arun.dev" },
    // { label: "Freelance", value: "Available" },
  ];

  const { back } = useContext(BackgroundContext);

  return (
    <section
      className="education-section"
      id="education"
      style={{ backgroundColor: !back ? "#0f1722" : "#1a1a1a" }}
    >
      <h2 className="section-title">About Me</h2>

      <div className="edu-tabs">
        <button
          className={activeTab === "bio" ? "tab active" : "tab"}
          onClick={() => setActiveTab("bio")}
        >
          Biography
        </button>
        <button
          className={activeTab === "education" ? "tab active" : "tab"}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "bio" && (
          <motion.div
            className="bio-box"
            style={{ backgroundColor: !back ? "#0d1520ec" : "#1e1e1eff" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {bioData.map((item, index) => (
              <div className="bio-row" key={index}>
                <div className="bio-label">{item.label}</div>
                <div className="bio-value">{item.value}</div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "education" && (
          <motion.div
            className="education-cards"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {educationList.map((edu, index) => (
              <div className="education-card" style={{backgroundColor : !back ? "#0d1520ec" : "#1e1e1eff" }} key={index}>
                <div className="edu-title">{edu.degree}</div>
                <div className="edu-inst">{edu.institution}</div>
                <div className="edu-info">
                  <span>{edu.year}</span>
                  <span>{edu.place}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;
