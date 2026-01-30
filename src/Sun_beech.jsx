import sun_beech from "./assets/beech_sun_image.png";

const Sun_beech = () => {
  return (
    <div className="relative w-full flex justify-center z-100">
      <img
        src={sun_beech}
        alt="Sun Beech"
        className="w-[1400px] max-w-full"
      />
    </div>
  );
};

export default Sun_beech;
