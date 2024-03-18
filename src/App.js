import "./App.css";
import ViveHeader from "./componentes/ViveHeader.js";
import Section1 from "./componentes/Section1.js";
import Section2 from "./componentes/Section2.js";
import Section3 from "./componentes/Section3.js";
import Section4 from "./componentes/Section4.js";
import Section5 from "./componentes/Section5.js";
import Section6 from "./componentes/Section6.js";
import ViveFooter from "./componentes/ViveFooter.js";


import React, { useState, useEffect } from "react";


function App() {
  const [minHeight, setMinHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setMinHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <ViveHeader />
      <Section1 minHeight={minHeight} />
      <Section2 minHeight={minHeight} />
      <Section3 minHeight={minHeight} />
      <Section4 minHeight={minHeight} />
      <Section5 minHeight={minHeight} />
      <Section6 minHeight={minHeight} />
      <ViveFooter />
    </div>
  );
}

export default App;
