import React from "react";
import LoadingProvider from "./LoadingProvider";
import AuthProvider from "./AuthProvider";
import ActivePageProvider from "./ActivePageProvider";

const IndexProvider = ({ children }) => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <ActivePageProvider>{children}</ActivePageProvider>
      </AuthProvider>
    </LoadingProvider>
  );
};

export default IndexProvider;
