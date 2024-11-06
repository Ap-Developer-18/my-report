import React from "react";
import debitcards from "../../assets/images/webp/debitcards.webp";

const MoneyManager = () => {
  return (
    <section className="bg-white py-12" id="about-us">
      <div className="container custom_container mx-auto lg:py-12 md:my-6 px-3">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 xl:gap-[70px] items-center ">
          <div className="lg:w-full w-full max-w-[789px]">
            <img className="max-w-[450px] md:max-w-none mx-auto w-full" src={debitcards} alt="transactions-cards" />
          </div>
          <div className="md:max-w-[680px] w-full text-center md:text-start">
            <h3 className="primary_heading !mb-0">What is M3?</h3>
            <p className="font-normal text-sm lg:text-base custom-2xl:text-lg opacity-70 text-black  mt-2 xl:mt-4">
              My Money Manager (M3) is a revolutionary financial tool designed
              to help you manage your money more effectively. M3 provides
              dedicated debit cards that come with advanced spending controls,
              ensuring that your given money is used as intended
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyManager;