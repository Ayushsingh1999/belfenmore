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

// Import Link if using React Router
// import { Link } from 'react-router-dom';
 
/* 🔥 LOGICAL Z-INDEX PATTERN */
const Z_INDEX = {
  // Background elements
  SUN: 5,
 
  // Text on clouds = CLOUD_z-index + 1 (text sits just above its cloud)
  TEXT_MAIN_1: 11,
  TEXT_MAIN_2: 19, // done
  TEXT_MAIN_3: 21, // done
  TEXT_MAIN_4: 22,
  TEXT_MAIN_5: 23, // done
  TEXT_MAIN_6: 24,
  TEXT_MAIN_7: 62,
 
 
  // Cloud images (increasing with each cloud)
  CLOUD_BG: 10,
 
  // Middle clouds - increment by 10 each time
  CLOUD_1: 20,  // done
  CLOUD_2: 30,  // done
  CLOUD_3: 40,  // done
  CLOUD_4: 50,  // done
  CLOUD_5: 60,  // done
 
  // Description text = TEXT_MAIN_z-index + 2 (description above main text)
  TEXT_DESC_2: 23,  // done
  TEXT_DESC_3: 33,  // done
  TEXT_DESC_4: 43,  // done
  TEXT_DESC_5: 53,  //done
  TEXT_DESC_6: 63,  //done
   
  // Container
  CONTAINER: 100
};
 
/* 🔥 FIXED MASKED + BLEND IMAGE - SEPARATE MASK AND IMAGE */
const MaskedBlendImage = ({ src, className = "", flip = false, zIndex = 10 }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Cream background masked by image - NEVER flipped */}
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
     
      {/* Original image with blend mode - Only image gets flipped */}
      <img
        src={src}
        alt=""
        className="relative w-full h-auto mix-blend-luminosity"
        style={{
          zIndex,
          transform: flip ? "scaleX(-1)" : "none"
        }}
      />
    </div>
  );
};
 
/* 🔥 TEXT ITEM COMPONENT */
const TextItem = ({
  src,
  top,
  position = "center",
  leftValue = "15%",
  rightValue = "15%",
  width = "clamp(160px,16vw,200px)",
  className = "",
  zIndex = 65,
  href, // New prop for link URL
  onClick // New prop for click handler
}) => {
  const content = (
    <div className={`absolute ${className}`}
      style={{
        top,
        left: position === "left" ? leftValue : position === "center" ? "50%" : "auto",
        right: position === "right" ? rightValue : "auto",
        transform: position === "center" ? "translateX(-50%)" : "none",
        width,
        zIndex,
        cursor: href || onClick ? 'pointer' : 'default'
      }}>
      <img src={src} alt="" className="w-full" />
    </div>
  );
 
  // Wrap with link if href is provided
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? "_blank" : "_self"}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className="pointer-events-auto"
      >
        {content}
      </a>
    );
  }
 
  // Wrap with clickable div if onClick is provided
  if (onClick) {
    return (
      <div
        onClick={onClick}
        className="pointer-events-auto cursor-pointer"
      >
        {content}
      </div>
    );
  }
 
  return content;
};
 
