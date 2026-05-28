import Header from "../components/Header.jsx";
import React from "react";
import ProductCard from '../components/ProductCard.jsx'
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
    const products = [
  {
    id:1,
    imageSrc: Brushetta,
    title: 'Brushetta',
    price: 5.99,
    description:'Make our simple tomato bruschetta as a classic Italian starter. Ideal for a summer gathering with friends, this easy dish is fresh, tasty and full of flavour'
  },

  {
    id:2,
    imageSrc: GreenSalad,
    title: 'Green Salad',
    price: 8.99,
    description:
      'Put together a fresh green salad for a light summer lunch or side. Make the most of vegetables such as crispy lettuce, peas and green beans.'
  },

  {
    id:3,
    imageSrc: LemonDessert,
    title: 'Lemon Dessert',
    price: 5.99,
    description:
      'Bake a stunning lemon sponge cake, a creamy citrus cheesecake or a zesty sorbet with our best-ever lemon dessert recipes, perfect for entertaining.'
  }
]

    return (
        <>
        <div className='wrapper'>
        <Header/>
            <div className="content">
        
        <Reservations/>
        <OrderOnline/>
            <div className="product">
                <div className="product-content">
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        id={product.id}
                        imageSrc={product.imageSrc}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        />
                    ))}
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
  