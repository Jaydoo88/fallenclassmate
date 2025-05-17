import './App.css';
import Logo from './assets/logo.png';
import HeroImage from './assets/hero.jpg';

function App() {
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const elements = document.querySelectorAll('body *');
    elements.forEach(el => {
      if (el.textContent?.toLowerCase().includes(query)) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  };

  return (
    <>
      <header>
        <div className="logo-bar">
          <div className="logo-left">
            <img src={Logo} alt="FallenClassmate Logo" />
          </div>
          <div className="search-container">
            <input
              type="text"
              className="styled-search-input"
              placeholder="Find A Classmate"
              onChange={handleSearch}
            />
            <span className="search-icon">&#128269;</span>
          </div>
        </div>

        <div className="navbar">
          <nav>
            <a href="#">Home</a>
            <a href="#">Resources</a>
            <a href="#">Plans & Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero-image" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay-box">
          <h1>Never Forget!</h1>
          <p className="hero-sub"><em>Gone from the halls, never from our hearts.</em></p>
          <div className="hero-buttons">
            <a className="button primary" href="#">Find Your School</a>
            <a className="button primary" href="#">Create Memorial</a>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <blockquote>
          “To live in hearts we leave behind is not to die.”<br />— Thomas Campbell
        </blockquote>
      </section>

      <section className="info-cards">
        <div className="card">
          <h3>Honor a Memory</h3>
          <p>Create a lasting memorial for a classmate and share their story.</p>
        </div>
        <div className="card">
          <h3>Reconnect</h3>
          <p>Find your school, remember those lost, and reconnect with old friends.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </>
  );
}

export default App;
