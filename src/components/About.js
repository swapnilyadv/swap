import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About <span className="highlight">Me</span></h2>
        <div className="about-text">
          <p>I'm a passionate Full Stack Developer with expertise in building web applications. 
             I specialize in JavaScript, React, Node.js, and modern web technologies.</p>
          <div className="skills">
            <h3 className="highlight">Skills</h3>
            <ul>
              <li>Frontend: React, JavaScript, HTML, CSS</li>
              <li>Backend: Node.js, Express, MongoDB</li>
              <li>Tools: Git, VS Code, Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;