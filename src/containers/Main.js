import React, { Component } from "react";
import { fetchItems } from "../actions/index";
import Product from "../components/Product";

import { connect } from "react-redux";
class Main extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <div>
        <h1> Main </h1>
        {this.props.cameras.map(camera => (
          <Product key={camera.sku} camera={camera} />
        ))}
      </div>
    );
  }
}
const mapStateToPro = ({ cameras, cart }) => {
  return {
    cameras: cameras,
    cart: cart
  };
};

export default connect(
  mapStateToPro,
  { fetchItems }
)(Main);
