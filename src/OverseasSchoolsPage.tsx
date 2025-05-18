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
          <a href="#">Resources</a>
          <a href="#">Plans & Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Logo */}
      <section className="usa-schools-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="usa-schools-logo-img" />
      </section>

      {/* Hero Section with Map */}
      <section className="hero-section">
        <h1>Overseas High Schools</h1>
        <img className="map-image" src={AsiaMap} alt="Overseas Map" />
      </section>

      {/* Grid of Countries */}
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
