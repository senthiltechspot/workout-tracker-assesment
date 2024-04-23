import React from "react";
import { weight, yoga } from "../../assets";

const Upcomming = () => {
  const workoutList = [
    {
      img: weight,
      title: "Full Body Workout",
      time: "Today 3pm",
    },
    {
      img: yoga,
      title: "Upper Body Workout",
      time: "4 Feb, 3:30 pm",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-1 mx-3">
        <h3 className="text-xl font-bold">Upcomming Workout</h3>
        <p className="text-sm text-[#7F7F7F] cursor-pointer">See more</p>
      </div>
      {workoutList.map((item, index) => (
        <div key={index} className="flex items-center justify-between gap-3 py-5 px-3 shadow-lg rounded-lg mb-3">
          <div className="flex items-center gap-3">
            <img src={item.img} alt="workout" />
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-sm text-[#7F7F7F]">{item.time}</p>
            </div>
          </div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Upcomming;
