import React, { useState } from "react";
import { useAuth } from "../../ContextAPI/AuthProvider";
import { useNavigate } from "react-router-dom";
import ExtraInfo from "./ExtraInfo";

const Register = ({ setShowLogin }) => {
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [ShowExtraInfo, setShowExtraInfo] = useState(false);
  // State variables to store form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    agreement: false,
  });

  // Function to update form data state
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access form data here
    console.log("Form Data:", formData);
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
        Create an account
      </h2>
      <form
        className="flex flex-col items-center justify-between h-full w-full mt-12"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="w-full px-7 py-3 bg-[#F1F1F1] rounded-lg mb-5"
            type="text"
            id="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
          />
          <input
            className="w-full px-7 py-3 bg-[#F1F1F1] rounded-lg mb-5"
            type="text"
            id="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
          />
          <input
            className="w-full px-7 py-3 bg-[#F1F1F1] rounded-lg mb-5"
            type="text"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full px-7 py-3 bg-[#F1F1F1] rounded-lg mb-5"
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex items-center justify-center mt-3 ml-1">
            <input
              type="checkbox"
              id="agreement"
              className="w-5 h-5"
              checked={formData.agreement}
              onChange={handleChange}
            />
            <p className="text-sm ml-3">
              By proceeding, I agree to all
              <span className="text-[#7B91FF] mx-1">T&C</span>
              and <span className="text-[#7B91FF] mx-1">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 w-full">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] w-full py-5 rounded-lg text-white font-bold"
          >
            Create an Account
          </button>
          <div className="flex items-center mt-3 w-full gap-3">
            <hr className="w-[45%]" />
            <p className="text-md font-semibold">Or</p>
            <hr className="w-[45%]" />
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
            Already have an account?{" "}
            <span className="text-[#7B91FF]" onClick={() => setShowLogin(true)}>
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
