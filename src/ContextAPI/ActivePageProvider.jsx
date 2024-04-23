
import React, { createContext, useState } from "react";

export const ActivePageContext = createContext();
const ActivePageProvider = ({ children }) => {
  const [activepage, setActivePage] = useState(0);

  return (
    <ActivePageContext.Provider value={{ activepage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export default ActivePageProvider;

export const useActivePage = () => React.useContext(ActivePageContext)