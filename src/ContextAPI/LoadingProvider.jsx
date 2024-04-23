import React, { createContext, useState } from "react";
import LoadingScreen from "../Components/Common/LoadingScreen";

export const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <LoadingScreen />
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

export const useLoading = () => React.useContext(LoadingContext)