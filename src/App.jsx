
import { Route, Routes } from "react-router-dom";
import './App.css';
import './style/colors.css';
import './style/general.css';


import Home from "./components/pages/home";
import HowItWorks from "./components/pages/HowItWorks";
import Profile from "./components/pages/Profile";
import Navbar from "./components/sections/NavBar";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Profile />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </>
  )
}

export default App
