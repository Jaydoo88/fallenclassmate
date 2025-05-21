import './ContactPage.css';
import Logo from './assets/logo.png';
import { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:jaydoo88@yahoo.com?subject=${subject}&body=${body}`;
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

      <section className="contact-hero">
        <img src={Logo} alt="FallenClassmate Logo" className="contact-hero-logo" />
        <h1>Contact FallenClassmate</h1>
        <p>We’re here for you. Reach out with questions, memories, or support.</p>
      </section>

      <section className="contact-form-section">
        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for reaching out!</h2>
            <p>We appreciate your message and will get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </section>

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </div>
  );
}

export default ContactPage;
