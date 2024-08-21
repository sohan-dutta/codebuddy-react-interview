import React, { useState } from "react";

const Tabs = ({ tabs, onTabChange, currentTab }) => {
  const handleTabClick = (key) => {
    onTabChange(key);
  };

  return (
    <ul className="flex w-full max-w-md rounded-t-lg bg-white pt-2">
      {tabs.map((tab) => (
        <li key={tab.key} className={`${currentTab === tab.key ? "border-blue-500" : ""}`}>
          <button
            onClick={() => handleTabClick(tab.key)}
            className={`inline-block px-4 py-2 ${
              currentTab === tab.key
                ? "bg-white font-semibold text-blue-500"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;