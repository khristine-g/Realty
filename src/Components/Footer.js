import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We provide the best real estate deals in town. Find your dream home with us.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Listings</a></li>
            <li><a href="#">Agents</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>1234 Westlands, Nairobi, Kenya</p>
          <p>Email: info@realestate.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://www.x.com/"><FaTwitter /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Real Estate Co. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
