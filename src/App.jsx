import React from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="bg-[#0d0b1d] min-h-screen font-sans">
      <Navbar></Navbar>
      <Home />
    </div>
  );
}

export default App;
