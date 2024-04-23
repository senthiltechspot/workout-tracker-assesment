import React, { useState } from "react";
import { useAuth } from "../../ContextAPI/AuthProvider";
import { useNavigate } from "react-router-dom";
import ExtraInfo from "./ExtraInfo";

const Login = ({ setShowLogin }) => {
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [ShowExtraInfo, setShowExtraInfo] = useState(false);
  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to update email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to update password state
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access email and password values here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can perform further actions like sending data to backend or validation
    setLoggedIn(true);
    setShowExtraInfo(true);
  };

  const handlecloseInfo = () => {
    setShowExtraInfo(false);
    navigate("/");
  }

  if (ShowExtraInfo) {
    return <ExtraInfo handlecloseInfo={handlecloseInfo} />;
  }

  return (
    <div className="flex z-50 flex-col items-center w-[100vw] h-[100vh] px-5 pt-7">
      <h2 className="text-3xl font-bold flex items-start w-full">
        Welcome Back
      </h2>
      <form
        className="flex flex-col items-center justify-between h-full w-full mt-12"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="w-full px-7 py-3 bg-[#F1F1F1] rounded-lg mb-7"
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            className="w-full px-7 py-3 bg-[#F1F1F1] rounded-lg"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p className="text-sm underline flex w-full items-start mt-3 ml-3">
            Forgot Your Password?
          </p>
        </div>
        <div className="flex flex-col items-center mb-10 w-full">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] w-full py-5 rounded-lg text-white font-bold"
          >
            Sign In
          </button>
          <div className="flex items-center mt-3 w-full gap-3">
            <hr className="w-[49%]" />
            <p className="text-md font-semibold">Or</p>
            <hr className="w-[49%]" />
          </div>
          <div className="flex gap-3 mt-3">
            <button className="w-10 h-10 border-2 border-black rounded-md">
              <i className="bi bi-google"></i>
            </button>
            <button className="w-10 h-10 border-2 border-black rounded-md">
              <i className="bi bi-facebook"></i>
            </button>
          </div>
          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <span
              className="text-[#7B91FF]"
              onClick={() => setShowLogin(false)}
            >
              Create an account
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
