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
    console.log(this.props.cart);
    return (
      <div>
        <h1>{names.title}</h1>
        <img src={images.standard} alt="cell" />
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

export default connect(mapStateToProps)(Cart);
