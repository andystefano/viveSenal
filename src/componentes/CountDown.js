function CountDown() {

    function countdown() {
        const endDate = new Date("2024-04-01T00:00:00").getTime(); // Cambia esta fecha por la fecha deseada
        const now = new Date().getTime();
        const timeRemaining = endDate - now;
      
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
        document.getElementById("days").innerText = formatTime(days);
        document.getElementById("hours").innerText = formatTime(hours);
        document.getElementById("minutes").innerText = formatTime(minutes);
        document.getElementById("seconds").innerText = formatTime(seconds);
        console.log(formatTime(days))
      }
      
      function formatTime(time) {
        return time < 10 ? "0" + time : time;
      }
      
      // Llamar a la función countdown cada segundo
      setInterval(countdown, 1000);

  return (
    <div class="w-full flex items-center justify-center flex-col mt-10 ">
      <div class="sm:w-2/2 text-white">
        <div class="grid grid-cols-7 mx-auto sm:min-w-[430px] md:min-w-[430px] lg:min-w-[430px] xl:min-w-[430px] 2xl:min-w-[430px]">
          <div class="text-center flex-grow">
            <div class="text-4xl unbounded-200 mb-1" id="days">
              00
            </div>
            <div class="text-xs font-bold">DÍAS</div>
          </div>

          <div class="flex items-center justify-center flex-grow">
            <div class="w-4 h-4  rounded-full  border-4 border-solid border-pink-400 mb-4"></div>
          </div>

          <div class="text-center flex-grow">
            <div class="text-4xl unbounded-200 mb-1" id="hours">
             00
            </div>
            <div class="text-xs font-bold">HRS</div>
          </div>

          <div class="flex items-center justify-center flex-grow">
            <div class="w-4 h-4  rounded-full  border-4 border-solid border-pink-400 mb-4"></div>
          </div>

          <div class="text-center flex-grow">
            <div class="text-4xl unbounded-200 mb-1" id="minutes">
              00
            </div>
            <div class="text-xs font-bold">MIN</div>
          </div>

          <div class="flex items-center justify-center flex-grow">
            <div class="w-4 h-4  rounded-full  border-4 border-solid border-pink-400 mb-4"></div>
          </div>

          <div class="text-center flex-grow">
            <div class="text-4xl unbounded-200 mb-1" id="seconds">
              00
            </div>
            <div class="text-xs font-bold">SEG</div>
          </div>
        </div>
      </div>
      <div class="w-full p-4">
        <img
          src="images/logoContador.gif"
          class="max-w-full md:max-w-[547px] lg:max-w-[547px] sm:max-w-[547px]  mx-auto"
        />
      </div>
    </div>
  );
}

export default CountDown;
