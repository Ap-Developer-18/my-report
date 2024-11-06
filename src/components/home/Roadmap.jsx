import React from "react";
import { roadmapList } from "../common/Helper";
import RoadmapCard from "./RoadmapCard";

const Roadmap = () => {
  return (
    <section
      className="bg-primary text-white py-12 md:py-16 xl:py-20 custom-2xl:py-[120px] relative z-[1] overflow-hidden"
      id="services"
    >
      <div className="container custom_container mx-auto px-3">
        <h2 className="primary_heading text-center mb-6 !leading-[120%]">
          How Does M3 Work?
        </h2>
        <div className="grid justify-center md:grid-cols-2 gap-x-12 lg:gap-x-[96px] gap-y-4 md:gap-y-[31px] pl-10 sm:pl-12 md:pl-0 max-w-[550px] md:max-w-none mx-auto md:mx-0 relative after:content-[''] after:absolute after:w-1 lg:after:w-[7px] after:h-full after:left-3 sm:after:left-0 md:after:left-1/2 md:after:translate-x-[-50%] after:bg-white/50 after:shadow-line after:rounded-2xl">
          {roadmapList.map((obj, i) => (
            <RoadmapCard obj={obj} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
