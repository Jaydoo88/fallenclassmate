import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import HeroImage from './assets/hero.jpg';
import Sample1 from './assets/Sample1.jpg';
import Sample2 from './assets/Sample2.jpg';
import Sample3 from './assets/Sample3.jpg';
import Sample4 from './assets/Sample4.jpg';

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
    <div className="page-container">
      <header>
        <div className="logo-bar">
          <div className="logo-section">
            <img src={Logo} alt="FallenClassmate Logo" />
          </div>

          <div className="center-section">
            <div className="cap-row">
              <span className="fade-1 offset-2">🎓</span>
              <span className="fade-2 offset-1">🎓</span>
              <span className="fade-3 offset-0">🎓</span>
              <span className="fade-4 offset-1">🎓</span>
              <span className="fade-5 offset-2">🎓</span>
              <span className="fade-6 offset-1">🎓</span>
              <span className="fade-7 offset-0">🎓</span>
              <span className="fade-8 offset-1">🎓</span>
              <span className="fade-9 offset-2">🎓</span>
              <span className="fade-10 offset-1">🎓</span>
              <span className="fade-11 offset-0">🎓</span>
              <span className="fade-12 offset-1">🎓</span>
              <span className="fade-13 offset-2">🎓</span>
              <span className="fade-14 offset-1">🎓</span>
              <span className="fade-15 offset-0">🎓</span>
            </div>
          </div>

          <div className="search-section">
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

      <section className="community-stats">
  <h2>Together in Tribute</h2>
  <div className="stats-grid">
    <div>
      <h3>276,676</h3>
      <p>Classmates</p>
    </div>
    <div>
      <h3>228,781,383</h3>
      <p>Viewers</p>
    </div>
    <div>
      <h3>5,716,300</h3>
      <p>Shared Memories</p>
    </div>
  </div>
</section>

<section className="newest-classmates">
  <h2>Newest Classmates Added</h2>
  <div className="classmate-grid">
    <div className="classmate-card">
      <img src={Sample1} alt="Classmate 1" />
      <h4>Jessica Moore</h4>
      <p>Lincoln High School</p>
    </div>
    <div className="classmate-card">
      <img src={Sample2} alt="Classmate 2" />
      <h4>Andre Johnson</h4>
      <p>River Valley High</p>
    </div>
    <div className="classmate-card">
      <img src={Sample3} alt="Classmate 3" />
      <h4>Sophia Lee</h4>
      <p>West Ridge Academy</p>
    </div>
    <div className="classmate-card">
      <img src={Sample4} alt="Classmate 4" />
      <h4>Marcus Allen</h4>
      <p>Eastbrook High School</p>
    </div>
  </div>
</section>
 
<section className="quote-section">
        <blockquote>
          <p><em>“To live in hearts we leave behind is not to die.”<br />— Thomas Campbell</em></p>
        </blockquote>
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
    </div>
  );
}

export default App;
