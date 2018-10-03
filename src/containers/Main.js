import React, { Component } from "react";
import { fetchItems } from "../actions/index";
import Product from "../components/Product";

import { connect } from "react-redux";
class Main extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    console.log(this.props.cameras);
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
const mapStateToPro = ({ cameras }) => {
  return {
    cameras: cameras
  };
};

export default connect(
  mapStateToPro,
  { fetchItems }
)(Main);
