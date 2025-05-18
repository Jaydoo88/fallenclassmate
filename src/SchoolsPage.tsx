import './SchoolsPage.css';
import Logo from './assets/logo.png';

function SchoolsPage() {
  return (
    <>
      <header className="navbar">
        <div className="nav-logo logo-box">
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

      <section className="schools-hero">
        <div className="schools-hero-box">
          <h1>Find a School</h1>
          <p className="schools-subtext">
            <em>Search for your school and honor the classmates we've lost.</em>
          </p>
          <div className="schools-search-bar">
            <input type="text" placeholder="Find a Classmate or School" />
          </div>
        </div>
      </section>

      <section className="schools-listing">
        <div className="card">
          <h3>Lincoln High School</h3>
          <p>Phoenix, Arizona</p>
        </div>
        <div className="card">
          <h3>Roosevelt Academy</h3>
          <p>Tucson, Arizona</p>
        </div>
        <div className="card">
          <h3>Jefferson Prep</h3>
          <p>Flagstaff, Arizona</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </>
  );
}

export default SchoolsPage;
