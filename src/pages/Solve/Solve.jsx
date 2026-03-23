import { lazy, Suspense } from "react";
import { useViewport } from "../../hooks/useViewPort";

// Desktop components
const TailoredSection = lazy(() => import("./TailoredSection"));
const NatureHero = lazy(() => import("./NatureHero"));
const ValueMapSection = lazy(() => import("./ValueMapSection"));
const TreeSection = lazy(() => import("./TreeSection"));

// Mobile component
const MobileSolve = lazy(() => import("./SolveMobile"));

function Solve() {
  const { isMobile } = useViewport();

  return (
    <>
      <div className="global-zoom viewport-container">
        <div className="viewport-scale-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            {isMobile ? (
              <MobileSolve />
            ) : (
              <>
                <TailoredSection />
                <NatureHero />
                <ValueMapSection />
                <TreeSection />
              </>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Solve;