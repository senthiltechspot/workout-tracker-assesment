import React from "react";

const InfoBar = () => {
 
  return (
    <div className="bg-gradient-to-r from-[#c8cee6] to-[#ffffff] w-full px-3 py-5 rounded-lg flex gap-3">
      <i className="bi bi-exclamation-triangle text-3xl text-[#7E96FF] font-bold px-1 rounded-md"></i>
      <p className="text-sm font-semibold">
        You've burned fewer calories than yesterday. Time to get moving!{" "}
      </p>
    </div>
  );
};

export default InfoBar;
