import React from "react";
import footerimg from "../../assets/footerimg_home.png";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#fdf8ec]">
      
      {/* Background Image */}
      <img
        src={footerimg}
        alt="Footer Background"
        className="w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 flex items-end justify-center pb-[3%]">
        
        {/* Content Box */}
        <div 
          className="relative w-[50%] h-auto max-w-5xl px-4 py-8 text-center text-[#F9F7F0] rounded-[10px]"
          style={{
            backgroundColor: "rgba(48, 38, 27, 0.4)",
          }}
        >
          {/* Top row: Email (left) and Copyright (right) */}
          <div className="absolute top-3 left-4">
            <p
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(11px, 1.3vw, 13px)",
                fontWeight: 400,
                color: "#EFDA56"
              }}
            >
              more@belfenmore.com ↗
            </p>
          </div>

          <div className="absolute top-3 right-4">
            <div 
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(11px, 1.3vw, 13px)",
                opacity: 0.8,
              }}
            >
              © 2025
            </div>
          </div>

          {/* Main Content */}
          <div className="pt-3 w-full">
            {/* Main Heading */}
            <h2
              className="uppercase tracking-[0.1em] mb-2"
              style={{
                fontFamily: "Times Now",
                fontSize: "clamp(16px, 2.5vw, 22px)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              ACHIEVE MORE WITH BELFENMORE
            </h2>

            {/* Locations */}
            <p
              className="mb-6"
              style={{
                fontFamily: "Cabinet Grotesk Variable",
                fontSize: "clamp(10px, 1.2vw, 12px)",
                fontWeight: 400,
                opacity: 0.9,
                letterSpacing: "0.03em",
              }}
            >
              USA • UK • MENA • APAC • NL • AUS
            </p>

            {/* Parent Company */}
            <div 
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
            </div>

            {/* Company Name with border and styling */}
            <div 
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
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;