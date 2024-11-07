
import React from "react";
import Foodsrc from '../assets/restauranfood.jpg'
import  "../components/css/resevation.css"
function Reservations() {

return(
    
    <div className="reservation">
    <div className="reservation_content">
        <div className="reserv_title">
            <h1 className="name_restoran">Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="text__reserv">We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
                <a href="#" className="btn-reservation">Reserve a Table</a>
        </div>
        <div className="food">
         <img src={Foodsrc} alt="food" className="img_reservation" />
        </div>
        
        </div>
    </div>
    
    
)
}
export default Reservations;