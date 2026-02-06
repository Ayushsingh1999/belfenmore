import React from "react";
import footerimg from "../../assets/footerimg_home.png"
const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden mt-20">
      
      {/* Background Image */}
      <img
        src={footerimg}
        alt="Footer Background"
        className="w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 flex items-end justify-center">
        
        {/* Content Box */}
        <div className="w-full max-w-5xl px-4 sm:px-6 pb-8 sm:pb-12 text-center text-[#F9F7F0]">
          
          <h2
            className="uppercase tracking-wide"
            style={{
              fontFamily: "Times New Roman",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 400,
            }}
          >
            Achieve More With Belfenmore
          </h2>

          <p
            className="mt-2"
            style={{
              fontFamily: "Cabinet Grotesk Variable",
              fontSize: "clamp(12px, 2vw, 14px)",
              opacity: 0.85,
            }}
          >
            UK · India · MENA · APAC · NL · AUS
          </p>

          <div className="mt-4 text-xs opacity-70">
            © 2025 Belfenmore Consulting
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
