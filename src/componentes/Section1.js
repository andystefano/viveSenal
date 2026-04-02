import React from "react";
import Section3 from "./Section3.js";

function Section({ minHeight }) {
  return (
    <>
      <section
        id="vmovilHeader"
        className="h-auto block sd:hidden md:hidden lg:hidden xl:hidden sd:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen"
        style={{
          backgroundImage: "url(images/fondos/1_movil.png)",
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      >
        <div className="h-auto sd:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen">
          <div className="absolute top-0 left-0 w-full">
            <img alt="" src="/images/header/encabezado_movil.png" className="w-full" />
          </div>

          <div className="flex flex-col space-y-4 p-4 w-full md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%] mx-auto">
            <div className="mt-[15%] text-white rounded-lg">
              <div className="w-full"></div>
            </div>

            <div className="text-white rounded-lg mt-0">
              <div className="w-full">
                <img
                  src="images/graficaDesk.png?v=movil"
                  className="max-w-full max-w-[95%] md:max-w-[95%] lg:max-w-[95%] sm:max-w-[95%] mx-auto"
                  alt="Vive Señal"
                />
              </div>
            </div>

          </div>

          <div className="w-[90%] lg:w-10/12 sd:w-full mt-2 mx-auto justify-center items-center text-center pb-0 sd:pb-10 md:pb-10 lg:pb-10 xl:pb-10">
            <img
              src="/images/logos/home_desk.png?v=2"
              className="w-full hidden sd:block md:block lg:block xl:block"
              alt="Colaboran"
            />
            <img
              src="/images/logos/home_movil.png?v=2"
              className="block sd:hidden md:hidden lg:hidden xl:hidden"
              alt="Colaboran"
            />
          </div>
        </div>

        <div className="block sd:hidden md:hidden lg:hidden xl:hidden">
          <Section3 minHeight={minHeight} />
        </div>
      </section>

      <section
        id="vdeskHeader"
        className="h-auto hidden sd:block md:block lg:block xl:block sd:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen"
        style={{
          backgroundImage: "url(images/fondos/1_desk.png)",
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      >
        <div className="h-auto sd:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen">
          <div className="absolute top-0 left-0 w-full">
            <img
              alt=""
              src="/images/header/encabezado_desk.png"
              className="w-full animate__animated animate__slideInDown"
              style={{ filter: "brightness(1) invert(0)" }}
            />
          </div>

          <div className="flex flex-col space-y-4 p-4 w-full md:max-w-[90%] lg:max-w-[90%] xl:max-w-[90%] mx-auto">
            <div className="mt-[0%] text-white rounded-lg">
              <div className="w-full"></div>
            </div>
            <div className="text-white rounded-lg mt-0">
              <div className="w-full">
                <img
                  src="images/graficaDesk.png?v=desk"
                  className="max-w-full mt-1 max-w-[95%] md:max-w-[95%] lg:max-w-[95%] sm:max-w-[95%] mx-auto animate__animated animate__bounceInUp"
                  alt="Vive Señal"
                />
              </div>
            </div>
            <div className="text-white p-4 rounded-lg"></div>
          </div>

          <div className="w-[90%] lg:w-10/12 sd:w-full mt-2 mx-auto justify-center items-center text-center pb-0 sd:pb-10 md:pb-10 lg:pb-10 xl:pb-10">
            <img
              src="/images/logos/home_desk.png?v=2"
              className="w-full hidden sd:block md:block lg:block xl:block"
              alt="Colaboran"
            />
            <img
              src="/images/logos/home_movil.png?v=2"
              className="block sd:hidden md:hidden lg:hidden xl:hidden"
              alt="Colaboran"
            />
          </div>

          <div className="hidden sd:block md:block lg:block xl:block">
            <Section3 minHeight={minHeight} anchorId={null} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
