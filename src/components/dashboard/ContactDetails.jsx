import React from "react";
import CommonInput from "./CommonInput";
import FormButton from "./FormButton";

const ContactDetails = () => {
  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 custom-2xl:gap-x-[51px] custom-2xl:gap-y-6">
        <CommonInput type="text" label="User Name" name="UserName" />
        <CommonInput type="text" label="First Name" name="FirstName" />
        <CommonInput type="text" label="Last Name" name="LastName" />
        <CommonInput type="Email" label="Email" name="Email" />
      </div>
      <div className="mt-2 sm:mt-5 md:mt-6">
        <CommonInput type="" label="Phone" />
      </div>
      <FormButton />
    </form>
  );
};

export default ContactDetails;
