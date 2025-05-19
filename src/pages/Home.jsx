import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0b1d] to-[#1f1433] text-white flex flex-col items-center justify-center text-center px-4">
      <div className="mb-4 bg-gray-800 px-3 py-1 rounded-full text-sm text-purple-300">
        🔧 Token creation made simple
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Mint Solana Tokens <br /> From a Social Post
      </h1>
      <p className="text-lg max-w-2xl mb-6 text-gray-300">
        Create trade-ready tokens directly from Twitter or TikTok with just one post.
        No code, no complexity, just tag <span className="text-blue-400 font-medium">@TokenBot</span>.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
          <i className="fab fa-twitter mr-2"></i> Mint with Twitter
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full">
          Learn how it works →
        </button>
      </div>
    </div>
  );
};

export default Home;
