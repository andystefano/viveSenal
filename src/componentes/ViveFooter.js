import { MdTripOrigin } from "react-icons/md";
import { FaTiktok  } from "react-icons/fa6";
import { FaLinkedin  } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function ViveFooter({ minHeight }) {
  return (
    <footer className="bg-cream py-10 px-10">
      <div
        className="grid grid-cols-6 grid-rows-2 gap-1"
        style={{ gridTemplateRows: "auto 2fr" }}
      >
        <div className="col-span-1">
          <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin size={25} />
            </span>
            <div className="text-black  font-libre-franklin  ml-2 font-sd text-left">
              Un proyecto de
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin size={25} />
            </span>
            <div className="text-black  font-libre-franklin  ml-2 font-sd text-left">
              Presentado por
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin size={25} />
            </span>
            <div className="text-black  font-libre-franklin  ml-2 font-sd text-left">
              Colaboran
            </div>
          </div>
        </div>
        <div className="col-span-1"> </div>
        <div className="col-span-1 row-span-2">
          <img alt="Correo de contacto" src="images/email.png" />
        </div>
        <div className="col-span-1 row-span-1">
        </div>
        <div className="col-span-1">
          <a href="http://www.antenna.cl/?utm_source=Antenna&utm_medium=Antenna&utm_campaign=ViveSenal"><img alt="Fundación Antenna" src="images/logoAntennaBlack.png" /></a>
        </div>
        <div className="col-span-1">
          <a href="https://btgpactual.cl/?utm_source=Antenna&utm_medium=Antenna&utm_campaign=ViveSenal"><img alt="BGT Pactual" src="images/logoBGTPactualBlack.png" /></a>
        </div>
        <div className="col-span-1">
          <a href="https://cervezaloa.cl/?utm_source=Antenna&utm_medium=Antenna&utm_campaign=ViveSenal"><img alt="LOA Cerveceria" src="images/logoLOABlack.png" /></a>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1 ">
          <div className="flex items-center justify-center  mt-4">
          <div className="p-3"><a href="https://www.tiktok.com/@antennaorg"><FaTiktok className="text-base" size={30} /></a></div>
          <div className="p-3"><a href="https://www.linkedin.com/company/antennaorg/"><FaLinkedin className="text-base" size={30} /></a></div> 
            <div className="p-3"><a href="https://www.instagram.com/antennaorg/"><FaInstagram className="text-base" size={30} /></a></div>
            <div className=" p-3"><a href="https://web.facebook.com/antennaorg/"><FaFacebookF className="text-base" size={30} /></a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ViveFooter;
