import React from "react";
import { useState } from "react";
import CountDown from "./CountDown.js";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({ minHeight }) {

  const [hovered, setHovered] = useState(false);

  return (
    <section
      className=""
      style={{
        backgroundImage: "url(images/bg_senal_home.png)",
        backgroundSize: "cover",
        backgroundColor: "black",
        minHeight: `${minHeight}px`, // Use minHeight state here
      }}
    >
      <div className="grid lg:grid-cols-2 sd:grid-cols-1">
        <div className="col-span-1  p-0 sd:p-4 pt-0 sd:min-h-screen pt-10 md:pt-44 ">
          <CountDown />
        </div>
        <div className="col-span-1 p-4 md:pr-10">
          <h1 className="text-6xl mt-10 font-thin	pr-4 mb-4 sd:mr-14 leading-none sd:text-h1 text-white font-unbounded lg:text-right sd:text-left">
            Encuentros <br />
            de arte.
          </h1>

          <div className="lg:w-7/12 sd:w-full mt-2">
            <p className="text-xl text-white mb-4 font-libre-franklin text-justify">
              Una señal es un llamado, un signo, una forma de transmitir
              información. También es el nombre de una nueva experiencia que te
              invita a conocer Santiago y el mundo del arte y la cultura{" "}
              <strong>
                a través de conversaciones cercanas y música experimental.
              </strong>
            </p>
            <p className="text-xl text-white mb-4 font-libre-franklin text-justify">
              <span className="font-bold">SEÑAL</span> es un proyecto de{" "}
              <span className="font-bold">Fundación Antenna</span>
            </p>
            <button
              className="z-10 flex items-center px-6 py-1 bg-black text-white text-2xl font-normal	 rounded-full border-2 border-pink-500 mt-8 font-unbounded"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {hovered ? (
                <IoTicket size={15} className="w-6 h-6" />
              ) : (
                <FaLongArrowAltLeft size={15} className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      
      <a
        href="#"
        className="hidden sm:block  flex items-center justify-center  text-white  font-unbounded font-extralight  text-3xl text-right md:absolute md:left-0  md:bottom-0 mb-4 ml-7"
      >
      <div className=" grid grid-cols-[auto,auto] gap-4">
        <div className="hidden sd:block ">
          <img className="w-16 pl-2" src="/images/spiral.png" alt="" />
        </div>
        <div className=" text-2xl flex items-center justify-center	">
        SEÑAL es una forma de crear comunidad <br className="hidden sm:block" />y de apoyar espacios
        culturales.
        </div>        
      </div>
      </a>  


      <a
        href="http://google.cl"
        className="hidden sm:block  flex items-center justify-center  text-white  font-unbounded font-extralight  text-2xl text-right md:absolute md:right-0  md:bottom-0 mb-4 mr-7"
      >
      <div className=" hidden sm:block  grid lg:grid-cols-2 sd:grid-cols-1 pr-2">
        <div className="col-span-1 text-base flex items-center justify-center	">
          Colabora:
        </div>
        <div className="col-span-1  ">
          <img className="w-28 pr-2" src="/images/LOA_white.png" alt="" />
        </div>
      </div>
      </a>


          <img className="hidden sm:block absolute right-0 bottom-1/4 w-20 mx-7 my-7 mt-52" src="images/2024_blanco.png" alt="2024" />
         
    </section>
  );
}

export default Section;
