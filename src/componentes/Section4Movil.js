import React, { useState, useEffect } from 'react';
// Importa todas las imágenes
import imagen1 from '../images/fotos/movil/1.png';
import imagen2 from '../images/fotos/movil/2.png';
import imagen3 from '../images/fotos/movil/3.png';
import imagen4 from '../images/fotos/movil/4.png';
import imagen5 from '../images/fotos/movil/5.png';
import imagen6 from '../images/fotos/movil/6.png';
import imagen7 from '../images/fotos/movil/7.png';
import imagen8 from '../images/fotos/movil/8.png';
import imagen9 from '../images/fotos/movil/9.png';
import imagen10 from '../images/fotos/movil/10.png';
import imagen11 from '../images/fotos/movil/11.png';
import imagen12 from '../images/fotos/movil/12.png';


const Section4 = ({ minHeight }) => {
  const [imagenActual, setImagenActual] = useState(0);
  const imagenes = [
    imagen1, imagen2, imagen3, imagen4, imagen5, imagen6,
    imagen7, imagen8, imagen9, imagen10, imagen11, imagen12
  ];

  // Cambia la imagen cada 3 segundos (36s total para 12 imágenes)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  return (<>
    <div 
      className="fondo-animado"
      style={{
        backgroundImage: `url(${imagenes[imagenActual]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: `${minHeight}px`,
        transition: 'background-image 1s ease-in-out'
      }}
    >
      {/* Contenido adicional de tu sección */}
    </div>
<div className='w-full block sd:hidden md:hidden lg:hidden xl:hidden' 
  style={{
    backgroundImage: "url(images/fondos/3_movil.png)",
    backgroundSize: "cover",
    backgroundColor: "white",
  }}
>

<p className='mx-auto hidden sd:block sm:block lg:block xl:block text-base sd:text-4xl md:text-4xl lg:text-4xl  xl:text-4xl text-center font-unbounded  px-10 py-20' style={{lineHeight:'2.8rem'}}>CON TU APORTE <span className='font-bold'>SEÑAL</span> ESTÁS APOYANDO A<br/>
&nbsp;<span className='font-bold'>FUNDACIÓN ANTENNA</span> EN EL DESARROLLO<br/>
DE NUEVOS PROYECTOS QUE BENEFICIAN A<br/>
ARTISTAS Y ESPACIOS CULTURALES.</p>

<p className='mx-auto text-2xl block sd:hidden  sm:hidden  lg:hidden  xl:hidden  sd:text-4xl md:text-4xl lg:text-4xl  xl:text-4xl text-center font-unbounded  px-10 py-20'>CON TU APORTE <span className='font-bold'>SEÑAL</span> ESTÁS APOYANDO A
&nbsp;<span className='font-bold'>FUNDACIÓN ANTENNA</span> EN EL DESARROLLO
DE NUEVOS PROYECTOS QUE BENEFICIAN A
ARTISTAS Y ESPACIOS CULTURALES.</p>

</div>

<div className='w-full hidden sd:block md:block lg:block xl:block' 
  style={{
    backgroundImage: "url(images/fondos/3_desk.png)",
    backgroundSize: "cover",
    backgroundColor: "white",
  }}
>

<p className='mx-auto hidden sd:block sm:block lg:block xl:block text-base sd:text-4xl md:text-4xl lg:text-4xl  xl:text-4xl text-center font-unbounded  px-10 py-20' style={{lineHeight:'2.8rem'}}>CON TU APORTE <span className='font-bold'>SEÑAL</span> ESTÁS APOYANDO A<br/>
&nbsp;<span className='font-bold'>FUNDACIÓN ANTENNA</span> EN EL DESARROLLO<br/>
DE NUEVOS PROYECTOS QUE BENEFICIAN A<br/>
ARTISTAS Y ESPACIOS CULTURALES.</p>

<p className='mx-auto text-2xl block sd:hidden  sm:hidden  lg:hidden  xl:hidden  sd:text-4xl md:text-4xl lg:text-4xl  xl:text-4xl text-center font-unbounded  px-10 py-20'>CON TU APORTE <span className='font-bold'>SEÑAL</span> ESTÁS APOYANDO A
&nbsp;<span className='font-bold'>FUNDACIÓN ANTENNA</span> EN EL DESARROLLO
DE NUEVOS PROYECTOS QUE BENEFICIAN A
ARTISTAS Y ESPACIOS CULTURALES.</p>

</div>
    </>
  );
};

export default Section4;