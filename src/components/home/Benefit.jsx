import React from "react";
import benefitBg from "../../assets/images/png/benefit-bg.png";
import BenefitCard from "./BenefitCard";
import { benifitList } from "../common/Helper";
const Benefit = () => {
  return (
    <section
      className="bg-primary text-white py-12 md:py-16 xl:py-20 custom-2xl:py-[120px] relative z-[1] overflow-hidden"
      id="cards"
    >
      <img
        className="absolute bottom-0 right-0 max-w-[400px] lg:max-w-[600px] custom-2xl:max-w-[800px] z-[-1] w-full"
        src={benefitBg}
        alt="benefitBg"
      />
      <div className="container custom_container mx-auto px-3">
        <h2 className="primary_heading text-center mb-2 !leading-[120%]">
          Who Can Benefit from M3?
        </h2>
        <div className="flex -mx-2 custom-2xl:mx-[-15px] flex-row justify-center flex-wrap">
          {benifitList.map((obj, i) => (
            <BenefitCard obj={obj} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
