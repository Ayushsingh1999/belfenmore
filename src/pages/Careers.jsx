import { lazy, Suspense } from "react";
import { useViewport } from "../hooks/useViewPort";

// Desktop components
const CareersSection = lazy(() => import("../Careers/CareersSection"));
const UniqueSection = lazy(() => import("../Careers/UniqueSection"));
const ChartCourseSection = lazy(() => import("../Careers/ChartCourseSection"));
const JourneyCareerSection = lazy(() => import("../Careers/JourneySection"));

// Mobile component
const MobileCareers = lazy(() => import("../Careers/MobileCareers"));

const Careers = () => {
  const { isMobile } = useViewport();

  return (
    <>
      <div className="global-zoom viewport-container">
        <div className="viewport-scale-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            {isMobile ? (
              <MobileCareers />
            ) : (
              <>
                <CareersSection />
                <UniqueSection />
                <ChartCourseSection />
                <JourneyCareerSection />
              </>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Careers;