import React from "react";

const Input = ({
  name,
  placeholder,
  label,
  type = "text",
  value,
  onChange,
  inputStyle,
}) => {
  return (
    <div className={`relative w-full ${inputStyle}`}>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="peer w-full border border-black/80 rounded bg-transparent px-3 py-2 lg:py-3 custom-2xl:py-5 placeholder-transparent focus:outline-none focus:border-black text-black"
        placeholder={placeholder}
        required
      />
      <label
        htmlFor={name}
        className="absolute left-3 -top-2 text-black text-xs custom-2xl:text-sm custom-2xl:text-[18px] bg-off-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-sm custom-2xl:peer-placeholder-shown:text-base font-medium peer-placeholder-shown:text-black peer-focus:-top-2 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
