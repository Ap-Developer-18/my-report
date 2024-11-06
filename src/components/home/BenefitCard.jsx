import React from "react";
import { Arrow } from "../common/Icons";

const BenefitCard = ({ obj, i }) => {
  return (
    <article
      className={`sm:w-6/12 lg:w-4/12 px-2 custom-2xl:px-[15px] mt-4 ${
        i === 2 ? "lg:mt-0" : "sm:mt-0"
      }`}
      key={i}
    >
      <div className="bg-american-blue rounded-[22px] p-5 custom-2xl:p-[40px] flex flex-col justify-between border border-american-blue hover:border-white duration-300 h-full max-w-[450px] sm:max-w-none">
        <div>
          <span>{obj.icon}</span>
          <h3 className="text-xl lg:text-2xl custom-2xl:text-[32px] font-semibold font-manrope mt-4 custom-2xl:mt-6 mb-3 custom-2xl:mb-4 !leading-[125%]">
            {obj.title}
          </h3>
          <p className="text-sm lg:text-base custom-2xl:text-lg opacity-70">
            {obj.desc}
          </p>
        </div>
        <button className="font-semibold text-sm lg:text-lg text-white duration-300 flex items-center gap-2 hover:gap-4 mt-4 custom-2xl:mt-7">
          {obj.link} <Arrow />
        </button>
      </div>
    </article>
  );
};

export default BenefitCard;
