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

// Mobile configuration object
const MOBILE_CONFIG = {
  title: {
    widthPercentage: 53, // 53% of container width on mobile
  },
  header: {
  topValue: 20, // pixels on mobile
},
  hamburger: {
    borderRadius: 8,
    stickRadius: 100,
    backgroundColor: "rgba(246, 242, 226, 0.8)",
    stickColor: "#0E1319",
    stickHeight: 2,
    stickWidth: 18,
    squareSize: 44,
    gap: 6,
    padding: 13,
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
    <>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        /* Mobile title styles */
        @media (max-width: 767px) {
          .mobile-title {
            width: ${MOBILE_CONFIG.title.widthPercentage}%;
            max-width: 100%;
          }
          
          /* Override absolute positioning on mobile */
          .title-wrapper {
            position: relative !important;
            left: auto !important;
            transform: none !important;
          }
        }
        
        /* Desktop title styles */
        @media (min-width: 768px) {
          .desktop-title {
            width: 10rem; /* w-40 equivalent */
            max-width: 100%;
          }
            
        }
      `}</style>
      
      <header
        className="fixed top-0 left-0 w-full z-50 bg-transparent global-zoom"
        style={{ height: HEADER_HEIGHT, top: window.innerWidth < 768 ? '12px' : ''}}
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

          {/* CENTER TITLE - Left on mobile, centered on desktop */}
          <Link to="/">
            <div
              className={`
                ${open ? "hidden" : "block"}
                title-wrapper
                md:absolute md:left-1/2 md:-translate-x-1/2
              `}
            >
              <img
                src={title}
                alt="Main Title"
                className="mobile-title desktop-title object-contain"
                style={{
                  display: 'block',
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

          {/* MOBILE MENU BUTTON - With animated cross */}
          <button
            className="md:hidden relative flex items-center justify-center transition-all duration-300 ease-in-out"
            style={{
              marginTop: '-8px',
              backgroundColor: open? '' : MOBILE_CONFIG.hamburger.backgroundColor,
              borderRadius: `${MOBILE_CONFIG.hamburger.borderRadius}px`,
              width: `${MOBILE_CONFIG.hamburger.squareSize}px`,
              height: `${MOBILE_CONFIG.hamburger.squareSize}px`,
              padding: `${MOBILE_CONFIG.hamburger.padding}px`,
              position: "relative",
              zIndex: 50,
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div 
              className="relative"
              style={{
                width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                height: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                position: "relative",
              }}
            >
              {/* Top stick - becomes first diagonal of X when open */}
              <span 
                className="absolute block transition-all duration-300 ease-in-out"
                style={{
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                  transform: open 
                    ? `rotate(45deg) translate(0px, 0px)` 
                    : `rotate(0deg) translate(0px, -${MOBILE_CONFIG.hamburger.gap + MOBILE_CONFIG.hamburger.stickHeight}px)`,
                  top: "50%",
                  left: 0,
                  marginTop: `-${MOBILE_CONFIG.hamburger.stickHeight / 2}px`,
                  transformOrigin: "center",
                }}
              ></span>
              
              {/* Middle stick - fades out when open */}
              <span 
                className="absolute block transition-all duration-300 ease-in-out"
                style={{
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                  transform: open ? "scaleX(0)" : "scaleX(1)",
                  top: "50%",
                  left: 0,
                  marginTop: `-${MOBILE_CONFIG.hamburger.stickHeight / 2}px`,
                  opacity: open ? 0 : 1,
                  transformOrigin: "center",
                }}
              ></span>
              
              {/* Bottom stick - becomes second diagonal of X when open */}
              <span 
                className="absolute block transition-all duration-300 ease-in-out"
                style={{
                  borderRadius: `${MOBILE_CONFIG.hamburger.stickRadius}px`,
                  width: `${MOBILE_CONFIG.hamburger.stickWidth}px`,
                  height: `${MOBILE_CONFIG.hamburger.stickHeight}px`,
                  backgroundColor: MOBILE_CONFIG.hamburger.stickColor,
                  transform: open 
                    ? `rotate(-45deg) translate(0px, 0px)` 
                    : `rotate(0deg) translate(0px, ${MOBILE_CONFIG.hamburger.gap + MOBILE_CONFIG.hamburger.stickHeight}px)`,
                  top: "50%",
                  left: 0,
                  marginTop: `-${MOBILE_CONFIG.hamburger.stickHeight / 2}px`,
                  transformOrigin: "center",
                }}
              ></span>
            </div>
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
            style={{ 
              backgroundColor: "#FFE95A",
              animation: "slideIn 0.4s ease-out forwards",
            }}
          >
            {/* MOBILE TITLE */}
            <div className="absolute top-4 left-4">
              <Link to="/" onClick={handleLinkClick}>
                <img src={title} alt="Main Title" className="mt-2 w-40 object-contain" />
              </Link>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col w-full mt-28 px-2">
              {menuItems.map((item, index) => (
                <div 
                  key={item.path} 
                  className="mb-14 last:mb-0"
                  style={{
                    animation: "fadeInUp 0.5s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
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
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            animation: "expandLine 0.5s ease-out forwards",
                            animationDelay: `${index * 0.1 + 0.2}s`,
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
    </>
  );
};

export default Header;