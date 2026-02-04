// HeroSection.jsx
import React from "react";
import heroImage from "../assets/heroImage.png";
import e from "../assets/e.png";

const features = [
  {
    title: "xpertise",
    desktopDesc: (
      <>
        Pivot on rigorous <br />
        engineering practices to <br />
        provide seamless, <br />
        scalable and reliable <br />
        business critical <br />
        solutions for present day <br />
        demands.
      </>
    ),
    mobileDesc:
      "Pivot on rigorous engineering practices to provide seamless, scalable and reliable business critical solutions for present day demands.",
  },
  {
    title: "xcellence",
    desktopDesc: (
      <>
        Focus on quality, <br />
        resilience, governance, <br />
        and performance at <br />
        every stage of design, <br />
        development, delivery, <br />
        and operations for <br />
        consistent results.
      </>
    ),
    mobileDesc:
      "Focus on quality, resilience, governance, and performance at every stage of design, development, delivery, and operations for consistent results.",
  },
  {
    title: "fficient",
    desktopDesc: (
      <>
        Excel in reducing <br />
        computation complexity, <br />
        latency, cost, operational <br />
        fatigue and manual <br />
        interventions using <br />
        insights from data, <br />
        systems and processes.
      </>
    ),
    mobileDesc:
      "Excel in reducing computation complexity, latency, cost, operational fatigue and manual interventions using insights from data, systems and processes.",
  },
  {
    title: "nterprise",
    desktopDesc: (
      <>
        Scale businesses and <br />
        initiatives through clear <br />
        roadmaps, proactive risk <br />
        mitigation, global reach, <br />
        and evolution from <br />
        bespoke solutions to <br />
        robust standards.
      </>
    ),
    mobileDesc:
      "Scale businesses and initiatives through clear roadmaps, proactive risk mitigation, global reach, and evolution from bespoke solutions to robust standards.",
  },
];

const HeroSection = () => {
  return (
<section
  className="bg-cream-100 text-gray-800 px-6 py-12 md:py-20"
  style={{ marginTop: "-4%" }}
>
  {/* ===== SHARED WIDTH WRAPPER (IMAGE + TEXT) ===== */}
  <div className="relative w-full max-w-2xl mx-auto">

    {/* ===== HERO IMAGE ===== */}
    <img
      src={heroImage}
      alt="Hero"
      className="w-full h-auto object-cover"
    />

    {/* ===== FEATURES (ALIGNED UNDER IMAGE WIDTH) ===== */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left ml-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:items-start"
        >
          {/* ===== TITLE ===== */}
          <h3
            className="flex items-center"
            style={{
              fontFamily: "'Times Now', Times, serif",
              fontWeight: 600,
              fontSize: "28px",     // ⬇ tuned for 2xl width
              lineHeight: "100%",
              color: "#25241E",
            }}
          >
<img
  src={e}
  alt="Icon"
  style={{
    height: "110px",
    marginRight: "-30px", // pulls word closer like the image
    marginTop: "-10px",    // lifts E to align optically
    objectFit: "contain",
    display: "block",
  }}
/>
            {feature.title}
          </h3>

          {/* ===== DESKTOP DESCRIPTION ===== */}
<p
  className="
    hidden md:block
    mt-3
    font-normal
    text-[13px]
    leading-[1.6]
    text-gray-700
    text-justify
  "
  style={{
    fontFamily: "Cabinet Grotesk Variable",
    textJustify: "inter-word",
    textAlignLast: "justify",
    hyphens: "auto",
    color: "#32312B",
  }}
>
  {feature.desktopDesc}
</p>

          {/* ===== MOBILE DESCRIPTION ===== */}
          <p
            className="block md:hidden mt-3 font-normal text-[14px] leading-[1.6] text-gray-700 text-left"
            style={{ fontFamily: "Cabinet Grotesk Variable" }}
          >
            {feature.mobileDesc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


  );
};

export default HeroSection;
