import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isOpen ? 'active' : ''}`}></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li><a href="/resume.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;