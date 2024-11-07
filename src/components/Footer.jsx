import React from "react"
import "./css/footer.css"
import logosrc from '../assets/Logo.svg'
function Footer() {
  return (
    <footer>
      <div className="container">
         
          
           <div className="links">
           <img src={logosrc} alt="logo" />
            
              <ul>
                <li><h2>Navigation</h2></li>
                <li ><a href="/">Home</a></li>
                <li ><a href="/about">About</a></li>
                <li ><a href="#">Menu</a></li>
                <li ><a href="/reservations">Reservations</a></li>
                <li ><a href="/order">Order Online</a></li>
                <li ><a href="/login">Login</a></li>
              </ul>

              <ul>
                <li><h2>Contact</h2></li>
                <li><a href="">Number</a ></li>
                <li><a href="">Email</a></li>
                <li><a href="">Address</a></li>
              </ul>
              <ul>
                <li>  <h2>Media</h2></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Pinterest</a></li>
              </ul>
            
           </div>
          
      </div>
      
    </footer>
  )
}

export default Footer