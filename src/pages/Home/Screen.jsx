import Frame1 from "../../assets/Frame_Home_1.png";
import Purpose from "../../assets/Purpose_Home.png";
import Frame2 from "../../assets/Frame_Home_2.png";
import built from "../../assets/built_home.png"
const Screen = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdf8ec] overflow-hidden ">
      {/* ================= Frame1 Section ================= */}
      <div className="cap-img">
      <section className="relative w-full flex flex-col items-center cap-text text-center py-10 md:py-20 lg:py-32">
        {/* Top Text */}
        <h1
          className="text-[6.5rem] captext sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-serif mb-2"
          style={{
            fontFamily: "Edwardian Script ITC, cursive",
            color: "#3A3931",
            fontWeight: 400,
            position: "absolute",
            top: "2%",
          }}
        >
          Capitalize
        </h1>

        {/* Frame1 Image */}
        <img
          src={Frame1}
          alt="Frame1"
          className="w-70 sm:w-48 md:w-56 lg:w-64 mb-2"
        />

        {/* Bottom Text */}
        <h1
          className="text-[6.5rem] captext1 sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-serif mt-2 z-20"
          style={{
            fontFamily: "Edwardian Script ITC, cursive",
            fontWeight: 400,
            position: "absolute",
            color: "#3A3931",
            bottom: "8%",
          }}
        >
          Capabilities
        </h1>
      </section>
      </div>

      {/* ================= Purpose Section ================= */}
  <section
  className="relative w-full  h-80 md:h-[400px] lg:h-[500px] flex items-center justify-center hidden md:block"
  style={{ marginBottom: "-17%" }}
>
  <img
    src={Purpose}
    alt="Purpose"
    className="absolute inset-0 w-full h-full object-cover z-0"
    style={{ top: "-48%" }}
  />
</section>


      {/* ================= Frame2 + Text Section ================= */}
 <section className="w-full py-20 px-6 md:px-16 flex justify-center relative main-conatiner">
  <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-center gap-10">

    {/* ================= TEXT PART ================= */}
    <div className="max-w-md text-right relative">

      {/* ===== Heading ===== */}
      <h2
        style={{
          fontFamily: "Times Now",
          fontWeight: 700,
          lineHeight: "120%",
          color: "#32312B",
        }}
        className="
          text-darktext mb-4 z-20
          absolute md:static
          text-left md:text-right
          text-[30px] md:text-[55px]
        "
      >
        Consulting <br /> Craftsmanship
      </h2>

      {/* ===== Paragraph (Desktop + iPad) ===== */}
      <p
        style={{
          fontFamily: "Cabinet Grotesk Variable",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "30px",
          marginTop: "18px",
          marginLeft: "-37px",
        }}
        className="
          text-darktext
          hidden md:block
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
          w-[260px] md:w-[1000px] lg:w-[320px]
          object-cover z-0 mt-2
        "
      />

      {/* ===== CORE IDENTITY (Desktop + iPad same) ===== */}
      <span
        className="
          text-[#bdb8aa]
          static mt-4 md:mt-2 rotate-0
          md:absolute md:-right-46 md:top-1/2 lg:-right-60 lg:top-1/2
          md:-translate-y-1/2 md:rotate-90
          text-[32px] md:text-[45px]  lg:text-[58px]  core-ident-text
          text-left
        "
        style={{
          fontFamily: "Times Now",
          fontWeight: 300,
          lineHeight: "100%",
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
          fontSize: "14px",
          lineHeight: "18px",
        }}
        className="
          text-darktext mt-4 text-left
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


      <section className="w-full py-20 px-6 md:px-16 flex justify-center relative main-conatiner">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row md:flex-row  items-start justify-center gap-10">
          {/* Text Part */}
          {/* Text Part */}

          {/* Image + Vertical Text */}
          <div className="relative flex flex-col items-center">
            {/* Image */}
            <img
              src={Frame2}
              alt="Frame2"
              className="w-[260px] md:w-[320px] object-cover z-0"
            />

            {/* Curved Text */}
           <div
                         className="absolute bottom-1  -left-8 text-center"
                         style={{
                           width: "364",
                           height: "30px",
                           opacity: 1,
                           transform: "rotate(0deg)",
                           
                         }}
                       >
                         <img src={built} />
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
              className="mb-4 absolute z-20 strv-text"
            >
              Strive...
            </h2>

            <p className="para-text-code"
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
              to Elevate Thinking, Transform Action, and Institutionalise
              Excellence. We partner with clients to create solutions that
              endure systems that outlive leaders, strategies that adapt over
              time, and capabilities that become part of the organization’s DNA.
              We don’t just solve problems; we build institutions that stay
              solved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Screen;
