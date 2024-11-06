import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";

// USERLAYOUT COMPONENT: WRAPS THE MAIN CONTENT OF THE DASHBOARD
const UserLayout = ({ title, children }) => {
  // STATE TO MANAGE THE VISIBILITY OF THE SIDEBAR
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // USEEFFECT TO HANDLE BODY CLASS MANAGEMENT BASED ON SIDEBAR STATE
  useEffect(() => {
    if (sidebarOpen) {
      // IF SIDEBAR IS OPEN, ADD CLASSES TO PREVENT SCROLLING
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      // IF SIDEBAR IS CLOSED, REMOVE SCROLLING PREVENTION CLASSES
      document.body.classList.remove("overflow-hidden", "h-screen");
    }

    // CLEANUP FUNCTION TO REMOVE CLASSES WHEN COMPONENT UNMOUNTS OR WHEN SIDEBAR STATE CHANGES
    return () => {
      document.body.classList.remove("overflow-hidden", "h-screen");
    };
  }, [sidebarOpen]); // DEPENDENCY ARRAY TO RUN THE EFFECT WHEN SIDEBAR STATE CHANGES

  return (
    <div className="flex items-start overflow-hidden lg:ps-3 py-3 h-screen">
      {/* CONDITIONAL RENDERING OF THE OVERLAY IF SIDEBAR IS OPEN */}
      {sidebarOpen && (
        <Overlay sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}

      {/* SIDEBAR COMPONENT */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT AREA */}
      <div className="w-full px-3 sm:px-6 custom-2xl:px-[40px] py-3 sm:py-6 overflow-y-auto max-h-screen">
        {/* HEADER COMPONENT */}
        <Header
          title={title} // PASSING THE PAGE TITLE TO THE HEADER
          sidebarOpen={sidebarOpen} // PASSING THE SIDEBAR STATE TO THE HEADER
          setSidebarOpen={setSidebarOpen} // PASSING THE FUNCTION TO TOGGLE SIDEBAR STATE
        />

        {/* RENDER CHILD COMPONENTS (MAIN CONTENT) */}
        {children}
      </div>
    </div>
  );
};

export default UserLayout; // EXPORTING THE USERLAYOUT COMPONENT