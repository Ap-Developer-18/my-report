import React from "react";
import { Cross } from "./Icons";

const Overlay = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed h-screen w-full top-0 left-0 z-[9] bg-black/30 lg:hidden"
      ></div>
      <span
        onClick={() => setSidebarOpen(false)}
        className="w-10 h-10 z-[100] lg:hidden right-5 top-5 fixed cursor-pointer justify-center items-center bg-white rounded-full hidden sm:flex dark-icon"
      >
        <Cross />
      </span>
    </>
  );
};

export default Overlay;
