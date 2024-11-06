import React from "react";
import googleLogo from "../../assets/images/png/google-logo.png";
import contactImg from "../../assets/images/webp/contact-img.webp";
import Form from "./Form";
const ContactUs = () => {
  const fields = [
    { name: "firstName", placeholder: "First Name", label: "First Name" },
    { name: "lastName", placeholder: "Last Name", label: "Last Name" },
    { name: "email", placeholder: "Email", label: "Email" },
    { name: "password", placeholder: "Password", label: "Password" },
  ];
  return (
    <section
      className="pt-12 md:pt-16 xl:pt-20 custom-2xl:pt-[120px] pb-[170px] md:pb-[190px] xl:pb-[250px] 2xl:pb-[342px] text-black"
      id="contact-us"
    >
      <div className="container custom_container mx-auto px-3">
        <h2 className="primary_heading text-center mb-6">Interested in M3?</h2>
        <div className="flex gap-3 xl:gap-7">
          <div className="py-4 md:py-8 custom-2xl:py-14 rounded-[20px] bg-off-white w-full h-auto flex items-center max-w-[450px] mx-auto md:max-w-none">
            <article className="w-full max-w-[588px] px-4 lg:px-10 custom-2xl:px-0 mx-auto">
              <h3 className="font-manrope text-xl lg:text-2xl custom-2xl:text-[32px] font-bold">
                Join Our Waitlist
              </h3>
              <p className="text-sm xl:text-base custom-2xl:text-lg mt-3 custom-2xl:mt-4 mb-4 lg:mb-6 custom-2xl:mb-10">
                Be notified of M3 as our product becomes available.
              </p>
              <button className="flex justify-center items-center gap-6 border-[#868091] border-2 py-[6px] w-full rounded-lg">
                <img
                  className="max-w-5 lg:max-w-[36px] custom-2xl:max-w-[52px]"
                  src={googleLogo}
                  alt="googleLogo"
                />
                <p className="text-base lg:text-xl custom-2xl:text-[27px]">
                  Sign up with Google
                </p>
              </button>
              <p className="text-base xl:text-lg custom-2xl:text-[25px] text-center relative after:content-[''] after:absolute after:top-1/2 after:left-0 after:translate-y-[-50%] after:w-full after:h-[1px] after:bg-black my-3 lg:my-4 custom-2xl:my-6">
                <span className="bg-off-white relative z-[1] px-3"> Or</span>
              </p>
              <Form fields={fields} />
            </article>
          </div>
          <div className="w-full h-auto hidden md:block">
            <img
              className="w-full h-full max-h-[650px] custom-2xl:max-h-none object-cover rounded-[20px]"
              src={contactImg}
              alt="contactImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
