import React from 'react';
import '../components/css/Testimonials.css';
import women_1 from '../assets/women_1.jpg'
import men_1 from '../assets/men_1.jpg'
import women_2 from '../assets/women_2.jpg'
import men_2 from '../assets/men_2.jpg'
export default function Testimonials() {
  return (
    <div className='testimonials'id ='Testimonials'>
       <h1 className='h1-testimonials'>What do our customers think?</h1>
      <div className='testimonials_content'>
       
        <div className='testimonials_cards'>
          <div className="testimonial_card">
            <div className="profile_pic"><img src={women_2} alt="SG"  className='profile_pic_img'/></div>
             <div className="rating"></div>
            <p>Selena G.</p>
            <blockquote>"The food was amazing, the service was excellent and the atmosphere was perfect for a romantic dinner."</blockquote>
          </div>
          <div className="testimonial_card">
            <div className="profile_pic"><img src={men_2} alt="BM"  className='profile_pic_img'/></div>
            <div className="rating"></div>
            <p>Brandon M.</p>
            <blockquote>"The Lemon Dessert was excellent!"</blockquote>
          </div>
          <div className="testimonial_card">
            <div className="profile_pic"><img src={men_1} alt="PR"  className='profile_pic_img'/></div>
            <div className="rating"></div>
            <p>Peter R.</p>
            <blockquote>"You have to try the Greek Salad!"</blockquote>
          </div>
          <div className="testimonial_card">
            <div className="profile_pic"><img src={women_1} alt="NJ"  className='profile_pic_img'/></div>
            <div className="rating"></div>
            <p>Neha J.</p>
            <blockquote>"Awesome place, peaceful atmosphere with delicious food."</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
