import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2><span className="highlight">&lt;</span> About Me <span className="highlight">/&gt;</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>Hello! I'm a passionate Full Stack Developer who loves building digital experiences. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">
              <li>Python</li>
              <li>Java</li>
              <li>NLP & Gen AI</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number highlight">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number highlight">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;