import React from 'react';
import logo from '../assets/ohs_logo.jpg';

const Header = () => {
  return (
	<div className="fixed top-0 left-0 w-full bg-[#800000]">
		<div className="h-45">
			<img className="w-20 p-3 h-10 sm:w-30 sm:h-33 object-contain bg-[#800000]" src={logo} alt="OHS Logo"/>
			<div className="flex justify-center items-center h-10"> 
				<h1 className="flex-1 text-2xl sm:text-4xl font-bold text-white text-center">OLYMPIC HIGH SCHOOL</h1>
			</div>
		</div>
	</div>
  );
};

export default Header;