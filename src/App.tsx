import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SchoolsPage from './SchoolsPage';
import USASchoolsPage from './USASchoolsPage';
import OverseasSchoolsPage from './OverseasSchoolsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schools" element={<SchoolsPage />} />
      <Route path="/schools/usa" element={<USASchoolsPage />} />
      <Route path="/schools/overseas" element={<OverseasSchoolsPage />} />
    </Routes>
  );
}

export default App;
