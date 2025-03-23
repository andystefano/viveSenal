import React from "react";
import { useState } from "react";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({ minHeight }) {
  const [hovered, setHovered] = useState(false);

  const minHeightN = minHeight - 0;

  return (
    <section
      className="h-auto color-shift sd:min-h-screen md:min-h-screen lg:min-h-screen  xl:min-h-screen"
      style={{
        backgroundImage: "url(images/fondos/1_desk.png)",
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
    >
      <div className="grid grid-cols-1 sd:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 h-auto sd:min-h-screen md:min-h-screen lg:min-h-screen  xl:min-h-screen">
        <div className="col-span-1  p-0 sd:p-4 pt-0 sd:min-h-screen pt-10 md:pt-44 ">
       
        </div>
        <div className="col-span-1 p-4 md:pr-10">
          <h1 className="hidden sd:block md:block lg:block xl:block mt-7 text-4xl sd:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-thin	pr-4 mb-4 sd:mr-14 leading-none sd:text-h1 text-white font-unbounded lg:text-right sd:text-left">
            Encuentros <br />
            de arte.
          </h1>

          <div className="flex items-end justify-between block sd:hidden sd:hidden md:hidden lg:hidden xl:hidden ">
            <h1 className="mt-7 text-4xl sd:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-thin pr-4 mb-4 sd:mr-14 leading-none sd:text-h1 text-white font-unbounded lg:text-right sd:text-left">
              Encuentros <br />
              de arte.
            </h1>

            <img
              class="align-top mr-0  sm:block w-12 mb-4 sd:w-16 md:w-16 lg:w-16 xl:w-16 sd:mt-52 md:mt-52 lg:mt-52 xl:mt-52"
              src="images/2024_blanco.png"
              alt="2024"
            />
          </div>
<div className="w-full grid grid-cols-1 sd:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="w-full lg:w-10/12 sd:w-full mt-2">
            <p className="text-xs sd:text-base md:text-base lg:text-base xl:text-base text-white mb-4 font-libre-franklin text-left">
              Una señal es un llamado, un signo, una forma de transmitir
              información. También es el nombre de una nueva experiencia que te
              invita a conocer Santiago, el mundo del arte y la cultura{" "}
              <strong>
                a través de conversaciones cercanas y música experimental.
              </strong>
            </p>
            <p className="text-xs sd:text-base md:text-base lg:text-base xl:text-base text-white mb-4 font-libre-franklin text-justify">
              <span className="font-bold">SEÑAL</span> es un proyecto de{" "}
              <span className="font-bold">Fundación Antenna.</span>
            </p>
            <a className="flex items-center justify-center mt-5  sd:justify-left sd:mt-1 md:justify-left md:mt-1 lg:justify-left lg:mt-1  xl:justify-left xl:mt-1" href="#tickets">
              <button
                className="z-10 mb-4 flex items-center px-6 py-1 text-white text-base sd:text-2xl md:text-2xl  lg:text-2xl  xl:text-2xl font-normal	 rounded-full border-2 border-pink-500 font-unbounded"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Participa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {hovered ? (
                  <IoTicket size={15} className="w-6 h-6  text-pink-500" />
                ) : (
                  <FaLongArrowAltLeft
                    size={15}
                    className="w-6 h-6  text-pink-500"
                  />
                )}
              </button>
            </a>
          </div>
          <div className="hidden sd:flex  sd:flex  md:flex  lg:flex  xl:flex items-start justify-end">
          <img class="hidden  sm:block absolute  w-8 sd:w-16 md:w-16 lg:w-16 xl:w-16   my-7 mt-0 sd:mt-52 " src="images/2024_blanco.png" alt="2024" />
          </div>
  </div>

          
        </div>
        <div className="col-span-1  flex items-center">
          <br />
          <a
            href="https://www.viveseñal.cl" alt=""
            className="  flex items-center justify-start  text-white  font-unbounded font-extralight  text-3xl text-right mb-7 sd:mb-4 md:mb-4 lg:mb-4 xl:mb-4 ml-7">
            <div className=" grid grid-cols-[auto,auto] gap-4">
              <div className="  ">
                <img className="w-8  pl-0 sd:w-16 sd:pl-2 md:w-16 md:pl-2 lg:w-16 lg:pl-2 xl:w-16 xl:pl-2" src="/images/spiral.png" alt="" />
              </div>
              <div className="text-xs text-left sd:text-2xl md:text-2xl lg:text-2xl xl:text-2xl flex items-center justify-center mr-7	">
                SEÑAL es una forma de crear comunidad{" "}
                <br className="hidden sm:block" />y de apoyar espacios
                culturales.
              </div>
            </div>
          </a>
        </div>
        <div className="hidden sd:block md:block lg:block xl:block col-span-1  flex items-end  sd:justify-end md:justify-end lg:justify-end xl:justify-end">
          <a
            href="https://cervezaloa.cl/?utm_source=Antenna&utm_medium=Antenna&utm_campaign=ViveSenal"
            className=" flex items-end mt-10 pt-10 justify-start sd:justify-end md:justify-end lg:justify-end xl:justify-end   text-white  font-unbounded font-extralight  text-2xl text-left sd:text-right sd:text-right sd:text-right md:text-right lg:text-right  xl:text-right mb-1 mr-3"
          >
            <div className="grid lg:grid-cols-2 sd:grid-cols-1 pr-2">
              <div className="col-span-1 text-base flex items-center justify-center	">
                Colaboran:
              </div>
              <div className="col-span-1  ">
                <img className="w-[450px] pr-2" src="/images/LOA_white.png" alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>

 
    </section>
  );
}

export default Section;
