import AcordeonTab from "./AcordeonTab.js";


function Section({ minHeight }) {
  return (
    <section id="faq" className="bg-black">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="pt-20 mb-6 text-4xl font-normal tracking-tight text-center text-cream lg:mb-8 lg:text-4xl font-unbounded">
          PREGUNTAS FRECUENTES
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion"
          >
            <AcordeonTab titulo={'¿Qué es SEÑAL?'} contenido={'SEÑAL es un programa continuo de encuentros con arte y música, que te invitan a recorrer la ciudad mientras conoces artistas, creadores, músicos, DJs y distintos espacios culturales en Santiago.'} />
            <AcordeonTab titulo={'¿Qué ocurre en los encuentros SEÑAL?'} contenido={'Cada experiencia SEÑAL está pensada en 3 momentos: Una conversación cercana que te permitirá conocer más sobre los artistas y creadores que visitemos. Una experiencia musical en vivo conectada con lo que estarás viendo. Una activación con nuestras marcas colaboradoras, pensada para que puedas compartir y disfrutar de estas instancias únicas.'} />
            <AcordeonTab titulo={'¿Cuáles son los horarios y días de SEÑAL?'} contenido={'Los encuentros se realizan de 19:30 a 22:00 hrs, en días de semana.'} />
            <AcordeonTab titulo={'¿Cuántos encuentros se realizan en SEÑAL?'} contenido={'Cada ciclo o programa anual incluye 10 encuentros: 8 abiertos al público y 2 exclusivos para socios(as) SEÑAL.'} />
            <AcordeonTab titulo={'¿Cómo puedo participar en SEÑAL o ser socio(a) anual?'} contenido={'Para participar de un encuentro individual, puedes comprar tu ticket a través de tickets.vivesenal.cl, seleccionando la opción “1 encuentro”. Si quieres ser socio(a) SEÑAL y acceder a todos los encuentros (válido para dos personas), puedes ingresar al mismo sitio y seleccionar la opción “10 encuentros”. Si necesitas más información, puedes escribirnos a senal@antenna.cl.'} />
            <AcordeonTab titulo={'¿Qué incluye el ticket de un encuentro SEÑAL?'} contenido={'Acceso personal e intransferible al encuentro que elijas.'} />
            <AcordeonTab titulo={'¿Qué incluye la membresía anual SEÑAL?'} contenido={'Acceso para dos personas a los 10 encuentros SEÑAL. Invitaciones a distintas visitas guiadas realizadas por Fundación Antenna en diversos espacios culturales de Santiago. Suscripción automática al boletín “Antenna Recomienda”, con recomendaciones de actividades culturales en Chile y el mundo.'} />
            <AcordeonTab titulo={'¿Qué logramos gracias a tu apoyo?'} contenido={'Al comprar un ticket o hacerte socio(a) anual de SEÑAL, estarás apoyando a diversos artistas, creadores y espacios culturales, contribuyendo a visibilizar sus proyectos, ampliar su alcance y activar la circulación del arte. Además, estarás aportando directamente a Fundación Antenna en el desarrollo de iniciativas y proyectos que buscan fortalecer el ecosistema artístico y cultural en Chile.'} />
                     
        </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
