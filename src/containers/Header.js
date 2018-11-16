import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="header-logo-left"> LOGO </div>
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
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
