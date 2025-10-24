import React from "react";

function Section({ minHeight }) {
  return (
    <section
      id="tickets"
      className=" sd:pd-0 md:pd-0 lg:pd-0 xl:pd-0 border-t border-black relative overflow-hidden "
      style={{ backgroundColor: "#eaeedd" }}
    >
      <div className="flex justify-center">
        <h1 className="flex items-center mt-24 mx-7 mb-4 text-5xl  sd:text-5xl sm:text-5xl lg:text-5xl xl:text-6xl leading-none text-black text-center font-unbounded font-normal">
          {/* Imágenes decorativas con estilos consistentes */}
          <img
            src="images/decoracion/2025_negro.png"
            className="h-5 sd:h-10 sm:h-10 lg:h-10 xl:h-10 w-auto mx-2 hidden sd:block  sm:block  lg:block xl:block"
            alt="2025"
          />
          <img
            src="images/decoracion/senal2-05.png"
            className="h-7 w-auto mx-2"
            alt="Decoración"
          />
          TICKETS
          <img
            src="images/decoracion/senal2-05.png"
            className="h-7 w-auto mx-2  "
            alt="Decoración"
          />
          <img
            src="images/decoracion/2025_negro.png"
            className="h-5 sd:h-10 sm:h-10 lg:h-10 xl:h-10 w-auto mx-2 hidden sd:block  sm:block  lg:block xl:block"
            alt="2025"
          />
        </h1>
      </div>

      <div
        className="pt-0 sd:pt-0  md:pt-0  lg:pt-0 xl:pt-0  md:pb-5 xl:pb-5 "
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

<div className="block lg:flex">
        <div className="w-full lg:w-2/3">





        
          <div className="grid sd:grid-cols-1 sd:grid-cols-1 lg:grid-cols-2  ">
      

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/6-encuentros/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[95%]"
                  src="./images/ticketGreen.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <div className="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                      Acceso para dos personas a
                      <span className="font-bold">&nbsp;6 encuentros</span>&nbsp;<br/>SEÑAL
                      consecutivos.
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                    <span className="font-bold">&nbsp;Visitas Antenna</span>
                    &nbsp;seleccionadas.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/3-encuentros/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[95%]"
                  src="./images/ticketRosa.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                   
                    <div className="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                      Acceso para dos personas a&nbsp;
                      <span className="font-bold">3 encuentros</span><br/> SEÑAL
                      consecutivos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="p-4 text-center">
            <a
    href="https://tickets.xn--viveseal-i3a.cl/producto/1-encuentro/"
    target="_blank"
    rel="noreferrer"
  >
    <img
      className="w-[95%]"
      src="./images/ticketRed.png?v=2"
      alt="imagen de fondo"
      style={{
        height: "auto",
      }}
    />
  </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                   
                    <div className="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                      Acceso para dos personas a&nbsp;
                      <span className="font-bold">1 encuentro</span><br/> SEÑAL
                      consecutivos.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-center">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/1-encuentro-individual/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[95%]"
                  src="./images/ticketGray.png?v=2"
                  alt="imagen de fondo"
                  style={{
                    height: "auto",
                  }}
                />
              </a>
              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <div className="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl  ">
                      Acceso para una persona a&nbsp;
                      <span className="font-bold">1 encuentro</span> SEÑAL.
                    </div>
                  </div>
                </div>
              </div>
            </div>











            

           
          </div>

<div>

</div>

        </div>
        <div className="w-full lg:w-1/3 px-9 gradient-background-botton lg:gradient-background-top pt-12 lg:pt-0">

        <h1 className="text-6xl leading-none md:text-5xl xl:text-5xl text-black text-left w-full font-unbounded pt-4 flex justify-start items-center font-semibold">
          FIESTAS
        </h1> 

        <h2 className="text-normal leading-none md:text-normal xl:text-normal font-light text-left w-full font-unbounded pt-4 flex justify-start items-center  text-black mb-5">
        <span className="font-semibold">Preventa:</span>&nbsp;Primeras 100 entradas.
        </h2> 



        <div class="text-left"><a href="https://tickets.xn--viveseal-i3a.cl/producto/1-fiesta-senal/" target="_blank" rel="noreferrer"><img className="w-[95%]" src="./images/ticketRosaNegro.png?v=2" alt="imagen de fondo"/></a><div><div class="grid grid-cols-1 gap-4 mx-1 my-1"><div class="flex items-start"><div class="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl"></div></div></div></div></div>

        <div class="text-left"><a href="https://tickets.xn--viveseal-i3a.cl/producto/2-fiesta-senal/" target="_blank" rel="noreferrer"><img className="w-[95%]" src="./images/verdeNegro.png?v=2" alt="imagen de fondo" /></a><div><div class="grid grid-cols-1 gap-4 mx-1 my-1"><div class="flex items-start"><div class="mt-4 text-black  font-libre-franklin  ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl"></div></div></div></div></div>
        
        
        </div>
</div>

      </div>



    </section>
  );
}

export default Section;
