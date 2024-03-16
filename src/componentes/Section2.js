import React  from 'react';
import { useState } from 'react';
import { MdTripOrigin } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({minHeight}) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      class="border-t border-black relative overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: "url(images/t2.png)",
        backgroundSize: "cover",
        minHeight: `${minHeight}px`,
      }}
    >
      <div class="grid grid-cols-2">
        <div class="col-span-1  p-4 ">
          <h1
            class="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-white text-left font-unbounded pt-8"
            style={{
              paddingTop: "4rem",
              paddingLeft: "5rem",
              color: "#ff799a",
            }}
          >
            ¡Bienvenido a <br />
            SEÑAL descubre <br />
            el poder del arte!
          </h1>

          <div>
            <div
              class="flex items-center"
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
                className="text-black  unbounded-200  ml-2 font-normal text-left"
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
                  <strong>SEÑAL</strong> es una experiencia que tiene <br /> 11
                  encuentros, que se realizan mensualmente y que inician en
                  abril de 2024 en distintos espacios de arte y creación en
                  Santiago de Chile.
                </p>
              </div>
            </div>
            <div
              class="flex items-center"
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
                className="text-black  unbounded-200  ml-2 font-normal text-left"
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
                  En los encuentros <strong>SEÑAL</strong>, podrás conocer a los
                  artistas detrás de las exposiciones más entretenidas y
                  conversar con otras personas como tú.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div class="col-span-1  p-4 "></div>
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
    </section>
  );
}

export default Section;
