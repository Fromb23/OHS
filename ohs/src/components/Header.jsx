import React from 'react';
import logo from '../assets/ohs_logo.jpg';

const Header = () => {
  return (
	<div className="fixed top-0 left-0 w-full bg-[#800000]">
		<div className="sm:h-45 p-3 h-22">
			<img className="p-2 h-18 sm:w-29 sm:h-33 object-contain bg-[#800000] rounded-5" src={logo} alt="OHS Logo"/>
			<div className="flex sm:justify-start sm:items-center sm:h-19 sm:w-full ">
				<h1 className="-mt-15 ml-13 sm:w-1/2 sm:h-50 text-lg sm:text-4xl font-bold text-white text-center ml:[29%]">OLYMPIC HIGH SCHOOL</h1>
			</div>
		</div>
	</div>
  );
};

export default Header;