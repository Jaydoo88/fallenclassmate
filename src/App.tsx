import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import HeroImage from './assets/hero.jpg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              placeholder="FIND A CLASSMATE"
              onChange={handleSearch}
            />
            <span className="search-icon">&#128269;</span>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>
        </div>

        <div className={`navbar ${menuOpen ? 'open' : ''}`}>
          <nav>
            <a href="#">Home</a>
            <a href="#">Schools</a>
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
  <a className="button primary" href="#">Find a School</a>
  <a className="button primary" href="#">Add a Tribute</a>
</div>
          </div>
       </section>

      <section className="spacer-section"></section>

      <section className="quote-section">
  <blockquote>
    <p><em>“To live in hearts we leave behind is not to die.”<br />— Thomas Campbell</em></p>
  </blockquote>
</section>

      <section className="newest-classmates">
        <h2>Newest Classmates Added</h2>
        <div className="classmate-grid">
          <div className="classmate-card">
            <img src="/assets/sample1.jpg" alt="Classmate 1" />
            <h4>Jessica Moore</h4>
            <p>Lincoln High School</p>
          </div>
          <div className="classmate-card">
            <img src="/assets/sample2.jpg" alt="Classmate 2" />
            <h4>Andre Johnson</h4>
            <p>River Valley High</p>
          </div>
          <div className="classmate-card">
            <img src="/assets/sample3.jpg" alt="Classmate 3" />
            <h4>Sophia Lee</h4>
            <p>West Ridge Academy</p>
          </div>
          <div className="classmate-card">
            <img src="/assets/sample4.jpg" alt="Classmate 4" />
            <h4>Marcus Allen</h4>
            <p>Eastbrook High School</p>
          </div>
        </div>
      </section>

      <section className="info-cards">
        <div className="card">
          <h3>Honor a Classmate</h3>
          <p>Share stories and moments that celebrate the lives of those we've lost.</p>
        </div>
        <div className="card">
          <h3>Reconnect & Reflect</h3>
          <p>Remember familiar faces, revisit shared memories, and rekindle bonds.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • A place to remember, reconnect, and reflect.</p>
      </footer>
    </>
  );
}

export default App;
