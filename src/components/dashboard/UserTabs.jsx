import React from "react";

const UserTabs = ({ tab, setActiveTab, activeTab }) => {
  return (
    <button
      onClick={() => setActiveTab(tab.label)}
      className={`px-6 py-2 rounded-lg font-normal focus:outline-none duration-300 text-lg ${
        activeTab === tab.label ? "bg-secondary text-white" : "text-gray"
      }`}
    >
      {tab.label}
    </button>
  );
};

export default UserTabs;
