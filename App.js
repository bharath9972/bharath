import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Aboutus from './AboutUs';
import Contact from './Contact';
import './App.css';

const App=()=>{
  return(
    <Router>
      <div>
        <nav>
          <div className="navbar-logo">
                    <img src="logo.png"/>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;