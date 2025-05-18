import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SchoolsPage from './SchoolsPage';
import USASchoolsPage from './USASchoolsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schools" element={<SchoolsPage />} />
      <Route path="/schools/usa" element={<USASchoolsPage />} />
    </Routes>
  );
}

export default App;
