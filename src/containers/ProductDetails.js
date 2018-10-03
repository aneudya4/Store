import { connect } from "react-redux";
import React, { Component } from "react";
import SingleProduct from "../components/SingleProduct";
import Cart from "../containers/Cart";
class ProductDetails extends Component {
  componentDidMount() {}
  render() {
    const { id } = this.props.match.params;
    const { activeCamera } = this.props;
    const product = activeCamera.find(c => c.sku === id);

    return (
      <div>
        <SingleProduct product={product} />
        {this.props.cart.length > 0 ? <Cart /> : null}
      </div>
    );
  }
}

const mapStateToPros = ({ cameras, cart }) => {
  return {
    activeCamera: cameras,
    cart
  };
};

export default connect(mapStateToPros)(ProductDetails);
