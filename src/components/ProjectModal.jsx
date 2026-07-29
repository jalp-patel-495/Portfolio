import React, { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

export default function ProjectModal({ activeProjectId, onClose }) {
  const project = activeProjectId ? projectsData[activeProjectId] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-container">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h3 className="modal-title">{project.title}</h3>
        <div className="modal-tech">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="modal-body">
          <p className="modal-desc">{project.desc}</p>
          <h4>Key Features & Implementations:</h4>
          <ul className="modal-features">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{ __html: feature }}
              />
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <a
            href={project.github}
            className="btn-primary modal-github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
            <svg
              width="18"
              height="18"
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
    </div>
  );
}
