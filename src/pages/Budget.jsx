import React from "react";
import UserLayout from "../components/common/UserLayout";
import ProfileDetails from "../components/dashboard/ProfileDetails";
import { cardData } from "../components/dashboard/Helper";

const Budget = () => {

  const bgColors = [
    "#FF8475", // COLOR FOR INDEX 0
    "#7988FF", // COLOR FOR INDEX 1
    "#15AF93", // COLOR FOR INDEX 2
    "#3D3F65", // COLOR FOR INDEX 3
    "#29256A", // COLOR FOR INDEX 4
    "#2C8A97", // COLOR FOR INDEX 5
    "#3AB90D", // COLOR FOR INDEX 6
  ];

  return (
    <UserLayout title="budget">
      <ProfileDetails />
      <div className="p-6 shadow-custom rounded-[10px] mt-8">
        hello
      </div>
    </UserLayout>
  );
};

export default Budget;