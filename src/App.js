import "./App.css";
import ViveHeader from "./componentes/ViveHeader.js";
import Section1 from "./componentes/Section1.js";
import Section2 from "./componentes/Section2.js";
import Section2_2 from "./componentes/Section2_2.js";
import Section2_3 from "./componentes/Section2_3.js";
import Section3 from "./componentes/Section3.js";
import Section4 from "./componentes/Section4.js";
import Section5 from "./componentes/Section5.js";
import Section6 from "./componentes/Section6.js";
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

  return (
    <div className="App"       style={{
      backgroundImage: "url(images/bg_senal_home.png)",
      backgroundSize: "cover",
      backgroundColor: "black",
      minHeight: `${minHeight}px`, // Use minHeight state here
    }} >
      <ViveHeader />
      <Section1 minHeight={minHeight} />
      {activeTab === 1 ? (
  <Section2 minHeight={minHeight} setActiveTab={setActiveTab} activeTab={activeTab} />
) : activeTab === 2 ? (
  <Section2_2 minHeight={minHeight} setActiveTab={setActiveTab} activeTab={activeTab} />
) : (
  <Section2_3 minHeight={minHeight} setActiveTab={setActiveTab} activeTab={activeTab} />
)}      <div className="w-full"  style={{
    backgroundColor: '#0cb259' 
  }}>
  <marquee className="text-xs sd:text-2xl md:text-2xl lg:text-2xl xl:text-2xl  text-white font-bold mx-0 my-1" scrollamount="12" loop="100" vspace="1%" hspace="1%" scrolldelay="-1">
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.
  </marquee>
  </div>
      <Section3 minHeight={minHeight} />
      <Section4 minHeight={minHeight} />
      <Section5 minHeight={minHeight} />
      <Section6 minHeight={minHeight} />
      <ViveFooter />
    </div>
  );
}

export default App;
