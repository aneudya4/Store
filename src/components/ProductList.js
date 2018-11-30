import { addToCart } from "../actions/index";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class product extends Component {
  state = {
    activeButton: false
  };
  onClickAdd = item => {
    let newItem = this.props.cart.find(i => i.sku === item.sku);
    if (newItem) {
      this.setState({ activeButton: true });
      return null;
    } else {
      return this.props.addToCart(item);
    }
  };
  render() {
    const { images, names, prices, customerReviews, sku } = this.props.item;
    return (
      <div className="product-wrapper">
        {this.state.activeButton && alert("product already in cart")}
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
                Reviews Score:{customerReviews.averageScore}
              </span>
            </div>
          </Link>
          <button
            className="add-to-cart"
            disable={this.state.activeButton.toString()}
            onClick={() => this.onClickAdd(this.props.item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(product);
