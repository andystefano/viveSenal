function Section({minHeight}) {
  return (
    <section class="border-t border-black relative overflow-hidden" style={{
    minHeight: '100%',
    position: 'relative',
    backgroundImage: "url('./images/t4.png')",
    backgroundSize: 'cover'}}>
      <div>
        <div class="mr-auto place-self-center lg:col-span-7 text-white text-left">
          <h1 class="mb-4 text-4xl leading-none md:text-5xl xl:text-6xl text-black text-left font-unbounded pt-8" style={{ 
      paddingTop: '5.5rem',
      /* padding-left: '3.75rem', */ // Puedes comentar líneas usando esta sintaxis en JSX
      color: 'white',
      fontWeight: 400,
      fontSize: '4.4rem',
      textAlign: 'center',
    }}>
            ¿QUE TE ESPERA EN ESTA <br /> ÉPICA EXPERIENCIA?
          </h1>
        </div>
      </div>

      <div class="w-full mt-20">
        <div class="w-1/2"></div>
        <div class="w-1/2">
          <div class="w-full">
            <h1 class="text-white text-4xl font-unbounded text-left">
              Sesiones sonoras <br /> impresionantes:
            </h1>
            <p class="font-unbounded text-xl text-white  text-left">
              un complemento perfecto para el arte. Cada experiencia SEÑAL
              cuenta con música que dialogará con la exposición y va a llevarte
              a conectar de nuevas maneras.{" "}
            </p>
          </div>
          <div class="w-full">
            <h1 class="text-white text-4xl font-unbounded text-left">
              Sesiones sonoras <br /> impresionantes
            </h1>
            <p class="font-unbounded text-xl text-white  text-left">
              un complemento perfecto para el arte. Cada experiencia SEÑAL
              cuenta con música que dialogará con la exposición y va a llevarte
              a conectar de nuevas maneras.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
