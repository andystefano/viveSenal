import React from "react";
import { useState } from "react";
import { MdTripOrigin } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function Section({ minHeight }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      class="border-t border-black relative overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: "url(images/t2bg.png)",
        minHeight: `${minHeight}px`,
        backgroundColor: "#1a1a19",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right center"
      }}
    >
      <div class="grid lg:grid-cols-2 sd:grid-cols-1">
        <div class="col-span-1  p-4 ">
          <h1
            class="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-white text-left font-unbounded pt-8"
            style={{
              paddingTop: "4rem",
              paddingLeft: "5rem",
              color: "#ff799a",
            }}
          >
            ¿CÓMO SER PARTE DE SEÑAL? 

          </h1>

          <div className="hidden lg:block ">
            <div
              class="flex items-center sd:hidden"
              style={{
                paddingLeft: "12.9rem",
                paddingTop: "4.9rem",
                paddingRight: "1.2rem",
              }}
            >
              <span
                class="text-pink-400  mt-1.5"
                style={{ paddingRight: "1.2rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p
                  class="font-libre-franklin"
                  style={{
                    fontWeight: 400,
                    color: "white",
                    fontSize: "1.3rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  <strong>SEÑAL</strong> es un evento que se realiza una vez al mes en distintos espacios de arte y creación en Santiago de Chile. Son 10 encuentros que se realizan a lo largo del año, con la curatoría y mediación de Fundación Antenna. 
                </p>
              </div>
            </div>
            <div
              class="flex items-center  sd:hidden"
              style={{
                paddingLeft: "12.9rem",
                paddingTop: "4.9rem",
                paddingRight: "1.2rem",
              }}
            >
              <span
                class="text-pink-400  mt-1.5"
                style={{ paddingRight: "1.2rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p
                  class="font-libre-franklin"
                  style={{
                    fontWeight: 400,
                    color: "white",
                    fontSize: "1.3rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  Las sesiones <strong>SEÑAL</strong> están pensadas como un programa para conocer espacios fundamentales para la cultura de Santiago. Para sumarte a SEÑAL, te recomendamos inscribirte al programa completo, que tiene un 17% de descuento, para que puedas conectar con esta comunidad y conocer todos los espacios y artistas que hacen parte de la programación. 
Con tu aporte SEÑAL estás apoyando a Fundación Antenna en el desarrollo de nuevos proyectos que benefician a artistas y espacios culturales. 

                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1  p-4 ">



        <div class="grid grid-cols-2">
        <div class="p-4">
          <div
              class="text-white font-libre-franklin max-w-300 rounded-full border-pink-400  mt-1.5 transform skew-y-[170deg] hover:skew-y-[175deg]"
              style={{
                maxWidth: "338px",
                padding: "45px",
                paddingLeft: "50px",
                paddingRight: "50px",
                textAlign: "center",
                backgroundImage: "url(images/wavesCloud.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
              }}
            >
              <p class="text-xl font-bold">
              No es necesario saber de arte, solo ganas de vivir una experiencia transformadora.
              </p>
            </div>
        </div>
        <div class="p-4">
          <div
              class="text-pink-400 font-libre-franklin max-w-300 rounded-full border-pink-400  mt-1.5 transform  skew-y-[3deg] hover:skew-y-[5deg]"
              style={{
                maxWidth: "338px",
                border: "2px solid #f175a3",
                padding: "45px",
                borderRadius: "50%",
                paddingLeft: "50px",
                paddingRight: "50px",
                textAlign: "center",
              }}
            >
              <p class="text-xl font-bold">
                Si tienes entre 25 y 40 años te invitamos a ser parte de SEÑAL.
              </p>
            </div>
        </div>
      </div>


          

        </div>
      </div>

      <div class="flex justify-center items-center w-1/2">
        <button
          className="flex items-center px-6 py-1 bg-black text-white text-2xl font-bold rounded-full border-2 border-pink-500  font-unbounded  mt-10 "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          {hovered ? (
            <IoTicket size={15} className="w-6 h-6" />
          ) : (
            <FaLongArrowAltLeft size={15} className="w-6 h-6" />
          )}
        </button>
      </div>

      <div class="grid grid-cols-2 gap-4 justify-between mb-5 mx-8">
        <div class="flex justify-start">
          <button className="flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white font-unbounded py-3 hover:border-orange-200  hover:text-orange-200	">
          <GrLinkPrevious  className="w-8 h-8" />
          </button>
        </div>
        <div class="flex justify-end">
          <button className="flex items-center px-6 py-1  text-white text-3xl font-bold rounded-full border-2 border-white  font-unbounded py-3 hover:border-orange-200  hover:text-orange-200	">
          <GrLinkNext  className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section;
