import { MdTripOrigin } from "react-icons/md";

function Section({minHeight}) {
  return (
    <section
      class="border-t border-black relative overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: "url('./images/t4.png')",
        backgroundSize: "cover",
        minHeight: `${minHeight}px`
      }}
    >
      <div>
        <div class="mr-auto place-self-center lg:col-span-7 text-white text-left">
          <h1
            class="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8"
            style={{
              paddingTop: "5.5rem",
              /* padding-left: '3.75rem', */ // Puedes comentar líneas usando esta sintaxis en JSX
              color: "white",
              fontWeight: 400,
              fontSize: "4.4rem",
              textAlign: "center",
            }}
          >
            ¿QUE TE ESPERA EN ESTA <br className="hidden lg:block" /> ÉPICA EXPERIENCIA?
          </h1>
        </div>
      </div>

      <div class="flex mt-10">
        <div class="lg:w-5/12 sd:hidden"></div>
        <div class="lg:w-7/12 sd:w-full">
          <div class="w-full">
            <div class="flex items-center ml-1">
              <span class="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 class="text-white text-4xl font-unbounded text-left mt-4">
                  Sesiones sonoras <br /> impresionantes:
                </h1>
              </div>
            </div>
            <div class="flex items-center ml-1">
              <span class="text-transparent opacity-0  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                  un complemento perfecto para el arte. Cada experiencia SEÑAL
                  cuenta con música que dialogará con la exposición y va a
                  llevarte a conectar de nuevas maneras.{" "}
                </p>
              </div>
            </div>

            <div class="flex items-center ml-1 mt-6">
              <span class="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 class="text-white text-4xl font-unbounded text-left mt-4">
                Espacios para conversar <br /> impresionantes:
                </h1>
              </div>
            </div>
            <div class="flex items-center ml-1">
              <span class="text-transparent opacity-0  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                lo más interesante del arte son las conversaciones que éste inspira. Además de conocer a los creadores, en SEÑAL se crea un espacio para que puedas compartir con los demás participantes.{" "}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="lg:flex lg:mt-10 mb-10 mt-4">
        <div class="lg:w-6/12  sd:w-full">
 

        <div class="flex items-center ml-auto mt-6">
              <span class="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 class="text-white text-4xl font-unbounded text-left mt-4">
                Experiencias <br/> Inmersivas: 
                </h1>
              </div>
            </div>
            <div class="flex items-center ml-1">
              <span class="text-transparent opacity-0  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                Vive en carne propia la magia del arte y la música a través de experiencias que desafían la realidad y te transportan a otra dimensión. Desde proyecciones que te hacen sentir como en un sueño hasta performances que desafían tu percepción, cada experiencia es un viaje de descubrimiento y asombro.{" "}
                </p>
              </div>
        </div>

        </div>
        <div class="lg:w-6/12 sd:w-full">

 

        <div class="flex items-center ml-1 mt-6">
              <span class="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 class="text-white text-4xl font-unbounded text-left mt-4">
                Se parte de una <br/> nueva comunidad 

                </h1>
              </div>
            </div>
            <div class="flex items-center ml-1">
              <span class="text-transparent opacity-0  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                de promotores de arte y cultura. Con tu aporte a SEÑAL estás financiando los programas de Fundación Antenna, una organización que conecta a personas desde Arica a Punta Arenas con sus proyectos.{" "}
                </p>
              </div>
        </div>






        </div>
      </div>
       
    </section>
  );
}

export default Section;
