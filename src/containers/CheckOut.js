import React from "react";

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

export default CheckOut;
