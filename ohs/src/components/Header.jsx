import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ohs_logo.jpg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#800000] p-3">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Left side: Logo + School Name + Motto wrapped in a link */}
        <Link to="/" className="flex flex-col items-start">
          <div className="flex items-center">
            <img
              className="h-10 w-auto object-contain rounded"
              src={logo}
              alt="OHS Logo"
            />
            <h1 className="ml-2 text-white text-lg sm:text-4xl font-bold">
              OLYMPIC HIGH SCHOOL
            </h1>
          </div>
          <p className="mt-1 italic text-white text-sm sm:text-base">
            Do your best always
          </p>
        </Link>
        {/* Right side: Navigation */}
        <nav className="mt-2 sm:mt-0 flex space-x-4">
          <h4 className="text-white text-sm sm:text-base">Home</h4>
          <h4 className="text-white text-sm sm:text-base">About Us</h4>
          <h4 className="text-white text-sm sm:text-base">Events</h4>
          <h4 className="text-white text-sm sm:text-base">News</h4>
        </nav>
      </div>
    </header>
  );
};

export default Header;