import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import React  from 'react';
import { useState } from 'react';

function AcordeonTab({titulo,contenido}) {
  const [openTab, setOpenTab] = useState(false);



  return (
    <div className="border border-pink-500 acordeon-radius px-4  mt-4">
            <div className="flex items-center ml-auto">
              <div
                className="text-black  font-unbounded  font-normal text-left w-11/12"
              >
                <h3 onClick={() => setOpenTab(!openTab)}  className="text-cream font-medium w-full text-base sd:text-2xl sm:text-2xl lg:text-2xl xl:text-2xl  py-5 font-medium text-left pl-5">
                {titulo}
                </h3>
              </div>
              {openTab===false && (
              <span className="text-white w-1/12 cursor-pointer">
                <TiPlus className={openTab ? 'hidden' : ''} size={30} onClick={() => setOpenTab(true)} />
              </span>)}
              {openTab && (
              <span className="text-white w-1/12 cursor-pointer">
                <TiMinus className={openTab ? '' : 'hidden'} size={30} onClick={() => setOpenTab(false)} />
              </span>)}
            </div>
              <div>

              {openTab && (
                      <div className=" pb-5">
                      <p       dangerouslySetInnerHTML={{ __html: contenido }}
 className="text-cream font-medium w-full text-base sd:text-xl md:text-xl lg:text-xl xl:text-xl py-3 font-medium text-left pl-3">                      
                      </p>
                    </div>
                    )}

                


              </div>
            </div>
  );
}

export default AcordeonTab;
