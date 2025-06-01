import './SchoolsPage.css';
import { useState, useEffect } from 'react';
import Logo from './assets/logo.png';
import UsaMap from './assets/usa_map.png';
import AsiaMap from './assets/asia_map.jpg';

function SchoolsPage() {
  const [highlight, setHighlight] = useState('');

  const messages = [
    "West Point High School has over 60 classmates memorialized from 1980 to 2020.",
    "Over 12,000 tributes have been posted by classmates across all regions.",
    "Cleveland High’s Class of ’99 has a full wall of memory submitted by alumni.",
    "Lincoln High in Phoenix has 24 tributes and 14 shared memories.",
    "Many DoDEA schools overseas have listings from multiple countries and decades.",
  ];

  const schools = [
    { name: 'Lincoln High School', city: 'Phoenix, AZ' },
    { name: 'Roosevelt Academy', city: 'Tucson, AZ' },
    { name: 'Jefferson Prep', city: 'Flagstaff, AZ' },
  ];

  useEffect(() => {
    setHighlight(messages[Math.floor(Math.random() * messages.length)]);
    const interval = setInterval(() => {
      setHighlight(messages[Math.floor(Math.random() * messages.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="schools-page-container">
      <header className="schools-navbar">
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

      <section className="schools-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="schools-logo-img" />
      </section>

      <section className="schools-map-section">
        <div className="map-item">
          <h3>USA High Schools</h3>
          <a href="/schools/usa">
            <img src={UsaMap} alt="USA High Schools Map" />
          </a>
        </div>
        <div className="map-item">
          <h3>Overseas and Other High Schools</h3>
          <a href="/schools/overseas">
            <img src={AsiaMap} alt="Overseas High Schools Map" />
          </a>
        </div>
      </section>

      <section className="schools-featured">
        <h2>Newly Added Schools</h2>
        <div className="schools-listing">
          {schools.slice(-3).reverse().map((school, index) => (
            <div className="schools-card" key={index}>
              <h3>{school.name}</h3>
              <p>{school.city}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="schools-spotlight">
        <h2>Did You Know?</h2>
        <div className="spotlight-box">
          <p>{highlight}</p>
        </div>
      </section>

      <footer className="schools-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default SchoolsPage;
