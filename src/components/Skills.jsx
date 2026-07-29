import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      subtitle: 'Core Programming',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['Java', 'Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend Frameworks',
      subtitle: 'UI & Web Design',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ['React.js', 'Bootstrap', 'Tailwind CSS', 'Responsive Layouts']
    },
    {
      title: 'Backend & Databases',
      subtitle: 'Architectures & Data Storage',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        </svg>
      ),
      skills: ['Django', 'Django REST Framework', 'Flask', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
    },
    {
      title: 'Core CS Concepts',
      subtitle: 'Foundations & Engineering',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: [
        'Data Structures (DS)',
        'Object-Oriented Programming (OOP)',
        'DBMS',
        'Operating Systems',
        'REST APIs',
        'JWT Auth'
      ]
    },
    {
      title: 'Tools & Platforms',
      subtitle: 'Development & Workflow',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills & Technical Expertise</h2>
      <p className="skills-subtitle">
        Passionate about crafting clean code, robust backend architectures, and modern web interfaces — here is my technical toolkit.
      </p>

      <div className="skills-grid-pills">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-card-header">
              <div className="skill-card-icon">{cat.icon}</div>
              <div className="skill-card-title">
                <h3>{cat.title}</h3>
                <span>{cat.subtitle}</span>
              </div>
            </div>
            <div className="skill-pills-wrapper">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
