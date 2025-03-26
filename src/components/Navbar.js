import React, { useState } from 'react';
import './Navbar.css';
import ResumeModal from './ResumeModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    setIsResumeOpen(true);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Swapnil_Yadav_Resume.pdf';
    link.download = 'Swapnil_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
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
          <li>
            <button onClick={handleResumeClick} className="cv-button">
              Resume
            </button>
          </li>
        </ul>
      </nav>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownload={downloadResume}
      />
    </>
  );
};

export default Navbar;