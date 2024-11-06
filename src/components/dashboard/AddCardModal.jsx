import React from "react";
import ActionSelect from "./ActionSelect";
import SourceSelect from "./SourceSelect";

const AddCardModal = ({ card }) => {
  return (
    <form className="relative z-20 sm:backdrop-blur-3xl rounded-[10px] overflow-hidden max-w-[384px] sm:max-w-[95%] xl:max-w-[834px]  w-full px-3 sm:px-0">
      <article className="bg-[#1d1958] sm:bg-[#29256A9E] rounded-[10px] p-3 lg:p-[30px] text-white mx-auto sm:min-w-[95%] lg:min-w-[752px] xl:min-w-[788px] 2xl:min-w-[834px]">
        <h2 className="bg-[#060C1B33] rounded-[10px] w-full flex justify-center items-center text-center py-1 text-lg sm:text-[32px] focus-visible:outline-0 mb-3 md:mb-5 min-h-[51px]">
          {card.cardNumber}
        </h2>
        <p className="flex items-center gap-2 max-w-[80px] py-[3px] px-2 bg-[#060C1B33] rounded text-[10px] font-medium ">
          CSC: <span>{card.csc}</span>
        </p>
        <div className="flex items-center justify-between mt-3 mb-3 lg:mb-[18px]">
          <h5 className="text-sm sm:text-xl ">{card.cardHolder}</h5>
          <h5 className="text-sm sm:text-lg font-bold ">
            Exp: <span className="font-normal">{card.expDate}</span>{" "}
          </h5>
        </div>
        <div className="bg-[#060C1B33] px-3 lg:px-6 py-3.5 rounded-[10px]">
          <p className="flex bg-[#060C1B33] rounded px-4 py-1.5 text-sm sm:text-lg font-bold w-full sm:w-fit gap-2 mx-auto sm:mx-0">
            Balance: <span className="font-normal">$750.12</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-1 md:gap-3 xl:gap-6 my-2 md:my-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-3 xl:gap-6 w-full">
              <p className="text-sm sm:text-lg font-semibold">Action:</p>
              <ActionSelect />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-3 xl:gap-6 w-full">
              <p className="text-sm sm:text-lg font-semibold">Source:</p>
              <SourceSelect />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 text-sm sm:text-lg font-semibold">
            <label htmlFor="ammount">Amount:</label>
            <input
              type="number"
              id="ammount"
              className="bg-transparent py-2 px-3 border border-white rounded-lg focus-visible:outline-0 w-full sm:max-w-[230px] lg:max-w-[335px] xl:max-w-[263px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 sm:py-3 bg-blueberry text-white rounded-[10px] w-full text-lg sm:text-xl font-semibold mt-3 lg:mt-[30px]"
        >
          Submit
        </button>
      </article>
    </form>
  );
};

export default AddCardModal;
