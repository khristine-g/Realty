import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Schedule from './Components/Schedule.js';


import PopularDetails from './Components/PopularDetails.js';


import Contact from './Components/Contact';
import useScrollAnimation from "./Components/useScrollAnimation.js";

// import Agents from './Components/Agents';


function App() {
  useScrollAnimation(); 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
  <Route path="/contact" element={<Contact />} />
  <Route path="/" element={<Home />} />
  <Route path="/schedule" element={<Schedule />} />

  <Route path="/property/:id" element={<PopularDetails />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
