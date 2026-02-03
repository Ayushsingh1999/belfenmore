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
 
import t2 from "./assets/t2.png";
import t3 from "./assets/t3.png";
import t4 from "./assets/t4.png";
import t5 from "./assets/t5.png";
import t6 from "./assets/t6.png";
 
import Footer from "./components/Footer";
 
/* 🔥 REUSABLE MASKED + BLEND IMAGE */
const MaskedBlendImage = ({ src, className = "", flip = false, zIndex }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Cream background masked by image */}
      <div
        className="absolute inset-0 bg-[#FFFDEC]"
        style={{
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: "100% auto",
          WebkitMaskSize: "100% auto",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
     
      {/* Original image with blend mode */}
      <img
        src={src}
        alt=""
        className={`relative w-full h-auto mix-blend-luminosity ${flip ? "scale-x-[-1]" : ""}`}
      />
    </div>
  );
};


 
/* 🔥 TEXT ITEM COMPONENT WITH ADJUSTABLE POSITIONING */
const TextItem = ({
  src,
  top,
  position = "center",
  leftValue = "15%",    // Custom left position value
  rightValue = "15%",   // Custom right position value
  width = "clamp(160px,16vw,200px)",
  className = ""
}) => {
  return (
    <div className={`absolute z-50 ${className}`}
      style={{
        top,
        left: position === "left" ? leftValue : position === "center" ? "50%" : "auto",
        right: position === "right" ? rightValue : "auto",
        transform: position === "center" ? "translateX(-50%)" : "none",
        width
      }}>
      <img src={src} alt="" className="w-full" />
    </div>
  );
};
 
const Middle = () => {
  return (
    <section className="relative w-full z-20 pointer-events-none overflow-x-hidden -mt-[45vh]">
      {/* CONTAINER FOR ALL CLOUDS */}
      <div className="relative w-full max-w-[2000px] mx-auto">

      {/* 🔥 NOISE LAYER */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />
       
        {/* FIRST CLOUD (big cloud - only CENTERED main heading) */}
        <div className="relative w-full">
          <MaskedBlendImage src={cloudBg} />
          {/* CENTERED: First text (NOT part of alternating pattern) */}
          <TextItem
            src={middle_section_img1_txt_1}
            top="32%"
            position="center"
            width="clamp(200px,20vw,240px)"
          />
        </div>
 
        {/* STACKED CLOUDS SECTION - 5 middle_cloud_2 clouds total */}
        <div className="relative">
         
          {/* CLOUD 1 of 5 - LEFT (text group 2: t2) */}
          <div className="relative -mt-[clamp(400px,40vw,470px)]">
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={20}/> {/* Normal */}
            {/* LEFT: Text group 2 */}
            <TextItem
              src={middle_section_img1_txt_2}
              top="19%"
              position="left"
              leftValue="32%" // ADJUST THIS: Smaller = closer to left edge
              zIndex={60}
            />
            <TextItem
              src={t2}
              top="34%"
              position="left"
              leftValue="32%" // Same as above for alignment
              zIndex={70}
            />
          </div>
 
          {/* CLOUD 2 of 5 - RIGHT (text group 3: t3) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]">
            <MaskedBlendImage src={middle_cloud_2} flip={true} /> {/* Flipped */}
            {/* RIGHT: Text group 3 */}
            <TextItem
              src={middle_section_img1_txt_3}
              top="15%"
              position="right"
              rightValue="32%" // ADJUST THIS: Smaller = closer to right edge
            />
            <TextItem
              src={t3}
              top="32%"
              position="right"
              rightValue="32%" // Same as above for alignment
            />
          </div>
 
          {/* CLOUD 3 of 5 - LEFT (text group 4: t4) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]">
            <MaskedBlendImage src={middle_cloud_2} flip={false} /> {/* Normal */}
            {/* LEFT: Text group 4 */}
            <TextItem
              src={middle_section_img1_txt_4}
              top="17%"
              position="left"
              leftValue="32%" // ADJUST THIS
            />
            <TextItem
              src={t4}
              top="32%"
              position="left"
              leftValue="32%" // Same as above
            />
          </div>
 
          {/* CLOUD 4 of 5 - RIGHT (text group 5: t5) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]">
            <MaskedBlendImage src={middle_cloud_2} flip={true} /> {/* Flipped */}
            {/* RIGHT: Text group 5 */}
            <TextItem
              src={middle_section_img1_txt_5}
              top="13%"
              position="right"
              rightValue="32%" // ADJUST THIS
            />
            <TextItem
              src={t5}
              top="32%"
              position="right"
              rightValue="32%" // Same as above
            />
          </div>
 
          {/* CLOUD 5 of 5 - LEFT + CENTER (text group 6: t6 + centered text) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]">
            <MaskedBlendImage src={middle_cloud_2} flip={false} /> {/* Normal */}
            {/* LEFT: Text group 6 (t6) */}
            <TextItem
              src={middle_section_img1_txt_6}
              top="18%"
              position="left"
              leftValue="32%" // ADJUST THIS
            />
            <TextItem
              src={t6}
              top="33%"
              position="left"
              leftValue="32%" // Same as above
            />
            {/* CENTERED: Final text (middle_section_img1_txt_7) */}
            <TextItem
              src={middle_section_img1_txt_7}
              top="75%"
              position="center"
              width="clamp(200px,20vw,240px)"
            />
          </div>
        </div>
 
        {/* SUN / BEECH */}
        <div className="relative -mt-[20px]">
          <img src={sun_beech} />
        </div>
      </div>
 
    </section>
  );
};
 
export default Middle;