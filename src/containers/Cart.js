import { connect } from "react-redux";
import React, { Component } from "react";
import Header from "../containers/Header";

class Cart extends Component {
  render() {
    // const {
    //   images,
    //   names,
    //   prices,
    //   descriptions,
    //   sku,
    //   customerReviews
    // } = this.props.cart[0];

    console.log(this.props.cart);
    if (!this.props.cart[0]) {
      return (
        <div>
          {" "}
          <Header />
          <h1>cart is empty</h1>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <h1>{this.props.cart[0].names.title}</h1>
        <img src={this.props.cart[0].images.standard} alt="cell" />
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
