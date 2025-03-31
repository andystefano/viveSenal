import { MdTripOrigin } from "react-icons/md";
import { FaTiktok  } from "react-icons/fa6";
import { FaLinkedin  } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function ViveFooter({ minHeight }) {
  return (
    <footer className="bg-black py-4 sd:py-10 md:py-10 lg:py-10 xl:py-10 px-4 sd:px-10 md:px-10 lg:px-10 xl:px-10">
 <div class="flex w-full ">
        <div class="w-1/2">
        
        <div class="flex flex-col items-start ">
    <img src="/images/logos/footer.png" class="w-4/5" />
    <p class="text-white text-2xl text-center mt-2 ml-4">@ 2025, SEÑAL. Todos los derechos reservados.</p>

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
        <div class="w-1/2 text-center">

 
        <img src="/images/logos/footer_movilydesk.png" />
 


        
        </div>
    </div>
    </footer>
  );
}

export default ViveFooter;
