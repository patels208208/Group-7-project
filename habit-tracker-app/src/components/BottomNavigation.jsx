import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/styles/bottomnavigation.css';

const BottomNavigation = () => {
    return (
<>
  {/* component */}
  <div className="w-full h-screen">
    {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile*/}
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-briny-500 shadow"
    >
      <div id="tabs" className="flex justify-between">
        <a
          href="#"
          className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <i className="fa-solid fa-house" id="nav-icon"/>
          <span className="tab tab-home block text-xs text-white">Home</span>
        </a>
        <a
          href="##"
          className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <i className="fa-solid fa-chart-simple" id="nav-icon" />
          <span className="tab tab-kategori block text-xs text-white">Habits</span>
        </a>
        <a
          href="###"
          className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
        >
          <i className="fa-solid fa-user" id="nav-icon" />
          <span className="tab tab-explore block text-xs text-white">Profile</span>
        </a>
      </div>
    </section>
  </div>
</>
  );
};

export default BottomNavigation;