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
        backgroundImage: width >= 640 ? "url(images/fondos/2_desk.png)" : "none", 
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundColor: "#eaeedd",
        backgroundRepeat: "no-repeat",
      }}
    >



<div className="flex items-start justify-between block sd:hidden md:hidden lg:hidden xl:hidden">
  <div className="w-full">
    <h1 className="text-3xl w-full leading-none md:text-5xl xl:text-6xl text-white text-center font-unbounded  pl-7 sd:pl-14 md:pl-14 lg:pl-14 xl:pl-14 " style={{ color: 'rgb(0, 0, 0)' }}>
      NOVIEMBRE / DICIEMBRE /ENERO
    </h1>
  </div>
</div>

      
      <div className="w-full hidden sd:block md:block lg:block xl:block">
       
      <h1
  className="text-4xl leading-none md:text-5xl xl:text-6xl text-white text-center w-full font-unbounded pt-8 flex justify-center items-center"
  style={{
    color: "#000",
    fontWeight: '400',
  }}
>
  <img
    src="images/decoracion/senal2-05.png"
    className="w-1/12 mx-2" // Asegura que las imágenes sean proporcionales y tengan un margen entre ellas
    style={{
      maxWidth: "40px", // Puedes ajustar el tamaño máximo aquí según lo que necesites
      height: "auto", // Mantiene la proporción de la imagen
    }}
  />
  
    PRÓXIMAS<span className="" style={{ fontWeight: '900' }}>&nbsp;SEÑALES
  </span>

  <img
    src="images/decoracion/senal2-05.png"
    className="w-1/12 mx-2" // Asegura que las imágenes sean proporcionales y tengan un margen entre ellas
    style={{
      maxWidth: "40px", // Puedes ajustar el tamaño máximo aquí según lo que necesites
      height: "auto", // Mantiene la proporción de la imagen
    }}
  />
</h1>

      </div>

      <div className="grid mt-4 sm:grid-cols-1 lg:grid-cols-3 gap-5 sd:gap-12 md:gap-12 lg:gap-12 xl:gap-12 p-12 pt-0 sd:pt-12 md:pt-12 lg:pt-12 xl:pt-12">
        <div className="relative block sd:hidden md:hidden lg:hidden xl:hidden">
           
        </div>

        <div className="relative">
          <img src="images/programacion/p1.png" alt="Imagen" className="w-full" />
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
          <img src="images/programacion/p2.png" alt="Imagen" className="w-full" />
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
                Música a cargo de Thomas Woodroffe.</p>
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
          <img src="images/programacion/p3.png" alt="Imagen" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTRed bg-opacity-100 text-black">
            <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7 py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
                <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
                Galería CIMA, Stgo Centro
                </h1>
                <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-2 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-4 md:mt-4 lg:mt-4">
                Y su exposición "Frecuente Sincrónico".
                </p>
                
                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Conoce a los artistas, la historia y quienes son parte de Galería CIMA en su nueva exposición "Frecuente Sincrónico", curada en alianza con SPECIFIC, mientras disfrutas de su vista única en su increíble azotea. Además, para celebrar el inicio del 2025 y nuestro cierre del primer ciclo de encuentros SEÑAL, tendremos música extendida hasta las 00:00 hrs.</p>

                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-0 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                ¡No te lo pierdas!</p>

                <p className="text-xs sd:text-sm md:text-sm lg:text-sm xl:text-sm mt-3 sd:text-2xl md:text-2xl xl:text-2xl text-left font-libre-franklin sd:mt-3 md:mt-3 lg:mt-3">
                Música a cargo de LA TRINIDAD y DJ CASO.</p>

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
