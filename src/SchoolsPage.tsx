import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SchoolsPage from './pages/SchoolsPage';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/schools" element={<SchoolsPage />} />
      </Routes>
    </Router>
  );
}

export default Main;
