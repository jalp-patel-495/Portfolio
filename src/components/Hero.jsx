import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenResume }) {
  const roles = [
    'Computer Engineering Student',
    'Software Developer',
    'Full Stack Developer',
    'UI/UX Developer',
    'Python Developer',
    'Java & Python Programmer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (typedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-subtitle">Welcome to my space</div>
          <h1 className="hero-title">Hi, I'm Jalp Patel</h1>
          <div className="hero-typed-container">
            I am a <span className="typed-text">{typedText}</span>
            <span className="typed-cursor">|</span>
          </div>
          <p className="hero-description">
            I am a Computer Engineering student passionate about crafting clean, efficient, and robust software solutions. I specialize in building system architectures in Java and scripting tools in Python.
          </p>
          <div className="hero-buttons">
            <button onClick={onOpenResume} className="btn-primary">
              View Resume
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-img-container">
          <div className="hero-img-outline">
            <img src="/profile.jpg" alt="Jalp Patel" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
