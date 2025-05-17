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
          <a href="#">Find Your School</a>
          <a href="#">Create Memorial</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Never Forget</h1>
          <p>A memorial platform to honor fallen classmates across the world.</p>
          <div className="hero-buttons">
            <a className="button" href="#">Find Your School</a>
            <a className="button secondary" href="#">Create Memorial</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} FallenClassmate. All rights reserved.
      </footer>
    </>
  );
}

export default App;
