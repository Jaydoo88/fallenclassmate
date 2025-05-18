import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SchoolsPage from './SchoolsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/schools" element={<SchoolsPage />} />
    </Routes>
  );
}

export default App;
