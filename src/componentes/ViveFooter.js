import { FaInstagram } from "react-icons/fa";
import footerMovil from "../images/footer/movil.png";

function ViveFooter() {
  return (
    <footer className="bg-black py-4 sd:py-10 md:py-10 lg:py-10 xl:py-10 px-4 sd:px-10 md:px-10 lg:px-10 xl:px-10">
      
      <div className="w-full sd:hidden md:hidden lg:hidden xl:hidden">
        <div className="flex w-full mb-4">
          <div className="w-1/2">
            <img src="/images/logos/footer.png" alt="Logo Señal" className="w-full" />
            <p
              className="text-white text-xs text-left mt-2 text-[#e9eedc]"
              style={{ fontSize: "0.73rem" }}
            >
              @ 2026, SEÑAL. Todos los derechos reservados.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center text-white p-1 pl-8 pt-1 text-center text-[#e9eedc]">
            <FaInstagram size={32} />
            <div>
              <div>Contáctenos</div>
              <div>senal@antenna.cl</div>
            </div>
          </div>
        </div>
        <img
          src={footerMovil}
          alt=""
          className="w-full max-w-full block mx-auto"
        />
      </div>
      <div className="flex w-full ">
        <div className="w-full hidden sd:block sm:block lg:block xl:block sd:w-1/2  sm:w-1/2  lg:w-1/2 xl:w-1/2">
          <div className="flex flex-col items-start ">
            <img src="/images/logos/footer.png" className="w-3/5 mt-5" alt="Logo" />
            <p className="text-white text-xl text-center mt-2 ml-4" >
              @ 2026, SEÑAL. Todos los derechos reservados.
            </p>

            <div className="flex w-full text-white font-libre-franklin text-2xl mt-5">
  {/* Columna Única */}
  <div className="w-full flex justify-between items-center">
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <span>Contáctanos:</span>
        <a className="hidden sd:block md:block lg:block xl:block" style={{marginLeft:'45%'}}  href="https://www.instagram.com/vivesenal/" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>

        <a className="block sd:hidden md:hidden lg:hidden xl:hidden" href="https://www.instagram.com/vivesenal/" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>

      </div>
      <div>senal@antenna.cl</div>
    </div>
  </div>
</div>

          </div>
        </div>
        <div className="mt-5 sd:mt-0 sm:mt-0 lg:mt-0 xl:mt-0 w-full sd:w-1/2 sm:w-1/2 lg:w-1/2 xl:w-1/2 text-center">
          <img
            className="hidden sd:block md:block lg:block xl:block"
            src="/images/logos/FooterDesk.png"
            alt="Logos Colaboradores"
          />
        </div>
      </div>
    </footer>
  );
}

export default ViveFooter;
