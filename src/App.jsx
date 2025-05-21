
import { Route, Routes } from "react-router-dom";
import './App.css';
import './style/colors.css';
import './style/general.css';


import ExploreTokensPage from "./components/pages/Explore";
import Home from "./components/pages/home";
import HowItWorks from "./components/pages/HowItWorks";
import Profile from "./components/pages/Profile";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/NavBar";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<ExploreTokensPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
