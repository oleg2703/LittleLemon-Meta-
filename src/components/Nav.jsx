import React from 'react';


function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#menu">Menu</a></li>
        <li className="nav-item"><a href="#reservations">Reservations</a></li>
        <li className="nav-item"><a href="#order">Order Online</a></li>
        <li className="nav-item"><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
