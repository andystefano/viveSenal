import React from "react";

function Section({ minHeight }) {
  return (
    <section
      id="tickets"
      className="sd:pd-0 md:pd-0 lg:pd-0 xl:pd-0 relative overflow-hidden"
      style={{ backgroundColor: "#eaeedd" }}
    >
      <div className="flex justify-center">
        <h1 className="flex items-center mt-8 mx-7 mb-4 text-5xl sd:text-5xl sm:text-5xl lg:text-5xl xl:text-6xl leading-none text-black text-center font-unbounded font-normal">

        <img
            src="images/decoracion/2026_negro.png"
            className="h-11 w-auto mx-2  hidden sd:block md:block lg:block xl:block"
            alt="2026"
          />
          <img
            src="images/decoracion/senal-deco-black.png"
            className="h-4 sd:h-11 w-auto mx-2 "
            alt="Decoración"
          />
          TICKETS
          <img
            src="images/decoracion/senal-deco-black.png"
            className="h-4 sd:h-11 w-auto mx-2"
            alt="Decoración"
          />
        <img
            src="images/decoracion/2026_negro.png"
            className="h-11 w-auto mx-2  hidden sd:block md:block lg:block xl:block "
            alt="2026"
          />          
        </h1>
      </div>

      <div
        className="pt-0 sd:pt-0 md:pt-0 lg:pt-0 xl:pt-0 sd:p-14 sd:pb-5 md:p-11 md:pb-5 lg:p-11 lg:pb-5 xl:p-11 xl:pb-5"
        style={{
          backgroundColor: "#eaeedd",
          width: "100%",
          color: "white",
          zIndex: 2,
        }}
      >
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <div className="p-4 text-center w-full max-w-xl mx-auto">
              <a
                href="https://senal.evently.cl/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./images/ticket1.png?v=2"
                  alt="Ticket programa completo"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>

              <div>
              

                 
              </div>
            </div>

            <div className="p-4 text-center w-full max-w-xl mx-auto">
              <a
                href="https://tickets.xn--viveseal-i3a.cl/producto/tickets-programa-completo/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./images/ticketRosaMovil.png?v=2"
                  alt="Ticket 10 encuentros"
                  className="block sd:hidden md:hidden lg:hidden xl:hidden"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />

<img
                  src="./images/ticketRosa.png?v=1"
                  alt="Ticket 10 encuentros"
                  className="hidden sd:block md:block lg:block xl:block"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
