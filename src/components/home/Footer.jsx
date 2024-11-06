import React, { useEffect, useState } from "react";
import pagelogo from "../../assets/images/png/page-logo.png";
import { Link } from "react-router-dom";
import { footerLinks, socialLinks } from "../common/Helper";
import JoinUs from "./JoinUs";

const handleSubmit = (event) => {
  event.preventDefault();
  // Add your form submission logic here
  const email = event.target.email.value;
  console.log("Submitted email:", email);
};

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This will ensure the year updates correctly if needed.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-primary">
      <div className="relative flex items-end z-10  pt-[170px] md:pt-[190px] xl:pt-[250px] 2xl:pt-[323px]">
        <JoinUs />
        <div className="container custom_container mx-auto px-3 pb-12 xl:pb-[58.71px] border-b-[1.11px] border-[#8A8A8A] ">
          <div className="lg:flex-row flex-col flex justify-between gap-4">
            <div>
              <Link to="/">
                <img
                  className="max-w-[142px]"
                  src={pagelogo}
                  alt="footer-logo"
                />
              </Link>
              <div className="flex gap-3 mt-6 xl:mt-9">
                {socialLinks.map((obj, i) => (
                  <a
                    className="transition-all duration-300 ease-linear inline-block "
                    target="_blank"
                    href={obj.url}
                    key={i}
                    rel="noreferrer"
                  >
                    {obj.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="  2xl:flex-row flex-col flex gap-4 2xl:gap-5">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-2 2xl:gap-4 ">
                {footerLinks.map((section, i) => (
                  <div key={i}>
                    <h5 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-[#fafafa]">
                      {section.heading}
                    </h5>
                    <div className="flex flex-col space-y-3">
                      {section.links.map((linkItem, j) => (
                        <a
                          className="flex font-normal text-base text-white opacity-70 duration-300 hover:opacity-100"
                          href={linkItem.url}
                          key={j}
                        >
                          {linkItem.icon && (
                            <span className="mr-2">{linkItem.icon}</span>
                          )}
                          {linkItem.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* join-btn-data */}
              <div className="mt-xl-4 2xl:mt-0">
                <h5 className="text-base sm:text-lg font-semibold mb-4 text-[#fafafa]">
                  Subscribe to Newsletter
                </h5>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg flex items-center justify-between max-w-[428px] w-full"
                >
                  <div className="w-full">
                    <label htmlFor="email" className="sr-only"></label>
                    <input
                      className="ps-3 sm:ps-5 w-full pe-2  sm:text-sm text-xs font-normal placeholder-[#8A8A8A] outline-none "
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 sm:px-[58px] border-2 border-transparent hover:border-2 hover:border-blueberry bg-blueberry rounded-tr-lg rounded-br-lg text-[#FAFAFA] hover:text-blueberry font-bold text-sm lg:text-base custom-2xl:text-lg py-[14px] hover:bg-white duration-300"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="text-center text-white opacity-70 py-6 text-base xl:py-12">© Copyright 2024, All Rights Reserved by M3 financial</p> */}
      <p className="text-center text-white opacity-70 py-6 text-sm sm:text-base xl:py-12">
        © Copyright {year}, All Rights Reserved by M3 Financial
      </p>
    </footer>
  );
};

export default Footer;