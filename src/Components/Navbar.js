import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCity, FaBars, FaTimes } from "react-icons/fa";
import "../Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isPropertyDetailPage = location.pathname.includes("/property/");

  return (
    <nav
      className={`real-navbar ${scrolled ? "navbar-scrolled" : ""} ${
        isPropertyDetailPage ? "navbar-property-detail" : ""
      }`}
    >
      <div className="navbar-brand">
        <FaCity className="logo-icon" />
        <h2 className="company-name">Urban Realty</h2>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          <li>Home</li>
        </Link>
        <a href="#services" onClick={closeMenu}>
          <li>Services</li>
        </a>
        <Link to="/schedule" onClick={closeMenu}>
          <li>Contact</li>
        </Link>
        <a href="#agents" onClick={closeMenu}>
          <li>Agents</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
