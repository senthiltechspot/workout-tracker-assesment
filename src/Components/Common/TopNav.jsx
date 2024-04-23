import React from "react";

const TopNav = ({ title }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <i className="bi bi-chevron-left text-3xl font-bold bg-[#F1F1F1] px-1 rounded-md"></i>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p></p>
    </div>
  );
};

export default TopNav;
