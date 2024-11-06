import React from "react";
import addCard from "../../assets/images/png/dashboard/card-8.png";

const AddCard = () => {
  return (
    <article className="rounded-lg  mx-auto sm:mx-0 w-full overflow-hidden">
      <img className="w-full h-full object-cover" src={addCard} alt="addCard" />
    </article>
  );
};

export default AddCard;
