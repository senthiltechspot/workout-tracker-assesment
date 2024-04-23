import React, { useState } from "react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-8">
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <Register setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default Auth;
