import './ContactPage.css';
import Logo from './assets/logo.png';
import { useState } from 'react';

function ContactPage() {
  const [typeInquiry, setTypeInquiry] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [memorialName, setMemorialName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || `Contact Inquiry: ${typeInquiry}`);
    const mailBody = encodeURIComponent(
      `Type of Inquiry: ${typeInquiry}\nName: ${name}\nEmail: ${email}\nMemorial Name: ${memorialName}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:jaydoo88@yahoo.com?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-page-container">
      <header className="contact-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="/resources">Resources</a>
          <a href="/plans">Plans & Features</a>
          <a href="/about">About</a>
          <a href="/contact" className="active">Contact</a>
        </nav>
      </header>

      <section className="contact-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="contact-logo-img" />
      </section>

      <section className="contact-header-section">
        <h2>Contact Customer Support</h2>
        <p className="contact-intro">
          Have questions or ideas about FallenClassmate.com? Please use the contact form below,
          and a customer service representative will get back to you shortly.
        </p>
      </section>

      {submitted ? (
        <section className="thank-you-message">
          <h3>Thank you for contacting us!</h3>
          <p>We will get back to you shortly.</p>
        </section>
      ) : (
        <section className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
          
            <div className="form-row">
  <label htmlFor="typeInquiry">Type of Inquiry</label>
  <select
    id="typeInquiry"
    value={typeInquiry}
    onChange={(e) => setTypeInquiry(e.target.value)}
    required
  >
    <option value="" disabled>
      Make a selection...
    </option>
    <option value="General Question">General Question</option>
    <option value="Billing Question">Billing Question</option>
    <option value="Suggestion for FallenClassmate">Suggestion for FallenClassmate</option>
    <option value="Share Feedback">Share Feedback</option>
    <option value="Testimonials">Testimonials</option>
    <option value="Other">Other</option>
  </select>
</div>
            <div className="form-row half-width">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row half-width">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-row half-width">
              <label htmlFor="emailConfirm">Re-enter Email</label>
              <input
                id="emailConfirm"
                type="email"
                placeholder="Re-enter email"
                value={emailConfirm}
                onChange={(e) => setEmailConfirm(e.target.value)}
                required
              />
            </div>

            <div className="form-row half-width">
  <label htmlFor="classmateName">Classmate Name <small>(if applies)</small></label>
  <input
    id="classmateName"
    type="text"
    placeholder="Classmate's name"
    value={memorialName}   // keep state variable name as is or rename if you want
    onChange={(e) => setMemorialName(e.target.value)}
  />
</div>

            <div className="form-row full-width">
              <label htmlFor="subject">Your Message</label>
              <input
                id="subject"
                type="text"
                placeholder="Please add your subject here"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-row full-width">
              <textarea
                id="message"
                placeholder="Please enter the specific details of your request. Please provide as much information as possible so we can help you quickly."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>

          <aside className="contact-sidebar">
  <div className="sidebar-box">
    <h3>Learn more about FallenClassmate</h3>
    <p>
      Discover how FallenClassmate helps honor memories and connect communities.
      <br />
      <a href="/about" className="sidebar-link">About Us</a>
    </p>
  </div>
</aside>
        </section>
      )}

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </div>
  );
}

export default ContactPage;
