import React, { Component } from "react";
import { Link } from "react-router-dom";

class product extends Component {
  render() {
    // console.log(this.props.camera);
    const { images, names, prices, customerReviews, sku } = this.props.phone;
    return (
      <div className="product-wrapper">
        <div className="product-info">
          <Link to={`/product/${sku}`}>
            <figure>
              <img src={images.standard} alt={names.title} />
              <figcaption>{names.title}</figcaption>
            </figure>

            <span className="price">Price:{prices.current}</span>
            <br />
            <span className="reviews">
              {" "}
              Reviews Score:{customerReviews.averageScore}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default product;
