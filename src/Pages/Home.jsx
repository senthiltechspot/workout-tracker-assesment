import React, { useEffect } from "react";
import { useAuth } from "../ContextAPI/AuthProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  });

  return <div>Home</div>;
};

export default Home;
