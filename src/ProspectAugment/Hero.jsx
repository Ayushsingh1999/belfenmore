import React from "react";
import wave from "../assets/wave.png";
import Groupdimend from "../assets/Groupdimend.png";
import Prospect_Augument_img from "../assets/ProspectAugment.png";
import augment_img from "../assets/augment_img.svg";

const Hero = () => {
  return (
    <div
      className="
        relative w-full overflow-hidden
        min-h-[60vh] md:h-screen md:-top-20 2xl:-translate-y-[100px]
      "
    >
      {/* BIG YELLOW AUGMENT */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none z-10">
<img
  src={augment_img}
  alt="augment image"
  className="
    w-full
    h-[420px]
    md:h-[520px]
    object-contain
    -translate-y-20
    md:-translate-y-30
    2xl:-translate-y-[120px]
    2xl:h-[500px]
  "
/>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex flex-col justify-end h-full relative z-40 pb-[33vh]">
        <img
          src={Prospect_Augument_img}
          alt="Prospect Augument"
          className="w-[500px] mx-auto relative z-40 translate-y-[130px]  2xl:w-[600px] 2xl:translate-y-64"
        />

        <img
          src={wave}
          alt="Wave"
          className="
            absolute
            bottom-[-20vh]
            left-0
            w-full
            h-[160%]
            object-cover
            z-20
          "
        />

        <div
          className="absolute bottom-0 left-0 w-full  h-[105%]  z-30  2xl:h-[100%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,253,236,0) 30%, #fffdec 100%)",
          }}
        />
      </div>

      

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col justify-end min-h-[70vh] md:hidden relative z-40">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40">
          <img src={Groupdimend} alt="Groupdimend" className="w-11" />
        </div>

        <h2
          className="
            absolute top-20 left-1/2 -translate-x-1/2
            w-full text-center z-40
            text-lg font-light tracking-wide
          "
        >
          <span className="font-semibold text-gray-900 text-[30px]">
            Prospect
          </span>{" "}
          <span className="text-gray-700 text-[30px]">Augment</span>
        </h2>

        <img
          src={wave}
          alt="Wave"
          className="
            absolute
            -bottom-16
            left-0
            w-full
            h-[110%]
            object-cover
            z-20
          "
        />

        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white/30 z-30" />

        <div
          className="absolute bottom-0 left-0 w-full h-[35%] z-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fdf9ed 100%)",
          }}
        />
      </div>

      {/* ✅ SAFE HEIGHT EXTENDER (DESKTOP ONLY) */}
      <div className="hidden md:block h-[40vh]" />
    </div>
  );
};

export default Hero;
