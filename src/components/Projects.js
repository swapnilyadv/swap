import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "VR-Horror Game",
      description: "Designed and developed a single-player VR horror game as a major project for my engineering degree. LeveragedC# to ensure optimal performance of game assets and components. Managed gameplay mechanics through intuitivebutton interactions, enhancing user experience.",
      tech: ["Unity Engine", "c#", "3D Modellling", "Blender", "Assets Optimization"],
      github: "https://github.com/Ritvikyt/DeadEndSunrise_VRHorror",
      live: "https://deadendsunrise-vrhorror.netlify.app/"
    },
    {
      title: "Vehicle Number Plate Detection",
      description: "Developed a machine learning system in Python to recognize vehicle number plates for traffic police, leveraging OCR and YOLO libraries for image capture and processing. Achieved 95% accuracy in number plate detection and recognition.",
      tech: ["Python", "OpenCV", "YOLO", "OCR"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://your-chat-app.com"
    },
    {
      title: "Yadav Dental Care",
      description: "A collaborative task management system with real-time updates. Includes features like task assignment, progress tracking, and deadline management.",
      tech: ["Html", "CSS", "JavaScript"],
      github: "https://github.com/swapnilyadv/yadav_dental_care",
      live: "https://yadav-dental-care.vercel.app/"
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