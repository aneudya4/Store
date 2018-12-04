import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./../actions/index";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class SigleProduct extends Component {
  state = {
    activeButton: false
  };
  onClickAdd = product => {
    let newItem = this.props.cart.find(i => i.sku === product.sku);
    if (newItem) {
      this.setState({ activeButton: true });
      return null;
    } else {
      return this.props.addToCart(product);
    }
  };

  componentDidMount() {
    this.setState({
      activeButton: this.props.cart.find(i => i.sku === this.props.path)
    });
  }

  render() {
    const {
      images,
      names,
      prices,
      descriptions,
      customerReviews
    } = this.props.product;

    return (
      <div className="single-product">
        <h1>{names.title} </h1>
        <img src={images.standard} alt={names.title} />
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
            vote average : {customerReviews.averageScore}
          </span>
        </div>

        <div className="btns">
          <button
            disabled={this.state.activeButton}
            onClick={() => this.onClickAdd(this.props.product)}
          >
            {this.state.activeButton ? "Already in cart" : "Add To Cart"}
          </button>

          <Link to="/cart">
            Go to &rarr;{" "}
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </Link>
          <Link to="/">
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

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(SigleProduct);

// products also viewed https://api.bestbuy.com/beta/products/5959400/alsoViewed?apiKey=zOyps5iN0ySoVtDgXtubx35V
