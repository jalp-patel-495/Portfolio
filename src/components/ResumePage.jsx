import React, { useEffect } from 'react';

export default function ResumePage({ onBack }) {
  useEffect(() => {
    document.title = "Jalp Patel - Resume";
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page-wrapper" style={{
      minHeight: '100vh',
      backgroundColor: '#0f0f1b',
      color: '#1a1a1a',
      padding: '30px 15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Top Controls Bar (Hidden during printing) */}
      <div className="no-print" style={{
        maxWidth: '850px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        background: '#141424',
        padding: '14px 20px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'transparent',
            border: '1px solid rgba(0, 242, 254, 0.4)',
            color: '#00F2FE',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← Back to Portfolio
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={handlePrint}
            style={{
              background: 'linear-gradient(135deg, #00F2FE, #4FACFE)',
              border: 'none',
              color: '#040408',
              padding: '8px 18px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🖨️ Print / Save as PDF
          </button>
        </div>
      </div>

      {/* A4 Paper Document Canvas matching attached image */}
      <div className="resume-paper" style={{
        maxWidth: '850px',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '50px 55px',
        borderRadius: '4px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        color: '#222222',
        fontSize: '14px',
        lineHeight: '1.5'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '1px',
            margin: '0 0 6px 0',
            textTransform: 'uppercase'
          }}>
            JALP PATEL
          </h1>
          <p style={{
            fontSize: '15px',
            fontWeight: '700',
            color: '#333333',
            margin: '0 0 8px 0'
          }}>
            Software Development Intern | Computer Engineering Student
          </p>
          <p style={{ fontSize: '13px', color: '#555555', margin: 0 }}>
            Ahmedabad, India &nbsp;|&nbsp;{' '}
            <a href="tel:+919099844583" style={{ color: '#0056b3', textDecoration: 'none' }}>+91 9099844583</a> &nbsp;|&nbsp;{' '}
            <a href="mailto:jalppatel1580@gmail.com" style={{ color: '#0056b3', textDecoration: 'none' }}>jalppatel1580@gmail.com</a> &nbsp;|&nbsp;{' '}
            <a href="https://github.com/jalp-patel-495" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'none' }}>github.com</a> &nbsp;|&nbsp;{' '}
            <a href="https://www.linkedin.com/in/jalp-patel-8572b8339/" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'none' }}>linkedin.com</a>
          </p>
        </div>

        {/* Section: Professional Summary */}
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '3px'
          }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ margin: 0, textAlign: 'justify', color: '#333333' }}>
            Computer Engineering student specializing in full-stack web development with hands-on experience building scalable applications using Java, Python, React.js, and MySQL. Proven track record in developing RESTful APIs, optimizing database schemas, and applying Object-Oriented Programming (OOP) and Data Structures concepts to solve real-world problems.
          </p>
        </div>

        {/* Section: Education */}
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '3px'
          }}>
            EDUCATION
          </h2>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#1B365D' }}>
              <span>L.J. Institute of Engineering and Technology</span>
              <span>Expected Graduation: 2028</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#333333', marginTop: '2px' }}>
              <span><em>B.E. in Computer Engineering (Semester 4)</em></span>
              <span><strong style={{ textDecoration: 'underline' }}>SPI:</strong> 8.38</span>
            </div>
          </div>
        </div>

        {/* Section: Technical Skills */}
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '3px'
          }}>
            TECHNICAL SKILLS
          </h2>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#333333' }}>
            <li style={{ marginBottom: '3px' }}><strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS</li>
            <li style={{ marginBottom: '3px' }}><strong>Frontend:</strong> React.js, Bootstrap, Tailwind CSS</li>
            <li style={{ marginBottom: '3px' }}><strong>Backend:</strong> Flask, Django, Django REST Framework</li>
            <li style={{ marginBottom: '3px' }}><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, SQLite</li>
            <li style={{ marginBottom: '3px' }}><strong>Core Concepts:</strong> Data Structures (DS), OOP, DBMS, OS, REST APIs</li>
            <li style={{ marginBottom: '3px' }}><strong>Tools &amp; Platforms:</strong> Git, GitHub, Vercel</li>
          </ul>
        </div>

        {/* Section: Projects */}
        <div style={{ marginBottom: '18px' }}>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '3px'
          }}>
            PROJECTS
          </h2>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ color: '#1B365D', fontWeight: '700' }}>
              Ahmedabad EventsHub – AI Event Management Platform <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#555555' }}>| React.js, Django, Django REST Framework, MySQL</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#333333' }}>
              <li>Architected a full-stack platform featuring JWT authentication, role-based dashboards, and REST APIs.</li>
              <li>Designed and integrated endpoints for event booking, ticketing, and administrative workflows.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ color: '#1B365D', fontWeight: '700' }}>
              Online Clothing Store Management System <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#555555' }}>| Python, Flask, MySQL, HTML, CSS, Bootstrap</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#333333' }}>
              <li>Built an e-commerce web application with user authentication, catalog management, and shopping cart functionality.</li>
              <li>Designed relational database tables in MySQL to track real-time inventory and order processing.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <div style={{ color: '#1B365D', fontWeight: '700' }}>
              Bank Management System <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#555555' }}>| Java, OOP Principles, Data Structures</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#333333' }}>
              <li>Engineered a modular banking system utilizing OOP principles (Inheritance, Encapsulation, Polymorphism).</li>
              <li>Implemented account creation, deposits, withdrawals, balance inquiries, and transaction logging.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '6px' }}>
            <div style={{ color: '#1B365D', fontWeight: '700' }}>
              Theater Management System <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#555555' }}>| Java, OOP Principles, Software Design</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#333333' }}>
              <li>Developed a desktop application using clean Java OOP architecture for seat reservation and ticket allocation.</li>
              <li>Managed show schedules, customer profiles, and booking state prevention logic.</li>
            </ul>
          </div>
        </div>

        {/* Section: Certifications */}
        <div>
          <h2 style={{
            fontSize: '13px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '3px'
          }}>
            CERTIFICATIONS
          </h2>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#333333' }}>
            <li style={{ marginBottom: '2px' }}>Exploratory Data Analysis for Machine Learning – IBM</li>
            <li style={{ marginBottom: '2px' }}>Crash Course on Python – Google</li>
            <li style={{ marginBottom: '2px' }}>Introduction to HTML, CSS &amp; JavaScript – IBM</li>
            <li style={{ marginBottom: '2px' }}>Introduction to AI – Google</li>
            <li style={{ marginBottom: '2px' }}>Introduction to Artificial Intelligence (AI) – IBM</li>
            <li style={{ marginBottom: '2px' }}>Inheritance and Data Structures in Java – Univ. of Pennsylvania</li>
            <li style={{ marginBottom: '2px' }}>Java Class Library – LearnQuest</li>
            <li style={{ marginBottom: '2px' }}>Object-Oriented Hierarchies in Java – LearnQuest</li>
            <li style={{ marginBottom: '2px' }}>Introduction to Object-Oriented Programming with Java – LearnQuest</li>
            <li style={{ marginBottom: '2px' }}>Introduction to Java – LearnQuest</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
