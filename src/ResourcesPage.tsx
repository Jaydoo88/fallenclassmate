import './ResourcesPage.css';
import Logo from './assets/logo.png';
import UsaMap from './assets/usa_map.png';
import AsiaMap from './assets/asia_map.jpg';

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

      <section className="resources-map-section">
        <div className="map-item">
          <h3>USA Grief & Tribute Resources</h3>
          <a href="/resources/usa">
            <img src={UsaMap} alt="USA Resources Map" />
          </a>
        </div>
        <div className="map-item">
          <h3>Overseas & Global Resources</h3>
          <a href="/resources/overseas">
            <img src={AsiaMap} alt="Overseas Resources Map" />
          </a>
        </div>
      </section>

      <section className="resources-featured">
        <h2>Featured Resources</h2>
        <div className="resources-listing">
          {/* Placeholder for future content */}
        </div>
      </section>

      <section className="resources-spotlight">
        <h2>Did You Know?</h2>
        <div className="spotlight-box">
          <p>Helpful information and stories will appear here soon.</p>
        </div>
      </section>

      <footer className="resources-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ResourcesPage;
