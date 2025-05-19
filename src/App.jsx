
import { Route, Routes } from "react-router-dom";
import './App.css';


import Navbar from "./components/atoms/NavBar";
import HomeSection from './components/sections/HomeSection';
import HowItWorksSection from './components/sections/HowItWorks';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/how-it-works" element={<HowItWorksSection />} />
      </Routes>
    </>
  )
}

export default App
