import React from "react";
import TopNav from "../../Common/TopNav";
import Calendar from "./Calendar";

const WorkoutSchedule = () => {
    
  return (
    <div className="flex flex-col gap-7 min-h-[100vh] w-[100vw] px-5 pt-5">
      <TopNav title={"Workout Schedule"} />
      <Calendar />
    </div>
  );
};

export default WorkoutSchedule;
