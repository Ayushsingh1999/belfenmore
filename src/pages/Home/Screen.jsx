import Frame1 from "../../assets/Frame_Home_1.png";
import Frame from "../../assets/Frame_2.png"
import Purpose from "../../assets/Purpose.svg";
import Frame2 from "../../assets/Frame_Home_2.png";
import built from "../../assets/built_home.png";
import Capitalize from "../../assets/Capitalize_Home.png";
import Capabilities from "../../assets/Capabilities_Home.png";
import BuilttoStrive from "../../assets/buildtolast.svg"

const Screen = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdf8ec] overflow-hidden pt-13 md:pt-13 lg:pt-25">
      
      {/* ================= Frame1 Section ================= */}
      <div className="cap-img">
        <section className="relative w-full flex flex-col items-center cap-text text-center py-10 md:py-20 lg:py-32">
          
          {/* Capitalize Image */}
          <div
            className="absolute top-2%"
            style={{
              position: "absolute",
              top: "11%",
              zIndex: "20", // Increased z-index
            }}
          >
            <img
              src={Capitalize}
              alt="Capitalize"
              className="w-auto h-auto"
              style={{
                maxWidth: "500px",
                maxHeight: "170px",
                width: "clamp(250px, 35vw, 450px)",
                height: "auto"
              }}
            />
          </div>

          {/* Frame1 Image - Increased size */}
          <img
            src={Frame1}
            alt="Frame1"
            className="mb-2"
            style={{
              width: "clamp(240px, 31vw, 390px)",
              height: "auto",
              maxWidth: "340px",
              position: "relative",
              zIndex: "10", // Lower z-index than text images
            }}
          />

          {/* Capabilities Image */}
          <div
            className="absolute bottom-8%"
            style={{
              position: "absolute",
              bottom: "11%",
              zIndex: "20", // Increased z-index
            }}
          >
            <img
              src={Capabilities}
              alt="Capabilities"
              className="w-auto h-auto"
              style={{
                maxWidth: "550px",
                maxHeight: "170px",
                width: "clamp(400px, 45vw, 600px)",
                height: "auto"
              }}
            />
          </div>
        </section>
      </div>

      {/* ================= Purpose Section ================= */}
      <section
        className="relative w-full h-100 md:h-[450px] lg:h-[550px] flex items-center justify-center hidden md:block"
        style={{ marginBottom: "-17%" }}
      >
        <img
          src={Purpose}
          alt="Purpose"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ top: "-50%" }}
        />
      </section>

      {/* ================= Frame2 + Text Section ================= */}
      <section className="w-full py-8 px-4 md:px-8 flex justify-center relative main-conatiner translate-x-4" style={{ marginTop: "-30%", marginLeft: "5%"  }}>
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-start justify-center ">
          {/* ================= TEXT PART ================= */}
          <div className="max-w-xs text-right relative">
            {/* ===== Heading ===== */}
            <h2
              style={{
                position: "relative",
                left: "25%",
                fontFamily: "Times Now",
                lineHeight: "110%",
                color: "#32312B",
              }}
              className="
                font-black mb-2 z-20
                absolute md:static
                text-left md:text-right
                text-[44px] md:text-[44px] 
              "
            >
              Consulting <br /> Craftsmanship
            </h2>

            {/* ===== Paragraph (Desktop + iPad) ===== */}
            <p
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "9px",
                lineHeight: "12px",
                marginTop: "12px",
                marginLeft: "0px",
                marginRight: "1px",
                width: "280px"
              }}
              className="
                text-darktext
                hidden md:block
                -translate-x-[12px]
                -translate-y-[5px]
              "
            >
              We deliver consulting as a craft — precise, disciplined, and
              deeply human. Every engagement is shaped with mastery,
              intellectual rigour, and the care of artisans who take pride in
              their work.
            </p>
          </div>

          {/* ================= IMAGE + TEXT GROUP ================= */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center">
            {/* ===== Image ===== */}
            <img
              src={Frame2}
              alt="Frame2"
              className="
                w-[180px] md:w-[200px] lg:w-[220px]
                object-cover z-0 mt-0
                -translate-x-2
              "
            />

            {/* ===== CORE IDENTITY (Desktop + iPad same) ===== */}
            <span
              className="
                text-[#32312b]/20
                static mt-2 md:mt-0 rotate-0
                md:absolute md:-right-32 md:top-1/2 lg:-right-[147.5px] lg:top-1/2
                md:-translate-y-1/2 md:rotate-90
                text-[22px] md:text-[34px] lg:text-[38px] core-ident-text
                text-left
              "
              style={{
                fontFamily: "Times Now",
                fontWeight: 300,
                lineHeight: "95%",
                whiteSpace: "nowrap",
              }}
            >
              CORE IDENTITY
            </span>

            {/* ===== Paragraph (Mobile Only — untouched) ===== */}
            <p
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "11px",
                lineHeight: "15px",
              }}
              className="
                text-darktext mt-2 text-left
                block md:hidden
              "
            >
              We deliver consulting as a craft — precise, disciplined, and
              deeply human. Every engagement is shaped with mastery,
              intellectual rigour, and the care of artisans who take pride in
              their work.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-8 px-4 md:px-8 flex justify-center relative main-conatiner" style={{ marginTop: "2%", marginLeft: "2%" }}>
        <div className="max-w-4xl w-full flex flex-col lg:flex-row md:flex-row items-start justify-center gap-6">
          {/* Image + Vertical Text */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img
              src={Frame}
              alt="Frame2"
              className="w-[220px] md:w-[240px] object-cover z-0"
            />

            {/* Curved Text */}
            <div
              className="absolute bottom-0 -left-4 text-center "
              style={{
                width: "255px",
                height: "15px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            >
              <img src={BuilttoStrive} alt="Built" className="w-full h-auto -translate-y-3" />
            </div>
          </div>

          {/* Text Part */}
          <div className="max-w-xs text-right">
            <h2
              style={{
                fontFamily: "Times Now",
                fontWeight: 700,
                fontSize: "44px",
                lineHeight: "110%",
                marginLeft: "-1%",
                letterSpacing: "0%",
                color: "#32312B",
              }}
              className="mb-2 absolute z-20 strv-text"
            >
              Strive...
            </h2>

            <p
              className="para-text-code"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontWeight: 400,
                fontSize: "9px",
                lineHeight: "13px",
                color: "#32312B",
                textAlign: "justify",
                width: "190px",
                height: "auto",
                marginTop: "30%",
                marginLeft: "-7%",
              }}
            >
              to Elevate Thinking, Transform Action, and Institutionalise
              Excellence. We partner with clients to create solutions that
              endure systems that outlive leaders, strategies that adapt over
              time, and capabilities that become part of the organization's
              DNA. We don't just solve problems; we build institutions that
              stay solved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screen;