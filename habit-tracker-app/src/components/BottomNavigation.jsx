import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/bottomnavigation.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const BottomNavigation = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-briny-500 shadow-lg ">
      <div className="flex justify-around items-center h-14">
        <Link to="/home" className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200">
        <i className="fa-solid fa-house" id="nav-icon"/>
          <span className="text-xs mt-0.5">Home</span>
        </Link>
        <Link to="/habit-tracker" className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200">
        <i className="fa-solid fa-chart-simple" id="nav-icon" />
          <span className="text-xs mt-0.5">Habits</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700 active:bg-briny-300 ease-in-out duration-200">
        <i className="fa-solid fa-user" id="nav-icon" />
          <span className="text-xs mt-0.5">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;