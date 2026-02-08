import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import faImage from "../assets/imagefa.png";
import course from "../assets/Course.png"

const ChartCourseSection = () => {

const stack = [
  { img: f1 },
  { label: "Subject Matter Expert" },
  { img: f2 },
  { label: "Principal Advisor" },
  { img: f3 },
  { label: "Business Partner" },
  { img: f4 },
];


  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ marginTop: "40px", height:"500px"}}
    >
      {/* ===== TOP CENTER HEADING ===== */}
      <div className="text-center relative ">
        <img
          src={faImage}
          alt="fa"
          className="absolute left-1/2 -translate-x-1/2 top-[80px] h-[100px] w-auto pointer-events-none z-10 translate-y-3 -translate-x-[90px]"
        />

        {/* H2: Chart your */}
        <h2
          style={{
            fontFamily: "Times Now",
            fontWeight: 700,
            color: "#32312B",
            lineHeight: "100%",
          }}
          className="absolute left-[10%] top-[20%] text-[38px] sm:text-[38px] xs:text-[38px] 
                     sm:left-[42%] sm:top-[3%] 
                     xs:left-[29%] xs:top-[20%] translate-x-4"
        >
          Chart your
        </h2>

        {/* H1: Course */}
        <img src ={course} alt="course" className="w-[300px] h-[90px] translate-x-[490px] translate-y-[23px] "/>
      </div>

          <div className="translate-x-[550px] translate-y-[1px] z-100">
          <p
            style={{
              fontFamily: "'Cabinet Grotesk Variable",
              fontSize: "21px",
              fontWeight: 300,
              color: "#32312B",
              lineHeight: "120%",
              width: "165px",
              textAlign: "left",
            }}
            className="sm:text-[11px]"
          >
            Executive Leader
          </p>
        </div>

      {/* ===== CONTENT GRID ===== */}
      <div className="relative z-20 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3  items-stretch -mt-32 translate-x-[12px] ">
        {/* LEFT TEXT — HIDE ON MOBILE */}
        <div className="hidden sm:flex justify-center lg:justify-end items-end w-[19%] translate-y-[170px] translate-x-[390px]">
          <p
            style={{
              fontFamily: "Times Now",
              fontSize: "11px",
              fontWeight: 550,
              color: "#32312B",
              lineHeight: "125%",
              width: "100px",
              textAlign: "right",
            }}
            className="sm:text-[16px]"
          >
            Influence the big picture through strategy and value-map driving
            clear goals, focused KPIs and KPOs, aligned execution, accountable
            ownership, and lasting enterprise-wide impact.
          </p>
        </div>

        {/* CENTER STACK IMAGES */}
{/* CENTER STACK IMAGES */}
<div className="flex flex-col items-center relative translate-y-[165px] -translate-x-3.5">
  {stack.map((item, i) =>
    item.img ? (
      <img key={i} src={item.img} className="w-[180px] object-cover " />
    ) : (
      <p
        key={i}
        className="my-3 text-center"
        style={{
          fontFamily: "Cabinet Grotesk Variable",
          fontWeight: 300,
          fontSize: "20px",
          color: "#32312B",
        }}
      >
        {item.label}
      </p>
    )
  )}
</div>



        {/* RIGHT TEXT — HIDE ON MOBILE */}
        <div className="hidden sm:flex justify-center lg:justify-start items-start w-[18%] translate-y-[105px] -translate-x-[90px]">
          <p
            style={{
              fontFamily: "Times Now",
              fontSize: "11px",
              fontWeight: 550,
              color: "#32312B",
              lineHeight: "120%",
              width: "100px",
              textAlign: "left",
            }}
            className="sm:text-[11px]"
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
