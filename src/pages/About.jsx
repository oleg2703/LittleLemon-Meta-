
import React from "react";

import restaurantA from '../assets//Mario and Adrian A.jpg'
import restaurantB from '../assets/Mario and Adrian b.jpg'


export default function About() {
    return (
    <div className="about" id="about">
      <div className="about_content">
        <div className="about__section">
          <h1 className="name">Little Lemon</h1>
          <h2>Chicago</h2>
        <p className="about__text">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led
           the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
        </div>
        <div className="about-img">
        <img src={restaurantA} alt="Mario and Adrian" className="img-first"/>
        <img src={restaurantB} alt="restaurant" className="img-second"/>
          
        </div>
      </div>
   
    </div>
  )

  }
  

  