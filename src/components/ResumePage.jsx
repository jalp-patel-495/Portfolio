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

      {/* A4 Paper Document Canvas matching exact attached resume PDF screenshot */}
      <div className="resume-paper" style={{
        maxWidth: '850px',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '45px 50px',
        borderRadius: '4px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        color: '#222222',
        fontSize: '13.5px',
        lineHeight: '1.45'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <h1 style={{
            fontSize: '26px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '1px',
            margin: '0 0 4px 0',
            textTransform: 'uppercase'
          }}>
            JALP PATEL
          </h1>
          <p style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#333333',
            margin: '0 0 6px 0'
          }}>
            Software Development Intern | Computer Engineering Student
          </p>
          <p style={{ fontSize: '12.5px', color: '#444444', margin: 0 }}>
            Ahmedabad, India &nbsp;|&nbsp;{' '}
            <a href="tel:+919099844583" style={{ color: '#0056b3', textDecoration: 'underline' }}>+91 9099844583</a> &nbsp;|&nbsp;{' '}
            <a href="mailto:jalppatel1580@gmail.com" style={{ color: '#0056b3', textDecoration: 'underline' }}>jalppatel1580@gmail.com</a> &nbsp;|&nbsp;{' '}
            <a href="https://github.com/jalp-patel-495" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'underline' }}>github.com</a> &nbsp;|&nbsp;{' '}
            <a href="https://www.linkedin.com/in/jalp-patel-8572b8339/" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'underline' }}>linkedin.com</a> &nbsp;|&nbsp;{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} style={{ color: '#0056b3', textDecoration: 'underline' }}>Portfolio</a>
          </p>
        </div>

        {/* Section: Professional Summary */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{
            fontSize: '12.5px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '2px'
          }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ margin: 0, textAlign: 'justify', color: '#222222', fontSize: '13px' }}>
            Computer Engineering student (SPI 8.38) specializing in full-stack web development, with three end-to-end projects spanning React, Django REST Framework, Flask, and MySQL. Skilled in designing REST APIs, relational database schemas, and role-based authentication systems. Applies Object-Oriented Programming and Data Structures fundamentals to build maintainable, real-world applications, backed by coursework and certifications across Java, Python, and applied machine learning.
          </p>
        </div>

        {/* Section: Technical Skills */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{
            fontSize: '12.5px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '2px'
          }}>
            TECHNICAL SKILLS
          </h2>
          <div style={{ fontSize: '12.5px', lineHeight: '1.55' }}>
            <div><strong>Languages:</strong> Java, Python, JavaScript (ES6+), HTML5, CSS3</div>
            <div><strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Django, Django REST Framework, Flask, Bootstrap, Tailwind CSS</div>
            <div><strong>Data Science & ML:</strong> Pandas, NumPy, Scikit-Learn (sklearn), Plotly, Seaborn, Streamlit, Data Analytics</div>
            <div><strong>Databases & Tools:</strong> MySQL, PostgreSQL, MongoDB, SQLite, Git, GitHub, VS Code, Postman, Vercel</div>
            <div><strong>Core Competencies:</strong> Data Structures (DS), Object-Oriented Programming (OOP), Relational Database Management (DBMS), Operating Systems, RESTful APIs, JWT Authentication</div>
          </div>
        </div>

        {/* Section: Projects */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{
            fontSize: '12.5px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '2px'
          }}>
            PROJECTS
          </h2>

          {/* Project 1 */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: '700', fontSize: '13.5px', color: '#1B365D' }}>
                Ahmedabad EventsHub – AI Event Management Platform
              </span>
              <span style={{ fontSize: '12px', color: '#555555' }}>React.js, Django, DRF, MySQL</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', fontSize: '12.5px' }}>
              <li>Architected a full-stack event platform with JWT role-based auth (Admin, Organizer, Attendee) and dynamic dashboard workflows.</li>
              <li>Engineered normalized MySQL schema and REST endpoints for event discovery, ticket allocation, and registration tracking.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: '700', fontSize: '13.5px', color: '#1B365D' }}>
                Online Clothing Store Management System
              </span>
              <span style={{ fontSize: '12px', color: '#555555' }}>Python, Flask, MySQL, Bootstrap</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', fontSize: '12.5px' }}>
              <li>Developed an e-commerce platform featuring catalog browsing, category filtering, cart management, and order checkout flows.</li>
              <li>Implemented secure customer authentication, session management, and MySQL database integration for real-time inventory tracking.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: '700', fontSize: '13.5px', color: '#1B365D' }}>
                Bank Management System & Theater Management System
              </span>
              <span style={{ fontSize: '12px', color: '#555555' }}>Java, OOP Principles, Data Structures</span>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', fontSize: '12.5px' }}>
              <li>Engineered modular banking and theater management applications utilizing OOP principles (Inheritance, Encapsulation, Polymorphism).</li>
              <li>Implemented transactional accounting, account creation, real-time seat reservation logic, and file-based audit logging.</li>
            </ul>
          </div>
        </div>

        {/* Section: Education */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{
            fontSize: '12.5px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '2px'
          }}>
            EDUCATION
          </h2>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#1B365D', fontSize: '13.5px' }}>
              <span>L.J. Institute of Engineering and Technology</span>
              <span>Expected Graduation: 2028</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#222222', marginTop: '2px', fontSize: '13px' }}>
              <span><em>B.E. in Computer Engineering (Semester 4)</em></span>
              <span><strong>SPI : 8.38</strong></span>
            </div>
          </div>
        </div>

        {/* Section: Certifications (Two-Column Bullet Grid Layout) */}
        <div>
          <h2 style={{
            fontSize: '12.5px',
            fontWeight: '800',
            color: '#1B365D',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            borderBottom: '1.5px solid #1B365D',
            paddingBottom: '2px'
          }}>
            CERTIFICATIONS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 20px', fontSize: '13px', color: '#222222' }}>
            <div>
              <ul style={{ margin: 0, paddingLeft: '18px' }}>
                <li style={{ marginBottom: '3px' }}>Introduction to Object-Oriented Programming with Java – LearnQuest</li>
                <li style={{ marginBottom: '3px' }}>Crash Course on Python – Google</li>
                <li style={{ marginBottom: '3px' }}>Exploratory Data Analysis for Machine Learning – IBM</li>
                <li style={{ marginBottom: '3px' }}>Introduction to AI – Google</li>
                <li style={{ marginBottom: '3px' }}>Introduction to Java – LearnQuest</li>
              </ul>
            </div>
            <div>
              <ul style={{ margin: 0, paddingLeft: '18px' }}>
                <li style={{ marginBottom: '3px' }}>Inheritance and Data Structures in Java – Univ. of Pennsylvania</li>
                <li style={{ marginBottom: '3px' }}>Java Class Library – LearnQuest</li>
                <li style={{ marginBottom: '3px' }}>Object-Oriented Hierarchies in Java – LearnQuest</li>
                <li style={{ marginBottom: '3px' }}>Introduction to HTML, CSS &amp; JavaScript – IBM</li>
                <li style={{ marginBottom: '3px' }}>Introduction to Artificial Intelligence(AI) – IBM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
