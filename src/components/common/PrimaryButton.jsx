import React from "react";

const PrimaryButton = ({ text, url, className, type }) => {
  return (
    <>
      {url ? (
        <a
          href={url}
          className={`common_link py-2 lg:py-3 px-4 lg:px-8 border-blueberry border rounded-lg xl:rounded-2xl text-white hover:text-blueberry bg-blueberry hover:bg-white ${className}`}
        >
          {text}
        </a>
      ) : (
        <button
          type={type}
          className={`common_link py-2 lg:py-3 px-4 lg:px-8 border-blueberry border rounded-lg xl:rounded-2xl text-white hover:text-blueberry bg-blueberry hover:bg-white ${className}`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
