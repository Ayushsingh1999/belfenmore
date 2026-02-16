import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import MobImage from "../assets/mobimage.png";
import flower from "../assets/flower.png";
import Articulate from "../assets/Articulate.png";
import Capitalize_Capabilities from "../assets/Capitalize_Capabilities.png"

const CareersSection = () => {
  return (
    <section className="w-full relative">
      {/* DESKTOP / LAPTOP / TABLET */}
      <div className="hidden md:flex flex-col items-center justify-center text-center pt-2 min-h-screen">
        
        {/* ROW 1: Join our team of [Img2] Innovators & */}
        <div className="relative flex items-center justify-center mt-2">
          <p className="text-[#32312B] font-['Times_Now'] font-light text-[22px]">
            Join our team of
          </p>
          <img src={Img1} alt="" className="w-[40px] h-[70px] mx-4 -translate-y-5" />
          <p className="text-[#32312B] font-['Times_Now'] font-light italic text-[22px]">
            Innovators &
          </p>
        </div>

        {/* ROW 2: Problem solvers [Img3] where Passion meets Purpose. */}
        <div className="relative flex items-center justify-center mt-1">
          <p className="text-[#3A3A3A] font-['Times_Now'] font-normal text-[22px] mr-2">
            Problem solvers
          </p>
          <img src={Img2} alt="" className="w-[80px] md:w-[80px] h-[40px] mx-2" />
          <p className="text-[#32312B] font-['Times_Now'] font-light italic text-[22px]">
            where Passion meets Purpose.
          </p>
        </div>

        {/* ROW 3: Collaborate with inspiring [Img4] minds, Grow your Skills, */}
        <div className="relative flex items-center justify-center mt-8">
          <p className="text-[#32312B] font-['Times_Now'] font-light text-[22px] mr-2">
            Collaborate with inspiring
          </p>
          <img src={Img3} alt="" className="w-[100%] md:w-[110px] mx-2" />
          <p className="text-[#32312B] font-['Times_Now'] font-extralight text-[22px]">
            minds, Grow your 
          </p>
           <p className="text-[#32312B] font-['Times_Now'] font-extralight italic text-[22px] ml-2">
            Skills,
          </p>
        </div>

        {/* ROW 4: Shape impactful solutions [Img5] and build a */}
        <div className="relative flex items-center justify-center mt-8">
          <p className="text-[#3A3A3A] font-['Times_Now'] font-normal text-[22px] mr-2">
            Shape impactful solutions
          </p>
          <img src={Img4} alt="" className="w-[46%] md:w-[120px] mx-2" />
          <p className="text-[#32312B] font-['Times_Now'] font-light text-[22px]">
            and build a
          </p>
        </div>

        {/* ROW 5: meaningful future ______ you're proud of! */}
        <div className="relative flex items-center justify-center mt-4">
          <p className="text-[#32312B] font-['Times_Now'] font-light italic text-[22px] mr-2">
            meaningful future
          </p>
          <img src={Img5} alt="" className="w-[37%] mx-2" />
          <p className="text-[#32312B] font-['Times_Now'] font-light italic text-[22px]">
            you're proud of!
          </p>
        </div>

        {/* CAPITALISE SECTION FOR DESKTOP */}
        <div className="w-full relative flex flex-col items-center justify-center py-28  md:py-32">
          {/* SUB TEXT */}
          <p
            className="text-center mt-6 md:-mt-20 text-[#4A4A4A]"
            style={{
              fontFamily: "Times Now",
              fontWeight: 250,
              fontStyle: "extraLight",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Together, we shall
          </p>

          <div>
            <img src={Capitalize_Capabilities} alt="Capitalize Capabilities"  className="h-[9vh] translate-x-3 translate-y-32" />
          </div> 

          {/* ARTICULATE IMAGE ON TOP */}
          <div className="mb-12 w-full flex justify-center">
            <img
              src={Articulate}
              alt="Articulate"
              className="w-full object-contain"
            />
          </div>
          
          {/* LOGO TEXT WITH FLOWER CENTER */}
          {/* <div
            className="mt-[-400px] flex items-center justify-center gap-3"
            style={{ position: "absolute" }}
          >
            <p
              className="italic"
              style={{
                fontFamily: "'Meie Script', cursive",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "42px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#32312B",
              }}
            >
              Capitalize
            </p>
            <img src={flower} alt="Flower" className="w-16 md:w-16" />
            <p
              className="font-serif italic text-2xl md:text-3xl"
              style={{
                fontFamily: "'Meie Script', cursive",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "42px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#32312B",
                marginLeft: "-31px",
              }}
            >
              Capabilities
            </p>
          </div> */}


          
{/* APPLY BUTTON FIXED BOTTOM RIGHT */}
<button
  className="fixed bottom-4 right-4 z-50 bg-[#FFE95A] py-1.5"
  style={{
    borderRadius: "4.5px",
    fontFamily: "Times Now",
    fontWeight: 600,
    fontStyle: "italic",
    fontSize: "13px",
    color: "#32312B",
    width: "95px",
    border: "1px solid #32312B",
  }}
>
  Apply now
</button>

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
          meaningful future you're proud of!
        </div>

        <div className="absolute top-[436.37px] left-[137.5px] text-[#32312B]"
             style={{
               fontFamily: "Times Now",
               fontWeight: 250,
               fontStyle: "ExtraLight",
               fontSize: "12px",
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
            Capitalize
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