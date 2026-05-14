import React from 'react'
import home  from '../assets/home icon.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function reservation() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date: '',
    time: '',
    numberGuests: '',
    occasion: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm', { state: formData });
  };

  return (
   
   <section name='reservation' className='booking-form'>
    <a href="/"><img src={home} alt="Home" /></a>
    <div className="reservation_container" >
        <h2 className='title_heading'>Little Lemon
          <h2>Chicago</h2>
        </h2>
        
        <h3>Find a Table for any occasion</h3> 
        <form className='form-container' aria-label='On Submit' onSubmit={handleSubmit}>
          <div className="date-customer">
            <label htmlFor="first_name">First Name <span className="required">*</span>
            <input type="text" placeholder='First Name' name='first_name'
             value={formData.first_name}
          onChange={handleChange}
             required />
            </label>
            <label htmlFor="last_name">Last Name <span className="required">*</span>
            <input type="text" placeholder='Last Name' name='last_name'
             value={formData.last_name}
          onChange={handleChange}
             required />
            </label>
          </div>
          <label htmlFor="date">Date
            <span className="required">*</span>
          </label>
            <input type="date"  name='date' 
              value={formData.date}
          onChange={handleChange}
            required />
            <label htmlFor="time">Time 
              <span className="required">*</span>
            </label>
              <div className="select-wrapper">
                 <select name="time" id="time-select" value={formData.time}
          onChange={handleChange} required>
              <option value="">--Please select a time--</option>
              <option>17:00</option>
              <option>17:30</option>
              <option>18:00</option>
              <option>18:30</option>
              <option>19:00</option>
              <option>19:30</option>
              <option>20:00</option>
              <option>20:30</option>
              <option>21:00</option>
              <option>23:00</option> 
            </select>
              </div>
           
            <label htmlFor="numberGuests">Number of Guests
              <span className="required">*</span>
            </label>
            <input type="number" placeholder='1-50' name='numberGuests' min='1' max='100' 
             value={formData.numberGuests}
          onChange={handleChange}
             required />
            <label htmlFor="occasion">Occasion</label>
            <div className="select-wrapper">
            <select name="occasion" className="occasion" value={formData.occasion}
          onChange={handleChange}>
              <option value="">--Please select an occasion--</option>
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business Meeting</option>
            </select>
            </div>
            <button type="submit" className='btn-menu'>Create Reservation</button>
        </form>
    </div>
   </section>
  )
}
