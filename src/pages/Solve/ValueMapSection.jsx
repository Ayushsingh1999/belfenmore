import Group1 from "../../assets/Group_Solve_1.png";
import Group2 from "../../assets/Group_Solve_2.png";
import Group3 from "../../assets/Group_Solve_3.png";
import Group4 from "../../assets/Group_Solve_4.png";
import Frame from "../../assets/Solve_Frame.png";

const ValueMapSection = () => {
  return (
    <section className="w-full py-12 px-4 flex justify-center">
      <div className="max-w-[800px] w-full flex flex-col gap-[40px]">

        {/* ================= ROW 1 ================= */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {/* Heading + Image */}
          <div className="mr-[6%] relative flex flex-col md:flex-row items-start md:items-center justify-center">

            <h2
              className="
                static md:absolute
                leading-none
                -mb-2 md:mb-0
                text-left md:text-center
                rotate-0 md:-rotate-90
                text-[20px] md:text-[24px]
                font-bold italic text-[#32312B]
                md:-left-[36%]
              "
              style={{ fontFamily: "'Times New Roman', 'Times', serif", fontWeight: 'bold', fontStyle: 'italic' }}
            >
              Substantiate
            </h2>

            <img
              src={Group1}
              alt="Substantiate"
              className="
                w-[240px] h-[240px]
                md:w-[200px] md:h-[200px]
                object-cover border border-[#32312B]
              "
            />
          </div>

          {/* Paragraph - Aligned perfectly with image */}
          <div className="flex items-center justify-center h-full md:w-[160px]">
            <p className="uppercase text-[10px] leading-[18px] text-[#32312B] font-light text-justify w-full mt-4 md:mt-0">
              Ground every decision in reliable, data-driven facts, revealing{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                the real forces
              </span>{" "}
              behind your challenges to understand what drives outcomes and act
              with{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                confidence and clarity.
              </span>
            </p>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">

          <div className="ml-[6%] relative flex flex-col md:flex-row items-start md:items-center justify-center">

            <h2
              className="
                static md:absolute
                leading-none
                -mb-2 md:mb-0
                text-left md:text-center
                rotate-0 md:rotate-90
                text-[20px] md:text-[24px]
                font-bold italic text-[#32312B]
                md:-right-[36%]
              "
              style={{ fontFamily: "'Times New Roman', 'Times', serif", fontWeight: 'bold', fontStyle: 'italic' }}
            >
              Opportunity
            </h2>

            <img
              src={Group2}
              alt="Opportunity"
              className="
                w-[240px] h-[240px]
                md:w-[200px] md:h-[200px]
                object-cover border border-[#32312B]
              "
            />
          </div>

          {/* Paragraph - Aligned perfectly with image */}
          <div className="flex items-center justify-center h-full md:w-[160px]">
            <p className="uppercase text-[10px] leading-[18px] text-[#32312B] font-light text-justify w-full mt-4 md:mt-0">
              Transform problems into{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                growth possibilities
              </span>{" "}
              by uncovering opportunities, reframing challenges, and creating innovative
              paths that turn obstacles into{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                lasting progress
              </span>
              .
            </p>
          </div>

        </div>

        {/* ================= ROW 3 ================= */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          <div className="mr-[6%] relative flex flex-col md:flex-row items-start md:items-center justify-center">

            <h2
              className="
                static md:absolute
                leading-none
                -mb-2 md:mb-0
                text-left md:text-center
                rotate-0 md:-rotate-90
                text-[20px] md:text-[24px]
                font-bold italic text-[#32312B]
                md:-left-[27%]
              "
              style={{ fontFamily: "'Times New Roman', 'Times', serif", fontWeight: 'bold', fontStyle: 'italic' }}
            >
              Leverage
            </h2>

            <img
              src={Group3}
              alt="Leverage"
              className="
                w-[240px] h-[240px]
                md:w-[200px] md:h-[200px]
                object-cover border border-[#32312B]
              "
            />
          </div>

          {/* Paragraph - Aligned perfectly with image */}
          <div className="flex items-center justify-center h-full md:w-[160px]">
            <p className="uppercase text-[10px] leading-[18px] text-[#32312B] font-light text-justify w-full mt-4 md:mt-0">
              Amplify{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                core strengths
              </span>{" "}
              into dynamic accelerators that drive impactful, continuous growth and
              momentum across opportunities and{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                changing paradigms.
              </span>
            </p>
          </div>

        </div>

        {/* ================= ROW 4 ================= */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">

          <div className="ml-[6%] relative flex flex-col md:flex-row items-start md:items-center justify-center">

            <h2
              className="
                static md:absolute
                leading-none
                -mb-2 md:mb-0
                text-left md:text-center
                rotate-0 md:rotate-90
                text-[20px] md:text-[24px]
                font-bold italic text-[#32312B]
                md:-right-[31%]
              "
              style={{ fontFamily: "'Times New Roman', 'Times', serif", fontWeight: 'bold', fontStyle: 'italic' }}
            >
              Value-map
            </h2>

            <img
              src={Group4}
              alt="Value-map"
              className="
                w-[240px] h-[240px]
                md:w-[200px] md:h-[200px]
                object-cover border border-[#32312B]
              "
            />
          </div>

          {/* Paragraph - Aligned perfectly with image */}
          <div className="flex items-center justify-center h-full md:w-[160px]">
            <p className="uppercase text-[10px] leading-[18px] text-[#32312B] font-light text-justify w-full mt-4 md:mt-0">
              Link organizational{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                goals and objectives
              </span>{" "}
              to action plans with measurable indicators to ensure{" "}
              <span
                style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
              >
                meaningful value creation
              </span>{" "}
              for business growth and effective strategic alignment.
            </p>
          </div>

        </div>

         {/* ================= BOTTOM SECTION ================= */}
        <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start w-full">

          {/* Mobile Heading above image */}
          <h2
            className="self-start text-[26px] leading-none text-[#32312B] mb-2 md:hidden"
            style={{ 
              fontFamily: "'Times Now', 'Times New Roman', 'Times', serif", 
              fontWeight: 'bold', 
              fontStyle: 'italic' 
            }}
          >
            Encapsulate
          </h2>

          {/* Image Container */}
          <div className="flex justify-center w-full">
            <div className="p-2 border border-[#32312B] max-w-[430px] w-full">
              <img
                src={Frame}
                alt="Encapsulate"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Desktop / Laptop / iPad layout below image */}
          <div className="ml-[25%] flex flex-col md:flex-row w-full max-w-[900px] mt-3 md:mt-4">

            {/* Heading for desktop (hidden on mobile) - Takes minimal space */}
            <h2
              className="hidden md:block text-[26px] leading-none text-[#32312B] md:mb-3 md:mr-4"
              style={{ 
                fontFamily: "'Times Now', 'Times New Roman', 'Times', serif", 
                fontWeight: 'bold', 
                fontStyle: 'italic',
                flexShrink: 0 
              }}
            >
              Encapsulate
            </h2>

            {/* Paragraph - Takes remaining space, starts from heading end */}
            <div className="ml-[2%] flex items-start flex-1">
              <p className="uppercase text-[10px] leading-[20px] font-light text-[#32312B] text-justify mt-4 md:mt-0 w-[40%]">
                <span
                  style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
                >
                  Device a plan
                </span>{" "}
                that thoroughly examines real forces to uncover growth possibilities by
                leveraging core strengths and unifying goals and objectives into a{" "}
                <span
                  style={{ fontFamily: "'Cabinet Grotesk', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif", fontWeight: 600 }}
                >
                  decisive roadmap.
                </span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueMapSection;