import './ResourcesPage.css'; // ✅ Use the same CSS structure for consistency
import AddSchoolForm from './AddSchoolForm';
import Logo from './assets/logo.png';

function AddSchoolPage() {
  return (
    <div className="resources-page-container">
      <header className="resources-navbar">
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

      <section className="resources-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="resources-logo-img" />
      </section>

      <section className="resources-hero">
        <h2 className="resources-hero-title">Add a School</h2>
        <p className="resources-hero-subtext">
          Help us grow the database. Please enter accurate information to support others creating memorials.
        </p>
      </section>

      <section className="form-section">
        <AddSchoolForm />
      </section>

      <footer className="resources-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default AddSchoolPage;
