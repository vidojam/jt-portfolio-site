import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import AboutMe from './pages/AboutMe';
import Projects from'./pages/Projects';
import CertificatesCarousel from './pages/CertificatesCarousel';
import Skills from './pages/Skills';
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/certificates" element={<CertificatesCarousel />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      //<Route path="*" element={<About />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App;