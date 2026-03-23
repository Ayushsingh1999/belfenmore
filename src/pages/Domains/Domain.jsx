import { lazy, Suspense } from "react";
import { useViewport } from "../../hooks/useViewPort";

// Desktop components
const Hero = lazy(() => import("./Hero"));
const CloudSection = lazy(() => import("./CloudSection"));
const ExpertiseSection = lazy(() => import("./ExpertiseSection"));
const TreeSection = lazy(() => import("./TreeSection"));

// Mobile component
const DomainMobile = lazy(() => import("./DomainMobile"));

function Domain() {
  const { isMobile } = useViewport();

  return (
    <>
      <div className="global-zoom viewport-container">
        <div className="viewport-scale-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            {isMobile ? (
              <DomainMobile />
            ) : (
              <>
                <Hero />
                <CloudSection />
                <ExpertiseSection />
                <TreeSection />
              </>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Domain;