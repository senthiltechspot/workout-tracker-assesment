import React from "react";
import TopNav from "../Components/Common/TopNav";
import Graph from "../Components/Dash/Graph";
import InfoBar from "../Components/Dash/InfoBar";
import Upcomming from "../Components/Dash/Upcomming";
import TrainInfo from "../Components/Dash/TrainInfo";
import WorkoutSchedule from "../Components/Dash/WorkoutSchedule";

const Dash = () => {
  const [openSchedule, setOpenSchedule] = React.useState(false);

  const handleOpen = () => {
    setOpenSchedule(true);
  };

  const handleClose = () => {
    setOpenSchedule(false);
  };

  if (openSchedule) {
    return <WorkoutSchedule handleClose={handleClose} />;
  }
  return (
    <div className="flex flex-col gap-5 min-h-[100vh] w-[100vw] px-5 pt-5">
      <TopNav title={"Workout Tracker"} />
      <Graph handleOpen={handleOpen} />
      <InfoBar />
      <button onClick={handleOpen} className="bg-[#8CB1FF] text-white font-bold py-2 px-4 rounded-full">Schedule Workout</button>
      <Upcomming />
      <TrainInfo />
    </div>
  );
};

export default Dash;
