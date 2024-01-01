import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Flashcards from './components/Flashcards';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <header className="App-header">
        <h1>Flashcards App</h1>
      </header>
      <nav className="App-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/flashcards">Flashcards</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
