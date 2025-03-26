import React from 'react';
import './About.css';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiJavascript, SiSpring, SiDocker } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="skill-icon-3d" />, color: '#3776AB', url: 'https://www.python.org/' },
    { name: 'Java', icon: <FaJava className="skill-icon-3d" />, color: '#007396', url: 'https://www.java.com/' },
    { name: 'JavaScript', icon: <SiJavascript className="skill-icon-3d" />, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React.js', icon: <FaReact className="skill-icon-3d" />, color: '#61DAFB', url: 'https://react.dev/' },
    { name: 'Node.js', icon: <FaNodeJs className="skill-icon-3d" />, color: '#339933', url: 'https://nodejs.org/' },
    { name: 'Spring Boot', icon: <SiSpring className="skill-icon-3d" />, color: '#6DB33F', url: 'https://spring.io/projects/spring-boot' },
    { name: 'MongoDB', icon: <FaDatabase className="skill-icon-3d" />, color: '#47A248', url: 'https://www.mongodb.com/' },
    { name: 'AWS', icon: <FaCloud className="skill-icon-3d" />, color: '#FF9900', url: 'https://aws.amazon.com/' },
    { name: 'Docker', icon: <SiDocker className="skill-icon-3d" />, color: '#2496ED', url: 'https://www.docker.com/' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2><span className="highlight">&lt;</span> About Me <span className="highlight">/&gt;</span></h2>
        <div className="about-text">
          <p>Hello! I'm a passionate Full Stack Developer who loves building digital experiences. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <a 
              key={index} 
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-item"
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;