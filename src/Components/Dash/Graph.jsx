import React from "react";
import { chart } from "../../assets";

const Graph = ({ handleOpen }) => {
  return (
    <div className="w-full mt-5">
      <img src={chart} onClick={handleOpen} />
    </div>
  );
};

export default Graph;
