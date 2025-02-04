import React from "react";
import { MdTripOrigin } from "react-icons/md";

function Section({ minHeight }) {
  return (
    <section
      id="tickets"
      className="pb-32 sd:pd-0 md:pd-0 lg:pd-0 xl:pd-0 border-t border-black relative overflow-hidden "
      style={{ backgroundColor: "#eaeedd" }}
    >
      <div class="grid grid-cols-1  sd:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div class="col-span-1 flex justify-center sd:justify-center md:justify-center lg:justify-center  xl:justify-center">
          <h1
            className="mt-3 sd:mt-5 md:mt-5 lg:mt-5 xl:mt-5 mx-7 mb-4 text-5xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8"
            style={{
              paddingTop: "2.5rem",
              color: "black",
              fontWeight: 400,
            }}
          >
            ¡HAZ TU <br /> DONACIÓN!
          </h1>
        </div>
        <div class="col-span-1">
          <p
            className="hidden sd:block md:block lg:block xl:block leading-5 font-libre-franklin text-left px-7 pt-9  sd:pt-14 sd:pt-14 md:pt-14 lg:pt-14 xl:pt-14 text-sm sd:text-2xl sm:text-2xl lg:text-2xl xl:text-2xl"
            style={{
              fontWeight: 400,
              color: "black",
              paddingRight: "4.2rem",
            }}
          >
           <strong>SEÑAL</strong>  no es una fiesta ni un evento convencional; es un espacio mensual dedicado a fortalecer la comunidad. Al participar en SEÑAL, no sólo te unes a una red de personas con intereses comunes, sino que también contribuyes a los programas de Fundación Antenna. Estos programas tienen un impacto positivo en artistas y espacios culturales, fomentando el desarrollo creativo y la conexión social en nuestra comunidad. Tu apoyo es fundamental para seguir impulsando este cambio cultural
          </p>

          <p
            className="block sd:hidden md:hidden lg:hidden xl:hidden leading-5 font-libre-franklin text-left pl-4 pr-4 pt-9  sd:pt-14 sd:pt-14 md:pt-14 lg:pt-14 xl:pt-14 text-sm sd:text-xl sm:text-xl lg:text-xl xl:text-xl"
            style={{
              fontWeight: 400,
              color: "black",
            }}
          >
            <strong>SEÑAL</strong> no es una fiesta ni un evento convencional.
            Es un espacio que que se crea una vez al mes y que facilita la
            creación de comunidad.{" "}
            <strong>
              {" "}
              Al aportar a SEÑAL estás apoyando los programas de Fundación
              Antenna que impactan a artistas y espacios culturales.
            </strong>{" "}
          </p>
        </div>
      </div>

      <div
        className="sd:p-14 sd:pb-20 md:p-14 md:pb-20 lg:p-14 lg:pb-20 xl:p-14 xl:pb-20 "
        style={{
          backgroundColor: "#eaeedd",
          width: "100%",
          color: "white",
          zIndex: 2,
        }}
      >
        <div className="flex">
          <div className="w-full  sm:w-4/12 lg:w-4/12  p-4"></div>
          <div className="w-full  sm:w-3/12 lg:w-3/12  p-4">
            <div
              className="text-red-500 font-libre-franklin max-w-300 rounded-full border-pink-400 ml-6  mt-1.5 transform  skew-y-[170deg] "
              style={{
                maxWidth: "338px",
              }}
            ></div>
          </div>
          <div className="w-full sm:w-5/12 lg:w-5/12  p-4"></div>
        </div>

        <div className="w-full">
          <div className="grid sd:grid-cols-1 sd:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0  sm:py-3 sm:px-20 sm:mx-20">
          <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/tickets-programa-completo/"
                target="_blank"
                alt="" rel="noreferrer"
              >
                <img
                  className=""
                  src="./images/ticket1.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                    Acceso para dos personas a{" "}
                      <span className="font-bold">programa completo</span> SEÑAL.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                   {" "}
                      <span className="font-bold"> Visitas Antenna</span> seleccionadas.
                    </div>
                  </div>                  
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-pink-400">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                    Acceso a {" "}
                      <span className="font-bold">fiesta aniversario SEÑAL</span>.
                    </div>
                  </div>                 
                </div>
              </div>
            </div>


            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/6-encuentros/"
                target="_blank"
                alt="" rel="noreferrer"
              >
                <img
                  className=""
                  src="./images/ticketGreen.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-green-700">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                    Acceso para dos personas a <span className="font-bold">6 encuentros</span>{" "} SEÑAL consecutivos.
                    
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-green-700">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                   {" "}
                      <span className="font-bold"> Visitas Antenna</span> seleccionadas.
                    </div>
                  </div>  

              </div>
            </div>

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/3-encuentros/"
                target="_blank"
                alt="" rel="noreferrer"
              >
                <img
                  className=""
                  src="./images/ticketRosa.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-[#4db0b0]">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                    Acceso para dos personas a{" "}
                      <span className="font-bold">3 encuentros</span> SEÑAL consecutivos.
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/1-encuentro/"
                target="_blank"
                alt="" rel="noreferrer"
              >
                <img
                  className=""
                  src="./images/ticketRed.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-red-700">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                    Acceso para dos personas a <span className="font-bold">1 encuentro</span>{" "}
                      SEÑAL.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-gray-700  mt-1.5"></span>
                    <div className="text-red-500 font-libre-franklin italic  ml-2 font-light text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl">
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>


            
            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/1-encuentro-individual/"
                target="_blank"
                alt="" rel="noreferrer"
              >
                <img
                  className=""
                  src="./images/ticketGray.png?v=2"
                  alt="imagen de fondo"
                  style={{ width: "100%", height: "auto" }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <span className="material-icons w-3 h-3  mt-0 sd:w-6 sd:h-6  md:w-6 md:h-6  lg:w-6 lg:h-6  xl:w-6 sd:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 xl:h-6 text-gray-700 ">
                      <MdTripOrigin />
                    </span>
                    <div className="text-black  font-unbounded  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                      Acceso a <span className="font-bold">1 encuentro</span>{" "}
                      SEÑAL para una persona.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="images/2024_negro_horizontal.png?v=2"
          alt=""
          className="absolute bottom-7 right-10 h-14 sd:h-20 sm:h-20 lg:h-20 xl:h-20"
        />
      </div>
    </section>
  );
}

export default Section;
