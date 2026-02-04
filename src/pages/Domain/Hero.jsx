import treeimage from "../../assets/treeimage.png";
import Illuminate from "../../assets/Illuminate.png";

const Hero = () => {
  return (
    <section className="relative mt-[-4%] w-full min-h-screen overflow-hidden flex flex-col items-center mob-domain">
      {/* DOMAIN (BEHIND TREE) - SMALLER */}
      <h2
        className="absolute top-[10%] z-0 text-center w-full"
        style={{
          fontFamily: "Luxurious Script, cursive",
          fontSize: "clamp(120px, 18vw, 250px)",
          color: "#FFE95A",
          lineHeight: "1",
        }}
      >
        Domain
      </h2>

      {/* TREE - SMALLER WIDTH */}
      <div className="mr-6 relative z-10 flex justify-center mt-13 md:mt-20">
        <img
          src={treeimage}
          alt="Blossom Tree"
          className="w-[150px] sm:w-[190px] md:w-[240px] lg:w-[280px] object-contain"
        />
      </div>

      {/* CRAFTING / CONSULTING - SMALLER */}
      <div className="absolute top-[7%] z-20 text-center">
        <span
          style={{
            fontFamily: "'Meie Script', cursive",
            fontSize: "clamp(22px, 3.5vw, 40px)",
            color: "#32312B",
            marginLeft: "-140%",
          }}
        >
          Crafting
        </span>

        <span
          style={{
            fontFamily: "'Meie Script', cursive",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            color: "#32312B",
            position: "absolute",
            top: "95%",
            left: "60%",
          }}
        >
          Consulting
        </span>
      </div>

      {/* ILLUMINATE SECTION - MOVED FURTHER UP */}
      <div className="relative w-full -mt-12 md:-mt-16">
        {/* EXPERTISE - WITH DROP-SHADOW STROKE EFFECT */}
        <h3
          className="absolute lg:mt-2 md:mt-0 -mt-3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 
                     text-[75px] sm:text-[65px] md:text-[120px] lg:text-[190px]
                     drop-shadow-[1px_1px_0_#3A3931]
                     drop-shadow-[-1px_1px_0_#3A3931]
                     drop-shadow-[1px_-1px_0_#3A3931]
                     drop-shadow-[-1px_-1px_0_#3A3931]"
          style={{
            fontFamily: "'Luxurious Script', cursive",
            color: "#FFE95A",
            lineHeight: "1",
            // Remove the old stroke properties
            WebkitTextStroke: "0",
            paintOrder: "unset",
            textShadow: "none",
          }}
        >
          Expertise
        </h3>

{/* EXPERTISE DESCRIPTION - USING GOOGLE FONTS */}
<div
  className="absolute lg:left-[57%] left-[30%] md:left-[60%] top-[58%] lg:top-[26%] md:top-[26%] z-30 
             sm:left-1/2 sm:top-[42%] sm:-translate-x-1/2 sm:text-center"
>
  <h6
    style={{
      fontFamily: "'Times Now', Times, serif", // Google Fonts equivalent
      fontWeight: 300, // Light weight (closest to SemiLight)
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "1.3", // Auto ≈ 1.3 for readability
      letterSpacing: "0em", // 0%
      color: "#32312B",
      textAlign: "justify",
      opacity: 1,
      width: "175px",
      maxWidth: "200px",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    }}
    className="md:text-[16px] sm:text-[14px]"
  >
    Explore our curated consulting portfolio, offering tailored 
    solutions that turn complex challenges into strategic wins 
    through insight and seamless execution.
  </h6>
</div>

        <img
          src={Illuminate}
          alt="Illuminate"
          className="w-full object-contain px-2"
          style={{ marginTop: "-7%" }}
        />
      </div>
    </section>
  );
};

export default Hero;
