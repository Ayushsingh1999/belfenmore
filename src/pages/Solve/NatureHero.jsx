import Group from "../../assets/group_solve.png";

const NatureHero = () => {
  return (
    <section
      className="
        relative
        w-full
        flex
        items-center
        justify-center
        overflow-hidden
        mt-[5%]
        p-0
      "
    >
      {/* ================= Background Watermark Text ================= */}
      <h1
        style={{ fontFamily: "'Luxurious Script', cursive" }}
        className="
          absolute
          top-[60%]
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-center
          text-[#F1EEDB]
          leading-none
          font-normal
          opacity-100
          z-0

          text-[160px]
          sm:text-[220px]
          md:text-[340px]
          lg:text-[500px]
          xl:text-[650px]
          2xl:text-[850px]
        "
      >
        Orientation
      </h1>

      {/* ================= Tree Image ================= */}
      <img
        src={Group}
        alt="Tree Group"
        className="
          relative
          object-contain
          z-10
          md:mt-[-110px]

          w-[300px]
          sm:w-[380px]
          md:w-[500px]
          lg:w-[650px]
          xl:w-[750px]
          2xl:w-[850px]
        "
      />
    </section>
  );
};

export default NatureHero;