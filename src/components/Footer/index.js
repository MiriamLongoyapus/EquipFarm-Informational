import React from "react";
// import "font-awesome/css/font-awesome.min.css";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './style.css';const Footer = () => {
  return (
    <footer className="container">

      <div className="get-in-touch">
        <h2>Get in touch</h2>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
      </div>

      <div className="contact-us">
          <h2>Contact us</h2>
          <p>Email: equipfarm@gmail.com</p>
          <p>Phone: +254 726 794 700</p>
          <p>Nairobi, Kenya</p>
      </div>

       <div className="services">
          <h2>Our services</h2>
          <p>Fast Delivery</p>
          <p>Support</p>
          <p>Secure payment</p>
      </div>

       <div className="social-media">
        <div className="facebook">
          <h2 className="Follow">Follow us</h2>
          <div className="Icon">
            <p className="facebook"><FaFacebook /></p>
            <p className="twitter"><FaTwitter /></p>
            <p className="linkedin"><FaLinkedin /></p>
            <p className="instagram"><FaInstagram /></p>
          </div>
        </div>
      </div>

    </footer>
  );
};export default Footer;