import SectionBlackMovil from "./SectionBlackMovil.js";
import SectionBlackDesk from "./SectionBlackDesk.js";


//SectionBlackMovil
function Section() {
 
  return (<section id="SectionBlack" className="border-t border-black ">
    <SectionBlackMovil/>
    <SectionBlackDesk/>
</section>);
}

export default Section;
