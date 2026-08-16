import React from 'react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side: Headlines, Meta Badges & Actions */}
        <div className="hero-text">
          {/* Top Intro Pill */}
          <div className="hero-intro-pill">
            <span className="hero-sparkle-icon">✨</span>
            <span>HEY, I'M JALP PATEL</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-main-title">
            Computer Engineering Student & <span className="hero-gradient-text">Software Developer</span>
          </h1>

          {/* Location & University / SPI Meta Tags */}
          <div className="hero-meta-row">
            <div className="hero-meta-pill">
              <span className="hero-meta-icon">📍</span>
              <span>Ahmedabad, India</span>
            </div>
            <div className="hero-meta-pill">
              <span className="hero-meta-icon">🎓</span>
              <span>LJ University (SPI: 8.38 / 10)</span>
            </div>
          </div>

          {/* Description */}
          <p className="hero-description">
            Computer Engineering student and aspiring Software Developer with hands-on experience building full-stack web applications using Java, Python, React.js, Django, and MySQL. Skilled in database design, REST API development, JWT authentication, and applying data structures to real-world scalable systems.
          </p>

          {/* Buttons Row */}
          <div className="hero-buttons-row">
            <a href="#contact" className="hero-btn-primary">
              Get In Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#projects" className="hero-btn-outline">
              View Projects
            </a>
            <button onClick={onOpenResume} className="hero-btn-glass">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              Resume
            </button>
            <a
              href="https://github.com/jalp-patel-495"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-social"
              title="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jalp-patel-8572b8339/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-social linkedin"
              title="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side: Profile Card with Overlays & Badges */}
        <div className="hero-profile-wrapper">
          <div className="hero-profile-card">
            {/* Profile Image */}
            <img src="/profile.jpg" alt="Jalp Patel" className="hero-profile-img" />

            {/* Bottom Inner Card Overlay */}
            <div className="hero-profile-overlay">
              <div className="profile-status-line">
                <span className="profile-status-dot"></span>
                <span>Available for Internships & Roles</span>
              </div>
              <div className="profile-name">Jalp Patel</div>
              <div className="profile-sub">Computer Engineering @ LJ University</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

