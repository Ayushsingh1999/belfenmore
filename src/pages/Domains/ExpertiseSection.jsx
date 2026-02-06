import React from "react";
import TreeLayer from "../../assets/Tree-frame.png";
import TreeImageMob from "../../assets/treeimagemob.png";

const ExpertiseSection = () => {
  return (
    <section className="relative w-full flex justify-center items-center py-8 px-4">
      {/* MOBILE BACKGROUND IMAGE – ONLY MOBILE */}
      <img
        src={TreeImageMob}
        alt="mobile background"
        className="absolute inset-0 w-full h-full object-cover md:hidden -z-10"
      />

      {/* CENTERED GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start w-full max-w-[1000px] gap-x-6">
        {/* TOP TEXT - REDUCED SIZE & WIDTH */}
        <div className="mt-[40px] md:col-span-2 flex justify-center mb-8">
          <p
            className="mb-20 mt-2 w-[380px] text-center italic max-w-2xl text-[8px] sm:text-[12px] lg:text-[14px] md:text-[12px]"
            style={{
              fontFamily: "Times Now",
              fontWeight: 500,
              fontStyle: "SemiLight Italic",
              lineHeight: "27px",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#32312B",
            }}
          >
            Rise above the competition in an ever-changing landscape with our
            deep domain expertise and dynamic consulting solutions.
          </p>
        </div>

        {/* LEFT - IMAGE (DESKTOP ONLY) */}
        <div className="hidden md:flex justify-center md:justify-end pr-8">
          <img
            src={TreeLayer}
            alt="Tree Layer"
            className="object-contain"
            style={{ width: "240px", height: "520px" }}
          />
        </div>

        {/* RIGHT - CONTENT - ALIGNED WITH IMAGE TOP */}
        <div className="flex flex-col pt-4"> {/* Added pt-4 to align with image top */}
          
          {/* ================= MOBILE ONLY ================= */}
          <div className="md:hidden space-y-4 mt-16">
            <h3
              className="font-bold text-[#32312B] mb-1"
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontStyle: "Bold",
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#32312B",
              }}
            >
              Product
            </h3>

            {/* DESIGN ROW – NO SCROLL */}
            <div className="flex justify-between gap-1">
              {["Design", "Roadmap", "P&L", "Strategy"].map((item) => (
                <button
                  key={item}
                  className="px-2 py-1 border border-gray-400 rounded-full"
                  style={{
                    fontFamily: "Cabinet Grotesk Variable",
                    fontWeight: 400,
                    fontStyle: "Regular",
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    color: "#32312B",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div>
              <h3
                className="font-bold text-[#32312B] mb-1"
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 700,
                  fontStyle: "Bold",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#32312B",
                }}
              >
                People
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Talent Acquisition",
                  "Domain Acceleration",
                  "Engagement",
                  "Organization Design",
                ].map((item) => (
                  <span
                    style={{
                      fontFamily: "Cabinet Grotesk Variable",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "14px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      color: "#32312B",
                    }}
                    key={item}
                    className="px-2 py-1 border border-gray-400 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="font-bold text-[#32312B] mb-1"
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 700,
                  fontStyle: "Bold",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#32312B",
                }}
              >
                Governance
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Compliance",
                  "Regulation",
                  "Change Management",
                  "Gen AI Governance",
                ].map((item) => (
                  <span
                    style={{
                      fontFamily: "Cabinet Grotesk Variable",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "14px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      color: "#32312B",
                    }}
                    key={item}
                    className="px-2 py-1 border border-gray-400 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="font-bold text-[#32312B] mb-1"
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 700,
                  fontStyle: "Bold",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#32312B",
                }}
              >
                Technology
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Architecture Roadmap",
                  "Gen AI",
                  "Infrastructure Strategy",
                  "Platform Stability",
                ].map((item) => (
                  <span
                    style={{
                      fontFamily: "Cabinet Grotesk Variable",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "14px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      color: "#32312B",
                    }}
                    key={item}
                    className="px-2 py-1 border border-gray-400 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:block">
            {/* ALL SECTIONS WITH HEADING ABOVE TAGS */}
            <div className="space-y-14 -mt-5 -ml-10 w-[80%]"> {/* Increased to space-y-6 for better gaps */}
              
              {/* Product Section */}
              <div className="pt-2"> {/* Added pt-2 for spacing from top */}
                <h3
                  className="font-bold mb-3" /* Increased mb for better gap */
                  style={{
                    fontFamily: "Times Now",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#32312B",
                  }}
                >
                  Product
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Design", "Roadmap", "P&L", "Strategy"].map((item) => (
                    <button
                      key={item}
                      className="px-2 py-1 border border-gray-400 rounded-full"
                      style={{
                        fontFamily: "Cabinet Grotesk Variable",
                        fontWeight: 400,
                        fontStyle: "Regular",
                        fontSize: "12px",
                        lineHeight: "17px",
                        letterSpacing: "0%",
                        textAlign: "justify",
                        color: "#32312B",
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* People Section */}
              <div>
                <h3
                  className="font-bold mb-3" /* Increased mb for better gap */
                  style={{
                    fontFamily: "Times Now",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#32312B",
                  }}
                >
                  People
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Talent Acquisition",
                    "Domain Acceleration",
                    "Engagement",
                    "Organization Design",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 border border-gray-400 rounded-full"
                      style={{
                        fontFamily: "Cabinet Grotesk Variable",
                        fontWeight: 400,
                        fontStyle: "Regular",
                        fontSize: "12px",
                        lineHeight: "17px",
                        letterSpacing: "0%",
                        textAlign: "justify",
                        color: "#32312B",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Governance Section */}
              <div>
                <h3
                  className="font-bold mb-3" /* Increased mb for better gap */
                  style={{
                    fontFamily: "Times Now",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#32312B",
                  }}
                >
                  Governance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Compliance",
                    "Regulation",
                    "Change Management",
                    "Gen AI Governance",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 border border-gray-400 rounded-full"
                      style={{
                        fontFamily: "Cabinet Grotesk Variable",
                        fontWeight: 400,
                        fontStyle: "Regular",
                         fontSize: "12px",
                        lineHeight: "17px",
                        letterSpacing: "0%",
                        textAlign: "justify",
                        color: "#32312B",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technology Section */}
              <div>
                <h3
                  className="font-bold mb-3" /* Increased mb for better gap */
                  style={{
                    fontFamily: "Times Now",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "18px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#32312B",
                  }}
                >
                  Technology
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Architecture Roadmap",
                    "Gen AI",
                    "Infrastructure Strategy",
                    "Platform Stability",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 border border-gray-400 rounded-full"
                      style={{
                        fontFamily: "Cabinet Grotesk Variable",
                        fontWeight: 400,
                        fontStyle: "Regular",
                        fontSize: "12px",
                        lineHeight: "17px",
                        letterSpacing: "0%",
                        textAlign: "justify",
                        color: "#32312B",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;