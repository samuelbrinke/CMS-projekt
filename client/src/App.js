import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectPage from './components/ProjectPage';
import Projects from './components/Projects'
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import About from './components/About';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Header />
      <MenuDrawer />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;