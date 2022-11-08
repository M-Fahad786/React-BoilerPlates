import React from "react";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("active");
    
  };

  return (
    // Logo
    <header>
      <a href="#logo" className="logo">
        <i className="fa-solid fa-utensils"></i>Food.
      </a>

      {/* List Items  */}
      <nav className="navbar" ref={navRef}>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#dishes">Dishes</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#reviews">Reviews</a>
        <a href="#order">Order</a>
      </nav>
      {/* Icons  */}

      <div className="icons">
        <i className="fas fa-bars" id="menu-bars" onClick={showNav}></i>
        <i className="fas fa-search"></i>
        <a href="#cart" className="fas fa-shopping-cart"></a>
        <a href="#user" className="fas fa-user"></a>
      </div>
    </header>
  );
};

export default Navbar;
