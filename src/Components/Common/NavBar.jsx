import React from "react";
import { Link } from "react-router-dom";
import { useActivePage } from "../../ContextAPI/ActivePageProvider";
import { cameraicon, graphicon, homeicon, profileicon } from "../../assets";

const NavBar = () => {
  const { activepage, setActivePage } = useActivePage();
  const navLists = [
    {
      id: 0,
      name: "Home",
      link: "/",
      icon: "bi bi-house",
    },
    {
      id: 1,

      name: "dash",
      link: "/dash",
      icon: "bi bi-graph-up",
    },
    {
      id: 2,
      name: "Camera", // Changed to "Camera" to distinguish from "Profile"
      link: "/dash",
      icon: "bi bi-camera",
    },
    {
      id: 3,
      name: "Profile",
      link: "/profile",
      icon: "bi bi-person",
    },
  ];
  return (
    <div className="fixed z-30 w-full max-w-lg -translate-x-1/2 bg-white pt-4 pb-7 border-gray-200 bottom-0  left-1/2 ">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {navLists.slice(0, 2).map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() => setActivePage(item.id)}
            className="flex items-center justify-center"
          >
            <i
              className={`${item.icon} text-3xl ${
                activepage === item.id ? "text-blue-500" : "text-gray-500"
              }`}
            ></i>
          </Link>
        ))}
        <div className="flex items-center justify-center w-full -mt-14">
          <button
            type="button"
            className="bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] px-4 py-3 rounded-full"
          >
            <i className="bi bi-search text-3xl text-white"></i>
          </button>
        </div>
        {navLists.slice(2, 5).map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() => setActivePage(item.id)}
            className="flex items-center justify-center"
          >
            <i
              className={`${item.icon} text-3xl ${
                activepage === item.id ? "text-blue-500" : "text-gray-500"
              }`}
            ></i>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
