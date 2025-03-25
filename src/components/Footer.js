import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com" className="highlight">GitHub</a>
          <a href="https://linkedin.com" className="highlight">LinkedIn</a>
          <a href="https://twitter.com" className="highlight">Twitter</a>
        </div>
        <p>© 2024 Swapnil Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;