import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection, onOpenResume, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="logo-badge">JP</div>
        <div className="logo-text-group">
          <div className="logo-name">
            Jalp Patel <span className="logo-dot"></span>
          </div>
          <div className="logo-role">Software Developer</div>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={handleNavClick}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={handleNavClick}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={handleNavClick}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={handleNavClick}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#certifications"
            className={activeSection === 'certifications' ? 'active' : ''}
            onClick={handleNavClick}
          >
            Achievements
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={handleNavClick}
          >
            Contact
          </a>
        </li>
        <li className="nav-action-item">
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Dark / Light Theme"
            title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleNavClick();
              if (onOpenResume) onOpenResume();
            }}
            className="btn-primary"
            style={{ padding: '0.45rem 1.2rem', fontSize: '0.85rem', cursor: 'pointer' }}
          >
            View Resume
          </button>
        </li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
      </div>
    </nav>
  );
}

