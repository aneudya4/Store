import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./../actions/index";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";

class SigleProduct extends Component {
  state = {
    activeButton: false
  };
  onClickAdd = product => {
    let newItem = this.props.cart.find(i => i.sku === product.sku);
    if (newItem) {
      this.setState({ activeButton: true });
      return;
    } else {
      return this.props.addToCart(product);
    }
  };

  componentWillMount() {
    this.setState({
      activeButton: this.props.cart.find(i => i.sku === this.props.path)
    });
  }

  render() {
    let optionalImg =
      "https://img.bbystatic.com/BestBuy_US/images/products/6287/6287787_sa.jpg";
    const {
      images,
      names,
      prices,
      descriptions,
      customerReviews
    } = this.props.product;

    const { activeButton } = this.state;
    return (
      <div className="single-product">
        <h1>{names.title} </h1>
        <img src={images.standard || optionalImg} alt={names.title} />
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
          <span className="vote">
            Vote Average : {customerReviews.averageScore}
          </span>
        </div>

        <div className="btns">
          <button
            disabled={activeButton}
            className={activeButton ? "in-cart" : null}
            onClick={() => this.onClickAdd(this.props.product)}
          >
            {this.state.activeButton ? "Added to cart" : "Add To Cart"}
          </button>

          <Link to="/Store/cart">
            Go to &rarr;{" "}
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </Link>
          <Link to="/Store">
            {" "}
            Back home &larr; <i className="fas fa-home" />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  };
};

SigleProduct.propTypes = {
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(SigleProduct);

// products also viewed https://api.bestbuy.com/beta/products/5959400/alsoViewed?apiKey=zOyps5iN0ySoVtDgXtubx35V
