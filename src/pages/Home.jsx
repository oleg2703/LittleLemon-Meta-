import Header from "../components/header";
import React from "react";
import Card from '../components/card'
import Reservations from "./Specials";
import Brushetta from '../assets/bruchetta.svg'
import GreenSalad from '../assets/greek salad.jpg'
import  LemonDessert from '../assets/lemon dessert.jpg'
import '../components/css/home.css'
import Footer from "../components/Footer";
import About from "./About";
import Testimonials from './Testimonials'
import OrderOnline from './OrderOnline'
function Home() {
    return (
        <>
        <div className='wrapper'>
        <Header/>
            <div className="content">
        
        <Reservations/>
        <OrderOnline/>
            <div className="product">
                <div className="product-content">
                    <Card
                    imageSrc={Brushetta}
                    title={'Brushetta'}
                    description={'Make our simple tomato bruschetta as a classic Italian starter. Ideal for a summer gathering with friends, this easy dish is fresh, tasty and full of flavour'}
                    />
                    <Card
                    imageSrc={GreenSalad}
                    title={'Green Salad'}
                    description={'Put together a fresh green salad for a light summer lunch or side. Make the most of vegetables such as crispy lettuce, peas and green beans.'}
                    />
                    <Card
                    imageSrc={LemonDessert}
                    title={'Lemon Dessert'}
                    description={'Bake a stunning lemon sponge cake, a creamy citrus cheesecake or a zesty sorbet with our best-ever lemon dessert recipes, perfect for entertaining.'}
                    />
                </div>
            </div>
        </div>
        <Testimonials/>
        <About/>
        </div>
        <Footer/>
        </>
    )
  }
  
  export default Home;
  