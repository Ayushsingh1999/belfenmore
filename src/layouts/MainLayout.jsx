import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { useViewport } from "../hooks/useViewPort";

const MainLayout = () => {
  const { isMobile } = useViewport();

  return (
    <div className="bg-[#FFFDEC] min-h-screen overflow-x-hidden">
      <Header />

      {/* offset for fixed header */}
      <main className={isMobile ? "pt-[0px]" : "pt-[140px]"}>
        {/* ===== EFFECT WRAPPER (IMPORTANT) ===== */}
        <div className="relative">
          {/* CREAM OVERLAY — extended UPWARD */}
          <div
            className="
              pointer-events-none
              absolute
              -top-[50vh]
              left-0
              right-0
              bottom-0
              bg-[#fffdc]
              mix-blend-multiply
              opacity-40
              z-10
            "
          />

          {/* PAGE CONTENT */}
          <div className="relative z-20">
            <Outlet />
          </div>
        </div>
      </main>

      {!isMobile && <Footer />}
    </div>
  );
};

export default MainLayout;
