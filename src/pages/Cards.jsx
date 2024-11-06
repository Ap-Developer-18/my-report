import React from "react";
import UserLayout from "../components/common/UserLayout";
import AddCard from "../components/dashboard/AddCard";
import Card from "../components/dashboard/Card";
import { cardData } from "../components/dashboard/Helper";
import ProfileDetails from "../components/dashboard/ProfileDetails";

// DEFINE AN ARRAY OF BACKGROUND COLORS
const bgColors = [
  "#FF8475", // COLOR FOR INDEX 0
  "#7988FF", // COLOR FOR INDEX 1
  "#15AF93", // COLOR FOR INDEX 2
  "#3D3F65", // COLOR FOR INDEX 3
  "#29256A", // COLOR FOR INDEX 4
  "#2C8A97", // COLOR FOR INDEX 5
  "#3AB90D", // COLOR FOR INDEX 6
];

const Cards = () => {
  return (
    <UserLayout title="Cards">
      <ProfileDetails />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 min-[1400px]:grid-cols-4 p-3 sm:p-4 custom-2xl:px-5 custom-2xl:py-[30px] shadow-custom rounded-[10px] gap-3 sm:gap-4 custom-2xl:gap-[30px] max-w-[360px] sm:max-w-none mx-auto sm:mx-0">
        {/* LOOP THROUGH CARD DATA AND RENDER EACH CARD */}
        {cardData.map((card, index) => (
          <Card
            card={card}
            bgColor={bgColors[index % bgColors.length]} // PASS THE BACKGROUND COLOR BASED ON INDEX
            key={card.id}
          />
        ))}
        {/* RENDER THE ADD CARD COMPONENT */}
        <AddCard />
      </div>
    </UserLayout>
  );
};

export default Cards;