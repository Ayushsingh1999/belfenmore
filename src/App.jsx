import "./App.css";
import Header from "./Header";
import CloudHero from "./CloudHero";
import Middle from "./Middle";

function App() {
  return (
    <div className="bg-[#FFFDEC] min-h-screen overflow-x-hidden">
      <Header />

      {/* offset for fixed header */}
      <main className="pt-[120px] md:pt-[140px]">

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
              bg-[#f6efe3]
              mix-blend-multiply
              opacity-40
              z-10
            "
          />

          {/* CONTENT ABOVE OVERLAY */}
          <div className="relative z-20">
            <CloudHero />
            <Middle />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
