import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import  './App.css'
import About from './pages/About';
import Reservations from './pages/Specials';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Nopage from './pages/Nopage';
import React from 'react';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Nopage />}/> 
        </Routes>
    </Router>
    
  );
}

export default App;
