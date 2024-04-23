import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-8">
      {/* Spinner animation */}
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-green-700">
        <div className="animate-spin rounded-full h-32 w-20 border-t-4 border-b-2 border-green-700"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;