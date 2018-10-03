import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./product.css";

class product extends Component {
  render() {
    const { images, names, prices, customerReviews, sku } = this.props.camera;
    return (
      <div className="product-wrapper">
        <Link to={`/product/${sku}`}>
          <div className="product-info">
            <img src={images.standard} alt={names.title} />
            <p>{names.title}</p>
            <span className="price">
              <strong>{prices.current}</strong>
            </span>
            <span className="reviews">{customerReviews.averageScore}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default product;
