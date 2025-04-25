
function Section() {
  const phoneNumber = '56994899597'; // sin el "+" ni espacios
  const message = 'Hola, me gustaria ser parte de la comunidad SEÑAL';
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="w-full  hidden sd:block md:block lg:block xl:block  text-center  text-3xl  font-unbounded  sd:text-4xl md:text-4xl lg:text-4xl xl:text-4xl  text-[#ff7bac] bg-black font-bold ">
            <a href={whatsappURL}   target="_blank" rel="noopener noreferrer">
    <img src="/images/logos/sec_desk.png" alt="Contactar" height="1.875rem" />
    </a>
    </div>
  );
}

export default Section;
