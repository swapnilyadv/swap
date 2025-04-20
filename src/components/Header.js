import React, { useState, useEffect } from 'react';
import './Header.css';
import SplineModel from './SplineModel';

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full Stack Developer',
    'AI Engineer',
    'UX Designer',
    'Software Architect',
    'Software Developer'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
      } else {
        setText(currentRole.substring(0, text.length - 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1>Hi, I'm <span className="highlight">Swapnil Yadav</span></h1>
        <h2 className="animated-text">
          <span className="static-text">I'm a </span>
          <span className="dynamic-text">{text}</span>
          <span className="cursor"></span>
        </h2>
      </div>
      <SplineModel />
    </header>
  );
};

export default Header;