import cloudBg from "./assets/middle_section_img1.png";
import middle_cloud_2 from "./assets/middle_cloud_2.png";
import sun_beech from "./assets/beech_sun_image.png";

import middle_section_img1_txt_1 from "./assets/middle_section_img1_txt_1.png";
import middle_section_img1_txt_2 from "./assets/middle_section_heading_txt_2.png";
import middle_section_img1_txt_3 from "./assets/middle_section_heading_txt_3.png";
import middle_section_img1_txt_4 from "./assets/middle_section_heading_txt_4_1.png";
import middle_section_img1_txt_5 from "./assets/middle_section_heading_txt_4.png";
import middle_section_img1_txt_6 from "./assets/middle_section_heading_txt_5.png";
import middle_section_img1_txt_7 from "./assets/middle_section_img1_txt_7.png";

import t2 from "./assets/t2.png"
import t3 from "./assets/t3.png"
import t4 from "./assets/t4.png"
import t5 from "./assets/t5.png"
import t6 from "./assets/t6.png"

import Footer from "./Footer";

const cloudTexts = [
  middle_section_img1_txt_3,
  middle_section_img1_txt_4,
  middle_section_img1_txt_5,
  middle_section_img1_txt_6,
  middle_section_img1_txt_7,
];

const Middle = () => {
  return (
    <section
      className="
        relative
        w-full
        z-20
        pointer-events-none
        overflow-x-hidden
        -mt-[45vh]
      "
    >
      {/* FIRST CLOUD */}
<div className="relative flex justify-center bg-[#FFFDC] overflow-hidden">
  {/* Base background (the thing to blend with) */}
  <img
    src={cloudBg}
    alt=""
    className="
      w-[100vw]
      min-w-[1400px]
      h-auto
      block
    "
  />

  {/* Luminosity layer on top of background */}
  <img
    src={cloudBg}
    alt=""
    className="
      absolute
      inset-0
      w-[100vw]
      min-w-[1400px]
      h-auto
      mix-blend-luminosity
      pointer-events-none
    "
  />

  {/* Center text 1 */}
  <img
    src={middle_section_img1_txt_1}
    alt=""
    className="
      absolute
      top-[35%]
      left-1/2
      -translate-x-1/2
      w-[200px]
      z-10
    "
  />

  {/* Center text 2 */}
  <img
    src={middle_section_img1_txt_2}
    alt=""
    className="
      absolute
      top-[70%]
      left-1/2
      -translate-x-[120%]
      w-[180px]
      z-20
    "
  />

  {/* Top text */}
  <img
    src={t2}
    alt=""
    className="
      absolute
      top-[76%]
      left-[50%]
      -translate-x-[120%]
      w-[180px]
      z-30
    "
  />
</div>


      {/* STACKED CLOUDS */}
      {cloudTexts.map((img, i) => (
        <div
          key={i}
          className={`relative flex justify-center ${
            i === 0 ? "-mt-[420px]" : "-mt-[160px]"
          }`}
        >
          <img
            src={middle_cloud_2}
            alt=""
            className={`
              w-[100vw]
              min-w-[1400px]
              h-auto
              ${i % 2 === 1 ? "scale-x-[-1]" : ""}
            `}
          />

          <img
            src={img}
            alt=""
            className={`
              absolute
              ${i < cloudTexts.length - 1 ? 'top-[83%]' : 'top-[75%]'}
              w-[200px]
              ${
                i === 4
                  ? "left-1/2 -translate-x-1/2"
                  : i % 2 === 0
                    ? "left-[50%]"
                    : "left-[33%]"
              }
            `}
          />

          { (i < cloudTexts.length - 1) && <img
            src={i == 0 ? t3 : i == 1 ? t4 : i == 2 ? t5 : i == 3 ? t6 : ''}
            alt=""
            className={`
              z-50
              absolute
              top-[98%]
              w-[200px]
              ${
                i === 4
                  ? "left-1/2 -translate-x-1/2"
                  : i % 2 === 0
                    ? "left-[50%]"
                    : "left-[33%]"
              }
            `}
          />}
        </div>
      ))}

      {/* SUN / BEECH */}
      <div className="relative flex justify-center -mt-[20px]">
        <img
          src={sun_beech}
          alt=""
          className="
            w-[100vw]
            min-w-[1400px]
            h-auto
          "
        />
      </div>

      <Footer />
    </section>
  );
};

export default Middle;
