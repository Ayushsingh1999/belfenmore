import CapitaliseSection from "../Careers/CapitaliseSection";
import CareersSection from "../Careers/CareersSection";
import ChartCourseSection from "../Careers/ChartCourseSection";
import JourneyCareerSection from "../Careers/JourneySection";
import UniqueSection from "../Careers/UniqueSection";


const Careers = () => {
  return (
    <>
    <div className="global-zoom viewport-container">
      <div className="viewport-scale-wrapper">
    <CareersSection/>
    <UniqueSection/>
    <ChartCourseSection/>
    <JourneyCareerSection/>
      </div>
      </div>
    </>
  );
};

export default Careers;
