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
            Computer Engineering student specializing in full-stack web development with hands-on experience building scalable applications using Java, Python, React.js, and MySQL. Proven track record in developing RESTful APIs, optimizing database schemas, and applying Object-Oriented Programming (OOP) and Data Structures concepts to solve real-world problems.
          </p>
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
              <span><strong>SPI :</strong> 8.38</span>
            </div>
          </div>
        </div>

        {/* Section: Technical Skills (Two-Column Layout) */}
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 20px', fontSize: '13px', color: '#222222' }}>
            <div>• <strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS</div>
            <div>• <strong>Frontend:</strong> React.js, Bootstrap, Tailwind CSS</div>
            <div>• <strong>Backend:</strong> Flask, Django, Django REST Framework</div>
            <div>• <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, SQLite</div>
            <div>• <strong>Core Concepts:</strong> Data Structures (DS), OOP, DBMS, OS, REST API</div>
            <div>• <strong>Tools &amp; Platforms:</strong> Git, GitHub, Vercel</div>
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
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ color: '#1B365D', fontWeight: '700', fontSize: '13.5px' }}>
                Ahmedabad EventsHub – AI Event Management Platform <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#444444' }}>| React.js, Django, Django REST Framework, MySQL</span>
              </div>
              <a href="https://github.com/jalp-patel-495/EventHub" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', fontSize: '13px', fontWeight: '600', textDecoration: 'underline' }}>
                Github
              </a>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#222222', fontSize: '13px' }}>
              <li style={{ marginBottom: '2px' }}>Architected a full-stack AI-powered event management platform with JWT authentication, role-based dashboards, and secure REST APIs.</li>
              <li style={{ marginBottom: '2px' }}>Developed features for event discovery, ticket booking, QR-based ticket generation, organizer management, and real-time event updates.</li>
              <li style={{ marginBottom: '2px' }}>Integrated MySQL database with Django REST Framework to manage users, events, bookings, payments, and administrative workflows efficiently.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ color: '#1B365D', fontWeight: '700', fontSize: '13.5px' }}>
                Online Clothing Store Management System <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#444444' }}>| Python, Flask, MySQL, HTML, CSS, Bootstrap</span>
              </div>
              <a href="https://github.com/jalp-patel-495/Online_Clothing_Store_Management" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', fontSize: '13px', fontWeight: '600', textDecoration: 'underline' }}>
                Github
              </a>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#222222', fontSize: '13px' }}>
              <li style={{ marginBottom: '2px' }}>Built a responsive e-commerce web application with user authentication, product catalog, shopping cart, wishlist, and order management.</li>
              <li style={{ marginBottom: '2px' }}>Designed and implemented a MySQL relational database to manage products, inventory, customer accounts, and order processing.</li>
              <li style={{ marginBottom: '2px' }}>Developed an admin dashboard for product management, inventory updates, order tracking, and customer management using Flask.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ color: '#1B365D', fontWeight: '700', fontSize: '13.5px' }}>
                Bank Management System <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#444444' }}>| Java, OOP Principles, Data Structures</span>
              </div>
              <a href="https://github.com/jalp-patel-495/Bank_Management_Sem-2" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', fontSize: '13px', fontWeight: '600', textDecoration: 'underline' }}>
                Github
              </a>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#222222', fontSize: '13px' }}>
              <li style={{ marginBottom: '2px' }}>Engineered a modular banking application using Java and OOP concepts, including Inheritance, Encapsulation, Polymorphism, and Abstraction.</li>
              <li style={{ marginBottom: '2px' }}>Implemented core banking operations such as account creation, deposits, withdrawals, balance inquiries, and transaction history.</li>
              <li style={{ marginBottom: '2px' }}>Applied efficient data structures and validation techniques to ensure secure account management and reliable transaction processing.</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div style={{ marginBottom: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ color: '#1B365D', fontWeight: '700', fontSize: '13.5px' }}>
                Theater Management System <span style={{ fontWeight: '400', fontStyle: 'italic', color: '#444444' }}>| Java, OOP Principles, Software Design</span>
              </div>
              <a href="https://github.com/jalp-patel-495/TheaterManagmentSystem__Sem1-1" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', fontSize: '13px', fontWeight: '600', textDecoration: 'underline' }}>
                Github
              </a>
            </div>
            <ul style={{ margin: '3px 0 0 0', paddingLeft: '18px', color: '#222222', fontSize: '13px' }}>
              <li style={{ marginBottom: '2px' }}>Developed a Java-based theater management application using object-oriented design principles and a modular architecture.</li>
              <li style={{ marginBottom: '2px' }}>Implemented seat reservation, ticket booking, show scheduling, and customer management with booking conflict prevention.</li>
              <li style={{ marginBottom: '2px' }}>Designed an intuitive interface and optimized booking workflows to improve ticket allocation accuracy and user experience.</li>
            </ul>
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
              </ul>
            </div>
            <div>
              <ul style={{ margin: 0, paddingLeft: '18px' }}>
                <li style={{ marginBottom: '3px' }}>Inheritance and Data Structures in Java – Univ. of Pennsylvania</li>
                <li style={{ marginBottom: '3px' }}>Java Class Library – LearnQuest</li>
                <li style={{ marginBottom: '3px' }}>Object-Oriented Hierarchies in Java – LearnQuest</li>
                <li style={{ marginBottom: '3px' }}>Introduction to HTML, CSS &amp; JavaScript – IBM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
