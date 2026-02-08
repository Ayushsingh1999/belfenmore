import React from "react";
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame1.png";
import CenterImg from "../assets/images1.png";

const Journey = () => {
  return (
    <div className="relative w-full -translate-x-4">

      {/* ===================== JOURNEY INDEPENDENT ===================== */}
      <div className="relative w-full flex justify-center translate-y-32">

        {/* FRAMES */}
        <img
          src={Frame}
          className="absolute top-6 w-[190px] h-[70px] z-20 -translate-x-[230px]"
        />
        <img
          src={Frame1}
          className="absolute top-6 w-[190px] h-[70px] z-20 translate-x-[250px]"
        />

        {/* CONTENT */}
        <div className="relative flex justify-center z-30">
          <div className="w-[620px] flex flex-col">

            {/* HEADING */}
            <div className="text-center mt-24 mb-14 -translate-y-20 translate-x-4">
              <h2
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 600,
                  fontSize: "40px",
                  lineHeight: "100%",
                }}
                className="text-[#32312B]"
              >
                Be part of our
              </h2>

              <h1
                style={{
                  fontFamily: "Luxurious Script",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "100%",
                }}
                className="text-[#FFE95A] -mt-[30px] -translate-x-4 drop-shadow-[1.2px_0.9px_0_#32312B]"
              >
                Journey
              </h1>
            </div>

          </div>
        </div>
      </div>

      {/* ===================== ZIG ZAG WITH BACKGROUND ===================== */}
      <div
        className="relative w-full flex justify-center pt-4 pb-40"
        style={{
  backgroundImage: `url(${CenterImg})`,
  backgroundSize: "contain",   // control exact width
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "700px"
        }}
      >
        <div className="w-[620px] flex flex-col">

          {/* ZIG ZAG GRID */}
          <div className="grid grid-cols-2 gap-y-14 text-[1px] relative z-20 translate-x-32 translate-y-32">

            {/* LEFT: POTENTIAL */}
            <div className="pr-4 relative -translate-y-24 translate-x-10">

              <p
                style={{
                  fontFamily: "Cabinet Grotesk Variable",
                  fontWeight: 300,
                  fontSize: "11px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "100px",
                  left: "0",
                  zIndex: 30,
                  width: "170px",
                }}
              >
                Establish mentorship programs, training and certification,
                external representation in industry events and career guidance
              </p>

              <p
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 200,
                  fontSize: "35px",
                  lineHeight: "26px",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "60px",
                  left: "-9px",
                  zIndex: 40,
                }}
              >
                Potential
              </p>

              <h3
                style={{
                  fontFamily: "Luxurious Script",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "100%",
                  color: "#FFE95A",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                Elevate
              </h3>
            </div>

            <div />

            {/* RIGHT: COMMUNITY */}
            <div />
            <div className="pr-4 relative -translate-x-16 -translate-y-24">

              <p
                style={{
                  fontFamily: "Cabinet Grotesk Variable",
                  fontWeight: 300,
                  fontSize: "11px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "100px",
                  left: "0",
                  zIndex: 30,
                  width: "170px",
                }}
              >
                encourage innovation though community initiatives. that
                empower and inspire progress, unity, and shared growth.
              </p>

              <p
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 200,
                  fontSize: "35px",
                  lineHeight: "26px",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "55px",
                  left: "-26px",
                  zIndex: 40,
                }}
              >
                Community
              </p>

              <h3
                style={{
                  fontFamily: "Luxurious Script",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "100%",
                  color: "#FFE95A",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                Elevate
              </h3>
            </div>

            {/* LEFT: TALENT */}
            <div className="pr-4 relative translate-x-10 -translate-y-28">

              <p
                style={{
                  fontFamily: "Cabinet Grotesk Variable",
                  fontWeight: 300,
                  fontSize: "11px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "100px",
                  left: "0",
                  zIndex: 30,
                  width: "170px",
                }}
              >
                leadership development for emerging leaders, high potential
                recognition, accelerated promotions and internal mobility
              </p>

              <p
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 200,
                  fontSize: "35px",
                  lineHeight: "26px",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "50px",
                  left: "14px",
                  zIndex: 40,
                }}
              >
                TALENT
              </p>

              <h3
                style={{
                  fontFamily: "Luxurious Script",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "100%",
                  color: "#FFE95A",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                Elevate
              </h3>
            </div>

            <div />

            {/* RIGHT: YOU */}
            <div />
            <div className="pr-4 relative -translate-x-16 -translate-y-32">

              <p
                style={{
                  fontFamily: "Cabinet Grotesk Variable",
                  fontWeight: 300,
                  fontSize: "11px",
                  lineHeight: "18px",
                  textAlign: "justify",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "100px",
                  left: "0",
                  zIndex: 30,
                  width: "170px",
                }}
              >
                Innovation first mindset - spark great conversations as ideas win
                here. structure your growth plan with competitive rewards
              </p>

              <p
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 200,
                  fontSize: "35px",
                  lineHeight: "26px",
                  textTransform: "uppercase",
                  color: "#32312B",
                  position: "absolute",
                  top: "50px",
                  left: "14px",
                  zIndex: 40,
                }}
                className="translate-x-10"
              >
                YOU
              </p>

              <h3
                style={{
                  fontFamily: "Luxurious Script",
                  fontWeight: 400,
                  fontSize: "90px",
                  lineHeight: "100%",
                  color: "#FFE95A",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                Elevate
              </h3>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
