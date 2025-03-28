import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/swapnilyadv" className="highlight">GitHub</a>
          <a href="https://www.linkedin.com/in/swapnilyadav29/" className="highlight">LinkedIn</a>
          <a href="https://x.com/swapnilydv29" className="highlight">Twitter</a>
        </div>
        <p>© 2025 Swapnil Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;