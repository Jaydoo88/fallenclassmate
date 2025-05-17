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
              placeholder="FIND A CLASSMATE"
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
          <p className="hero-sub"><em>Though gone, their memory walks our halls.</em></p>
          <div className="hero-buttons">
            <a className="button primary" href="#">Find a School</a>
            <a className="button primary" href="#">Add a Tribute</a>
          </div>
        </div>
      </section>
      <section className="spacer-section"><blockquote>
         <center><i><p>“To live in hearts we leave behind is not to die.”<br />— Thomas Campbell</p></i></center>
        </blockquote></section>
      <section className="quote-section">
        
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
