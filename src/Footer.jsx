import logo from "./assets/Subtract.svg";
import grassGroup from "./assets/grass_group.png"; // grouped grass image
import grassGroupwithLogo from "./assets/grasswithlogo.png"

const Footer = () => {
  return (
    <footer className="relative w-full h-[205px] border-t border-black">
      {/* Content */}
      <div className="relative z-10 h-full">
        {/* ───────────── TOP BAR ───────────── */}
        <div className="flex items-baseline justify-between px-5 pt-3">
          {/* Email */}
          <a
            href="mailto:more@belfenmore.com"
            className="
              text-[#2C2416]
              text-[16px]
              font-normal
              leading-[1]
              tracking-[0]
              flex
              items-center
              gap-1
              hover:underline
              transition-all
            "
            style={{
              fontFamily: "Cabinet Grotesk Variable, sans-serif",
              fontVariationSettings: '"wght" 400',
            }}
          >
            more@belfenmore.com
<svg
  className="w-3 h-3"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M9 7h8v8" />
</svg>

          </a>

          {/* Right Links */}
          <div className="flex gap-6">
            <div className="text-left">
              <div
                className="
                  text-[#2C2416]
                  text-[11px]
                  leading-[1]
                  tracking-[0]
                  mb-1
                "
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 200,
                }}
              >
                Sustainability
              </div>

              <a
                href="/our-byrds-journey"
                className="
                  text-[#2C2416]
                  text-[11px]
                  leading-[1]
                  tracking-[0]
                  flex
                  items-center
                  gap-1
                  justify-start
                  hover:underline
                "
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                }}
              >
                Our Byrds Journey
<svg
  className="w-3 h-3"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M9 7h8v8" />
</svg>

              </a>
            </div>

            <div className="text-left">
              <div
                className="
                  text-[#2C2416]
                  text-[11px]
                  leading-[1]
                  tracking-[0]
                  mb-1
                "
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 200,
                }}
              >
                Design
              </div>

              <a
                href="/morphline-studios"
                className="
                  text-[#2C2416]
                  text-[11px]
                  leading-[1]
                  tracking-[0]
                  flex
                  items-center
                  gap-1
                  justify-start
                  hover:underline
                "
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                }}
              >
                Morphline studios
<svg
  className="w-3 h-3"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M9 7h8v8" />
</svg>

              </a>
            </div>
          </div>
        </div>

        {/* ───────────── REGION NAV ───────────── */}
        <nav
          className="
            absolute
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-2
            text-[#2C2416]
            font-light
            text-[11px]
            leading-[1]
            tracking-[0]
            cursor-default
          "
          style={{
            top: "24px",
            fontFamily: "Times Now, Times, serif",
          }}
        >
          <span>USA</span>
          <span className="text-[#2C2416]">•</span>
          <span>UK</span>
          <span className="text-[#2C2416]">•</span>
          <span>MENA</span>
          <span className="text-[#2C2416]">•</span>
          <span>APAC</span>
          <span className="text-[#2C2416]">•</span>
          <span>NL</span>
          <span className="text-[#2C2416]">•</span>
          <span>AUS</span>
        </nav>

        {/* ───────────── CENTER CONTENT ───────────── */}
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2 text-center">
          <img src={logo} alt="Logo" className="h-8 w-auto mx-auto mb-2" />

          <div
            className="
              text-[#2C2416]
              italic
              font-normal
              text-[14px]
              leading-[1]
              tracking-[0]
              mb-2
            "
            style={{ fontFamily: "Times Now, Times, serif" }}
          >
            Threadality Technology’s
          </div>

          {/* <h2
            className="
              text-[#2C2416]
              text-[40px]
              leading-[1]
              tracking-[0]
            "
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
            }}
          >
            BELFENMORE CONSULTING
          </h2> */}
        </div>

        {/* Copyright */}
        <div className="absolute bottom-4 right-6">
          <p className="text-[#2C2416] text-xs">© 2025</p>
        </div>
      </div>

      {/* ───────────── BOTTOM IMAGE COMPOSITION ───────────── */}
{/* ───────────── BOTTOM IMAGE COMPOSITION ───────────── */}
<div
  className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"
  style={{
    height: "240px", // controls how much grass is visible (top crop)
  }}
>
<img
  src={grassGroupwithLogo}
  alt=""
  className="
    absolute
    z-0
    left-[-10%]
    w-[120%]
    max-w-none
    bottom-[-110px]
    2xl:bottom-[-170px]
  "
/>
</div>

    </footer>
  );
};

export default Footer;
