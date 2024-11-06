import React from "react";
import Header from "./Header";
import { Arrow } from "../common/Icons";
import heroBg from "../../assets/images/png/hero-bg.png";
import masterCard from "../../assets/images/png/master-card.png";
import mainImg from "../../assets/images/webp/hero-img.webp";
import PrimaryButton from "../common/PrimaryButton";
const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="relative max-w-[1920px] mx-auto overflow-hidden z-10">
        <img
          className="absolute sm:bottom-[-330px] left-0 max-w-[830px] z-[-1] w-full"
          src={heroBg}
          alt="heroBg"
        />
        <Header />
        <div className="md:min-h-[400px] lg:min-h-[500px] xl:min-h-[640px] custom-2xl:min-h-[846px] relative flex items-center mt-10 md:mt-0">
          <div className="container custom_container mx-auto px-3 text-center md:text-start">
            <h4 className="text-blueberry text-sm sm:text-lg xl:text-2xl font-semibold">
              Welcome to My Money Manager (M3)
            </h4>
            <h1 className="text-[36px] lg:text-6xl xl:text-7xl custom-2xl:text-[85px] font-bold text-white mb-6 xl:mb-10 mt-3 xl:mt-5 font-manrope !leading-[120%]">
              Your Smart <br /> Financial Partner
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-6 xl:gap-12">
              <PrimaryButton text="Get Started" url="#contact-us" />
              <a
                href="#about-us"
                className="common_link text-white flex items-center gap-2 hover:gap-4 relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:translate-x-[-50%] after:w-full after:h-[1px] after:bg-white"
              >
                About Us <Arrow />
              </a>
            </div>
            <div className="relative md:absolute md:top-1/2 md:translate-y-[-50%] md:right-0 flex justify-center mt-16 md:mt-0 md:max-w-[45%] 2xl:max-w-[49%]">
              <div className="max-w-[100px] lg:max-w-[140px] xl:max-w-[171px] p-1 lg:p-3 xl:p-4 rounded-2xl absolute left-[25%] md:left-10 lg:left-20 md:bottom-0 translate-y-[-50%] md:translate-y-[50%] bg-white">
                <img
                  className="rounded-2xl w-full"
                  src={masterCard}
                  alt="masterCard"
                />
              </div>
              <img
                className="w-full max-w-[450px] md:max-w-none rounded-t-xl md:rounded-l-[42px] object-cover h-[200px] sm:h-[260px] md:h-auto"
                src={mainImg}
                alt="mainImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
