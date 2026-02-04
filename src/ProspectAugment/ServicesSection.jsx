// ServicesSection.jsx
import React from "react";

// Images
import financeImg from "../assets/Finance_1_img.png";
import fmcgImg from "../assets/fmcg_1_img.png";
import industrialImg from "../assets/industrial_1_img.png";
import medicalImg from "../assets/medical_1_img.png";

const services = [
  {
    title: "Finance",
    descriptionDesktop:
      "Portfolio-to-Profit. Architecting financial transformation through co-innovation and co-engineering for superior functionality.",
    descriptionMobile:
      "Portfolio-to-Profit. Architecting financial transformation through co-innovation and co-engineering for superior functionality.",
    img: financeImg,
  },
  {
    title: "FMCG",
    descriptionDesktop:
      "Production-to-Palm. Designing integrated value ecosystems that translate consumer insight into scalable commercial impact.",
    descriptionMobile:
      "Production-to-Palm. Designing integrated value ecosystems that translate consumer insight into scalable commercial impact.",
    img: fmcgImg,
  },
  {
    title: "Industrial",
    descriptionDesktop:
      "Plant-to-Platform. Blending your industry expertise with our technical depth to pioneer bespoke solutions.",
    descriptionMobile:
      "Plant-to-Platform. Blending your industry expertise with our technical depth to pioneer bespoke solutions.",
    img: industrialImg,
  },
  {
    title: "Medical",
    descriptionDesktop:
      "Precision-to-Pulse. Co-authoring next-gen patient outcomes by harmonizing your clinical expertise with our tech.",
    descriptionMobile:
      "Precision-to-Pulse. Co-authoring next-gen patient outcomes by harmonizing your clinical expertise with our tech.",
    img: medicalImg,
  },
];

const ServicesSection = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-32 mx-auto max-w-screen-xl mainsection my-40 translate-y-40"
      style={{ marginTop: "-18%" }}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="mb-4 mob-texts"
          style={{
            fontFamily: "'Meie Script', cursive",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "100%",
            color: "#32312B",
          }}
        >
          Augment Solutions
        </h1>

        <p
          className="mx-auto mt-4 text-center"
          style={{
            maxWidth: "300px",
            fontFamily: "'Times Now', 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "1.2",
            letterSpacing: "0.01em",
            color: "#32312B",
          }}
        >
          A curated showcase of our consulting craftsmanship — a comprehensive
          lineup of services tailored to solve complex challenges, drive
          measurable outcomes, and deliver value through strategic thinking and
          seamless execution.
        </p>
      </div>

      {/* Services Grid Wrapper */}
      <div className="w-full flex justify-center">
        {/* Services Grid (1000px constrained) */}
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-2 ml-28">
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
                  border border-black/10
                "
                    />

                    <div className="absolute left-4 top-1/4 ml-5">
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "'Times Now', Times, serif",
                          fontWeight: 600,
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

                  <p className="service-text" style={{ textAlign: "justify" }}>
                    {service.descriptionMobile}
                  </p>
                </div>

                {/* Desktop view */}
                <div className="hidden md:flex flex-row items-center gap-2 ml-4">
                  {!isBottomRow ? (
                    <>
                      <img
                        src={service.img}
                        alt={service.title}
                        className="
                    w-[138px] h-[138px]
                    object-cover flex-shrink-0
                    border border-black
                  "
                      />

                      <div className="text-left">
                        <h3
                          className="mb-4 ml-[42px]"
                          style={{
                            fontFamily: "'Times Now', Times, serif",
                            fontWeight: 600,
                            fontSize: "20px",
                            lineHeight: "100%",
                            color: "#25241E",
                          }}
                        >
                          {service.title}
                        </h3>

                        <p
                          className="
    font-['Cabinet_Grotesk_Variable']
    mob-text font-normal text-[11px]
    leading-[1.2]
    tracking-[0.005em]
    w-[120px]
    text-justify
    ml-[44px]
  "
                          style={{ color: "#32312B" }}
                        >
                          {service.descriptionDesktop}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-left ml-1">
                        <h3
                          className="mb-4 mr-6"
                          style={{
                            fontFamily: "'Times Now', Times, serif",
                            fontWeight: 600,
                            fontSize: "20px",
                            lineHeight: "100%",
                            color: "#25241E",
                          }}
                        >
                          {service.title}
                        </h3>

                        <p
                          className="
                      font-['Cabinet_Grotesk_Variable']
                      mob-text font-normal text-[11px]
                       leading-[1.2] tracking-[0.05em]
                      mr-[22px] max-w-[110px]
                    "
                          style={{ textAlign: "justify", color: "#32312B" }}
                        >
                          {service.descriptionDesktop}
                        </p>
                      </div>

                      <img
                        src={service.img}
                        alt={service.title}
                        className="
                    w-[138px] h-[138px]
                    object-cover flex-shrink-0
                    border border-black ml-7
                  "
                      />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
