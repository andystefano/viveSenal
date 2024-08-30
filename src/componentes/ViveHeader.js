function ViveHeader() {
  return (
    <header className=" w-full px-7 py-7">
      <nav className="  border-gray-200 py-2.5 ">
        <div className="flex flex-wrap items-start justify-between mx-auto">
          <a href="https://www.antenna.cl" className="flex items-center">
            <img
              src="./images/logoAntenna.png"
              className="h-6 mr-3 sm:h-14"
              alt=" Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="https://www.btgpactual.cl/"
              className=" focus:ring-4 font-medium rounded-lg text-sm lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none "
            >
              <img className="h-8 mr-3 sm:h-14" alt="Señal es presentado por BTG Pactual" src="images/btlLogoTop.png" />
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir Menú</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                 ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                   
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between  items-start  hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-normal lg:flex-row lg:space-x-14 lg:mt-0">
              <li>
                <a
                  href="#programacion"
                  className="relative text-xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 lg:border-0 lg:p-0"
                >
                  <span className="absolute inset-0 opacity-0 hover:opacity-100">
                    programación
                  </span>
                  <span className="opacity-100">programación</span>
                </a>
              </li>
              <li>
                <a
                  href="#QueTeEspera"
                  className="relative text-xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 lg:border-0 lg:p-0"
                >
                  <span className="absolute inset-0 opacity-0 hover:opacity-100">
                    esto es señal
                  </span>
                  <span className="opacity-100">esto es señal</span>
                </a>
              </li>
              <li>
                <a
                  href="#tickets"
                  className="relative text-xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 lg:border-0 lg:p-0"
                >
                  <span className="absolute inset-0 opacity-0 hover:opacity-100">
                    tickets
                  </span>
                  <span className="opacity-100">participa</span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="relative text-xl block py-2 pl-3 pr-4 text-white border-b border-gray-100 lg:border-0 lg:p-0"
                >
                  <span className="absolute inset-0 opacity-0 hover:opacity-100">
                    FAQ
                  </span>
                  <span className="opacity-100">FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default ViveHeader;
