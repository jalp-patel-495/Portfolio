import React from 'react';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a <strong>Software Development Intern</strong> and <strong>Computer Engineering student</strong> specializing in full-stack web development with hands-on experience building scalable applications using <strong>Java, Python, React.js, Django, and MySQL</strong>.
          </p>
          <p>
            Proven track record in developing RESTful APIs, optimizing database schemas, and applying Object-Oriented Programming (OOP) and Data Structures concepts to solve real-world problems.
          </p>
          <p>
            Currently pursuing my <strong>Bachelor of Engineering in Computer Engineering (Semester 4, 2024 – Present)</strong> at <strong>Lok Jagruti Kendra (LJK) University</strong>, Ahmedabad, India with an outstanding academic record of <strong>8.38 SPI</strong>.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3>Academic SPI</h3>
            <p>8.38 SPI (LJKU)</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3>Education</h3>
            <p>B.E. Computer Engineering</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <h3>GitHub Achievements</h3>
            <p>6+ Projects Published</p>
          </div>
          <div className="about-card">
            <div className="about-card-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Availability</h3>
            <p>Open for Internships</p>
          </div>
        </div>
      </div>
    </section>
  );
}
