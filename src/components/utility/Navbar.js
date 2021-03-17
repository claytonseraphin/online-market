import React from "react";
import {NavLink} from 'react-router-dom';

export default function Navbar(props) {
  const cartCount = props.cart.reduce((total, product) => total + product.quantity, 0);
    return (
      <nav className="navbar">
        <NavLink activeClassName="active" exact to="/" className="nav-brand">
          SuperM
        </NavLink>
        <ul>
          <li className="nav-item">
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" exact to="/about">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" exact to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" exact to="/cart" className="nav-item nav-cart btn btn-accent">
              Cart ({cartCount})
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }