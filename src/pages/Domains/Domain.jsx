import CloudSection from "./CloudSection"
import ExpertiseSection from "./ExpertiseSection"
import Hero from "./Hero"
import TreeSection from "./TreeSection"

function Domain() {
  

  return (
    <>
     <div className=" global-zoom viewport-container">
      <div className="viewport-scale-wrapper">
         <Hero/>  
      <CloudSection/>  
      <ExpertiseSection/>
      <TreeSection/>
      </div>
      </div>
    </>
  )
}

export default Domain
