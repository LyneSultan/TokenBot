
import './App.css'


import { Routes, Route } from "react-router-dom";


import HomeSection from './components/sections/HomeSection';
import HowItWorksSection from './components/sections/HowItWorks';

function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/how-it-works" element={<HowItWorksSection/>} />
    </Routes>
    </>
  )
}

export default App
