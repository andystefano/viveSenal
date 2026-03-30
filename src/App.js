import "./App.css";
import Section1 from "./componentes/Section1.js";
import SectionTwo from "./componentes/Section2_2.js";
import SectionThree from "./componentes/Section2_3.js";
import Section4 from "./componentes/Section4.js";
import Section4Movil from "./componentes/Section4Movil.js";
import Section5 from "./componentes/Section5.js";
import Section6 from "./componentes/Section6.js";
import SectionBlack from "./componentes/SectionBlack.js";
import ViveFooter from "./componentes/ViveFooter.js";


import React, { useState, useEffect } from "react";


function App() {
  const [minHeight, setMinHeight] = useState(window.innerHeight);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setMinHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
      var url = window.location.href;
      if (url.includes("#")) {
          var fragmento = url.split("#")[1];
          const targetElement = document.getElementById(fragmento);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      }  
  }, []); // El array de dependencias vacío [] indica que este efecto se ejecuta solo una vez al montar el componente


  return (
    <div className="App"       style={{
      backgroundColor: "black"
    }} >
   
      <Section1 minHeight={minHeight} />
     <div className="w-full"  style={{
    backgroundColor: '#0cb259' 
  }}>
 
  </div>
      {/* eslint-disable jsx-a11y/no-distracting-elements */}

  {/* eslint-enable jsx-a11y/no-distracting-elements */}
 

      <Section5 minHeight={minHeight} />
      <Section4 minHeight={minHeight} />
      <Section4Movil minHeight={minHeight} />

      <Section6 minHeight={minHeight} />
      <ViveFooter />
    </div>
  );
}

export default App;
