const TailoredSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-0 px-4">
      <div className="max-w-[600px] text-center flex flex-col items-center">
        
        {/* Heading Line 1 */}
        <h1
          className="text-[#32312B] font-meie-script font-normal 
          text-[20px] sm:text-[38px] md:text-[42px] leading-none"
        >
          Tailored, personalized & curated
        </h1>

        {/* Heading Line 2 */}
        <h2
          className="text-[#32312B] font-meie-script font-normal 
          text-[20px] sm:text-[42px] md:text-[42px] leading-none mt-1"
        >
          solutioning
        </h2>

        {/* Paragraph */}
        <p
          className="mt-6 max-w-[310px] text-center 
          text-[#32312B] font-times-new-roman font-extralight 
          text-[7px] sm:text-[10px] md:text-[11px] leading-[19px]"
        >
          Our approach is to{" "}
          <span className="font-semibold">
            SOLVE
          </span>{" "}
          — a structured yet flexible methodology that blends insight,
          innovation, and execution to tackle challenges with clarity, speed,
          and measurable impact.
        </p>
      </div>
    </section>
  );
};

export default TailoredSection;