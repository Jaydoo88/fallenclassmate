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
          We’re based in Avondale, AZ. Use the form below to send us a message.
        </p>
      </section>

      <section className="contact-form-section">
        <iframe
          title="Contact Form"
          src="https://form.jotform.com/251395007217150"
          frameBorder="0"
          style={{ width: '100%', height: '600px', border: 'none' }}
          scrolling="no"
        />
      </section>

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ContactPage;
