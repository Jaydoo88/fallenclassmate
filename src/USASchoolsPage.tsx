.usa-schools-page-container { 
  background-color: #f9fdfd;
  color: #333;
  min-height: 100vh;
}

/* Sticky navbar */
.usa-schools-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #3b9996;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.usa-schools-navbar nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  position: relative;
}

.usa-schools-navbar nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: white;
  transition: width 0.3s;
}

.usa-schools-navbar nav a:hover::after {
  width: 100%;
}

/* Logo */
.usa-schools-logo-bar {
  text-align: center;
  padding: 24px 0;
  background-color: #f9fdfd;
}

.usa-schools-logo-img {
  height: 90px;
  max-width: 100%;
  border-radius: 0;
  padding: 0;
  background-color: transparent;
}

/* Footer */
.usa-schools-footer {
  text-align: center;
  padding: 20px;
  background-color: #3b9996;
  color: white;
  font-size: 0.9em;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
}