const Middle = () => {
  // Updated URLs - Cloud 2 (group3) now points to /prospect-augment
  const linkUrls = {
    group1: "https://www.youtube.com",
    group2: "/prospect-augment",
    group3: "https://www.tesla.com/", 
    group4: "https://www.reddit.com/",
    group5: "https://x.com/",
    group6: "https://www.freecodecamp.org/",
    group7: "https://interpl.ai/"
  };
 
  return (
    <section className="relative w-full pointer-events-none overflow-x-hidden -mt-[45vh]" style={{ zIndex: Z_INDEX.CONTAINER }}>
      {/* CONTAINER FOR ALL CLOUDS */}
      <div className="relative w-full max-w-[2000px] mx-auto">
       
        {/* FIRST CLOUD (big cloud) */}
        <div className="relative w-full" style={{ zIndex: Z_INDEX.CLOUD_BG }}>
          <MaskedBlendImage src={cloudBg} flip={false} zIndex={Z_INDEX.CLOUD_BG} />
          {/* CENTERED: First text */}
          <TextItem
            src={middle_section_img1_txt_1}
            top="32%"
            position="center"
            width="clamp(200px,20vw,240px)"
            zIndex={Z_INDEX.TEXT_MAIN_1}
            href={linkUrls.group1}
          />
        </div>
 
        {/* STACKED CLOUDS SECTION */}
        <div className="relative">
         
          {/* CLOUD 1 of 5 - LEFT (text group 2: t2) */}
          <div className="relative -mt-[clamp(400px,40vw,470px)]" style={{ zIndex: Z_INDEX.CLOUD_1 }}>
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={Z_INDEX.CLOUD_1} />
            {/* LEFT: Text group 2 */}
            <TextItem
              src={middle_section_img1_txt_2}
              top="15%"
              position="left"
              leftValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_MAIN_2}
              href={linkUrls.group2}
            />
            <TextItem
              src={t2}
              top="30%"
              position="left"
              leftValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_DESC_2}
              href={linkUrls.group2}
            />
          </div>
 
          {/* CLOUD 2 of 5 - RIGHT (text group 3: t3) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]" style={{ zIndex: Z_INDEX.CLOUD_2 }}>
            <MaskedBlendImage src={middle_cloud_2} flip={true} zIndex={Z_INDEX.CLOUD_2} />
            {/* RIGHT: Text group 3 */}
            <TextItem
              src={middle_section_img1_txt_3}
              top="15%"
              position="right"
              rightValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_MAIN_3}
              href={linkUrls.group3} // Now points to /prospect-augment
            />
            <TextItem
              src={t3}
              top="30%"
              position="right"
              rightValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_DESC_3}
              href={linkUrls.group3} // Now points to /prospect-augment
            />
          </div>
 
          {/* CLOUD 3 of 5 - LEFT (text group 4: t4) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]" style={{ zIndex: Z_INDEX.CLOUD_3 }}>
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={Z_INDEX.CLOUD_3} />
            {/* LEFT: Text group 4 */}
            <TextItem
              src={middle_section_img1_txt_4}
              top="15%"
              position="left"
              leftValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_MAIN_4}
              href={linkUrls.group4}
            />
            <TextItem
              src={t4}
              top="30%"
              position="left"
              leftValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_DESC_4}
              href={linkUrls.group4}
            />
          </div>
 
          {/* CLOUD 4 of 5 - RIGHT (text group 5: t5) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]" style={{ zIndex: Z_INDEX.CLOUD_4 }}>
            <MaskedBlendImage src={middle_cloud_2} flip={true} zIndex={Z_INDEX.CLOUD_4} />
            {/* RIGHT: Text group 5 */}
            <TextItem
              src={middle_section_img1_txt_5}
              top="13%"
              position="right"
              rightValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_MAIN_5}
              href={linkUrls.group5}
            />
            <TextItem
              src={t5}
              top="32%"
              position="right"
              rightValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_DESC_5}
              href={linkUrls.group5}
            />
          </div>
 
          {/* CLOUD 5 of 5 - LEFT + CENTER (text group 6: t6 + centered text) */}
          <div className="relative -mt-[clamp(180px,18vw,220px)]" style={{ zIndex: Z_INDEX.CLOUD_5 }}>
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={Z_INDEX.CLOUD_5} />
            {/* LEFT: Text group 6 (t6) */}
            <TextItem
              src={middle_section_img1_txt_6}
              top="13%"
              position="left"
              leftValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_MAIN_6}
              href={linkUrls.group6}
            />
            <TextItem
              src={t6}
              top="30%"
              position="left"
              leftValue="32%"
              width="clamp(160px,16vw,200px)"
              zIndex={Z_INDEX.TEXT_DESC_6}
              href={linkUrls.group6}
            />
            {/* CENTERED: Final text */}
            <TextItem
              src={middle_section_img1_txt_7}
              top="75%"
              position="center"
              width="clamp(200px,20vw,240px)"
              zIndex={Z_INDEX.TEXT_MAIN_7}
              href={linkUrls.group7}
            />
          </div>
        </div>
 
        {/* SUN / BEECH */}
        <div className="relative -mt-[20px]" style={{ zIndex: Z_INDEX.SUN }}>
          <img src={sun_beech} flip={false} zIndex={Z_INDEX.SUN} />
        </div>
      </div>
    </section>
  );
};
 
export default Middle;