// EnvisionSection.jsx
import React from "react";
import Envision from "../assets/Envision.png";
import beach_sea from "../assets/beach_sea_image.png";

const EnvisionSection = () => {
  return (
    <div className="w-full bg-[#fffdec] overflow-hidden">
      <div className="relative w-full">

        {/* EN VISION — CLEAN */}
        <img
          src={Envision}
          alt="Envision"
          className="
            w-full
            object-cover
            relative
            z-10
            translate-y-1
          "
        />

        {/* SEA LAYER */}
        <div className="relative z-20 -mt-16">
          <img
            src={beach_sea}
            alt="Sea"
            className="
              w-full
              h-64
              md:h-96
              lg:h-[180px]
              object-cover
              object-top
            "
          />

          {/* LOCAL BLEND — ONLY AT MEETING POINT */}
          <div
            className="absolute top-0 left-0 w-full h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #fffdec 0%, rgba(255,253,236,0.85) 1%, rgba(255,253,236,0.4) 80%, rgba(255,253,236,0) 100%)",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default EnvisionSection;
