import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useInsertionEffect, useRef } from "react";

function Section({ minHeight }) {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      console.log("Altura del encabezado:", headerHeight);
    }
  }, []);

  let width = window.innerWidth;
  return (
    <section id="programacion"
      className="border-t border-black relative overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: width >= 640 ? "url(images/t3.png)" : "none", 
        backgroundSize: "contain",
        backgroundPosition: "right top",
        backgroundColor: "#eaeedd",
        backgroundRepeat: "no-repeat",
      }}
    >



<div className="flex items-start justify-between block sd:hidden md:hidden lg:hidden xl:hidden">
  <div className="w-full">
    <h1 className="mb-4 text-5xl leading-none sd:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8
    pl-7 sd:pl-14 md:pl-14 lg:pl-14 xl:pl-14 
    " style={{ paddingTop: '3rem', color: 'rgb(0, 0, 0)', fontWeight: 900 }}>
      PROGRA<span className="sd:hidden sm:hidden lg:hidden">-</span><br className="block sd:hidden sm:hidden lg:hidden" />MACIÓN
    </h1>
    <h1 className="text-3xl leading-none md:text-5xl xl:text-6xl text-white text-left font-unbounded  pl-7 sd:pl-14 md:pl-14 lg:pl-14 xl:pl-14 " style={{ color: 'rgb(0, 0, 0)' }}>
      AGOSTO / OCTUBRE
    </h1>
  </div>
  <img style={{paddingTop:'3rem'}} src="images/cuposLimitados.png" className="hidden align-top w-14 mt-5 sd:mt-0 md:mt-0 lg:mt-0 xl:mt-0" alt="Cupos limitados" />
</div>

      
      <div className="w-full hidden sd:block md:block lg:block xl:block">
        <h1
          className="mb-4 text-5xl leading-none sd:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8"
          style={{
            paddingTop: "3rem",
            paddingLeft: "3.75rem",
            color: "#000",
            fontWeight: "900",
          }}
        >
          PROGRA<span className="sd:hidden sm:hidden lg:hidden">-</span>
          <br className="block sd:hidden sm:hidden lg:hidden" />
          MACIÓN
        </h1>
        <h1
          className=" text-4xl leading-none md:text-5xl xl:text-6xl text-white text-left font-unbounded"
          style={{
            paddingLeft: "4rem",
            color: "#000",
          }}
        >
          AGOSTO / OCTUBRE
        </h1>
      </div>

      <div className="grid mt-4 sm:grid-cols-1 lg:grid-cols-3 gap-5 sd:gap-12 md:gap-12 lg:gap-12 xl:gap-12 p-12 pt-0 sd:pt-12 md:pt-12 lg:pt-12 xl:pt-12">
        <div className="relative block sd:hidden md:hidden lg:hidden xl:hidden">
          <img src="images/cloudProgramacion.png" />
        </div>

        <div className="relative">
          <img src="images/p2.png" alt="Imagen" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTGreen bg-opacity-100 text-black">
            <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7 py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
                Galería NAC, Vitacura
                </h1>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
                Arte digital, dibujos y mucho más en el corazón de Vitacura.
                </p>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Comenzaremos visitando las exposiciones de Cristóbal Cea y Josefina Frederick, para después recorrer los casi 10 talleres que son parte de los artistas de NAC.
                </p>

                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Música por confirmar.</p>

                

              </div>
              <a href="#tickets"><button className="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black  sd:text-normal md:text-2xl lg:text-2xl xl:text-2xl  font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-icons">
                  <FaLongArrowAltLeft />
                </span>
              </button></a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="images/p1.png" alt="Imagen" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTPink bg-opacity-100 text-black">
            <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7  py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
              Taller 99, Providencia</h1>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
                ¡Sé artista por una noche!
                </p>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Conoce la historia del mítico Taller 99, un lugar en el que han participado grandes artistas desde 1956. Aprenderás sobre la técnica del grabado y cómo hacer tu propia obra de arte. 
                </p>
              </div>
              <a href="#tickets"><button className="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-normal sd:text-normal md:text-2xl lg:text-2xl xl:text-2xl font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-icons">
                  <FaLongArrowAltLeft />
                </span>
              </button></a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="images/p3.png" alt="Imagen" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTRed bg-opacity-100 text-black">
            <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7 py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
                <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
                Artistas del Talleres Origen, Lo Barnechea
                </h1>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-2 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
                Descubre a siete artistas mujeres y conoce de cerca su arte.
                </p>
                
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Cerca de Plaza San Enrique y con una hermosa vista al río, un grupo de artistas dan vida a Talleres Origen. Además de visitar sus espacios creativos, podrás disfrutar de la naturaleza que rodea este lugar.
                </p>

                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Música por confirmar.
                </p>

              </div>
              <a href="#tickets"><button className="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black  sd:text-normal md:text-2xl lg:text-2xl xl:text-2xl  font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-icons">
                  <FaLongArrowAltLeft />
                </span>
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
