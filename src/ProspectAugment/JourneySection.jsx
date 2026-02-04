import React from "react";
import waves from "../assets/waves.png";
import We from "../assets/We.png";
import journey from "../assets/journey.png";
import banner from "../assets/banner.png";

const JourneySection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= DESKTOP DESIGN ================= */}
      <div className="hidden md:block mt-20">
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
          {/* ===== BANNER IMAGE (EDITORIAL CREAM GRADIENT) ===== */}
          <div className="relative w-full h-[720px] overflow-hidden">
            {/* Banner Image with 90% opacity */}
            <img
              src={banner}
              alt="Banner"
              className="
      w-full
      h-full
      object-cover
      opacity-90
    "
            />

            {/* Radial Blend Mode Effect */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255, 253, 236, 0.2) 0%, rgba(255, 253, 236, 0.8) 100%)",
                mixBlendMode: "luminosity",
              }}
            />
          </div>

          {/* ===== CENTERED WAVE + CONTENT WRAPPER ===== */}
          <div className="absolute top-0 left-0 w-full flex justify-center z-10">
            <div className="relative w-full max-w-3xl ">
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
    drop-shadow-[1px_-1px_0_#000]  /* Bottom-right to top-right */
    drop-shadow-[-1px_-1px_0_#000] /* Bottom-left to top-left */
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
                <div className="grid grid-cols-3 gap-0 text-gray-700">
                  {/* LEFT COLUMN */}
                  <div className="space-y-6 text-sm tracking-wide text-left">
                    <div>
                      <h4
                        className="
    uppercase
    text-[14px]
  "
                        style={{
                          fontFamily: "Times Now, Times, serif",
                          fontWeight: 400,
                          color: "#9E9B8F",
                        }}
                      >
                        Domain Tech
                      </h4>

                      <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] mt-2 uppercase text-[#32312B]">
                        Solution Engineering
                      </p>
                      <p className="font-['Cabinet_Grotesk_Variable'] text-[10px]  uppercase text-[#32312B]">
                        Business Engineering
                      </p>
                    </div>

                    <div>
                      <h4
                        className="
    uppercase
    text-[14px]
  "
                        style={{
                          fontFamily: "Times Now, Times, serif",
                          fontWeight: 400,
                          color: "#9E9B8F",
                        }}
                      >
                        Tech Ops
                      </h4>

                      <p className="font-['Cabinet_Grotesk_Variable'] text-[10px] mt-2 uppercase text-[#32312B]">
                        Site Reliability
                      </p>
                      <p className="font-['Cabinet_Grotesk_Variable'] text-[10px]  uppercase text-[#32312B]">
                        Security & Compliance
                      </p>
                    </div>
                  </div>

                  {/* CENTER TEXT */}
                  <div className="flex justify-center gap-2 text-center mt-16">
                    <p
                      className="flex flex-col items-center font-light text-center"
                      style={{
                        fontFamily: "Times Now",
                        fontStyle: "italic",
                        fontSize: "11px",
                        lineHeight: "120%",
                        color: "#32312B",
                      }}
                    >
                      {/* Line 1 */}
                      <span className="max-w-[80%]">
                        Propel innovation and transformation together,
                      </span>

                      {/* Line 2 */}
                      <span className="max-w-[95%]">
                        powered by our Intelligent Assets that shape industry
                        trends and emerging technologies.
                      </span>
                    </p>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="space-y-6 text-sm tracking-wide text-right">
                    <div>
                      <h4
                        className="
    uppercase
    text-[14px]
  "
                        style={{
                          fontFamily: "Times Now, Times, serif",
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
                        className="
    uppercase
    text-[14px]
  "
                        style={{
                          fontFamily: "Times Now, Times, serif",
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
          {/* Banner Image */}

          <img
            src={banner}
            alt="Banner"
            className="w-full h-[400px] object-cover"
          />

          {/* Wave Image at the bottom of banner (slightly taller) */}
          <div className="absolute bottom-0 w-full flex justify-center">
            <img
              src={waves}
              alt="Waves"
              className="w-full max-w-full h-[120px] object-cover"
            />
          </div>

          {/* "WE ARE PART OF YOUR" Text over Wave */}
          <h3
            className="absolute bottom-16 w-full text-center translate-y-6"
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
            className="absolute bottom-8 w-full text-center"
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
