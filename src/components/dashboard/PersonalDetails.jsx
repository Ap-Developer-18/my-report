import React from "react";
import { IdentificationIcon, IncomeIcon } from "./Icons";
import Heading from "./Heading";
import CommonInput from "./CommonInput";
import FormButton from "./FormButton";

const PersonalDetails = () => {
  return (
    <form>
      <Heading icon={<IdentificationIcon />} title={"Identification"} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 custom-2xl:gap-[50px] sm:mb-4">
        <CommonInput type="text" label="Type" name="Type" />
        <CommonInput type="number" label="Number" name="Number" />
        <CommonInput type="number" label="DOB" name="Dob" />
      </div>
      <Heading icon={<IncomeIcon />} title={"Income"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 custom-2xl:gap-x-[50px] gap-y-[22px]">
        <CommonInput type="number" label="Amount" name="Amount" />
        <CommonInput type="number" label="Frequency" name="Frequency" />
        <CommonInput type="text" label="Occupation" name="Occupation" />
        <CommonInput type="text" label="Source" name="Source" />
      </div>
      <FormButton />
    </form>
  );
};

export default PersonalDetails;
