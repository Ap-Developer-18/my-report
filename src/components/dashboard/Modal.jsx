import React from "react";
import AddCardModal from "./AddCardModal";
import { Cross } from "./../common/Icons";

const Modal = ({ setShowPopup, card }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center">
      <span
        onClick={() => setShowPopup(false)}
        className="w-10 h-10 z-[100] right-5 top-5 fixed cursor-pointer justify-center items-center bg-black/70 hover:bg-black rounded-full flex dark-icon duration-300"
      >
        <Cross />
      </span>
      <div
        onClick={() => setShowPopup(false)}
        className="fixed top-0 left-0 w-full h-full z-10 flex bg-white/60"
      ></div>
      <AddCardModal card={card} />
    </div>
  );
};

export default Modal;
