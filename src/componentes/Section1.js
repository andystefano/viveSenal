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
      <div className="h-auto sd:min-h-screen md:min-h-screen lg:min-h-screen  xl:min-h-screen">
        <div className="flex flex-col space-y-4 p-4 max-w-[50%] mx-auto">
          <div className="mt-[15%]  text-white rounded-lg">
            <div className="w-full">
              <img
                src="images/2025_blanco.png"
                className="max-w-full max-w-[15%] md:max-w-[15%] lg:max-w-[15%] sm:max-w-[15%] "
                alt="Vive Señal"
              />
            </div>
          </div>
          <div className=" text-white rounded-lg">
            <div className="w-full ">
              <img
                src="images/logoContador.gif"
                className="max-w-full max-w-[95%] md:max-w-[95%] lg:max-w-[95%] sm:max-w-[95%]  mx-auto"
                alt="Vive Señal"
              />
            </div>
          </div>
          <div className=" text-white rounded-lg">
            <h1 className="hidden sd:block md:block lg:block xl:block  text-4xl sd:text-6xl md:text-xl lg:text-xl xl:text-xl font-thin	pr-4 sd:mr-14 leading-none sd:text-h1 text-white font-unbounded lg:text-right sd:text-left">
              Encuentros de
              <br />
              arte y música
            </h1>
          </div>
          <div className="text-white p-4 rounded-lg">
            <div className="w-full lg:w-10/12 sd:w-full mt-2">
              <p className="text-xs sd:text-base md:text-base lg:text-base xl:text-base text-white mb-4 font-libre-franklin text-left">
                Una señal es un llamado, un signo, una forma de transmitir
                información. También es el nombre de una nueva experiencia que
                te invita a conocer Santiago, el mundo del arte y la cultura
                <strong>
                  a través de conversaciones cercanas y música experimental.
                </strong>
              </p>
              <p className="text-xs sd:text-base md:text-base lg:text-base xl:text-base text-white mb-4 font-libre-franklin text-justify">
                <span className="font-bold">SEÑAL</span> es un proyecto de
                <span className="font-bold">Fundación Antenna.</span>
              </p>
              <a
                className="flex items-center justify-center mt-5  sd:justify-left sd:mt-1 md:justify-left md:mt-1 lg:justify-left lg:mt-1  xl:justify-left xl:mt-1"
                href="#tickets"
              >
                <button
                  className="z-10 mb-4 flex items-center px-6 py-1 text-white text-base sd:text-2xl md:text-2xl  lg:text-2xl  xl:text-2xl font-normal	 rounded-full border-2 border-pink-500 font-unbounded"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
          </div>
        </div>

        <div className="w-full lg:w-10/12 sd:w-full mt-2 mx-auto">
          <img src="/images/logos/home_desk.png" className="w-full" />
        </div>

        <div></div>
      </div>
    </section>
  );
}

export default Section;
