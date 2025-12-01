import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import Nav from "./Component/nav/index"; //navigation bar path
import Footer from "./Component/footer/Footer"; // Import the footer

import Home from "./Component/pages/Home/home";  // Ensure correct path from home page
import CareerAssessment from './Component/pages/SkillsphereAssessment/CareerAssessment';
import Contact from './Component/pages/Contact/contact';

function App() {
  return (
    <>
     
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/skillsphere-assessment" element={<CareerAssessment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;