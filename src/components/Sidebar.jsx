import React from "react";
import { Link } from "react-router-dom";
import { sideHover } from "../constants/hover";

const Sidebar = () => {
  return (
    <aside className="mx-5 px-4 py-2 w-[170px] h-[600px] flex flex-col justify-around">
      <Link
        className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${sideHover}`}
      >
        <i className="bx bxs-home text-xl"></i>
        <h4 className="font-medium">Home</h4>
      </Link>
      <Link
        className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${sideHover}`}
      >
        <i className="bx bxs-user text-xl"></i>
        <h4 className="font-medium">Account</h4>
      </Link>
      <Link
        className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${sideHover}`}
      >
        <i className="bx bxs-wallet text-xl"></i>
        <h4 className="font-medium">Payroll</h4>
      </Link>
      <Link
        className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${sideHover}`}
      >
        <i className="bx bxs-cog text-xl"></i>
        <h4 className="font-medium">Settings</h4>
      </Link>
      <Link
        className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${sideHover}`}
      >
        <i className="bx bxs-book-open text-xl"></i>
        <h4 className="font-medium">E-Learning</h4>
      </Link>
      <Link
        className={`flex items-center space-x-3 py-2 px-3 rounded-lg ${sideHover}`}
      >
        <i className="bx bx-log-out text-xl"></i>
        <h4 className="font-medium">Logout</h4>
      </Link>
    </aside>
  );
};

export default Sidebar;
