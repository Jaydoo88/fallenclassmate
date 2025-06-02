import './AddSchoolPage.css';
import './AddSchoolForm.css';
import AddSchoolForm from './AddSchoolForm';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function AddSchoolPage() {
  return (
    <div className="add-school-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/schools">Schools</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/plans">Plans & Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/add-school">Add a School</Link>
        </nav>
      </header>

      {/* FORM SECTION */}
      <section className="form-section">
        <h2>Add a School</h2>
        <p>Help us grow the database. Please enter accurate information to support others creating memorials.</p>
        <AddSchoolForm />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </div>
  );
}

export default AddSchoolPage;
