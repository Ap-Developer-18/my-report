import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";

const Form = ({ fields }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms");
      return;
    }
    alert(JSON.stringify("Form has been Submitted Successfully"));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agree: false,
    });
  };

  return (
    <form className="custom-2xl:pt-4" onSubmit={handleSubmit}>
      <div className="flex gap-3 sm:gap-6 xl:gap-12">
        <Input
          {...fields[0]}
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          {...fields[1]}
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <Input
        inputStyle="my-5 lg:my-7 custom-2xl:my-10"
        {...fields[2]}
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        {...fields[3]}
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="mb-4 xl:mb-6 custom-2xl:mb-10 mt-4 custom-2xl:mt-[30px]">
        <label className="flex items-center">
          <input
            name="agree"
            type="checkbox"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium">
            I agree to the{" "}
            <Link target="_blank" className="text-blueberry underline" to="/">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link target="_blank" className="text-blueberry underline" to="/">
              Privacy Notice
            </Link>
          </p>
        </label>
      </div>
      <PrimaryButton
        text="Sign me up !"
        type="submit"
        className="w-full custom-2xl:h-[64px]"
      />
    </form>
  );
};

export default Form;
