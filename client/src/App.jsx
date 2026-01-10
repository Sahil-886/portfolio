import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: '80px' }}> {/* Spacer for fixed navbar */}
          <Routes>
            <Route path="/" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper title="Certifications"><Certifications /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper title="Projects"><Projects /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper title="Contact"><Contact /></PageWrapper>} />
            <Route path="/admin" element={<PageWrapper title="Admin"><Admin /></PageWrapper>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
