import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">I-World</Link>
      </div>
      <div className="header-links-right">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/home">Phones</Link>
            </li>
            <li>
              <Link to="/accesories">Accesories</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
