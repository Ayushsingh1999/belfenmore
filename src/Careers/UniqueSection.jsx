import React from "react";
import BgLeaf from "../assets/leaf.png";
import Differentiate from "../assets/Differentiate.png";
import Leaf1 from "../assets/leaf1.png";
import Leaf2 from "../assets/leaf2.png";
import B from "../assets/theBimage.png"
import bleaf from "../assets/bleaf.png";
import work from "../assets/workatBelfenmore.png";
const UniqueSection = () => {
  return (
    <>
      {/* ================= EXISTING SECTION ================= */}
      <section className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full">
          {/* 🔹 TOP IMAGE WITH CENTER TEXT */}
          <div className="relative w-full mb-12 flex justify-center -translate-y-14 2xl:-translate-y-[150px]">
            <img
              src={Differentiate}
              alt="What makes us unique"
              className="w-full max-w-[450px] object-cover sm:max-w-[450px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2
                className="text-center text-[10px] sm:text-[60px] md:text-[40px]"
                style={{
                  fontFamily: "Times Now",
                  fontWeight: 500,
                  color: "#32312B",
                  lineHeight: "100%",
                }}
              >
                What makes us Unique?
              </h2>
            </div>
          </div>

          {/* 🔹 DESKTOP / TABLET LEAF + TEXT */}
          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 items-center gap-0 -translate-y-20 2xl:-translate-y-[160px]">
            <div className="flex justify-center">
              <img
                src={B}
                alt="Decorative Leaf"
                className="w-[700px] max-w-[700px] lg:max-w-[700px] translate-x-[270px]"
              />
            </div>

            {/* <div className="w-full italic" style={{ marginLeft: "-16%" }}>
              <div className="space-y-6">
                <Item
                  title="Oldness"
                  desc="We take courageous steps and embrace challenges with confidence"
                />
                <Item
                  title="Balance"
                  desc="We foster harmony between work, innovation, and well-being"
                />
                <Item
                  title="Brilliance"
                  desc="We pursue excellence and shine in everything we deliver"
                />
                <Item
                  title="Belonging"
                  desc="We create an inclusive environment where everyone feels valued"
                />
              </div>
            </div> */}
          </div>

          {/* 🔹 MOBILE LAYOUT */}
          <div
            className="sm:hidden flex flex-col gap-4 relative"
            style={{ marginTop: "-167px" }}
          >
            <div className="absolute top-40 left-1/2 -translate-x-1/2 z-30 w-[80%]">
              <button
                className="bg-[#FFD84D] w-full px-6 py-3 text-sm font-semibold text-center"
                style={{
                  borderRadius: "12px",
                  fontFamily: "'Petit Formal Script', cursive",
                  fontWeight: 700,
                  color: "#32312B",
                  borderColor:"#32312B",
                  borderWidth:"1px"
                }}
              >
                Apply Now
              </button>
            </div>
            <div className="relative flex items-start gap-6 mt-24 px-20">
              {/* ✅ BLEAF IMAGE */}
              <img src={bleaf} alt="B Leaf" className="w-full h-auto -ml-2" />

              {/* ✅ RIGHT SIDE TITLES */}
              <div className="flex flex-col gap-6 mt-10">
                <h3
                  className="italic text-[18px]"
                  style={{
                    fontFamily: "'Petit Formal Script', cursive",
                    fontWeight: 400,
                    color: "#32312B",
                  }}
                >
                  Oldness
                </h3>

                <h3
                  className="italic text-[18px]"
                  style={{
                    fontFamily: "'Petit Formal Script', cursive",
                    fontWeight: 400,
                    color: "#32312B",
                  }}
                >
                  Balance
                </h3>

                <h3
                  className="italic text-[18px]"
                  style={{
                    fontFamily: "'Petit Formal Script', cursive",
                    fontWeight: 400,
                    color: "#32312B",
                  }}
                >
                  elonging
                </h3>
              </div>
            </div>

            {/* SECOND ROW: 2x2 items */}
            <div className="flex w-full gap-4 px-4">
              {/* RIGHT: 2x2 items */}
              <div className="flex-1 grid grid-cols-2 gap-2">
                <ItemMobile
                  title="Oldness"
                  desc="We take courageous steps and embrace challenges with confidence"
                />
                <ItemMobile
                  title="Balance"
                  desc="We foster harmony between work, innovation, and well-being"
                />
                <ItemMobile
                  title="Brilliance"
                  desc="We pursue excellence and shine in everything we deliver"
                />
                <ItemMobile
                  title="Belonging"
                  desc="We create an inclusive environment where everyone feels valued"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW BELOW SECTION ================= */}
      <section className="w-full flex flex-col justify-start relative overflow-hidden px-4 md:px-8 lg:px-16">
        {/* Background Leaves */}
        {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <img
            src={Leaf2}
            alt="Leaf Left"
            className="absolute left-[10%] sm:left-[15%] md:left-[22%] w-[150px] sm:w-[300px] md:w-[400px] lg:w-[420px] rotate-[-8deg]"
          />
          <img
            src={Leaf1}
            alt="Leaf Right"
            className="absolute right-[10%] sm:right-[15%] md:right-[25%] w-[150px] sm:w-[300px] md:w-[400px] lg:w-[420px] rotate-[6deg]"
          />
        </div> */}

        {/* Headings on top of images */}
        <div className="relative z-20 flex flex-col items-center text-center translate-x-2 -translate-y-14">
              <img
                src={work}
                alt="work at Belfenmore"
                className="w-[700px] max-w-[700px] lg:max-w-[700px] -translate-x-10 translate-y-10"
              />
        </div>

        {/* Paragraph below, right-aligned */}
        <span className="relative z-20 md:absolute md:top-[65%] w-full md:w-[700px] px-4 translate-y-16 -translate-x-3">
          <span
            className="font-light text-right md:text-right text-center"
            style={{
              fontFamily: "Times Now",
              fontWeight: 300,
              fontStyle: "Light",
              color: "#32312B",
              fontSize: "11px",
              lineHeight: "120%",
              letterSpacing: "0%",
              transform: "rotate(0deg)",
              opacity: 1,
              leadingTrim: "CAP_HEIGHT",
            }}
          >
            <span className="block pl-0 md:pl-20">
              work on game changing challenges that sharpen skills and amplify
            </span>
            <span className="block pl-0">
              critical thinking. We accelerate career beyond the ordinary
              through cutting
            </span>
            <span className="block pl-0 md:pl-20">
              edge tools, bold opportunities, and ecosystem which
              champion your growth.
            </span>
          </span>
        </span>
      </section>
    </>
  );
};

const Item = ({ title, desc }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-20">
      <h3
        style={{
          fontFamily: "'Petit Formal Script', cursive",
          fontWeight: 400,
          fontSize: "36px",
          lineHeight: "100%",
          color: "#32312B",
          fontStyle: "italic",
        }}
      >
        {title}
      </h3>

      <p
        className="mt-3"
        style={{
          fontFamily: "Cabinet Grotesk Variable",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "100%",
          whiteSpace: "nowrap",
          color: "#32312B",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

// Mobile version for 2x2 layout
const ItemMobile = ({ title, desc }) => {
  return (
    <div className="flex flex-col p-4">
      {" "}
      {/* Added padding on all sides */}
      <h3
        style={{
          fontFamily: "Cabinet Grotesk Variable",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "21px",
          lineHeight: "1.3", // increased line-height for better readability
          letterSpacing: "0%",
          textAlign: "justify",
          color: "#32312B",
          marginBottom: "8px", // spacing between title and description
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Cabinet Grotesk Variable",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "16px",
          lineHeight: "1.5", // slightly larger line-height for paragraph
          letterSpacing: "0%",
          textAlign: "justify",
          color: "#32312B",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default UniqueSection;
