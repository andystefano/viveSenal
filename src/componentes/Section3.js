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



<div className="w-full block sd:hidden md:hidden lg:hidden xl:hidden text-center pt-8">
  <div className="flex justify-center items-center">
    <img
      src="images/decoracion/senal2-05.png"
      className="w-1/12 mx-2 mt-5"
      style={{ maxWidth: "36px", height: "auto" }}
    />

    
    <div className="text-5xl md:text-5xl xl:text-6xl font-unbounded pt-4" style={{ color: "#000", fontWeight: '400' }}>
      PRÓXIMAS
    </div>
    <img
      src="images/decoracion/senal2-05.png"
      className="w-1/12 mx-2  mt-5"
      style={{ maxWidth: "36px", height: "auto" }}
    />
  </div>
  <div className="text-5xl md:text-5xl xl:text-6xl font-unbounded mt-3" style={{ fontWeight: '900' }}>
    SEÑALES
  </div>
</div>


      
      <div className="w-full hidden sd:block md:block lg:block xl:block">
       
      <h1
  className="text-4xl leading-none md:text-5xl xl:text-6xl text-white text-center w-full font-unbounded pt-12 flex justify-center items-center"
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

      <div className="grid mt-4 sm:grid-cols-1 lg:grid-cols-3 gap-5 sd:gap-15 md:gap-15 lg:gap-15 xl:gap-15 p-12 pt-0 sd:pt-12 md:pt-12 lg:pt-12 xl:pt-12">
        <div className="relative block sd:hidden md:hidden lg:hidden xl:hidden">
           
        </div>

        <div className="relative p-0 md:p-10 lg:p-10 xl:p-10">
          <img src="images/programacion/p1.png" alt="Imagen" className="w-full" />
          <div className="m-0 md:m-5 lg:m-5 xl:m-5  absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTGreen bg-opacity-100 text-black">
          <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7  py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
              MUSEO PRECOLOMBINO</h1>
              <h2 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-medium font-unbounded ">
              Santiago Centro.
              </h2>
              <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
              <p className="text-xs mt-0 sd:text-xl md:text-xl  lg:textxl xl:text-xl text-left font-libre-franklin sd:mt-6 md:mt-4 lg:mt-6 xl:mt-9">
              Disfruta de un especial recorrido nocturno en uno de los museos más fascinantes de Santiago y descubre el legado de nuestros antepasados a través de las piezas de <b>arte precolombino</b>.
<br/>Música por confirmar.
                </p>
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
        <div className="relative p-0 md:p-10 lg:p-10 xl:p-10">
          <img src="images/programacion/p2.png" alt="Imagen" className="w-full" />
          <div className="m-0 md:m-5 lg:m-5 xl:m-5  absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTGreen bg-opacity-100 text-black">
          <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7  py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
              ARTISTAS DEL TALLER POCURO</h1>
              <h2 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-medium font-unbounded ">
              Providencia</h2>
              <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
              <p className="text-xs mt-0 sd:text-xl md:text-xl  lg:textxl xl:text-xl text-left font-libre-franklin sd:mt-6 md:mt-4 lg:mt-6 xl:mt-9">
              <b>Isidora Villarino, Jacinta Besa, Colomba Fontaine, Josefina Valenzuela, Macarena Jofré, Maite Zubizarreta y Sergio Loayza.</b>
&nbsp;Siete artistas te invitan a conocer su intimidad y espacio creativo para conocer sus inspiraciones y obras de arte.
<br/>Música por confirmar.
                </p>
              
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
        <div className="relative  p-0 md:p-10 lg:p-10 xl:p-10">
          <img src="images/programacion/p3.png" alt="Imagen" className="w-full" />
          <div className="m-0 md:m-5 lg:m-5 xl:m-5  absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTGreen bg-opacity-100 text-black">
          <div className="text-center w-full h-full px-3 sd:px-7 md:px-7 lg:px-7  py-3 sd:py-7 md:py-7 lg:py-7 xl:py-7">
              <div>
              <h1 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-bold font-unbounded ">
              CAMILA LOBOS EN SALA DE ARTE CCU</h1>
              <h2 className="text-normal sd:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-left font-medium font-unbounded ">
              Las Condes</h2>
              <br className="xs:block sd:block sm:hidden md:hidden lg:hidden "/>
              <p className="text-xs mt-0 sd:text-xl md:text-xl  lg:textxl xl:text-xl text-left font-libre-franklin sd:mt-6 md:mt-4 lg:mt-6 xl:mt-9">
              <b>Instalación inmersiva</b>.<br/>
              Sumérgete en un bosque flotante de árboles secos y raíces que te lleva a despertar emociones y reflexiones sobre los territorios en los que vivimos.
              <br/>Música por confirmar.
                </p>
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
      </div>
    </section>
  );
}

export default Section;
