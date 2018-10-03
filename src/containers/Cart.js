import { connect } from "react-redux";
import React, { Component } from "react";

class Cart extends Component {
  render() {
    const {
      images,
      names,
      prices,
      descriptions,
      sku,
      customerReviews
    } = this.props.cart[0];
    console.log(this.props.cart[0].names);
    return <h1>{names.title}</h1>;
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

export default connect(mapStateToProps)(Cart);
