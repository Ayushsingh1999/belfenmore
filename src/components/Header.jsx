import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/subtract.svg";
import logo2 from "../assets/logo.png";
import title from "../assets/web_main_title.png";
import diamond from "../assets/diamond.svg";
import logo_prospect_augment from "../assets/prospect_augment.svg";
import logo_Stontonne from "../assets/Strontonne.svg";

const HEADER_HEIGHT = 130;
const EDGE_PADDING = "p-4";

// Mobile configuration object with percentages
const MOBILE_CONFIG = {
  title: {
    alignment: "left", // 'left' for mobile, automatically centers on desktop
    widthPercentage: 53, // 40% of container width on mobile
    marginLeftPercentage: 0, // 0% margin from left
    marginTopPercentage: 5, // 5% margin from top
  },
  hamburger: {
    borderRadius: 8, // Border radius in pixels for the square button
    stickRadius: 100, // Border radius for sticks (100 = fully rounded)
    backgroundColor: "rgba(246, 242, 226, 0.8)", // F6F2E2 with 80% opacity
    stickColor: "#0E1319", // 100% opacity dark color
    stickHeight: 2, // in pixels - bolder/thicker sticks
    stickWidth: 18, // in pixels - wider sticks
    squareSize: 44, // in pixels - square button size (44px for better touch target)
    gap: 3, // gap between sticks in pixels
    padding: 23, // padding inside the button (creates equal space from all sides)
    position: {
      topPercentage: 0,
      rightPercentage: 0,
    },
  },
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const isRoot = location.pathname === "/";
  const isSolve = location.pathname === "/solve";
  const isProspectArgumentPage = location.pathname === "/prospect-augment";
  const isDomain = location.pathname === "/domains";
  const isBrand = location.pathname === "/brands";
  const isTrend = location.pathname === "/trends";
  const isCareer = location.pathname === "/careers";

  const handleLinkClick = () => {
    setOpen(false);
  };

  const menuItems = [
    { path: "/domains", label: "DOMAINS", number: "01" },
    { path: "/solve", label: "SOLVE", number: "02" },
    { path: "/brands", label: "BRANDS", number: "03" },
    { path: "/careers", label: "CAREERS", number: "04" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-transparent global-zoom"
      style={{ height: HEADER_HEIGHT }}
    >
      <div
        className={`
          relative
          w-full
          flex
          items-start
          justify-between
          ${EDGE_PADDING}
        `}
      >
        {/* LEFT LOGO (DESKTOP ONLY) */}
        <Link to="/">
          <div className="hidden md:flex items-start transition-all duration-300 ease-out">
            {isProspectArgumentPage && (
              <div className="hidden md:flex items-start gap-3">
                <img src={logo} alt="Logo" className="w-12 mt-2" />
                <div className="border-l border-black h-6 mt-2.5 -translate-x-[3px]"></div>
                <img src={diamond} alt="Logo" className="w-5 mt-2.5" />
              </div>
            )}

            {isBrand && (
              <div className="hidden md:flex items-start gap-3">
                <img src={logo2} alt="Logo" className="w-36 mt-0" />
              </div>
            )}

            {(isDomain || isSolve || isRoot || isCareer) && (
              <img src={logo} alt="Logo" className="w-12 mt-0" />
            )}
          </div>
        </Link>

        {/* CENTER TITLE - Using percentage-based configuration */}
        <Link to="/">
          <div
            className={`
              ${open ? "hidden" : "block"}
              ${MOBILE_CONFIG.title.alignment === "left" ? "md:absolute md:left-1/2 md:-translate-x-1/2" : ""}
              md:block
            `}
            style={{
              marginLeft: MOBILE_CONFIG.title.marginLeftPercentage > 0 ? `${MOBILE_CONFIG.title.marginLeftPercentage}%` : undefined,
              marginTop: MOBILE_CONFIG.title.marginTopPercentage > 0 ? `${MOBILE_CONFIG.title.marginTopPercentage}%` : undefined,
            }}
          >
            <img
              src={title}
              alt="Main Title"
              className="object-contain"
              style={{
                width: `${MOBILE_CONFIG.title.widthPercentage}%`,
                maxWidth: "100%",
              }}
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className="
            hidden
            md:flex
            flex-col
            items-end
            text-right
            font-light
            text-[9.5px]
            gap-3
            mt-0.5
            leading-tight
            font-['Plus_Jakarta_Sans']
          "
        >
          <Link to="/domains" className={isDomain ? "font-semibold" : ""}>
            DOMAINS
          </Link>

          <Link to="/solve" className={isSolve ? "font-semibold" : ""}>
            SOLVE
          </Link>

          <Link to="/brands" className={isBrand ? "font-semibold" : ""}>
            BRANDS
          </Link>

          <Link to="/careers" className={isCareer ? "font-semibold" : ""}>
            CAREERS
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON - Fixed with proper padding and cross button */}
        <button
          className="md:hidden relative flex items-center justify-center"
          style={{
            backgroundColor: MOBILE_CONFIG.hamburger.backgroundColor,
            borderRadius: `${MOBILE_CONFIG.hamburger.borderRadius}px`,
            width: `${MOBILE_CONFIG.hamburger.squareSize}px`,
            height: `${MOBILE_CONFIG.hamburger.squareSize}px`,
            padding: `${MOBILE_CONFIG.hamburger.padding}px`,
            top: MOBILE_CONFIG.hamburger.position.topPercentage > 0 ? `${MOBILE_CONFIG.hamburger.position.topPercentage}%` : undefined,
            right: MOBILE_CONFIG.hamburger.position.rightPercentage > 0 ? `${MOBILE_CONFIG.hamburger.position.rightPercentage}%` : undefined,
          }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {!open ? (
            // Hamburger icon
            <div 
              className="flex flex-col items-center justify-center"
              style={{
                gap: `${MOBILE_CONFIG.hamburger.gap}px`,
              }}
            >
              <span 
                className="block"
                style={{
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                }}
              ></span>
              <span 
                className="block"
                style={{
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                }}
              ></span>
              <span 
                className="block"
                style={{
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                }}
              ></span>
            </div>
          ) : (
            // Close icon (X) - Fixed to appear properly
            <div 
              className="relative flex items-center justify-center"
              style={{
                width: `${MOBILE_CONFIG.hamburger.stickWidth + 8}px`,
                height: `${MOBILE_CONFIG.hamburger.stickWidth + 8}px`,
              }}
            >
              {/* First diagonal line of X */}
              <span 
                className="absolute block"
                style={{
                  position: "absolute",
                  width: `${MOBILE_CONFIG.hamburger.stickWidth + 4}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  transform: "rotate(45deg)",
                }}
              ></span>
              {/* Second diagonal line of X */}
              <span 
                className="absolute block"
                style={{
                  position: "absolute",
                  width: `${MOBILE_CONFIG.hamburger.stickWidth + 4}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  transform: "rotate(-45deg)",
                }}
              ></span>
            </div>
          )}
        </button>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      {open && (
        <div
          className="
            fixed
            top-0
            left-0
            w-full
            h-full
            md:hidden
            flex
            flex-col
            font-['Plus_Jakarta_Sans']
            z-40
            px-6
            overflow-y-auto
          "
          style={{ backgroundColor: "#FFE95A" }}
        >
          {/* MOBILE TITLE */}
          <div className="absolute top-4 left-4">
            <Link to="/" onClick={handleLinkClick}>
              <img src={title} alt="Main Title" className="w-32 object-contain" />
            </Link>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col w-full mt-28 px-2">
            {menuItems.map((item) => (
              <div key={item.path} className="mb-14 last:mb-0">
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className="flex items-start gap-2 group relative w-full"
                >
                  {/* NUMBER */}
                  <div className="flex items-start mt-1.5 min-w-[22px]">
                    <span
                      style={{
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 300,
                        fontSize: "11px",
                        color: "#0E1319",
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="ml-0.5"
                      style={{
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 300,
                        fontSize: "11px",
                        color: "#0E1319",
                      }}
                    >
                      .
                    </span>
                  </div>

                  {/* LABEL */}
                  <div className="flex flex-col w-full">
                    <span
                      style={{
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 300,
                        fontSize: "32px",
                        color: "#0E1319",
                      }}
                    >
                      {item.label}
                    </span>

                    <div className="mt-5 w-full">
                      <div
                        style={{
                          width: "min(280px,85vw)",
                          height: "1.5px",
                          backgroundColor: "#0E1319",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;