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
          <a href="/resources">Resources</a>
          <a href="/plans">Plans & Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Logo */}
      <section className="usa-schools-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="usa-schools-logo-img" />
      </section>
<div className="usa-schools-map-banner">
  <h3 className="usa-map-title">USA High Schools</h3>
  <img src={UsaMap} alt="USA Map Banner" />
</div>
      {/* Content Placeholder */}
      <section className="usa-schools-content">
        <h2>Explore High Schools by State</h2>
        <p className="usa-schools-note">Select a state to view schools and memorials from that region.</p>

        {/* Example buttons — replace or expand with state list */}
        <div className="usa-schools-grid">
  <a className="state-tile" href="/schools/usa/alabama">Alabama</a>
  <a className="state-tile" href="/schools/usa/alaska">Alaska</a>
  <a className="state-tile" href="/schools/usa/arizona">Arizona</a>
  <a className="state-tile" href="/schools/usa/arkansas">Arkansas</a>
  <a className="state-tile" href="/schools/usa/california">California</a>
  <a className="state-tile" href="/schools/usa/colorado">Colorado</a>
  <a className="state-tile" href="/schools/usa/connecticut">Connecticut</a>
  <a className="state-tile" href="/schools/usa/delaware">Delaware</a>
  <a className="state-tile" href="/schools/usa/florida">Florida</a>
  <a className="state-tile" href="/schools/usa/georgia">Georgia</a>
  <a className="state-tile" href="/schools/usa/hawaii">Hawaii</a>
  <a className="state-tile" href="/schools/usa/idaho">Idaho</a>
  <a className="state-tile" href="/schools/usa/illinois">Illinois</a>
  <a className="state-tile" href="/schools/usa/indiana">Indiana</a>
  <a className="state-tile" href="/schools/usa/iowa">Iowa</a>
  <a className="state-tile" href="/schools/usa/kansas">Kansas</a>
  <a className="state-tile" href="/schools/usa/kentucky">Kentucky</a>
  <a className="state-tile" href="/schools/usa/louisiana">Louisiana</a>
  <a className="state-tile" href="/schools/usa/maine">Maine</a>
  <a className="state-tile" href="/schools/usa/maryland">Maryland</a>
  <a className="state-tile" href="/schools/usa/massachusetts">Massachusetts</a>
  <a className="state-tile" href="/schools/usa/michigan">Michigan</a>
  <a className="state-tile" href="/schools/usa/minnesota">Minnesota</a>
  <a className="state-tile" href="/schools/usa/mississippi">Mississippi</a>
  <a className="state-tile" href="/schools/usa/missouri">Missouri</a>
  <a className="state-tile" href="/schools/usa/montana">Montana</a>
  <a className="state-tile" href="/schools/usa/nebraska">Nebraska</a>
  <a className="state-tile" href="/schools/usa/nevada">Nevada</a>
  <a className="state-tile" href="/schools/usa/new-hampshire">New Hampshire</a>
  <a className="state-tile" href="/schools/usa/new-jersey">New Jersey</a>
  <a className="state-tile" href="/schools/usa/new-mexico">New Mexico</a>
  <a className="state-tile" href="/schools/usa/new-york">New York</a>
  <a className="state-tile" href="/schools/usa/north-carolina">North Carolina</a>
  <a className="state-tile" href="/schools/usa/north-dakota">North Dakota</a>
  <a className="state-tile" href="/schools/usa/ohio">Ohio</a>
  <a className="state-tile" href="/schools/usa/oklahoma">Oklahoma</a>
  <a className="state-tile" href="/schools/usa/oregon">Oregon</a>
  <a className="state-tile" href="/schools/usa/pennsylvania">Pennsylvania</a>
  <a className="state-tile" href="/schools/usa/rhode-island">Rhode Island</a>
  <a className="state-tile" href="/schools/usa/south-carolina">South Carolina</a>
  <a className="state-tile" href="/schools/usa/south-dakota">South Dakota</a>
  <a className="state-tile" href="/schools/usa/tennessee">Tennessee</a>
  <a className="state-tile" href="/schools/usa/texas">Texas</a>
  <a className="state-tile" href="/schools/usa/utah">Utah</a>
  <a className="state-tile" href="/schools/usa/vermont">Vermont</a>
  <a className="state-tile" href="/schools/usa/virginia">Virginia</a>
  <a className="state-tile" href="/schools/usa/washington">Washington</a>
  <a className="state-tile" href="/schools/usa/west-virginia">West Virginia</a>
  <a className="state-tile" href="/schools/usa/wisconsin">Wisconsin</a>
  <a className="state-tile" href="/schools/usa/wyoming">Wyoming</a>
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
