import React, { useState, useEffect } from 'react';
import PlexusBackground from './components/PlexusBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import ResumePage from './components/ResumePage';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeModalId, setActiveModalId] = useState(null);
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname === '/resume' || window.location.hash === '#/resume'
      ? 'resume'
      : 'home'
  );

  // Sync URL Path changes (popstate)
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/resume' || window.location.hash === '#/resume') {
        setCurrentPath('resume');
      } else {
        setCurrentPath('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToResume = () => {
    window.history.pushState({}, '', '/resume');
    setCurrentPath('resume');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('home');
    window.scrollTo(0, 0);
  };

  // ScrollSpy for Active Navbar Section
  useEffect(() => {
    if (currentPath === 'resume') return;

    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 160) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  // Step-by-Step Scroll Reveal across ALL sections
  useEffect(() => {
    if (currentPath === 'resume') return;

    const selector =
      '.section-title, .hero-text, .hero-profile-card, .about-text, .about-card, .about-showcase-card, .project-card, .skill-category-card, .cert-card, .contact-info, .contact-form-card';
    const revealElements = document.querySelectorAll(selector);

    revealElements.forEach((el) => el.classList.add('scroll-reveal'));

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const parentGrid = entry.target.parentElement;
              const siblings = parentGrid
                ? Array.from(parentGrid.children).filter((child) =>
                    child.classList.contains('scroll-reveal')
                  )
                : [];
              const index = siblings.indexOf(entry.target);
              const delay = index >= 0 ? index * 100 : 0;

              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      revealElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealElements.forEach((el) => el.classList.add('visible'));
    }
  }, [currentPath]);

  // Interactive 3D Card Tilt Effect
  useEffect(() => {
    if (currentPath === 'resume') return;

    const tiltElements = document.querySelectorAll(
      '.project-card, .skill-category-card, .about-card, .about-showcase-card, .cert-card, .hero-profile-card'
    );

    const handleMouseMove = (e, elem) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;

      elem.style.setProperty('--mouse-x', `${x}px`);
      elem.style.setProperty('--mouse-y', `${y}px`);

      elem.style.transition =
        'transform 0.1s ease, border-color 0.3s ease, box-shadow 0.3s ease';
      elem.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (elem) => {
      elem.style.transition =
        'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease';
      elem.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    const listeners = [];

    tiltElements.forEach((elem) => {
      const onMove = (e) => handleMouseMove(e, elem);
      const onLeave = () => handleMouseLeave(elem);

      elem.addEventListener('mousemove', onMove);
      elem.addEventListener('mouseleave', onLeave);

      listeners.push({ elem, onMove, onLeave });
    });

    return () => {
      listeners.forEach(({ elem, onMove, onLeave }) => {
        elem.removeEventListener('mousemove', onMove);
        elem.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [currentPath]);

  if (currentPath === 'resume') {
    return <ResumePage onBack={navigateToHome} />;
  }

  return (
    <div className="app-container">
      <PlexusBackground />
      <Navbar activeSection={activeSection} onOpenResume={navigateToResume} />
      <main>
        <Hero onOpenResume={navigateToResume} />
        <About />
        <Projects onOpenModal={(id) => setActiveModalId(id)} />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProjectModal
        activeProjectId={activeModalId}
        onClose={() => setActiveModalId(null)}
      />
    </div>
  );
}
