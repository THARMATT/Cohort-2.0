import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex justify-center mb-8">
        <Link to="/signin" className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Sign In
        </Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
          Sign Up
        </Link>
      </div>
      <div className="flex w-full h-1/2">
        <div className="w-1/2 bg-blue-100 flex items-center justify-center">
          <h1 className="text-3xl font-bold">Left Side Content</h1>
        </div>
        <div className="w-1/2 bg-green-100 flex items-center justify-center">
          <h1 className="text-3xl font-bold">Right Side Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
