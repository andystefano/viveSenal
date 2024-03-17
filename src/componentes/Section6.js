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
            <AcordeonTab titulo={'¿Cuándo ocurre?'} contenido={'contenido 2'} />
            <AcordeonTab titulo={'¿Cuales son los horarios?'} contenido={'contenido 3'} />
            <AcordeonTab titulo={'¿Cómo puedo comprar un Ticket?'} contenido={'contenido 3'} />
            <AcordeonTab titulo={'¿Qué incluye mi ticket?'} contenido={'contenido 3'} />
            <AcordeonTab titulo={'¿Porque la relación entre arte y música?'} contenido={'contenido 3'} />
            <AcordeonTab titulo={'¿Qúe se hace con mi donación?'} contenido={'contenido 3'} />
            <AcordeonTab titulo={'¿Puedo ir a una sola experiencia?'} contenido={'contenido 3'} />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
