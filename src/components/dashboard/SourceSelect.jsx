import React, { useState } from "react";
import { DropdownIcon } from "./Icons";

const SourceSelect = () => {
  // STATE TO MANAGE DROPDOWN VISIBILITY
  const [valueSelect, setValueSelect] = useState(false);
  // STATE TO STORE THE SELECTED BANK VALUE
  const [valueSelect2, setValueSelect2] = useState("");

  // DATA ARRAY CONTAINING THE OPTIONS FOR THE DROPDOWN
  const Data = [
    {
      selectValue: "Abc Bank",
    },
    {
      selectValue: "Def Bank",
    },
  ];

  return (
    <>
      {/* OVERLAY TO CLOSE THE DROPDOWN WHEN CLICKING OUTSIDE */}
      {valueSelect && (
        <div
          onClick={() => setValueSelect(!valueSelect)}
          className="fixed h-full w-full top-0 left-0 z-[9]"
        ></div>
      )}
      <div
        className={`relative text-xs bg-transparent py-2.5 lg:py-4 px-3 2xl:pe-5 border border-white rounded-lg md:min-w-[200px] cursor-pointer w-full ${
          valueSelect ? "z-10" : ""
        }`}
        onClick={() => setValueSelect(!valueSelect)}
      >
        <div className="flex items-center gap-3 sm:gap-6 justify-between z-10 whitespace-nowrap">
          {/* DISPLAY SELECTED VALUE OR DEFAULT TEXT */}
          {`${valueSelect2 ? `${valueSelect2}` : "Bank Account"}`}
          <span className={`duration-300 ${valueSelect ? "rotate-180" : ""}`}>
            <DropdownIcon />
          </span>
        </div>

        {/* DROPDOWN MENU */}
        {valueSelect && (
          <div className="absolute bottom-0 bg-white rounded-xl p-4 flex flex-col gap-4 text-black w-full left-0 translate-y-[100%]">
            {Data.map((value, index) => (
              <p
                className="mb-0 cursor-pointer"
                onClick={() => {
                  setValueSelect2(value.selectValue);
                  setValueSelect(false); // CLOSE DROPDOWN AFTER SELECTION
                }}
                key={index}
              >
                {value.selectValue}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SourceSelect;
