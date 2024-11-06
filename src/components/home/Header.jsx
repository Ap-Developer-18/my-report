import React, { useEffect, useState } from "react";
import { Cross, Logo, Toggle } from "../common/Icons";
import { navLinks } from "../common/Helper";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  // useEffect to handle the body class changes when navigation links are toggled
  useEffect(() => {
    if (mobileNav) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }

    // Cleanup function to remove the added classes when the component unmounts or when navLinks changes
    return () => {
      document.body.classList.remove("overflow-hidden", "h-screen");
    };
  }, [mobileNav]);
  return (
    <nav className="py-4 lg:py-6 custom-2xl:py-10 border-b border-white relative z-10 bg-primary">
      {mobileNav ? (
        // Overlay div to cover the entire screen when navigation links are open
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="fixed h-screen w-full top-0 left-0 z-[9] bg-black/50"
        ></div>
      ) : (
        ""
      )}
      <div className="container custom_container mx-auto px-3 overflow-x-clip relative z-10">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div
            className={`flex flex-col sm:flex-row top-[75px] sm:top-auto sm:right-auto bg-white sm:bg-transparent gap-3 sm:gap-5 md:gap-6 lg:gap-10 items-start sm:items-center absolute sm:relative w-[200px] sm:w-auto p-6 sm:p-0 rounded-2xl duration-300 ${mobileNav ? " right-3" : "-right-[200px]"
              } `}
          >
            {navLinks.map((obj, i) => (
              <Link
                to={obj.url}
                key={i}
                onClick={() => setMobileNav(false)}
                className="common_link font-normal text-black sm:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-[1px] after:bg-black sm:after:bg-white after:duration-300 hover:after:w-full"
              >
                {obj.link}
              </Link>
            ))}
            <Link
              to="/cards"
              onClick={() => setMobileNav(false)}
              className="common_link font-normal py-2 lg:py-3 px-4 lg:px-6 border-primary border sm:border-white rounded-lg sm:rounded-2xl text-primary sm:text-white hover:text-white sm:hover:text-primary hover:bg-primary sm:hover:bg-white"
            >
              Demo
            </Link>
          </div>
          <span
            className="cursor-pointer sm:hidden w-8 flex justify-center"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? <Cross /> : <Toggle />}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
