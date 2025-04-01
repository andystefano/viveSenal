import { MdTripOrigin } from "react-icons/md";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function ViveFooter({ minHeight }) {
  return (
    <footer className="bg-black py-4 sd:py-10 md:py-10 lg:py-10 xl:py-10 px-4 sd:px-10 md:px-10 lg:px-10 xl:px-10">
      <div className="flex w-full block sd:hidden sm:hidden lg:hiddden xl:hidden">

      <div className="w-1/2">
      
      <img src="/images/logos/footer.png" class="w-full" />
            <p class="text-white text-xs text-left mt-2 " style={{fontSize: '0.73rem'}}>
              @ 2025, SEÑAL. Todos los derechos reservados.
            </p>

      </div>
      <div className="w-1/2 grid grid-cols-[auto_1fr] items-center justify-end gap-2 text-white p-1 pl-8  text-left">
  <FaInstagram size={32} />
  <div>
    <div>Contáctenos</div>
    <div>señal@antenna.cl</div>
  </div>
</div>



      </div>
      <div class="flex w-full ">
        <div class="w-full hidden sd:block sm:block lg:block x:block sd:w-1/2  sm:w-1/2  lg:w-1/2 xl:w-1/2">
          <div class="flex flex-col items-start ">
            <img src="/images/logos/footer.png" class="w-4/5" />
            <p class="text-white text-2xl text-center mt-2 ml-4" >
              @ 2025, SEÑAL. Todos los derechos reservados.
            </p>

            <div className="flex w-full text-white font-unbounded text-2xl mt-5">
              {/* Columna Izquierda */}
              <div className="w-4/5 text-left">
                <div>Contactanos:</div>
                <div>señal@antenna.cl</div>
              </div>
              {/* Columna Derecha */}
              <div className="w-1/5 text-left flex justify-start items-center">
                <FaInstagram size={50} />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sd:mt-0 sm:mt-0  lg:mt-0  xl:mt-0  w-full sd:w-1/2  sm:w-1/2  lg:w-1/2 xl:w-1/2 text-center">
          <img src="/images/logos/footer_movilydesk.png" />
        </div>
      </div>
    </footer>
  );
}

export default ViveFooter;
