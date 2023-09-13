import React, { useState } from 'react';
import './style.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='menu'>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="logo" src="Img/Logo.png" alt="Logo of our website" />
          <div data-testid="navbar-menu" className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-list">
              <li className="navbar-item">
              <a href="/home">Home</a>
              </li>
              <li className="navbar-item">
                <a href="/about">About</a>
              </li>
              <li className="navbar-item">
                <a href="/services">Services</a>
              </li>
              <li className="navbar-item">
                <a href="/team">Our Team</a>
              </li>
              <li className="navbar-item">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-toggle" data-testid="navbar-toggle" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          
          </div>
        </div>
      </nav>
 
    </div>

  );
};

export default Nav;
