import './AddSchoolForm.css';
import './ResourcesPage.css'; // Use consistent layout
import Logo from './assets/logo.png';
import AddSchoolForm from './AddSchoolForm';

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
          Help us expand the FallenClassmate directory. By submitting a school, you help classmates build lasting memorials, reconnect, and honor those we've lost.
        </p>
      </section>

      <section className="resources-cards-container">
        <div className="resource-card">
          <AddSchoolForm />
        </div>
      </section>

      <footer className="resources-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default AddSchoolPage;
