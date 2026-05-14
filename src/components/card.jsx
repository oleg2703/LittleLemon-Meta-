/* eslint-disable react/prop-types */
import React from 'react';
import  './css/card.css'
import { FaConciergeBell } from "react-icons/fa";

export default function Card({ imageSrc, title, description, price }) {
  return (
    <div className='card'>
      <div className="card-img">
       <img src={imageSrc} alt={title} className='card__img' />
       </div>
      <div className='card_body'>
       
        <h4 className='card__title'>{title} <span className='card__price'>{price}</span></h4>
        <p className='card__description'>{description}</p>
        <a href="#" className='btn-delivery'>Order Delivery <span><FaConciergeBell /></span></a>
      </div>
    </div>
  );
}
