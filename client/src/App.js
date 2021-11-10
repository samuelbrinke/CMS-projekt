import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectPage from './components/ProjectPage';
import Projects from './components/Projects'
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';

function App() {

  return (
    <div className="App">
      <Header />
      <MenuDrawer />
      <Router>
          <Routes>
            <Route exact path="/" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;