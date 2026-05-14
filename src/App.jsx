import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import  './App.css'
import ErrorPage from './pages/Error';
import Reservation from './components/reservation';
import ConfirmPage from './pages/Confirm';
import React from 'react';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<ErrorPage />}/> 
          <Route path="/confirm" element={<ConfirmPage />}/>
        </Routes>
    </Router>
    
  );
}

export default App;
