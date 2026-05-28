/* eslint-disable react/prop-types */
import React from 'react';
import  './css/card.css'
import { FaConciergeBell } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';
export default function Card({   id,
  imageSrc,
  title,
  description,
  price }) {
  const { addToBasket } = useAppContext()
  return (
    <div className='card'>
      <div className="card-img">
       <img src={imageSrc} alt={title} className='card__img' />
       </div>
      <div className='card_body' >
       
        <h4 className='card__title'>{title} <span className='card__price'>${price.toFixed(2)}</span></h4>
        <p className='card__description'>{description}</p>
        <a href="#" className='btn-delivery' onClick={() =>
    addToBasket({
      id,
      title,
      price,
      imageSrc
    })
  }>Order Delivery <span><FaConciergeBell /></span></a>
      </div>
    </div>
  );
}
