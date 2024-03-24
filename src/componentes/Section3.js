import { FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect, useInsertionEffect, useRef } from "react";

function Section({minHeight}) {


    const headerRef = useRef(null);

    useEffect(() => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        console.log('Altura del encabezado:', headerHeight);
      }
    }, []);
    

  return ( <section
  className="border-t border-black relative overflow-hidden"
  style={{
    position: "relative",
    backgroundImage: "url(images/t3.png)",
    backgroundSize: "contain",
    backgroundPosition: "right top",
    minHeight: `${minHeight}px`, 
    backgroundColor: '#0cb259', 
    backgroundRepeat: 'no-repeat'
  }}
  >




<div className="w-full">
<h1 className="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8" style={{
            paddingTop: '3rem',
            paddingLeft: '3.75rem',
            color: '#000',
            fontWeight: '900',
            fontSize: '4.6rem'
}}>PROGRAMACION</h1>
<h1 class=" text-4xl leading-none md:text-5xl xl:text-6xl text-white text-left font-unbounded"  style={{
            paddingLeft: '4rem',
            color: '#000'
}}>ABRIL / JUNIO</h1>
 
</div>


<div class="grid  sm:grid-cols-1 lg:grid-cols-3 gap-12 p-12">
                <div class="relative">
                    <img src="images/p1.png" alt="Imagen" class="w-full" />
                    <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTRed bg-opacity-100 text-black">
                        <div class="text-center w-full h-full px-7 py-7">
                            <div>
                                <h1 class="text-3xl text-left font-bold font-unbounded ">Lugar</h1>
                                <p class="text-2xl text-left font-unbounded mt-10">Descripción del artista Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer </p>

                            </div>
                            <button class="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-2xl font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                                Tickets  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                                <span class="material-icons">
                                <FaLongArrowAltLeft />
                                    </span>
                            </button>
                                                   
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="images/p2.png" alt="Imagen" class="w-full" />
                    <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTGreen bg-opacity-100 text-black">
                        <div class="text-center w-full h-full px-7 py-7">
                            <div>
                                <h1 class="text-3xl text-left font-bold font-unbounded ">Lugar</h1>
                                <p class="text-2xl text-left font-unbounded mt-10">Descripción del artista Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer </p>

                            </div>
                            <button class="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-2xl font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                                Tickets  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                                <span class="material-icons">
                                <FaLongArrowAltLeft />
                                    </span>
                            </button>                         
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="images/p3.png" alt="Imagen" class="w-full" />
                    <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTPink bg-opacity-100 text-black">
                        <div class="text-center w-full h-full px-7 py-7">
                            <div>
                                <h1 class="text-3xl text-left font-bold font-unbounded ">Lugar</h1>
                                <p class="text-2xl text-left font-unbounded mt-10">Descripción del artista Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer </p>

                            </div>
                            <button class="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-2xl font-bold rounded-full border-2 border-black mt-4 font-unbounded hover:text-white hover:border-white">
                                Tickets  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                                <span class="material-icons">
                                <FaLongArrowAltLeft />
                                    </span>
                            </button>                    
                        </div>
                    </div>
                </div>
            </div>
            




</section>
  );
}

export default Section;
