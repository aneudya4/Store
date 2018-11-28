import React, { Component } from "react";

class CartDetails extends Component {
  render() {
    console.log(this.props.item, this.props.total, "details");
    const { item, total } = this.props;
    return (
      <div className="cart-items">
        <div className="cart-buying-option">
          <div className="cart-items-img">
            <img src={item.images.standard} />
          </div>
          <div className="cart-items-details">
            <h3> DEVICE </h3>
            <span>{item.names.title}</span>
            <span>Price: US${item.prices.current}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CartDetails;
