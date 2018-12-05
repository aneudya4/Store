import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/Store">I-World</Link>
      </div>
      <div className="header-links-right">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/Store">Phones</Link>
            </li>
            <li>
              <Link to="Store/accesories">Accesories</Link>
            </li>
            <li>
              <Link to="Store/cart">
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
