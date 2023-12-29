// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/user/order" activeClassName="active">
            Order
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
