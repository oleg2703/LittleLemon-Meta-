
import React from "react";
import FoodImg from '../assets/restauranfood.jpg'
import  "../components/css/resevation.css"

import { useNavigate } from "react-router-dom";

function Reservations() {
const navigate = useNavigate();
return(
    
    <div className="reservation">
    <div className="reservation_content">
        <div className="reservation_title">
            <h1 className="name_restaurant">Little Lemon
            </h1>
            <h3 id="menu">Chicago</h3>
            <p className="text__reservation">We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
                <button onClick={() => navigate("/reservation")}
                className="btn-reservation" type="button">Reserve a Table</button>
        </div>
        <div className="food">
         <img src={FoodImg} alt="food" className="img_reservation" />
        </div>
        
        </div>
    </div>
    
    
)
}
export default Reservations;