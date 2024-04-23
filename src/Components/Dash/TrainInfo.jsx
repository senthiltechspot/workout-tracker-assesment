import React from "react";
import { train } from "../../assets";

const TrainInfo = () => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold">What Do You Want to Train</h3>

      <div
        className="flex items-center justify-between gap-5 mt-5 p-5 rounded-md"
        style={{ background: " #8CB1FF99" }}
      >
        <div className="flex flex-col">
          <h4 className="text-md font-bold">Full Body Workout</h4>
          <h3 className="text-md font-medium">Arms</h3>
          <h3 className="text-md font-medium">Chest</h3>
          <h3 className="text-md font-medium">Upper Body</h3>
        </div>
        <img src={train} alt="" />
      </div>
    </div>
  );
};

export default TrainInfo;
