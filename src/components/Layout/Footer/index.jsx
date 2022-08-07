import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <Link to="/">
          <i>
            <FaTwitter />
          </i>
        </Link>
        <Link to="/">
          <i>
            <FaInstagram />
          </i>
        </Link>
        <Link to="/">
          <i>
            <FaFacebook />
          </i>
        </Link>
        <Link to="/">
          <i>
            <FaLinkedin />
          </i>
        </Link>
        <Link to="/">
          <i>
            <FaYoutube />
          </i>
        </Link>
      </div>
      <div className="footer-menu">
        <div>
          <Link to="/" className="footer-link" onClick={goToTop}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/about" className="footer-link" onClick={goToTop}>
            About Us
          </Link>
        </div>
        <div>
          <Link to="/contact" className="footer-link" onClick={goToTop}>
           Contact
          </Link>
        </div>
      </div>
      <div className="footer-copy-right" >
        
         <Link to="/" className="footer-brand">
         <b className="brand-part1">Jal</b>
          <b className="brand-part2">food </b>
         </Link>
          <span> 2022</span>
      </div>
    </footer>
  );
};

export default Footer;
