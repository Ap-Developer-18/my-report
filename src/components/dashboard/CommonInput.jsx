import React from "react";

const CommonInput = ({
  label,
  type,
  value,
  onChange,
  name,
  className = "",
  labelClassName = "",
  ...rest
}) => {
  return (
    <div className="mb-4 relative">
      {label && (
        <label
          htmlFor={name}
          className={`absolute start-3 md:start-[22px] -top-4 text-base leading-5 md:text-lg sm:leading-7 font-medium text-black px-2 py-1 bg-white ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className={`px-2 w-full h-12 md:h-16 border border-black rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
        {...rest}
      />
    </div>
  );
};

export default CommonInput;
