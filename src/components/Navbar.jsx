import React from "react";
import "boxicons";
import bell from "../assets/bell.svg";
import message from "../assets/message.svg";
import tj from "../assets/tj.jfif";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <nav className="m-5 p-3 flex justify-between items-center">
      <div className="flex justify-evely items-center">
        <label class="relative block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={search} alt="search" />
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>

      <div className="flex px-4 py-2 space-x-5">
        <img
          src={bell}
          alt="bell"
          width="35px"
          height="35px"
          className="cursor-pointer"
        />
        <img
          src={message}
          alt="message"
          width="35px"
          height="35px"
          className="cursor-pointer"
        />
        <img
          src={tj}
          alt="tj"
          width="35px"
          height="35px"
          className="rounded-[50%] cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
