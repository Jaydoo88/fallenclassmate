import './USASchoolsPage.css';
import { useState } from 'react';
import Logo from './assets/logo.png';
import UsaMap from './assets/usa_map.png';

function USASchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredSchools = [
    { name: 'Lincoln High School', city: 'Phoenix, AZ' },
    { name: 'Roosevelt Academy', city: 'Tucson, AZ' },
    { name: 'Jefferson Prep', city: 'Flagstaff, AZ' },
  ];

  const filteredSchools = featuredSchools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" />
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Find School</a>
          <a href="#">Create Memorial</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="usa-hero" style={{ backgroundImage: `url(${UsaMap})` }}>
        <div className="usa-overlay-box">
          <h1>USA Schools</h1>
          <p><em>Explore schools and honor classmates across the country.</em></p>
          <input
            type="text"
            className="search-input"
            placeholder="Search by school or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="featured-schools">
        <h2>Featured Schools</h2>
        <div className="school-cards">
          {filteredSchools.map((school, index) => (
            <div className="card" key={index}>
              <h3>{school.name}</h3>
              <p>{school.city}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer usa-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </>
  );
}

export default USASchoolsPage;
