import React from "react";
import "./Navbar.css";
import Homemain from "./Homemain";
import Navsec from "./Navsec/Navsec"
const Navbar = () => {
  return (
    <section id="home">
      <Navsec/>
      <div className="nav"> 
        <Homemain /> 
      </div>
    </section>
  );
};

export default Navbar;
