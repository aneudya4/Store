import React from "react";
import { Link } from "react-router-dom";

const SectionSelection = () => {
  return (
    <div className="select-products">
      <nav>
        <ul>
          <li>
            <Link to="/Store">
              <i className="fa fa-mobile" aria-hidden="true" />
              <p>Check out our Phones</p>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/accesories">
              <i className="fa fa-headphones" aria-hidden="true" />
              <p>Check out our Phone Accesories</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SectionSelection;
