import './SchoolsPage.css';
import { useState } from 'react';
import Logo from './assets/logo.png';

function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy school data
  const schools = [
    { name: 'Lincoln High School', city: 'Phoenix, AZ' },
    { name: 'Roosevelt Academy', city: 'Tucson, AZ' },
    { name: 'Jefferson Prep', city: 'Flagstaff, AZ' },
  ];

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      {/* Sticky Top Nav */}
      <header className="navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="#">Resources</a>
          <a href="#">Plans & Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Logo Row */}
      <section className="logo-bar">
        <div className="logo-section">
          <img src={Logo} alt="FallenClassmate Logo" />
        </div>
      </section>

      {/* Cap Row and Search */}
      <section className="cap-row">
        {[...Array(20)].map((_, i) => (
          <span key={i} className={`fade-${i + 1} offset-${i % 3}`}>🎓</span>
        ))}
        <div className="search-container">
          <input
            type="text"
            placeholder="FIND A CLASSMATE OR SCHOOL"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </section>

      {/* School Listings */}
      <section className="schools-listing">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school, index) => (
            <div className="card" key={index}>
              <h3>{school.name}</h3>
              <p>{school.city}</p>
            </div>
          ))
        ) : (
          <p>No schools found.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default SchoolsPage;
