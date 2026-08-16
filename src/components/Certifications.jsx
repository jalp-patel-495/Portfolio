import React from 'react';

export default function Certifications() {
  const certsList = [
    {
      title: 'Inheritance and Data Structures in Java',
      issuer: 'Univ. of Pennsylvania',
      badge: 'UPenn',
      link: 'https://coursera.org/verify/BRQHLUTFU40M',
      isVerified: true
    },
    {
      title: 'Introduction to Object-Oriented Programming with Java',
      issuer: 'LearnQuest',
      badge: 'LearnQuest',
      link: 'https://coursera.org/verify/V60SGT3D64PZ',
      isVerified: true
    },
    {
      title: 'Object-Oriented Hierarchies in Java',
      issuer: 'LearnQuest',
      badge: 'LearnQuest',
      link: 'https://coursera.org/verify/M77MQN3OZSK5',
      isVerified: true
    },
    {
      title: 'Java Class Library',
      issuer: 'LearnQuest',
      badge: 'LearnQuest',
      link: 'https://coursera.org/verify/YK4QTROI0GQU',
      isVerified: true
    },
    {
      title: 'Introduction to Java',
      issuer: 'LearnQuest',
      badge: 'LearnQuest',
      link: 'https://www.coursera.org/learn/intro-to-java-learnquest',
      isVerified: true
    },
    {
      title: 'Exploratory Data Analysis for Machine Learning',
      issuer: 'IBM',
      badge: 'IBM',
      link: 'https://www.coursera.org/learn/exploratory-data-analysis-for-machine-learning',
      isVerified: true
    },
    {
      title: 'Crash Course on Python',
      issuer: 'Google',
      badge: 'Google',
      link: 'https://www.coursera.org/learn/python-crash-course',
      isVerified: true
    },
    {
      title: 'Introduction to HTML, CSS & JavaScript',
      issuer: 'IBM',
      badge: 'IBM',
      link: 'https://www.coursera.org/learn/introduction-to-html-css-and-javascript',
      isVerified: true
    },
    {
      title: 'Introduction to AI',
      issuer: 'Google',
      badge: 'Google',
      link: 'https://www.coursera.org/learn/google-ai-essentials',
      isVerified: true
    },
    {
      title: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'IBM',
      badge: 'IBM',
      link: 'https://www.coursera.org/learn/introduction-to-ai',
      isVerified: true
    }
  ];

  return (
    <section id="certifications">
      <h2 className="section-title">Achievements & Certifications</h2>

      {/* Achievements Highlight Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div className="about-card visible" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
          <div className="about-card-icon" style={{ color: 'var(--accent-cyan)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: '700' }}>Academic Excellence</h3>
          <p style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', margin: '0.2rem 0' }}>8.38 SPI</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Top Academic Performer in B.E. Computer Engineering at Lok Jagruti Kendra (LJK) University.
          </p>
        </div>

        <a href="https://github.com/jalp-patel-495" target="_blank" rel="noopener noreferrer" className="about-card visible" style={{ borderLeft: '4px solid var(--accent-blue)', textDecoration: 'none' }}>
          <div className="about-card-icon" style={{ color: 'var(--accent-blue)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-blue)', fontWeight: '700' }}>GitHub Portfolio</h3>
          <p style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', margin: '0.2rem 0' }}>6+ Projects</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Open-source repositories in React.js, Django, Java, and Python @jalp-patel-495
          </p>
        </a>

        <div className="about-card visible" style={{ borderLeft: '4px solid var(--accent-purple)' }}>
          <div className="about-card-icon" style={{ color: 'var(--accent-purple)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: '700' }}>Certifications</h3>
          <p style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)', margin: '0.2rem 0' }}>10 Verified Badges</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Industry credentials from Google, IBM, UPenn, and LearnQuest.
          </p>
        </div>
      </div>

      <div className="certs-grid">
        {certsList.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            title={`Open Verified Certificate: ${cert.title}`}
          >
            <div className="cert-badge">{cert.badge}</div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>Issued by {cert.issuer} • Click to Verify</p>
            </div>
            <div className="cert-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

