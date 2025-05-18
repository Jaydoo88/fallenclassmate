import './SchoolsPage.css';
import { useState } from 'react';
import Logo from './assets/logo.png';
import UsaMap from './assets/usa_map.png';
import AsiaMap from './assets/asia_map.jpg';

function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const schools = [
    { name: 'Lincoln High School', city: 'Phoenix, AZ' },
    { name: 'Roosevelt Academy', city: 'Tucson, AZ' },
    { name: 'Jefferson Prep', city: 'Flagstaff, AZ' },
  ];

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="schools-page-container">
      {/* Sticky navbar */}
      <header className="schools-navbar">
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
      <section className="schools-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="schools-logo-img" />
      </section>

      {/* Map Section */}
      <section className="schools-map-section">
        <div className="map-item">
          <h3>USA High Schools</h3>
          <img src={UsaMap} alt="USA High Schools Map" />
        </div>
        <div className="map-item">
          <h3>Overseas and Other High Schools</h3>
          <img src={AsiaMap} alt="Overseas High Schools Map" />
        </div>
      </section>

      {/* Search */}
      <div className="schools-search-bar">
        <input
          type="text"
          placeholder="Search for a School"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* School Listing */}
      <section className="schools-listing">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school, index) => (
            <div className="schools-card" key={index}>
              <h3>{school.name}</h3>
              <p>{school.city}</p>
            </div>
          ))
        ) : (
          <p className="schools-no-results">No schools found.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="schools-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default SchoolsPage;
