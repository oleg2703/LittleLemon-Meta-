import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.svg';
import BasketImg from '../assets/basket .svg';
import "./css/header.css";
import Basket from './BasketModal'
import {useAppContext} from '../context/AppContext';

function Header() {
  
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] =useState(0);
  const {basketOpen,setBasketOpen,menuOpen,setMenuOpen ,basketItems} = useAppContext();



  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, [lastScrollY]);

  return (
    <>
    <header className={`header ${ show ? "show" : "hide" }`}>

      <nav className="nav">
        <a href="/">
          <img src={Logo} alt="logo" className="logo"/>
        </a>

        {/* Basket */}
       

        {/* Burger */}
        <button
          className={menuOpen? "btn-burger active": "btn-burger"}
          onClick={() =>setMenuOpen(!menuOpen)}>

          <span></span>
          <span></span>
          <span></span>

        </button>

        <div className='header-leftSide'>
           
            <ul className={menuOpen ? "nav-list active": "nav-list"}>
          <li className="nav-item">
            <a href="#about" onClick={() =>setMenuOpen(false)}>About</a></li>
          <li className="nav-item">
            <a href="#menu" onClick={() =>setMenuOpen(false)}>Menu</a>
          </li>
          <li className="nav-item">
            <a href="#Testimonials" onClick={() =>setMenuOpen(false)}>Testimonials</a>
          </li>
          <li className="nav-item"> 
            <a href="#contact"onClick={() =>setMenuOpen(false)}> Contact </a> 
          </li>
        </ul>

         <button className='btn-basket' type="button" onClick={() =>setBasketOpen(!basketOpen)}>
            <img src={BasketImg} alt="basket"/>
              <span className="basket-count">
                {basketItems.length} </span>
            </button>
        </div>
      
      </nav>

    </header>
     <Basket isOpen={basketOpen} onClose={()=> setBasketOpen(false)} />
    </ >
  );
}

export default Header;