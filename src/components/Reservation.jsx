/* eslint-disable react/prop-types */
import React from 'react'

import { useState } from "react";

export default function Reservation({  availableTimes = [], dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date: '',
    time: '',
    numberGuests: '',
    occasion: ''
  });

  const today = new Date().toISOString().split("T")[0];
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

  if (name === "date") {
    dispatch({
      type: "UPDATE_TIMES",
      date: value,
    });
  }
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
    return;
  }
  
  submitForm(formData);
};
  return (
   
   <section name='reservation' className='booking-form'>
    
    <div className="reservation_container" >
        <h2 className='title_heading'>Little Lemon
          <p>Chicago</p>
        </h2>
        
        <h3>Find a Table for any occasion</h3> 
        <form className='form-container' aria-label='On Submit' onSubmit={handleSubmit}>
          <div className="date-customer">
            <label htmlFor="first_name">First Name <span className="required">*</span>
            <input id="first_name" type="text" placeholder='First Name'  name='first_name'
             value={formData.first_name}
             maxLength={'30'}
          onChange={handleChange}
             required />
            </label>
            <label htmlFor="last_name">Last Name <span className="required">*</span>
            <input id="last_name"   type="text" placeholder='Last Name' name='last_name'
             value={formData.last_name}
             maxLength={'30'}
          onChange={handleChange}
             required />
            </label>
          </div>
          <label htmlFor="date">Date
            <span className="required">*</span>
          </label>
            <input id="date" type="date"  name='date' 
              value={formData.date}
          onChange={handleChange}
          min={today}
            required  />
            <label htmlFor="time">Time 
              <span className="required">*</span>
            </label>
              <div className="select-wrapper">
                 <select name="time" id="time" value={formData.time} onChange={handleChange} required>
                    {availableTimes.length === 0 ? (
                      <option value="">No available times</option>
                    ) : (
                      <>
                        <option value="">--Please select a time--</option>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
              </div>
           
            <label htmlFor="numberGuests">Number of Guests
              <span className="required">*</span>
            </label>
            <input id="numberGuests" type="number" placeholder='1-50' name='numberGuests' min='1' max='100' 
             value={formData.numberGuests}
          onChange={handleChange}
             required />
            <label htmlFor="occasion">Occasion</label>
            <div className="select-wrapper">
            <select id="occasion" name="occasion" className="occasion" value={formData.occasion}
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