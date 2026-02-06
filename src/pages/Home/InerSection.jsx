import React from "react";
import Frame3 from "../../assets/Frame_Home_3.png";
import Frame4 from "../../assets/Frame_Home_4.png";
import effective from "../../assets/effective_home.png";
import Frame5 from "../../assets/Frame_Home_5.png";
import Frame6 from "../../assets/Frame_Home_6.png";
import Groups from "../../assets/Groups_Home.png";
const InerSection = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <section className="w-full py-20 px-6 md:px-16 flex justify-center relative main-section">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-10">
          {/* ================= MOBILE HEADING (Only Mobile) ================= */}
          <div className="block lg:hidden md:hidden text-center w-full mb-6 det-text-section">
            <h2
              className="text-[34px] font-bold leading-tight det-text"
              style={{ fontFamily: "Times Now", color: "#32312B" }}
            >
              Determine
            </h2>
            <h2
              className="text-[34px] font-bold leading-tight"
              style={{ fontFamily: "Times Now", color: "#32312B" }}
            >
              Determination
            </h2>
          </div>

          {/* ================= IMAGE + ROTATE TEXT ================= */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img src={Frame3} alt="Frame2" className="object-cover z-0 md:h-[370px] lg:h-[100%]"  />

            {/* ================= ROTATE TEXT (Desktop Only) ================= */}
            <span
              className="hidden lg:block   md:block absolute -left-51 top-1/2 -translate-y-1/2 -rotate-90 text-[#bdb8aa]"
              style={{
                fontFamily: "Times Now",
                fontWeight: 300,
                fontSize: "53px",
                lineHeight: "100%",
                whiteSpace: "nowrap",
              }}
            >
              INNER ENGINE
            </span>

            {/* ================= ROTATE TEXT (Mobile Bottom) ================= */}
            <span
              className="block lg:hidden md:hidden iner-text mt-4 text-[#bdb8aa]"
              style={{
                fontFamily: "Times Now",
                fontWeight: 300,
                fontSize: "32px",
                lineHeight: "100%",
                whiteSpace: "nowrap",
              }}
            >
              INNER ENGINE
            </span>

            {/* ================= PARA (Mobile Below Rotate Text) ================= */}
            <p
              className="block lg:hidden md:hidden emp-text mt-4 text-[14px] leading-[20px] text-[#32312B] text-justify max-w-[320px]"
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
          <div className="max-w-md text-right hidden lg:block md:block">
            {/* Desktop Headings */}
            <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "120%",
                color: "#32312B",
                position: "absolute",
                left: "46%",
                top: "8%",
              }}
              className="absolute z-20"
            >
              Determine
            </h2>

            <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "120%",
                color: "#32312B",
                position: "absolute",
                left: "46%",
                top: "20%",
              }}
              className="absolute z-20"
            >
              Determination
            </h2>

            {/* Desktop Paragraph */}
            <p
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "23px",
                color: "#32312B",
                textAlign: "justify",
                width: "270px",
                height: "152px",
                marginTop: "37%",
                marginLeft: "-10%",
              }}
            >
              We empower organizations to discover their true ambitions and
              generate measurable momentum the determination behind their
              decisions and convert it into measurable momentum.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full main-conatiner  py-20 px-6 md:px-16 flex justify-center relative">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-10">
          {/* Text Part */}
          {/* Text Part */}
          <div className="max-w-md text-right">
            <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#32312B",
              }}
              className="mb-4 absolute z-20 Ignite"
            >
              Ignite...{" "}
            </h2>

            <p
              className="cor-para"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "23px",
                letterSpacing: "0%",
                color: "#32312B",
                textAlign: "justify",
                width: "270px",
                height: "152px",
                marginTop: "28%",
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
              className="w-[260px] md:w-[320px] object-cover z-0"
            />

            {/* Curved Text */}
            <div
              className="absolute bottom-1  effective -left-50 text-center"
              style={{
                width: "500px",
                height: "39.388671875px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <img src={effective} />
            </div>
          </div>
        </div>
      </section>
     <section className="w-full bg-[#FBF8EE] flex justify-center px-4 sm:px-6 md:px-10 py-12 exl-section">
  <div className="max-w-6xl w-full relative">

    {/* ================= ROTATED TEXT (Desktop Only) ================= */}
    <span
      className="hidden SIGNATURE  md:block absolute md:text-[62px] md:top-[36%] md:-left-[26%] 
 lg:text-[62px] lg:top-[39%] lg:-left-[16.6%] -translate-y-1/2 -rotate-90 text-[#bdb8aa]"
      style={{
        fontFamily: "Times Now",
        fontWeight: 300,
        // fontSize: "62px",
        lineHeight: "100%",
        textAlign: "right",
        whiteSpace: "nowrap",
        // left: "-16.6%",
        // top: "39%",
      }}
    >
      SIGNATURE
    </span>

    <span
      className="hidden DELIVERY md:block absolute md:text-[70px] md:top-[37%] md:-right-[27%] lg:text-[72px] lg:top-[40%] lg:-right-[17.6%]  -translate-y-1/2 rotate-90 text-[#bdb8aa]"
      style={{
        fontFamily: "Times Now",
        fontWeight: 300,
        // fontSize: "72px",
        lineHeight: "100%",
        textAlign: "right",
        whiteSpace: "nowrap",
        // right: "-17.6%",
        // top: "40%",
      }}
    >
      DELIVERY
    </span>

    {/* ================= HEADING (Mobile Left, Desktop Same) ================= */}
    <h2
      style={{
        fontFamily: "Times Now",
        fontWeight: 700,
        // fontSize: "55px",
        lineHeight: "120%",
        letterSpacing: "0%",
        color: "#32312B",
      }}
      className=" Envision-text
        absolute 
        top-6 sm:top-8 md:-top-5  lg:-top-8 lg:text-[55px]
        left-4 md:left-1/2 md:text-[40px]
        md:-translate-x-1/2
        z-20 
        text-left md:text-center
      "
    >
      Envision Excellence
    </h2>

    {/* ================= IMAGE CONTAINER ================= */}
    <div className="relative w-full border border-[#BDBAAE] overflow-hidden">
      <img
        src={Frame5}
        alt="Forest"
        className="w-full h-[180px] z-0 sm:h-[240px] md:h-[340px] lg:h-[340px] object-cover"
      />
    </div>

    {/* ================= MOBILE SIGNATURE DELIVERY BELOW IMAGE ================= */}
    <h3
      className="block md:hidden text-center DELIVERY  mt-6"
      style={{
        fontFamily: "Times Now",
        fontWeight: 300,
        fontSize: "34px",
        color: "#d8d3c7",
        letterSpacing: "2px",
      }}
    >
      SIGNATURE DELIVERY
    </h3>

    {/* ================= PARAGRAPH (Mobile Center, Desktop Same) ================= */}
    <p
      className="
        max-w-8xl mx-auto mt-2        text-start md:text-start
        text-20 sm:text-base
        font-body text-[#4B4A45]
        leading-relaxed px-2 
      "
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

      <section className="w-full py-20 px-6 md:px-16 flex justify-center relative main-conatiner">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-10">
          {/* Text Part */}
          {/* Text Part */}

          {/* Image + Vertical Text */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img
              src={Frame6}
              alt="Frame6"
              className="w-[260px] md:w-[320px] object-cover z-0"
            />

            {/* Curved Text */}
            <div
              className="absolute -bottom-18 effective  -right-20 text-center"
              style={{
                width: "400px",
                height: "95px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <img src={Groups} />
            </div>
          </div>

          <div className="max-w-md text-right">
            <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#32312B",
              }}
              className="mb-4 absolute z-20 Artisan"
            >
              Artisan...{" "}
            </h2>

            <p className="bespoke"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0%",
                color: "#32312B",
                textAlign: "justify",
                width: "270px",
                height: "152px",
                marginTop: "28%",
              }}
            >
              We create bespoke, handcrafted solutions tailored, elegant, and
              sharply relevant. Each engagement reflects intentional design,
              thoughtful storytelling, and meaningful impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InerSection;
