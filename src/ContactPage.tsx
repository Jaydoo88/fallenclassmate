import './ContactPage.css';
import Logo from './assets/logo.png';
import { useState } from 'react';

function ContactPage() {
  const [from_name, setFromName] = useState('');
  const [from_email, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ from_name, from_email, message }),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFromName('');
      setFromEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message. Please try again.');
    }
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
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="contact-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="contact-logo-img" />
      </section>

      <section className="contact-header-section">
        <h2 className="contact-header-title">Contact Us</h2>
        <p className="contact-header-subtext">
          We’re based in Avondale, AZ. Use the form below to get in touch.
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={from_name}
            onChange={(e) => setFromName(e.target.value)}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={from_email}
            onChange={(e) => setFromEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-button">Send Message</button>
          <p className="status-text">{status}</p>
        </form>
      </section>

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ContactPage;
