import React from "react";

const Heading = ({ title, icon }) => {
  return (
    <h4 className="text-xl sm:text-2xl md:text-[26px] font-bold font-manrope flex items-center gap-3 mb-6 xl:mb-10">
      {icon}
      {title}
    </h4>
  );
};

export default Heading;
