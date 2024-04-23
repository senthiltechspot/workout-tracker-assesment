import React from "react";

const TopNav = ({ title, onBack }) => {
  return (
    <div className="fixed top-0 bg-white py-3 flex items-center justify-between w-full">
      <i
        onClick={onBack}
        className="bi bi-chevron-left text-3xl font-bold bg-[#F1F1F1] px-1 rounded-md"
      ></i>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p></p>
    </div>
  );
};

export default TopNav;
