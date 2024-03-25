import React  from 'react';
import { MdTripOrigin } from "react-icons/md";


function Section({minHeight}) {

  return ( <section className="border-t border-black relative overflow-hidden" style={{ position: 'relative' }}>
  <img className="" src="./images/t5.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }} />

    
  <div className="" style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      color: 'white',
      zIndex: 2,
    }}>

<div className="flex">
<div className="w-4/12  p-4">
<h1 className="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8" style={{ 
      paddingTop: '2.5rem',
      paddingLeft: '3.75rem',
      color: 'black',
      fontWeight: 400,
      fontSize: '4.4rem',
      textAlign: 'left',
      lineHeight: '5.1rem',
    }}>¡HAZ TU <br /> DONACIÓN!</h1>

</div>
<div className="w-3/12  p-4">


<div
              className="text-red-500 font-libre-franklin max-w-300 rounded-full border-pink-400 ml-6  mt-1.5 transform  skew-y-[170deg] hover:skew-y-[175deg]"
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
              <p className="text-xl font-bold">
              Los tickets SEÑAL son personales e intransferibles y están activos hasta el 28 de febrero de 2025. 
              </p>
            </div>

</div>
<div className="w-5/12  p-4">
 

<p className="font-libre-franklin text-justify pl-4" style={{ 
      fontWeight: 400,
      color: 'black',
      fontSize: '1.3rem',
      lineHeight: '1.5rem',
      paddingTop: '3.3rem',
      paddingRight: '1.2rem',
    }}><strong>SEÑAL</strong> no es una fiesta ni un evento convencional. Es un espacio que que se crea una vez al mes y que facilita la creación de comunidad. <strong> Al aportar a SEÑAL estás apoyando los programas de Fundación Antenna que impactan a artistas y espacios culturales.</strong> </p>


</div>
</div>

<div className="w-full">

<div className="grid sd:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0  py-3 px-20 mx-20">
  <div className="p-4 text-center">
      
   <img className="" src="./images/ticketRosa.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }} />
  <div>
      <div className="grid grid-cols-1 gap-4 mx-1 my-1">
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  Acceso al <span className="font-bold">programa completo</span> de SEÑAL.
              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  <span className="font-bold">Visitas
                      Antenna</span> seleccionadas.
              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  <span className="font-bold">Obra edición
                      limitada</span> de uno de los artistas que hizo parte de la programación.
              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-pink-400  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left" style={{fontSize: '1.33rem'}}>
                  <span className="font-bold">Acceso
                      fiesta aniversario</span> Antenna.
              </div>
          </div>
      </div>
  </div>

  </div>
  <div className="p-4 text-center">
      
   <img className="" src="./images/ticketGreen.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }}/>
   <div>
      <div className="grid grid-cols-1 gap-4 mx-1 my-1">
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-green-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left" style={{ 
      fontSize: '1.33rem',
    }}>
                  Acceso a <span className="font-bold">6 encuentros</span> SEÑAL consecutivos.

              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-green-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left"  style={{ 
      fontSize: '1.33rem',
    }}>
                  <span className="font-bold">Visitas
                      Antenna</span> seleccionadas.
              </div>
          </div>
      </div>
  </div>

  </div>
  <div className="p-4 text-center">
      
   <img className="" src="./images/ticketRed.png" alt="imagen de fondo" style={{ 
      width: '100%',
      height: 'auto',
    }} />
   <div>
      <div className="grid grid-cols-1 gap-4 mx-1 my-1">
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-red-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left" style={{ 
      fontSize: '1.33rem',
    }}>
                  Acceso a <span className="font-bold">3 encuentros</span> SEÑAL consecutivos.
              </div>
          </div>
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-gray-700  mt-1.5">
              </span>
              <div className="text-red-500 font-libre-franklin italic  ml-2 font-light text-left text-xl">
                  Sí decides que quieres seguir haciendo parte después <br/> de esta prueba, tu pago inicial se cuenta como abono <br/> para seguir con el programa SEÑAL completo. 
              </div>
          </div>
      </div>
  </div>

  </div>
  <div className="p-4 text-center">
      
   <img className="" src="./images/ticketGray.png" alt="imagen de fondo"style={{width: '100%', height: 'auto'}} />
   <div>
      <div className="grid grid-cols-1 gap-4 mx-1 my-1">
          <div className="flex items-start">
              <span className="material-icons w-6 h-6 text-gray-700  mt-1.5">
                  <MdTripOrigin size={25} />
              </span>
              <div className="text-black  font-unbounded  ml-2 font-normal text-left"  style={{fontSize: '1.33rem'}}>
                  Acceso a <span className="font-bold">1 encuentros</span> SEÑAL.
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
