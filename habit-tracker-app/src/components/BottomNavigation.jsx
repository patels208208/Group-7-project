import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/bottomnavigation.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const BottomNavigation = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-briny-500 shadow-lg ">
      <div className="flex justify-around items-center h-14">
        <Link to="/home" className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700">
        <i className="fa-solid fa-house" id="nav-icon"/>
          <span className="text-xs mt-0.5">Home</span>
        </Link>
        <Link to="/habit-tracker" className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700">
        <i className="fa-solid fa-chart-simple" id="nav-icon" />
          <span className="text-xs mt-0.5">Habits</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center rounded-md px-5 py-1 text-white font-medium hover:bg-briny-700">
        <i className="fa-solid fa-user" id="nav-icon" />
          <span className="text-xs mt-0.5">Profile</span>
        </Link>
      </div>
    </div>

// {/* <>
//   {/* component */}
//   <div className="">
//     <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> {/*// if shown only tablet/mobile*/}
//     <section
//       id="bottom-navigation"
//       className="block fixed inset-x-0 bottom-0 z-10 bg-briny-500 shadow"
//     >
//       <div id="tabs" className="flex justify-between">
//         <Link
//           to="/home"
//           className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
//         >
//           <i className="fa-solid fa-house" id="nav-icon"/>
//           <span className="tab tab-home block text-xs text-white">Home</span>
//         </Link>
//         <Link
//           to="habit-tracker"
//           className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
//         >
//           <i className="fa-solid fa-chart-simple" id="nav-icon" />
//           <span className="tab tab-kategori block text-xs text-white">Habits</span>
//         </Link>
//         <Link
//           to="/profile"
//           className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
//         >
//           <i className="fa-solid fa-user" id="nav-icon" />
//           <span className="tab tab-explore block text-xs text-white">Profile</span>
//         </Link>
//       </div>
//     </section>
//     </section>
//   </div>
// </> */}
  );
};

export default BottomNavigation;