import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SchoolsPage from './SchoolsPage';
import USASchoolsPage from './USASchoolsPage';
import OverseasSchoolsPage from './OverseasSchoolsPage';
import ResourcesPage from './ResourcesPage';
import PlansPage from './PlansPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import AddSchoolPage from './AddSchoolPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schools" element={<SchoolsPage />} />
      <Route path="/schools/usa" element={<USASchoolsPage />} />
      <Route path="/schools/overseas" element={<OverseasSchoolsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/plans" element={<PlansPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/add-school" element={<AddSchoolPage />} /> {/* ✅ Enable this */}
    </Routes>
  );
}

export default App;
