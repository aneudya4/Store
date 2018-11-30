import React, { Component } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">I-mobile</div>
      <div className="header-links-right">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Phones</Link>
            </li>
            <li>
              <Link to="/accesories">Accesories</Link>
            </li>
            <li>
              <Link to="/cart">
                <i class="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
