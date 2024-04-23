import React, { useState } from "react";
import { splashslide1, splashslide2 } from "../../assets";
import Screen from "./Screen"; // Import the Screen component

const SplashScreen = ({ onSkip }) => {
  const screenList = [
    {
      img: splashslide1,
      title: "Track Your Goal",
      desc: "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
    },
    {
      img: splashslide2,
      title: "Get Burn",
      desc: "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
    },
  ];
  const [screenIndex, setScreenIndex] = useState(0);

  const handleNext = () => {
    if (screenIndex < screenList.length - 1) {
      setScreenIndex(screenIndex + 1);
    } else {
      onSkip();
    }
  };
  // Check if screenList[screenIndex] exists before rendering Screen
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-8">
      {screenList[screenIndex] && (
        <Screen
          data={screenList[screenIndex]}
          onNext={handleNext}
          onSkip={onSkip}
        />
      )}
    </div>
  );
};

export default SplashScreen;
