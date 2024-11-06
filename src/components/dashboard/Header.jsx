import React from "react";
import { NotificationIcon, SettingIcon } from "./Icons";
import { Toggle } from "../common/Icons";
import { Link } from "react-router-dom";

const Header = ({ title, sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className="flex items-center justify-between w-full mb-[30px]">
      <div className="flex items-center">
        <span
          className="cursor-pointer lg:hidden w-[38px] flex justify-center me-2 dark-icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Toggle />
        </span>
        <h5 className="font-manrope font-bold text-black text-2xl sm:text-[32px]">
          {title}
        </h5>
      </div>
      <div className="flex gap-3.5 sm:gap-[30px]">
        <span className="cursor-pointer h-9 sm:h-[63px] w-10 sm:w-[70px] rounded sm:rounded-[10px] flex items-center justify-center shadow-custom">
          <NotificationIcon />
        </span>
        <Link
          to={"/profile"}
          className="cursor-pointer h-9 sm:h-[63px] w-10 sm:w-[70px] rounded sm:rounded-[10px] flex items-center justify-center shadow-custom"
        >
          <SettingIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
