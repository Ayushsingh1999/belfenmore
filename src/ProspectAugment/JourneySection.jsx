import React from "react";
import waves from "../assets/waves.png";
import banner from "../assets/wave_banner.jpeg";

const JourneySection = () => {
  
  const MaskedBlendImage = ({ src, className = "", flip = false, zIndex = 10, opacity = 100 }) => {
    return (
      <div className={`relative w-full ${className}`}>
        {/* Cream background masked by image - NEVER flipped */}
        <div
          className="absolute inset-0 bg-[#FFFDEC]"
          style={{
            maskImage: `url(${src})`,
            WebkitMaskImage: `url(${src})`,
            maskSize: "100% auto",
            WebkitMaskSize: "100% auto",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
       
        {/* White-ish shadow effect - stronger on sides, fades to center */}
        <div 
          className="absolute inset-0"
style={{
  background: `
    radial-gradient(circle at center, 
      rgba(255, 253, 236, 0) 0%, 
      rgba(255, 253, 236, 1) 100%
    )
  `,
  mixBlendMode: "luminosity",
  zIndex: zIndex + 1
}}
        />
        
        {/* Original image with blend mode - Only image gets flipped */}
        <img
          src={src}
          alt=""
          className="relative w-full h-auto mix-blend-luminosity"
          style={{
            zIndex,
            transform: flip ? "scaleX(-1)" : "none",
            opacity: `${opacity}%`
          }}
        />
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= DESKTOP DESIGN ================= */}
      <div className="hidden md:block mt-36">
        {/* TOP HEADING */}
        <div className="flex flex-col items-center mb-0">
          <h3
            style={{
              fontFamily: "Times Now",
              fontWeight: 200,
              fontSize: "40px",
              lineHeight: "68%",
              textTransform: "uppercase",
              color: "#32312B",
            }}
          >
            WE ARE PART OF YOUR
          </h3>
        </div>

        {/* BANNER WRAPPER */}
        <div className="relative w-full">
          {/* ===== BANNER IMAGE WITH MaskedBlendImage EFFECT ===== */}
          <div className="relative w-full h-[720px] overflow-hidden">
            {/* Top gradient fade */}
            <div 
              className="absolute top-0 left-0 w-full h-48 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, #FFFDEC 0%, transparent 100%)"
              }}
            />
            
            <MaskedBlendImage 
              src={banner}
              className="w-full h-[1000px] -translate-y-28"
              opacity={60}
            />
            
            {/* Bottom gradient fade */}
            <div 
              className="absolute bottom-0 left-0 w-full h-48 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #FFFDEC 0%, transparent 100%)"
              }}
            />
          </div>

          {/* ===== CENTERED WAVE + CONTENT WRAPPER ===== */}
          <div className="absolute top-0 left-0 w-full flex justify-center z-30">
            <div className="relative w-full max-w-2xl ">
              {/* ===== WAVE IMAGE (UNCHANGED) ===== */}
              <img src={waves} alt="Waves" className="w-full" />

              {/* ===== JOURNEY TEXT ===== */}
              <h1
                className="
    absolute
    -top-14
    left-1/2
    -translate-x-1/2
    text-center
    text-[#FFFDEC]
    drop-shadow-[0.6px_-0.6px_0_#32312B]  /* Bottom-right to top-right */
  "
                style={{
                  fontFamily: "Meie Script",
                  fontSize: "85px",
                  lineHeight: "120%",
                }}
              >
                journey
              </h1>

              {/* ===== CONTENT UNDER WAVE (ALIGNED WIDTH) ===== */}
<div className="mt-6">
  <div className="grid grid-cols-3 gap-0 text-gray-700" style={{gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 1fr)"}}>
    {/* LEFT COLUMN */}
    <div className="space-y-6 text-sm tracking-wide text-left">
      <div>
        <h4
          className="uppercase text-[14px]"
          style={{
            fontFamily: "Times Now",
            fontWeight: 400,
            color: "#9E9B8F",
          }}
        >
          Domain Tech
        </h4>

        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] mt-2 uppercase text-[#32312B]">
          Solution Engineering
        </p>
        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] uppercase text-[#32312B]">
          Business Engineering
        </p>
      </div>

      <div>
        <h4
          className="uppercase text-[14px]"
          style={{
            fontFamily: "Times Now",
            fontWeight: 400,
            color: "#9E9B8F",
          }}
        >
          Tech Ops
        </h4>

        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] mt-2 uppercase text-[#32312B]">
          Site Reliability
        </p>
        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] uppercase text-[#32312B]">
          Security & Compliance
        </p>
      </div>
    </div>

    {/* CENTER COLUMN - Gets 1.5x more space */}
    <div className="flex justify-center items-start px-2 mt-[60px]">
      <div className="text-center w-full">
        <div
          className="flex flex-col items-center font-light text-center"
          style={{
            fontFamily: "Times Now",
            fontStyle: "italic",
            fontSize: "11px",
            lineHeight: "80%",
            color: "#32312B",
          }}
        >
          {/* Line 1 */}
          <span className="block mb-1 whitespace-nowrap">
            Propel innovation and transformation together,
          </span>

          {/* Line 2 with adjusted text */}
          <span className="block mb-1 whitespace-nowrap">
            powered by our Intelligent Assets shaping industry
          </span>

          {/* Line 3 */}
          <span className="block whitespace-nowrap">
            trends and emerging technologies.
          </span>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-6 text-sm tracking-wide text-right">
      <div>
        <h4
          className="uppercase text-[14px]"
          style={{
            fontFamily: "Times Now",
            fontWeight: 400,
            color: "#9E9B8F",
          }}
        >
          Business Ops
        </h4>

        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] mt-2 uppercase text-[#32312B]">
          Customer Journey
        </p>
        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] uppercase text-[#32312B]">
          Product Design
        </p>
      </div>

      <div>
        <h4
          className="uppercase text-[14px]"
          style={{
            fontFamily: "Times Now",
            fontWeight: 400,
            color: "#9E9B8F",
          }}
        >
          Emerging Tech
        </h4>

        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] mt-2 uppercase text-[#32312B]">
          AI Engineering
        </p>
        <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] uppercase text-[#32312B]">
          AI Architecture
        </p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden">
        <div className="relative w-full flex flex-col items-center">
          {/* Banner Image with MaskedBlendImage effect */}
          <div className="relative w-full h-[400px]">
            {/* Top gradient fade */}
            <div 
              className="absolute top-0 left-0 w-full h-24 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, #FFFDEC 0%, transparent 90%)"
              }}
            />
            
            <MaskedBlendImage 
              src={banner}
              className="w-full h-full object-cover"
              opacity={20}
            />
            
            {/* Bottom gradient fade */}
            <div 
              className="absolute bottom-0 left-0 w-full h-24 z-20 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #FFFDEC 0%, transparent 90%)"
              }}
            />
          </div>

          {/* Wave Image at the bottom of banner (slightly taller) */}
          <div className="absolute bottom-0 w-full flex justify-center z-30">
            <img
              src={waves}
              alt="Waves"
              className="w-full max-w-full h-[120px] object-cover"
            />
          </div>

          {/* "WE ARE PART OF YOUR" Text over Wave */}
          <h3
            className="absolute bottom-16 w-full text-center translate-y-6 z-40"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontSize: "31px",
              lineHeight: "100px",
              color: "#32312B",
              textTransform: "uppercase",
            }}
          >
            WE ARE PART OF YOUR
          </h3>

          {/* "Journey" Text below */}
          <h1
            className="absolute bottom-8 w-full text-center z-40"
            style={{
              fontFamily: "Meie Script",
              fontWeight: 400,
              fontSize: "69px",
              lineHeight: "183%",
              color: "#FFFDEC",
              left: "-7%",
            }}
          >
            Journey
          </h1>
        </div>

        {/* Description Text (remove extra top margin) */}
        <div className="flex flex-col items-center justify-center text-center px-6 mt-4 w-full">
          <p className="font-['Times_Now']  font-normal italic text-[11px] leading-[24px] text-center text-[#32312B] max-w-full">
            Propel innovation and transformation together, <br />
            powered by our Intelligent Assets that shape industry <br />
            trends and emerging technologies.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col items-center text-center space-y-6 mt-6 w-full px-4 sm:px-6">
          <div className="w-full max-w-full">
            <h4 className="font-['Times Now'] font-semibold uppercase section-heading">
              Domain Tech
            </h4>{" "}
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              Solution Engineering
            </p>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              Business Engineering
            </p>
          </div>

          <div className="w-full max-w-full">
            <h4 className="font-['Times Now'] font-semibold uppercase section-heading">
              Tech Ops
            </h4>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              Site Reliability
            </p>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              Security & Compliance
            </p>
          </div>

          <div className="w-full max-w-full">
            <h4 className=" font-['Times Now'] font-semibold uppercase section-heading">
              Business Ops
            </h4>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              Customer Journey
            </p>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              Product Design
            </p>
          </div>

          <div className="w-full max-w-full">
            <h4 className=" font-['Times Now'] font-semibold uppercase section-heading">
              Emerging Tech
            </h4>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              AI Engineering
            </p>
            <p className="font-['Cabinet_Grotesk_Variable'] font-medium text-[11px] mt-3 leading-[20px] uppercase text-[#32312B] mb-2">
              AI Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;