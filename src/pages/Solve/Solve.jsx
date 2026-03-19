import NatureHero from "./NatureHero"
import TailoredSection from "./TailoredSection"
import TreeSection from "./TreeSection"
import ValueMapSection from "./ValueMapSection"


function Solve() {

  return (
    <>
      <div className="global-zoom viewport-container">
      <div className="viewport-scale-wrapper">
        <TailoredSection/>
      <NatureHero/>
      <ValueMapSection/>
      <TreeSection/>
      </div>
      </div>
    </>
  )
}

export default Solve
