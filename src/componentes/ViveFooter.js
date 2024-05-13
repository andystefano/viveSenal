import { MdTripOrigin } from "react-icons/md";
import { FaTiktok  } from "react-icons/fa6";
import { FaLinkedin  } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function ViveFooter({ minHeight }) {
  return (
    <footer className="bg-cream py-4 sd:py-10 md:py-10 lg:py-10 xl:py-10 px-4 sd:px-10 md:px-10 lg:px-10 xl:px-10">
      <div
        className="grid grid-cols-3 sd:grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 grid-rows-2 gap-1"
        style={{ gridTemplateRows: "auto 2fr" }}
      >
        <div className="col-span-1">
          <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin className="text-base" />
            </span>
            <div className="text-black  font-libre-franklin   ml-1 sd:ml-2 md:ml-2 lg:ml-2 xl:ml-2  text-xs sd:font-sd md:font-sd lg:font-sd xl:font-sd text-left">
              Un proyecto de
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin  className="text-base"   />
            </span>
            <div className="text-black  font-libre-franklin ml-1 sd:ml-2 md:ml-2 lg:ml-2 xl:ml-2  text-xs sd:font-sd md:font-sd lg:font-sd xl:font-sd  text-left">
              Presentado por
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin  className="text-base"   />
            </span>
            <div className="text-black  font-libre-franklin   ml-1 sd:ml-2 md:ml-2 lg:ml-2 xl:ml-2  text-xs sd:font-sd md:font-sd lg:font-sd xl:font-sd text-left">
              Colaboran
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden sd:block md:block lg:block xl:block"> </div>
        <div className="col-span-1 row-span-2 hidden sd:block sm:block lg:block xl:block">
          <img alt="Correo de contacto" src="images/email.png" />
        </div>
        <div className="col-span-1 row-span-1  hidden sd:block md:block lg:block xl:block ">
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
        <div className="col-span-1 hidden sd:block md:block lg:block xl:block "></div>
        <div className="col-span-1 hidden sd:block md:block lg:block xl:block  ">
          <div className="flex items-center justify-center  mt-4">
          <div className="p-3"><a href="https://www.tiktok.com/@antennaorg"><FaTiktok className="text-base" size={30} /></a></div>
          <div className="p-3"><a href="https://www.linkedin.com/company/antennaorg/"><FaLinkedin className="text-base" size={30} /></a></div> 
            <div className="p-3"><a href="https://www.instagram.com/antennaorg/"><FaInstagram className="text-base" size={30} /></a></div>
            <div className=" p-3"><a href="https://web.facebook.com/antennaorg/"><FaFacebookF className="text-base" size={30} /></a></div>
          </div>
        </div>

        <div className="col-span-1npm start sd:block md:block lg:block xl:block  ">

        <div className="flex items-start">
            <span className="text-pink-400 ">
              <MdTripOrigin className="text-base" />
            </span>
            <div className="text-black  font-libre-franklin   ml-1 sd:ml-2 md:ml-2 lg:ml-2 xl:ml-2  text-xs sd:font-sd md:font-sd lg:font-sd xl:font-sd text-left">
              Apoyan
            </div>
          </div>

        <a href="https://www.liptonteas.com/our-brands/portfolio/lipton/?utm_source=Antenna&utm_medium=Antenna&utm_campaign=ViveSenal"><img alt="Lipton" src="images/lipton.png" /></a>
        </div>

        <div className="col-span-1 sd:block md:block lg:block xl:block  ">
        <a href="http://somosthesocias.com/?utm_source=Antenna&utm_medium=Antenna&utm_campaign=ViveSenal"><img alt="The Socias" src="images/the_socias.png" /></a>
        </div>

        <div className="col-span-1 hidden sd:block md:block lg:block xl:block  ">
        </div>

        <div className="col-span-1 hidden sd:block md:block lg:block xl:block  ">
        </div>

        <div className="col-span-1 hidden sd:block md:block lg:block xl:block  ">
        </div>

        <div className="col-span-1 hidden sd:block md:block lg:block xl:block  ">
        </div>


      </div>
      <div className="text-center  text-base font-bold block sd:hidden md:hidden lg:hidden xl:hidden">senal@antenna.cl</div>
    </footer>
  );
}

export default ViveFooter;
