import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../containers/Header";
import CartDetails from "../components/CartDetails";

const Cart = props => {
  const { cart } = props;

  if (props.cart.length === 0) {
    return (
      <div className="empty-cart">
        {" "}
        <Header />
        Your Cart
        <div className="btn">
          {" "}
          <Link to="/">Start Shopping</Link>
        </div>
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
        <CartDetails key={item.sku} item={item} total={total} />
      ))}{" "}
      <div className="checkout">
        <h3>TOTAL:{total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

export default connect(mapStateToProps)(Cart);
