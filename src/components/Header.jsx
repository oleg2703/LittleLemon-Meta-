import React from 'react';
import Logo from '../assets/Logo.svg';
import "./css/header.css"

import { useState, useEffect } from 'react';
function Header() {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, [lastScrollY]);
  return (
    <header className={`header ${show ? "show" : "hide"}`}>
        
        <nav className="nav ">
        <a href="/"><img src={Logo} alt="logo" className="logo" /></a>
          <button 
            className={open ? "btn-burger active" : "btn-burger"}
            onClick={() => setOpen(!open)} 
            name='menu' 
          >
             <span></span>
            <span></span>
           <span></span>

          </button>
            <ul className={open ? "nav-list active" : "nav-list"}>
            <li className="nav-item"><a href="#about" onClick={() => setOpen(false)} >About</a></li>
            <li className="nav-item"><a href="#menu" onClick={() => setOpen(false)}>Menu</a></li>
            <li className="nav-item"><a href="#Testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
            <li className="nav-item"><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header