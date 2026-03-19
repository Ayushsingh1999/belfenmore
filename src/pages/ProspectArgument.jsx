import Hero from "../ProspectAugment/Hero";
import HeroSection from "../ProspectAugment/HeroSection";
import EnvisionSection from "../ProspectAugment/EnvisionSection";
import JourneySection from "../ProspectAugment/JourneySection";
import ServicesSection from "../ProspectAugment/ServicesSection";

const ProspectArgument = () => {
  return (
    <>
     <Hero />
     <div className=" global-zoom viewport-container">
      <div className="viewport-scale-wrapper">
    <ServicesSection />
    <JourneySection />
    <HeroSection />
    <EnvisionSection />
      </div>
      </div>
    </>
  );
};

export default ProspectArgument;
