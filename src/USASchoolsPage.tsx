import './USASchoolsPage.css';
import Logo from './assets/logo.png';
import UsaMap from './assets/usa_map.png';

function USASchoolsPage() {
  return (
    <div className="usa-schools-page-container">
      {/* Sticky Nav */}
      <header className="usa-schools-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="#">Resources</a>
          <a href="#">Plans & Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Logo */}
      <section className="usa-schools-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="usa-schools-logo-img" />
      </section>
<div className="usa-schools-map-banner">
  <img src={UsaMap} alt="USA Map Banner" />
</div>
      {/* Content Placeholder */}
      <section className="usa-schools-content">
        <h2>Explore High Schools by State</h2>
        <p className="usa-schools-note">Select a state to view schools and tributes from that region.</p>

        {/* Example buttons — replace or expand with state list */}
        <div className="usa-schools-grid">
          <a className="state-tile" href="/schools/usa/arizona">Arizona</a>
          <a className="state-tile" href="/schools/usa/texas">Texas</a>
          <a className="state-tile" href="/schools/usa/california">California</a>
          <a className="state-tile" href="/schools/usa/florida">Florida</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="usa-schools-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default USASchoolsPage;
