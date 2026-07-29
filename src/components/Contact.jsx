import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ msg: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus({ msg: 'Please fill in all the input fields.', type: 'error' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ msg: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ msg: 'Sending message...', type: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'c1ab8067-dd4f-452c-9a7d-9908c1a99ca1';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: `${name} (via Portfolio)`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          msg: 'Thank you! Your message has been sent successfully.',
          type: 'success'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          msg: result.message || 'Form submission failed. Please check your Web3Forms access key.',
          type: 'error'
        });
      }
    } catch (error) {
      setStatus({
        msg: 'Network error. Please check your internet connection and try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-intro">
            <h3>Let's Connect & Collaborate</h3>
            <p>
              Whether you have a project idea, want to discuss software engineering, or just want to say hi—my inbox is always open.
            </p>
          </div>
          <div className="contact-details">
            <a href="mailto:jalppatel1580@gmail.com" className="contact-item contact-card-link">
              <div className="contact-icon">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h4>Email Me</h4>
                <p>jalppatel1580@gmail.com</p>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-icon">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Gujarat, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon status-icon">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h4>Availability</h4>
                <p>
                  <span className="pulse-dot"></span> Open for Roles & Internships
                </p>
              </div>
            </div>
          </div>
          <div className="social-links-wrapper">
            <h4>Connect on Socials</h4>
            <div className="social-links">
              <a
                href="https://github.com/jalp-patel-495"
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
                title="GitHub"
              >
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jalp-patel-8572b8339/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
                title="LinkedIn"
              >
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3 className="form-title">Send a Direct Message</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                className="form-input"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
            </div>
            <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
            {status.msg && (
              <div
                className={`form-status ${status.type}`}
                style={{ display: 'block' }}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
