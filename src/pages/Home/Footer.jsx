import React from "react";
import footerimg from "../../assets/footerimg_home.png";
import belfenmore_img from "../../assets/Bel_svg.svg";
import Captailize_img from "../../assets/Capatalize_vector.svg";
import logo from "../../assets/threadlity_logo.svg"

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#fdf8ec] pt-[132px]">
      {/* Background Image */}
      <img
        src={footerimg}
        alt="Footer Background"
        className="w-[1920px] h-[420px] sm:h-[500px] md:h-[600px] lg:h-[660px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 flex items-end justify-center pb-[3%]">
        {/* Content Box */}
<div
  className="relative w-[550px] h-[140px] max-w-5xl px-4 py-8 
  text-center text-[#F9F7F0] rounded-[10px] 
  backdrop-blur-[1px] 
  bg-[rgba(48,38,27,0.4)] 
  border border-white/10 
  shadow-lg"
>

          {/* Top row: Email (left) and Copyright (right) */}
          <div className="absolute top-1 left-2">
            <p
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(11px, 1.3vw, 11px)",
                fontWeight: 400,
                color: "#EFDA56",
              }}
            >
              more@belfenmore.com ↗
            </p>
          </div>

          <div className="absolute top-1 right-3">
            <div
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(11px, 1.3vw, 12px)",
                opacity: 0.8,
              }}
            >
              © 2025
            </div>
          </div>

          {/* Main Content */}
          <div className="pt-3 w-full">
            <img
              src={Captailize_img}
              alt="captalize capabilties"
              className="-translate-y-4 mx-auto"
            />
            {/* Main Heading */}
            <h2
              className="uppercase tracking-[0.1em] mb-2 z-10 -translate-y-20"
              style={{
                fontFamily: "Times Now",
                fontSize: "clamp(16px, 2.5vw, 26px)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              ACHIEVE MORE WITH BELFENMORE
            </h2>

            {/* <img src={logo} alt="logo" className="-translate-y-20 x-translate- h-[10px] w-[10x]"/> */}

            {/* Locations */}
            <p
              className="mb-6 -translate-y-[90px]"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(6px, 1.2vw, 8px)",
                fontWeight: 100,
                opacity: 1,
                letterSpacing: "0.3em",
              }}
            >
              USA • UK • MENA • APAC • NL • AUS
            </p>

            {/* Parent Company */}
            {/* <div 
              className="mb-1"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(10px, 1.2vw, 12px)",
                fontWeight: 300,
                opacity: 0.8,
                fontStyle: "italic",
              }}
            >
              A Thredality Company
            </div> */}

            {/* Company Name with border and styling */}
            {/* <div 
              className="inline-block mt-2 pl-0 pr-0 w-full"
              style={{
                fontFamily: "Times Now",
                fontWeight: 200,
                fontSize: "clamp(24px, 3vw, 36px)",
                letterSpacing: "0.02em",
                color: "#EFDA56",
              }}
            >
              Belfenmore Consulting
            </div> */}

            <img
              src={belfenmore_img}
              alt="belfenmore"
              className="absolute w-[660px]"
              style={{
                bottom: "0%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 5, // Lower z-index than content box
                opacity: 0.9, // Optional: slight transparency for better effect
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
