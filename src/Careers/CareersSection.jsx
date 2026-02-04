import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import MobImage from "../assets/mobimage.png";
import flower from "../assets/flower.png"; // make sure this is your flower image path

const CareersSection = () => {
  return (
    <section className="w-full relative">

      {/* DESKTOP / LAPTOP / TABLET */}
      <div className="hidden md:flex flex-col items-center justify-center text-center px-4 pt-28 min-h-screen">
        {/* TOP IMAGE */}
        <img src={Img1} alt="" className="w-[35px] h-[110px] md:w-[80px] mb-6" />

        {/* JOIN OUR TEAM + IMG2 */}
        <div className="relative flex items-center justify-center mt-6">
          <p
            className="absolute text-sm md:text-base"
            style={{
              left: "-54%",
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "ExtraLight",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#32312B",
            }}
          >
            Join our team of
          </p>
          <img src={Img2} alt="" className="w-[90px] md:w-[110px] -ml-10" />
          <p
            className="text-sm md:text-base ml-4 pl-5"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#32312B",
            }}
          >
            Innovators &
          </p>
        </div>

        {/* IMG3 + TEXTS */}
        <div className="relative flex items-center justify-center mt-10 inline-block">
          <p
            className="italic text-xs md:text-sm text-[#3A3A3A] absolute top-1 left-20"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "34px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            problem solving
          </p>
          <p
            className="italic text-sm md:text-base text-[#3A3A3A] mr-10 relative left-[51px]"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Collaborate with inspiring
          </p>
          <img src={Img3} alt="" className="w-[120px] md:w-[150px] translate-x-6" />
          <p
            className="italic text-sm md:text-base ml-[-81px]"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#32312B",
            }}
          >
            where Passion meets Purpose.
          </p>
        </div>

        {/* IMG4 + RIGHT TEXT */}
        <div className="relative flex items-center justify-center mt-12 w-full max-w-5xl">
          <img src={Img4} alt="" className="w-[120px] md:w-[150px] translate-x-6 absolute right-[26%]" />
          <p
            className="text-xs md:text-sm text-[#3A3A3A] absolute -top-2 right-20"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "normal",
              fontSize: "34px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            and bullda
          </p>
          <p
            className="absolute right-[1%] italic text-sm md:text-base text-[#3A3A3A] text-left max-w-md"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "ExtraLight",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#32312B",
            }}
          >
            minds, Grow your Skills,
          </p>
        </div>

        {/* IMG5 + TEXTS */}
        <div className="relative flex items-center justify-center mt-10">
          <p
            className="italic text-xs md:text-sm text-[#3A3A3A] absolute top-1 left-20"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "34px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Shapefimpact
          </p>
          <p
            className="italic text-sm md:text-base text-[#3A3A3A] mr-10 relative left-[51px]"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            meaningful future
          </p>
          <img src={Img5} alt="" />
          <p
            className="italic text-sm md:text-base ml-4"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "italic",
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            you’re proud of!
          </p>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div
        className="flex flex-col items-center justify-center md:hidden w-full h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${MobImage})`,
        }}
      >
        {/* Text blocks */}
        <div className="absolute top-[236.37px] left-[100.5px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight",
               fontSize: "15px",
               lineHeight: "100%",
               letterSpacing: "0%",
               width: "189px",
               height: "18px",
        }}>
          Join our team of Innovators &
        </div>

        <div className="absolute top-[276.37px] left-[50.5px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight Italic",
               fontSize: "15px",
               lineHeight: "100%",
               letterSpacing: "0%",
               width: "289px",
               height: "18px",
        }}>
          Problem solvers where Passion meets Purpose.
        </div>

        <div className="absolute top-[316.37px] left-[33.5px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight",
               fontSize: "15px",
               lineHeight: "100%",
               letterSpacing: "0%",
               width: "323px",
               height: "18px",
        }}>
          Collaborate with inspiring minds, Grow your Skills,
        </div>

        <div className="absolute top-[356.37px] left-[78px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight",
               fontSize: "15px",
               lineHeight: "100%",
               letterSpacing: "0%",
               width: "234px",
               height: "18px",
        }}>
          Shape impactful solutions and build a
        </div>

        <div className="absolute top-[396.37px] left-[86.5px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight Italic",
               fontSize: "15px",
               lineHeight: "100%",
               letterSpacing: "0%",
               width: "217px",
               height: "18px",
        }}>
          meaningful future you’re proud of!
        </div>

        <div className="absolute top-[436.37px] left-[137.5px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight",
               fontSize: "15px",
               lineHeight: "100%",
               letterSpacing: "0%",
               width: "115px",
               height: "18px",
        }}>
          Together, we shall
        </div>

        {/* MOBILE-ONLY CAPITALISE SECTION */}
        <div className="absolute bottom-[22%] flex items-center justify-center gap-2">
          <p
            className="italic text-[30px]"
            style={{
              fontFamily: "'Meie Script', cursive",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#32312B",
            }}
          >
            Capitalise
          </p>
          <img src={flower} alt="Flower" className="w-7" />
          <p
            className="italic text-[30px]"
            style={{
              fontFamily: "'Meie Script', cursive",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#32312B",
              marginLeft: "-24px",
            }}
          >
            Capabilities
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
