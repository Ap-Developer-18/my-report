import React, { useState } from "react";

const FundsTransferForm = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Form submitted. Amount:", amount);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <p className="text-gray-700">**** ****-1235</p>
        <p className="text-gray-700">John D. Doe</p>
        <p className="text-gray-700">Exp: 06/22</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">Balance: $750.12</p>
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-indigo-300"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FundsTransferForm;
