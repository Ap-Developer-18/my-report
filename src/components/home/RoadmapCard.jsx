import React from "react";
import { RaodmapCircle } from "../common/Icons";

const RoadmapCard = ({ obj, i }) => {
  return (
    <article
      className="bg-american-blue rounded-xl sm:rounded-[22px] p-3 sm:p-4 lg:p-5 border border-american-blue hover:border-white duration-300 h-full sm:min-h-[255px] custom-2xl:min-h-[288px] relative"
      key={i}>
      <span
        className={`absolute -left-[77px] sm:-left-[97px] md:left-auto md:-right-6 lg:-right-12 translate-x-[50%] top-1/2 translate-y-[-50%] ${i % 2 === 0 ? "" : "md:hidden"
          }`}>
        <RaodmapCircle />
      </span>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-5">
        <span className="bg-primary rounded sm:rounded-[10px] h-6 sm:h-12 lg:h-16 xl:h-[78px] w-6 sm:w-12 lg:w-16 xl:w-[78px] flex justify-center items-center font-manrope text-base sm:text-2xl lg:text-4xl xl:text-[45px] font-bold">
          {i + 1}</span>
        <h3 className="sub_heading">{obj.title}</h3>
      </div>
      <p className="common_para mt-2 lg:mt-4">{obj.desc}</p>
    </article>
  );
};

export default RoadmapCard;