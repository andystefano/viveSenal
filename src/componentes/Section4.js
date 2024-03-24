import { MdTripOrigin } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({ minHeight }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      class="border-t border-black relative overflow-hidden"
      style={{
        position: "relative",
        backgroundImage: "url('./images/t4.png')",
        backgroundSize: "cover",
        minHeight: `${minHeight}px`,
      }}
    >
          <button
              className="z-10  absolute top-0 right-14 flex items-center px-6 py-1 bg-black text-white text-2xl font-normal	 rounded-full border-2 border-pink-500 mt-8 font-unbounded"
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
            ¿QUÉ TE ESPERA EN ESTA <br className="hidden lg:block" /> ÉPICA
            EXPERIENCIA?
          </h1>
        </div>
      </div>

      <div class="flex mt-10">
        <div class="lg:w-5/12 flex items-center justify-center sd:hidden ">

        <div
              class="text-white font-libre-franklin max-w-300 rounded-full  ml-6  mt-1.5 transform  skew-y-[170deg] hover:skew-y-[175deg]"
              style={{
                maxWidth: "338px",
                border: "2px solid white",
                padding: "25px",
                borderRadius: "50%",
                paddingLeft: "50px",
                paddingRight: "50px",
                textAlign: "center",
              }}
            >
              <p class="text-xl font-bold">
              <strong>Arte alucinante:</strong> déjate envolver por las obras más vanguardistas y entretenidas que hay en Santiago. 
              </p>
            </div>

        </div>
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
                  Espacios para
                  <br /> conversar:
                </h1>
              </div>
            </div>
            <div class="flex items-center ml-1">
              <span
                class="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                  Lo más interesante delarte son las conversaciones que éste
                  inspira, en SEÑAL conocerás a los creadores detrás de las
                  obras..{" "}
                </p>
              </div>
            </div>

            <div class="flex items-center ml-1">
              <span
                class="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                  lo más interesante del arte son las conversaciones que éste
                  inspira. Además de conocer a los creadores, en SEÑAL se crea
                  un espacio para que puedas compartir con los demás
                  participantes.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ml-52">
        <div className="flex items-center">
          <img src="images/LOA_white.png" className="h-48 mt-12" alt="" />
        </div>

        <div class="lg:flex lg:mt-10 mb-10 mt-4">
          <div class="lg:w-12/12  sd:w-full">
            <div class="flex items-center ml-auto mt-6">
              <span class="text-white  mt-1.5" style={{ marginLeft: "2.3rem" }}>
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <h1 class="text-white text-4xl font-unbounded text-left mt-4">
                  Disfruta de <br />
                  cerveza LOA:
                </h1>
              </div>
            </div>
            <div class="flex items-center ml-1">
              <span
                class="text-transparent opacity-0  mt-1.5"
                style={{ marginLeft: "2.3rem" }}
              >
                <MdTripOrigin size={30} />
              </span>
              <div
                className="text-black  font-unbounded  ml-2 font-normal text-left"
                style={{ fontSize: "1.33rem" }}
              >
                <p class="font-unbounded text-base text-white  text-left w-8/12">
                  para que puedas compartir con los<br/> artistas y demás
                  participantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
