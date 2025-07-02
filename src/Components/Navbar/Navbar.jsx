import React from "react";
import "./Navbar.css";
import Navsec from "./navsec";
import Homemain from "./Homemain";
const Navbar = () => {
  return (
    <>
      <Navsec />
      <div className="nav">
        <Homemain />
      </div>
    </>
  );
};

export default Navbar;
