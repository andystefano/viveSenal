import React from "react";
import { MdTripOrigin } from "react-icons/md";

function Section({ minHeight }) {
  return (
    <section
      id="tickets"
      className=" sd:pd-0 md:pd-0 lg:pd-0 xl:pd-0 border-t border-black relative overflow-hidden "
      style={{ backgroundColor: "#eaeedd" }}
    >
      <div className="flex justify-center">
        <h1 className="flex items-center mt-8 mx-7 mb-4 text-5xl leading-none text-black text-center font-unbounded font-light">
          {/* Imágenes decorativas con estilos consistentes */}
          <img
            src="images/decoracion/2025_negro.png"
            className="h-10 w-auto mx-2"
            alt="2025"
          />
          <img
            src="images/decoracion/senal2-05.png"
            className="h-7 w-auto mx-6"
            alt="Decoración"
          />
          TICKETS
          <img
            src="images/decoracion/senal2-05.png"
            className="h-7 w-auto mx-6"
            alt="Decoración"
          />
          <img
            src="images/decoracion/2025_negro.png"
            className="h-10 w-auto mx-2"
            alt="2025"
          />
        </h1>
      </div>

      <div
        className="pt-0 sd:pt-0  md:pt-0  lg:pt-0 xl:pt-0   sd:p-14 sd:pb-5 md:p-11 md:pb-5 lg:p-11 lg:pb-5 xl:p-11 xl:pb-5 "
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
          <div className="grid sd:grid-cols-1 sd:grid-cols-1 lg:grid-cols-3 gap-x-20 gap-y-0  sm:py-3 ">
            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/tickets-programa-completo/"
                target="_blank"
                alt=""
                rel="noreferrer"
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
                    
                    <div className="text-black  font-libre-franklin  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                      Acceso para dos personas a{" "}
                      <span className="font-bold">programa completo</span>{" "}
                      SEÑAL.
                    </div>
                  </div>
                  <div className="flex items-start">
                    
                    <div className="text-black  font-libre-franklin  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                      {" "}
                      <span className="font-bold"> Visitas Antenna</span>{" "}
                      seleccionadas.
                    </div>
                  </div>
                  <div className="flex items-start">
                    
                    <div className="text-black  font-libre-franklin  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                      Acceso a{" "}
                      <span className="font-bold">
                        fiesta aniversario SEÑAL
                      </span>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/6-encuentros/"
                target="_blank"
                alt=""
                rel="noreferrer"
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
                    <div className="text-black  font-libre-franklin  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                      Acceso para dos personas a
                      <span className="font-bold">&nbsp;6 encuentros</span> SEÑAL
                      consecutivos.
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-black  font-libre-franklin  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                    <span className="font-bold">&nbsp;Visitas Antenna</span>
                    seleccionadas.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/3-encuentros/"
                target="_blank"
                alt=""
                rel="noreferrer"
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
                   
                    <div className="text-black  font-libre-franklin  ml-2 font-normal text-left text-xs sd:text-xl md:text-xl lg:text-xl xl:text-xl ">
                      Acceso para dos personas a&nbsp;
                      <span className="font-bold">3 encuentros</span> SEÑAL
                      consecutivos.
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:py-3">
  <div className="flex flex-col items-center p-4 max-w-[33%]">
    <a
      href="https://tickets.xn--viveseal-i3a.cl/producto/1-encuentro/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="w-full h-auto"
        src="./images/ticketRed.png?v=2"
        alt="imagen de fondo"
      />
    </a>
    <div className="mt-4">
      <div className="flex flex-col gap-4 mx-1 my-1">
        <div className="flex items-start">
          <div className="text-blackfont-libre-franklin ml-2 text-xs sm:text-xl">
            Acceso para dos personas a&nbsp;
            <span className="font-bold">1 encuentro</span> SEÑAL.
          </div>
        </div>
        <div className="flex items-start">
          <span className="material-icons w-6 h-6 mt-1.5 text-gray-700"></span>
          <div className="text-red-500 font-libre-franklin italic ml-2 text-xs sm:text-xl"></div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center p-4 max-w-[33%]">
    <a
      href="https://tickets.xn--viveseal-i3a.cl/producto/1-encuentro-individual/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="w-full h-auto"
        src="./images/ticketGray.png?v=2"
        alt="imagen de fondo"
      />
    </a>
    <div className="mt-4">
      <div className="flex flex-col gap-4 mx-1 my-1">
        <div className="flex items-start">
          <div className="text-blackfont-libre-franklin ml-2 text-xs sm:text-xl">
            Acceso para dos personas a&nbsp;
            <span className="font-bold">1 encuentro</span> SEÑAL.
          </div>
        </div>
        <div className="flex items-start">
          <span className="material-icons w-6 h-6 mt-1.5 text-gray-700"></span>
          <div className="text-red-500 font-libre-franklin italic ml-2 text-xs sm:text-xl"></div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>



    </section>
  );
}

export default Section;
