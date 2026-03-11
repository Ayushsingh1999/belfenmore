import React, { useEffect, useState } from "react";
import layer1 from "../src/assets/image_885_updated.webp";
import layer2 from "../src/assets/image_886_updated.webp";

// ─────────────────────────────────────────────────────────────────────────────
//  SCREEN CONFIG — every breakpoint is 100% independent, no shared values
//
//  HOW TO TEST:
//    F12 → device icon (Ctrl+Shift+M) → Dimensions: Responsive
//    Type width → Enter → bottom-right label confirms active block
//
//  WIDTH   HEIGHT   DEVICE                          BLOCK
//  390     844      iPhone 14                    →  mobile
//  768     1024     iPad                         →  tablet
//  1280    800      MacBook 13" / ThinkPad 16"   →  laptop
//  1536    864      ThinkPad 14" ← REFERENCE     →  desktop  ✦ DO NOT TOUCH
//  1512    982      MacBook 14"                  →  desktop
//  1728    1117     MacBook 16"                  →  desktop
//  1920    1080     ThinkPad 13"                 →  ultrawide
//
//  BREAKPOINTS:
//    mobile     < 640px
//    tablet     640px  – 1023px
//    laptop     1024px – 1439px
//    desktop    1440px – 1919px   ← ThinkPad 14" lives here
//    ultrawide  ≥ 1920px
//
//  letterSpacing: [ E,    n,    c,    h,    a,    n,    t  ]
//  Each number is the space multiplier AFTER that character.
//  Increase a value → more gap after that letter.
//  Decrease a value → letters closer together.
// ─────────────────────────────────────────────────────────────────────────────

const SCREEN_CONFIG = {

// ── MOBILE — 390 × 844 ───────────────────────────────────────────────────
  // Test at: F12 → Ctrl+Shift+M → set width 390, height 844
  mobile: {

    // ── LETTERS ──────────────────────────────────────────────────────────
    letterFontSize:    "200px",        // ↑ bigger / ↓ smaller letters
    letterBaseSpacing: 72,             // ↑ more spread / ↓ tighter overall
    letterSpacing:     [1.2, 0.77, 0.62, 0.77, 0.82, 0.77, 1.0],
    //                  E     n     c     h     a     n     t
    //                  ↑ each number = gap multiplier after that letter

    letterPaddingX:    "60px",         // ↑ more overlap / ↓ less overlap between letters
    letterTop:         "30%",          // ↑ move letters DOWN / ↓ move UP
    letterLeft:        "-20%",          // ↑ shift letters RIGHT / ↓ shift LEFT

    // ── CLOUDS ───────────────────────────────────────────────────────────
    cloud1Top:         "25%",           // ↑ move cloud1 DOWN / ↓ move UP
    cloud1Width:       "200%",         // ↑ wider / ↓ narrower
    cloud2Top:         "33%",          // ↑ move cloud2 DOWN — match letterTop to keep letters behind cloud
    cloud2Width:       "185%",         // ↑ wider / ↓ narrower

    // ── "BUILD MORE" TEXT BLOCK ──────────────────────────────────────────
    textTop:           "5%",           // ↑ move text block DOWN / ↓ move UP
    textLeft:          "20%",          // ↑ shift RIGHT / ↓ shift LEFT
    headingSize:       "25px",         // ↑ bigger heading / ↓ smaller
    bodySize:          "6.5px",        // ↑ bigger body text / ↓ smaller
    textBlockWidth:    "300px",        // ↑ wider text container / ↓ narrower
    textBlockLeft:     "-130px",        // negative = nudge left, positive = nudge right
  },

  // ── TABLET — 768 × 1024 ──────────────────────────────────────────────────
  tablet: {
    letterFontSize:    "410px",
    letterBaseSpacing: 110,
    letterSpacing:     [1.8, 1.0, 0.90, 1.0, 1.0, 1.0, 1.5],
    letterPaddingX:    "100px",
    letterTop:         "30%",
    letterLeft:        "-10%",
    cloud1Top:         "20%",
    cloud1Width:       "142%",
    cloud2Top:         "30%",
    cloud2Width:       "130%",
    textTop:           "0%",
    textLeft:          "50%",
    headingSize:       "20px",
    bodySize:          "8px",
    textBlockWidth:    "210px",
    textBlockLeft:     "-50px",
  },

  // ── LAPTOP — 1280 × 800  (MacBook 13" · ThinkPad 16") ───────────────────
  laptop: {
    letterFontSize:    "550px",
    letterBaseSpacing: 183,
    letterSpacing:     [1.4, 0.90, 0.80, 0.94, 0.92, 0.98, 1.0],
    letterPaddingX:    "167px",
    letterTop:         "30%",
    letterLeft:        "-8%",
    cloud1Top:         "6%",
    cloud1Width:       "142%",
    cloud2Top:         "30%",
    cloud2Width:       "130%",
    textTop:           "0%",
    textLeft:          "50%",
    headingSize:       "33px",
    bodySize:          "8.5px",
    textBlockWidth:    "350px",
    textBlockLeft:     "-83px",
  },

  // ── DESKTOP — 1536 × 864  YOUR THINKPAD 14" REFERENCE — DO NOT TOUCH ─────
  // also covers MacBook 14" (1512) and MacBook 16" (1728)
  desktop: {
    letterFontSize:    "800px",
    letterBaseSpacing: 220,
    letterSpacing:     [2.0, 0.90, 0.82, 0.92, 1.0, 0.97, 1.8],
    letterPaddingX:    "200px",
    letterTop:         "25%",
    letterLeft:        "-20%",
    cloud1Top:         "6%",
    cloud1Width:       "142%",
    cloud2Top:         "30%",
    cloud2Width:       "130%",
    textTop:           "0%",
    textLeft:          "50%",
    headingSize:       "40px",
    bodySize:          "10px",
    textBlockWidth:    "420px",
    textBlockLeft:     "-100px",
  },

  // ── ULTRAWIDE — 1920 × 1080  (ThinkPad 13") ─────────────────────────────
  ultrawide: {
    letterFontSize:    "850px",
    letterBaseSpacing: 275,
    letterSpacing:     [1.8, 0.80, 0.72, 0.87, 0.92, 0.87, 1.5],
    letterPaddingX:    "250px",
    letterTop:         "30%",
    letterLeft:        "-10%",
    cloud1Top:         "6%",
    cloud1Width:       "142%",
    cloud2Top:         "30%",
    cloud2Width:       "130%",
    textTop:           "0%",
    textLeft:          "50%",
    headingSize:       "50px",
    bodySize:          "13px",
    textBlockWidth:    "525px",
    textBlockLeft:     "-125px",
  },
};
// ─────────────────────────────────────────────────────────────────────────────

