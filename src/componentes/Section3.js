import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({minHeight}) {
  return ( <section
  className="border-t border-black relative overflow-hidden"
  style={{
    position: "relative",
    backgroundImage: "url(images/t3.png)",
    backgroundSize: "cover",
    minHeight: `${minHeight}px`, 
    backgroundColor: '#0cb259' 
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




<div class="grid grid-cols-3 gap-12 p-12">
                <div class="relative">
                    <img src="images/p1.png" alt="Imagen" class="w-full" />
                    <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bgTRed bg-opacity-100 text-black">
                        <div class="text-center w-full h-full px-7 py-7">
                            <div>
                                <h1 class="text-3xl text-left font-bold unbounded-200 ">Lugar</h1>
                                <p class="text-2xl text-left unbounded-200 mt-10">Descripción del artista Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer </p>

                            </div>
                            <button class="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-2xl font-bold rounded-full border-2 border-black mt-4 unbounded-200 hover:text-white hover:border-white">
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
                                <h1 class="text-3xl text-left font-bold unbounded-200 ">Lugar</h1>
                                <p class="text-2xl text-left unbounded-200 mt-10">Descripción del artista Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer </p>

                            </div>
                            <button class="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-2xl font-bold rounded-full border-2 border-black mt-4 unbounded-200 hover:text-white hover:border-white">
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
                                <h1 class="text-3xl text-left font-bold unbounded-200 ">Lugar</h1>
                                <p class="text-2xl text-left unbounded-200 mt-10">Descripción del artista Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer </p>

                            </div>
                            <button class="absolute bottom-0 left-0 mx-7 my-7 flex items-center justify-center px-6 py-1 text-black text-2xl font-bold rounded-full border-2 border-black mt-4 unbounded-200 hover:text-white hover:border-white">
                                Tickets  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                                <span class="material-icons">
                                <FaLongArrowAltLeft />
                                    </span>
                            </button>                    
                        </div>
                    </div>
                </div>
            </div>
            





  <div className="w-full"  style={{
    backgroundColor: '#0cb259' 
  }}>
  <marquee class="text-2xl text-white font-bold mx-0" scrollamount="12" loop="100" vspace="1%" hspace="1%" scrolldelay="-1">
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.&nbsp;&nbsp;
      Desafia lo convencional y abraza lo extraordinario en estos encuentros.
  </marquee>
  </div>
</section>
  );
}

export default Section;
