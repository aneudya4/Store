import { addToCart } from "./../actions/index";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class product extends Component {
  render() {
    const { images, names, prices, customerReviews, sku } = this.props.item;
    return (
      <div className="product-wrapper">
        <div className="product-info">
          <Link to={`/product/${sku}`}>
            <div className="phone-card">
              <figure>
                <img src={images.standard} alt={names.title} />
                <figcaption>{names.title}</figcaption>
              </figure>

              <span className="price">Price:{prices.current}</span>
              <br />
              <span className="reviews">
                {" "}
                {/* Reviews Score:{customerReviews.averageScore} */}
              </span>
            </div>
          </Link>
          <button onClick={() => this.props.addToCart(this.props.item)}>
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(product);
