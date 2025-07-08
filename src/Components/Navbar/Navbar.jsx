import React from "react";
import "./Navbar.css";
import Homemain from "./Homemain";
import Navsec from "./Navsec/Navsec"
const Navbar = () => {
  return (
    <>
      <Navsec/>
      <div className="nav">
        <Homemain />
      </div>
    </>
  );
};

export default Navbar;
