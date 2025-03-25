import React from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and styled-components featuring dark theme and responsive design.",
    liveDemo: "https://your-portfolio-url.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
    liveDemo: "https://your-ecommerce-url.com",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "React-based task management application with drag-and-drop functionality and local storage.",
    liveDemo: "https://your-taskapp-url.com",
    github: "https://github.com/yourusername/task-manager"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>My <span className="highlight">Projects</span></h2>
        <div className="project-grid">
          {projectData.map(project => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.liveDemo} 
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;