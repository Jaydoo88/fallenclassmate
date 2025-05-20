// src/AboutPage.tsx
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page-container">
      <section className="about-hero">
        <h1>About FallenClassmate</h1>
        <p className="subtitle">Honoring the memories of those we lost — together.</p>
      </section>

      <section className="about-content">
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
    </div>
  );
}

export default AboutPage;
