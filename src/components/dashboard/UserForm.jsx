import React, { useState } from "react";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import AdressDetails from "./AdressDetails";
import UserTabs from "./UserTabs";

const tabs = [
  { label: "Contact", component: <ContactDetails /> },
  { label: "Personal", component: <PersonalDetails /> },
  { label: "Address", component: <AdressDetails /> },
];

const UserForm = () => {
  const [activeTab, setActiveTab] = useState("Contact");

  return (
    <div className="mt-10 p-3 sm:p-5 md:p-6 custom-2xl:p-8 shadow-custom rounded-[10px]">
      <div className="flex justify-start sm:justify-center gap-1 mb-4 mx-auto p-1.5 bg-lightGray w-fit rounded-[10px] max-w-full overflow-x-auto">
        {tabs.map((tab) => (
          <UserTabs
            key={tab.label}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tab={tab}
          />
        ))}
      </div>

      <div className="pt-4 bg-gray-100 rounded-lg sm:mt-[22px]">
        {tabs.find((tab) => tab.label === activeTab)?.component}
      </div>
    </div>
  );
};

export default UserForm;
