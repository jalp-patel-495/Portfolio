import React from 'react';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        {/* Left Column: Biography & Background */}
        <div className="about-text">
          <div className="about-intro-badge">
            <span className="about-pulse-dot"></span>
            Software Development Intern & Student
          </div>
          <p>
            I am a passionate <strong>Computer Engineering student</strong> and <strong>Software Developer</strong> with hands-on experience in full-stack web engineering, backend architecture, and relational database systems.
          </p>
          <p>
            Proficient in <strong>Java, Python, React.js, Django, Flask, and MySQL</strong>, I love building scalable applications, designing RESTful APIs, and implementing clean Object-Oriented software architectures with robust Data Structures.
          </p>
          <p>
            Always eager to tackle challenging problems, collaborate on innovative projects, and explore modern machine learning and cloud infrastructures.
          </p>

          <div className="about-quick-info">
            <div className="quick-info-item">
              <span className="quick-info-label">📍 Location:</span>
              <span className="quick-info-val">Ahmedabad, India</span>
            </div>
            <div className="quick-info-item">
              <span className="quick-info-label">💼 Status:</span>
              <span className="quick-info-val">Available for Internships</span>
            </div>
            <div className="quick-info-item">
              <span className="quick-info-label">🚀 Focus:</span>
              <span className="quick-info-val">Full-Stack & System Design</span>
            </div>
          </div>

          <div className="about-actions">
            <a href="#projects" className="btn-primary">
              View Featured Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Exact Showcase Card matching Image */}
        <div className="about-showcase-wrapper">
          <div className="about-showcase-card">
            {/* Top Graduation Icon */}
            <div className="about-icon-badge">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
            </div>

            {/* Current SPI Pill Badge */}
            <div className="about-spi-pill">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Current SPI: 8.38 / 10</span>
            </div>

            {/* University & Degree Heading */}
            <h3 className="about-showcase-title">LJ University, Ahmedabad</h3>
            <div className="about-showcase-subtitle">
              B.E. in Computer Engineering (2024 – 2028)
            </div>

            {/* Description Text */}
            <p className="about-showcase-desc">
              Dedicated Computer Engineering student with a passion for software design, backend infrastructure, relational databases, and machine learning systems.
            </p>

            {/* 2x2 Highlights Grid */}
            <div className="about-metrics-grid">
              <div className="about-metric-card">
                <div className="about-metric-val">8.38 / 10</div>
                <div className="about-metric-label">Current SPI</div>
              </div>

              <div className="about-metric-card">
                <div className="about-metric-val">B.E. / B.Tech</div>
                <div className="about-metric-label">Degree Program</div>
              </div>

              <div className="about-metric-card">
                <div className="about-metric-val">6 Full-Stack & Core</div>
                <div className="about-metric-label">Featured Projects</div>
              </div>

              <div className="about-metric-card">
                <div className="about-metric-val">10 Google / IBM / UPenn</div>
                <div className="about-metric-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

