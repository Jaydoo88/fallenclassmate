import React from 'react';
import './OverseasSchoolsPage.css';
import Logo from './assets/logo.png';
import AsiaMap from './assets/asia_map.jpg';

function OverseasSchoolsPage() {
  return (
    <div className="overseas-schools-page-container">
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/schools/usa">Find School</a>
          <a href="/create">Create Memorial</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Overseas High Schools</h1>
        <img className="map-image" src={AsiaMap} alt="Overseas Map" />
      </section>

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

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </div>
  );
}

export default OverseasSchoolsPage;
