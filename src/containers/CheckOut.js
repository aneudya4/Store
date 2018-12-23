import React from "react";
import PropTypes from "prop-types";

const CheckOut = ({ total }) => {
  return (
    <div className="checkout">
      <i className="fas fa-credit-card" />
      <h3>
        TOTAL:
        {total.toFixed(2)}
      </h3>
    </div>
  );
};

CheckOut.propTypes = {
  total: PropTypes.number
};

export default CheckOut;
