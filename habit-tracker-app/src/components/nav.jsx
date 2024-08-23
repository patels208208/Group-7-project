import React, { useState, useEffect } from "react";
import "../assets/styles/navigation.css";
import logo from "../assets/images/logos/logoOrange.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoginPage(location.pathname === "/" ||  location.pathname === "/register" || location.pathname === "/about-us");
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isLoginPage) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-briny-500 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-briny-300 hover:bg-briny-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`block h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img className="h-8 w-auto" src={logo} alt="Habit Tracker" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-briny-700 hover:text-white active:bg-briny-300 ease-in-out duration-200"
                  >
                    Login/Register
                  </Link>
                  <Link
                    to="/about-us"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-briny-700 hover:text-white active:bg-briny-300 ease-in-out duration-200"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-briny-700 hover:text-white"
              aria-current="page"
            >
              Login/Register
            </Link>
            <Link
              to="/about-us"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-briny-700 hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-briny-500 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-briny-300 hover:bg-briny-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`block h-6 w-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img className="h-8 w-auto" src={logo} alt="Habit Tracker" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/home"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-briny-700 hover:text-white active:bg-briny-300 ease-in-out duration-200"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/habit-tracker"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-briny-700 hover:text-white active:bg-briny-300 ease-in-out duration-200"
                >
                  Habits
                </Link>
                <Link
                  to="/goal-setting"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-briny-700 hover:text-white active:bg-briny-300 ease-in-out duration-200"
                >
                  Goal Setting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/home"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-briny-700 hover:text-white"
            aria-current="page"
          >
            Home
          </Link>

          <Link
            to="/habit-tracker"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-briny-700 hover:text-white"
          >
            Habits
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


