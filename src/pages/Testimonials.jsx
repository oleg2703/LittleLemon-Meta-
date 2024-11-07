import React from 'react';
import '../components/css/Testimonials.css';

export default function Testimonials() {
  return (
    <div className='testimonials'>
       <h1 className='h1-testimonials'>Testimonials</h1>
      <div className='testimonials_content'>
       
        <div className='testimonials_cards'>
          <div className="testimonial_card">
            <div className="rating"></div>
            <div className="profile_pic">SG</div>
            <h3>Selena G.</h3>
            <p>Really enjoyed the atmosphere.</p>
          </div>
          <div className="testimonial_card">
            <div className="rating"></div>
            <div className="profile_pic">BM</div>
            <h3>Brandon M.</h3>
            <p>The greek salad was excellent!</p>
          </div>
          <div className="testimonial_card">
            <div className="rating"></div>
            <div className="profile_pic">PR</div>
            <h3>Peter R.</h3>
            <p>You have to try the Greek Salad!</p>
          </div>
          <div className="testimonial_card">
            <div className="rating"></div>
            <div className="profile_pic">NJ</div>
            <h3>Neha J.</h3>
            <p>Awesome place, peaceful atmosphere with delicious food.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
