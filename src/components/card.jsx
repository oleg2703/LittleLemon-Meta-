/* eslint-disable react/prop-types */
import React from 'react';
import  './css/card.css'

export default function Card({ imageSrc, title, description }) {
  return (
    <div className='card'>
       <img src={imageSrc} alt={title} className='card__img' />
      <div className='card_body'>
       
        <h2 className='card__title'>{title}</h2>
        <p className='card__description'>{description}</p>
        <a href="#" className='btn-delivery'>Order Delivery</a>
      </div>
    </div>
  );
}
