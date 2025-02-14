import React from 'react';
import Header from '../components/Header';

function Home() {
	return (
	  <div>
		<Header />
		<h1 className="text-4xl font-bold text-red-600">Welcome to the Home Page</h1>
		<p className="mt-2 text-lg text-gray-700">This is a Tailwind-styled component.</p>
	  </div>
	);
  }
  
  export default Home;
  