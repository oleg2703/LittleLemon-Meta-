import React from 'react'
import Nav from './Nav'
import Logo from '../assets/Logo.svg';
import "./css/header.css"
function Header() {
  return (
    <header >
        <img src={Logo} alt="logo" className="header-logo" />
        <Nav/>
    </header>
  )
}

export default Header