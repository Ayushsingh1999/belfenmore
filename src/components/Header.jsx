import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/subtract.svg";
import logo2 from "../assets/logo.png";
import title from "../assets/web_main_title.png";
import diamond from "../assets/diamond.svg";
import logo_prospect_augment from "../assets/prospect_augment.svg"
import logo_Stontonne from "../assets/Strontonne.svg"

const HEADER_HEIGHT = 130;
const EDGE_PADDING = "p-4";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isRoot = location.pathname === "/";

  const isSolve = location.pathname === "/solve";

  const isProspectArgumentPage = location.pathname === "/prospect-augment";

  const isDomain = location.pathname === "/domains";

 const isBrand = location.pathname === "/brands";

 const isTrend = location.pathname === "/trends";

 const isCareer = location.pathname === "/careers";

  return (
    <header
      className="fixed top-0 left-0 w-screen z-50 bg-transparent"
      style={{ height: HEADER_HEIGHT }}
    >
      <div
        className={`
          relative
          w-screen
          h-full
          flex
          items-start
          justify-between
          ${EDGE_PADDING}
        `}
      >
        {/* LEFT LOGO (DESKTOP ONLY) */}
        <Link to='/'>
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
              <img src={logo} alt="Logo" className="w-12 mt-0" />
              <div className="border-l border-black h-14 -translate-x-[3px] -translate-y-[1px] "></div>
              <div className="flex  flex-col translate-y-7 -translate-x-1">
              <img src={logo_prospect_augment} alt="Logo" className="w-20" />
              <img src={logo_Stontonne} alt="Logo" className="w-14 mt-2.5" />
              </div>
            </div>
          )}

          {(isDomain || isSolve || isRoot || isCareer) && <img src={logo} alt="Logo" className="w-12 mt-0" />}

          {/* {(isRoot || isBrand || isCareer) && (
            <img src={logo2} alt="Logo2" className="w-36 object-contain" />
          )} */}
        </div>
        </Link>

        {/* CENTER TITLE */}
        <Link to='/'>
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src={title}
            alt="Main Title"
            className="w-36 md:w-40 object-contain"
          />
        </div>
        </Link>

        {/* RIGHT MENU */}
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
          <Link to="/domains" className={isDomain ? "font-semibold" : ""}>DOMAINS</Link>
          <Link to="/solve" className={isSolve ? "font-semibold" : ""}>SOLVE</Link>

          {/* <div className="flex justify-end gap-2 items-center">
            <span className="bg-yellow-400 px-1 text-[9px]">New</span>
            <div style={{cursor: 'pointer'}} to="/trends" className={isTrend ? "font-semibold" : ""}>TRENDS</div>
          </div> */}

          {isProspectArgumentPage ? (
            <Link to="/brands" className={isBrand ? "font-semibold" : ""}>BRANDS</Link>
          ) : (
            <Link to="/brands" className={isBrand ? "font-semibold" : ""}>
              BRANDS
            </Link>
          )}
          <Link to="/careers" className={isCareer ? "font-semibold" : ""}>CAREERS</Link>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden
            p-3
            flex
            flex-col
            gap-4
            text-sm
            text-right
            font-['Plus_Jakarta_Sans']
          "
        >
          <a href="#" className={isDomain ? "font-semibold" : ""}>DOMAINS</a>
          <a href="#" className={isSolve ? "font-semibold" : ""}>SOLVE</a>

          {/* <div className="flex justify-end gap-2 items-center">
            <span className="bg-yellow-400 px-1 text-[9px]">New</span>
            <a href="#" className={isTrend ? "font-semibold" : ""}>TRENDS</a>
          </div> */}

          <a href="#" className={isBrand ? "font-semibold" : ""}>
            BRANDS
          </a>
          <a href="#" className={isCareer ? "font-semibold" : ""}>CAREERS</a>
        </div>
      )}
    </header>
  );
};

export default Header;
