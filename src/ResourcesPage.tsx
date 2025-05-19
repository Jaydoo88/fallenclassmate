import './ResourcesPage.css';
import Logo from './assets/logo.png';

function ResourcesPage() {
  return (
    <div className="resources-page-container">
      <header className="resources-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="/resources">Resources</a>
          <a href="#">Plans & Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="resources-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="resources-logo-img" />
      </section>

      <section className="resources-header-section">
        <h2 className="resources-header-title">Support & Healing Resources</h2>
        <p className="resources-header-subtext">Tools, guides, and information to help honor and remember.</p>
      </section>

      <footer className="resources-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ResourcesPage;
