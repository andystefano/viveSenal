import { MdTripOrigin } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function ViveFooter({ minHeight }) {
  return (
    <footer className="bg-cream py-10 px-10">
      <div
        class="grid grid-cols-6 grid-rows-2 gap-1"
        style={{ gridTemplateRows: "auto 2fr" }}
      >
        <div class="col-span-1">
          <div class="flex items-start">
            <span class="text-pink-400 ">
              <MdTripOrigin size={25} />
            </span>
            <div class="text-black  font-libre-franklin  ml-2 font-sd text-left">
              Un proyecto de
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex items-start">
            <span class="text-pink-400 ">
              <MdTripOrigin size={25} />
            </span>
            <div class="text-black  font-libre-franklin  ml-2 font-sd text-left">
              Presentado por
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex items-start">
            <span class="text-pink-400 ">
              <MdTripOrigin size={25} />
            </span>
            <div class="text-black  font-libre-franklin  ml-2 font-sd text-left">
              Colaboran
            </div>
          </div>
        </div>
        <div class="col-span-1"> </div>
        <div class="col-span-1 row-span-2">
          <img alt="Correo de contacto" src="images/email.png" />
        </div>
        <div class="col-span-1 row-span-1">
        </div>
        <div class="col-span-1">
          <img alt="Fundación Antenna" src="images/logoAntennaBlack.png" />
        </div>
        <div class="col-span-1">
          <img alt="BGT Pactual" src="images/logoBGTPactualBlack.png" />
        </div>
        <div class="col-span-1">
          <img alt="LOA Cerveceria" src="images/logoLOABlack.png" />
        </div>
        <div class="col-span-1"></div>
        <div class="col-span-1 ">
          <div class="flex items-center justify-center  mt-4">
            <div class="p-4" size={30}><a href="https://web.facebook.com/antennaorg/"><FaXTwitter/></a></div>
            <div class="p-4" size={30}><a href="https://www.instagram.com/antennaorg/"><FaInstagram/></a></div>
            <div class=" p-4" size={30}><a href="https://web.facebook.com/antennaorg/"><FaFacebookF/></a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ViveFooter;
