import React from "react";

function Section({ minHeight }) {
  return (
    <section
      id="tickets"
      className="sd:pd-0 md:pd-0 lg:pd-0 xl:pd-0 relative overflow-hidden"
      style={{ backgroundColor: "#eaeedd" }}
    >
      <div className="flex justify-center">
        <h1 className="flex items-center mt-8 mx-7 mb-4 text-5xl sd:text-5xl sm:text-5xl lg:text-5xl xl:text-6xl leading-none text-black text-center font-unbounded font-normal">
          <img
            src="images/decoracion/senal-deco-black.png"
            className="h-7 w-auto mx-2"
            alt="Decoración"
          />
          TICKETS
          <img
            src="images/decoracion/senal-deco-black.png"
            className="h-7 w-auto mx-2"
            alt="Decoración"
          />
        </h1>
      </div>

      <div
        className="pt-0 sd:pt-0 md:pt-0 lg:pt-0 xl:pt-0 sd:p-14 sd:pb-5 md:p-11 md:pb-5 lg:p-11 lg:pb-5 xl:p-11 xl:pb-5"
        style={{
          backgroundColor: "#eaeedd",
          width: "100%",
          color: "white",
          zIndex: 2,
        }}
      >
        <div className="w-full flex justify-center">
          <div className="grid sd:grid-cols-1 lg:grid-cols-1 w-full lg:w-auto">
            <div className="p-4 text-center lg:max-w-md xl:max-w-lg mx-auto">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/6-encuentros/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./images/ticket1.png?v=2"
                  alt="Ticket programa completo"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>

              <div>
                <div className="grid grid-cols-1 gap-4 mx-1 my-1">
                  <div className="flex items-start">
                    <div className="mt-4 text-black font-libre-franklin ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl">
                      Acceso para dos personas{" "}
                      <span className="font-bold">&nbsp;al programa completo</span>&nbsp;
                      <br />
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-4 text-black font-libre-franklin ml-2 font-normal text-left text-md sd:text-xl md:text-xl lg:text-xl xl:text-xl">
                    <span className="font-bold">&nbsp;Visitas Antenna</span>
                    &nbsp;seleccionadas.
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
