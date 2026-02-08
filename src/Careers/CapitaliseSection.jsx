// src/components/CapitaliseSection.jsx
import React from "react";
import flower from "../assets/flower.png"; // Flower center image
import Articulate from "../assets/Articulate.png"; // Background image

const CapitaliseSection = () => {
  return (
    <section className="hidden md:flex relative w-full flex-col items-center justify-center py-28 px-4 md:py-32">
      {/* SUB TEXT */}
      <p
        className="text-center mt-6 md:-mt-20 text-[#4A4A4A]"
        style={{
          fontFamily: "Times Now",
          fontWeight: 250,
          fontStyle: "extraLight",
          fontSize: "22 px",
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        Together, we shall
      </p>

      {/* ARTICULATE IMAGE ON TOP */}
      <div className="mb-12 w-full flex justify-center">
        <img
          src={Articulate}
          alt="Articulate"
          className="w-full object-contain"
        />
      </div>
      {/* LOGO TEXT WITH FLOWER CENTER */}
      <div
        className="mt-[-400px] flex items-center justify-center gap-3"
        style={{ position: "absolute" }}
      >
        <p
          className="italic"
          style={{
            fontFamily: "'Meie Script', cursive",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "47.46px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#32312B",
          }}
        >
          Capitalise
        </p>
        <img src={flower} alt="Flower" className="w-10 md:w-10" />
        <p
          className="font-serif italic text-2xl md:text-3xl"
          style={{
            fontFamily: "'Meie Script', cursive",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "47.46px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#32312B",
            marginLeft: "-31px",
          }}
        >
          Capabilities
        </p>
      </div>
      {/* APPLY BUTTON */}
      <button
        className="absolute right-8 bg-[#FFD84D] px-4 py-2 hover:scale-105 transition-transform"
        style={{
          borderRadius: "5px",
          fontFamily: "Times Now",
          fontWeight: 600,
          fontStyle: "italic",
          fontSize: "15px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#32312B",
        }}
      >
        Apply now
      </button>
    </section>
  );
};

export default CapitaliseSection;
