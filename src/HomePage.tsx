import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import HeroImage from './assets/Casket1.jpg';
import Sample1 from './assets/Sample1.jpg';
import Sample2 from './assets/Sample2.jpg';
import Sample3 from './assets/Sample3.jpg';
import Sample4 from './assets/Sample4.jpg';

function HomePage() {
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
              {/* 🎓 emojis here */}
              {[...Array(15)].map((_, i) => (
                <span key={i} className={`fade-${i + 1} offset-${i % 3}`}>🎓</span>
              ))}
            </div>
          </div>

          <div className="search-section">
            <div className="search-container">
              <input
                type="text"
                className="styled-search-input"
                placeholder="Find a Classmate or School"
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
  <div className="page-container">
    <nav>
      <a href="/">Home</a>
      <a href="/schools">Schools</a>
      <a href="#">Resources</a>
      <a href="#">Plans & Features</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </div>
</div>
      </header>

      <section className="hero-image" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay-box">
          <h1>Never Forget!</h1>
          <p className="hero-sub"><em>Gone from the halls, never from our hearts.</em></p>
          <div className="hero-buttons">
            <a className="button primary" href="/schools">Find a School</a>
            <a className="button primary" href="#">Create Memorial</a>
          </div>
        </div>
      </section>

      <section className="community-stats">
        <h2>Together in Tribute</h2>
        <div className="stats-grid">
          <div><h3>276</h3><p>Classmates</p></div>
          <div><h3>228</h3><p>Viewers</p></div>
          <div><h3>716</h3><p>Shared Memories</p></div>
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

export default HomePage;
