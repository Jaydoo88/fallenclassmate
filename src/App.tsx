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

      <section className="hero-image">
        <div className="hero-overlay">
          <h1>Never Forget</h1>
          <p>A place to honor and remember classmates who have passed, from every school and every era.</p>
          <div className="hero-buttons">
            <a className="button primary" href="#">Find Your School</a>
            <a className="button secondary" href="#">Create Memorial</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate — Never Forget</p>
      </footer>
    </>
  );
}

export default App;
