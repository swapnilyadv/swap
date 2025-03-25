import React from 'react';
import './Header.css';
import SplineModel from './SplineModel';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1>Hi, I'm <span className="highlight">Swapnil Yadav</span></h1>
        <h2>Full Stack Developer</h2>
        <button className="cta-button">Get in Touch</button>
      </div>
      <SplineModel />
    </header>
  );
};

export default Header;