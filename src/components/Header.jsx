import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/subtract.svg";
import logo2 from "../assets/logo.png";
import title from "../assets/web_main_title.png";
import diamond from "../assets/diamond.svg";

const HEADER_HEIGHT = 130;
const EDGE_PADDING = "p-4";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
    { path: "/careers", label: "CAREERS", number: "04" }
  ];

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
                <img src={logo2} alt="Logo" className="w-36 mt-0" />
              </div>
            )}

            {(isDomain || isSolve || isRoot || isCareer) && <img src={logo} alt="Logo" className="w-12 mt-0" />}
          </div>
        </Link>

        {/* CENTER TITLE (DESKTOP ONLY) - HIDDEN ON MOBILE WHEN MENU IS OPEN */}
        <Link to='/'>
          <div className={`absolute left-1/2 -translate-x-1/2 ${open ? 'hidden' : 'block'}`}>
            <img
              src={title}
              alt="Main Title"
              className="w-36 md:w-40 object-contain"
            />
          </div>
        </Link>

        {/* RIGHT MENU (DESKTOP) */}
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
          className="md:hidden text-2xl z-50 relative"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: open ? '#000' : '#000' }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      {open && (
        <div
          className="
            fixed
            inset-0
            md:hidden
            flex
            flex-col
            font-['Plus_Jakarta_Sans']
            z-40
            px-6
            overflow-y-auto
          "
          style={{ 
            backgroundColor: '#FFE95A',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {/* Title image in top left corner for mobile */}
          <div className="absolute top-4 left-4">
            <Link to='/' onClick={handleLinkClick}>
              <img src={title} alt="Main Title" className="w-32 object-contain" />
            </Link>
          </div>

          {/* Menu items with responsive spacing */}
          <div className="flex flex-col w-full mt-28 px-2">
            {menuItems.map((item) => {
              return (
                <div key={item.path} className="mb-14 last:mb-0">
                  <Link 
                    to={item.path}
                    onClick={handleLinkClick}
                    className="flex items-start gap-2 group relative w-full"
                  >
                    {/* Number with dot - smaller and aligned top right */}
                    <div className="flex items-start mt-1.5 min-w-[22px]">
                      <span 
                        className="text-right"
                        style={{
                          fontFamily: 'Plus Jakarta Sans',
                          fontWeight: 300,
                          fontSize: '11px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#0E1319',
                        }}
                      >
                        {item.number}
                      </span>
                      <span 
                        className="ml-0.5"
                        style={{
                          fontFamily: 'Plus Jakarta Sans',
                          fontWeight: 300,
                          fontSize: '11px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#0E1319',
                        }}
                      >
                        .
                      </span>
                    </div>
                    
                    {/* Menu text with responsive container */}
                    <div className="flex flex-col w-full">
                      <span 
                        className="relative inline-block"
                        style={{
                          fontFamily: 'Plus Jakarta Sans',
                          fontWeight: 300,
                          fontSize: '32px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          color: '#0E1319',
                          fontStyle: 'normal',
                          width: 'fit-content',
                          maxWidth: '100%',
                          wordBreak: 'break-word'
                        }}
                      >
                        {item.label}
                      </span>
                      
                      {/* Responsive underline */}
                      <div className="mt-5 w-full">
                        <div 
                          style={{
                            width: 'min(280px, 85vw)',
                            height: '1.5px',
                            backgroundColor: '#0E1319',
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;