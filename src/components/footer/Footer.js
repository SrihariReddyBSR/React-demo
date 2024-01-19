import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <h1>GLX TRVL</h1>
      <div className="links">
        <h3>Useful Links</h3>
        <div className="link">
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/training">Training</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social">
        <CiFacebook size={50} style={{cursor:"pointer"}} />
        <CiInstagram size={50} style={{cursor:"pointer"}} />
        <CiLinkedin size={50} style={{cursor:"pointer"}} />
        <FaWhatsapp size={50} style={{cursor:"pointer"}} />
      </div>
    </footer>
  );
};

export default Footer;
