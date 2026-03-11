import React, { useEffect, useState } from "react";
import cloudBg from "./assets/middle_section_img1_updated.webp";
import middle_cloud_2 from "./assets/middle_cloud_2_updated.webp";
import sun_beech from "./assets/beech_sun_image_updated.webp";
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

const SCREEN_CONFIG = {

  // ── MOBILE — 390 × 844 ───────────────────────────────────────────────────
  mobile: {
    sectionTopOffset:  "-48vh",
    cloud1StackOffset: "-400px",
    cloudStackOffset:  "-180px",
    sunOffset:         "-20px",

    txt1_top: "32%", txt1_w: "clamp(200px,20vw,240px)",

    txt2_top: "15%",  txt2_lv: "32%",  txt2_w: "clamp(160px,16vw,200px)",
    desc2_top: "30%", desc2_lv: "32%", desc2_w: "clamp(160px,16vw,200px)",

    txt3_top: "15%",  txt3_rv: "32%",  txt3_w: "clamp(160px,16vw,200px)",
    desc3_top: "30%", desc3_rv: "32%", desc3_w: "clamp(160px,16vw,200px)",

    txt4_top: "15%",  txt4_lv: "32%",  txt4_w: "clamp(160px,16vw,200px)",
    desc4_top: "30%", desc4_lv: "32%", desc4_w: "clamp(160px,16vw,200px)",

    txt5_top: "15%",  txt5_rv: "32%",  txt5_w: "clamp(160px,16vw,200px)",
    desc5_top: "30%", desc5_rv: "32%", desc5_w: "clamp(160px,16vw,200px)",

    txt6_top: "13%",  txt6_lv: "32%",  txt6_w: "clamp(160px,16vw,200px)",
    desc6_top: "30%", desc6_lv: "32%", desc6_w: "clamp(160px,16vw,200px)",

    txt7_top: "75%", txt7_w: "clamp(200px,20vw,240px)",
  },

  // ── TABLET — 768 × 1024 ──────────────────────────────────────────────────
  // txt = heading images, desc = description images
  // increase top % to move DOWN, decrease to move UP
  // increase w to make BIGGER, decrease to make SMALLER
// ── MOBILE — 390 × 844 ───────────────────────────────────────────────────
  // Test at: F12 → Ctrl+Shift+M → width 390, height 844
mobile: {

    // ── SECTION & CLOUD STACKING ─────────────────────────────────────────
    sectionTopOffset:  "-60vh",        // ↑ more negative = section higher / ↓ less negative = lower
    cloud1StackOffset: "-180px",     // ↑ more negative = first stacked cloud overlaps more
    cloudStackOffset:  "-100px",     // ↑ more negative = all other clouds overlap more
    sunOffset:         "-20px",      // ↑ more negative = sun higher / ↓ lower

    // ── BIG CLOUD CENTER HEADING (group 1) ──────────────────────────────
    txt1_top: "35%",                 // ↑ move DOWN / ↓ move UP inside big cloud
    txt1_w:   "80px",                // ↑ bigger / ↓ smaller

    // ── CLOUD 1 LEFT (group 2) ───────────────────────────────────────────
    txt2_top:  "18%",  txt2_lv:  "10%",  txt2_w:  "60px",   // top=↑down, lv=↑right, w=↑bigger
    desc2_top: "32%",  desc2_lv: "10%",  desc2_w: "60px",   // same controls for description

    // ── CLOUD 2 RIGHT (group 3) ──────────────────────────────────────────
    txt3_top:  "18%",  txt3_rv:  "10%",  txt3_w:  "60px",   // rv=↑moves LEFT from right edge
    desc3_top: "32%",  desc3_rv: "10%",  desc3_w: "60px",

    // ── CLOUD 3 LEFT (group 4) ───────────────────────────────────────────
    txt4_top:  "18%",  txt4_lv:  "10%",  txt4_w:  "60px",
    desc4_top: "32%",  desc4_lv: "10%",  desc4_w: "60px",

    // ── CLOUD 4 RIGHT (group 5) ──────────────────────────────────────────
    txt5_top:  "18%",  txt5_rv:  "10%",  txt5_w:  "60px",
    desc5_top: "32%",  desc5_rv: "10%",  desc5_w: "60px",

    // ── CLOUD 5 LEFT (group 6) ───────────────────────────────────────────
    txt6_top:  "16%",  txt6_lv:  "10%",  txt6_w:  "60px",
    desc6_top: "32%",  desc6_lv: "10%",  desc6_w: "60px",

    // ── CLOUD 5 CENTER BOTTOM HEADING (group 7) ──────────────────────────
    txt7_top: "78%",                 // ↑ move DOWN / ↓ move UP inside last cloud
    txt7_w:   "80px",                // ↑ bigger / ↓ smaller
  },

  // ── LAPTOP — 1280 × 800  (MacBook 13" · ThinkPad 16") ───────────────────
  laptop: {
    sectionTopOffset:  "-48vh",
    cloud1StackOffset: "-400px",
    cloudStackOffset:  "-180px",
    sunOffset:         "-20px",

    txt1_top: "32%", txt1_w: "clamp(200px,20vw,240px)",

    txt2_top: "15%",  txt2_lv: "32%",  txt2_w: "clamp(160px,16vw,200px)",
    desc2_top: "30%", desc2_lv: "32%", desc2_w: "clamp(160px,16vw,200px)",

    txt3_top: "15%",  txt3_rv: "32%",  txt3_w: "clamp(160px,16vw,200px)",
    desc3_top: "30%", desc3_rv: "32%", desc3_w: "clamp(160px,16vw,200px)",

    txt4_top: "15%",  txt4_lv: "32%",  txt4_w: "clamp(160px,16vw,200px)",
    desc4_top: "30%", desc4_lv: "32%", desc4_w: "clamp(160px,16vw,200px)",

    txt5_top: "15%",  txt5_rv: "32%",  txt5_w: "clamp(160px,16vw,200px)",
    desc5_top: "30%", desc5_rv: "32%", desc5_w: "clamp(160px,16vw,200px)",

    txt6_top: "13%",  txt6_lv: "32%",  txt6_w: "clamp(160px,16vw,200px)",
    desc6_top: "30%", desc6_lv: "32%", desc6_w: "clamp(160px,16vw,200px)",

    txt7_top: "75%", txt7_w: "clamp(200px,20vw,240px)",
  },

  // ── DESKTOP — 1536 × 864  YOUR THINKPAD 14" REFERENCE — DO NOT TOUCH ────
  // also covers MacBook 14" (1512) and MacBook 16" (1728)
  desktop: {
    sectionTopOffset:  "-48vh",
    cloud1StackOffset: "-400px",
    cloudStackOffset:  "-180px",
    sunOffset:         "-20px",

    txt1_top: "32%", txt1_w: "320px",

    txt2_top: "15%",  txt2_lv: "32%",  txt2_w: "280px",
    desc2_top: "30%", desc2_lv: "32%", desc2_w: "280px",

    txt3_top: "15%",  txt3_rv: "32%",  txt3_w: "280px",
    desc3_top: "30%", desc3_rv: "32%", desc3_w: "280px",

    txt4_top: "15%",  txt4_lv: "32%",  txt4_w: "280px",
    desc4_top: "30%", desc4_lv: "32%", desc4_w: "280px",

    txt5_top: "15%",  txt5_rv: "32%",  txt5_w: "280px",
    desc5_top: "30%", desc5_rv: "32%", desc5_w: "280px",

    txt6_top: "13%",  txt6_lv: "32%",  txt6_w: "280px",
    desc6_top: "30%", desc6_lv: "32%", desc6_w: "280px",

    txt7_top: "75%", txt7_w: "320px",
  },

  // ── ULTRAWIDE — 1920 × 1080  (ThinkPad 13") ─────────────────────────────
  ultrawide: {
    sectionTopOffset:  "-48vh",
    cloud1StackOffset: "-400px",
    cloudStackOffset:  "-180px",
    sunOffset:         "-20px",

    txt1_top: "32%", txt1_w: "400px",

    txt2_top: "15%",  txt2_lv: "32%",  txt2_w: "350px",
    desc2_top: "30%", desc2_lv: "32%", desc2_w: "350px",

    txt3_top: "15%",  txt3_rv: "32%",  txt3_w: "350px",
    desc3_top: "30%", desc3_rv: "32%", desc3_w: "350px",

    txt4_top: "15%",  txt4_lv: "32%",  txt4_w: "350px",
    desc4_top: "30%", desc4_lv: "32%", desc4_w: "350px",

    txt5_top: "15%",  txt5_rv: "32%",  txt5_w: "350px",
    desc5_top: "30%", desc5_rv: "32%", desc5_w: "350px",

    txt6_top: "13%",  txt6_lv: "32%",  txt6_w: "350px",
    desc6_top: "30%", desc6_lv: "32%", desc6_w: "350px",

    txt7_top: "75%", txt7_w: "400px",
  },
};

