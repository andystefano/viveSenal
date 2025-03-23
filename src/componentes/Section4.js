import { MdTripOrigin } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoTicket } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Section({ minHeight }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
    id="QueTeEspera"
      className="border-t border-black relative overflow-hidden pr-4 pb-4 sd:pb-32 md:pb-32 lg:pb-32 xl:pb-32	"
      style={{
        position: "relative",
        backgroundImage: "url('./images/t4.png')",
        backgroundSize: "cover",
        minHeight: `${minHeight}px`,
        ...(window.innerWidth < 640 && { backgroundPositionX: '1044px' })
      }}
    >
 
 
    </section>
  );
}

export default Section;
