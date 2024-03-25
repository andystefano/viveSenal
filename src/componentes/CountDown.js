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
    <div id="countDown" className="w-full flex items-center justify-start flex-col  ">
      <div className="sm:w-2/2 text-white">
        <div className="grid grid-cols-7 mx-auto sm:min-w-[430px] md:min-w-[430px] lg:min-w-[430px] xl:min-w-[430px] 2xl:min-w-[430px]">
          <div className="text-center flex-grow">
            <div className="text-4xl font-unbounded mb-1 font-extralight" id="days">
              00
            </div>
            <div className="text-xs font-bold">DÍAS</div>
          </div>

          <div className="flex items-center justify-center flex-grow">
            <div className="w-4 h-4  rounded-full  border-4 border-solid border-pink-400 mb-4"></div>
          </div>

          <div className="text-center flex-grow">
            <div className="text-4xl font-unbounded mb-1 font-extralight" id="hours">
             00
            </div>
            <div className="text-xs font-bold">HRS</div>
          </div>

          <div className="flex items-center justify-center flex-grow">
            <div className="w-4 h-4  rounded-full  border-4 border-solid border-pink-400 mb-4"></div>
          </div>

          <div className="text-center flex-grow">
            <div className="text-4xl font-unbounded mb-1 font-extralight" id="minutes">
              00
            </div>
            <div className="text-xs font-bold">MIN</div>
          </div>

          <div className="flex items-center justify-center flex-grow">
            <div className="w-4 h-4  rounded-full  border-4 border-solid border-pink-400 mb-4"></div>
          </div>

          <div className="text-center flex-grow">
            <div className="text-4xl font-unbounded mb-1  font-extralight" id="seconds">
              00
            </div>
            <div className="text-xs font-bold">SEG</div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <img
          src="images/logoContador.gif"
          className="max-w-full md:max-w-[75%] lg:max-w-[70%] sm:max-w-[70%]  mx-auto"
        />
      </div>
    </div>
  );
}

export default CountDown;
