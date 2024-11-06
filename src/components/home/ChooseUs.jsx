import React from "react";
import chooseUs from "../../assets/images/webp/choose-us.webp";
import { featuresList } from "../common/Helper";

const FeatureCard = ({ icon, title, description }) => (
  <article className="flex flex-col items-center max-w-[478px]">
    <div className="2xl:w-[78px] 2xl:h-[78px] md:w-14 md:h-14 w-12 h-12 p-2.5 rounded-[10px] bg-primary flex justify-center items-center 2xl:mb-6 sm:mb-4 mb-2">
      {icon}
    </div>
    <h3 className="sub_heading custom-2xl:mb-[18px] 2xl:mb-4 sm:mb-2 mb-1">
      {title}
    </h3>
    <p className="common_para text-center">{description}</p>
  </article>
);

const ChooseUs = () => {
  return (
    <section
      className="py-12 md:py-16 xl:py-20 custom-2xl:py-[120px] container custom_container mx-auto px-3"
      id="cards"
    >
      <div className="container custom_container mx-auto px-3">
        <h2 className="primary_heading text-center mb-6">Why Choose M3?</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center">
        <div className="flex sm:flex-row flex-col lg:flex-col justify-between items-center h-full gap-7 max-w-[478px] w-full">
          {featuresList.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <img
          src={chooseUs}
          alt="Person with credit card"
          className="w-full h-auto rounded-lg xl:max-w-[562px] max-w-[350px] mx-auto"
        />
        <div className="flex sm:flex-row flex-col lg:flex-col justify-between items-center h-full gap-7 max-w-[478px] w-full">
          {featuresList.slice(2).map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
