import React  from 'react';
import { MdTripOrigin } from "react-icons/md";


function Section({minHeight}) {

  return ( <section class="border-t border-black relative overflow-hidden" style={{ position: 'relative' }}>
  <img class="" src="./images/t5.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }} />

    
  <div class="" style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      color: 'white',
      zIndex: 2,
    }}>

<div class="flex">
<div class="w-4/12  p-4">
<h1 class="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8" style={{ 
      paddingTop: '2.5rem',
      paddingLeft: '3.75rem',
      color: 'black',
      fontWeight: 400,
      fontSize: '4.4rem',
      textAlign: 'left',
      lineHeight: '5.1rem',
    }}>¡HAZ TU <br /> DONACIÓN!</h1>

</div>
<div class="w-3/12  p-4">


<div
              class="text-red-500 font-libre-franklin max-w-300 rounded-full border-pink-400 ml-6  mt-1.5 transform  skew-y-[170deg] hover:skew-y-[175deg]"
              style={{
                maxWidth: "338px",
                border: "2px solid red",
                padding: "25px",
                borderRadius: "50%",
                paddingLeft: "50px",
                paddingRight: "50px",
                textAlign: "center",
              }}
            >
              <p class="text-xl font-bold">
              Los tickets SEÑAL son personales e intransferibles y están activos hasta el 28 de febrero de 2025. 
              </p>
            </div>

</div>
<div class="w-5/12  p-4">
 

<p class="font-libre-franklin text-justify pl-4" style={{ 
      fontWeight: 400,
      color: 'black',
      fontSize: '1.3rem',
      lineHeight: '1.5rem',
      paddingTop: '3.3rem',
      paddingRight: '1.2rem',
    }}><strong>SEÑAL</strong> no es una fiesta ni un evento convencional. Es un espacio que que se crea una vez al mes y facilita la creación de comunidad y la promoción del arte. Al hacer parte de SEÑAL no solo estás pudiendo acceder a una experiencia transformadora: <strong>tu donación está apoyando los programas de Fundación Antenna que impactan a personas en todo Chile</strong>. </p>


</div>
</div>

<div class="w-full">

<div class="grid sd:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0  py-3 px-20 mx-20">
  <div class="p-4 text-center">
      
   <img class="" src="./images/ticketRosa.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }} />
  <div>
      <div class="grid grid-cols-1 gap-4 mx-1 my-1">
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  Acceso al <span class="font-bold">programa completo</span> de SEÑAL.
              </div>
          </div>
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  <span class="font-bold">Visitas
                      Antenna</span> seleccionadas.
              </div>
          </div>
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  <span class="font-bold">Obra edición
                      limitada</span> de uno de los artistas que hizo parte de la programación.
              </div>
          </div>
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  <span class="font-bold">Acceso
                      fiesta aniversario</span> Antenna.
              </div>
          </div>
      </div>
  </div>

  </div>
  <div class="p-4 text-center">
      
   <img class="" src="./images/ticketGreen.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }}/>
   <div>
      <div class="grid grid-cols-1 gap-4 mx-1 my-1">
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-green-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left" style={{ 
      fontSize: '1.33rem',
    }}>
                  Acceso a <span class="font-bold">6 encuentros</span> SEÑAL consecutivos.

              </div>
          </div>
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-green-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left"  style={{ 
      fontSize: '1.33rem',
    }}>
                  <span class="font-bold">Visitas
                      Antenna</span> seleccionadas.
              </div>
          </div>
      </div>
  </div>

  </div>
  <div class="p-4 text-center">
      
   <img class="" src="./images/ticketRed.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }} />
   <div>
      <div class="grid grid-cols-1 gap-4 mx-1 my-1">
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-red-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left" style={{ 
      fontSize: '1.33rem',
    }}>
                  Acceso a <span class="font-bold">3 encuentros</span> SEÑAL consecutivos.
              </div>
          </div>
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-gray-700  mt-1.5">
              </span>
              <div class="text-red-500 font-libre-franklin italic  ml-2 font-light text-left text-xl">
                  Sí decides que quieres seguir haciendo parte después <br/> de esta prueba, tu pago inicial se cuenta como abono <br/> para seguir con el programa SEÑAL completo. 
              </div>
          </div>
      </div>
  </div>

  </div>
  <div class="p-4 text-center">
      
   <img class="" src="./images/ticketGray.png" alt="imagen de fondo"style={{width: '100%', height: 'auto'}} />
   <div>
      <div class="grid grid-cols-1 gap-4 mx-1 my-1">
          <div class="flex items-start">
              <span class="material-icons w-6 h-6 text-gray-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div class="text-black  font-unbounded  ml-2 font-normal text-left"  style={{fontSize: '1.33rem'}}>
                  Acceso a <span class="font-bold">1 encuentros</span> SEÑAL.
              </div>
          </div>

      </div>
  </div>

  </div>
</div>

</div>


<img src='images/2024_negro_horizontal.png' alt='' className='absolute bottom-7 right-10 h-20'/>

</div>



</section> );
}

export default Section;