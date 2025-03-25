import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Three.js featuring interactive 3D elements and smooth animations.",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com"
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2><span className="highlight">&lt;</span> My Projects <span className="highlight">/&gt;</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;