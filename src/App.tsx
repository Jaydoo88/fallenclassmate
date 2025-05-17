import './App.css';
import Logo from './assets/logo.png';

function App() {
  return (
    <>
      <header className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="FallenClassmate Logo" />
          <span>FallenClassmate</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Find School</a>
          <a href="#">Create Memorial</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero-banner">
        <div className="overlay">
          <h1>Never Forget</h1>
          <p>A place to honor and remember classmates who have passed, from every school and every era.</p>
          <div className="hero-buttons">
            <a className="button primary" href="#">Find Your School</a>
            <a className="button secondary" href="#">Create Memorial</a>
          </div>
        </div>
      </section>

      <section className="quote-block">
        <blockquote>
          “To live in hearts we leave behind is not to die.”<br />
          <cite>— Thomas Campbell</cite>
        </blockquote>
      </section>

      <section className="features">
        <div className="card">
          <h3>📘 Search Schools</h3>
          <p>Browse by year, location, or base to find your classmates.</p>
        </div>
        <div className="card">
          <h3>🕊️ Create a Tribute</h3>
          <p>Upload stories, photos, and memories for others to see.</p>
        </div>
        <div className="card">
          <h3>🌸 Send Flowers</h3>
          <p>Place a digital flower or token on any memorial page.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate &mdash; Never Forget</p>
      </footer>
    </>
  );
}

export default App;
