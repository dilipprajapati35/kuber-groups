// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.css'; // Global application styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/ongoing-projects" element={<OngoingProjectsPage />} />
            <Route path="/completed-projects" element={<CompletedProjectsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            {/* Add more routes here if you create individual project detail pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;