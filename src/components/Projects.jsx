import React from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ onOpenModal }) {
  const projectsList = Object.values(projectsData);

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="project-card"
            data-id={project.id}
            onClick={() => onOpenModal(project.id)}
          >
            <div className="project-banner">
              <img src={project.image} alt={`${project.title} Banner`} />
              <div className="project-banner-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Source"
                  className="github-icon-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
