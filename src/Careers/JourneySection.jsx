import React from "react";
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame1.png";
import CenterImg from "../assets/images1.png";

const JourneyCareerSection = () => {
  return (
    <section className="w-full flex justify-center py-32">
      {/* IMAGE-BOUND CONTAINER */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "835px",
          height: "1150px", // increased height to fit all content
          backgroundImage: `url(${CenterImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        {/* FRAMES */}
        <img src={Frame} className="absolute top-6 left-6 w-[180px] z-20" />
        <img src={Frame1} className="absolute top-6 right-6 w-[180px] z-20" />

        {/* CONTENT STRICTLY INSIDE IMAGE */}
        <div className="absolute inset-0 flex justify-center z-30">
          <div className="w-[620px] h-full flex flex-col">
            {/* HEADING */}
            <div className="text-center mt-24 mb-14">
              <h2
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "60px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                className="text-[#32312B]"
              >
                Be part of our
              </h2>

              <h1
                style={{
                  fontFamily: "Luxurious Script",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "145.66px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                className="text-[#FFE95A] -mt-12"
              >
                Journey
              </h1>
            </div>

            {/* ZIG ZAG GRID */}
            <div className="grid grid-cols-2 gap-y-14 text-[13px] relative z-20">
              {/* LEFT: POTENTIAL */}
              <div className="pr-4 relative">
                {/* Paragraph neeche */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable",
                    fontWeight: 300,
                    fontStyle: "Light",
                    fontSize: "16px",
                    lineHeight: "37px",
                    leadingTrim: "CAP_HEIGHT",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "50px", // paragraph ko neeche shift
                    left: "0",
                    zIndex: 30, // neeche
                  }}
                >
                  Establish mentorship programs, training and certification,
                  external representation in industry events and career guidance
                </p>

                {/* Potential upar */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable", // updated font
                    fontWeight: 300, // Light weight
                    fontStyle: "Light", // Light style
                    fontSize: "60px", // updated size
                    lineHeight: "26px", // updated line-height
                    leadingTrim: "CAP_HEIGHT", // experimental property
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "90px",
                    left: "-9px",
                    zIndex: 40, // paragraph ke upar
                  }}
                >
                  Potential
                </p>

                {/* Elevate neeche */}
                <h3
                  style={{
                    width: "230px",
                    height: "149px",
                    top: "0px", // neeche rakhne ke liye top
                    left: "0",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    fontFamily: "Luxurious Script",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "154px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFE95A",
                    position: "relative",
                    zIndex: 20, // paragraph ke neeche
                  }}
                >
                  Elevate
                </h3>
              </div>

              <div />

              {/* RIGHT: COMMUNITY */}
              <div />
              <div className="pr-4 relative">
                {/* Paragraph neeche */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable",
                    fontWeight: 300,
                    fontStyle: "Light",
                    fontSize: "16px",
                    lineHeight: "37px",
                    leadingTrim: "CAP_HEIGHT",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "50px", // paragraph ko neeche shift
                    left: "0",
                    zIndex: 30, // neeche
                  }}
                >
                  encourage innovation though community initiatives. that
                  empower and inspire progress, unity, and shared growth.
                </p>

                {/* Potential upar */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable", // updated font
                    fontWeight: 300, // Light weight
                    fontStyle: "Light", // Light style
                    fontSize: "60px", // updated size
                    lineHeight: "26px", // updated line-height
                    leadingTrim: "CAP_HEIGHT", // experimental property
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "90px",
                    left: "-9px",
                    zIndex: 40, // paragraph ke upar
                  }}
                >
                  Community
                </p>

                {/* Elevate neeche */}
                <h3
                  style={{
                    width: "230px",
                    height: "149px",
                    top: "0px", // neeche rakhne ke liye top
                    left: "0",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    fontFamily: "Luxurious Script",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "154px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFE95A",
                    position: "relative",
                    zIndex: 20, // paragraph ke neeche
                  }}
                >
                  Elevate
                </h3>
              </div>

              {/* LEFT: ELEVATE */}
              <div className="pr-4 relative">
                {/* Paragraph neeche */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable",
                    fontWeight: 300,
                    fontStyle: "Light",
                    fontSize: "16px",
                    lineHeight: "37px",
                    leadingTrim: "CAP_HEIGHT",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "50px", // paragraph ko neeche shift
                    left: "0",
                    zIndex: 30, // neeche
                  }}
                >
                  leadership development for emerging leaders, high potential
                  recognition, accelerated promotions and internal mobility
                </p>

                {/* Potential upar */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable", // updated font
                    fontWeight: 300, // Light weight
                    fontStyle: "Light", // Light style
                    fontSize: "60px", // updated size
                    lineHeight: "26px", // updated line-height
                    leadingTrim: "CAP_HEIGHT", // experimental property
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "90px",
                    left: "32px",
                    zIndex: 40, // paragraph ke upar
                  }}
                >
                  TALENT{" "}
                </p>

                {/* Elevate neeche */}
                <h3
                  style={{
                    width: "230px",
                    height: "149px",
                    top: "0px", // neeche rakhne ke liye top
                    left: "0",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    fontFamily: "Luxurious Script",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "154px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFE95A",
                    position: "relative",
                    zIndex: 20, // paragraph ke neeche
                  }}
                >
                  Elevate
                </h3>
              </div>

              <div />

              {/* RIGHT: TALENT */}
              <div />
               <div className="pr-4 relative">
                {/* Paragraph neeche */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable",
                    fontWeight: 300,
                    fontStyle: "Light",
                    fontSize: "16px",
                    lineHeight: "37px",
                    leadingTrim: "CAP_HEIGHT",
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "50px", // paragraph ko neeche shift
                    left: "0",
                    zIndex: 30, // neeche
                  }}
                >
                  Innovation first mindset - spark great conversations as ideas win here. structure your growth plan with competitive rewards
                </p>

                {/* Potential upar */}
                <p
                  style={{
                    fontFamily: "Cabinet Grotesk Variable", // updated font
                    fontWeight: 300, // Light weight
                    fontStyle: "Light", // Light style
                    fontSize: "60px", // updated size
                    lineHeight: "26px", // updated line-height
                    leadingTrim: "CAP_HEIGHT", // experimental property
                    letterSpacing: "0%",
                    textAlign: "justify",
                    textTransform: "uppercase",
                    color: "#32312B",
                    position: "absolute",
                    top: "90px",
                    left: "80px",
                    zIndex: 40, // paragraph ke upar
                  }}
                >
                  YOU{" "}
                </p>

                {/* Elevate neeche */}
                <h3
                  style={{
                    width: "230px",
                    height: "149px",
                    top: "0px", // neeche rakhne ke liye top
                    left: "0",
                    transform: "rotate(0deg)",
                    opacity: 1,
                    fontFamily: "Luxurious Script",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "154px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFE95A",
                    position: "relative",
                    zIndex: 20, // paragraph ke neeche
                  }}
                >
                  Elevate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCareerSection;
