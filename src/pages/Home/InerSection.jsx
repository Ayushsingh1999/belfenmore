import React from "react";
import Frame3 from "../../assets/Frame_Home_3.png";
import Frame4 from "../../assets/Frame_Home_4.png";
import effective from "../../assets/effective_home.png";
import Forest from "../../assets/tree_img1.png";
import Frame5 from "../../assets/Frame_Home_5.png";
import Frame6 from "../../assets/Frame_Home_6.png";
import Groups from "../../assets/Groups_Home.png";
import Determine_Determination from "../../assets/Determine_Determination.svg";
import ignite from "../../assets/ignite.svg";
import Envision_Excellence from "../../assets/Envision_Excellence.svg";
import Artisan from "../../assets/Artisan.svg"

const InerSection = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#fdf8ec]">
      <section className="w-full py-8 px-3 md:px-8 flex justify-center relative main-section" style={{ marginTop: "2%" }}>
        <div className="max-w-4xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-6">
          {/* ================= MOBILE HEADING (Only Mobile) ================= */}
          <div className="block lg:hidden md:hidden text-center w-full mb-3 det-text-section">
            <h2
              className="text-[22px] font-bold leading-tight det-text"
              style={{ fontFamily: "Times Now", color: "#32312B" }}
            >
              Determine
            </h2>
            <h2
              className="text-[22px] font-bold leading-tight"
              style={{ fontFamily: "Times Now", color: "#32312B" }}
            >
              Determination
            </h2>
          </div>

          {/* ================= IMAGE + ROTATE TEXT ================= */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img src={Frame3} alt="Frame2" className="object-cover z-0 md:h-[240px] lg:h-[260px] translate-x-12 translate-y-5" />

            {/* ================= ROTATE TEXT (Desktop Only) ================= */}
            <span
              className="hidden lg:block md:block absolute -left-[94px] top-1/2 translate-y-1 -rotate-90 text-[#32312B]/20"
              style={{
                fontFamily: "Times Now",
                fontWeight: 300,
                fontSize: "37.5px",
                lineHeight: "95%",
                whiteSpace: "nowrap",
              }}
            >
              INNER ENGINE
            </span>

            {/* ================= ROTATE TEXT (Mobile Bottom) ================= */}
            <span
              className="block lg:hidden md:hidden iner-text mt-2 text-[#bdb8aa]"
              style={{
                fontFamily: "Times Now",
                fontWeight: 300,
                fontSize: "22px",
                lineHeight: "95%",
                whiteSpace: "nowrap",
              }}
            >
              INNER ENGINE
            </span>

            {/* ================= PARA (Mobile Below Rotate Text) ================= */}
            <p
              className="block lg:hidden md:hidden emp-text mt-2 text-[11px] leading-[16px] text-[#32312B] text-justify max-w-[240px]"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
              }}
            >
              We empower organizations to discover their true ambitions and
              generate measurable momentum the determination behind their
              decisions and convert it into measurable momentum.
            </p>
          </div>

          {/* ================= DESKTOP TEXT PART (Same as Before) ================= */}
          <div className="max-w-xs text-right hidden lg:block md:block mr-[8%]">
            {/* Desktop Headings - Moved to the right */}
            {/* <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "50%",
                color: "#32312B",
                position: "absolute",
                left: "44%", // Changed from 35% to 42% to move right
                top: "7%",
              }}
              className="absolute z-20 -translate-y-1"
            >
              Determine
            </h2>

            <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "110%",
                color: "#32312B",
                position: "absolute",
                left: "44%", // Changed from 35% to 42% to move right
                top: "16%",
              }}
              className="absolute z-20"
            >
              Determination
            </h2> */}

            <img src={Determine_Determination} alt="Determine Determination" className="-translate-x-[144px] translate-y-[2px] h-[13vh] 2xl:h-[8vh]" />

            

            {/* Desktop Paragraph */}
            <p
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "9px",
                lineHeight: "13px",
                color: "#32312B",
                textAlign: "justify",
                width: "150px",
                height: "auto",
                marginTop: "6%",
                marginLeft: "12%", // Adjusted to align with new heading position
              }}
            >
              We empower organizations to discover their true ambitions and
              generate measurable momentum the determination behind their
              decisions and convert it into measurable momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Gap between sections */}
      <div className="h-8 md:h-8 lg:h-16"></div>

      <section className="w-full main-conatiner py-8 px-3 md:px-8 flex justify-center relative">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-6">
          {/* Text Part */}
          <div className="max-w-xs text-right">
            {/* <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "110%",
                letterSpacing: "0%",
                color: "#32312B",
                marginLeft: '1%'
              }}
              className="mb-2 absolute z-20 Ignite"
            >
              Ignite...{" "}
            </h2> */}

            <img src={ignite} alt="ignite" className="h-[6.5vh] 2xl:h-[4vh] 2xl:translate-y-2 translate-x-3"/>

            <p
              className="cor-para mt-[4.5%] 2xl:mt-[8%]"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "9px",
                lineHeight: "14px",
                letterSpacing: "-0%",
                color: "#32312B",
                textAlign: "justify",
                width: "170px",
                height: "auto",
                marginLeft: '8%'
              }}
            >
              Courage, Momentum and Strategic Clarity We empower leaders to act
              decisively, communicate persuasively, and influence change at
              scale. Our role is not just to advise but to ignite confidence,
              sharpen direction, and drive alignment across the enterprise.
            </p>
          </div>
          
          {/* Image + Vertical Text */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img
              src={Frame4}
              alt="Frame2"
              className="w-[200px] md:w-[230px] object-cover z-0"
            />

            {/* Curved Text */}
            <div
              className="absolute bottom-0 effective -left-[93%] text-center translate-y-5"
              style={{
                width: "450px",
                height: "30px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <img src={effective} alt="Effective" className="w-full h-auto -translate-y-2 2xl:-translate-x-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Gap between sections */}
      <div className="h-6 md:h-8 lg:h-10"></div>

      <section className="w-full bg-[#fdf8ec] flex justify-center px-3 sm:px-4 md:px-6 py-6 exl-section">
        <div className="max-w-3xl w-full relative">
          {/* ================= ROTATED TEXT (Desktop Only) ================= */}
          <span
            className="hidden SIGNATURE md:block absolute md:text-[40px] md:top-[30%] md:-left-[18%] lg:text-[38px] lg:top-[47%] lg:-left-[69px] -translate-y-1/2 -rotate-90 text-[#32312B]/20"
            style={{
              fontFamily: "Times Now",
              fontWeight: 300,
              lineHeight: "95%",
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
          >
            SIGNATURE
          </span>

          <span
            className="hidden DELIVERY md:block absolute md:text-[44px] md:top-[37%] md:-right-[19%] lg:text-[43px] lg:top-[47%] lg:-right-[50px] -translate-y-1/2 rotate-90 text-[#32312B]/20"
            style={{
              fontFamily: "Times Now",
              fontWeight: 300,
              lineHeight: "95%",
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
          >
            DELIVERY
          </span>

          {/* ================= HEADING (Mobile Left, Desktop Same) ================= */}
          {/* <h2
            style={{
              fontFamily: "Times Now",
              fontWeight: 700,
              lineHeight: "110%",
              letterSpacing: "0%",
              color: "#32312B",
            }}
            className="Envision-text
              absolute 
              top-[2%] sm:top-[2%] md:top-[2%] lg:top-[2%] lg:text-[44px]
              left-3 md:left-1/2 md:text-[40px] font-bold
              md:-translate-x-1/2
              z-20 
              text-left md:text-center
            "
          >
            Envision Excellence
          </h2> */}

          <img src={Envision_Excellence} alt="Envision Excellence" className=" h-[5vh] translate-x-44 translate-y-3 absolute z-10 2xl:translate-x-[140px] 2xl:w-[60%] 2xl:-translate-y-[2px]" />

          {/* ================= IMAGE CONTAINER ================= */}
          <div className="relative w-[85%] border border-[#3a3931] overflow-hidden ml-12 mt-8">
            <img
              src={Forest}
              alt="Forest"
              className="w-full h-[120px] z-0 sm:h-[160px] md:h-[220px] lg:h-[220px] object-cover"
            />
          </div>

          {/* ================= MOBILE SIGNATURE DELIVERY BELOW IMAGE ================= */}
          <h3
            className="block md:hidden text-center DELIVERY mt-3"
            style={{
              fontFamily: "Times Now",
              fontWeight: 300,
              fontSize: "24px",
              color: "#d8d3c7",
              letterSpacing: "1px",
            }}
          >
            SIGNATURE DELIVERY
          </h3>

          {/* ================= PARAGRAPH (Mobile Center, Desktop Same) ================= */}
          <p
            className="
              max-w-2xl mx-auto mt-2 text-start md:text-start
              text-[9px] sm:text-[9px]
              font-body text-[#32312B]
              leading-relaxed px-1
            "
            style={{
              fontFamily: "Cabinet Grotesk Variable",
              lineHeight: "14px",
              width:"100%",
              justifyContent : "center"
            }}
          >
            We enable organizations to see the future more intuitively and
            design pathways to reach it with precision, creativity, and purpose.
            By combining strategic insight, thoughtful innovation, and a deep
            understanding of evolving challenges, we help teams navigate
            complexity, make confident decisions, and move toward their
            long-term vision with clarity and meaningful impact.
          </p>
        </div>
      </section>

      {/* Gap between sections */}
      <div className="h-6 md:h-8 lg:h-10"></div>

      <section className="w-full py-8 px-3 md:px-8 flex justify-center relative main-conatiner">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-6">
          {/* Image + Vertical Text */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img
              src={Frame6}
              alt="Frame6"
              className="w-[250px] md:w-[250px] object-cover z-0"
            />

            {/* Curved Text */}
            <div
              className="absolute -bottom-[13%] effective -right-[73%] text-center"
              style={{
                width: "450px",
                height: "75px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <img src={Groups} alt="Groups" className="w-full h-auto" />
            </div>
          </div>

          {/* Text Part */}
          <div className="max-w-xs text-right">
            {/* <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "110%",
                letterSpacing: "0%",
                color: "#32312B",
                marginLeft: "-1%",
              }}
              className="mb-2 absolute z-20 Artisan"
            >
              Artisan...{" "}
            </h2> */}

            <img src={Artisan} alt="Artisan" className="-translate-x-[14px] translate-y-[4px] h-[5vh] 2xl:h-[3vh]" />

            <p className="bespoke"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "9px",
                lineHeight: "13px",
                letterSpacing: "0%",
                color: "#32312B",
                textAlign: "justify",
                width: "170px",
                height: "auto",
                marginTop: "12%",
                marginLeft: "-7%",   
              }}
            >
              We create bespoke, handcrafted solutions tailored, elegant, and
              sharply relevant. Each engagement reflects intentional design,
              thoughtful storytelling, and meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom gap */}
      <div className="h-8 md:h-12 lg:h-16"></div>
    </div>
  );
};

export default InerSection;