import React from "react";
import layer1 from "../src/assets/image_885.png";
import layer2 from "../src/assets/image_886.png";
import cloud from "../src/assets/middle_section_img1.png"

const letters = [
  { char: "E", z: "z-10", space: 1.2 },
  { char: "n", z: "z-10", space: 0.75 },
  { char: "c", z: "z-50", space: 0.7 },
  { char: "h", z: "z-50", space: 0.8 },
  { char: "a", z: "z-50", space: 0.9 },
  { char: "n", z: "z-50", space: 0.85 },
  { char: "t", z: "z-50", space: 1.0 },
];

const BASE_SPACING = 220; // base visual unit



const CloudHero = () => {
  let offset = 0;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* CLOUD 1 */}
      <img
        src={layer1}
        alt="Cloud Layer 1"
        className="absolute top-[6%] left-0 w-[142%] z-10"
      />
      {/* ENCHANT LETTERS */}
      <div className="absolute top-[30%] left-[5%]">
        {letters.map(({ char, z, space }, index) => {
          const left = offset;
          offset += BASE_SPACING * space;

          return (
            <span
              key={index}
              className={`
                absolute
                ${z}
                font-['Luxurious_Script']
                font-normal
                text-[420px] sm:text-[480px] md:text-[560px] 2xl:text-[720px]
                leading-none
                text-[#F6F0E4]
                opacity-85
                drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)]
                select-none
              `}
              style={{ left }}
            >
              {char}
            </span>
          );
        })}
      </div>
      {/* CLOUD 2 */}
      <img
        src={layer2}
        alt="Cloud Layer 2"
        className="absolute top-[30%] left-0 w-[130%] z-20"
      />
      {/* BUILD MORE SECTION — UNCHANGED */}{" "}
      <div className=" absolute top-[0%] left-[50%] z-50 text-left max-w-md ">
        {" "}
        <h2 className=" font-['Meie_Script'] font-normal text-[40px] leading-[100%] tracking-[0] text-[#32312B] select-none ml-0 ">
          {" "}
          Build more with us{" "}
        </h2>{" "}
        <div className="mt-2 w-[420px] text-right relative left-[-100px]">
          {" "}
          <p className="font-['Times Now',serif] font-[350] text-[10px] leading-[1.2] text-[#32312B] pl-24">
            {" "}
            Explore the range and depth of our robust assortment{" "}
          </p>{" "}
          <p className="font-['Times Now',serif] font-[350] text-[10px] leading-[1.2] text-[#32312B] pl-12">
            {" "}
            of offering, tailored to address ever-evolving {" "}
          </p>{" "}
          <p className="font-['Times Now',serif] font-[350] text-[10px] leading-[1.2] text-[#32312B] pl-0">
            {" "}
            business needs and expectations.{" "}
          </p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default CloudHero;
