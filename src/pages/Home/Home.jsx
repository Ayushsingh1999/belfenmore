import { lazy, Suspense } from "react";
import { useViewport } from "../../hooks/useViewPort"
import Header from "../../components/Header";

const Screen = lazy(() => import("./Screen"));
const InerSection = lazy(() => import("./InerSection"));
const Footer = lazy(() => import("./Footer"));

const HomeMobile = lazy(() => import("./HomeMobile.jsx"));


function Home() {
  const { isMobile } = useViewport();

  return (
    <>
      <Header />

      <div className="global-zoom viewport-container">
        <div className="viewport-scale-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            {isMobile ? (
              <>
              <HomeMobile/>
              </>
            ) : (
              <>
                <Screen />
                <InerSection />
                <Footer />
              </>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Home;