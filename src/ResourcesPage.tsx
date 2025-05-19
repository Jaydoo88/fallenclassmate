import './ResourcesPage.css';
import Logo from './assets/logo.png';

function ResourcesPage() {
  return (
    <div className="resources-page-container">
      <header className="resources-navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/schools">Schools</a>
          <a href="/resources">Resources</a>
          <a href="#">Plans & Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="resources-logo-bar">
        <img src={Logo} alt="FallenClassmate Logo" className="resources-logo-img" />
      </section>

      <section className="resources-hero">
        <h2 className="resources-hero-title">Support & Healing Resources</h2>
        <p className="resources-hero-subtext">Explore tools, guidance, and compassionate help as you honor and remember classmates.</p>
      </section>

      <section className="resources-cards-container">
        <div className="resource-card">
          <h3>🛠️ Memorial Creation Guides</h3>
          <p>Step-by-step walkthroughs for creating memorial pages with checklists and tips.</p>
          <a className="resource-link" href="#">View Guides</a>
        </div>

        <div className="resource-card">
          <h3>✍️ Writing a Tribute</h3>
          <p>Need help putting your feelings into words? Use templates and examples to craft a message from the heart.</p>
          <a className="resource-link" href="#">Start Writing</a>
        </div>

        <div className="resource-card">
          <h3>💬 Grief Support & Helplines</h3>
          <p>Connect with 24/7 hotlines, support groups, and educational resources for coping with grief and loss.</p>
          <a className="resource-link" href="#">Find Support</a>
        </div>

        <div className="resource-card">
          <h3>🎨 Creative Tribute Ideas</h3>
          <p>Explore meaningful ways to honor classmates—collages, candle pages, quotes, and more.</p>
          <a className="resource-link" href="#">See Ideas</a>
        </div>

        <div className="resource-card">
          <h3>📄 Printable Toolkits</h3>
          <p>Ready-to-use planning sheets and grief guides for classrooms, events, or personal use.</p>
          <a className="resource-link" href="#">Download PDFs</a>
        </div>

        <div className="resource-card">
          <h3>❓ FAQ & Technical Help</h3>
          <p>Have questions? Learn how to edit a memorial, report content, or manage tribute permissions.</p>
          <a className="resource-link" href="#">Visit Help Center</a>
        </div>
      </section>

      <footer className="resources-footer">
        <p>&copy; {new Date().getFullYear()} FallenClassmate • Never Forget</p>
      </footer>
    </div>
  );
}

export default ResourcesPage;
