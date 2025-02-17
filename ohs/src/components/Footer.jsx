import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from '../assets/ohs_logo.jpg';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#800000] text-white py-4">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between px-4">
        
        {/* Left Column - Logo & Social Media */}
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <img src={logo} alt="OHS Logo" className="h-12 sm:ml-9 w-auto mb-2" />
          {/* Social Media Icons */}
          <div className="flex space-x-4 text-xl mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
          </div>
        </div>

        {/* Middle Column - Navigation Links */}
        <div className="flex-1 flex flex-col text-center sm:text-left">
          <h4>Home</h4>
          <h4>About Us</h4>
          <h4>Photo Gallery</h4>
          <h4>Contact Us</h4>
        </div>

        {/* Right Column - Mission & Vision */}
        <div className="flex-1 flex flex-col text-center sm:text-left">
          <h4 className="font-bold">Mission</h4>
          <p className="text-sm">Our mission is to provide quality education and foster a passion for lifelong learning.</p>
          <h4 className="font-bold mt-2">Vision</h4>
          <p className="text-sm">Our vision is to empower every student to achieve their full potential and create a positive impact on society.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;