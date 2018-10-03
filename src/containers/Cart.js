import { connect } from "react-redux";
import React, { Component } from "react";

class Cart extends Component {
  render() {
    console.log("cart", this.props.cart);
    return <h1>Cart</h1>;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);
