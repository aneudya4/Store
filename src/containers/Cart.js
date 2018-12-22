import { connect } from "react-redux";
import React from "react";
import Header from "../containers/Header";
import CartDetails from "../components/CartDetails";
import CheckOut from "./CheckOut";
import PropTypes from "prop-types";

const Cart = props => {
  const { cart } = props;
  if (props.cart.length === 0) {
    return (
      <div className="empty-cart">
        {" "}
        <Header />
        <span className="title-cart"> Your Cart</span>
        <div className="btn"> </div>
        <div className="empty-cart-msg">
          <p>
            It looks like your cart is empty...
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </p>{" "}
        </div>
      </div>
    );
  }

  let total =
    cart.length > 0
      ? cart.reduce((a, b) => a + b.prices.regular, 0)
      : cart[0].prices.regular;

  return (
    <div>
      <Header />
      {cart.map(item => (
        <CartDetails key={item.sku} item={item} />
      ))}{" "}
      <CheckOut total={total} />
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(Cart);
