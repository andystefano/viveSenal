import React from 'react';
import { useEffect, useState } from "react";
import CountDown from "./CountDown.js";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";


function Section({minHeight}) {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      class=""
      style={{
        backgroundImage: "url(images/bg_senal_home.png)",
        backgroundSize: "cover",
        backgroundColor: "black",
        minHeight: `${minHeight}px`, // Use minHeight state here
      }}
    >
      <div class="grid lg:grid-cols-2 sd:grid-cols-1">
        <div class="col-span-1  p-4 ">
          <br />
          <br />
          <br />
          <CountDown />
        </div>
        <div class="col-span-1 p-4">
          <br />
          <br />
          <h1 className="mt-10 pr-4 mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-white font-unbounded lg:text-right sd:text-left">
            Encuentros de
            <br />
            arte.
          </h1>

          <div className="lg:w-8/12 sd:w-full mt-10">
            <p className="text-xl text-white mb-4 font-libre-franklin text-justify">
            También es el nombre de una nueva experiencia que te invita a conocer Santiago y el mundo del arte y la cultura a través de conversaciones cercanas y música experimental. 
            </p>
            <p className="text-xl text-white mb-4 font-libre-franklin text-justify">
              <span className="font-bold">SEÑAL</span> es un proyecto de{" "}
              <span className="font-bold">Fundación Antenna</span>
            </p>
            <button
      className="flex items-center px-6 py-1 bg-black text-white text-2xl font-bold rounded-full border-2 border-pink-500 mt-8 font-unbounded"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {hovered ? <IoTicket  size={15} className="w-6 h-6" /> : <FaLongArrowAltLeft  size={15} className="w-6 h-6" />}
    </button>
          </div>
        </div>
      </div>
      <a
            href="http://google.cl"
            className="flex items-center justify-center text-white font-extrabold text-2xl text-left absolute bottom-0 mb-4 left-0 ml-2"
          >
            SEÑAL es una forma de crear comunidad y de apoyar espacios
            culturales.
          </a>

      <a
            href="http://google.cl"
            className="flex items-center justify-center text-white font-extrabold text-2xl text-right absolute right-0  bottom-0 mb-4 mr-2"
            >
            SEÑAL es presentado por BTG Pactual
          </a>
      
    </section>
  );
}

export default Section;
