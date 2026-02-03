// ServicesSection.jsx
import React from "react";

// Images
import financeImg from "../assets/financeImg.png";
import fmcgImg from "../assets/fmcgImg.png";
import industrialImg from "../assets/industrialImg.png";
import medicalImg from "../assets/medicalImg.png";

const services = [
  {
    title: "Finance",
    descriptionDesktop: (
      <>
        Portfolio - to - Profit. <br />
        Architecting financial <br />
        transformation through <br />
        co-innovation and co- <br />
        engineering for superior <br />
        functionality.
      </>
    ),
    descriptionMobile: `Portfolio - to - Profit. Architecting financial transformation through co-innovation and co-engineering for superior functionality.`,
    img: financeImg,
  },
  {
    title: "FMCG",
    descriptionDesktop: (
      <>
        Production - to - Palm. <br />
        Designing integrated value <br />
        ecosystems that translate <br />
        consumer insight into <br />
        scalable commercial impact.
      </>
    ),
    descriptionMobile: `Production - to - Palm. Designing integrated value ecosystems that translate consumer insight into scalable commercial impact.`,
    img: fmcgImg,
  },
  {
    title: "Industrial",
    descriptionDesktop: (
      <>
        Plant - to - Platform. <br />
        Blending your industry <br />
        expertise with our technical <br />
        depth to pioneer bespoke <br />
        solutions.
      </>
    ),
    descriptionMobile: `Plant - to - Platform. Blending your industry expertise with our technical depth to pioneer bespoke solutions.`,
    img: industrialImg,
  },
  {
    title: "Medical",
    descriptionDesktop: (
      <>
        Precision - to - Pulse. <br />
        Co-authoring next-gen <br />
        patient outcomes by <br />
        harmonizing your clinical <br />
        expertise with our tech.
      </>
    ),
    descriptionMobile: `Precision - to - Pulse. Co-authoring next-gen patient outcomes by harmonizing your clinical expertise with our tech.`,
    img: medicalImg,
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-32 mx-auto max-w-screen-xl mainsection"
      style={{ marginTop: "-12%" }}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="mb-4 mob-texts"
          style={{
            fontFamily: "'Meie Script', cursive",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "28px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#32312B",
          }}
        >
          Augment Solutions
        </h1>

<p
  className="mx-auto mt-4 text-center"
  style={{
    maxWidth: "300px",                 // 👈 key for alignment
    fontFamily: "'Times Now', 'Times New Roman', serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "1.2",
    letterSpacing: "0.01em",
    color: "#32312B",
  }}
>
  A curated showcase of our consulting craftsmanship — a comprehensive lineup
  of services tailored to solve complex challenges, drive measurable outcomes,
  and deliver value through strategic thinking and seamless execution.
</p>


      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => {
          const isBottomRow = index >= 2;

          return (
            <div key={index} className="flex flex-col gap-4">
              {/* Mobile view */}
              <div className="w-full md:hidden flex flex-col gap-4">
                <div className="relative w-full">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="
    w-[88%] mx-auto
    h-auto object-cover
    border border-[#E5E5E5]
    shadow-sm
  "
                  />

                  <div className="absolute left-4 top-1/4 ml-5">
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "'Times Now', Times, serif",
                        fontWeight: 600,
                        fontStyle: "normal",
                        fontSize: "30px",
                        lineHeight: "100%",
                        color: "#25241E",
                        marginTop:
                          service.title === "Industrial" ? "-47%" : "-62%",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="service-text">{service.descriptionMobile}</p>
              </div>

              {/* Desktop view */}
              <div className="hidden md:flex flex-row items-center gap-2 pl-20">
                {!isBottomRow ? (
                  <>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-[131px] h-[138px] object-cover flex-shrink-0"
                    />
                    <div className="text-left">
                      <h3
                        className="mb-2 ml-10"
                        style={{
                          fontFamily: "'Times Now', Times, serif",
                          fontWeight: 600,
                          fontStyle: "normal",
                          fontSize: "22px",
                          lineHeight: "100%",
                          color: "#25241E",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="font-['Cabinet_Grotesk_Variable'] mob-text font-normal text-[11px] leading-relaxed tracking-wide text-gray-700  ml-10">
                        {service.descriptionDesktop}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-left">
                      <h3
                        className="mb-2  mr-10"
                        style={{
                          fontFamily: "'Times Now', Times, serif",
                          fontWeight: 600,
                          fontStyle: "normal",
                          fontSize: "22px",
                          lineHeight: "100%",
                          color: "#25241E",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="font-['Cabinet_Grotesk_Variable'] mob-text font-normal text-[11px] leading-relaxed tracking-wide text-gray-700  mr-10">
                        {service.descriptionDesktop}
                      </p>
                    </div>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-[131px] h-[138px] object-cover flex-shrink-0"
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
