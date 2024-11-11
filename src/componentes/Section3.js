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
      NOVIEMBRE / DICIEMBRE /ENERO
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
          NOVIEMBRE / DICIEMBRE /ENERO
        </h1>
      </div>

      <div className="grid mt-4 sm:grid-cols-1 lg:grid-cols-3 gap-5 sd:gap-12 md:gap-12 lg:gap-12 xl:gap-12 p-12 pt-0 sd:pt-12 md:pt-12 lg:pt-12 xl:pt-12">
        <div className="relative block sd:hidden md:hidden lg:hidden xl:hidden">
           
        </div>

        <div className="relative">
          <img src="images/p2.png" alt="Imagen" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTGreen bg-opacity-100 text-black">
            <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7 py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
              GAM, Santiago Centro
                </h1>
                <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
                Liliana Iturriaga y GAM histórico .
                </p>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Conoce los trabajos geométricos de Liliana Iturriaga y la historia detrás del icónico Centro Cultural Gabriela Mistral (GAM). 
                </p>

                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">     
                Música a cargo de Vale Otro.</p>

                

              </div>
              <a href="#tickets"><button className="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black  sd:text-normal md:text-2xl lg:text-2xl xl:text-2xl  font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                Participa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="material-icons">
                  <FaLongArrowAltLeft />
                </span>
              </button></a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="images/pv1.png" alt="Imagen" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTPink bg-opacity-100 text-black">
            <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7  py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
              MAVI UC, Lastarria</h1>
              <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
              <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
              Bernardo Oyarzún Y Macarena Cuevas
                </p>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Descubre a dos artistas de distintas generaciones, el reconocido artista Bernardo Oyarzún y la ganadora del Premio Arte Joven LarrainVial 2023, Macarena Cuevas.</p>
                
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Música por confirmar.</p>
              </div>
              <a href="#tickets"><button className="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-normal sd:text-normal md:text-2xl lg:text-2xl xl:text-2xl font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
              Participa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                Planta de Cerveza LOA, Quilicura
                </h1>
                <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-2 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
                Arte inmersivo en Planta Cerveza LOA.
                </p>
                
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Explora la fábrica de de Cerveza LOA, su maquinaria de producción y los diversos procesos de elaboración detrás de una cerveza. Además, podrás disfrutar de una propuesta artística inmersiva que mezclará arte y sonido.</p>

                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Música por confirmar.</p>

              </div>
              <a href="#tickets"><button className="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black  sd:text-normal md:text-2xl lg:text-2xl xl:text-2xl  font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
              Participa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
