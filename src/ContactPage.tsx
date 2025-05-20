import './ContactPage.css';
import Logo from './assets/logo.png';

function ContactPage() {
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
          Reach out to us with questions, feedback, or ideas. We're here to help and listen.
        </p>
      </section>

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ContactPage;
