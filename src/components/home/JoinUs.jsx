import React from "react";
import { Arrow } from "../common/Icons";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <section className="absolute w-full left-1/2 top-0 translate-y-[-50%] translate-x-[-50%]">
      <div className="container custom_container mx-auto px-3">
        <div className="bg-blueberry  rounded-[8.89px] max-w-[1466.64px] mx-auto px-3 sm:px-0 py-12 lg:py-16  2xl:py-20">
          <div className="flex flex-col items-center">
            <h4 className="max-w-[669px] !leading-[130%] text-center text-white primary_heading !mb-0">
              Join M3 Today and Take Control of Your Finances!
            </h4>
            <Link
              to="/cards"
              className="common_link text-white bg-primary flex items-center gap-2 hover:gap-4 mt-4 custom-2xl:mt-7 py-3 lg:py-4 xl:py-5 px-6 xl:px-11 rounded-full"
            >
              Demo <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
