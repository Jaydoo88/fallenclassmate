import './ResourcesPage.css';
import Logo from './assets/logo.png';

function ResourcesPage() {
  return (
    <>
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Find School</a>
          <a href="/create-memorial">Create Memorial</a>
          <a href="/about">About</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="resources-hero">
        <div className="resources-overlay">
          <h1>Support & Healing</h1>
          <p className="resources-subtext">Guidance and resources to help you honor and remember.</p>
        </div>
      </section>

      <section className="resources-content">
        <div className="resource-card">
          <h3>How to Create a Memorial</h3>
          <p>Step-by-step guide for creating a respectful and heartfelt tribute to a classmate.</p>
          <a className="button" href="/create-memorial">Create Memorial</a>
        </div>

        <div className="resource-card">
          <h3>Grief Support</h3>
          <p>Access hotlines, grief counselors, and communities that understand loss.</p>
          <a className="button" href="#">View Support Options</a>
        </div>

        <div className="resource-card">
          <h3>Writing a Tribute</h3>
          <p>Tips and examples to help you write a meaningful message, story, or letter.</p>
          <a className="button" href="#">Tribute Writing Guide</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </>
  );
}

export default ResourcesPage;
