import './SchoolsPage.css';
import { useState } from 'react';

function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Example static data — replace with API or real data later
  const schools = [
    { name: 'Lincoln High School', city: 'Phoenix, AZ' },
    { name: 'Roosevelt Academy', city: 'Tucson, AZ' },
    { name: 'Jefferson Prep', city: 'Flagstaff, AZ' },
  ];

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="school-page">
      <div className="school-header">
        <h1>Find a School</h1>
        <p>Search and explore schools to honor fallen classmates.</p>
      </div>

      <div className="school-search">
        <input
          type="text"
          placeholder="Find a Classmate or School"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="school-list">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school, index) => (
            <div className="school-card" key={index}>
              <h3>{school.name}</h3>
              <p>{school.city}</p>
            </div>
          ))
        ) : (
          <p>No schools found.</p>
        )}
      </div>
    </div>
  );
}

export default SchoolsPage;
