// import Hero from "../ProspectAugment/Hero";
// import HeroSection from "../ProspectAugment/HeroSection";
// import EnvisionSection from "../ProspectAugment/EnvisionSection";
// import JourneySection from "../ProspectAugment/JourneySection";
// import ServicesSection from "../ProspectAugment/ServicesSection";

// const ProspectArgument = () => {
//   return (
//     <>
//      <Hero />
//      <div className=" global-zoom viewport-container">
//       <div className="viewport-scale-wrapper">
//     <ServicesSection />
//     <JourneySection />
//     <HeroSection />
//     <EnvisionSection />
//       </div>
//       </div>
//     </>
//   );
// };

// export default ProspectArgument;

import { lazy, Suspense } from "react";
import { useViewport } from "../hooks/useViewPort";

// Desktop components
const Hero = lazy(() => import("../ProspectAugment/Hero"));
const HeroSection = lazy(() => import("../ProspectAugment/HeroSection"));
const EnvisionSection = lazy(() => import("../ProspectAugment/EnvisionSection"));
const JourneySection = lazy(() => import("../ProspectAugment/JourneySection"));
const ServicesSection = lazy(() => import("../ProspectAugment/ServicesSection"));

// Mobile component
const MobileProspect = lazy(() => import("../ProspectAugment/MobileProspect"))

const ProspectArgument = () => {
  const { isMobile, mounted } = useViewport();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? (
        <MobileProspect />
      ) : (
        <>
          <Hero />
          <div className="global-zoom viewport-container">
            <div className="viewport-scale-wrapper">
              <ServicesSection />
              <JourneySection />
              <HeroSection />
              <EnvisionSection />
            </div>
          </div>
        </>
      )}
    </Suspense>
  );
};

export default ProspectArgument;
