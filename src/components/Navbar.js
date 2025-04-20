import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ResumeModal from './ResumeModal';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const downloadResume = () => {
    // Add your resume download logic here
    const resumeUrl = '/swap/public/Swapnil_Yadav_Resume.pdf';
    const link = document.createElement('a');
    link.href = //drive.google.com/file/d/1OtaKDinMjLbMHJaerdGh1uwuIdYFdTc4/view?usp=sharing;
    link.download = 'Swapnil_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    window.open(resumeUrl, '_blank');
    setIsResumeOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${visible ? '' : 'hidden'}`}>
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