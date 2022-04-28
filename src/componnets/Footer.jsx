import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin,FaYoutube } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../style/footer.css"
export const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  return (

    <footer className='footer-container'>
      <div className="footer-icons">
          <div><i><FaTwitter /></i></div>
          <div><i type="insta"><FaInstagram/></i></div>
          <div><i><FaFacebook/></i></div>
          <div> <i><FaLinkedin/></i></div>
          <div><i><FaYoutube/></i></div>
        </div> 
      <div className="footer-menu">
          <div><Link to="/" className='footer-link' onClick={goToTop}><span>Home</span></Link></div>
          <div><Link to="/about" className='footer-link'  onClick={goToTop}><span>About</span></Link></div>
          <div><Link to="/contact" className='footer-link'  onClick={goToTop}><span>Contact</span></Link></div>
           </div>
      <div className="footer-brand">
        <div><span>Jalfood 2022</span></div>
        </div> 
    </footer>
  )
}
