import './OverseasSchoolsPage.css';
import Logo from './assets/logo.png';
import AsiaMap from './assets/asia_map.jpg';

function OverseasSchoolsPage() {
  return (
    <div className="overseas-schools-page-container">
      {/* Navigation */}
      <header className="usa-schools-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="/resources">Resources</a>
          <a href="/plans">Plans & Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/add-school">Add a School</a>
        </nav>
      </header>

      {/* Logo */}
      <section className="usa-schools-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="usa-schools-logo-img" />
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <h3 className="hero-title">Overseas High Schools</h3>
        <img className="map-image" src={AsiaMap} alt="Overseas Map" />
      </section>

      {/* Explore Section */}
      <section className="usa-schools-content">
        <h2>Explore High Schools by Country</h2>
        <p className="usa-schools-note">Select a Country to view schools and memorials from that region.</p>
      </section>

      {/* Button Grid */}
      <section className="state-grid">
        <a className="state-tile" href="/schools/overseas/germany">Germany</a>
        <a className="state-tile" href="/schools/overseas/united-kingdom">United Kingdom</a>
        <a className="state-tile" href="/schools/overseas/italy">Italy</a>
        <a className="state-tile" href="/schools/overseas/spain">Spain</a>
        <a className="state-tile" href="/schools/overseas/puerto-rico">Puerto Rico</a>

        <a className="state-tile" href="/schools/overseas/netherlands">Netherlands</a>
        <a className="state-tile" href="/schools/overseas/cuba">Cuba</a>
        <a className="state-tile" href="/schools/overseas/belgium">Belgium</a>
        <a className="state-tile" href="/schools/overseas/turkey">Turkey</a>
        <a className="state-tile" href="/schools/overseas/japan">Japan</a>

        <a className="state-tile" href="/schools/overseas/korea">Korea</a>
        <a className="state-tile" href="/schools/overseas/guam">Guam</a>
        <a className="state-tile" href="/schools/overseas/bahrain">Bahrain</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default OverseasSchoolsPage;
