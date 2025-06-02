import './AddSchoolForm.css';
import AddSchoolForm from './AddSchoolForm';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom'; // ✅ Fix: Import Link properly

function AddSchoolPage() {
  return (
    <div className="add-school-page">
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" />
        </div>
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

      <section className="form-section">
  <h2>Add a School</h2>
  <p>This is a test message to confirm the page loads correctly.</p>
  {/* <AddSchoolForm /> */}
</section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </div>
  );
}

export default AddSchoolPage;
