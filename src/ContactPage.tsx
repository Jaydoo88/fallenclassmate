import './ContactPage.css';
import Logo from './assets/logo.png';
import { useState } from 'react';

function ContactPage() {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link
    const subject = encodeURIComponent(`Contact from ${fromName}`);
    const body = encodeURIComponent(`Name: ${fromName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`);

    // Open default mail client with prefilled fields
    window.location.href = `mailto:jaydoo88@yahoo.com?subject=${subject}&body=${body}`;
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
          We’re based in Avondale, AZ. Send us a message using the form below.
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ContactPage;
