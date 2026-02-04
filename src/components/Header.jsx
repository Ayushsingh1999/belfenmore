import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/subtract.svg";
import logo2 from "../assets/logo.png"
import title from "../assets/web_main_title.png";
import Groupdimend from "../assets/Groupdimend.png";

const HEADER_HEIGHT = 130;
const EDGE_PADDING = "p-4";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isProspectArgumentPage =
    location.pathname === "/prospect-augment";

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
        <div className="hidden md:flex items-start transition-all duration-300 ease-out">
        {!isProspectArgumentPage ? (
          /* ===== DEFAULT LOGO ===== */
          <div className="hidden md:flex items-start">
            <img
              src={logo2}
              alt="Logo2"
              className="w-36 object-contain"
            />
          </div>
        ) : (
          /* ===== PROSPECT ARGUMENT LOGO ===== */
          <div className="hidden md:flex items-start gap-3">
            <img src={logo} alt="Logo" className="w-12 mt-2" />
            <div className="border-l-[1px] border-black h-8 mt-1"></div>
            <img src={Groupdimend} alt="Logo" className="w-5 mt-2.5" />
          </div>
        )}
        </div>

        {/* CENTER TITLE */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src={title}
            alt="Main Title"
            className="w-36 md:w-40 object-contain"
          />
        </div>

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
          <a href="#">DOMAINS</a>
          <a href="#">SOLVE</a>

          <div className="flex justify-end gap-2 items-center">
            <span className="bg-yellow-400 px-1 text-[9px]">New</span>
            <a href="#">TRENDS</a>
          </div>

          {isProspectArgumentPage ? <a href="#">
            BRANDS
          </a>:<a href="#" className="font-semibold">
            BRANDS
          </a> }
          <a href="#">CAREERS</a>
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
          <a href="#">DOMAINS</a>
          <a href="#">SOLVE</a>

          <div className="flex justify-end gap-2 items-center">
            <span className="bg-yellow-400 px-1 text-[9px]">New</span>
            <a href="#">TRENDS</a>
          </div>

          <a href="#" className="font-semibold">
            BRANDS
          </a>
          <a href="#">CAREERS</a>
        </div>
      )}
    </header>
  );
};

export default Header;
