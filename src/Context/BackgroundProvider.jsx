// src/context/BackgroundProvider.js
import React, { useState } from "react";
import BackgroundContext from "./BackgroundContext";

const BackgroundProvider = ({ children }) => {
  const [back, setBack] = useState(false);

  return (
    <BackgroundContext.Provider value={{ back, setBack }}> 
      {children}
    </BackgroundContext.Provider> 
  );
};

export default BackgroundProvider;
