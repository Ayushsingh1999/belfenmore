import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import faImage from "../assets/imagefa.png";

const ChartCourseSection = () => {
  const imageLabels = [
    "Executive Leader",
    "Subject Matter Expert",
    "Principal Advisor",
    "Business Partner",
  ];

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ marginTop: "82px" }}
    >
      {/* ===== TOP CENTER HEADING ===== */}
      <div className="text-center relative">
        <img
          src={faImage}
          alt="fa"
          className="absolute left-1/2 -translate-x-1/2 top-[80px] h-[100px] w-auto pointer-events-none z-10"
        />

        {/* H2: Chart your */}
        <h2
          style={{
            fontFamily: "'Times Now', serif",
            fontWeight: 600,
            color: "#32312B",
            lineHeight: "100%",
          }}
          className="absolute left-[30%] top-[20%] text-[30px] sm:text-[50px] xs:text-[35px] 
                     sm:left-[42%] sm:top-[3%] 
                     xs:left-[29%] xs:top-[20%]"
        >
          Chart your
        </h2>

        {/* H1: Course */}
        <h1
          style={{
            fontFamily: "'Luxurious Script', cursive",
            fontWeight: 400,
            color: "#FFE95A",
            lineHeight: "100%",
          }}
          className="text-[200px] sm:text-[180px] xs:text-[100px]"
        >
          Course
        </h1>
      </div>

      {/* ===== CONTENT GRID ===== */}
      <div className="relative z-20 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch -mt-32">
        {/* LEFT TEXT — HIDE ON MOBILE */}
        <div className="hidden sm:flex justify-center lg:justify-end items-end">
          <p
            style={{
              fontFamily: "'Times Now', serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#32312B",
              lineHeight: "155%",
              width: "165px",
              textAlign: "left",
            }}
            className="sm:text-[16px]"
          >
            Influence the big picture through strategy and value-map driving
            clear goals, focused KPIs and KPOs, aligned execution, accountable
            ownership, and lasting enterprise-wide impact.
          </p>
        </div>

        {/* CENTER STACK IMAGES */}
        <div className="flex flex-col items-center gap-10 relative">
          {[f1, f2, f3, f4].map((img, index) => (
            <div key={index} className="relative">
              {/* ONLY SHOW LABEL ON MOBILE */}
              <p
                className="absolute left-1/2 -translate-x-1/2 top-4 text-center sm:hidden whitespace-nowrap"
                style={{
                  fontFamily: "'Cabinet Grotesk Variable', sans-serif",
                  fontWeight: 300,
                  fontStyle: "Light",
                  fontSize: "20px",
                  lineHeight: "100%",
                  color: "#32312B",
                }}
              >
                {imageLabels[index]}
              </p>
              <img
                src={img}
                alt={`frame-${index}`}
                className="w-[260px] md:w-[300px] object-cover mt-10"
              />
            </div>
          ))}
        </div>

        {/* RIGHT TEXT — HIDE ON MOBILE */}
        <div className="hidden sm:flex justify-center lg:justify-start items-start">
          <p
            style={{
              fontFamily: "'Times Now', serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#32312B",
              lineHeight: "155%",
              width: "165px",
              textAlign: "left",
            }}
            className="sm:text-[16px]"
          >
            Steer and nurture culture, mentor peers, empower teams, and pioneer
            impactful projects through disciplined execution, technical
            expertise, precision, and sustained excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChartCourseSection;
