import React, { useState } from "react";
import ccBg from "../../assets/images/png/dashboard/cc-bg.png";
import Modal from "../dashboard/Modal";

const Card = ({ card, bgColor }) => {
  const [showPopup, setShowPopup] = useState(false);

  // FUNCTION TO TOGGLE THE MODAL VISIBILITY
  const toggleModal = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <article
        className="p-5 rounded-lg text-white w-full relative flex justify-between flex-col h-full z-[1] cursor-pointer"
        style={{ backgroundColor: bgColor }} // SET THE BACKGROUND COLOR
        onClick={toggleModal} // TOGGLE MODAL ON CLICK
      >
        <img
          className="absolute bottom-0 right-0 z-[-1]"
          src={ccBg}
          alt="card-icon"
        />
        <div className="flex justify-between items-center mb-4 custom-2xl:mb-7">
          <p className="text-lg">{card.bankName}</p>
          <p className="text-lg">{card.status}</p>
        </div>
        <div className="text-xl w-fit max-w-[200px] line-clamp-1">
          <p>{card.cardNumber}</p>
          <p className="flex justify-between w-full">
            <span className="text-sm">Csc: {card.csc}</span>
            <span className="text-sm">Exp: {card.expDate}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 custom-2xl:mt-7">
          <p className="text-lg">{card.cardHolder}</p>
          <img
            className="w-full max-w-[64px]"
            src={card.cardImg}
            alt="visaImg"
          />
        </div>
      </article>

      {/* RENDER THE MODAL IF SHOWPOPUP IS TRUE */}
      {showPopup && (
        <Modal
          setShowPopup={setShowPopup} // PASS THE STATE SETTER TO CONTROL THE POPUP VISIBILITY
          card={card} // PASS THE CARD DATA TO THE MODAL
        />
      )}
    </>
  );
};

export default Card;
