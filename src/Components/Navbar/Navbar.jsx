import React, { useState,useEffect,useRef,useContext } from "react";
import "./Navbar.css";
import Homemain from "./Homemain";
import Navsec from "./Navsec/Navsec";
import background1 from "../../assets/portback.jpg";
import background2 from "../../assets/background2.jpg";
import BackgroundContext from "../../Context/BackgroundContext";

const Navbar = () => {
  const { back, setBack } = useContext(BackgroundContext);
  const [open, setOpen] = useState(false);

  const popupRef = useRef(null);
  const iconRef = useRef(null);

  const background = () => setBack(true);
  const backgroundT = () => setBack(false);

  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };



    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section id="home">
      <Navsec />
      <div
        className="nav"
        style={{
          backgroundImage: `url(${back ? background2 : background1})`,
        }}
      >
        <div className="theme-toggle">
          <div className="theme-icon" onClick={() => setOpen(!open)} ref={iconRef}>
            <div className="settings">⚙️</div>
          </div>
        </div>

        <div className={`theme-popup ${open ? "active" : ""}`} ref={popupRef}>
          <p>Select Theme:</p>
          <div className="theme-options">
            <div
              className="theme-box light"
              onClick={backgroundT}
              style={{
                border: `2px solid ${back ? "#192639ff" : "rgb(202, 201, 201)"}`,
              }}
            ></div>
            <div
              className="theme-box dark"
              onClick={background}
              style={{
                border: `2px solid ${back ? "white" : "transparent"}`,
              }}
            ></div>
          </div>
        </div>

        <Homemain />
      </div>
    </section>
  );
};

export default Navbar;