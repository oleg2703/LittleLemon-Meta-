
import { useLocation, Link } from "react-router-dom";
import React from "react";
import Logo from '../assets/Logo.svg';
import restaurant from '../assets/restaurant.jpg';
import '../components/css/confirm.css';

function ConfirmPage() {
  const location = useLocation();

  let bookingData = location.state?.formData || null;
  if (!bookingData) {
    const saved = localStorage.getItem('lastBooking');
    if (saved) {
      try {
        bookingData = JSON.parse(saved);
      } catch (e) {
        console.error("Error reading localStorage", e);
      }
    }
  }

  if (!bookingData) {
    return (
      <div className="confirm_wrapper">
        <div className="header_confirm">
          <img src={Logo} alt="logo" className="logo-confirm" />
          <img src={restaurant} alt="Restaurant" />
        </div>
        <div className="confirm-container" style={{ textAlign: 'center' }}>
          <h1>No active reservation found</h1>
          <p>Please make a reservation first so we can confirm your spot.</p>
          <Link to="/" className="btn-home" style={{ display: 'inline-block', marginTop: '20px' }}>
            Book a Table
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="confirm_wrapper">
        <div className="header_confirm">
            <img src={Logo} alt="logo" className="logo-confirm" />
            <img src={restaurant} alt="Restaurant" />
        </div>
        <div className="confirm-container">
             <h1>Your reservation is confirmed!</h1>
            <p><span>Name:</span> {bookingData.first_name} {bookingData.last_name}</p>
            <p><span>Date:</span> {bookingData.date}</p>
            <p><span>Time:</span> {bookingData.time}</p>
            <p><span>Guests Count:</span> {bookingData.numberGuests}</p>
            <p><span>Occasion:</span> {bookingData.occasion || "None"}</p>
            <Link to="/" className="btn-home">Back to Home</Link>
        </div>
    </div>
  );
}

export default ConfirmPage;