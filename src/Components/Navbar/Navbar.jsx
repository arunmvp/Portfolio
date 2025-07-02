import React from "react";
import "./Navbar.css";
import Homemain from "./Homemain";
import Navsec from "..Navbar/navsec";
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
