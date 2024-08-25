import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/register" ||
    location.pathname === "/about-us"
  ) {
    return null;
  }

  return (
    <nav className="block md:hidden fixed bottom-0 left-0 right-0 bg-briny-500 shadow-lg ">
      <div className="flex justify-around items-center h-14">
        <Link
          to="/home"
          className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200"
        >
          <i className="fa-solid fa-house" id="nav-icon" />
          <span className="text-xs mt-0.5">Home</span>
        </Link>
        <Link
          to="/habit-tracker"
          className="flex flex-col Sitems-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200"
        >
          <i className="fa-solid fa-chart-simple" id="nav-icon" />
          <span className="text-xs mt-0.5">Habits</span>
        </Link>
        <Link
          to="/goal-setting"
          className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200"
        >
          <i className="fa-solid fa-bullseye" id="nav-icon" />
          <span className="text-xs mt-0.5">Set Goals</span>
        </Link>
        <Link
          to="/habit-views"
          className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200"
        >
          <i className="fa-solid fa-calendar-days" id="nav-icon" />
          <span className="text-xs mt-0.5">Calender</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;
