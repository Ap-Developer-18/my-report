import React, { useState } from "react";
import { DropdownIcon } from "./Icons";

// ACTIONSELECT COMPONENT: CUSTOM DROPDOWN SELECTOR
const ActionSelect = () => {
  // STATE TO TOGGLE DROPDOWN VISIBILITY
  const [actionSelect, setActionSelect] = useState(false);
  // STATE TO STORE SELECTED VALUE
  const [actionValue, setActionValue] = useState("");

  // DROPDOWN OPTIONS DATA
  const Data = [
    {
      selectValue: "Add Funds", // OPTION 1
    },
    {
      selectValue: "Funds Add", // OPTION 2
    },
  ];

  return (
    <>
      {/* OVERLAY TO CLOSE DROPDOWN WHEN CLICKED OUTSIDE */}
      {actionSelect ? (
        <div
          onClick={() => setActionSelect(!actionSelect)}
          className="fixed h-full w-full top-0 left-0 z-[9]"
        ></div>
      ) : (
        ""
      )}
      {/* DROPDOWN CONTAINER */}
      <div
        className={`relative text-xs bg-transparent py-2.5 lg:py-4 px-3 2xl:pe-5 border border-white rounded-lg md:min-w-[200px] cursor-pointer w-full  ${
          actionSelect ? "z-10" : ""
        }`}
        onClick={() => setActionSelect(!actionSelect)} // TOGGLE DROPDOWN
      >
        {/* DROPDOWN HEADER */}
        <div className="flex items-center gap-3 sm:gap-6 justify-between z-10 whitespace-nowrap">
          {/* DISPLAY SELECTED VALUE OR DEFAULT TEXT */}
          {`${actionValue ? `${actionValue}` : "Add Funds From Bank Account"}`}
          {/* DROPDOWN ICON */}
          <span className={`duration-300 ${actionSelect ? "rotate-180" : ""}`}>
            <DropdownIcon />
          </span>
        </div>

        {/* DROPDOWN OPTIONS */}
        {actionSelect ? (
          <div className="absolute bottom-0 bg-white rounded-xl p-4 flex flex-col gap-4 text-black w-full left-0 translate-y-[100%]">
            {Data.map((value, index) => {
              return (
                <p
                  className="mb-0 cursor-pointer"
                  onClick={() => {
                    setActionValue(value.selectValue); // SET SELECTED VALUE
                    setActionSelect(false); // CLOSE DROPDOWN
                  }}
                  key={index}
                >
                  {value.selectValue} {/* DISPLAY OPTION VALUE */}
                </p>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ActionSelect; // EXPORTING THE ACTIONSELECT COMPONENT
