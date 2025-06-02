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
✅ AddSchoolForm.css
css
Copy
Edit
.add-school-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
}

.add-school-form input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}

.add-school-form button {
  background-color: #3b9996;
  color: white;
  border: none;
  padding: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}

.add-school-form button:hover {
  background-color: #317f7c;
}

.form-status {
  margin-top: 10px;
  font-style: italic;
  color: #444;
  text-align: center;
}
