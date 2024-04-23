import React from "react";

const ExtraInfo = ({ handlecloseInfo }) => {
  const checkList = [
    {
      name: "Weight Loss",
      checked: false,
    },
    {
      name: "Muscle Gain",
      checked: false,
    },
    {
      name: "Flexibility and Mobility",
      checked: false,
    },
    {
      name: "General Fitness",
      checked: false,
    },
    {
      name: "Event - specific training",
      checked: false,
    },
    {
      name: "Mindfulness and Mental Health",
      checked: false,
    },
  ];
  return (
    <div className="fixed inset-0 z-50 flex h-[100vh] w-[100vw] bg-white bg-opacity-8 px-7">
      <div className="flex flex-col justify-between items-center w-full mt-10">
        <div className="w-full">
          <h3 className="text-xl text-center font-bold mb-10">
            What are your goals?
          </h3>
          {checkList.map((item) => (
            <div
              key={item.name}
              className="flex items-center py-3 px-7 rounded-lg mb-5 bg-[#F1F1F1] justify-between"
            >
              <p className="mr-2">{item.name}</p>

              <input
                type="checkbox"
                className="mr-2 w-5 h-5"
                onChange={() => {}}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlecloseInfo}
          className="bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] w-full py-5 rounded-lg text-white font-bold mb-16"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ExtraInfo;
