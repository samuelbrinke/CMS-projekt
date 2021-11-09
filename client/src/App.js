import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectPage from './components/ProjectPage';
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;