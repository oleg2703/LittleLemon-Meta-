import React from "react"
import "./css/footer.css"
import logosrc from '../assets/restaurant.jpg'
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <div className="container">
         
          
           <div className="links">
            <div className="logo-footer"><img src={logosrc} alt="logo" className="logo-footer" /></div>
           
            
              <ul>
                <li><h2>Navigation</h2></li>
                <li ><a href="#about">About</a></li>
                <li ><a href="#menu">Menu</a></li>
                
                <li ><a href="#Testimonials">Testimonials</a></li>
                <li ><a href="#about">Contact</a></li>
              </ul>

              <ul>
                <li><h2>Contact</h2></li>
                <li><a href="https://maps.google.com/?q=Little+Lemon+331+E+Chicago+LaSalle+Street+Chicago,+Illinois+60602USA">Little Lemon 331 E Chicago LaSalle Street Chicago, Illinois 60602USA</a></li>
                <li><a href="tel:+380123456789">+380 123 456 789</a ></li>
                <li><a href="mailto:littlelemon@email.com">littlelemon@email.com</a></li>
                
              </ul>
              <ul>
                <li>  <h2>Media</h2></li>
                <li><a href="https://www.instagram.com" className="social_link"><span className="icon__social"><FaSquareInstagram /></span>Instagram</a></li>
                <li><a href="https://www.facebook.com" className="social_link"> <span className="icon__social"><IoLogoFacebook /></span>Facebook</a></li>
                <li><a href="https://twitter.com" className="social_link"><span className="icon__social"><FaXTwitter /></span>Twitter</a></li>
              </ul>
            
           </div>
         <p className="copyright">© Copyright 2026 <a href="https://www.linkedin.com/in/oleg-lebid-dev2703/">Oleh Lebid</a> . Don't claim as your own.</p> 
      </div>
      
    </footer>
  )
}

export default Footer