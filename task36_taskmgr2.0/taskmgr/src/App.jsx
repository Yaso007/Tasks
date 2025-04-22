import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
    
  )
}

export default App