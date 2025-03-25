import React, { useState, useEffect } from 'react';
// Importa todas las imágenes
import imagen1 from '../images/fotos/desk/1.png';
import imagen2 from '../images/fotos/desk/2.png';
import imagen3 from '../images/fotos/desk/3.png';
import imagen4 from '../images/fotos/desk/4.png';
import imagen5 from '../images/fotos/desk/5.png';
import imagen6 from '../images/fotos/desk/6.png';
import imagen7 from '../images/fotos/desk/7.png';
import imagen8 from '../images/fotos/desk/8.png';
import imagen9 from '../images/fotos/desk/9.png';
import imagen10 from '../images/fotos/desk/10.png';
import imagen11 from '../images/fotos/desk/11.png';
import imagen12 from '../images/fotos/desk/12.png';


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
<div className='w-full' 
  style={{
    backgroundImage: "url(images/fondos/3_desk.png)",
    backgroundSize: "cover",
    backgroundColor: "white",
  }}
>

<p className='mx-auto text-4xl text-center font-unbounded  px-10 py-20'>CON TU APORTE <span className='font-bold'>SEÑAL</span> ESTÁS APOYANDO A<br/>
&nbsp;<span className='font-bold'>FUNDACIÓN ANTENNA</span> EN EL DESARROLLO<br/>
DE NUEVOS PROYECTOS QUE BENEFICIAN A<br/>
ARTISTAS Y ESPACIOS CULTURALES.</p>

</div>
    </>
  );
};

export default Section4;