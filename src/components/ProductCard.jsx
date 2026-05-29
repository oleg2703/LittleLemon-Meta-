/* eslint-disable react/prop-types */
import React from 'react';
import  './css/card.css'
import { FaConciergeBell } from "react-icons/fa";
import { useAppContext  } from '../context/AppContext';

export default function Card({   id,
  imageSrc,
  title,
  description,
  price }) {
  const { addToBasket,showModal } = useAppContext()


  const handleAddToBasket = () => {

    addToBasket({
      id,
      title,
      price,
      imageSrc
    })

   showModal('Product added to basket')
  }
  return (
    <>
    <div className='card'>
      <div className="card-img">
       <img src={imageSrc} alt={title} className='card__img' />
       </div>
      <div className='card_body' >
       
        <h4 className='card__title'>{title} <span className='card__price'>${price.toFixed(2)}</span></h4>
        <p className='card__description'>{description}</p>
        <button  className='btn-delivery' onClick={handleAddToBasket}>Order Delivery <span><FaConciergeBell /></span></button>
       
      </div>
     
    </div>
 
      
        </>
  );
}
