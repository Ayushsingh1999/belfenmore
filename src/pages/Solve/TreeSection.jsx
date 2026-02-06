import treeImg from "../../assets/treeImg.png";

const TreeSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden mt-[5%] px-4 pt-0">

      {/* ================= TEXT CONTENT ================= */}
      <div className="relative z-10 max-w-[410px] text-center mt-4 mb-2">
        <p
          className="
            font-times-new-roman
            italic
            font-light
            text-[8px]
            sm:text-[10px]
            md:text-[12px]
            leading-[20px]
            text-[#32312B]
          "
        >
          We transform insights into actionable strategies, unlocking hidden
          potential, driving measurable impact, and fostering sustainable growth
          while delivering lasting value for our clients
        </p>
      </div>

      {/* ================= TREE IMAGE ================= */}
      <img
        src={treeImg}
        alt="Tree"
        className="
          w-[120px]
          sm:w-[180px]
          md:w-[220px]
          lg:w-[280px]
          xl:w-[320px]
          object-contain
          pointer-events-none
        "
      />
    </section>
  );
};

export default TreeSection;