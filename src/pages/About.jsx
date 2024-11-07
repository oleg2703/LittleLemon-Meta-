
import React from "react";

import restaurant from '../assets/restaurant.jpg'
import MandA from '../assets/Mario and Adrian A.jpg'


export default function About() {
    return (
    <div className="about">
      <div className="about_content">
        <div className="about__section">
          <h1 className="name">Little Lemon</h1>
          <h2>Chicago</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, officiis in quia unde,
           quasi magni quidem ab vitae praesentium consectetur laborum cum molestiae fugit sapiente iusto minus dolorum! Nobis, qui?
        </p>
        </div>
        <div className="about-img">
        <img src={MandA} alt="Mario and Adrian" className="img-first"/>
        <img src={restaurant} alt="restaurant" className="img-second"/>
          
        </div>
      </div>
   
    </div>
  )

  }
  

  