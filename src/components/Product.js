import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./product.css";

class product extends Component {
  render() {
    const {
      images,
      names,
      prices,
      customerReviews,
      descriptions
    } = this.props.camera;
    console.log(images.standard);
    return (
      <div className="product-wrapper">
        <Link to="/product/:id">
          <div className="product-info">
            <img src={images.standard} />
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
