import './App.css';
import Logo from './assets/logo.png';

function App() {
  return (
    <>
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" className="logo-img" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Find School</a>
          <a href="#">Create Memorial</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero-image">
        <div className="hero-overlay">
          <h1>Never Forget</h1>
          <p><em>Though gone, their memory walks our halls.</em></p>
          <div className="hero-buttons">
            <a className="button primary" href="#">Find Your School</a>
            <a className="button secondary" href="#">Create Memorial</a>
          </div>
        </div>
        <img src="/images/cloud-divider.png" className="cloud-divider" alt="Cloud Divider" />
      </section>

      <section className="info-cards">
        <div className="card">
          <h3>Honor a Memory</h3>
          <p>Create a lasting memorial for a classmate and share their story.</p>
        </div>
        <div className="card quote">
          <blockquote>
            “To live in hearts we leave behind is not to die.”<br />— Thomas Campbell
          </blockquote>
        </div>
        <div className="card">
          <h3>Reconnect</h3>
          <p>Find your school, remember those lost, and reconnect with old friends.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate &mdash; Never Forget</p>
      </footer>
    </>
  );
}

export default App;