const Z_INDEX = {
  SUN:         5,
  TEXT_MAIN_1: 11,
  TEXT_MAIN_2: 19,
  TEXT_MAIN_3: 21,
  TEXT_MAIN_4: 22,
  TEXT_MAIN_5: 23,
  TEXT_MAIN_6: 24,
  TEXT_MAIN_7: 62,
  CLOUD_BG:    10,
  CLOUD_1:     20,
  CLOUD_2:     30,
  CLOUD_3:     40,
  CLOUD_4:     50,
  CLOUD_5:     60,
  TEXT_DESC_2: 100,
  TEXT_DESC_3: 100,
  TEXT_DESC_4: 100,
  TEXT_DESC_5: 100,
  TEXT_DESC_6: 100,
  CONTAINER:   49,
};

function useBreakpoint() {
  const getKey = (w) => {
    if (w < 640)  return "mobile";
    if (w < 1024) return "tablet";
    if (w < 1440) return "laptop";
    if (w < 1920) return "desktop";
    return "ultrawide";
  };
  const [key, setKey] = useState(() => getKey(window.innerWidth));
  useEffect(() => {
    const handler = () => setKey(getKey(window.innerWidth));
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return key;
}

const MaskedBlendImage = ({ src, className = "", flip = false, zIndex = 10 }) => (
  <div className={`relative w-full ${className}`}>
    <div
      className="absolute inset-0 bg-[#FFFDEC]"
      style={{
        height: "100%", width: "100%",
        maskImage:        `url(${src})`, WebkitMaskImage:    `url(${src})`,
        maskSize:         "100% auto",   WebkitMaskSize:     "100% auto",
        maskRepeat:       "no-repeat",   WebkitMaskRepeat:   "no-repeat",
        maskPosition:     "center",      WebkitMaskPosition: "center",
        transform:        flip ? "scaleX(-1)" : "none",
        transformOrigin:  "center",
      }}
    />
    <img
      src={src} alt=""
      className="relative w-full h-auto mix-blend-luminosity"
      style={{ zIndex, transform: flip ? "scaleX(-1)" : "none", transformOrigin: "center" }}
    />
  </div>
);

const TextItem = ({
  src, top, position = "center",
  leftValue = "15%", rightValue = "15%",
  width = "clamp(160px,16vw,200px)",
  className = "", zIndex = 65, href, onClick,
}) => {
  const content = (
    <div
      className={`absolute ${className}`}
      style={{
        top,
        left:      position === "left"   ? leftValue  : position === "center" ? "50%" : "auto",
        right:     position === "right"  ? rightValue : "auto",
        transform: position === "center" ? "translateX(-50%)" : "none",
        width,
        zIndex,
        cursor: href || onClick ? "pointer" : "default",
      }}
    >
      <img src={src} alt="" className="w-full" />
    </div>
  );
  if (href) return (
    <a href={href} target={href.startsWith("http") ? "_blank" : "_self"}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="pointer-events-auto">{content}</a>
  );
  if (onClick) return (
    <div onClick={onClick} className="pointer-events-auto cursor-pointer">{content}</div>
  );
  return content;
};

const Middle = () => {
  const bpKey = useBreakpoint();
  const cfg   = SCREEN_CONFIG[bpKey];

  const linkUrls = {
    group1: "https://www.youtube.com",
    group2: "/prospect-augment",
    group3: "https://www.tesla.com/",
    group4: "https://www.reddit.com/",
    group5: "https://x.com/",
    group6: "https://www.freecodecamp.org/",
    group7: "https://interpl.ai/",
  };

  return (
    <section
      className="relative w-full pointer-events-none overflow-x-hidden"
      style={{ zIndex: Z_INDEX.CONTAINER, marginTop: cfg.sectionTopOffset }}
    >
      {/* ── DEV LABEL — delete before going live ────────────────────────── */}
      <div
        style={{
          position: "fixed", bottom: 8, right: 12,
          background: "rgba(0,0,0,0.6)", color: "#fff",
          fontSize: 11, padding: "3px 8px", borderRadius: 4,
          zIndex: 9999, fontFamily: "monospace", pointerEvents: "none",
        }}
      >
        {bpKey} · {typeof window !== "undefined" ? window.innerWidth : ""}px
      </div>
      {/* ─────────────────────────────────────────────────────────────────── */}

      <div className="relative w-full max-w-[2000px] mx-auto">

        {/* BIG CLOUD (group 1) */}
        <div className="relative w-full" style={{ zIndex: Z_INDEX.CLOUD_BG }}>
          <MaskedBlendImage src={cloudBg} flip={false} zIndex={Z_INDEX.CLOUD_BG} />
          <TextItem
            src={middle_section_img1_txt_1}
            top={cfg.txt1_top}
            position="center"
            width={cfg.txt1_w}
            zIndex={Z_INDEX.TEXT_MAIN_1}
            href={linkUrls.group1}
          />
        </div>

        {/* STACKED CLOUDS */}
        <div className="relative">

          {/* CLOUD 1 — LEFT (group 2) */}
          <div className="relative" style={{ zIndex: Z_INDEX.CLOUD_1, marginTop: cfg.cloud1StackOffset }}>
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={Z_INDEX.CLOUD_1} />
            <TextItem src={middle_section_img1_txt_2} top={cfg.txt2_top}  position="left" leftValue={cfg.txt2_lv}  width={cfg.txt2_w}  zIndex={Z_INDEX.TEXT_MAIN_2} href={linkUrls.group2} />
            <TextItem src={t2}                        top={cfg.desc2_top} position="left" leftValue={cfg.desc2_lv} width={cfg.desc2_w} zIndex={Z_INDEX.TEXT_DESC_2} href={linkUrls.group2} />
          </div>

          {/* CLOUD 2 — RIGHT (group 3) */}
          <div className="relative" style={{ zIndex: Z_INDEX.CLOUD_2, marginTop: cfg.cloudStackOffset }}>
            <MaskedBlendImage src={middle_cloud_2} flip={true} zIndex={Z_INDEX.CLOUD_2} />
            <TextItem src={middle_section_img1_txt_3} top={cfg.txt3_top}  position="right" rightValue={cfg.txt3_rv}  width={cfg.txt3_w}  zIndex={Z_INDEX.TEXT_MAIN_3} href={linkUrls.group3} />
            <TextItem src={t3}                        top={cfg.desc3_top} position="right" rightValue={cfg.desc3_rv} width={cfg.desc3_w} zIndex={Z_INDEX.TEXT_DESC_3} href={linkUrls.group3} />
          </div>

          {/* CLOUD 3 — LEFT (group 4) */}
          <div className="relative" style={{ zIndex: Z_INDEX.CLOUD_3, marginTop: cfg.cloudStackOffset }}>
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={Z_INDEX.CLOUD_3} />
            <TextItem src={middle_section_img1_txt_4} top={cfg.txt4_top}  position="left" leftValue={cfg.txt4_lv}  width={cfg.txt4_w}  zIndex={Z_INDEX.TEXT_MAIN_4} href={linkUrls.group4} />
            <TextItem src={t4}                        top={cfg.desc4_top} position="left" leftValue={cfg.desc4_lv} width={cfg.desc4_w} zIndex={Z_INDEX.TEXT_DESC_4} href={linkUrls.group4} />
          </div>

          {/* CLOUD 4 — RIGHT (group 5) */}
          <div className="relative" style={{ zIndex: Z_INDEX.CLOUD_4, marginTop: cfg.cloudStackOffset }}>
            <MaskedBlendImage src={middle_cloud_2} flip={true} zIndex={Z_INDEX.CLOUD_4} />
            <TextItem src={middle_section_img1_txt_5} top={cfg.txt5_top}  position="right" rightValue={cfg.txt5_rv}  width={cfg.txt5_w}  zIndex={Z_INDEX.TEXT_MAIN_5} href={linkUrls.group5} />
            <TextItem src={t5}                        top={cfg.desc5_top} position="right" rightValue={cfg.desc5_rv} width={cfg.desc5_w} zIndex={Z_INDEX.TEXT_DESC_5} href={linkUrls.group5} />
          </div>

          {/* CLOUD 5 — LEFT + CENTER (group 6 + group 7) */}
          <div className="relative" style={{ zIndex: Z_INDEX.CLOUD_5, marginTop: cfg.cloudStackOffset }}>
            <MaskedBlendImage src={middle_cloud_2} flip={false} zIndex={Z_INDEX.CLOUD_5} />
            <TextItem src={middle_section_img1_txt_6} top={cfg.txt6_top}  position="left" leftValue={cfg.txt6_lv}  width={cfg.txt6_w}  zIndex={Z_INDEX.TEXT_MAIN_6} href={linkUrls.group6} />
            <TextItem src={t6}                        top={cfg.desc6_top} position="left" leftValue={cfg.desc6_lv} width={cfg.desc6_w} zIndex={Z_INDEX.TEXT_DESC_6} href={linkUrls.group6} />
            <TextItem src={middle_section_img1_txt_7} top={cfg.txt7_top}  position="center" width={cfg.txt7_w}     zIndex={Z_INDEX.TEXT_MAIN_7} href={linkUrls.group7} />
          </div>

        </div>

        {/* SUN / BEECH */}
        <div className="relative" style={{ zIndex: Z_INDEX.SUN, marginTop: cfg.sunOffset }}>
          <img src={sun_beech} alt="Sun/Beech" className="w-full" />
        </div>

      </div>
    </section>
  );
};

export default Middle;