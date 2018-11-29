import { connect } from "react-redux";
import { removeFromCart } from "./../actions/index";
import React, { Component } from "react";

class CartDetails extends Component {
  onClickRemove = product => {
    this.props.removeFromCart(product);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="cart-items">
        <div className="cart-buying-option">
          <div className="cart-items-img">
            <img src={item.images.standard} alt={item.names.title} />
          </div>
          <div className="cart-items-details">
            <h3> DEVICE </h3>
            <span>{item.names.title}</span>
            <span>Price: US${item.prices.current}</span>
          </div>
        </div>
        <button onClick={() => this.onClickRemove(item)}>
          Remove From Cart{" "}
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { removeFromCart }
)(CartDetails);
