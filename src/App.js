import "./App.css";
import Section1 from "./componentes/Section1.js";
import SectionTwo from "./componentes/Section2_2.js";
import SectionThree from "./componentes/Section2_3.js";
import Section3 from "./componentes/Section3.js";
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
      {activeTab === 1 ? (<div></div>) : activeTab === 2 ? (
  <SectionTwo minHeight={minHeight} setActiveTab={setActiveTab} activeTab={activeTab} />
) : (
  <SectionThree minHeight={minHeight} setActiveTab={setActiveTab} activeTab={activeTab} />
)}      <div className="w-full"  style={{
    backgroundColor: '#0cb259' 
  }}>
 
  </div>
      <Section3 minHeight={minHeight} className=" bg-black " />
      {/* eslint-disable jsx-a11y/no-distracting-elements */}
      <marquee className="text-lg  font-unbounded  sd:text-2xl md:text-2xl lg:text-2xl xl:text-2xl  text-[#009d5a] bg-black font-bold mx-0 py-3" scrollamount="12" loop="100" scrolldelay="-1" style={{paddingBottom:'5px'}}>
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.&nbsp;&nbsp;
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.&nbsp;&nbsp;
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.&nbsp;&nbsp;
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.&nbsp;&nbsp;
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.&nbsp;&nbsp;
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.&nbsp;&nbsp;
      DESAFIA LO CONVENCIONAL Y ABRAZA LO EXTRAORDINARIO EN ESTOS ENCUENTROS.
  </marquee>
  {/* eslint-enable jsx-a11y/no-distracting-elements */}
  <div className="block sd:hidden  md:hidden lg:hidden xl:hidden"><Section4Movil minHeight={minHeight} /> </div>
  <div className="hidden sd:block  md:block lg:block xl:block"><Section4 minHeight={minHeight} /> </div>  

  <SectionBlack minHeight={minHeight} />

      <Section5 minHeight={minHeight} />
      <Section6 minHeight={minHeight} />
      <ViveFooter />
    </div>
  );
}

export default App;
