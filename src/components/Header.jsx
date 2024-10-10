import React from 'react';
import Logo from '../assets/Logo.svg';
import "./css/header.css"
function Header() {
  return (
    <header >
        <img src={Logo} alt="logo" className="header-logo" />
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/reservations">Reservations</a></li>
            <li className="nav-item"><a href="/order">Order Online</a></li>
            <li className="nav-item"><a href="/login">Login</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header