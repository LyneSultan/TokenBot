import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#0d0b1d] text-white">
      <h1 className="text-xl font-bold text-pink-400">Token<span className="text-white">Bot</span></h1>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#" className="hover:text-pink-400">Home</a></li>
        <li><a href="#" className="hover:text-pink-400">Explore</a></li>
        <li><a href="#" className="hover:text-pink-400">How It Works</a></li>
      </ul>
      <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
