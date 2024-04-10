import { MdTripOrigin } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({ minHeight }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
    id="QueTeEspera"
      className="border-t border-black relative overflow-hidden pr-4"
      style={{
        position: "relative",
        backgroundImage: "url('./images/t4.png')",
        backgroundSize: "cover",
        minHeight: `${minHeight}px`,
      }}
    >
         

      <div>
        <div className="mr-auto place-self-center lg:col-span-7 text-white text-left">
          <h1
            className="
            
            ml-4 mr-4 sd:ml-0 sd:mr-0 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0  xl:ml-0 xl:mr-0 

            mb-4 text-4xl sd:text-4xl md:text-4xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8"
            style={{
              color: "white",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            ¿QUÉ TE ESPERA EN ESTA <br className="hidden lg:block" /> ÉPICA
            EXPERIENCIA?
          </h1>

          <a href="#tickets"><button
              className="z-10 py-1 mt-6 ml-5 md:py-1 md:mt-8 sm:absolute sm:top-0 sm:right-14 flex items-center px-6  text-white text-base sd:text-2xl sm:text-2xl lg:text-2xl xl:text-2xl font-normal	 rounded-full border-2 border-pink-500 font-unbounded"
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
      </div>

      <div className="sd:flex md:flex lg:flex md:mt-10 lg:mt-10 xl:mt-10">
        <div className="w-full lg:w-5/12 flex items-center justify-center sd:hidden ">

        <div
              className="text-white font-libre-franklin max-w-300 rounded-full  ml-6  mt-1.5  "
              style={{
                maxWidth: "338px",
                textAlign: "center",
              }}
            >
        </div>

        </div>
        <div className="w-full  lg:w-7/12 sd:w-full">
          <div className="w-full">
            <div className="flex items-center ml-1">
              <span className="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 className="text-white text-2xl font-unbounded text-left mt-4">
                  Espacios para
                  <br /> conversar:
                </h1>
              </div>
            </div>
            <div className="flex sd:flex md:flex lg:flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p className="mt-3 font-libre-franklin text-base text-white  text-left  w-10/12 sd:w-8/12  md:w-8/12  lg:w-8/12  xl:w-8/12">
                  Lo más interesante del arte son las conversaciones que éste
                  inspira,<br className="hidden sd:block md:block lg:block xl:block"/> en SEÑAL conocerás a los creadores detrás de las
                  obras.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}>
                <p className="font-libre-franklin text-base text-white  text-left w-10/12">
                  {" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center ml-1">
              <span className="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 className="text-white text-2xl font-unbounded text-left mt-4">
                  Arte 
                  <br /> Alucinante:
                </h1>
              </div>
            </div>
            <div className="flex sd:flex md:flex lg:flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p className="mt-3 font-libre-franklin text-base text-white  text-left   w-10/12 sd:w-8/12  md:w-8/12  lg:w-8/12  xl:w-8/12 ">
                Dejate envolver por las obras más vanguardistas y entretenidas que hay en Santiago.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}>
                <p className="font-libre-franklin text-base text-white  text-left w-10/12">
                  {" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex sd:flex md:flex lg:flex items-center ml-1">
              <span
                className="text-transparent opacity-100 mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} className="" />
              </span>
              <div className="flex items-center justify-left ">
              <img src="images/LOA_white.png" className="h-32 sd:h-48 md:h-48 lg:h-48 xl:h-48 mt-12" alt="" />
            </div>
            </div>

            <div className="flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}>
                <p className="font-libre-franklin text-base text-white  text-left w-10/12">
                  {" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center ml-1">
              <span className="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 className="text-white text-2xl font-unbounded text-left mt-4">
                Disfruta de
                  <br /> cerveza LOA:
                </h1>
              </div>
            </div>
            <div className="flex sd:flex md:flex lg:flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p className="mt-3 font-libre-franklin text-base text-white  text-left  w-10/12 sd:w-8/12  md:w-8/12  lg:w-8/12  xl:w-8/12">
                Para que puedas compartir con los
artistas y demás participantes.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center ml-1">
              <span
                className="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={20} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}>
                <p className="font-libre-franklin text-base text-white  text-left w-10/12">
                  {" "}
                </p>
              </div>
            </div>
          </div>                              
        </div>
      </div>

   

      <img className="hidden sd:block md:block lg:block xl:block absolute right-0 bottom-1/4" src="images/presentado.png" alt="" />
      <img className="w-20 block sd:hidden md:hidden lg:hidden xl:hidden  absolute right-0 bottom-1/4" src="images/presentado_movil.png" alt="" />
      
    </section>
  );
}

export default Section;
