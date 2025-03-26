import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Built with MERN stack and includes features like product catalog, shopping cart, and order management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce.com"
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a real-time chat application using WebSocket technology. Features include private messaging, group chats, and file sharing capabilities.",
      tech: ["Socket.io", "React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://your-chat-app.com"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates. Includes features like task assignment, progress tracking, and deadline management.",
      tech: ["Spring Boot", "React", "MySQL", "AWS"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-manager.com"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2><span className="highlight">&lt;</span> Featured Projects <span className="highlight">/&gt;</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
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