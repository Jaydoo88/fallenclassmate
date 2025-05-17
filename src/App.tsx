# Prepare the new App.tsx and App.css using the uploaded image as a hero background

hero_image_filename = "hero.jpg"
hero_image_path = "/mnt/data/" + hero_image_filename

# Copy the uploaded image to the correct location for user to move into src/assets
import shutil
assets_folder = "/mnt/data/assets"
os.makedirs(assets_folder, exist_ok=True)
hero_dest_path = os.path.join(assets_folder, hero_image_filename)
shutil.copy("/mnt/data/shutterstock_664197991.jpg", hero_dest_path)

# App.tsx (React page using uploaded image as hero)
updated_app_tsx = f"""import './App.css';
import Logo from './assets/logo.png';

function App() {{
  return (
    <>
      <header className="navbar">
        <div className="nav-logo">
          <img src={{Logo}} alt="FallenClassmate Logo" />
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
        <p>&copy; {{new Date().getFullYear()}} FallenClassmate &mdash; Never Forget</p>
      </footer>
    </>
  );
}}

export default App;
"""

# App.css with background image reference
updated_app_css = f"""@import url('https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Roboto&display=swap');

body {{
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: #f4f7f8;
  color: #222;
}}

.navbar {{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #40a0a0;
  color: white;
  padding: 1rem 2rem;
}}

.nav-logo {{
  display: flex;
  align-items: center;
}}

.nav-logo img {{
  height: 40px;
  margin-right: 10px;
}}

.navbar nav a {{
  color: white;
  margin-left: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}}

.navbar nav a:hover {{
  text-decoration: underline;
}}

.hero-image {{
  background: url('./assets/{hero_image_filename}') center/cover no-repeat;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}}

.hero-overlay {{
  background: rgba(0, 0, 0, 0.55);
  padding: 3rem;
  text-align: center;
  color: white;
  max-width: 700px;
  border-radius: 8px;
}}

.hero-overlay h1 {{
  font-family: 'Lora', serif;
  font-size: 3rem;
  margin-bottom: 1rem;
}}

.hero-overlay p {{
  font-size: 1.2rem;
  margin-bottom: 2rem;
}}

.hero-buttons .button {{
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
}}

.button.primary {{
  background-color: #80c0c0;
  color: black;
}}

.button.secondary {{
  background-color: #ffffff;
  color: #40a0a0;
  border: 1px solid #40a0a0;
}}

.button:hover {{
  opacity: 0.9;
}}

.footer {{
  background: #c0c0c0;
  text-align: center;
  padding: 1rem;
  color: #333;
}}
"""

updated_app_tsx, updated_app_css, hero_dest_path
