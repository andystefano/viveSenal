import React from "react";
import { useState } from "react";
import { MdTripOrigin } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function Section({ minHeight, setActiveTab, activeTab }) {
  const [hovered, setHovered] = useState(false);

  const handleNextClick = () => {
    setActiveTab(2); // Cambiar activeTab a 2 cuando se haga clic en el botón
  };

  return (
    <section
      className="border-t border-black relative overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: "url(images/t2bg.png)",
        minHeight: `${minHeight}px`,
        backgroundColor: "#1a1a19",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right top",
      }}
    >
      <div className="grid lg:grid-cols-2 sd:grid-cols-1">
        <div className="col-span-1  p-4 ">
          <h1
            className="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-white text-left font-unbounded pt-8"
            style={{
              paddingTop: "4rem",
              paddingLeft: "5rem",
              color: "#ff799a",
            }}
          >
            ¿Cómo ser parte de señal?
          </h1>

          <div className="hidden lg:block ">
            <div
              className="flex items-center sd:hidden"
              style={{
                paddingLeft: "12.9rem",
                paddingTop: "4.9rem",
                paddingRight: "1.2rem",
              }}
            >
              <span
                className="text-pink-400  mt-1.5"
                style={{ paddingRight: "1.2rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p
                  className="font-unbounded font-extralight	"
                  style={{
                    color: "white",
                    fontSize: "1.3rem",
                  }}
                >
                  <strong>SEÑAL</strong> es un evento que se realiza una vez al mes en distintos espacios de arte y creación en Santiago de Chile. Son 10 encuentros que se realizan a lo largo del año, con la curatoría y mediación de Fundación Antenna. 
                </p>
              </div>
            </div>
            <div
              className="flex items-center  sd:hidden"
              style={{
                paddingLeft: "12.9rem",
                paddingTop: "4.9rem",
                paddingRight: "1.2rem",
              }}
            >
              <span
                className="text-pink-400  mt-1.5"
                style={{ paddingRight: "1.2rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p
                  className="font-unbounded font-extralight"
                  style={{
                    color: "white",
                    fontSize: "1.3rem",
                  }}
                >
Las sesiones SEÑAL están pensadas como un programa para conocer espacios fundamentales para la cultura de Santiago. 
                </p>

                <p
                  className="font-unbounded font-extralight"
                  style={{
                    color: "white",
                    fontSize: "1.3rem",
                    lineHeight: "1.5rem",
                  }}
                >
Para sumarte a SEÑAL, te recomendamos inscribirte al programa completo, que tiene un 17% de descuento, para que puedas conectar con esta comunidad y conocer todos los espacios y artistas que hacen parte de la programación. 
                </p>                
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1  p-4 ">
          <div className="grid grid-cols-2">
            <div className="p-4">
              <div
                className="text-white font-libre-franklin max-w-300 rounded-full border-pink-400  mt-1.5  "
                style={{
                  maxWidth: "338px",
                  textAlign: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                  <img src="images/Cloud2.png" />
              </div>
            </div>
            <div className="p-4">
              <div
                className="text-pink-400 font-libre-franklin max-w-300 rounded-full border-pink-400  mt-1.5  "
                style={{
                  maxWidth: "338px",
                  textAlign: "center",
                }}
              >
                  <img src="images/wavesCloud1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-1/2">
        <button
          className="flex items-center px-6 py-1 text-white text-2xl font-bold rounded-full border-2 border-pink-500  font-unbounded mb-14  xl:mt-10 "
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

      

      <button
        onClick={handleNextClick}
        className="absolute bottom-14 right-8  flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white  font-unbounded py-3 hover:border-orange-200  hover:text-orange-200">
        <GrLinkNext className="w-8 h-8" />
      </button>

    </section>
  );
}

export default Section;
