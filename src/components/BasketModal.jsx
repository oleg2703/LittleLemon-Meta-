/* eslint-disable react/prop-types */
import React from 'react'
import './css/basket.css'
import { useAppContext } from '../context/AppContext'
export default function Basket({ isOpen ,onClose}) {
   if (!isOpen) return null
 const { basketItems,decreaseQuantity,addToBasket,totalPrice } = useAppContext()
  return (
    <>
        <div className={isOpen ? "basket-backdrop open":'basket-backdrop'} onClick={onClose}/>
        <div
          className={isOpen ? 'basket-wrapper open' : 'basket-wrapper'}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className='btn-close'><span>X</span></button>
          <div className="basket-content">
           <p className='basket-title'>Your order</p>
            <div className="basket-cards">
               
             {basketItems.map((item) => (

                <div key={item.id} className='item'>
                  <img src={item.imageSrc} alt="item.title"  className='item-img'/>
                  <span className='item-title'>
                    {item.title}
                  </span>
                    <div className="item-controls">

                    <button
                      className="btn-count"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="item-quantity">
                      {item.quantity}
                    </span>

                    <button
                      className="btn-count"
                      onClick={() => addToBasket(item)}
                    >
                      +
                    </button>

                  </div>
                 
                  
                </div>

              ))}

            </div>

            <div className="basket-price">
                  <span>
                  Total: ${totalPrice.toFixed(2)}
                </span>
            </div>
          </div>
        </div>
     
    </>
  )
}