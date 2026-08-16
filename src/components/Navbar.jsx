import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection, onOpenResume }) {
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
        <li>
          <button
            onClick={() => {
              handleNavClick();
              if (onOpenResume) onOpenResume();
            }}
            className="btn-primary"
            style={{ padding: '0.4rem 1.1rem', fontSize: '0.85rem', cursor: 'pointer' }}
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
