import './AddSchoolPage.css';
import AddSchoolForm from './AddSchoolForm';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function AddSchoolPage() {
  return (
    <div className="add-school-page-container">
      <header className="add-school-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="/resources">Resources</a>
          <a href="/plans">Plans & Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <Link to="/add-school">Add a School</Link>
        </nav>
      </header>

      <section className="add-school-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="add-school-logo-img" />
      </section>

      <section className="form-section">
        <h2 className="add-school-title">Add a School</h2>
        <p className="add-school-subtext">
          Help us grow the database. Please enter accurate information to support others creating memorials.
        </p>
        <AddSchoolForm />
      </section>

      <footer className="add-school-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </div>
  );
}

export default AddSchoolPage;
