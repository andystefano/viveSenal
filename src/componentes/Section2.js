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

  const screenWidth = window.innerWidth;

  console.log(screenWidth);

  if (screenWidth < 640) {
    return (
      <section
        className="p-7"
        style={{
          backgroundImage: "url(images/bgMovil2.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1a1a1a"
        }}
      >
        <h1 style={{
          fontSize:'2.10rem',
          lineHeight:'2.4rem'
          }} class="bock sd:hidden sd:hidden md:hidden lg:hidden xl:hidden mb-4 text-green-500 sd:text-pink-400 md:text-pink-400 lg:text-pink-400  xl:text-pink-400  text-4xl leading-none md:text-5xl xl:text-6xl text-pink-500  font-unbounded pt-8">
          ¿Cómo ser parte de SEÑAL?
        </h1>
        <div className="w-full flex justify-left items-end">
          <a href="#tickets">
            <button
              className="z-10 flex items-center px-6 py-1 text-white text-xs font-normal	 rounded-full border-2 border-white font-unbounded"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Tickets &nbsp;&nbsp;
              {hovered ? (
                <IoTicket size={10} className="w-6 h-6 text-white" />
              ) : (
                <FaLongArrowAltLeft size={10} className="w-6 h-6 text-white" />
              )}
            </button>
          </a>
        </div>
        <br />

        <p
          className="font-unbounded font-bold"
          style={{
            color: "white",
            marginTop:"19rem"
          }}
        >
Si tienes entre 25 y 40 años te <br/> invitamos a ser parte de SEÑAL. 
        </p>

        <br />
 

<div className="grid grid-cols-1 gap-4 mx-1 my-1 mt-0">
          <div className="flex items-start">
              <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                  <MdTripOrigin />
              </span>
              <div className="text-white  font-unbounded  ml-2 font-extralight text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
              <strong>SEÑAL</strong> es un evento que se realiza una vez al mes en distintos espacios de arte y creación en Santiago de Chile. Son <strong>10 encuentros</strong> que se realizan a lo largo del año, con la curatoría y mediación de Fundación Antenna. 
              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                  <MdTripOrigin  />
              </span>
              <div className="text-white  font-unbounded  ml-2 font-extralight text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
              Las sesiones <strong>SEÑAL</strong> están pensadas como un programa para conocer espacios fundamentales para la cultura de Santiago. 
              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                  <MdTripOrigin />
              </span>
              <div className="text-white  font-unbounded  ml-2 font-extralight text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
              Para sumarte a <strong>SEÑAL</strong>, te recomendamos inscribirte al programa completo, que tiene un 17% de descuento, para que puedas conectar con esta comunidad y conocer todos los espacios y artistas que hacen parte de la programación. 
              </div>
          </div>
          <div className="flex items-start">
              <span className="">
                  <img src="/images/btlLogoTop.png" className="w-20 h-auto" /> 
              </span>
              <div className="text-white  font-unbounded  ml-2 font-extralight text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
              </div>
          </div>
          <div className="flex items-start">
              <span className="opacity-0 material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                  <MdTripOrigin className="" />
              </span>
              <div className="text-white  font-libre-franklin  ml-2 font-extralight text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
              SEÑAL es presentado por BTG Pactual, organización que ha mantenido durante décadas un fuerte compromiso con diversas iniciativas culturales y artísticas, así como con la promoción del debate y reflexión en torno a ideas como una forma de contribuir a nuestra comunidad.
              </div>
          </div>  

          <div className="flex items-start">
              <span className="opacity-0 material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                  <MdTripOrigin className="" />
              </span>
              <div className="w-12/12 text-right text-pink-500  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
              No es necesario saber de arte, solo ganas de vivir una experiencia transformadora.
              </div>
          </div>                    
      </div>

      </section>
    );
  } else {
    return (
      <section
        className="bg_t2_movil_back"
        style={{ minHeight: "330px" }}
      >
        <div
                style={{ minHeight: "330px" }}
                className="border-t border-black relative overflow-hidden p-4 sd:p-14 md:p-14 lg:p-14 xl:p-14  h-auto sd:h-full sd:h-full md:h-full lg:h-full bg_t2_movil"
                >

        <h1 class="bock sd:hidden sd:hidden md:hidden lg:hidden xl:hidden mb-4 text-green-500 sd:text-pink-400 md:text-pink-400 lg:text-pink-400  xl:text-pink-400  text-4xl leading-none md:text-5xl xl:text-6xl text-white  font-unbounded pt-8">
          ¿Cómo ser parte de señal?
        </h1>

        <div
          className="grid lg:grid-cols-2 sd:grid-cols-1"
          style={{ minHeight: "330px" }}
        >
          <div className="col-span-1 hidden sd:block md:block lg:block xl:block">
            <div className="w-full flex items-center">
              <h1
                className="mb-4 text-green-500 sd:text-pink-400 md:text-pink-400 lg:text-pink-400  xl:text-pink-400  text-4xl md:text-5xl xl:text-6xl text-white  font-unbounded pt-8"
                style={{lineHeight:'normal'}}
              >
                ¿Cómo ser parte <br/>de SEÑAL?
              </h1>
            </div>

            <div className="hidden lg:block ">
              <div
                className="flex items-start sd:hidden"
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
                    <strong>SEÑAL</strong> es un evento que se realiza una vez al
                    mes en distintos espacios de arte y creación en Santiago de
                    Chile. <strong>Son 10 encuentros</strong> que se realizan a
                    lo largo del año, con la curatoría y mediación de Fundación
                    Antenna.
                  </p>
                </div>
              </div>
              <div
                className="flex items-start  sd:hidden"
                style={{
                  paddingLeft: "12.9rem",
                  paddingTop: "2.0rem",
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
                    Las sesiones <strong>SEÑAL</strong> están pensadas como un
                    programa para conocer espacios fundamentales para la cultura
                    de Santiago.
                  </p>

                  <div className="w-full flex justify-end items-end">
                    <a href="#tickets" className="mt-5">
                      <button
                        className="z-10 flex items-center px-6 py-1 text-white text-xl font-normal	 rounded-full border-2 border-pink-500 font-unbounded"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                        Tickets &nbsp;&nbsp;
                        {hovered ? (
                          <IoTicket
                            size={10}
                            className="w-6 h-6 text-pink-500"
                          />
                        ) : (
                          <FaLongArrowAltLeft
                            size={10}
                            className="w-6 h-6 text-pink-500"
                          />
                        )}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1   ">
            <div className="flex">
              <div className="w-auto block sd:hidden md:hidden lg:hidden xl:hidden">
                <a href="#tickets">
                  <button
                    className="z-10 flex items-center px-6 py-1 text-white text-xl font-normal rounded-full border-2 border-white font-unbounded"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    Tickets&nbsp;&nbsp;&nbsp;
                    {hovered ? (
                      <IoTicket className="w-6 h-6  text-white" />
                    ) : (
                      <FaLongArrowAltLeft className="w-6 h-6 text-white" />
                    )}
                  </button>
                </a>
              </div>
              <div className="w-7/12 sd:w-full md:w-full lg:w-full xl:w-full  grid sd:mt-12 md:mt-12 lg:mt-12 xl:mt-12  grid-cols-1 sd:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="">
                  <div
                    className="text-white font-libre-franklin max-w-300 rounded-full border-pink-400  mt-1.5  "
                    style={{
                      maxWidth: "338px",
                      textAlign: "center",
                    }}
                  >
                    <img src="images/wavesCloud1.png" />
                  </div>
                </div>
                <div className="p-4 hidden  sd:block ssmd:block md:block lg:block xl:block">
                  <div
                    className="text-pink-400 font-libre-franklin max-w-300 rounded-full border-pink-400  mt-1.5  "
                    style={{
                      maxWidth: "338px",
                      textAlign: "center",
                    }}
                  >
                    <img src="images/Cloud2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2"></div>

        <img
          src="images/CloudT2Movil.png"
          style={{
            marginTop: "50%",
          }}
          alt=""
          className="relative  flex items-center w-1/2 block sd:hidden md:hidden lg:hidden xl:hidden "
        />

        <button
          onClick={handleNextClick}
          className="absolute bottom-14 right-8  flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white  font-unbounded py-3 hover:border-orange-200  hover:text-orange-200"
        >
          <GrLinkNext className="w-8 h-8" />
        </button>
        </div>
      </section>
    );
  }
}

export default Section;
