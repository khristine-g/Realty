import React, { useEffect, useState } from 'react';
import "../Navbar.css";
import { FaCity } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isPropertyDetailPage = location.pathname.includes('/property/');

  return (
    <nav className={`real-navbar ${scrolled ? "navbar-scrolled" : ""} ${isPropertyDetailPage ? "navbar-property-detail" : ""}`}>
      <div className="navbar-brand">
        <FaCity className="logo-icon" />
        <h2 className="company-name">Urban Realty</h2>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to='/'>   
       
          <li>Home</li>
          </Link>
        
        <a href="#services" >
          <li>Services</li>
        </a>
        <Link to='/schedule'> 
        <li>Contact</li>
        
        
        </Link>
        
         
       
        <a href="#agents" >
          <li>Agents</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
