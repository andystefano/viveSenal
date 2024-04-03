import React from "react";
import { useState } from "react";
import { MdTripOrigin, MdWidthFull } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function Section({ minHeight, setActiveTab, activeTab }) {
  const [hovered, setHovered] = useState(false);
  const handleBackClick = () => {
    setActiveTab(1); // Cambiar activeTab a 2 cuando se haga clic en el botón
  };
  const handleNextClick = () => {
    setActiveTab(3); // Cambiar activeTab a 2 cuando se haga clic en el botón
  };

  return (
    <>
      <section
        className="hidden sd:block md:block lg:block xl:block border-t border-black relative overflow-hidden pb-48"
        style={{
          minHeight: `330px`,
          backgroundColor: "#242424",
        }}
      >
        <img src="images/bgtab2.png" style={{ width: "100%" }} alt="" />

        <div className="flex flex-col w-full mx-34 my-34">
          <div className="grid grid-cols-2 gap-4 pl-32 pr-32">
            <div className=" col-span-1 p-4">
              <div className="flex items-start">
                <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
                </span>
                <div className="text-white text-xl  font-unbounded  ml-2 font-normal text-left">
                  Las sesiones <strong>SEÑAL</strong> están pensadas como un
                  programa para conocer espacios fundamentales para la cultura
                  en Santiago.
                </div>
              </div>
            </div>
            <div className=" col-span-1 p-4 flex justify-between">
              <img src="images/btgLogo.png" alt="" className="h-14" />
              <a href="#tickets"><button
          className=" mb-16 flex items-center px-6 py-1 text-white text-2xl font-bold rounded-full border-2 border-pink-500  font-unbounded   "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {hovered ? (
            <IoTicket size={15} className="w-6 h-6  text-pink-500" />
          ) : (
            <FaLongArrowAltLeft size={15} className="w-6 h-6  text-pink-500" />
          )}
        </button></a>
            </div>
            <div className=" col-span-1 p-4">
              <div className="flex items-start">
                <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
                </span>
                <div className="text-white text-xl  font-unbounded  ml-2 font-normal text-left">
                  Con tu aporte <strong>SEÑAL</strong> estás apoyando a
                  Fundación Antenna en el desarrollo de nuevos proyectos que
                  benefician a artistas y espacios culturales.
                </div>
              </div>
            </div>
            <div className=" col-span-1 p-4">
              <p className="text-white text-xl  font-unbounded  ml-10 font-normal ">
                SEÑAL es presentado por BTG Pactual, organización que ha
                mantenido durante décadas un fuerte compromiso con diversas
                iniciativas culturales y artísticas, así como con la promoción
                del debate y reflexión en torno a ideas como una forma de
                contribuir a nuestra comunidad.
              </p>
            </div>
          </div>
        </div>

        

        <button
          onClick={handleBackClick}
          className=" absolute bottom-14 left-8 flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white font-unbounded py-3 hover:border-orange-200  hover:text-orange-200	"
        >
          <GrLinkPrevious className="w-8 h-8" />
        </button>
      </section>
      <section
        className="block sd:hidden  md:hidden  lg:hidden  xl:hidden border-t border-black relative overflow-hidden pb-24"
        style={{
          minHeight: `580px`,
          backgroundColor: "#242424",
        }}
      >
        <img src="images/bgtab2_movil1.png" style={{ width: "100%" }} alt="" />

        <div className="grid grid-cols-1 gap-4  pl-7">
          <div className=" col-span-1 p-4">
            <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                <MdTripOrigin size={25} />
              </span>
              <div className="text-white text-xl  font-unbounded  ml-2 font-normal text-left">
                Las sesiones <strong>SEÑAL</strong> están pensadas como un
                programa para conocer espacios fundamentales para la cultura en
                Santiago.
              </div>
            </div>
          </div>
          <div className=" col-span-1 p-4">
            <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                <MdTripOrigin size={25} />
              </span>
              <div className="text-white text-xl  font-unbounded  ml-2 font-normal text-left">
                Las sesiones <strong>SEÑAL</strong> están pensadas como un
                programa para conocer espacios fundamentales para la cultura en
                Santiago.
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleBackClick}
          className=" absolute bottom-7 left-8 flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white font-unbounded py-3 hover:border-orange-200  hover:text-orange-200	"
        >
          <GrLinkPrevious className="w-8 h-8" />
        </button>

        <button
          onClick={handleNextClick}
          className="absolute bottom-7 right-8 flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white font-unbounded py-3 hover:border-orange-200  hover:text-orange-200	"
        >
          <GrLinkNext className="w-8 h-8" />
        </button>
      </section>
    </>
  );
}

export default Section;
