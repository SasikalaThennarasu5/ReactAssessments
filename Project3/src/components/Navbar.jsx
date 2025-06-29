import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🛒 ShopEase</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
