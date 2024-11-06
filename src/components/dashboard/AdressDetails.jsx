import React from "react";
import Heading from "./Heading";
import { HomeIcon, ShippingIcon } from "./Icons";
import CommonInput from "./CommonInput";
import FormButton from "./FormButton";

const AdressDetails = () => {
  return (
    <form>
      <Heading title={"Home"} icon={<HomeIcon />} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 custom-2xl:gap-x-[50px] gap-y-[22px] sm:mb-4">
        <CommonInput type="text" label="Street" name="Street" />
        <CommonInput type="text" label="Unit" name="Unit" />
        <CommonInput type="text" label="City" name="City" />
        <CommonInput type="text" label="State" name="State" />
        <CommonInput type="number" label="Zip" name="Zip" />
      </div>
      <Heading title={"Shipping"} icon={<ShippingIcon />} />
      <div className="flex items-center mb-10 gap-3">
        <input
          type="checkbox"
          id="sameAddress"
          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="sameAddress"
          className="text-sm sm:text-base font-medium text-black"
        >
          Same as Home Address
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 custom-2xl:gap-x-[50px] gap-y-[22px] sm:mb-4">
        <CommonInput type="text" label="Street" name="Street2" />
        <CommonInput type="text" label="Unit" name="Unit2" />
        <CommonInput type="text" label="City" name="City2" />
        <CommonInput type="text" label="State" name="State2" />
        <CommonInput type="number" label="Zip" name="Zip2" />
      </div>
      <FormButton />
    </form>
  );
};

export default AdressDetails;
