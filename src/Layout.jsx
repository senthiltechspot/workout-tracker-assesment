import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SplashScreen from "./Components/SplashPage";
import NavBar from "./Components/Common/NavBar";

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check local storage for login status
    const isLoggedIn = localStorage.getItem("isSplash");
    if (isLoggedIn) {
      setShowSplash(false); // If logged in, hide the splash screen
    } else {
      setShowSplash(true);
    }

    setTimeout(() => {
      localStorage.setItem("isSplash", true);
    });
  }, []);

  const handleSkipSplash = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onSkip={handleSkipSplash} />}
      <Outlet />
      <NavBar />
      <div className="h-[120px] bg-white bg-opacity-8"></div>
    </>
  );
};

export default Layout;
