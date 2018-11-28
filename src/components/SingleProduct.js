import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./../actions/index";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class SigleProduct extends Component {
  onClickAdd = product => {
    this.props.addToCart(product);
  };

  onClickRemove = product => {
    this.props.removeFromCart(product);
  };
  render() {
    const {
      images,
      names,
      prices,
      descriptions,
      sku,
      customerReviews
    } = this.props.product;

    return (
      <div className="single-product">
        <h1>{names.title} </h1>

        <img src={images.standard} alt={sku} />
        <p className="item-description"> {descriptions.short}</p>
        <div className="single-price">
          {
            <span className="current-price">
              <strong>${prices.current}</strong>
            </span>
          }
          <span className="old-price">
            {" "}
            {prices.current !== prices.regular ? "WAS:" + prices.regular : null}
          </span>
          <span>vote average : {customerReviews.averageScore}</span>
        </div>

        <div className="btns">
          <button onClick={() => this.onClickAdd(this.props.product)}>
            {" "}
            Add to Cart{" "}
          </button>

          <button onClick={() => this.onClickRemove(this.props.product)}>
            Remove From Cart{" "}
          </button>
          <Link to="/cart">Go to cart</Link>
          <Link to="/"> Back home </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart, removeFromCart }
)(SigleProduct);

// products also viewed https://api.bestbuy.com/beta/products/5959400/alsoViewed?apiKey=zOyps5iN0ySoVtDgXtubx35V
