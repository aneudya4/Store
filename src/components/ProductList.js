import { addToCart } from "../actions/index";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProductList extends Component {
  state = {
    activeButton: false
  };
  onClickAdd = item => {
    let newItem = this.itemInCart(item);
    if (newItem) {
      this.setState({ activeButton: true });
      return null;
    } else {
      return this.props.addToCart(item);
    }
  };

  itemInCart(item) {
    return this.props.cart.find(i => i.sku === item.sku);
  }
  render() {
    const { images, names, prices, customerReviews, sku } = this.props.item;
    const img = images.standard
      ? images.standard
      : " https://img.bbystatic.com/BestBuy_US/images/products/5967/5967100_sa.jpg";

    return (
      <div className="product-wrapper">
        <div className="product-info">
          <div className="phone-card">
            <Link to={`/Store/product/${sku}`}>
              <figure>
                <img src={img} alt={names.title} />
              </figure>
            </Link>
            <div className="item-info">
              <span className="item-title">{names.title}</span>

              <span className="price">Price : {prices.current}</span>
              <span className="reviews">
                {" "}
                Reviews Score : {customerReviews.averageScore}
              </span>
              <button
                className={
                  this.itemInCart(this.props.item) ? "view-cart" : "add-to-cart"
                }
                disable={this.state.activeButton.toString()}
                onClick={() => this.onClickAdd(this.props.item)}
              >
                {this.itemInCart(this.props.item) ? (
                  <Link to="/store/cart">view Cart </Link>
                ) : (
                  "add to cart"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return { cart };
};

ProductList.propTypes = {
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductList);
