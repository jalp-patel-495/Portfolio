import React, { useEffect } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div
        className="modal-container"
        style={{
          maxWidth: '850px',
          maxHeight: '90vh',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-hover)',
          borderRadius: '16px',
          boxShadow: 'var(--glow-cyan)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.88rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print / Save PDF
            </button>
            <a
              href="https://github.com/jalp-patel-495"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.88rem' }}
            >
              GitHub Profile
            </a>
          </div>
          <span className="modal-close" onClick={onClose} style={{ position: 'static', fontSize: '1.8rem' }}>
            &times;
          </span>
        </div>

        {/* Printable Resume Content */}
        <div className="resume-printable-content" style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '1.2rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-cyan)', marginBottom: '0.3rem' }}>
              JALP PATEL
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
              Software Development Intern | Computer Engineering Student
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>📍 Ahmedabad, India</span>
              <span>📞 +91 9099844583</span>
              <span>✉️ jalppatel1580@gmail.com</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', fontWeight: '700' }}>
              Professional Summary
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, textAlign: 'justify' }}>
              Computer Engineering student (SPI 8.38) specializing in full-stack web development, with three end-to-end projects spanning React, Django REST Framework, Flask, and MySQL. Skilled in designing REST APIs, relational database schemas, and role-based authentication systems. Applies Object-Oriented Programming and Data Structures fundamentals to build maintainable, real-world applications, backed by coursework and certifications across Java, Python, and applied machine learning.
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', fontWeight: '700' }}>
              Technical Skills
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', listStyle: 'none', padding: 0 }}>
              <li>• <strong>Languages:</strong> Python, Java, JavaScript, HTML, CSS</li>
              <li>• <strong>Frontend:</strong> React, Node, Bootstrap, Tailwind CSS</li>
              <li>• <strong>Backend:</strong> Django, Django REST Framework, Flask, JWT Authentication, REST API</li>
              <li>• <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
              <li>• <strong>Core Concepts:</strong> OOP, DS, DBMS, OS, MVC Architecture, CRUD Operations</li>
              <li>• <strong>Tools &amp; Platforms:</strong> Git, GitHub, Vercel, XAMPP, Postman</li>
            </ul>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', fontWeight: '700' }}>
              Key Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '0.8rem' }}>
                <strong style={{ fontSize: '1rem' }}>Ahmedabad EventsHub – AI Event Management Platform</strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '3px 0' }}>
                  React, Django, Django REST Framework, MySQL
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Architected a full-stack AI-powered event management platform with JWT authentication, role-based dashboards, and secure REST APIs. Integrated MySQL database for bookings and real-time updates.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--accent-blue)', paddingLeft: '0.8rem' }}>
                <strong style={{ fontSize: '1rem' }}>Online Clothing Store Management System</strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '3px 0' }}>
                  Python, Flask, MySQL, HTML, CSS, Bootstrap
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Built a responsive e-commerce web application with user auth, product catalog, cart, wishlist, and admin dashboard for inventory management.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--accent-purple)', paddingLeft: '0.8rem' }}>
                <strong style={{ fontSize: '1rem' }}>Bank Management System</strong>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '3px 0' }}>
                  Java, OOP Principles, Data Structures
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Engineered modular banking application using Java and OOP concepts (Inheritance, Encapsulation, Polymorphism, Abstraction) for core banking operations.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', fontWeight: '700' }}>
              Education
            </h3>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: '1rem' }}>L.J. Institute of Engineering and Technology</strong>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>Expected Graduation: 2028</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '4px' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                  B.E. in Computer Engineering (Semester 4)
                </span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>
                  SPI : 8.38
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem', fontWeight: '700' }}>
              Certifications
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                <li>Introduction to Object-Oriented Programming with Java – LearnQuest</li>
                <li>Crash Course on Python – Google</li>
                <li>Exploratory Data Analysis for Machine Learning – IBM</li>
                <li>Introduction to AI – Google</li>
                <li>Introduction to Java – LearnQuest</li>
              </ul>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                <li>Inheritance and Data Structures in Java – Univ. of Pennsylvania</li>
                <li>Java Class Library – LearnQuest</li>
                <li>Object-Oriented Hierarchies in Java – LearnQuest</li>
                <li>Introduction to HTML, CSS &amp; JavaScript – IBM</li>
                <li>Introduction to Artificial Intelligence(AI) – IBM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ marginTop: '1.5rem', paddingTop: '1rem' }}>
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
