import { useLocation } from "react-router-dom";
import React from "react";
import logo from '../assets/logo.svg';
import restaurant from '../assets/restaurant.jpg';
import '../components/css/confirm.css';
function ConfirmPage() {

  const location = useLocation();

  const formData = location.state;

  return (
    <div className="confirm_wrapper">
        <div className="header_confirm">
            <img src={logo} alt="logo" className="logo-confirm" />
            <img src={restaurant} alt="Restaurant" />
        </div>
        <div className="confirm-container">
             <h1>Your reservation is confirmed!</h1>
            <p><span>Name:</span> {formData.first_name} {formData.last_name}</p>
            <p><span>Date:</span> {formData.date}</p>
            <p><span>Time:</span> {formData.time}</p>
            <p><span>Guests Count:</span> {formData.numberGuests}</p>
            <p><span>Occasion:</span> {formData.occasion}</p>
            <a href="/" className="btn-home">Back to Home</a>
        </div>
        
    </div>
  );
}

export default ConfirmPage;