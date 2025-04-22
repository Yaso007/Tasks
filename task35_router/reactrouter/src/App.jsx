import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <BrowserRouter >
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | 
        <Link to="/about" style={{ marginLeft: '10px' }}>About</Link> | 
        <Link to="/user/42" style={{ marginLeft: '10px' }}>User Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
