import { connect } from "react-redux";
import { removeFromCart } from "./../actions/index";
import React from "react";
import PropTypes from "prop-types";

const CartDetails = props => {
  const onClickRemove = product => {
    props.removeFromCart(product);
  };
  const { item } = props;
  return (
    <div className="cart-items">
      <div className="cart-buying-option">
        <div className="cart-items-img">
          <img src={item.images.standard} alt={item.names.title} />
        </div>
        <div className="cart-items-details">
          <h3> DEVICE </h3>
          <span>{item.names.title}</span>
          <span>
            Price: US$
            {item.prices.current}
          </span>
        </div>
      </div>
      <button className="remove-cart-item" onClick={() => onClickRemove(item)}>
        Remove From Cart{" "}
      </button>
    </div>
  );
};
CartDetails.propTypes = {
  removeFromCart: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeFromCart }
)(CartDetails);
