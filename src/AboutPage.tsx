import './AboutPage.css';
import Logo from './assets/logo.png';

function AboutPage() {
  return (
    <div className="about-page-container">
      <header className="about-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="/resources">Resources</a>
          <a href="/plans">Plans & Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="about-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="about-logo-img" />
      </section>

      <section className="about-header-section">
        <h2 className="about-header-title">About FallenClassmate</h2>
        <p className="about-header-subtext">Honoring the memories of those we lost — together.</p>
      </section>

      <section className="about-main-content">
        <p>
          FallenClassmate was created with one purpose: to ensure no classmate is ever forgotten. From every school and every generation, we provide a dedicated place where friends, families, and former classmates can come together to remember those who are no longer with us.
        </p>
        <p>
          We believe that every life deserves to be remembered — not just through a name on a yearbook page, but with heartfelt stories, shared memories, photos, and tributes. Whether it’s lighting a candle, writing a message, or simply reading through memories, this platform is built for healing, reconnection, and reflection.
        </p>
        <p>
          Our mission is simple: <strong>To build a community of remembrance, one classmate at a time.</strong>
        </p>
        <p>
          Thank you for being a part of this journey. <br />
          <em>Together, we remember. Together, we honor. Together, we heal.</em>
        </p>
      </section>

      <section className="about-why-section">
        <h3 className="about-why-title">🕯️ Why We Created FallenClassmate</h3>
        <p>
          We’ve all had that moment — scrolling through social media or talking with an old friend — when we suddenly hear about a classmate who passed away. The news hits hard, not just because of the loss, but because it often feels like there was no place to remember them properly.
        </p>
        <p>
          FallenClassmate was born from that feeling. We created this space so no classmate is forgotten, no matter how much time has passed. Whether it was someone you knew well or only from a distance, they were part of your journey — part of your school, your community, your memories.
        </p>
        <p>
          This platform is our way of saying: your life mattered, and you’ll always be part of the class.
        </p>
        <p className="about-why-signature">– The FallenClassmate Team</p>
      </section>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default AboutPage;
