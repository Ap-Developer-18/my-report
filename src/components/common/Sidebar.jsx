import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../dashboard/Helper";
import { HelpIcon, LogoutIcon } from "../dashboard/Icons";
import { Cross, Logo } from "./Icons";
import sidebarIcon from "../../assets/images/png/dashboard/sidebar-icon.png";

// SIDEBAR COMPONENT: RENDERS THE NAVIGATION SIDEBAR
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  // USELOCATION HOOK TO GET THE CURRENT PATHNAME
  const location = useLocation();
  // REMOVE LEADING SLASH FROM PATHNAME
  const currentPath = location.pathname.replace(/^\//, "");
  return (
    <div
      className={`bg-primary lg:rounded-[20px] sm:max-w-[250px] custom-2xl:max-w-[308px] w-full h-full flex flex-col absolute lg:relative lg:translate-x-0 lg:left-auto duration-300 z-10 overflow-y-auto lg:max-h-[calc(100vh-24px)] top-0 lg:top-auto ${sidebarOpen ? "translate-x-0 left-0" : "-translate-x-full -left-full"}`}>
      {/* LOGO AND CLOSE BUTTON SECTION */}
      <div className="flex justify-between sm:justify-center px-3 lg:px-0 py-4 lg:py-0">
        {/* LOGO LINK */}
        <Link
          className="w-fit lg:mx-auto flex justify-center items-center lg:pt-[30px] lg:pb-10"
          to="/"><Logo />
        </Link>
        {/* CLOSE BUTTON VISIBLE ONLY ON SMALL SCREENS */}
        <span
          className="flex items-center sm:hidden"
          onClick={() => setSidebarOpen(false)}>
          <Cross />
        </span>
      </div>

      {/* NAVIGATION LINKS SECTION */}
      <div className="border-t border-white/10 grow pt-6 lg:pt-0">
        {sidebarLinks.map((obj, i) => {
          return (
            <Link
              key={i} // UNIQUE KEY FOR EACH LINK
              className={`flex gap-5 items-center text-xl py-6 lg:py-[30px] px-6 lg:px-12 duration-300 capitalize relative ${currentPath === obj.link
                  ? "text-secondary active_link" // ACTIVE LINK STYLING
                  : "text-white hover:text-secondary hover:stroke-secondary hover:fill-secondary" // HOVER STYLING FOR INACTIVE LINKS
                }`}
              to={obj.url} // NAVIGATE TO THE URL
              onClick={() => setSidebarOpen(false)} // CLOSE SIDEBAR ON LINK CLICK
            >
              {obj.icon} {obj.link}
              {/* SIDEBAR ICON */}
              <img
                className={`absolute right-0 top-0 h-full max-w-[43.2px] object-cover object-left hidden lg:block duration-1000 ${currentPath === obj.link ? "opacity-100" : "opacity-0" // FADE IN/OUT BASED ON ACTIVE LINK
                  }`}
                src={sidebarIcon}
                alt="sidebarIcon"
              />
            </Link>
          );
        })}
      </div>

      {/* HELP AND LOGOUT LINKS SECTION */}
      <div className="py-12 lg:py-[30px] px-6 lg:px-12 flex flex-col gap-12 lg:gap-[60px] border-t border-white/10">
        <Link className="flex gap-5 items-center text-xl text-white" to="/">
          <HelpIcon /> Help
        </Link>
        <Link className="flex gap-5 items-center text-xl text-white" to="/">
          <LogoutIcon /> Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; // EXPORTING THE SIDEBAR COMPONENT