// letter z-depths — visual layering only, no spacing logic here
const LETTERS = [
  { char: "E", z: "z-10" },
  { char: "n", z: "z-30" },
  { char: "c", z: "z-50" },
  { char: "h", z: "z-50" },
  { char: "a", z: "z-50" },
  { char: "n", z: "z-50" },
  { char: "t", z: "z-50" },
];

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

const CloudHero = () => {
  const bpKey = useBreakpoint();
  const cfg   = SCREEN_CONFIG[bpKey];

  // build letter positions fresh from THIS breakpoint's own spacing values
  let offset = 0;
  const letterPositions = LETTERS.map(({ char, z }, index) => {
    const left = offset;
    offset += cfg.letterBaseSpacing * cfg.letterSpacing[index];
    return { char, z, left };
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* ── DEV LABEL — delete this entire block before going live ─────── */}
      <div
        style={{
          position:      "fixed",
          bottom:        8,
          right:         12,
          background:    "rgba(0,0,0,0.6)",
          color:         "#fff",
          fontSize:      11,
          padding:       "3px 8px",
          borderRadius:  4,
          zIndex:        9999,
          fontFamily:    "monospace",
          pointerEvents: "none",
        }}
      >
        {bpKey} · {typeof window !== "undefined" ? window.innerWidth : ""}px
      </div>
      {/* ───────────────────────────────────────────────────────────────── */}

      {/* CLOUD 1 */}
      <img
        src={layer1}
        alt="Cloud Layer 1"
        className="absolute left-0 z-10"
        style={{ top: cfg.cloud1Top, width: cfg.cloud1Width }}
      />

      {/* ENCHANT LETTERS */}
      <div
        className="absolute"
        style={{ top: cfg.letterTop, left: cfg.letterLeft }}
      >
        {letterPositions.map(({ char, z, left }, index) => (
          <span
            key={index}
            className={`absolute ${z} font-normal leading-none`}
            style={{
              fontFamily:           "'Luxurious Script', cursive",
              fontSize:             cfg.letterFontSize,
              paddingLeft:          cfg.letterPaddingX,
              paddingRight:         cfg.letterPaddingX,
              left,
              background:
                "linear-gradient(to bottom, #FBF9E8, rgba(240,239,229,0.30))",
              WebkitBackgroundClip: "text",
              backgroundClip:       "text",
              WebkitTextFillColor:  "transparent",
              color:                "transparent",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* CLOUD 2 */}
      <img
        src={layer2}
        alt="Cloud Layer 2"
        className="absolute left-0 z-20"
        style={{ top: cfg.cloud2Top, width: cfg.cloud2Width }}
      />

      {/* BUILD MORE SECTION */}
      <div
        className="absolute z-50 text-left"
        style={{ top: cfg.textTop, left: cfg.textLeft }}
      >
        <h2
          className="font-normal leading-[100%] tracking-[0] text-[#32312B] select-none ml-0"
          style={{ fontFamily: "Meie Script", fontSize: cfg.headingSize }}
        >
          Build more with us
        </h2>

        <div
          className="mt-2 text-right relative"
          style={{ width: cfg.textBlockWidth, left: cfg.textBlockLeft }}
        >
          <p
            className="font-[500] leading-[1.2] text-[#32312B] pl-24"
            style={{ fontFamily: "Times Now", fontSize: cfg.bodySize }}
          >
            Explore the range and depth of our robust assortment
          </p>
          <p
            className="font-[500] leading-[1.2] text-[#32312B] pl-12"
            style={{ fontFamily: "Times Now", fontSize: cfg.bodySize }}
          >
            of offering, tailored to address ever-evolving
          </p>
          <p
            className="font-[500] leading-[1.2] text-[#32312B]"
            style={{ fontFamily: "Times Now", fontSize: cfg.bodySize }}
          >
            business needs and expectations.
          </p>
        </div>
      </div>

    </div>
  );
};

export default CloudHero;