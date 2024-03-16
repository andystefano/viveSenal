
function Section({minHeight}) {
  return (  <section class="bg-dark-senal">
  <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
      <h2 class="pt-20 mb-6 text-5xl font-normal tracking-tight text-left text-color-claro-senal lg:mb-8 lg:text-4xl font-unbounded">PREGUNTAS FRECUENTES</h2>
      <div class="max-w-screen-md mx-auto">
          <div id="accordion-flush" data-accordion="collapse" data-active-classes="dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              <h3 id="accordion-flush-heading-1">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Qué ocurre en SEÑAL?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-1"  class="hidden"  aria-labelledby="accordion-flush-heading-1">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal"> is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                  </div>
              </div>
              <h3 id="accordion-flush-heading-2">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Cuándo ocurre?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal"> is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                      <p class="mb-2 text-color-claro-senal">Check out the <a href="#" class="text-purple-600 dark:text-purple-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from .</p>
                  </div>
              </div>
              <h3 id="accordion-flush-heading-3">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Cuáles son los horarios?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal">The main difference is that the core components from  are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-color-claro-senal">However, we actually recommend using both ,  Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  </div>
              </div>
              <h3 id="accordion-flush-heading-4">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Cómo puedo comprar un ticket?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal">The main difference is that the core components from   are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that  relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-color-claro-senal">However, we actually recommend using both ,   Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  </div>
              </div>
              <h3 id="accordion-flush-heading-4">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Qué incluye mi ticket?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal">The main difference is that the core components from  are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that  relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-color-claro-senal">However, we actually recommend using both ,  Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  </div>
              </div>  
              
              <h3 id="accordion-flush-heading-4">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Por qué la relación entre arte y música?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal">The main difference is that the core components from  are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that  relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-color-claro-senal">However, we actually recommend using both ,  Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  </div>
              </div>                      

              <h3 id="accordion-flush-heading-4">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Qué se hace con mi donación?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal">The main difference is that the core components from  are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that  relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-color-claro-senal">However, we actually recommend using both ,  Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  </div>
              </div> 

              <h3 id="accordion-flush-heading-4">
                  <button type="button" class="border border-pink-500 rounded-full flex items-center justify-between w-full py-5 font-medium text-left text-gray-900" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                      <span class="text-color-claro-senal font-medium text-center w-full text-2xl">¿Puedo ir a una sola experiencia?</span>
                      <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </h3>
              <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p class="mb-2 text-color-claro-senal">The main difference is that the core components from  are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that  relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                      <p class="mb-2 text-color-claro-senal">However, we actually recommend using both ,  Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  </div>
              </div>                                          

          </div> 
      </div>               
  </div>
</section>
  );
}

export default Section;
