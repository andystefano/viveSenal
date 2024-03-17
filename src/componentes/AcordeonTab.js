import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import React  from 'react';
import { useState } from 'react';

function AcordeonTab({titulo,contenido}) {
  const [openTab, setOpenTab] = useState(false);



  return (
    <div className="border border-pink-500 acordeon-radius px-4  mt-4">
            <div class="flex items-center ml-auto">
              <div
                className="text-black  unbounded-200  font-normal text-left w-11/12"
                style={{ fontSize: "1.33rem" }}
              >
                <h3 class="text-cream font-medium w-full text-2xl  py-5 font-medium text-left text">
                {titulo}
                </h3>
              </div>
              {openTab===false && (
              <span class="text-white w-1/12 cursor-pointer">
                <TiPlus className={openTab ? 'hidden' : ''} size={30} onClick={() => setOpenTab(true)} />
              </span>)}
              {openTab && (
              <span class="text-white w-1/12 cursor-pointer">
                <TiMinus className={openTab ? '' : 'hidden'} size={30} onClick={() => setOpenTab(false)} />
              </span>)}
            </div>
              <div
                id="accordion-flush-body-2"
                aria-labelledby="accordion-flush-heading-2"
              >

              {openTab && (
                      <div class=" pb-5">
                      <p class="mb-2 text-cream text-m  font-libre-franklin">
                      {contenido}
                      </p>
                    </div>
                    )}

                


              </div>
            </div>
  );
}

export default AcordeonTab;
