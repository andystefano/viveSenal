import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import AcordeonTab from "./AcordeonTab.js";


function Section({ minHeight }) {
  return (
    <section class="bg-dark-senal">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 class="pt-20 mb-6 text-5xl font-normal tracking-tight text-left text-cream lg:mb-8 lg:text-4xl font-unbounded">
          PREGUNTAS FRECUENTES
        </h2>
        <div class="max-w-screen-md mx-auto">
          <div
            id="accordion"
          >
            <AcordeonTab titulo={'¿Qué ocurre en SEÑAL?'} contenido={'Cada experiencia SEÑAL tiene 3 momentos: una conversación para conocer a los creadores detrás de una exposición o proyecto que visitemos, una activación musical pensada específicamente para ese lugar y un espacio relajado para que puedas tomarte algo con los demás participantes.'} />
            <AcordeonTab titulo={'¿Cuándo ocurre?'} contenido={'Las experiencias SEÑAL se hacen una vez al mes. El primer ciclo tiene una duración de 11 experiencias. '} />
            <AcordeonTab titulo={'¿Cuales son los horarios?'} contenido={'Nuestros encuentros empiezan a las 20:00 hrs. y tienen una duración de 2 horas. Se hacen en días de semana.'} />
            <AcordeonTab titulo={'¿Cómo puedo comprar un Ticket?'} contenido={'En membresias.antenna.cl puede hacer tu donación, que te da opciones para pagar las distintas tiqueteras. '} />
            <AcordeonTab titulo={'¿Qué incluye mi ticket?'} contenido={'Tu ticket es personal e intransferible. Incluye el acceso a un número de experiencias, determinadas por el ticket que elijas. En algunos casos, tu ticket incluye la posibilidad de participar de Visitas Antenna mientras esté activa tu tiquetera.'} />
            <AcordeonTab titulo={'¿Porque la relación entre arte y música?'} contenido={'Para muchos artistas visuales la música es fundamental para su práctica. Sea como acompañante del trabajo de taller que desarrollan, inspiración o herramienta de creación paralela, es un espacio para la creatividad y el desarrollo que pocas veces se comparte con quienes visitan las exposiciones. En SEÑAL queremos dar cuenta de esta conexión y potenciarla, para poder darte una visita que involucre todos los sentidos.'} />
            <AcordeonTab titulo={'¿Qúe se hace con mi donación?'} contenido={'Al comprar un ticket o grupo de tickets para SEÑAL estas apoyando a los artistas y creadores que visitaremos, además de contribuir al funcionamiento de los demás programas de Fundación Antenna, los cuales promueven el desarrollo de arte público en todo Chile y el reconocimiento a artistas mujeres y de la tercera edad. '} />
            <AcordeonTab titulo={'¿Puedo ir a una sola experiencia?'} contenido={'SEÑAL está pensado como un programa de inmersión. Para que puedas conectar con el poder del arte, es necesario que tengas al menos 3 experiencias. Sí a pesar de esto quieres ir a una sola experiencia, puedes escribirnos a senal@antenna.cl y te contaremos si es posible hacerlo. En general tenemos un aforo muy reducido para garantizar una buena experiencia, así que esta opción no es posible en todos encuentros.'} />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
